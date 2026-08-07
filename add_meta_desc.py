with open("src/i18n/ui.ts", "r", encoding="utf-8") as f:
    content = f.read()

new_entry = "  'product.meta_desc': { en: 'Check compatibility, specifications, MOQ and indicative pricing for this evaporative air cooler replacement part, then request a quote.', ar: '\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u062a\u0648\u0627\u0641\u0642 \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0648\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u062a\u0633\u0639\u064a\u0631 \u0627\u0644\u062a\u0642\u0631\u064a\u0628\u064a \u0644\u0642\u0637\u0639\u0629 \u063a\u064a\u0627\u0631 \u0645\u0628\u0631\u062f \u0627\u0644\u0647\u0648\u0627\u0621 \u0627\u0644\u062a\u0628\u062e\u064a\u0631\u064a \u0647\u0630\u0647\u060c \u062b\u0645 \u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631.', es: 'Verifique compatibilidad, especificaciones, MOQ y precios indicativos para este repuesto de enfriador de aire evaporativo, luego solicite una cotizaci\u00f3n.' },\n"

marker = "};\n\nexport default ui;"
content = content.replace(marker, new_entry + marker)
with open("src/i18n/ui.ts", "w", encoding="utf-8") as f:
    f.write(content)
print("Added product.meta_desc translation")
