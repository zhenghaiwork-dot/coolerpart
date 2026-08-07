import os

with open('src/i18n/ui.ts', 'r', encoding='utf-8') as f:
    content = f.read()

with open('translations_clean.txt', 'r', encoding='utf-8') as f:
    new_entries = f.read().rstrip()

# Find the last occurrence of "};\n" before "export default"
marker = "};\n\nexport default ui;"
if marker in content:
    content = content.replace(marker, new_entries + "\n" + marker)
    with open('src/i18n/ui.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Inserted successfully, new line count:", content.count("\n"))
else:
    print("Marker not found! Trying alternative...")
    # Try just the closing brace
    idx = content.rfind("};")
    if idx > 0:
        # Check what follows
        after = content[idx:]
        print("Found at index", idx, "Content after:", repr(after[:50]))
