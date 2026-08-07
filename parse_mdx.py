import os, re

spec_labels = set()
features_list = []
cat_type = {}

for f in sorted(os.listdir('src/content/products')):
    if not f.endswith('.mdx'): continue
    path = os.path.join('src/content/products', f)
    with open(path, encoding='utf-8') as fh:
        content = fh.read()

    parts = content.split('---', 2)
    if len(parts) < 3: continue
    fm = parts[1]

    # Extract category
    cat_m = re.search(r'^category:\s*(.+)$', fm, re.MULTILINE)
    type_m = re.search(r'^productTypeSlug:\s*(.+)$', fm, re.MULTILINE)
    slug_m = re.search(r'^slug:\s*(.+)$', fm, re.MULTILINE)
    if cat_m and type_m:
        cat = cat_m.group(1).strip()
        ts = type_m.group(1).strip()
        cat_type[cat] = ts

    # Extract specs labels
    for m in re.finditer(r'- label:\s*(.+?)(?:\n|$)', fm):
        spec_labels.add(m.group(1).strip())

    # Extract features (if any)
    slug = slug_m.group(1).strip() if slug_m else ''
    # Find features section - look for "features:" followed by list items
    feat_match = re.search(r'^features:\s*\n((?:  - .+\n(?:    .+\n)*)+)', fm, re.MULTILINE)
    if feat_match:
        feat_text = feat_match.group(1)
        for feat_m in re.finditer(r'title:\s*(.+?)\n\s*description:\s*(.+?)(?:\n|$)', feat_text):
            features_list.append((slug, feat_m.group(1).strip(), feat_m.group(2).strip()[:80]))

print('=== Unique spec labels ({}) ==='.format(len(spec_labels)))
for l in sorted(spec_labels):
    print(f'  {l}')

print()
print('=== Category -> ProductTypeSlug mapping ({} unique cats) ==='.format(len(cat_type)))
for c, t in sorted(cat_type.items()):
    print('  "{}" -> {}'.format(c, t))

print()
print('=== Features ({} total) ==='.format(len(features_list)))
for slug, title, desc in features_list:
    print(f'  [{slug}] {title}: {desc}')
