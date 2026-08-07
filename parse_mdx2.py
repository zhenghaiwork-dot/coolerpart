import os, re

spec_values_by_label = {}
compat_items = set()

for f in sorted(os.listdir('src/content/products')):
    if not f.endswith('.mdx'): continue
    path = os.path.join('src/content/products', f)
    with open(path, encoding='utf-8') as fh:
        content = fh.read()

    parts = content.split('---', 2)
    if len(parts) < 3: continue
    fm = parts[1]

    # Extract specs - parse label/value pairs
    in_specs = False
    current_label = None
    for line in fm.split('\n'):
        if line.strip().startswith('specs:'):
            in_specs = True
            continue
        if in_specs:
            if line.startswith('  - label:'):
                current_label = line.replace('  - label:', '').strip()
            elif line.startswith('    value:') and current_label:
                val = line.replace('    value:', '').strip().strip('"')
                if current_label not in spec_values_by_label:
                    spec_values_by_label[current_label] = set()
                spec_values_by_label[current_label].add(val)
            elif not line.startswith(' ') and not line.startswith('\t'):
                in_specs = False
                current_label = None

    # Extract compatibility items
    in_compat = False
    for line in fm.split('\n'):
        if line.strip().startswith('compatibility:'):
            in_compat = True
            continue
        if in_compat:
            if line.strip().startswith('- '):
                val = line.strip()[2:].strip().strip('"')
                compat_items.add(val)
            elif not line.startswith(' ') and not line.startswith('\t'):
                in_compat = False

print('=== Spec values by label (only non-numeric/descriptive ones) ===')
for label in sorted(spec_values_by_label.keys()):
    vals = sorted(spec_values_by_label[label])
    # Filter out pure numbers/dimensions
    descriptive = [v for v in vals if not re.match(r'^[\d\s\.\/x\-\"\\]+', v) and not re.match(r'^[\d\-\/\s]+V', v) and not re.match(r'^[\d\-\/\s]+Hz', v)]
    if descriptive:
        print(f'  [{label}]:')
        for v in descriptive:
            print(f'    "{v}"')

print()
print('=== All unique compatibility items ({}) ==='.format(len(compat_items)))
for c in sorted(compat_items):
    print(f'  {c}')
