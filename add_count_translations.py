import os

with open('src/i18n/ui.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_entries = """  // ── Product Count & Misc Translations ──
  'area.product_count': { en: '{count} products', ar: '{count} منتجات', es: '{count} productos' },
  'area.product_count_one': { en: '{count} product', ar: '{count} منتج', es: '{count} producto' },
  'compat_spec.matching_count': { en: '{count} matching products found', ar: '{count} منتجات مطابقة', es: '{count} productos coincidentes encontrados' },
"""

marker = "};\n\nexport default ui;"
content = content.replace(marker, new_entries + marker)
with open('src/i18n/ui.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('Added product count translations')
