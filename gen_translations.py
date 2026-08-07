#!/usr/bin/env python3
"""Generate ui.ts translation entries for spec labels, spec values, compatibility items, and misc UI strings."""

# ═══════════════════════════════════════════════════
# SPEC LABELS (78 unique)
# ═══════════════════════════════════════════════════
spec_labels = {
    "Adjustment": ("التعبير", "Ajuste"),
    "Aux": ("مساعد", "Auxiliar"),
    "Base": ("القاعدة", "Base"),
    "Bearing": ("المحمل", "Rodamiento"),
    "Blades": ("الريش", "Aspas"),
    "Bore": ("الثقب", "Perforación"),
    "Brake": ("الفرامل", "Freno"),
    "Cable": ("الكابل", "Cable"),
    "Capacitance": ("السعة", "Capacitancia"),
    "Capacitor": ("المكثف", "Capacitor"),
    "Capacity": ("السعة", "Capacidad"),
    "Coil": ("الملف", "Bobina"),
    "Compatible Pad Size": ("حجم الوسادة المتوافق", "Tamaño de Panel Compatible"),
    "Connection": ("التوصيل", "Conexión"),
    "Contacts": ("الملامسات", "Contactos"),
    "Contents": ("المحتويات", "Contenido"),
    "Control": ("التحكم", "Control"),
    "Cores": ("النوى", "Núcleos"),
    "Cracking Pressure": ("ضغط الفتح", "Presión de Apertura"),
    "Diameter": ("القطر", "Diámetro"),
    "Dimensions": ("الأبعاد", "Dimensiones"),
    "Display": ("العرض", "Pantalla"),
    "Drain": ("التصريف", "Drenaje"),
    "Filtration": ("الترشيح", "Filtración"),
    "Finish": ("التشطيب", "Acabado"),
    "Flow": ("التدفق", "Flujo"),
    "Flow Rate": ("معدل التدفق", "Caudal"),
    "Flute Angle": ("زاوية التموج", "Ángulo de Flauta"),
    "Frequency": ("التردد", "Frecuencia"),
    "Functions": ("الوظائف", "Funciones"),
    "Fuse Size": ("حجم المنصهر", "Tamaño de Fusible"),
    "Hole Spacing": ("تباعد الثقوب", "Espaciado de Agujeros"),
    "Inlet/Outlet": ("المدخل/المخرج", "Entrada/Salida"),
    "Length": ("الطول", "Longitud"),
    "Lift Grade": ("درجة الرفع", "Grado de Elevación"),
    "Load Capacity": ("سعة الحمل", "Capacidad de Carga"),
    "Material": ("المادة", "Material"),
    "Max Head": ("أقصى ارتفاع", "Altura Máxima"),
    "Max Load": ("أقصى حمل", "Carga Máxima"),
    "Max Pressure": ("أقصى ضغط", "Presión Máxima"),
    "Mesh": ("الشبكة", "Malla"),
    "Mesh Size": ("حجم الشبكة", "Tamaño de Malla"),
    "Mount": ("التركيب", "Montaje"),
    "Mounting": ("التركيب", "Montaje"),
    "Mounting Type": ("نوع التركيب", "Tipo de Montaje"),
    "Outlet": ("المخرج", "Salida"),
    "Outlets": ("المخارج", "Salidas"),
    "Output": ("الخرج", "Salida"),
    "Pack": ("العبوة", "Paquete"),
    "Positions": ("المواضع", "Posiciones"),
    "Power": ("القدرة", "Potencia"),
    "Profile": ("الملف", "Perfil"),
    "Quantity": ("الكمية", "Cantidad"),
    "RPM": ("دورة/دقيقة", "RPM"),
    "Range": ("النطاق", "Rango"),
    "Rating": ("التصنيف", "Clasificación"),
    "Reset": ("إعادة الضبط", "Reinicio"),
    "Service Life": ("العمر الافتراضي", "Vida Útil"),
    "Shaft Bore": ("ثقب العمود", "Perforación del Eje"),
    "Shaft Diameter": ("قطر العمود", "Diámetro del Eje"),
    "Size": ("الحجم", "Tamaño"),
    "Sizes": ("الأحجام", "Tamaños"),
    "Spray Angle": ("زاوية الرش", "Ángulo de Rociado"),
    "Terminals": ("الأطراف", "Terminales"),
    "Thickness": ("السماكة", "Grosor"),
    "Thread": ("الخيط", "Rosca"),
    "Thread Size": ("حجم الخيط", "Tamaño de Rosca"),
    "Trip Temp": ("حرارة الفصل", "Temperatura de Disparo"),
    "Type": ("النوع", "Tipo"),
    "Types": ("الأنواع", "Tipos"),
    "Voltage": ("الجهد", "Voltaje"),
    "Wall Thickness": ("سماكة الجدار", "Grosor de Pared"),
    "Washable": ("قابل للغسل", "Lavable"),
    "Wheel Diameter": ("قطر العجلة", "Diámetro de Rueda"),
    "Wheel Size": ("حجم العجلة", "Tamaño de Rueda"),
    "Width": ("العرض", "Ancho"),
    "Wire Size": ("حجم السلك", "Tamaño de Cable"),
    "Wires": ("الأسلاك", "Cables"),
}

# ═══════════════════════════════════════════════════
# SPEC VALUES (translatable descriptive values)
# ═══════════════════════════════════════════════════
spec_values = {
    "Manual Horizontal/Vertical": ("يدوي أفقي/عمودي", "Manual Horizontal/Vertical"),
    "Rubber Pad": ("وسادة مطاطية", "Almohadilla de Goma"),
    "Dual Locking": ("قفل مزدوج", "Doble Bloqueo"),
    "Push-fit / Threaded": ("دفع-تركيب / ملولب", "Push-fit / Roscado"),
    "Cleaner + Brushes + Cloths": ("منظف + فرش + قطع قماش", "Limpiador + Cepillos + Paños"),
    "M4/M5/M6 Assorted": ("مجموعة M4/M5/M6", "Surtido M4/M5/M6"),
    "Rotary Knob": ("مقبض دوار", "Perilla Rotatoria"),
    "LED Indicator": ("مؤشر LED", "Indicador LED"),
    "Powder Coated": ("مطلي بالبودرة", "Recubierto en Polvo"),
    "Zinc Plated": ("مطلي بالزنك", "Galvanizado en Zinc"),
    "Quarterly Use": ("استخدام ربع سنوي", "Uso Trimestral"),
    "Pump + Fan + Fill": ("مضخة + مروحة + تعبئة", "Bomba + Ventilador + Llenado"),
    "Low Head": ("رأس منخفض", "Cabezal Bajo"),
    "ABS": ("ABS", "ABS"),
    "ABS / PP": ("ABS / PP", "ABS / PP"),
    "Brass / Plastic": ("نحاس / بلاستيك", "Latón / Plástico"),
    "Cellulose / Paper": ("سليلوز / ورق", "Celulosa / Papel"),
    "Cellulose Paper": ("ورق سليلوز", "Papel Celulosa"),
    "Ceramic / Carbon": ("سيراميك / كربون", "Cerámica / Carbono"),
    "EPDM Rubber": ("مطاط EPDM", "Caucho EPDM"),
    "Engineering Plastic": ("بلاستيك هندسي", "Plástico de Ingeniería"),
    "Flexible PVC": ("PVC مرن", "PVC Flexible"),
    "Galvanized Steel": ("فولاذ مجلفن", "Acero Galvanizado"),
    "Natural Rubber": ("مطاط طبيعي", "Caucho Natural"),
    "Non-woven Fabric": ("قماش غير منسوج", "Tejido No Tejido"),
    "Nylon / Stainless Steel": ("نايلون / فولاذ مقاوم للصدأ", "Nailon / Acero Inoxidable"),
    "PP": ("PP", "PP"),
    "PP + O-ring": ("PP + حلقة O", "PP + Anillo O"),
    "PP + Rubber Seal": ("PP + ختم مطاطي", "PP + Sello de Goma"),
    "PP / ABS": ("PP / ABS", "PP / ABS"),
    "PP / HDPE": ("PP / HDPE", "PP / HDPE"),
    "PP Body": ("جسم PP", "Cuerpo PP"),
    "PP Melt-blown": ("PP منفوخ ذائب", "PP Soplado en Fundido"),
    "PVC": ("PVC", "PVC"),
    "PVC / Brass": ("PVC / نحاس", "PVC / Latón"),
    "PVC Reinforced": ("PVC مقوى", "PVC Reforzado"),
    "PVC Sheet": ("ورق PVC", "Lámina PVC"),
    "Plastic / Metal": ("بلاستيك / معدن", "Plástico / Metal"),
    "Rubber / Nylon": ("مطاط / نايلون", "Caucho / Nailon"),
    "Silicone / EPDM": ("سيليكون / EPDM", "Silicona / EPDM"),
    "Stainless Steel": ("فولاذ مقاوم للصدأ", "Acero Inoxidable"),
    "Stainless Steel / Nylon": ("فولاذ مقاوم للصدأ / نايلون", "Acero Inoxidable / Nailon"),
    "Steel Wire": ("سلك فولاذي", "Alambre de Acero"),
    "B3 Foot": ("B3 قاعدة", "B3 Pie"),
    "Panel Screw": ("برغي لوحة", "Tornillo de Panel"),
    "Tank Side Mount": ("تركيب جانبي للخزان", "Montaje Lateral de Tanque"),
    "B3 (Foot Mount)": ("B3 (تركيب بالقاعدة)", "B3 (Montaje de Pie)"),
    "B5 (Flange Mount)": ("B5 (تركيب بالشفة)", "B5 (Montaje de Brida)"),
    "Rectangular Flange": ("شفة مستطيلة", "Brida Rectangular"),
    "NC / NO Selectable": ("NC / NO قابل للاختيار", "NC / NO Seleccionable"),
    "Bell-mouth": ("فم على شكل جرس", "Boca de Campana"),
    "S-Curve": ("منحنى S", "Curva S"),
    "Assorted Set": ("مجموعة متنوعة", "Juego Surtido"),
    "Automatic": ("تلقائي", "Automático"),
    "Pre-crimped": ("مجعد مسبقاً", "Pre-crimped"),
    "Ball Valve": ("صمام كروي", "Válvula de Bola"),
    "Float + Overflow Pipe": ("عوامة + أنبوب فيضان", "Flotador + Tubería de Desbordamiento"),
    "Hinged with Latch": ("مفصلي بمزلاج", "Articulado con Pestillo"),
    "Mechanical Float": ("عوامة ميكانيكية", "Flotador Mecánico"),
    "Mechanical Seal": ("ختم ميكانيكي", "Sello Mecánico"),
    "Motor Run Capacitor": ("مكثف تشغيل محرك", "Capacitor de Marcha de Motor"),
    "NTC 10K\u03a9": ("NTC 10K\u03a9", "NTC 10K\u03a9"),
    "Normally Closed": ("مغلق عادة", "Normalmente Cerrado"),
    "Pillow Block": ("كتادة وسادة", "Bloque de Almohadilla"),
    "Reed Switch + Magnetic Float": ("مفتاح ريد + عوامة مغناطيسية", "Interruptor Reed + Flotador Magnético"),
    "Snap-fit": ("تركيب بالنقر", "Encaje a Presión"),
    "Straight Coupling": ("وصلة مستقيمة", "Acoplamiento Recto"),
    "Universal L-Bracket": ("قاعدة L شاملة", "Soporte en L Universal"),
    "Elbow + Tee": ("كوع + تي", "Codo + Tee"),
    "Yes": ("نعم", "Sí"),
}

# ═══════════════════════════════════════════════════
# COMPATIBILITY ITEMS (translatable descriptive ones)
# ═══════════════════════════════════════════════════
compat_items = {
    "All Cooler Types": ("جميع أنواع المبردات", "Todos los Tipos de Enfriadores"),
    "B3 Foot Mount": ("تركيب B3 بالقاعدة", "Montaje de Pie B3"),
    "B5 Flange Mount": ("تركيب B5 بالشفة", "Montaje de Brida B5"),
    "Control Board Compatible": ("متوافق مع لوحة التحكم", "Compatible con Placa de Control"),
    "DIN Rail": ("قضيب DIN", "Riel DIN"),
    "Drain Port Compatible": ("متوافق مع فتحة التصريف", "Compatible con Puerto de Drenaje"),
    "Hinged Mount": ("تركيب مفصلي", "Montaje Articulado"),
    "Large Cabinet Coolers": ("مبردات خزائنية كبيرة", "Enfriadores de Gabinete Grandes"),
    "Most Cabinet Coolers": ("معظم المبردات الخزائنية", "La Mayoría de Enfriadores de Gabinete"),
    "Most Portable Coolers": ("معظم المبردات المحمولة", "La Mayoría de Enfriadores Portátiles"),
    "Multiple Sizes": ("أحجام متعددة", "Múltiples Tamaños"),
    "NTC 10K Input": ("مدخل NTC 10K", "Entrada NTC 10K"),
    "Panel Mount": ("تركيب لوحة", "Montaje de Panel"),
    "Pre-drilled Mounting": ("تركيب بمسامير مثقوبة مسبقاً", "Montaje Pre-perforado"),
    "Push-fit": ("دفع-تركيب", "Push-fit"),
    "Push-fit Connection": ("توصيل دفع-تركيب", "Conexión Push-fit"),
    "Push-fit Type": ("نوع دفع-تركيب", "Tipo Push-fit"),
    "Self-adhesive": ("ذاتي الالتصاق", "Autoadhesivo"),
    "Single Phase": ("طور واحد", "Monofásico"),
    "Snap-disc Type": ("نوع قرص النقر", "Tipo Disco de Ruptura"),
    "Snap-fit Mount": ("تركيب بالنقر", "Montaje de Encaje"),
    "Stainless Steel": ("فولاذ مقاوم للصدأ", "Acero Inoxidable"),
    "Standard Air Outlet": ("مخرج هواء قياسي", "Salida de Aire Estándar"),
    "Standard Base Frame": ("إطار قاعدة قياسي", "Marco de Base Estándar"),
    "Standard Blower Housing": ("هيكل منفاخ قياسي", "Carcasa de Soplador Estándar"),
    "Standard Cabinet": ("خزانة قياسية", "Gabinete Estándar"),
    "Standard Cabinet Base": ("قاعدة خزانة قياسية", "Base de Gabinete Estándar"),
    "Standard Cabinet Frame": ("إطار خزانة قياسي", "Marco de Gabinete Estándar"),
    "Standard Control Board": ("لوحة تحكم قياسية", "Placa de Control Estándar"),
    "Standard Cooler Inlet": ("مدخل مبرد قياسي", "Entrada de Enfriador Estándar"),
    "Standard DIN Rail": ("قضيب DIN قياسي", "Riel DIN Estándar"),
    "Standard Distribution Bar": ("شريط توزيع قياسي", "Barra de Distribución Estándar"),
    "Standard Distribution Pipe": ("أنبوب توزيع قياسي", "Tubería de Distribución Estándar"),
    "Standard Drain Port": ("فتحة تصريف قياسية", "Puerto de Drenaje Estándar"),
    "Standard Fan Frame": ("إطار مروحة قياسي", "Marco de Ventilador Estándar"),
    "Standard Fan Housing": ("هيكل مروحة قياسي", "Carcasa de Ventilador Estándar"),
    "Standard Filter Frame": ("إطار مرشح قياسي", "Marco de Filtro Estándar"),
    "Standard Filter Housing": ("هيكل مرشح قياسي", "Carcasa de Filtro Estándar"),
    "Standard Fittings": ("توصيلات قياسية", "Accesorios Estándar"),
    "Standard Frame Mount": ("تركيب إطار قياسي", "Montaje de Marco Estándar"),
    "Standard Frame Size": ("حجم إطار قياسي", "Tamaño de Marco Estándar"),
    "Standard Housing": ("هيكل قياسي", "Carcasa Estándar"),
    "Standard Inlet Fitting": ("توصيل مدخل قياسي", "Accesorio de Entrada Estándar"),
    "Standard Motor": ("محرك قياسي", "Motor Estándar"),
    "Standard Motor Circuit": ("دائرة محرك قياسية", "Circuito de Motor Estándar"),
    "Standard Mounting Holes": ("ثقوب تركيب قياسية", "Agujeros de Montaje Estándar"),
    "Standard Pad Frame": ("إطار وسادة قياسي", "Marco de Panel Estándar"),
    "Standard Panel Cutout": ("فتحة لوحة قياسية", "Recorte de Panel Estándar"),
    "Standard Panel Edge": ("حافة لوحة قياسية", "Borde de Panel Estándar"),
    "Standard Pipe Fittings": ("توصيلات أنابيب قياسية", "Accesorios de Tubería Estándar"),
    "Standard Pump Body": ("جسم مضخة قياسي", "Cuerpo de Bomba Estándar"),
    "Standard Pump Housing": ("هيكل مضخة قياسي", "Carcasa de Bomba Estándar"),
    "Standard Sump": ("حوض تجميع قياسي", "Sumidero Estándar"),
    "Standard Tank Mount": ("تركيب خزان قياسي", "Montaje de Tanque Estándar"),
    "Standard Tank Outlet": ("مخرج خزان قياسي", "Salida de Tanque Estándar"),
    "Standard Water Tank": ("خزان مياه قياسي", "Tanque de Agua Estándar"),
    "Threaded Connection": ("توصيل ملولب", "Conexión Roscada"),
    "Threaded Outlet": ("مخرج ملولب", "Salida Roscada"),
    "Universal": ("شامل", "Universal"),
    "Universal Base Frame": ("إطار قاعدة شامل", "Marco de Base Universal"),
    "Universal Cooler Fit": ("ملاءمة مبرد شاملة", "Ajuste Universal de Enfriador"),
    "Universal Fit": ("ملاءمة شاملة", "Ajuste Universal"),
    "Universal Fittings": ("توصيلات شاملة", "Accesorios Universales"),
    "Universal Frame Fit": ("ملاءمة إطار شاملة", "Ajuste Universal de Marco"),
    "Universal Mounting": ("تركيب شامل", "Montaje Universal"),
    "Universal Mounting Bracket": ("قاعدة تركيب شاملة", "Soporte de Montaje Universal"),
    "Universal Water Level": ("مستوى مياه شامل", "Nivel de Agua Universal"),
}

# ═══════════════════════════════════════════════════
# MISC UI STRINGS
# ═══════════════════════════════════════════════════
misc_strings = {
    "product.meta_title_suffix": ("Evaporative Air Cooler Replacement Part", "قطعة غيار بديلة لمبرد الهواء التبخيري", "Repuesto para Enfriador de Aire Evaporativo"),
    "product.view_image": ("View image {n}", "عرض الصورة {n}", "Ver imagen {n}"),
    "type.meta_title_suffix": ("for Evaporative Air Coolers | Replacement Parts", "لمبردات الهواء التبخيرية | قطع غيار بديلة", "para Enfriadores de Aire Evaporativos | Repuestos"),
    "type.h1_suffix": ("for Evaporative Air Coolers", "لمبردات الهواء التبخيرية", "para Enfriadores de Aire Evaporativos"),
    "type.fallback_desc": ("Browse compatible {name} for evaporative cooler systems.", "تصفح {name} المتوافقة لأنظمة مبردات الهواء التبخيرية.", "Explore {name} compatibles para sistemas de enfriadores evaporativos."),
    "type.product_count_one": ("{count} product", "{count} منتج", "{count} producto"),
    "type.product_count_multi": ("{count} products", "{count} منتجات", "{count} productos"),
    "type.products_heading": ("{name} Products", "منتجات {name}", "Productos de {name}"),
    "type.meta_desc": ("Browse compatible {name} for evaporative air cooler replacement and repair. Compare interface, dimensions and electrical specifications, then request a bulk RFQ.", "تصفح {name} المتوافقة لاستبدال وإصلاح مبردات الهواء التبخيرية. قارن الواجهة والأبعاد والمواصفات الكهربائية، ثم اطلب عرض سعر جملة.", "Explore {name} compatibles para reemplazo y reparación de enfriadores de aire evaporativos. Compare interfaz, dimensiones y especificaciones eléctricas, luego solicite una cotización al por mayor."),
}

# ═══════════════════════════════════════════════════
# GENERATE UI.TS ENTRIES
# ═══════════════════════════════════════════════════

def sanitize_key(text):
    """Convert text to a safe key: lowercase, replace non-alphanumeric with underscore."""
    import re
    return re.sub(r'[^a-z0-9]+', '_', text.lower()).strip('_')

print("  // ── Spec Label Translations (78 labels) ──")
for label in sorted(spec_labels.keys()):
    ar, es = spec_labels[label]
    key = sanitize_key(label)
    print(f"  'spec_label.{key}': {{ en: '{label}', ar: '{ar}', es: '{es}' }},")

print()
print("  // ── Spec Value Translations (descriptive values) ──")
for value in sorted(spec_values.keys()):
    ar, es = spec_values[value]
    key = sanitize_key(value)
    # Escape quotes in value
    safe_value = value.replace("'", "\\'")
    safe_ar = ar.replace("'", "\\'")
    safe_es = es.replace("'", "\\'")
    print(f"  'spec_value.{key}': {{ en: '{safe_value}', ar: '{safe_ar}', es: '{safe_es}' }},")

print()
print("  // ── Compatibility Item Translations ──")
for item in sorted(compat_items.keys()):
    ar, es = compat_items[item]
    key = sanitize_key(item)
    safe_item = item.replace("'", "\\'")
    safe_ar = ar.replace("'", "\\'")
    safe_es = es.replace("'", "\\'")
    print(f"  'compat.{key}': {{ en: '{safe_item}', ar: '{safe_ar}', es: '{safe_es}' }},")

print()
print("  // ── Misc UI String Translations ──")
for key, (en, ar, es) in misc_strings.items():
    safe_en = en.replace("'", "\\'")
    safe_ar = ar.replace("'", "\\'")
    safe_es = es.replace("'", "\\'")
    print(f"  '{key}': {{ en: '{safe_en}', ar: '{safe_ar}', es: '{safe_es}' }},")
