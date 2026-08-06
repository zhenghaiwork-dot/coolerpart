// ── EVAPFit i18n Translation Dictionary ──
// All UI strings for en / ar / es
// Each key maps to a record with locale → translated string

export const languages: Record<string, { label: string; dir: 'ltr' | 'rtl'; code: string }> = {
  en: { label: 'English', dir: 'ltr', code: 'en-US' },
  ar: { label: 'العربية', dir: 'rtl', code: 'ar-SA' },
  es: { label: 'Español', dir: 'ltr', code: 'es-MX' },
};

export const defaultLang = 'en';
export const supportedLocales = ['en', 'ar', 'es'] as const;
export type Locale = (typeof supportedLocales)[number];

type TranslationDict = Record<string, Record<Locale, string>>;

const ui: TranslationDict = {
  // ── Site-wide ──
  'site.name': {
    en: 'EVAPFit',
    ar: 'إيفاب فيت',
    es: 'EVAPFit',
  },
  'site.tagline': {
    en: 'Evaporative Air Cooler Components & Parts',
    ar: 'مكونات وقطع غيار مبردات الهواء التبخيرية',
    es: 'Componentes y Refacciones para Enfriadores de Aire Evaporativos',
  },
  'site.direct_factory': {
    en: 'Direct Factory Supply',
    ar: 'توريد مباشر من المصنع',
    es: 'Suministro Directo de Fábrica',
  },
  'site.iso_certified': {
    en: 'ISO 9001 Certified',
    ar: 'حاصل على شهادة ISO 9001',
    es: 'Certificado ISO 9001',
  },
  'site.exports': {
    en: 'Exports to 30+ Countries',
    ar: 'تصدير إلى أكثر من 30 دولة',
    es: 'Exportamos a más de 30 Países',
  },
  'site.h24_response': {
    en: '24h Response',
    ar: 'رد خلال 24 ساعة',
    es: 'Respuesta en 24h',
  },
  'site.warranty': {
    en: '12-Month Warranty',
    ar: 'ضمان 12 شهرًا',
    es: 'Garantía de 12 Meses',
  },

  // ── Navigation ──
  'nav.products': {
    en: 'Products',
    ar: 'المنتجات',
    es: 'Productos',
  },
  'nav.all_products': {
    en: 'All Products',
    ar: 'جميع المنتجات',
    es: 'Todos los Productos',
  },
  'nav.water_system': {
    en: 'Water System',
    ar: 'نظام المياه',
    es: 'Sistema de Agua',
  },
  'nav.evaporation_system': {
    en: 'Evaporation System',
    ar: 'نظام التبخير',
    es: 'Sistema de Evaporación',
  },
  'nav.air_system': {
    en: 'Air System',
    ar: 'نظام الهواء',
    es: 'Sistema de Aire',
  },
  'nav.electrical_controls': {
    en: 'Electrical & Controls',
    ar: 'النظام الكهربائي والتحكم',
    es: 'Eléctrico y Controles',
  },
  'nav.structure_mounting': {
    en: 'Structure & Mounting',
    ar: 'الهيكل والتركيب',
    es: 'Estructura y Montaje',
  },
  'nav.maintenance_consumables': {
    en: 'Maintenance & Consumables',
    ar: 'الصيانة والمواد الاستهلاكية',
    es: 'Mantenimiento y Consumibles',
  },
  'nav.compatibility': {
    en: 'Compatibility',
    ar: 'التوافق',
    es: 'Compatibilidad',
  },
  'nav.support': {
    en: 'Support',
    ar: 'الدعم الفني',
    es: 'Soporte',
  },
  'nav.inquiry': {
    en: 'Inquiry / Request Quote',
    ar: 'طلب عرض سعر',
    es: 'Solicitar Cotización',
  },
  'nav.how_to_identify': {
    en: 'How to Identify Parts',
    ar: 'كيفية تحديد القطع',
    es: 'Cómo Identificar Piezas',
  },
  'nav.rfq_guide': {
    en: 'RFQ Guide',
    ar: 'دليل طلب عرض السعر',
    es: 'Guía de Cotización',
  },
  'nav.sample_request': {
    en: 'Sample Request',
    ar: 'طلب عينة',
    es: 'Solicitar Muestra',
  },
  'nav.faq': {
    en: 'FAQ',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas Frecuentes',
  },
  'nav.guides': {
    en: 'Troubleshooting Guides',
    ar: 'أدلة استكشاف الأعطال',
    es: 'Guías de Solución de Problemas',
  },
  'nav.blog': {
    en: 'Blog',
    ar: 'المدونة',
    es: 'Blog',
  },
  'nav.company': {
    en: 'Company',
    ar: 'الشركة',
    es: 'Empresa',
  },
  'nav.about': {
    en: 'About Us',
    ar: 'من نحن',
    es: 'Quiénes Somos',
  },
  'nav.oem': {
    en: 'OEM & Customization',
    ar: 'تصنيع حسب الطلب (OEM)',
    es: 'OEM y Personalización',
  },
  'nav.quality': {
    en: 'Quality & Certifications',
    ar: 'الجودة والشهادات',
    es: 'Calidad y Certificaciones',
  },
  'nav.shipping': {
    en: 'Shipping & Delivery',
    ar: 'الشحن والتوصيل',
    es: 'Envíos y Entregas',
  },
  'nav.contact': {
    en: 'Contact',
    ar: 'اتصل بنا',
    es: 'Contacto',
  },
  'nav.terms': {
    en: 'Terms',
    ar: 'الشروط والأحكام',
    es: 'Términos',
  },
  'nav.privacy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية',
    es: 'Política de Privacidad',
  },

  // ── CTA Buttons ──
  'cta.request_quote': {
    en: 'Request Quote',
    ar: 'طلب عرض سعر',
    es: 'Solicitar Cotización',
  },
  'cta.browse_components': {
    en: 'Browse Components',
    ar: 'تصفح المكونات',
    es: 'Explorar Componentes',
  },
  'cta.start_rfq': {
    en: 'Start an RFQ',
    ar: 'ابدأ طلب عرض السعر',
    es: 'Iniciar Cotización',
  },
  'cta.send_rfq': {
    en: 'Send RFQ',
    ar: 'إرسال طلب عرض السعر',
    es: 'Enviar Cotización',
  },
  'cta.view_all_parts': {
    en: 'View all parts',
    ar: 'عرض جميع القطع',
    es: 'Ver Todas las Piezas',
  },
  'cta.view_system': {
    en: 'View system →',
    ar: 'عرض النظام ←',
    es: 'Ver sistema →',
  },
  'cta.explore_components': {
    en: 'Explore Components',
    ar: 'استكشاف المكونات',
    es: 'Explorar Componentes',
  },
  'cta.read_guide': {
    en: 'Read guide',
    ar: 'قراءة الدليل',
    es: 'Leer guía',
  },
  'cta.details': {
    en: 'Details',
    ar: 'التفاصيل',
    es: 'Detalles',
  },
  'cta.compatibility_guide': {
    en: 'Compatibility Guide',
    ar: 'دليل التوافق',
    es: 'Guía de Compatibilidad',
  },

  // ── Home Page ──
  'home.hero_title_1': {
    en: 'Evaporative Air Cooler',
    ar: 'قطع غيار مبردات الهواء',
    es: 'Refacciones para Enfriadores',
  },
  'home.hero_title_2': {
    en: 'Parts & Replacement Components',
    ar: 'التبخيرية وقطع الغيار',
    es: 'de Aire Evaporativos',
  },
  'home.hero_desc': {
    en: 'EVAPFit supplies interface-matched replacement parts for portable and cabinet evaporative air coolers. Search by system, electrical specs, or structure & mounting — no model number required.',
    ar: 'نوفر قطع غيار متوافقة لمبردات الهواء التبخيرية المحمولة والخزائنية. ابحث حسب النظام أو المواصفات الكهربائية أو الهيكل والتركيب — بدون الحاجة لرقم الموديل.',
    es: 'EVAPFit suministra refacciones compatibles por interfaz para enfriadores de aire evaporativos portátiles y de gabinete. Busque por sistema, especificaciones eléctricas o estructura y montaje — sin necesidad de número de modelo.',
  },
  'home.stats_parts': {
    en: 'parts',
    ar: 'قطعة',
    es: 'piezas',
  },
  'home.stats_types': {
    en: 'product types',
    ar: 'نوع منتج',
    es: 'tipos de producto',
  },
  'home.stats_systems': {
    en: 'systems',
    ar: 'أنظمة',
    es: 'sistemas',
  },
  'home.stats_countries': {
    en: '30+ countries',
    ar: 'أكثر من 30 دولة',
    es: 'más de 30 países',
  },
  'home.quick_match': {
    en: 'Quick Match',
    ar: 'مطابقة سريعة',
    es: 'Coincidencia Rápida',
  },
  'home.pick_system': {
    en: 'Pick a system to start',
    ar: 'اختر نظامًا للبدء',
    es: 'Elija un sistema para empezar',
  },
  'home.system_jump_desc': {
    en: 'Jump to the matching filter page with the right parts pre-loaded.',
    ar: 'انتقل إلى صفحة التصفية المناسبة مع القطع الصحيحة المحملة مسبقًا.',
    es: 'Vaya a la página de filtro correspondiente con las piezas correctas precargadas.',
  },
  'home.or_use_fast_filter': {
    en: 'Or use the fast filter below for Voltage / Power / RPM narrowing.',
    ar: 'أو استخدم الفلتر السريع أدناه لتضييق نطاق الجهد / القدرة / عدد الدورات.',
    es: 'O use el filtro rápido abajo para filtrar por Voltaje / Potencia / RPM.',
  },
  'home.browse_by_system': {
    en: 'Browse by System',
    ar: 'تصفح حسب النظام',
    es: 'Explorar por Sistema',
  },
  'home.pick_system_need': {
    en: 'Pick the system you need parts for',
    ar: 'اختر النظام الذي تحتاج قطعًا له',
    es: 'Elija el sistema para el que necesita piezas',
  },
  'home.or_match_by_compatibility': {
    en: 'Or match by compatibility',
    ar: 'أو طابق حسب التوافق',
    es: 'O buscar por compatibilidad',
  },
  'home.fast_filter_title': {
    en: 'Find the Right Component Fast',
    ar: 'اعثر على المكون المناسب بسرعة',
    es: 'Encuentre el Componente Correcto Rápidamente',
  },
  'home.narrow_by_electrical': {
    en: 'Narrow by electrical hard-matches',
    ar: 'تضييق حسب المطابقات الكهربائية الصارمة',
    es: 'Filtrar por coincidencias eléctricas',
  },
  'home.hard_thresholds_desc': {
    en: 'Three hard thresholds that determine if a motor or control part will physically work in your cooler.',
    ar: 'ثلاثة معايير صارمة تحدد ما إذا كان المحرك أو قطعة التحكم ستعمل فعليًا في مبردك.',
    es: 'Tres criterios estrictos que determinan si un motor o pieza de control funcionará físicamente en su enfriador.',
  },
  'home.filter_voltage': {
    en: 'Voltage',
    ar: 'الجهد الكهربائي',
    es: 'Voltaje',
  },
  'home.filter_voltage_desc': {
    en: 'Match electrical input. Hard threshold for motor compatibility.',
    ar: 'مطابقة المدخل الكهربائي. معيار صارم لتوافق المحرك.',
    es: 'Coincidencia de entrada eléctrica. Criterio estricto para compatibilidad de motor.',
  },
  'home.filter_voltage_cta': {
    en: 'Filter by Voltage',
    ar: 'تصفية حسب الجهد',
    es: 'Filtrar por Voltaje',
  },
  'home.filter_power': {
    en: 'Power (W)',
    ar: 'القدرة (واط)',
    es: 'Potencia (W)',
  },
  'home.filter_power_desc': {
    en: 'Match motor output. Critical for replacement motor pairing.',
    ar: 'مطابقة خرج المحرك. أمر بالغ الأهمية لاختيار المحرك البديل.',
    es: 'Coincidencia de potencia del motor. Crítico para emparejar el motor de repuesto.',
  },
  'home.filter_power_cta': {
    en: 'Filter by Power',
    ar: 'تصفية حسب القدرة',
    es: 'Filtrar por Potencia',
  },
  'home.filter_rpm': {
    en: 'RPM',
    ar: 'عدد الدورات (RPM)',
    es: 'RPM',
  },
  'home.filter_rpm_desc': {
    en: 'Match rotation speed. Direct swap requires identical RPM.',
    ar: 'مطابقة سرعة الدوران. يتطلب الاستبدال المباشر نفس عدد الدورات.',
    es: 'Coincidencia de velocidad de rotación. El reemplazo directo requiere RPM idénticas.',
  },
  'home.filter_rpm_cta': {
    en: 'Filter by RPM',
    ar: 'تصفية حسب عدد الدورات',
    es: 'Filtrar por RPM',
  },
  'home.popular_parts': {
    en: 'Popular Parts',
    ar: 'القطع الأكثر طلبًا',
    es: 'Piezas Populares',
  },
  'home.high_freq_parts': {
    en: 'High-frequency replacement parts',
    ar: 'قطع الغيار عالية التردد في الاستبدال',
    es: 'Refacciones de alta frecuencia de reemplazo',
  },
  'home.why_teams_choose': {
    en: 'Why teams choose EVAPFit',
    ar: 'لماذا تختار الفرق إيفاب فيت',
    es: 'Por qué los equipos eligen EVAPFit',
  },
  'home.rfq_built_around': {
    en: 'RFQ built around',
    ar: 'طلب عرض سعر مبني على',
    es: 'Cotización basada en',
  },
  'home.fitment_accuracy': {
    en: 'fitment accuracy',
    ar: 'دقة المطابقة',
    es: 'precisión de ajuste',
  },
  'home.trust_response': {
    en: 'Fast RFQ Response',
    ar: 'استجابة سريعة لطلبات عروض الأسعار',
    es: 'Respuesta Rápida a Cotizaciones',
  },
  'home.trust_response_desc': {
    en: 'Submit your inquiry list and receive pricing, availability, and lead time within 24 hours.',
    ar: 'أرسل قائمة استفساراتك واستلم الأسعار والتوفر والمهلة الزمنية خلال 24 ساعة.',
    es: 'Envíe su lista de consulta y reciba precios, disponibilidad y tiempo de entrega en 24 horas.',
  },
  'home.trust_fitment': {
    en: 'Exact Fitment Matching',
    ar: 'مطابقة دقيقة للتركيب',
    es: 'Coincidencia Exacta de Ajuste',
  },
  'home.trust_fitment_desc': {
    en: 'Interface, dimension, and electrical parameters verified before quoting. OEM-compatible parts.',
    ar: 'التحقق من الواجهة والأبعاد والمعايير الكهربائية قبل التسعير. قطع متوافقة مع المصنّع الأصلي.',
    es: 'Interfaz, dimensiones y parámetros eléctricos verificados antes de cotizar. Piezas compatibles con OEM.',
  },
  'home.trust_shipping': {
    en: 'Global Shipping & Support',
    ar: 'شحن ودعم عالمي',
    es: 'Envío y Soporte Global',
  },
  'home.trust_shipping_desc': {
    en: 'We export to 30+ countries. Flexible incoterms and consolidated shipping for bulk orders.',
    ar: 'نصدر إلى أكثر من 30 دولة. شروط تجارية مرنة وشحن موحد للطلبات بالجملة.',
    es: 'Exportamos a más de 30 países. Incoterms flexibles y envío consolidado para pedidos al por mayor.',
  },
  'home.tell_us_requirements': {
    en: 'Tell us your requirements',
    ar: 'أخبرنا بمتطلباتك',
    es: 'Cuéntenos sus requerimientos',
  },
  'home.start_rfq_60s': {
    en: 'Start an RFQ in 60 seconds',
    ar: 'ابدأ طلب عرض السعر في 60 ثانية',
    es: 'Inicie una Cotización en 60 segundos',
  },
  'home.paste_part_desc': {
    en: "Paste your existing part number, dimensions, or specs. We'll respond with pricing, MOQ, and lead time.",
    ar: 'ألصق رقم القطعة الحالي أو الأبعاد أو المواصفات. سنرد عليك بالتسعير والحد الأدنى للطلب والمهلة الزمنية.',
    es: 'Pegue su número de pieza existente, dimensiones o especificaciones. Le responderemos con precio, MOQ y tiempo de entrega.',
  },
  'home.form_part_desc': {
    en: 'Part description or spec',
    ar: 'وصف القطعة أو المواصفات',
    es: 'Descripción o especificación de la pieza',
  },
  'home.form_part_placeholder': {
    en: 'e.g. 110V 550W B3 foot mount motor, 12mm shaft, 6µF capacitor',
    ar: 'مثال: محرك 110 فولت 550 واط B3 قاعدة، عمود 12 مم، مكثف 6 ميكروفاراد',
    es: 'ej. Motor 110V 550W montaje B3, eje 12mm, capacitor 6µF',
  },
  'home.form_name': {
    en: 'Your name',
    ar: 'الاسم',
    es: 'Su nombre',
  },
  'home.form_name_placeholder': {
    en: 'Full name',
    ar: 'الاسم الكامل',
    es: 'Nombre completo',
  },
  'home.form_email': {
    en: 'Company email',
    ar: 'البريد الإلكتروني للشركة',
    es: 'Correo de la empresa',
  },
  'home.form_email_placeholder': {
    en: 'name@company.com',
    ar: 'name@company.com',
    es: 'nombre@empresa.com',
  },
  'home.or_full_form': {
    en: 'Or browse the full inquiry form with multiple parts.',
    ar: 'أو تصفح نموذج الاستفسار الكامل مع عدة قطع.',
    es: 'O explore el formulario completo de consulta con múltiples piezas.',
  },
  'home.full_inquiry_form': {
    en: 'full inquiry form',
    ar: 'نموذج الاستفسار الكامل',
    es: 'formulario completo de consulta',
  },
  'home.install_guides': {
    en: 'Installation & Compatibility Guides',
    ar: 'أدلة التركيب والتوافق',
    es: 'Guías de Instalación y Compatibilidad',
  },
  'home.help_before_rfq': {
    en: 'Help yourself before you RFQ',
    ar: 'ساعد نفسك قبل طلب عرض السعر',
    es: 'Ayúdese antes de cotizar',
  },
  'home.guide_identify': {
    en: 'How to Identify Your Part',
    ar: 'كيفية تحديد قطعتك',
    es: 'Cómo Identificar su Pieza',
  },
  'home.guide_identify_desc': {
    en: 'Step-by-step guide to identifying the exact replacement based on interface and dimensions.',
    ar: 'دليل خطوة بخطوة لتحديد القطعة البديلة الصحيحة بناءً على الواجهة والأبعاد.',
    es: 'Guía paso a paso para identificar el reemplazo exacto según interfaz y dimensiones.',
  },
  'home.guide_crossref': {
    en: 'Compatibility Cross-reference',
    ar: 'مرجع توافقي متقاطع',
    es: 'Referencia Cruzada de Compatibilidad',
  },
  'home.guide_crossref_desc': {
    en: 'Match by thread type, flange pattern, or electrical specs — no model number required.',
    ar: 'طابق حسب نوع السن أو نمط الشفة أو المواصفات الكهربائية — لا حاجة لرقم الموديل.',
    es: 'Coincida por tipo de rosca, patrón de brida o especificaciones eléctricas — sin número de modelo.',
  },
  'home.guide_install': {
    en: 'Installation & Specs',
    ar: 'التركيب والمواصفات',
    es: 'Instalación y Especificaciones',
  },
  'home.guide_install_desc': {
    en: 'Mounting types, torque specs, and wiring guides for each part category.',
    ar: 'أنواع التركيب ومواصفات العزم وأدلة التوصيل الكهربائي لكل فئة قطع.',
    es: 'Tipos de montaje, especificaciones de torque y guías de cableado para cada categoría.',
  },
  'home.guide_rfq': {
    en: 'RFQ Helper',
    ar: 'مساعد طلب عرض السعر',
    es: 'Asistente de Cotización',
  },
  'home.guide_rfq_desc': {
    en: 'What info to include in your inquiry for the fastest possible quote.',
    ar: 'ما المعلومات التي يجب تضمينها في استفسارك للحصول على أسرع عرض سعر.',
    es: 'Qué información incluir en su consulta para la cotización más rápida.',
  },
  'home.brand_title': {
    en: 'Industry-Tested.',
    ar: 'مُختبر صناعيًا.',
    es: 'Probado en la Industria.',
  },
  'home.brand_subtitle': {
    en: 'Procurement-Ready.',
    ar: 'جاهز للمشتريات.',
    es: 'Listo para Adquisiciones.',
  },
  'home.brand_tagline': {
    en: "Interface-matched parts sourced by procurement teams that don't have time for guesswork.",
    ar: 'قطع متوافقة بالمقاييس يوفرها فريق المشتريات الذي لا وقت لديه للتخمين.',
    es: 'Piezas compatibles por interfaz adquiridas por equipos de compras que no tienen tiempo para adivinanzas.',
  },
  'home.brand_p1': {
    en: 'EVAPFit exists because matching evaporative cooler parts by model number is unreliable. Our catalog organizes components by system, electrical specs, and structure & mounting — so you can find a compatible replacement from measurements alone.',
    ar: 'نحن موجودون لأن مطابقة قطع مبردات الهواء التبخيرية برقم الموديل غير موثوقة. ينظم كتالوجنا المكونات حسب النظام والمواصفات الكهربائية والهيكل والتركيب — لتجد البديل المتوافق من القياسات فقط.',
    es: 'EVAPFit existe porque hacer coincidir piezas de enfriadores evaporativos por número de modelo no es confiable. Nuestro catálogo organiza componentes por sistema, especificaciones eléctricas y estructura y montaje — para que encuentre un reemplazo compatible solo con mediciones.',
  },
  'home.brand_p2': {
    en: 'Every part listed ships with verified interface specs and OEM-equivalent tolerances. We support 30+ countries with consolidated bulk shipping and flexible incoterms.',
    ar: 'كل قطعة مدرجة تُشحن بمواصفات واجهة مُتحقق منها وتفاوتات مكافئة للتصنيع الأصلي. ندعم أكثر من 30 دولة بشحن موحد للطلبات الكبيرة وشروط تجارية مرنة.',
    es: 'Cada pieza listada se envía con especificaciones de interfaz verificadas y tolerancias equivalentes a OEM. Soportamos más de 30 países con envío consolidado al por mayor e incoterms flexibles.',
  },

  // ── Product Cards ──
  'product.moq': {
    en: 'MOQ',
    ar: 'الحد الأدنى للطلب',
    es: 'MOQ',
  },
  'product.sku_prefix_water': {
    en: 'WATER',
    ar: 'مياه',
    es: 'AGUA',
  },
  'product.sku_prefix_elec': {
    en: 'ELEC',
    ar: 'كهرباء',
    es: 'ELEC',
  },
  'product.sku_prefix_evap': {
    en: 'EVAP',
    ar: 'تبخير',
    es: 'EVAP',
  },
  'product.sku_prefix_air': {
    en: 'AIR',
    ar: 'هواء',
    es: 'AIRE',
  },
  'product.sku_prefix_struct': {
    en: 'STRUCT',
    ar: 'هيكل',
    es: 'ESTRUC',
  },
  'product.sku_prefix_maint': {
    en: 'MAINT',
    ar: 'صيانة',
    es: 'MANT',
  },
  'product.sku_prefix_compat': {
    en: 'COMPAT',
    ar: 'توافق',
    es: 'COMPAT',
  },

  // ── All Products Page ──
  'all_products.title': {
    en: 'All Products — Evaporative Cooler Replacement Parts Catalog',
    ar: 'جميع المنتجات — كتالوج قطع غيار مبردات الهواء التبخيرية',
    es: 'Todos los Productos — Catálogo de Refacciones para Enfriadores Evaporativos',
  },
  'all_products.heading': {
    en: 'Complete Parts Catalog',
    ar: 'كتالوج القطع الكامل',
    es: 'Catálogo Completo de Piezas',
  },
  'all_products.all_parts': {
    en: 'All Replacement Parts',
    ar: 'جميع قطع الغيار',
    es: 'Todas las Refacciones',
  },
  'all_products.desc': {
    en: 'Browse the full catalog of evaporative cooler components. Filter by system or search by name, spec, or keyword.',
    ar: 'تصفح الكتالوج الكامل لمكونات مبردات الهواء التبخيرية. صفِّ حسب النظام أو ابحث بالاسم أو المواصفات أو الكلمة المفتاحية.',
    es: 'Explore el catálogo completo de componentes para enfriadores evaporativos. Filtre por sistema o busque por nombre, especificación o palabra clave.',
  },
  'all_products.search_placeholder': {
    en: 'Search by name, spec, or keyword — e.g. 110V, pump, capacitor, B3 mount...',
    ar: 'ابحث بالاسم أو المواصفات أو الكلمة المفتاحية — مثال: 110V، مضخة، مكثف، B3...',
    es: 'Buscar por nombre, especificación o palabra clave — ej. 110V, bomba, capacitor, montaje B3...',
  },
  'all_products.direct_inquiry': {
    en: 'Direct inquiry — no checkout',
    ar: 'استفسار مباشر — بدون عربة شراء',
    es: 'Consulta directa — sin carrito de compra',
  },
  'all_products.showing': {
    en: 'Showing',
    ar: 'عرض',
    es: 'Mostrando',
  },
  'all_products.of': {
    en: 'of',
    ar: 'من أصل',
    es: 'de',
  },
  'all_products.matching': {
    en: 'parts matching',
    ar: 'قطعة تطابق',
    es: 'piezas que coinciden con',
  },
  'all_products.clear_search': {
    en: 'Clear search',
    ar: 'مسح البحث',
    es: 'Limpiar búsqueda',
  },
  'all_products.no_results': {
    en: 'No parts found',
    ar: 'لم يتم العثور على قطع',
    es: 'No se encontraron piezas',
  },
  'all_products.try_different': {
    en: 'Try a different keyword, or skip browsing and send your requirements directly.',
    ar: 'جرّب كلمة مفتاحية مختلفة، أو تخطَّ التصفح وأرسل متطلباتك مباشرة.',
    es: 'Intente con otra palabra clave, o evite navegar y envíe sus requerimientos directamente.',
  },
  'all_products.reset_search': {
    en: 'Reset search',
    ar: 'إعادة تعيين البحث',
    es: 'Restablecer búsqueda',
  },
  'all_products.send_rfq': {
    en: 'Send RFQ directly',
    ar: 'أرسل طلب عرض السعر مباشرة',
    es: 'Enviar Cotización Directamente',
  },

  // ── Inquiry / Basket ──
  'inquiry.page_title': {
    en: 'Request a Quote — EVAPFit',
    ar: 'طلب عرض سعر — إيفاب فيت',
    es: 'Solicitar Cotización — EVAPFit',
  },
  'inquiry.heading': {
    en: 'Request a Quote',
    ar: 'طلب عرض سعر',
    es: 'Solicitar Cotización',
  },
  'inquiry.basket_title': {
    en: 'Your Inquiry List',
    ar: 'قائمة استفساراتك',
    es: 'Su Lista de Consulta',
  },
  'inquiry.basket_empty': {
    en: 'No parts added yet. Browse products and click "Add" to build your inquiry list.',
    ar: 'لم تتم إضافة قطع بعد. تصفح المنتجات وانقر "إضافة" لبناء قائمة استفساراتك.',
    es: 'Aún no ha agregado piezas. Explore los productos y haga clic en "Agregar" para armar su lista.',
  },
  'inquiry.add_to_inquiry': {
    en: 'Add to Inquiry',
    ar: 'أضف إلى الاستفسار',
    es: 'Agregar a Consulta',
  },
  'inquiry.remove': {
    en: 'Remove',
    ar: 'إزالة',
    es: 'Quitar',
  },
  'inquiry.your_contact': {
    en: 'Your Contact Information',
    ar: 'معلومات الاتصال الخاصة بك',
    es: 'Su Información de Contacto',
  },
  'inquiry.full_name': {
    en: 'Full Name',
    ar: 'الاسم الكامل',
    es: 'Nombre Completo',
  },
  'inquiry.company': {
    en: 'Company Name',
    ar: 'اسم الشركة',
    es: 'Nombre de la Empresa',
  },
  'inquiry.email': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني',
    es: 'Correo Electrónico',
  },
  'inquiry.phone': {
    en: 'Phone / WhatsApp',
    ar: 'الهاتف / واتساب',
    es: 'Teléfono / WhatsApp',
  },
  'inquiry.country': {
    en: 'Country',
    ar: 'الدولة',
    es: 'País',
  },
  'inquiry.additional_notes': {
    en: 'Additional Notes or Requirements',
    ar: 'ملاحظات أو متطلبات إضافية',
    es: 'Notas o Requerimientos Adicionales',
  },
  'inquiry.submit': {
    en: 'Submit Inquiry',
    ar: 'إرسال الاستفسار',
    es: 'Enviar Consulta',
  },
  'inquiry.success_title': {
    en: 'Inquiry Submitted!',
    ar: 'تم إرسال الاستفسار!',
    es: '¡Consulta Enviada!',
  },
  'inquiry.success_desc': {
    en: 'We will review your request and respond within 24 hours.',
    ar: 'سنراجع طلبك ونرد عليك خلال 24 ساعة.',
    es: 'Revisaremos su solicitud y responderemos dentro de 24 horas.',
  },

  // ── System Area Labels ──
  'system.water_pump_power': {
    en: 'Water Pump & Power',
    ar: 'مضخة المياه والطاقة',
    es: 'Bomba de Agua y Potencia',
  },
  'system.filtration': {
    en: 'Filtration & Anti-clogging',
    ar: 'الترشيح ومنع الانسداد',
    es: 'Filtración y Anti-obstrucción',
  },
  'system.valves': {
    en: 'Valves & Water Control',
    ar: 'الصمامات والتحكم بالمياه',
    es: 'Válvulas y Control de Agua',
  },
  'system.distribution': {
    en: 'Water Distribution & Level Protection',
    ar: 'توزيع المياه وحماية المستوى',
    es: 'Distribución de Agua y Protección de Nivel',
  },
  'system.piping': {
    en: 'Piping & Connections',
    ar: 'الأنابيب والتوصيلات',
    es: 'Tuberías y Conexiones',
  },
  'system.tank_drainage': {
    en: 'Tank, Sump & Drainage',
    ar: 'الخزان وحوض التجميع والصرف',
    es: 'Tanque, Sumidero y Drenaje',
  },

  // ── Trust / Stats ──
  'stats.parts_catalog': {
    en: 'Parts in catalog',
    ar: 'قطعة في الكتالوج',
    es: 'Piezas en catálogo',
  },
  'stats.product_types': {
    en: 'Product types',
    ar: 'نوع منتج',
    es: 'Tipos de producto',
  },
  'stats.rfq_response': {
    en: 'RFQ response',
    ar: 'الرد على طلب عرض السعر',
    es: 'Respuesta a cotización',
  },
  'stats.countries_shipped': {
    en: 'Countries shipped',
    ar: 'دولة تم الشحن إليها',
    es: 'Países con envíos',
  },
  'stats.factory_since': {
    en: 'Factory Direct Since',
    ar: 'توريد مباشر من المصنع منذ',
    es: 'Venta Directa de Fábrica Desde',
  },
  'stats.compliance': {
    en: 'Compliance',
    ar: 'الامتثال للمعايير',
    es: 'Cumplimiento',
  },

  // ── Footer ──
  'footer.products': {
    en: 'Products',
    ar: 'المنتجات',
    es: 'Productos',
  },
  'footer.support': {
    en: 'Support',
    ar: 'الدعم الفني',
    es: 'Soporte',
  },
  'footer.company': {
    en: 'Company',
    ar: 'الشركة',
    es: 'Empresa',
  },
  'footer.copyright': {
    en: 'EVAPFit — Evaporative Air Cooler Components & Parts',
    ar: 'إيفاب فيت — مكونات وقطع غيار مبردات الهواء التبخيرية',
    es: 'EVAPFit — Componentes y Refacciones para Enfriadores de Aire Evaporativos',
  },

  // ── SEO / Meta ──
  'seo.default_title': {
    en: 'Evaporative Air Cooler Parts & Replacement Components | EVAPFit',
    ar: 'قطع غيار مبردات الهواء التبخيرية ومكونات الاستبدال | إيفاب فيت',
    es: 'Refacciones y Componentes para Enfriadores de Aire Evaporativos | EVAPFit',
  },
  'seo.default_desc': {
    en: 'Source compatible evaporative air cooler parts and replacement components, including pumps, motors, cooling pads, valves and controls. Match by interface, dimensions or electrical specifications and request a bulk RFQ.',
    ar: 'مصدر قطع غيار متوافقة لمبردات الهواء التبخيرية، بما في ذلك المضخات والمحركات ووسادات التبريد والصمامات ووحدات التحكم. طابق حسب الواجهة أو الأبعاد أو المواصفات الكهربائية واطلب عرض سعر بالجملة.',
    es: 'Obtenga refacciones y componentes compatibles para enfriadores de aire evaporativos, incluyendo bombas, motores, paneles de enfriamiento, válvulas y controles. Haga coincidir por interfaz, dimensiones o especificaciones eléctricas y solicite una cotización al por mayor.',
  },

  // ── Breadcrumbs ──
  'breadcrumb.home': {
    en: 'Home',
    ar: 'الرئيسية',
    es: 'Inicio',
  },

  // ── Use cases labels ──
  'usecases.label': {
    en: 'Use cases',
    ar: 'حالات الاستخدام',
    es: 'Casos de uso',
  },
  'usecases.water': {
    en: 'Portable & cabinet cooler sump circulation, distribution to cooling pads, automated water fill.',
    ar: 'تدوير حوض التجميع للمبردات المحمولة والخزائنية، التوزيع على وسادات التبريد، التعبئة التلقائية للمياه.',
    es: 'Circulación de sumidero en enfriadores portátiles y de gabinete, distribución a paneles de enfriamiento, llenado automático de agua.',
  },
  'usecases.electrical': {
    en: 'Motor replacement, speed control, automated fill/overflow protection, PCB swap.',
    ar: 'استبدال المحرك، التحكم بالسرعة، حماية التعبئة/الطفحان التلقائية، استبدال لوحة التحكم.',
    es: 'Reemplazo de motor, control de velocidad, protección automática de llenado/desbordamiento, cambio de PCB.',
  },

  // ── Category labels ──
  'category.mainstream': {
    en: 'Mainstream',
    ar: 'أساسي',
    es: 'Principal',
  },
  'category.categories': {
    en: 'categories',
    ar: 'فئات',
    es: 'categorías',
  },

  // ── Compatibility Pages ──
  'compatibility.title': {
    en: 'Compatibility & Cross-Reference — EVAPFit',
    ar: 'التوافق والمرجع المتقاطع — إيفاب فيت',
    es: 'Compatibilidad y Referencia Cruzada — EVAPFit',
  },
  'compatibility.heading': {
    en: 'Parts Compatibility & Cross-Reference',
    ar: 'توافق القطع والمرجع المتقاطع',
    es: 'Compatibilidad de Piezas y Referencia Cruzada',
  },
  'compatibility.desc': {
    en: 'Find the correct replacement part by matching interface type, dimensions, or electrical specifications. No model number required.',
    ar: 'اعثر على القطعة البديلة الصحيحة بمطابقة نوع الواجهة أو الأبعاد أو المواصفات الكهربائية. لا حاجة لرقم الموديل.',
    es: 'Encuentre la pieza de repuesto correcta haciendo coincidir el tipo de interfaz, dimensiones o especificaciones eléctricas. Sin número de modelo.',
  },

  // ── About Page ──
  'about.title': {
    en: 'About Us — EVAPFit',
    ar: 'من نحن — إيفاب فيت',
    es: 'Quiénes Somos — EVAPFit',
  },
  'about.heading': {
    en: 'About EVAPFit',
    ar: 'عن إيفاب فيت',
    es: 'Acerca de EVAPFit',
  },
  'about.subtitle': {
    en: 'Your direct-source partner for evaporative cooler replacement parts.',
    ar: 'شريكك المباشر لقطع غيار مبردات الهواء التبخيرية.',
    es: 'Su socio directo para refacciones de enfriadores de aire evaporativos.',
  },
  'about.years_experience': {
    en: 'Years Experience',
    ar: 'سنوات من الخبرة',
    es: 'Años de Experiencia',
  },
  'about.export_countries': {
    en: 'Export Countries',
    ar: 'دولة تصدير',
    es: 'Países de Exportación',
  },
  'about.active_skus': {
    en: 'Active SKUs',
    ar: 'منتج نشط',
    es: 'SKUs Activos',
  },
  'about.who_we_are': {
    en: 'Who We Are',
    ar: 'من نحن',
    es: 'Quiénes Somos',
  },
  'about.who_we_are_text': {
    en: 'We specialize in designing, manufacturing, and exporting replacement parts for evaporative air coolers. Our factory integrates injection molding, metal stamping, CNC machining, and assembly to produce components matching or exceeding OEM specifications.',
    ar: 'نحن متخصصون في تصميم وتصنيع وتصدير قطع الغيار لمبردات الهواء التبخيرية. يدمج مصنعنا القولبة بالحقن والختم المعدني والتصنيع باستخدام الحاسب الآلي والتجميع لإنتاج مكونات تطابق أو تتجاوز مواصفات المصنّع الأصلي.',
    es: 'Nos especializamos en diseñar, fabricar y exportar refacciones para enfriadores de aire evaporativos. Nuestra fábrica integra moldeo por inyección, estampado de metales, mecanizado CNC y ensamblaje para producir componentes que igualan o superan las especificaciones OEM.',
  },
  'about.our_markets': {
    en: 'Our Markets',
    ar: 'أسواقنا',
    es: 'Nuestros Mercados',
  },
  'about.our_markets_text': {
    en: 'We serve distributors, wholesalers, and maintenance companies across the Middle East, Southeast Asia, Africa, and South America. Our interface-first compatibility system means buyers find the right part without needing a model number.',
    ar: 'نخدم الموزعين وتجار الجملة وشركات الصيانة في الشرق الأوسط وجنوب شرق آسيا وأفريقيا وأمريكا الجنوبية. نظام التوافق القائم على الواجهة لدينا يعني أن المشترين يجدون القطعة المناسبة بدون الحاجة لرقم الموديل.',
    es: 'Servimos a distribuidores, mayoristas y empresas de mantenimiento en Medio Oriente, Sudeste Asiático, África y Sudamérica. Nuestro sistema de compatibilidad basado en interfaz significa que los compradores encuentran la pieza correcta sin necesidad de número de modelo.',
  },
  'about.factory_direct': {
    en: 'Factory Direct',
    ar: 'توريد مباشر من المصنع',
    es: 'Venta Directa de Fábrica',
  },
  'about.factory_direct_text': {
    en: 'Competitive pricing at any quantity.',
    ar: 'أسعار تنافسية لأي كمية.',
    es: 'Precios competitivos a cualquier cantidad.',
  },
  'about.oem_odm': {
    en: 'OEM & ODM',
    ar: 'تصنيع حسب الطلب (OEM & ODM)',
    es: 'OEM y ODM',
  },
  'about.oem_odm_text': {
    en: 'Custom specs, branding, packaging.',
    ar: 'مواصفات وعلامة تجارية وتغليف مخصص.',
    es: 'Especificaciones, marca y empaque personalizados.',
  },
  'about.fast_response': {
    en: 'Fast Response',
    ar: 'استجابة سريعة',
    es: 'Respuesta Rápida',
  },
  'about.fast_response_text': {
    en: 'Quotes within 24 hours.',
    ar: 'عروض أسعار خلال 24 ساعة.',
    es: 'Cotizaciones en 24 horas.',
  },
  'about.qc_assured': {
    en: 'QC Assured',
    ar: 'ضمان الجودة',
    es: 'Calidad Garantizada',
  },
  'about.qc_assured_text': {
    en: '100% tested before shipping.',
    ar: 'اختبار 100٪ قبل الشحن.',
    es: '100% probado antes del envío.',
  },
  'about.cta_heading': {
    en: 'Ready to Find Your Parts?',
    ar: 'هل أنت مستعد للعثور على قطعك؟',
    es: '¿Listo para Encontrar sus Piezas?',
  },
  'about.cta_text': {
    en: 'Browse our catalog of 50+ replacement components — all interface-matched, no model number needed.',
    ar: 'تصفح كتالوجنا الذي يضم أكثر من 50 مكونًا بديلاً — جميعها متوافقة بالواجهة، بدون الحاجة لرقم الموديل.',
    es: 'Explore nuestro catálogo de más de 50 componentes de repuesto — todos compatibles por interfaz, sin número de modelo.',
  },
  'about.browse_all_products': {
    en: 'Browse All Products',
    ar: 'تصفح جميع المنتجات',
    es: 'Explorar Todos los Productos',
  },

  // ── Contact Page ──
  'contact.title': {
    en: 'Contact Us — EVAPFit',
    ar: 'اتصل بنا — إيفاب فيت',
    es: 'Contacto — EVAPFit',
  },
  'contact.heading': {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    es: 'Contáctenos',
  },
  'contact.subtitle': {
    en: 'We respond within 24 hours.',
    ar: 'نرد عليك خلال 24 ساعة.',
    es: 'Respondemos en 24 horas.',
  },
  'contact.email_label': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    es: 'Correo Electrónico',
  },
  'contact.phone_label': {
    en: 'Phone / WhatsApp',
    ar: 'الهاتف / واتساب',
    es: 'Teléfono / WhatsApp',
  },
  'contact.address_label': {
    en: 'Address',
    ar: 'العنوان',
    es: 'Dirección',
  },
  'contact.get_quote': {
    en: 'Get a Quote',
    ar: 'احصل على عرض سعر',
    es: 'Obtener una Cotización',
  },
  'contact.get_quote_text': {
    en: 'Use our inquiry form with pre-filled product details for the fastest response.',
    ar: 'استخدم نموذج الاستفسار الخاص بنا مع تفاصيل المنتج المعبأة مسبقًا للحصول على أسرع رد.',
    es: 'Use nuestro formulario de consulta con detalles del producto precargados para la respuesta más rápida.',
  },

  // ── FAQ Page ──
  'faq.title': {
    en: 'FAQ — EVAPFit',
    ar: 'الأسئلة الشائعة — إيفاب فيت',
    es: 'Preguntas Frecuentes — EVAPFit',
  },
  'faq.heading': {
    en: 'Frequently Asked Questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas Frecuentes',
  },
  'faq.subtitle': {
    en: 'Quick answers to common questions about our products, ordering, and shipping.',
    ar: 'إجابات سريعة على الأسئلة الشائعة حول منتجاتنا والطلب والشحن.',
    es: 'Respuestas rápidas a preguntas frecuentes sobre nuestros productos, pedidos y envíos.',
  },
  'faq.q1': {
    en: 'Do I need a model number to find the right part?',
    ar: 'هل أحتاج إلى رقم الموديل للعثور على القطعة المناسبة؟',
    es: '¿Necesito un número de modelo para encontrar la pieza correcta?',
  },
  'faq.a1': {
    en: 'No. Our interface-first system helps you find compatible parts by connection type, dimensions, and electrical specs — no model number needed.',
    ar: 'لا. نظامنا القائم على الواجهة يساعدك في العثور على القطع المتوافقة حسب نوع التوصيل والأبعاد والمواصفات الكهربائية — بدون الحاجة لرقم الموديل.',
    es: 'No. Nuestro sistema basado en interfaz le ayuda a encontrar piezas compatibles por tipo de conexión, dimensiones y especificaciones eléctricas — sin número de modelo.',
  },
  'faq.q2': {
    en: 'What is the minimum order quantity (MOQ)?',
    ar: 'ما هو الحد الأدنى لكمية الطلب (MOQ)؟',
    es: '¿Cuál es la cantidad mínima de pedido (MOQ)?',
  },
  'faq.a2': {
    en: 'MOQ varies by product type. Most parts start at 10-50 pcs. Sample orders (1-2 pcs) are available for evaluation. Check individual product pages for specific MOQ values.',
    ar: 'يختلف الحد الأدنى للطلب حسب نوع المنتج. معظم القطع تبدأ من 10-50 قطعة. طلبات العينات (1-2 قطعة) متاحة للتقييم. تحقق من صفحات المنتج الفردية لقيم الحد الأدنى المحددة.',
    es: 'El MOQ varía según el tipo de producto. La mayoría de las piezas comienzan en 10-50 piezas. Los pedidos de muestra (1-2 piezas) están disponibles para evaluación. Consulte las páginas de productos individuales para valores específicos.',
  },
  'faq.q3': {
    en: 'Can I get samples before placing a bulk order?',
    ar: 'هل يمكنني الحصول على عينات قبل تقديم طلب بالجملة؟',
    es: '¿Puedo obtener muestras antes de hacer un pedido al por mayor?',
  },
  'faq.a3': {
    en: 'Yes. Sample orders ship within 3-5 working days via express courier. Sample cost is refundable against your first bulk order.',
    ar: 'نعم. يتم شحن طلبات العينات خلال 3-5 أيام عمل عبر البريد السريع. تكلفة العينة قابلة للاسترداد عند أول طلب بالجملة.',
    es: 'Sí. Los pedidos de muestra se envían en 3-5 días hábiles por mensajería exprés. El costo de la muestra es reembolsable contra su primer pedido al por mayor.',
  },
  'faq.q4': {
    en: 'Do you offer OEM / private labeling?',
    ar: 'هل تقدمون خدمة التصنيع حسب الطلب (OEM) / العلامة التجارية الخاصة؟',
    es: '¿Ofrecen OEM / etiquetado privado?',
  },
  'faq.a4': {
    en: 'Yes. We provide custom specifications, branding, labeling, and packaging for qualifying order volumes. Visit our OEM page for details.',
    ar: 'نعم. نوفر مواصفات وعلامات تجارية وملصقات وتغليف مخصص للطلبات ذات الأحجام المؤهلة. زر صفحة OEM للحصول على التفاصيل.',
    es: 'Sí. Proporcionamos especificaciones, marca, etiquetado y empaque personalizados para volúmenes de pedido que califiquen. Visite nuestra página OEM para más detalles.',
  },
  'faq.q5': {
    en: 'What payment methods do you accept?',
    ar: 'ما هي طرق الدفع التي تقبلونها؟',
    es: '¿Qué métodos de pago aceptan?',
  },
  'faq.a5': {
    en: 'T/T (bank transfer), L/C at sight, and Western Union for samples. Payment terms: 30% deposit, 70% before shipment for new customers.',
    ar: 'تحويل بنكي (T/T)، اعتماد مستندي عند الاطلاع (L/C at sight)، وويسترن يونيون للعينات. شروط الدفع: 30٪ دفعة مقدمة، 70٪ قبل الشحن للعملاء الجدد.',
    es: 'T/T (transferencia bancaria), carta de crédito a la vista y Western Union para muestras. Términos de pago: 30% de depósito, 70% antes del envío para nuevos clientes.',
  },
  'faq.q6': {
    en: 'What warranty do you provide?',
    ar: 'ما هو الضمان الذي تقدمونه؟',
    es: '¿Qué garantía ofrecen?',
  },
  'faq.a6': {
    en: 'Standard 12-month warranty against manufacturing defects. Extended warranty available for bulk/OEM orders upon agreement.',
    ar: 'ضمان قياسي لمدة 12 شهرًا ضد عيوب التصنيع. ضمان ممتد متاح للطلبات بالجملة / OEM عند الاتفاق.',
    es: 'Garantía estándar de 12 meses contra defectos de fabricación. Garantía extendida disponible para pedidos al por mayor/OEM previo acuerdo.',
  },
  'faq.q7': {
    en: 'How long does shipping take?',
    ar: 'كم تستغرق مدة الشحن؟',
    es: '¿Cuánto tarda el envío?',
  },
  'faq.a7': {
    en: 'Air freight: 5-10 days. Sea freight: 15-45 days. Express courier: 3-7 days. Exact transit time depends on your destination.',
    ar: 'الشحن الجوي: 5-10 أيام. الشحن البحري: 15-45 يومًا. البريد السريع: 3-7 أيام. تعتمد مدة النقل الفعلية على وجهتك.',
    es: 'Carga aérea: 5-10 días. Carga marítima: 15-45 días. Mensajería exprés: 3-7 días. El tiempo exacto depende de su destino.',
  },
  'faq.q8': {
    en: 'Do you provide technical support?',
    ar: 'هل تقدمون دعمًا فنيًا؟',
    es: '¿Ofrecen soporte técnico?',
  },
  'faq.a8': {
    en: 'Yes. Our engineering team can assist with part identification, compatibility confirmation, and installation guidance.',
    ar: 'نعم. يمكن لفريقنا الهندسي المساعدة في تحديد القطع وتأكيد التوافق وإرشادات التركيب.',
    es: 'Sí. Nuestro equipo de ingeniería puede ayudarle con identificación de piezas, confirmación de compatibilidad y orientación de instalación.',
  },
  'faq.ready_cta': {
    en: 'Ready to get started?',
    ar: 'هل أنت مستعد للبدء؟',
    es: '¿Listo para comenzar?',
  },
  'faq.browse_products': {
    en: 'Browse Products',
    ar: 'تصفح المنتجات',
    es: 'Explorar Productos',
  },
  'faq.contact_us': {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    es: 'Contáctenos',
  },

  // ── OEM Page ──
  'oem.title': {
    en: 'OEM & Custom Manufacturing — EVAPFit',
    ar: 'تصنيع حسب الطلب (OEM) — إيفاب فيت',
    es: 'OEM y Fabricación Personalizada — EVAPFit',
  },
  'oem.custom_manufacturing': {
    en: 'Custom Manufacturing',
    ar: 'تصنيع مخصص',
    es: 'Fabricación Personalizada',
  },
  'oem.heading': {
    en: 'OEM & Custom Manufacturing',
    ar: 'تصنيع حسب الطلب (OEM)',
    es: 'OEM y Fabricación Personalizada',
  },
  'oem.hero_text': {
    en: 'Your specifications, your brand, your packaging. We manufacture replacement parts to your exact requirements — with your name on them.',
    ar: 'مواصفاتك، علامتك التجارية، تغليفك. نقوم بتصنيع قطع الغيار وفقًا لمتطلباتك الدقيقة — مع اسمك عليها.',
    es: 'Sus especificaciones, su marca, su empaque. Fabricamos refacciones según sus requisitos exactos — con su nombre en ellas.',
  },
  'oem.why_choose': {
    en: 'Why Choose Our OEM Service',
    ar: 'لماذا تختار خدمة OEM لدينا',
    es: 'Por Qué Elegir Nuestro Servicio OEM',
  },
  'oem.in_house_production': {
    en: 'In-House Production',
    ar: 'إنتاج داخلي',
    es: 'Producción Interna',
  },
  'oem.in_house_production_text': {
    en: 'Injection molding, metal stamping, CNC machining — all under one roof. No subcontracting delays.',
    ar: 'القولبة بالحقن والختم المعدني والتصنيع باستخدام الحاسب الآلي — كل ذلك تحت سقف واحد. لا تأخير بسبب التعاقد من الباطن.',
    es: 'Moldeo por inyección, estampado de metales, mecanizado CNC — todo bajo un mismo techo. Sin retrasos por subcontratación.',
  },
  'oem.flexible_moq': {
    en: 'Flexible MOQ',
    ar: 'حد أدنى مرن للطلب',
    es: 'MOQ Flexible',
  },
  'oem.flexible_moq_text': {
    en: 'From 500 to 50,000 units. We scale production to match your volume — no forced overproduction.',
    ar: 'من 500 إلى 50,000 وحدة. نقوم بتوسيع الإنتاج ليتناسب مع حجم طلبك — لا إنتاج زائد إجباري.',
    es: 'Desde 500 hasta 50,000 unidades. Escalamos la producción para igualar su volumen — sin sobreproducción forzada.',
  },
  'oem.dedicated_pm': {
    en: 'Dedicated Project Manager',
    ar: 'مدير مشروع مخصص',
    es: 'Gerente de Proyecto Dedicado',
  },
  'oem.dedicated_pm_text': {
    en: 'Single point of contact from sampling through production to shipment. No runaround.',
    ar: 'نقطة اتصال واحدة من العينات مرورًا بالإنتاج وحتى الشحن. بدون مماطلة.',
    es: 'Punto de contacto único desde muestreo, pasando por producción hasta el envío. Sin rodeos.',
  },
  'oem.ip_protection': {
    en: 'IP Protection',
    ar: 'حماية الملكية الفكرية',
    es: 'Protección de PI',
  },
  'oem.ip_protection_text': {
    en: 'Your designs, molds, and specifications are confidential. NDA available on request.',
    ar: 'تصاميمك وقوالبك ومواصفاتك سرية. اتفاقية عدم إفصاح متاحة عند الطلب.',
    es: 'Sus diseños, moldes y especificaciones son confidenciales. NDA disponible a solicitud.',
  },
  'oem.what_we_customize': {
    en: 'What We Can Customize',
    ar: 'ما يمكننا تخصيصه',
    es: 'Lo Que Podemos Personalizar',
  },
  'oem.specifications': {
    en: 'Specifications',
    ar: 'المواصفات',
    es: 'Especificaciones',
  },
  'oem.spec_voltage': {
    en: 'Voltage & power ratings',
    ar: 'تقديرات الجهد والقدرة',
    es: 'Clasificaciones de voltaje y potencia',
  },
  'oem.spec_rpm': {
    en: 'RPM & performance curves',
    ar: 'عدد الدورات ومنحنيات الأداء',
    es: 'RPM y curvas de rendimiento',
  },
  'oem.spec_dimensions': {
    en: 'Dimensions & tolerances',
    ar: 'الأبعاد والتفاوتات',
    es: 'Dimensiones y tolerancias',
  },
  'oem.spec_materials': {
    en: 'Materials & coatings',
    ar: 'المواد والطلاءات',
    es: 'Materiales y recubrimientos',
  },
  'oem.spec_mounting': {
    en: 'Mounting configurations',
    ar: 'تكوينات التركيب',
    es: 'Configuraciones de montaje',
  },
  'oem.branding_labels': {
    en: 'Branding & Labels',
    ar: 'العلامات التجارية والملصقات',
    es: 'Marca y Etiquetas',
  },
  'oem.brand_logo': {
    en: 'Your logo & model numbers',
    ar: 'شعارك وأرقام الموديلات',
    es: 'Su logotipo y números de modelo',
  },
  'oem.brand_engraving': {
    en: 'Laser engraving / pad print',
    ar: 'نقش بالليزر / طباعة بالوسادة',
    es: 'Grabado láser / impresión por tampón',
  },
  'oem.brand_nameplates': {
    en: 'Custom nameplates & stickers',
    ar: 'لوحات تعريف وملصقات مخصصة',
    es: 'Placas de identificación y calcomanías personalizadas',
  },
  'oem.brand_barcodes': {
    en: 'Barcode & QR code labels',
    ar: 'ملصقات الباركود ورموز QR',
    es: 'Etiquetas de código de barras y QR',
  },
  'oem.brand_multilang': {
    en: 'Multi-language markings',
    ar: 'علامات متعددة اللغات',
    es: 'Marcas multilingües',
  },
  'oem.packaging': {
    en: 'Packaging',
    ar: 'التغليف',
    es: 'Empaque',
  },
  'oem.pack_retail': {
    en: 'Retail boxes with your design',
    ar: 'صناديق تجزئة بتصميمك',
    es: 'Cajas minoristas con su diseño',
  },
  'oem.pack_blister': {
    en: 'Blister packs & clamshells',
    ar: 'عبوات بلاستر وصدفية',
    es: 'Blísteres y conchas',
  },
  'oem.pack_bulk': {
    en: 'Bulk industrial packaging',
    ar: 'تغليف صناعي بالجملة',
    es: 'Empaque industrial a granel',
  },
  'oem.pack_color': {
    en: 'Color-printed outer cartons',
    ar: 'كراتين خارجية مطبوعة بالألوان',
    es: 'Cajas exteriores con impresión a color',
  },
  'oem.pack_eco': {
    en: 'Eco-friendly options',
    ar: 'خيارات صديقة للبيئة',
    es: 'Opciones ecológicas',
  },
  'oem.how_it_works': {
    en: 'How the OEM Process Works',
    ar: 'كيف تعمل عملية OEM',
    es: 'Cómo Funciona el Proceso OEM',
  },
  'oem.step1_title': {
    en: 'Inquiry & Specs',
    ar: 'الاستفسار والمواصفات',
    es: 'Consulta y Especificaciones',
  },
  'oem.step1_text': {
    en: 'You provide specifications, drawings, or reference samples. We review and confirm feasibility.',
    ar: 'تقدم المواصفات أو الرسومات أو عينات مرجعية. نراجع ونؤكد الجدوى.',
    es: 'Usted proporciona especificaciones, dibujos o muestras de referencia. Revisamos y confirmamos la viabilidad.',
  },
  'oem.step2_title': {
    en: 'Sample Production',
    ar: 'إنتاج العينات',
    es: 'Producción de Muestras',
  },
  'oem.step2_text': {
    en: 'We produce 5-10 pre-production samples for your approval. Revisions made as needed.',
    ar: 'ننتج 5-10 عينات ما قبل الإنتاج لموافقتك. يتم إجراء التعديلات حسب الحاجة.',
    es: 'Producimos 5-10 muestras de preproducción para su aprobación. Se hacen revisiones según sea necesario.',
  },
  'oem.step3_title': {
    en: 'Mass Production',
    ar: 'الإنتاج بالجملة',
    es: 'Producción en Masa',
  },
  'oem.step3_text': {
    en: 'Full production with in-process QC. Regular progress updates with photos.',
    ar: 'إنتاج كامل مع مراقبة الجودة أثناء العملية. تحديثات منتظمة للتقدم مع الصور.',
    es: 'Producción completa con control de calidad en proceso. Actualizaciones regulares de progreso con fotos.',
  },
  'oem.step4_title': {
    en: 'QC & Shipment',
    ar: 'مراقبة الجودة والشحن',
    es: 'Control de Calidad y Envío',
  },
  'oem.step4_text': {
    en: 'Final inspection report provided. Ship by sea, air, or express per your preference.',
    ar: 'تقديم تقرير الفحص النهائي. الشحن بحرًا أو جوًا أو بالبريد السريع حسب تفضيلك.',
    es: 'Informe de inspección final proporcionado. Envío por mar, aire o mensajería según su preferencia.',
  },
  'oem.moq_timeline': {
    en: 'Typical MOQ & Timelines',
    ar: 'الحد الأدنى النموذجي للطلب والجداول الزمنية',
    es: 'MOQ y Plazos Típicos',
  },
  'oem.table_product_type': {
    en: 'Product Type',
    ar: 'نوع المنتج',
    es: 'Tipo de Producto',
  },
  'oem.table_moq': {
    en: 'Typical MOQ',
    ar: 'الحد الأدنى النموذجي للطلب',
    es: 'MOQ Típico',
  },
  'oem.table_sample_time': {
    en: 'Sample Time',
    ar: 'وقت العينة',
    es: 'Tiempo de Muestra',
  },
  'oem.table_production_time': {
    en: 'Production Time',
    ar: 'وقت الإنتاج',
    es: 'Tiempo de Producción',
  },
  'oem.table_disclaimer': {
    en: 'These are general estimates. Actual MOQ and timelines depend on your specific requirements and customization level. Contact us for a project-specific quote.',
    ar: 'هذه تقديرات عامة. يعتمد الحد الأدنى الفعلي للطلب والجداول الزمنية على متطلباتك المحددة ومستوى التخصيص. اتصل بنا للحصول على عرض سعر خاص بمشروعك.',
    es: 'Estas son estimaciones generales. El MOQ y los plazos reales dependen de sus requisitos específicos y nivel de personalización. Contáctenos para una cotización específica del proyecto.',
  },
  'oem.cta_heading': {
    en: 'Ready to Discuss Your OEM Project?',
    ar: 'هل أنت مستعد لمناقشة مشروع OEM الخاص بك؟',
    es: '¿Listo para Discutir su Proyecto OEM?',
  },
  'oem.cta_text': {
    en: 'Tell us what you need — specifications, quantities, branding requirements. We\'ll respond within 24 hours with feasibility, pricing, and timeline.',
    ar: 'أخبرنا بما تحتاج إليه — المواصفات والكميات ومتطلبات العلامة التجارية. سنرد عليك خلال 24 ساعة بالجدوى والتسعير والجدول الزمني.',
    es: 'Díganos qué necesita — especificaciones, cantidades, requisitos de marca. Le responderemos en 24 horas con viabilidad, precio y plazo.',
  },
  'oem.start_inquiry': {
    en: 'Start OEM Inquiry',
    ar: 'ابدأ استفسار OEM',
    es: 'Iniciar Consulta OEM',
  },
  'oem.request_samples': {
    en: 'Request Samples First',
    ar: 'اطلب عينات أولاً',
    es: 'Solicitar Muestras Primero',
  },

  // ── Quality Page ──
  'quality.title': {
    en: 'Quality & Certifications — EVAPFit',
    ar: 'الجودة والشهادات — إيفاب فيت',
    es: 'Calidad y Certificaciones — EVAPFit',
  },
  'quality.heading': {
    en: 'Quality & Certifications',
    ar: 'الجودة والشهادات',
    es: 'Calidad y Certificaciones',
  },
  'quality.subtitle': {
    en: 'Our commitment to quality — from raw material inspection to final shipment.',
    ar: 'التزامنا بالجودة — من فحص المواد الخام إلى الشحن النهائي.',
    es: 'Nuestro compromiso con la calidad — desde la inspección de materia prima hasta el envío final.',
  },
  'quality.quality_management': {
    en: 'Quality Management',
    ar: 'إدارة الجودة',
    es: 'Gestión de Calidad',
  },
  'quality.quality_mgmt_text': {
    en: 'Our factory is ISO 9001:2015 certified. Every batch undergoes multi-stage quality control: incoming material inspection, in-process QC checks, and 100% final testing on electrical components before packaging and shipment.',
    ar: 'مصنعنا حاصل على شهادة ISO 9001:2015. تخضع كل دفعة لمراقبة جودة متعددة المراحل: فحص المواد الواردة وفحوصات الجودة أثناء العملية واختبار نهائي بنسبة 100٪ على المكونات الكهربائية قبل التغليف والشحن.',
    es: 'Nuestra fábrica tiene certificación ISO 9001:2015. Cada lote pasa por control de calidad de múltiples etapas: inspección de materiales entrantes, controles de calidad en proceso y pruebas finales al 100% en componentes eléctricos antes del empaque y envío.',
  },
  'quality.iqc': {
    en: 'Incoming material inspection',
    ar: 'فحص المواد الواردة',
    es: 'Inspección de material entrante',
  },
  'quality.ipqc': {
    en: 'In-process quality control',
    ar: 'مراقبة الجودة أثناء العملية',
    es: 'Control de calidad en proceso',
  },
  'quality.oqc': {
    en: 'Outgoing quality check',
    ar: 'فحص الجودة النهائي',
    es: 'Control de calidad de salida',
  },
  'quality.testing_capabilities': {
    en: 'Testing Capabilities',
    ar: 'قدرات الاختبار',
    es: 'Capacidades de Prueba',
  },
  'quality.electrical_testing': {
    en: 'Electrical Testing',
    ar: 'الاختبار الكهربائي',
    es: 'Pruebas Eléctricas',
  },
  'quality.electrical_testing_text': {
    en: 'Hi-pot, insulation resistance, load testing for all motors and electrical components.',
    ar: 'اختبار الجهد العالي ومقاومة العزل واختبار الحمل لجميع المحركات والمكونات الكهربائية.',
    es: 'Pruebas de alto voltaje, resistencia de aislamiento y carga para todos los motores y componentes eléctricos.',
  },
  'quality.dimensional_inspection': {
    en: 'Dimensional Inspection',
    ar: 'الفحص البعدي',
    es: 'Inspección Dimensional',
  },
  'quality.dimensional_inspection_text': {
    en: 'CMM and gauge-based measurement to ensure interface compatibility.',
    ar: 'قياس باستخدام CMM والمقاييس لضمان توافق الواجهة.',
    es: 'Medición con MMC y calibres para garantizar compatibilidad de interfaz.',
  },
  'quality.leak_testing': {
    en: 'Leak & Flow Testing',
    ar: 'اختبار التسرب والتدفق',
    es: 'Pruebas de Fugas y Flujo',
  },
  'quality.leak_testing_text': {
    en: 'Water pressure testing for pumps, valves, and sealed assemblies.',
    ar: 'اختبار ضغط المياه للمضخات والصمامات والتجميعات المختومة.',
    es: 'Pruebas de presión de agua para bombas, válvulas y conjuntos sellados.',
  },
  'quality.durability_testing': {
    en: 'Durability Testing',
    ar: 'اختبار المتانة',
    es: 'Pruebas de Durabilidad',
  },
  'quality.durability_testing_text': {
    en: 'Accelerated life testing for wear parts and moving components.',
    ar: 'اختبار حياة متسارع لقطع التآكل والمكونات المتحركة.',
    es: 'Pruebas de vida acelerada para piezas de desgaste y componentes móviles.',
  },
  'quality.warranty': {
    en: 'Warranty',
    ar: 'الضمان',
    es: 'Garantía',
  },
  'quality.warranty_text': {
    en: 'Standard 12-month warranty against manufacturing defects on all products. Extended warranty options available for bulk and OEM orders.',
    ar: 'ضمان قياسي لمدة 12 شهرًا ضد عيوب التصنيع على جميع المنتجات. خيارات ضمان ممتد متاحة للطلبات بالجملة و OEM.',
    es: 'Garantía estándar de 12 meses contra defectos de fabricación en todos los productos. Opciones de garantía extendida disponibles para pedidos al por mayor y OEM.',
  },
  'quality.cta_heading': {
    en: 'See Our Quality Firsthand',
    ar: 'شاهد جودتنا بنفسك',
    es: 'Vea Nuestra Calidad de Primera Mano',
  },
  'quality.cta_text': {
    en: 'Request samples to verify quality before bulk ordering. Sample cost is refundable against your first order.',
    ar: 'اطلب عينات للتحقق من الجودة قبل الطلب بالجملة. تكلفة العينة قابلة للاسترداد عند طلبك الأول.',
    es: 'Solicite muestras para verificar la calidad antes de pedir al por mayor. El costo de la muestra es reembolsable contra su primer pedido.',
  },
  'quality.request_samples': {
    en: 'Request Samples',
    ar: 'اطلب عينات',
    es: 'Solicitar Muestras',
  },
  'quality.submit_inquiry': {
    en: 'Submit Inquiry',
    ar: 'تقديم استفسار',
    es: 'Enviar Consulta',
  },

  // ── Shipping Page ──
  'shipping.title': {
    en: 'Shipping & Delivery — EVAPFit',
    ar: 'الشحن والتوصيل — إيفاب فيت',
    es: 'Envíos y Entregas — EVAPFit',
  },
  'shipping.heading': {
    en: 'Shipping & Delivery',
    ar: 'الشحن والتوصيل',
    es: 'Envíos y Entregas',
  },
  'shipping.subtitle': {
    en: 'Flexible shipping options to get your parts where you need them.',
    ar: 'خيارات شحن مرنة لتوصيل قطعك إلى حيث تحتاجها.',
    es: 'Opciones de envío flexibles para llevar sus piezas donde las necesita.',
  },
  'shipping.methods': {
    en: 'Shipping Methods',
    ar: 'طرق الشحن',
    es: 'Métodos de Envío',
  },
  'shipping.sea_freight': {
    en: 'Sea Freight',
    ar: 'الشحن البحري',
    es: 'Carga Marítima',
  },
  'shipping.sea_freight_text': {
    en: 'FCL & LCL available. 15-45 days depending on destination. Best value for bulk orders.',
    ar: 'حاويات كاملة (FCL) وحاويات مشتركة (LCL) متاحة. 15-45 يومًا حسب الوجهة. أفضل قيمة للطلبات بالجملة.',
    es: 'FCL y LCL disponibles. 15-45 días según destino. Mejor valor para pedidos al por mayor.',
  },
  'shipping.air_freight': {
    en: 'Air Freight',
    ar: 'الشحن الجوي',
    es: 'Carga Aérea',
  },
  'shipping.air_freight_text': {
    en: '5-10 days worldwide. Ideal for urgent orders and samples. DDP available for select destinations.',
    ar: '5-10 أيام حول العالم. مثالي للطلبات العاجلة والعينات. DDP متاح لوجهات مختارة.',
    es: '5-10 días a nivel mundial. Ideal para pedidos urgentes y muestras. DDP disponible para destinos seleccionados.',
  },
  'shipping.express_courier': {
    en: 'Express Courier',
    ar: 'البريد السريع',
    es: 'Mensajería Exprés',
  },
  'shipping.express_courier_text': {
    en: 'DHL, FedEx, UPS. 3-7 days. Best for samples and small quantities under 30kg.',
    ar: 'DHL و FedEx و UPS. 3-7 أيام. الأفضل للعينات والكميات الصغيرة أقل من 30 كجم.',
    es: 'DHL, FedEx, UPS. 3-7 días. Ideal para muestras y cantidades pequeñas menores a 30kg.',
  },
  'shipping.incoterms': {
    en: 'Incoterms',
    ar: 'شروط التجارة الدولية',
    es: 'Incoterms',
  },
  'shipping.incoterms_text': {
    en: 'We support FOB, CIF, CFR, EXW, and DDP (select destinations). Default is FOB Shanghai/Ningbo. Your account manager will confirm the best option based on your order size and destination.',
    ar: 'ندعم FOB و CIF و CFR و EXW و DDP (وجهات مختارة). الافتراضي هو FOB شنغهاي/نينغبو. سيؤكد مدير حسابك الخيار الأفضل بناءً على حجم طلبك ووجهتك.',
    es: 'Soportamos FOB, CIF, CFR, EXW y DDP (destinos seleccionados). El valor predeterminado es FOB Shanghái/Ningbo. Su gerente de cuenta confirmará la mejor opción según el tamaño de su pedido y destino.',
  },
  'shipping.packaging': {
    en: 'Packaging',
    ar: 'التغليف',
    es: 'Empaque',
  },
  'shipping.packaging_text': {
    en: 'All products are packed in export-grade packaging: individual poly bags, inner boxes, and master cartons. Pallets are stretch-wrapped and corner-protected. Custom packaging available for OEM orders.',
    ar: 'جميع المنتجات معبأة في تغليف بدرجة تصدير: أكياس بلاستيك فردية وصناديق داخلية وكراتين رئيسية. المنصات مغلفة بالاستريتش ومحمية الزوايا. تغليف مخصص متاح لطلبات OEM.',
    es: 'Todos los productos se empacan en empaque de grado de exportación: bolsas plásticas individuales, cajas internas y cajas maestras. Las paletas se envuelven con estirable y tienen protección en esquinas. Empaque personalizado disponible para pedidos OEM.',
  },
  'shipping.lead_times': {
    en: 'Lead Times',
    ar: 'أوقات التسليم',
    es: 'Plazos de Entrega',
  },
  'shipping.sample_orders': {
    en: 'Sample Orders',
    ar: 'طلبات العينات',
    es: 'Pedidos de Muestra',
  },
  'shipping.sample_orders_time': {
    en: '3-5 working days',
    ar: '3-5 أيام عمل',
    es: '3-5 días hábiles',
  },
  'shipping.standard_orders': {
    en: 'Standard Orders (up to 500 pcs)',
    ar: 'الطلبات القياسية (حتى 500 قطعة)',
    es: 'Pedidos Estándar (hasta 500 pzas)',
  },
  'shipping.standard_orders_time': {
    en: '7-15 working days',
    ar: '7-15 يوم عمل',
    es: '7-15 días hábiles',
  },
  'shipping.bulk_orders': {
    en: 'Bulk / OEM Orders',
    ar: 'طلبات بالجملة / OEM',
    es: 'Pedidos al por Mayor / OEM',
  },
  'shipping.bulk_orders_time': {
    en: '15-30 working days (confirmed per order)',
    ar: '15-30 يوم عمل (يتم التأكيد حسب الطلب)',
    es: '15-30 días hábiles (confirmado por pedido)',
  },
  'shipping.cta_heading': {
    en: 'Ready to Place an Order?',
    ar: 'هل أنت مستعد لتقديم طلب؟',
    es: '¿Listo para Realizar un Pedido?',
  },
  'shipping.cta_text': {
    en: 'We\'ll quote the best shipping option for your destination. Add products to your inquiry list to get started.',
    ar: 'سنقدم عرض سعر لأفضل خيار شحن لوجهتك. أضف المنتجات إلى قائمة استفساراتك للبدء.',
    es: 'Cotizaremos la mejor opción de envío para su destino. Agregue productos a su lista de consulta para comenzar.',
  },

  // ── Language Switcher ──
  'lang.switcher_label': {
    en: 'Language',
    ar: 'اللغة',
    es: 'Idioma',
  },

  // ── Systems Short Descriptions ──
  'system.water_short': {
    en: 'Pumps, valves, filtration',
    ar: 'مضخات، صمامات، ترشيح',
    es: 'Bombas, válvulas, filtración',
  },
  'system.electrical_short': {
    en: 'Motors, capacitors, control boards',
    ar: 'محركات، مكثفات، لوحات تحكم',
    es: 'Motores, capacitores, tarjetas de control',
  },

  // ── Note ──
  'note.label': {
    en: 'Note',
    ar: 'ملاحظة',
    es: 'Nota',
  },
  'note.mounting_available': {
    en: 'Motor mounting type (B3 / B5 / B14 etc.) is available in the',
    ar: 'نوع تركيب المحرك (B3 / B5 / B14 إلخ) متاح في',
    es: 'El tipo de montaje del motor (B3 / B5 / B14 etc.) está disponible en',
  },
  'note.structure_mounting': {
    en: 'Structure & Mounting',
    ar: 'الهيكل والتركيب',
    es: 'Estructura y Montaje',
  },
  'note.filter_facets': {
    en: 'filter facets for further fitment matching.',
    ar: 'خيارات التصفية لمطابقة تركيب أدق.',
    es: 'facetas de filtro para mayor coincidencia de ajuste.',
  },

  // ── Inquiry Form ──
  'inquiry.subtitle': {
    en: 'Submit Your Inquiry',
    ar: 'أرسل استفسارك',
    es: 'Envíe su Consulta',
  },
  'inquiry.header_desc': {
    en: 'Fill out the form below and our team will respond within 24 hours with pricing, availability, and lead time.',
    ar: 'املأ النموذج أدناه وسيرد فريقنا خلال 24 ساعة مع الأسعار والتوفر والمهلة الزمنية.',
    es: 'Complete el formulario a continuación y nuestro equipo responderá dentro de 24 horas con precios, disponibilidad y tiempo de entrega.',
  },
  'inquiry.product_requirements': {
    en: 'Product Requirements',
    ar: 'متطلبات المنتج',
    es: 'Requerimientos del Producto',
  },
  'inquiry.product_interested': {
    en: 'Product(s) Interested In',
    ar: 'المنتج (المنتجات) المطلوبة',
    es: 'Producto(s) de Interés',
  },
  'inquiry.product_placeholder': {
    en: 'Products from your inquiry list will appear here...',
    ar: 'ستظهر المنتجات من قائمة استفساراتك هنا...',
    es: 'Los productos de su lista de consulta aparecerán aquí...',
  },
  'inquiry.category_label': {
    en: 'Category',
    ar: 'الفئة',
    es: 'Categoría',
  },
  'inquiry.select_category': {
    en: 'Select a category...',
    ar: 'اختر فئة...',
    es: 'Seleccione una categoría...',
  },
  'inquiry.category_water': {
    en: 'Water System',
    ar: 'نظام المياه',
    es: 'Sistema de Agua',
  },
  'inquiry.category_evaporation': {
    en: 'Evaporation System',
    ar: 'نظام التبخير',
    es: 'Sistema de Evaporación',
  },
  'inquiry.category_air': {
    en: 'Air System',
    ar: 'نظام الهواء',
    es: 'Sistema de Aire',
  },
  'inquiry.category_electrical': {
    en: 'Electrical & Controls',
    ar: 'النظام الكهربائي والتحكم',
    es: 'Eléctrico y Controles',
  },
  'inquiry.category_structure': {
    en: 'Structure & Mounting',
    ar: 'الهيكل والتركيب',
    es: 'Estructura y Montaje',
  },
  'inquiry.category_maintenance': {
    en: 'Maintenance & Consumables',
    ar: 'الصيانة والمواد الاستهلاكية',
    es: 'Mantenimiento y Consumibles',
  },
  'inquiry.category_other': {
    en: 'Other / Not sure',
    ar: 'أخرى / غير متأكد',
    es: 'Otro / No estoy seguro',
  },
  'inquiry.estimated_quantity': {
    en: 'Estimated Quantity',
    ar: 'الكمية المقدرة',
    es: 'Cantidad Estimada',
  },
  'inquiry.quantity_placeholder': {
    en: 'e.g. 50-100 pcs per SKU',
    ar: 'مثال: 50-100 قطعة لكل SKU',
    es: 'ej. 50-100 pzas por SKU',
  },
  'inquiry.target_price': {
    en: 'Target Price (Optional)',
    ar: 'السعر المستهدف (اختياري)',
    es: 'Precio Objetivo (Opcional)',
  },
  'inquiry.price_placeholder': {
    en: 'e.g. $10-$20 / pc',
    ar: 'مثال: $10-$20 / قطعة',
    es: 'ej. $10-$20 / pza',
  },
  'inquiry.detailed_specs': {
    en: 'Detailed Specifications',
    ar: 'المواصفات التفصيلية',
    es: 'Especificaciones Detalladas',
  },
  'inquiry.specs_placeholder': {
    en: 'Include any specific requirements: voltage, dimensions, interface type, materials, etc.',
    ar: 'أدرج أي متطلبات محددة: الجهد، الأبعاد، نوع الواجهة، المواد، إلخ.',
    es: 'Incluya requisitos específicos: voltaje, dimensiones, tipo de interfaz, materiales, etc.',
  },
  'inquiry.contact_info': {
    en: 'Contact Information',
    ar: 'معلومات الاتصال',
    es: 'Información de Contacto',
  },
  'inquiry.destination': {
    en: 'Destination / Shipping To',
    ar: 'الوجهة / الشحن إلى',
    es: 'Destino / Enviar a',
  },
  'inquiry.destination_placeholder': {
    en: 'Country or region for delivery',
    ar: 'الدولة أو المنطقة للتوصيل',
    es: 'País o región para entrega',
  },
  'inquiry.notes_placeholder': {
    en: 'Any other requirements, delivery timeline, incoterms preference, etc.',
    ar: 'أي متطلبات أخرى، الجدول الزمني للتسليم، تفضيلات شروط التجارة الدولية، إلخ.',
    es: 'Cualquier otro requisito, plazo de entrega, preferencia de incoterms, etc.',
  },
  'inquiry.submit': {
    en: 'Submit Inquiry',
    ar: 'إرسال الاستفسار',
    es: 'Enviar Consulta',
  },
  'inquiry.response_time': {
    en: "We'll respond within 24 hours",
    ar: 'سنرد خلال 24 ساعة',
    es: 'Responderemos dentro de 24 horas',
  },
  'inquiry.basket_heading': {
    en: 'Inquiry List',
    ar: 'قائمة الاستفسارات',
    es: 'Lista de Consulta',
  },
  'inquiry.basket_empty_title': {
    en: 'Your inquiry list is empty',
    ar: 'قائمة استفساراتك فارغة',
    es: 'Su lista de consulta está vacía',
  },
  'inquiry.basket_empty_desc': {
    en: 'Browse products and add them to your list',
    ar: 'تصفح المنتجات وأضفها إلى قائمتك',
    es: 'Explore productos y agréguelos a su lista',
  },
  'inquiry.browse_products': {
    en: 'Browse Products',
    ar: 'تصفح المنتجات',
    es: 'Explorar Productos',
  },
  'inquiry.clear_all': {
    en: 'Clear All Items',
    ar: 'مسح جميع العناصر',
    es: 'Limpiar Todos',
  },
  'inquiry.remove': {
    en: 'Remove',
    ar: 'إزالة',
    es: 'Quitar',
  },
  'inquiry.verification': {
    en: 'Verification',
    ar: 'التحقق',
    es: 'Verificación',
  },
  'inquiry.removed_toast': {
    en: 'removed from inquiry list',
    ar: 'تمت الإزالة من قائمة الاستفسارات',
    es: 'eliminado de la lista de consulta',
  },
  'inquiry.clear_confirm': {
    en: 'Remove all items from your inquiry list?',
    ar: 'هل تريد إزالة جميع العناصر من قائمة استفساراتك؟',
    es: '¿Eliminar todos los elementos de su lista de consulta?',
  },
  'inquiry.all_removed': {
    en: 'All items removed',
    ar: 'تمت إزالة جميع العناصر',
    es: 'Todos los elementos eliminados',
  },
  'inquiry.spam_wait': {
    en: 'Please review your inquiry before submitting. If you are human, wait a moment and try again.',
    ar: 'يرجى مراجعة استفسارك قبل الإرسال. إذا كنت بشريًا، انتظر لحظة وحاول مرة أخرى.',
    es: 'Revise su consulta antes de enviar. Si es humano, espere un momento e intente de nuevo.',
  },
  'inquiry.spam_links': {
    en: 'Please remove excessive links from your message before submitting.',
    ar: 'يرجى إزالة الروابط الزائدة من رسالتك قبل الإرسال.',
    es: 'Elimine los enlaces excesivos de su mensaje antes de enviar.',
  },
  'inquiry.spam_limit': {
    en: 'You have reached the submission limit. Please try again later or contact us directly via email.',
    ar: 'لقد وصلت إلى حد الإرسال. يرجى المحاولة لاحقًا أو الاتصال بنا مباشرة عبر البريد الإلكتروني.',
    es: 'Ha alcanzado el límite de envíos. Intente más tarde o contáctenos directamente por correo.',
  },
  'inquiry.spam_verify': {
    en: 'Verification failed. Please refresh and try again.',
    ar: 'فشل التحقق. يرجى تحديث الصفحة والمحاولة مرة أخرى.',
    es: 'Verificación fallida. Actualice e intente de nuevo.',
  },
  'inquiry.success_title': {
    en: 'Inquiry Submitted',
    ar: 'تم إرسال الاستفسار',
    es: 'Consulta Enviada',
  },
  'inquiry.success_msg': {
    en: 'Thank you. We will respond within 24 hours.',
    ar: 'شكرًا لك. سنرد عليك خلال 24 ساعة.',
    es: 'Gracias. Responderemos dentro de 24 horas.',
  },
  'inquiry.back_home': {
    en: 'Back to Home',
    ar: 'العودة إلى الرئيسية',
    es: 'Volver al Inicio',
  },
  'inquiry.auto_verified': {
    en: '(auto-verified)',
    ar: '(تم التحقق تلقائيًا)',
    es: '(auto-verificado)',
  },

  // ── Compatibility Page ──
  'compatibility.subtitle': {
    en: 'Compatibility Guide',
    ar: 'دليل التوافق',
    es: 'Guía de Compatibilidad',
  },
  'compatibility.hero_heading': {
    en: "Don't Know Your Model Number?",
    ar: 'لا تعرف رقم الموديل الخاص بك؟',
    es: '¿No Conoce su Número de Modelo?',
  },
  'compatibility.hero_desc': {
    en: "You don't need one. Our interface-first matching system lets you find the right replacement part by measuring what matters — connection type, key dimensions, and electrical specs. No model number, no serial lookup, no guesswork.",
    ar: 'لست بحاجة إليه. يتيح لك نظام المطابقة القائم على الواجهة العثور على القطعة البديلة الصحيحة بقياس ما يهم — نوع التوصيل والأبعاد الرئيسية والمواصفات الكهربائية. بدون رقم موديل، بدون بحث تسلسلي، بدون تخمين.',
    es: 'No lo necesita. Nuestro sistema de coincidencia por interfaz le permite encontrar la pieza de repuesto correcta midiendo lo que importa — tipo de conexión, dimensiones clave y especificaciones eléctricas. Sin número de modelo, sin búsqueda de serie, sin adivinanzas.',
  },
  'compatibility.why_title': {
    en: 'Why Interface Matching Works Better',
    ar: 'لماذا تعمل مطابقة الواجهة بشكل أفضل',
    es: 'Por Qué la Coincidencia por Interfaz Funciona Mejor',
  },
  'compatibility.why_desc': {
    en: 'Traditional replacement requires a model number, but evaporative coolers often have missing labels, multiple OEM variants, or obsolete series. We match by the physical and electrical characteristics of the part itself — the parameters that actually determine whether a replacement fits and functions.',
    ar: 'يتطلب الاستبدال التقليدي رقم الموديل، لكن مبردات الهواء التبخيرية غالبًا ما تكون ملصقاتها مفقودة أو بها متغيرات OEM متعددة أو سلاسل قديمة. نحن نطابق بالخصائص الفيزيائية والكهربائية للقطعة نفسها — المعايير التي تحدد فعليًا ما إذا كان البديل مناسبًا ويعمل.',
    es: 'El reemplazo tradicional requiere un número de modelo, pero los enfriadores evaporativos a menudo tienen etiquetas faltantes, múltiples variantes OEM o series obsoletas. Coincidimos por las características físicas y eléctricas de la pieza misma — los parámetros que realmente determinan si un repuesto encaja y funciona.',
  },
  'compatibility.measurable': {
    en: 'Measurable',
    ar: 'قابل للقياس',
    es: 'Medible',
  },
  'compatibility.measurable_desc': {
    en: 'You can measure thread size, shaft diameter, or pad dimensions with basic tools. No special equipment needed.',
    ar: 'يمكنك قياس حجم السن أو قطر العمود أو أبعاد الوسادة بأدوات أساسية. لا حاجة لمعدات خاصة.',
    es: 'Puede medir el tamaño de rosca, diámetro del eje o dimensiones de la almohadilla con herramientas básicas. Sin equipo especial.',
  },
  'compatibility.universal': {
    en: 'Universal',
    ar: 'عالمي',
    es: 'Universal',
  },
  'compatibility.universal_desc': {
    en: "Interface types are standard across manufacturers. A 1/2\" threaded pump connection is the same regardless of brand.",
    ar: 'أنواع الواجهات قياسية عبر المصنعين. توصيلة مضخة 1/2 بوصة ملولبة هي نفسها بغض النظر عن العلامة التجارية.',
    es: 'Los tipos de interfaz son estándar entre fabricantes. Una conexión de bomba roscada de 1/2" es igual sin importar la marca.',
  },
  'compatibility.reliable': {
    en: 'Reliable',
    ar: 'موثوق',
    es: 'Confiable',
  },
  'compatibility.reliable_desc': {
    en: 'If the interface, dimensions, and specs match, the part will work — regardless of what model it was originally made for.',
    ar: 'إذا تطابقت الواجهة والأبعاد والمواصفات، ستعمل القطعة — بغض النظر عن الموديل الذي صُنعت له أصلاً.',
    es: 'Si la interfaz, dimensiones y especificaciones coinciden, la pieza funcionará — sin importar para qué modelo se fabricó originalmente.',
  },
  'compatibility.four_ways': {
    en: 'Four Ways to Match Your Part',
    ar: 'أربع طرق لمطابقة قطعتك',
    es: 'Cuatro Formas de Hacer Coincidir su Pieza',
  },
  'compatibility.four_ways_desc': {
    en: 'Choose the method that matches the information you have. Combine approaches for the most confident match.',
    ar: 'اختر الطريقة التي تتطابق مع المعلومات المتوفرة لديك. اجمع بين الأساليب لأكثر تطابق موثوق.',
    es: 'Elija el método que coincida con la información que tiene. Combine enfoques para la coincidencia más segura.',
  },
  'compatibility.by_interface': {
    en: 'By Interface',
    ar: 'حسب الواجهة',
    es: 'Por Interfaz',
  },
  'compatibility.interface_desc': {
    en: 'Threaded, flanged, push-fit, hose barb, or clamp mount. The connection point is the most reliable matching parameter.',
    ar: 'ملولب، ذو شفة، تركيب بالدفع، وصلة خرطوم، أو مشبك. نقطة التوصيل هي أكثر معايير المطابقة موثوقية.',
    es: 'Roscado, brida, ajuste a presión, barba de manguera o abrazadera. El punto de conexión es el parámetro de coincidencia más confiable.',
  },
  'compatibility.by_dimensions': {
    en: 'By Dimensions',
    ar: 'حسب الأبعاد',
    es: 'Por Dimensiones',
  },
  'compatibility.dimensions_desc': {
    en: 'Shaft diameter, pad size, bolt pattern, frame dimensions. Physical fit is determined by key measurements.',
    ar: 'قطر العمود، حجم الوسادة، نمط البراغي، أبعاد الإطار. يتم تحديد الملاءمة الفيزيائية بالقياسات الرئيسية.',
    es: 'Diámetro del eje, tamaño de almohadilla, patrón de pernos, dimensiones del marco. El ajuste físico se determina por medidas clave.',
  },
  'compatibility.by_electrical': {
    en: 'By Electrical',
    ar: 'حسب الكهرباء',
    es: 'Por Electricidad',
  },
  'compatibility.electrical_desc': {
    en: 'Voltage, power (W), RPM. Electrical components must match operating parameters for safe, correct function.',
    ar: 'الجهد، القدرة (واط)، عدد الدورات. يجب أن تتطابق المكونات الكهربائية مع معايير التشغيل للوظيفة الآمنة والصحيحة.',
    es: 'Voltaje, potencia (W), RPM. Los componentes eléctricos deben coincidir con los parámetros de operación para un funcionamiento seguro y correcto.',
  },
  'compatibility.cross_ref': {
    en: 'Cross-Reference',
    ar: 'مرجع متقاطع',
    es: 'Referencia Cruzada',
  },
  'compatibility.cross_ref_desc': {
    en: 'Find alternatives by part function — pump, seal, motor, capacitor. Follow the replacement chain.',
    ar: 'اعثر على البدائل حسب وظيفة القطعة — مضخة، مانع تسرب، محرك، مكثف. اتبع سلسلة الاستبدال.',
    es: 'Encuentre alternativas por función de la pieza — bomba, sello, motor, capacitor. Siga la cadena de reemplazo.',
  },
  'compatibility.browse_link': {
    en: 'Browse',
    ar: 'تصفح',
    es: 'Explorar',
  },
  'compatibility.interface_browse_link': {
    en: 'Browse threaded, push-fit & more',
    ar: 'تصفح الملولب والتركيب بالدفع والمزيد',
    es: 'Explorar roscado, ajuste a presión y más',
  },
  'compatibility.dimensions_browse_link': {
    en: 'Browse 12mm shaft, 600mm pads',
    ar: 'تصفح عمود 12 مم، وسادات 600 مم',
    es: 'Explorar eje 12mm, almohadillas 600mm',
  },
  'compatibility.electrical_browse_link': {
    en: 'Browse 110V, 220V, RPM ranges',
    ar: 'تصفح 110 فولت، 220 فولت، نطاقات RPM',
    es: 'Explorar 110V, 220V, rangos de RPM',
  },
  'compatibility.cross_ref_browse_link': {
    en: 'Browse functional chains',
    ar: 'تصفح السلاسل الوظيفية',
    es: 'Explorar cadenas funcionales',
  },
  'compatibility.evidence_title': {
    en: 'How We Confirm Compatibility',
    ar: 'كيف نؤكد التوافق',
    es: 'Cómo Confirmamos la Compatibilidad',
  },
  'compatibility.evidence_desc': {
    en: 'Every product listing includes compatibility evidence that tells you how confident the match is, and what parameters were used to verify it.',
    ar: 'تتضمن كل قائمة منتج أدلة توافق تخبرك بمدى ثقة المطابقة، وما المعايير المستخدمة للتحقق منها.',
    es: 'Cada listado de producto incluye evidencia de compatibilidad que indica qué tan segura es la coincidencia y qué parámetros se usaron para verificarla.',
  },
  'compatibility.evidence_types': {
    en: 'Evidence Types',
    ar: 'أنواع الأدلة',
    es: 'Tipos de Evidencia',
  },
  'compatibility.evidence_interface': {
    en: 'Interface Match',
    ar: 'مطابقة الواجهة',
    es: 'Coincidencia de Interfaz',
  },
  'compatibility.evidence_interface_desc': {
    en: 'Connection type verified — threaded, flange, push-fit, or bracket.',
    ar: 'تم التحقق من نوع التوصيل — ملولب، شفة، تركيب بالدفع، أو كتيفة.',
    es: 'Tipo de conexión verificado — roscado, brida, ajuste a presión o soporte.',
  },
  'compatibility.evidence_dimensional': {
    en: 'Dimensional Match',
    ar: 'مطابقة الأبعاد',
    es: 'Coincidencia Dimensional',
  },
  'compatibility.evidence_dimensional_desc': {
    en: 'Key dimensions confirmed — shaft diameter, pad size, bolt pattern.',
    ar: 'تم تأكيد الأبعاد الرئيسية — قطر العمود، حجم الوسادة، نمط البراغي.',
    es: 'Dimensiones clave confirmadas — diámetro del eje, tamaño de almohadilla, patrón de pernos.',
  },
  'compatibility.evidence_electrical': {
    en: 'Electrical Match',
    ar: 'مطابقة كهربائية',
    es: 'Coincidencia Eléctrica',
  },
  'compatibility.evidence_electrical_desc': {
    en: 'Voltage, power, RPM verified — operates safely within specified range.',
    ar: 'تم التحقق من الجهد والقدرة وعدد الدورات — يعمل بأمان ضمن النطاق المحدد.',
    es: 'Voltaje, potencia, RPM verificados — opera de forma segura dentro del rango especificado.',
  },
  'compatibility.confidence_levels': {
    en: 'Confidence Levels',
    ar: 'مستويات الثقة',
    es: 'Niveles de Confianza',
  },
  'compatibility.conf_guaranteed': {
    en: 'Guaranteed',
    ar: 'مضمون',
    es: 'Garantizado',
  },
  'compatibility.conf_guaranteed_desc': {
    en: 'Full interface, dimension, and electrical match confirmed.',
    ar: 'تم تأكيد المطابقة الكاملة للواجهة والأبعاد والكهرباء.',
    es: 'Coincidencia completa de interfaz, dimensión y electricidad confirmada.',
  },
  'compatibility.conf_most_common': {
    en: 'Most Common',
    ar: 'الأكثر شيوعًا',
    es: 'Más Común',
  },
  'compatibility.conf_most_common_desc': {
    en: 'High probability — the standard replacement in most cases.',
    ar: 'احتمالية عالية — البديل القياسي في معظم الحالات.',
    es: 'Alta probabilidad — el reemplazo estándar en la mayoría de los casos.',
  },
  'compatibility.conf_needs_check': {
    en: 'Needs Confirmation',
    ar: 'يحتاج تأكيد',
    es: 'Necesita Confirmación',
  },
  'compatibility.conf_needs_check_desc': {
    en: 'Contact us with photos or measurements for final verification.',
    ar: 'اتصل بنا مع صور أو قياسات للتحقق النهائي.',
    es: 'Contáctenos con fotos o medidas para verificación final.',
  },
  'compatibility.step_title': {
    en: 'Step-by-Step: How to Identify Your Part',
    ar: 'خطوة بخطوة: كيفية تحديد قطعتك',
    es: 'Paso a Paso: Cómo Identificar su Pieza',
  },
  'compatibility.step_desc': {
    en: 'A systematic approach. Complete these steps and you\'ll have everything needed to find the right replacement.',
    ar: 'نهج منهجي. أكمل هذه الخطوات وسيكون لديك كل ما يلزم للعثور على البديل الصحيح.',
    es: 'Un enfoque sistemático. Complete estos pasos y tendrá todo lo necesario para encontrar el reemplazo correcto.',
  },
  'compatibility.step1_title': {
    en: 'Determine the System',
    ar: 'حدد النظام',
    es: 'Determine el Sistema',
  },
  'compatibility.step1_desc': {
    en: 'Which part of the cooler? Water system, evaporation, air movement, electrical, structure, or maintenance.',
    ar: 'أي جزء من المبرد؟ نظام المياه، التبخير، حركة الهواء، الكهرباء، الهيكل، أو الصيانة.',
    es: '¿Qué parte del enfriador? Sistema de agua, evaporación, movimiento de aire, eléctrico, estructura o mantenimiento.',
  },
  'compatibility.step2_title': {
    en: 'Check the Interface',
    ar: 'تحقق من الواجهة',
    es: 'Revise la Interfaz',
  },
  'compatibility.step2_desc': {
    en: 'How does it connect? Threaded, flanged, push-fit, or clamped. Measure thread diameter or bolt pattern.',
    ar: 'كيف تتصل؟ ملولبة، ذات شفة، تركيب بالدفع، أو مشبك. قس قطر السن أو نمط البراغي.',
    es: '¿Cómo se conecta? Roscado, brida, ajuste a presión o abrazadera. Mida el diámetro de rosca o patrón de pernos.',
  },
  'compatibility.step3_title': {
    en: 'Measure Key Dimensions',
    ar: 'قس الأبعاد الرئيسية',
    es: 'Mida las Dimensiones Clave',
  },
  'compatibility.step3_desc': {
    en: 'Shaft diameter, pad size, bolt hole spacing. Use calipers or a ruler — millimeters are best.',
    ar: 'قطر العمود، حجم الوسادة، تباعد فتحات البراغي. استخدم القدمة ذات الورنية أو المسطرة — المليمترات هي الأفضل.',
    es: 'Diámetro del eje, tamaño de almohadilla, espaciado de agujeros. Use calibrador o regla — los milímetros son lo mejor.',
  },
  'compatibility.step4_title': {
    en: 'Note Electrical Specs',
    ar: 'لاحظ المواصفات الكهربائية',
    es: 'Anote las Especificaciones Eléctricas',
  },
  'compatibility.step4_desc': {
    en: 'Voltage, power (W), RPM. Check the label on your existing motor or pump for these values.',
    ar: 'الجهد، القدرة (واط)، عدد الدورات. تحقق من الملصق على المحرك أو المضخة الحالية لهذه القيم.',
    es: 'Voltaje, potencia (W), RPM. Revise la etiqueta en su motor o bomba actual para estos valores.',
  },
  'compatibility.full_guide_cta': {
    en: 'Full Identification Guide',
    ar: 'دليل التعريف الكامل',
    es: 'Guía Completa de Identificación',
  },
  'compatibility.not_sure_cta': {
    en: 'Not Sure? Send Us a Photo',
    ar: 'غير متأكد؟ أرسل لنا صورة',
    es: '¿No está Seguro? Envíenos una Foto',
  },
  'compatibility.cta_title': {
    en: 'Have Measurements Ready?',
    ar: 'هل قياساتك جاهزة؟',
    es: '¿Tiene las Medidas Listas?',
  },
  'compatibility.cta_desc': {
    en: 'Include your interface type, dimensions, and electrical specs in your inquiry. Our team will confirm compatibility and provide a quote within 24 hours.',
    ar: 'أدرج نوع الواجهة والأبعاد والمواصفات الكهربائية في استفسارك. سيؤكد فريقنا التوافق ويقدم عرض سعر خلال 24 ساعة.',
    es: 'Incluya su tipo de interfaz, dimensiones y especificaciones eléctricas en su consulta. Nuestro equipo confirmará la compatibilidad y proporcionará una cotización dentro de 24 horas.',
  },
  'compatibility.request_quote': {
    en: 'Request a Quote',
    ar: 'طلب عرض سعر',
    es: 'Solicitar Cotización',
  },
  'compatibility.start_matching': {
    en: 'Start Matching by Interface',
    ar: 'ابدأ المطابقة حسب الواجهة',
    es: 'Comenzar a Coincidir por Interfaz',
  },

  // ── Compatibility Method Page ──
  'compatibility_method.home': {
    en: 'Home',
    ar: 'الرئيسية',
    es: 'Inicio',
  },
  'compatibility_method.compatibility': {
    en: 'Compatibility',
    ar: 'التوافق',
    es: 'Compatibilidad',
  },
  'compatibility_method.what_to_check': {
    en: 'What to Check',
    ar: 'ما يجب التحقق منه',
    es: 'Qué Revisar',
  },
  'compatibility_method.key_params': {
    en: 'Key parameters to identify and match before ordering.',
    ar: 'المعايير الرئيسية لتحديد ومطابقة قبل الطلب.',
    es: 'Parámetros clave para identificar y hacer coincidir antes de ordenar.',
  },
  'compatibility_method.quick_lookup': {
    en: 'Quick Lookup',
    ar: 'بحث سريع',
    es: 'Búsqueda Rápida',
  },
  'compatibility_method.matching_products': {
    en: 'Matching Products',
    ar: 'المنتجات المطابقة',
    es: 'Productos Coincidentes',
  },
  'compatibility_method.products_with': {
    en: 'products with matching',
    ar: 'منتج مع',
    es: 'productos con',
  },
  'compatibility_method.interface_specs': {
    en: 'interface types',
    ar: 'أنواع واجهات',
    es: 'tipos de interfaz',
  },
  'compatibility_method.dimension_specs': {
    en: 'dimensions',
    ar: 'أبعاد',
    es: 'dimensiones',
  },
  'compatibility_method.electrical_specs': {
    en: 'electrical specs',
    ar: 'مواصفات كهربائية',
    es: 'especificaciones eléctricas',
  },
  'compatibility_method.compat_data': {
    en: 'compatibility data',
    ar: 'بيانات توافق',
    es: 'datos de compatibilidad',
  },
  'compatibility_method.cta_title': {
    en: 'Have your measurements ready?',
    ar: 'هل قياساتك جاهزة؟',
    es: '¿Tiene sus medidas listas?',
  },
  'compatibility_method.cta_desc': {
    en: 'Include all interface details, dimensions, and electrical specs in your inquiry for the fastest match.',
    ar: 'أدرج جميع تفاصيل الواجهة والأبعاد والمواصفات الكهربائية في استفسارك لأسرع مطابقة.',
    es: 'Incluya todos los detalles de interfaz, dimensiones y especificaciones eléctricas en su consulta para la coincidencia más rápida.',
  },
  'compatibility_method.submit_inquiry': {
    en: 'Submit Inquiry',
    ar: 'إرسال الاستفسار',
    es: 'Enviar Consulta',
  },
  'compatibility_method.back_to_guide': {
    en: 'Back to Guide',
    ar: 'العودة إلى الدليل',
    es: 'Volver a la Guía',
  },

  // ── How to Identify Part Number Page ──
  'identify.title': {
    en: 'Find Your Part — EVAPFit',
    ar: 'اعثر على قطعتك — إيفاب فيت',
    es: 'Encuentre su Pieza — EVAPFit',
  },
  'identify.hero_heading': {
    en: 'What Part Are You Replacing?',
    ar: 'ما القطعة التي تستبدلها؟',
    es: '¿Qué Pieza Está Reemplazando?',
  },
  'identify.hero_desc': {
    en: "Don't know the model number? That's fine. Tell us which area of the cooler your part belongs to, and we'll guide you to the right category.",
    ar: 'لا تعرف رقم الموديل؟ لا بأس. أخبرنا بأي منطقة من المبرد تنتمي إليها قطعتك، وسنوجهك إلى الفئة الصحيحة.',
    es: '¿No sabe el número de modelo? Está bien. Díganos a qué área del enfriador pertenece su pieza y lo guiaremos a la categoría correcta.',
  },
  'identify.sub_categories': {
    en: 'sub-categories',
    ar: 'فئات فرعية',
    es: 'subcategorías',
  },
  'identify.after_category_title': {
    en: "Once You've Found Your Category — What to Check",
    ar: 'بعد أن وجدت فئتك — ما يجب التحقق منه',
    es: 'Una Vez que Encontró su Categoría — Qué Revisar',
  },
  'identify.check_interface': {
    en: 'Interface Type',
    ar: 'نوع الواجهة',
    es: 'Tipo de Interfaz',
  },
  'identify.check_interface_desc': {
    en: 'Threaded? Flanged? Push-fit? Measure thread size or bolt pattern.',
    ar: 'ملولب؟ ذو شفة؟ تركيب بالدفع؟ قس حجم السن أو نمط البراغي.',
    es: '¿Roscado? ¿Brida? ¿Ajuste a presión? Mida el tamaño de rosca o patrón de pernos.',
  },
  'identify.check_dimensions': {
    en: 'Key Dimensions',
    ar: 'الأبعاد الرئيسية',
    es: 'Dimensiones Clave',
  },
  'identify.check_dimensions_desc': {
    en: 'Shaft diameter, pad size, bolt spacing. Use millimeters.',
    ar: 'قطر العمود، حجم الوسادة، تباعد البراغي. استخدم المليمترات.',
    es: 'Diámetro del eje, tamaño de almohadilla, espaciado de pernos. Use milímetros.',
  },
  'identify.check_electrical': {
    en: 'Electrical Specs',
    ar: 'المواصفات الكهربائية',
    es: 'Especificaciones Eléctricas',
  },
  'identify.check_electrical_desc': {
    en: "Voltage, power (W), RPM. Check your existing part's label.",
    ar: 'الجهد، القدرة (واط)، عدد الدورات. تحقق من ملصق قطعتك الحالية.',
    es: 'Voltaje, potencia (W), RPM. Revise la etiqueta de su pieza actual.',
  },
  'identify.still_not_sure': {
    en: 'Still Not Sure?',
    ar: 'ما زلت غير متأكد؟',
    es: '¿Aún no está Seguro?',
  },
  'identify.still_not_sure_desc': {
    en: "Take a photo of your part with a ruler for scale. Submit it with your inquiry — we'll identify the correct replacement.",
    ar: 'التقط صورة لقطعتك مع مسطرة للمقياس. أرسلها مع استفسارك — سنحدد البديل الصحيح.',
    es: 'Tome una foto de su pieza con una regla para escala. Envíela con su consulta — identificaremos el reemplazo correcto.',
  },
  'identify.submit_with_photo': {
    en: 'Submit Inquiry with Photo',
    ar: 'أرسل الاستفسار مع الصورة',
    es: 'Enviar Consulta con Foto',
  },

  // ── Motor Replacement Page ──
  'motor.title': {
    en: 'Replacement Motors for Evaporative Coolers | B3 B5 Mount',
    ar: 'محركات بديلة لمبردات الهواء التبخيرية | تركيب B3 B5',
    es: 'Motores de Repuesto para Enfriadores Evaporativos | Montaje B3 B5',
  },
  'motor.heading': {
    en: 'Replacement Motors',
    ar: 'محركات بديلة',
    es: 'Motores de Repuesto',
  },
  'motor.desc': {
    en: 'Compatible replacement motors for evaporative coolers. Match by voltage, power, RPM, and mounting type — no model number needed.',
    ar: 'محركات بديلة متوافقة لمبردات الهواء التبخيرية. طابق حسب الجهد والقدرة وعدد الدورات ونوع التركيب — بدون الحاجة لرقم الموديل.',
    es: 'Motores de repuesto compatibles para enfriadores evaporativos. Haga coincidir por voltaje, potencia, RPM y tipo de montaje — sin número de modelo.',
  },
  'motor.browse_all': {
    en: 'Browse All Motors',
    ar: 'تصفح جميع المحركات',
    es: 'Explorar Todos los Motores',
  },
  'motor.filter_tip': {
    en: 'Filter by voltage, power or RPM in our catalog',
    ar: 'صفِّ حسب الجهد أو القدرة أو عدد الدورات في كتالوجنا',
    es: 'Filtrar por voltaje, potencia o RPM en nuestro catálogo',
  },
  'motor.available': {
    en: 'Available Motors & Electrical Parts',
    ar: 'المحركات والقطع الكهربائية المتوفرة',
    es: 'Motores y Piezas Eléctricas Disponibles',
  },

  // ── Water Pump Replacement Page ──
  'waterpump.title': {
    en: 'Water Pump Replacement Parts for Evaporative Coolers | Compatible by Interface',
    ar: 'قطع غيار مضخات المياه لمبردات الهواء التبخيرية | متوافقة حسب الواجهة',
    es: 'Refacciones de Bombas de Agua para Enfriadores Evaporativos | Compatibles por Interfaz',
  },
  'waterpump.heading': {
    en: 'Water Pump Replacement Parts',
    ar: 'قطع غيار مضخات المياه',
    es: 'Refacciones de Bombas de Agua',
  },
  'waterpump.desc': {
    en: 'Find compatible replacement water pumps and accessories for portable and cabinet evaporative air coolers. Threaded, push-fit, and hose barb connections available.',
    ar: 'اعثر على مضخات مياه بديلة متوافقة وملحقاتها لمبردات الهواء التبخيرية المحمولة والخزائنية. تتوفر توصيلات ملولبة وتركيب بالدفع وخرطوم.',
    es: 'Encuentre bombas de agua de repuesto compatibles y accesorios para enfriadores de aire evaporativos portátiles y de gabinete. Conexiones roscadas, de ajuste a presión y barba de manguera disponibles.',
  },
  'waterpump.browse_all': {
    en: 'Browse All Pumps',
    ar: 'تصفح جميع المضخات',
    es: 'Explorar Todas las Bombas',
  },
  'waterpump.available': {
    en: 'Available Water Pump Parts',
    ar: 'قطع مضخات المياه المتوفرة',
    es: 'Piezas de Bombas de Agua Disponibles',
  },

  // ── Sample Request Page ──
  'sample.title': {
    en: 'Sample Request — Verify Quality Before Ordering | EVAPFit',
    ar: 'طلب عينة — تحقق من الجودة قبل الطلب | إيفاب فيت',
    es: 'Solicitud de Muestra — Verifique la Calidad Antes de Ordenar | EVAPFit',
  },
  'sample.hero_subtitle': {
    en: 'Sample Service',
    ar: 'خدمة العينات',
    es: 'Servicio de Muestras',
  },
  'sample.hero_heading': {
    en: 'Try Before You Commit',
    ar: 'جرب قبل أن تلتزم',
    es: 'Pruebe Antes de Comprometerse',
  },
  'sample.hero_desc': {
    en: 'Request 1-2 sample units to verify quality, compatibility, and specifications before placing a bulk order. Samples ship in 3-5 working days via express courier — the cost is deducted from your first order.',
    ar: 'اطلب 1-2 وحدة عينة للتحقق من الجودة والتوافق والمواصفات قبل تقديم طلب بالجملة. تشحن العينات في 3-5 أيام عمل عبر البريد السريع — يتم خصم التكلفة من طلبك الأول.',
    es: 'Solicite 1-2 unidades de muestra para verificar calidad, compatibilidad y especificaciones antes de realizar un pedido al por mayor. Las muestras se envían en 3-5 días hábiles por mensajería exprés — el costo se deduce de su primer pedido.',
  },
  'sample.how_title': {
    en: 'How Sample Orders Work',
    ar: 'كيف تعمل طلبات العينات',
    es: 'Cómo Funcionan los Pedidos de Muestra',
  },
  'sample.step1_title': {
    en: 'Choose Your Product',
    ar: 'اختر منتجك',
    es: 'Elija su Producto',
  },
  'sample.step1_desc': {
    en: 'Browse our catalog and find the part you need. Add it to your inquiry list on the product detail page.',
    ar: 'تصفح كتالوجنا واعثر على القطعة التي تحتاجها. أضفها إلى قائمة استفساراتك في صفحة تفاصيل المنتج.',
    es: 'Explore nuestro catálogo y encuentre la pieza que necesita. Agréguela a su lista de consulta en la página de detalles del producto.',
  },
  'sample.step2_title': {
    en: 'Submit Inquiry',
    ar: 'أرسل الاستفسار',
    es: 'Envíe su Consulta',
  },
  'sample.step2_desc': {
    en: 'Fill out the inquiry form. Mention "Sample Request" in the notes section along with any specific requirements.',
    ar: 'املأ نموذج الاستفسار. اذكر "طلب عينة" في قسم الملاحظات مع أي متطلبات محددة.',
    es: 'Complete el formulario de consulta. Mencione "Solicitud de Muestra" en la sección de notas junto con cualquier requisito específico.',
  },
  'sample.step3_title': {
    en: 'Receive Confirmation',
    ar: 'استلم التأكيد',
    es: 'Reciba Confirmación',
  },
  'sample.step3_desc': {
    en: 'We respond within 24 hours with sample pricing, shipping cost, and payment instructions.',
    ar: 'نرد خلال 24 ساعة مع تسعير العينة وتكلفة الشحن وتعليمات الدفع.',
    es: 'Respondemos dentro de 24 horas con el precio de la muestra, costo de envío e instrucciones de pago.',
  },
  'sample.step4_title': {
    en: 'Samples Ship',
    ar: 'شحن العينات',
    es: 'Las Muestras se Envían',
  },
  'sample.step4_desc': {
    en: 'Samples dispatch within 3-5 working days. Tracking number provided. Typically arrive in 5-7 days via DHL/FedEx.',
    ar: 'تشحن العينات خلال 3-5 أيام عمل. يتم توفير رقم التتبع. تصل عادةً في 5-7 أيام عبر DHL/FedEx.',
    es: 'Las muestras se despachan en 3-5 días hábiles. Se proporciona número de seguimiento. Generalmente llegan en 5-7 días por DHL/FedEx.',
  },
  'sample.cost_title': {
    en: 'Sample Cost & Refund Policy',
    ar: 'تكلفة العينة وسياسة الاسترداد',
    es: 'Costo de Muestra y Política de Reembolso',
  },
  'sample.cost_unit': {
    en: 'Sample Unit Price',
    ar: 'سعر وحدة العينة',
    es: 'Precio Unitario de Muestra',
  },
  'sample.cost_unit_desc': {
    en: "Priced at the same unit rate as small-quantity orders. We don't mark up samples — you pay the standard cost.",
    ar: 'تسعر بنفس سعر الوحدة للطلبات الصغيرة. لا نرفع سعر العينات — تدفع التكلفة القياسية.',
    es: 'Precio igual a la tarifa unitaria de pedidos de pequeña cantidad. No inflamos las muestras — paga el costo estándar.',
  },
  'sample.cost_shipping': {
    en: 'Express Shipping',
    ar: 'شحن سريع',
    es: 'Envío Exprés',
  },
  'sample.cost_shipping_desc': {
    en: 'DHL, FedEx, or UPS. Shipping cost depends on weight and destination. Typically $25-50 for 1-2 small parts.',
    ar: 'DHL أو FedEx أو UPS. تعتمد تكلفة الشحن على الوزن والوجهة. عادةً $25-50 لقطعة أو قطعتين صغيرتين.',
    es: 'DHL, FedEx o UPS. El costo de envío depende del peso y destino. Generalmente $25-50 por 1-2 piezas pequeñas.',
  },
  'sample.cost_refund': {
    en: 'Fully Refundable',
    ar: 'قابلة للاسترداد بالكامل',
    es: 'Totalmente Reembolsable',
  },
  'sample.cost_refund_desc': {
    en: 'The total sample cost (product + shipping) is deducted from your first bulk order. If you order 500+ units, your sample was effectively free.',
    ar: 'يتم خصم التكلفة الإجمالية للعينة (المنتج + الشحن) من طلبك الأول بالجملة. إذا طلبت أكثر من 500 وحدة، تكون عينتك مجانية فعليًا.',
    es: 'El costo total de la muestra (producto + envío) se deduce de su primer pedido al por mayor. Si ordena 500+ unidades, su muestra fue efectivamente gratis.',
  },
  'sample.faq_title': {
    en: 'Common Questions',
    ar: 'أسئلة شائعة',
    es: 'Preguntas Comunes',
  },
  'sample.faq_q1': {
    en: 'How many samples can I request?',
    ar: 'كم عينة يمكنني طلبها؟',
    es: '¿Cuántas muestras puedo solicitar?',
  },
  'sample.faq_a1': {
    en: "Typically 1-2 units per product SKU. For larger quantities, this becomes a small trial order — we'll quote accordingly.",
    ar: 'عادةً 1-2 وحدة لكل SKU منتج. للكميات الأكبر، يصبح هذا طلب تجربة صغير — سنقدم عرض سعر وفقًا لذلك.',
    es: 'Generalmente 1-2 unidades por SKU de producto. Para cantidades mayores, esto se convierte en un pedido de prueba pequeño — cotizaremos en consecuencia.',
  },
  'sample.faq_q2': {
    en: 'Are samples identical to production units?',
    ar: 'هل العينات مطابقة لوحدات الإنتاج؟',
    es: '¿Son las muestras idénticas a las unidades de producción?',
  },
  'sample.faq_a2': {
    en: "Yes. Samples come from the same production line as bulk orders. What you test is exactly what you'll receive.",
    ar: 'نعم. تأتي العينات من نفس خط الإنتاج مثل الطلبات بالجملة. ما تختبره هو بالضبط ما ستتسلمه.',
    es: 'Sí. Las muestras provienen de la misma línea de producción que los pedidos al por mayor. Lo que prueba es exactamente lo que recibirá.',
  },
  'sample.faq_q3': {
    en: "What if the sample doesn't fit?",
    ar: 'ماذا لو لم تكن العينة مناسبة؟',
    es: '¿Qué pasa si la muestra no encaja?',
  },
  'sample.faq_a3': {
    en: "Check our compatibility guide before ordering. If specifications were confirmed and the part still doesn't fit, contact us — we'll help identify the correct replacement.",
    ar: 'تحقق من دليل التوافق قبل الطلب. إذا تم تأكيد المواصفات ولا تزال القطعة غير مناسبة، اتصل بنا — سنساعد في تحديد البديل الصحيح.',
    es: "Revise nuestra guía de compatibilidad antes de ordenar. Si las especificaciones se confirmaron y la pieza aún no encaja, contáctenos — lo ayudaremos a identificar el reemplazo correcto.",
  },
  'sample.faq_q4': {
    en: 'Can I get a sample with my branding?',
    ar: 'هل يمكنني الحصول على عينة بعلامتي التجارية؟',
    es: '¿Puedo obtener una muestra con mi marca?',
  },
  'sample.faq_a4': {
    en: 'OEM samples with custom branding require a higher MOQ and longer lead time. For standard samples, products come with our standard labeling.',
    ar: 'تتطلب عينات OEM بعلامة تجارية مخصصة حدًا أدنى أعلى للطلب ومهلة زمنية أطول. للعينات القياسية، تأتي المنتجات بملصقاتنا القياسية.',
    es: 'Las muestras OEM con marca personalizada requieren un MOQ más alto y mayor tiempo de entrega. Para muestras estándar, los productos vienen con nuestro etiquetado estándar.',
  },
  'sample.cta_title': {
    en: 'Ready to Test Our Quality?',
    ar: 'هل أنت مستعد لاختبار جودتنا؟',
    es: '¿Listo para Probar Nuestra Calidad?',
  },
  'sample.cta_desc': {
    en: 'Add products to your inquiry list and mention "Sample Request" in the notes. We\'ll confirm sample availability and pricing within 24 hours.',
    ar: 'أضف المنتجات إلى قائمة استفساراتك واذكر "طلب عينة" في الملاحظات. سنؤكد توفر العينة والتسعير خلال 24 ساعة.',
    es: 'Agregue productos a su lista de consulta y mencione "Solicitud de Muestra" en las notas. Confirmaremos la disponibilidad y precio de la muestra dentro de 24 horas.',
  },
  'sample.request_cta': {
    en: 'Request a Sample',
    ar: 'طلب عينة',
    es: 'Solicitar una Muestra',
  },
  'sample.browse_cta': {
    en: 'Browse Products',
    ar: 'تصفح المنتجات',
    es: 'Explorar Productos',
  },

  // ── RFQ Guide Page ──
  'rfq_guide.title': {
    en: 'RFQ Guide — How to Get an Accurate Quote | EVAPFit',
    ar: 'دليل طلب عرض السعر — كيفية الحصول على عرض سعر دقيق | إيفاب فيت',
    es: 'Guía de Cotización — Cómo Obtener una Cotización Precisa | EVAPFit',
  },
  'rfq_guide.subtitle': {
    en: 'Quote Guide',
    ar: 'دليل عرض السعر',
    es: 'Guía de Cotización',
  },
  'rfq_guide.heading': {
    en: 'How to Get an Accurate Quote',
    ar: 'كيفية الحصول على عرض سعر دقيق',
    es: 'Cómo Obtener una Cotización Precisa',
  },
  'rfq_guide.desc': {
    en: "The more detail you provide, the faster and more accurate your quote will be. Here's exactly what we need.",
    ar: 'كلما زادت التفاصيل التي تقدمها، كان عرض السعر أسرع وأكثر دقة. إليك بالضبط ما نحتاجه.',
    es: 'Cuanto más detalle proporcione, más rápida y precisa será su cotización. Esto es exactamente lo que necesitamos.',
  },
  'rfq_guide.section1_title': {
    en: 'Product Identification',
    ar: 'تحديد المنتج',
    es: 'Identificación del Producto',
  },
  'rfq_guide.section1_text': {
    en: "Tell us exactly which product(s) you're interested in. If you found it on our site, include the product name. If not, describe what it does and which system it belongs to (water, electrical, evaporation, etc.).",
    ar: 'أخبرنا بالضبط عن المنتج (المنتجات) التي تهتم بها. إذا وجدته على موقعنا، أدرج اسم المنتج. إذا لم تجده، صف ما يفعله والنظام الذي ينتمي إليه (مياه، كهرباء، تبخير، إلخ).',
    es: 'Díganos exactamente qué producto(s) le interesan. Si lo encontró en nuestro sitio, incluya el nombre del producto. Si no, describa lo que hace y a qué sistema pertenece (agua, eléctrico, evaporación, etc.).',
  },
  'rfq_guide.good_example': {
    en: 'Good example:',
    ar: 'مثال جيد:',
    es: 'Buen ejemplo:',
  },
  'rfq_guide.example1': {
    en: '"Replacement Water Pump 110V — your catalog page shows this as model WP-110V-15W. We need the threaded 1/2" inlet version."',
    ar: '"مضخة مياه بديلة 110 فولت — صفحة الكتالوج تظهرها كموديل WP-110V-15W. نحتاج نسخة المدخل الملولب 1/2 بوصة."',
    es: '"Bomba de Agua de Repuesto 110V — su página de catálogo la muestra como modelo WP-110V-15W. Necesitamos la versión con entrada roscada de 1/2"."',
  },
  'rfq_guide.section2_title': {
    en: 'Quantity & Budget',
    ar: 'الكمية والميزانية',
    es: 'Cantidad y Presupuesto',
  },
  'rfq_guide.section2_text': {
    en: 'Estimated quantity per SKU. If you\'re unsure about final volume, give a range (e.g., 500-1000 pcs). Also mention if you want sample pricing first, or if you have a target price range.',
    ar: 'الكمية المقدرة لكل SKU. إذا كنت غير متأكد من الحجم النهائي، أعط نطاقًا (مثال: 500-1000 قطعة). اذكر أيضًا إذا كنت تريد تسعير العينة أولاً، أو إذا كان لديك نطاق سعر مستهدف.',
    es: 'Cantidad estimada por SKU. Si no está seguro del volumen final, dé un rango (ej., 500-1000 pzas). Mencione también si quiere precio de muestra primero, o si tiene un rango de precio objetivo.',
  },
  'rfq_guide.example2': {
    en: '"Initial order 500 pcs, with potential for 2000 pcs/quarter ongoing. Target price under $15/pc FOB. Would like to test 2 sample units first."',
    ar: '"طلب مبدئي 500 قطعة، مع إمكانية 2000 قطعة/ربع سنويًا مستمر. السعر المستهدف أقل من $15/قطعة FOB. نود اختبار عينتين أولاً."',
    es: '"Pedido inicial de 500 pzas, con potencial de 2000 pzas/trimestre continuo. Precio objetivo menor a $15/pza FOB. Nos gustaría probar 2 unidades de muestra primero."',
  },
  'rfq_guide.section3_title': {
    en: 'Interface & Dimensions',
    ar: 'الواجهة والأبعاد',
    es: 'Interfaz y Dimensiones',
  },
  'rfq_guide.section3_text': {
    en: 'This is the most critical section. The interface type determines whether the part will physically fit your cooler. Provide as much detail as possible:',
    ar: 'هذا هو القسم الأكثر أهمية. يحدد نوع الواجهة ما إذا كانت القطعة ستناسب مبردك فيزيائيًا. قدم أكبر قدر ممكن من التفاصيل:',
    es: 'Esta es la sección más crítica. El tipo de interfaz determina si la pieza encajará físicamente en su enfriador. Proporcione tanto detalle como sea posible:',
  },
  'rfq_guide.for_pumps': {
    en: 'For Pumps',
    ar: 'للمضخات',
    es: 'Para Bombas',
  },
  'rfq_guide.for_pumps_desc': {
    en: 'Inlet/outlet thread size, overall dimensions, mounting hole spacing',
    ar: 'حجم سن المدخل/المخرج، الأبعاد الكلية، تباعد فتحات التركيب',
    es: 'Tamaño de rosca de entrada/salida, dimensiones generales, espaciado de agujeros de montaje',
  },
  'rfq_guide.for_motors': {
    en: 'For Motors',
    ar: 'للمحركات',
    es: 'Para Motores',
  },
  'rfq_guide.for_motors_desc': {
    en: 'Shaft diameter (mm), mounting type (B3/B5/B14), frame size',
    ar: 'قطر العمود (مم)، نوع التركيب (B3/B5/B14)، حجم الإطار',
    es: 'Diámetro del eje (mm), tipo de montaje (B3/B5/B14), tamaño del marco',
  },
  'rfq_guide.for_pads': {
    en: 'For Cooling Pads',
    ar: 'لوسادات التبريد',
    es: 'Para Almohadillas de Enfriamiento',
  },
  'rfq_guide.for_pads_desc': {
    en: 'Width × height × thickness (mm), flute angle, material type',
    ar: 'العرض × الارتفاع × السماكة (مم)، زاوية التموج، نوع المادة',
    es: 'Ancho × alto × espesor (mm), ángulo de acanaladura, tipo de material',
  },
  'rfq_guide.for_valves': {
    en: 'For Valves/Filters',
    ar: 'للصمامات/الفلاتر',
    es: 'Para Válvulas/Filtros',
  },
  'rfq_guide.for_valves_desc': {
    en: 'Port size, connection type (thread/push-fit), body dimensions',
    ar: 'حجم المنفذ، نوع التوصيل (سن/تركيب بالدفع)، أبعاد الجسم',
    es: 'Tamaño del puerto, tipo de conexión (rosca/ajuste a presión), dimensiones del cuerpo',
  },
  'rfq_guide.section4_title': {
    en: 'Electrical Specifications',
    ar: 'المواصفات الكهربائية',
    es: 'Especificaciones Eléctricas',
  },
  'rfq_guide.section4_text': {
    en: 'If your part is electrical, include these parameters. Mismatched electrical specs can damage equipment or create safety hazards.',
    ar: 'إذا كانت قطعتك كهربائية، أدرج هذه المعايير. المواصفات الكهربائية غير المتطابقة قد تتلف المعدات أو تخلق مخاطر سلامة.',
    es: 'Si su pieza es eléctrica, incluya estos parámetros. Las especificaciones eléctricas no coincidentes pueden dañar el equipo o crear riesgos de seguridad.',
  },
  'rfq_guide.critical_warning': {
    en: 'Critical: Voltage must match exactly. A 220V motor connected to 110V won\'t run; a 110V motor on 220V will burn out.',
    ar: 'هام: يجب أن يتطابق الجهد تمامًا. محرك 220 فولت موصول بـ 110 فولت لن يعمل؛ محرك 110 فولت على 220 فولت سيحترق.',
    es: 'Crítico: El voltaje debe coincidir exactamente. Un motor de 220V conectado a 110V no funcionará; un motor de 110V en 220V se quemará.',
  },
  'rfq_guide.voltage_freq': {
    en: 'Voltage (V) and Frequency (Hz) — e.g., 220V/50Hz',
    ar: 'الجهد (فولت) والتردد (هرتز) — مثال: 220V/50Hz',
    es: 'Voltaje (V) y Frecuencia (Hz) — ej., 220V/50Hz',
  },
  'rfq_guide.power': {
    en: 'Power (W) or Current (A) — e.g., 550W',
    ar: 'القدرة (واط) أو التيار (أمبير) — مثال: 550W',
    es: 'Potencia (W) o Corriente (A) — ej., 550W',
  },
  'rfq_guide.rpm': {
    en: 'RPM — e.g., 1400 RPM',
    ar: 'عدد الدورات (RPM) — مثال: 1400 RPM',
    es: 'RPM — ej., 1400 RPM',
  },
  'rfq_guide.capacitor': {
    en: 'Capacitor value if applicable — e.g., 6µF',
    ar: 'قيمة المكثف إذا كان ذلك منطبقًا — مثال: 6µF',
    es: 'Valor del capacitor si aplica — ej., 6µF',
  },
  'rfq_guide.ip_rating': {
    en: 'IP rating if outdoor use — e.g., IP44',
    ar: 'تصنيف IP إذا كان للاستخدام الخارجي — مثال: IP44',
    es: 'Clasificación IP si es para uso exterior — ej., IP44',
  },
  'rfq_guide.section5_title': {
    en: 'Photos',
    ar: 'الصور',
    es: 'Fotos',
  },
  'rfq_guide.section5_text': {
    en: 'Photos are the single fastest way to get an accurate match. Include:',
    ar: 'الصور هي أسرع طريقة للحصول على مطابقة دقيقة. أدرج:',
    es: 'Las fotos son la forma más rápida de obtener una coincidencia precisa. Incluya:',
  },
  'rfq_guide.photo_front': {
    en: 'Front view — the whole part, clearly visible',
    ar: 'منظر أمامي — القطعة كاملة، مرئية بوضوح',
    es: 'Vista frontal — toda la pieza, claramente visible',
  },
  'rfq_guide.photo_closeup': {
    en: 'Close-up of the connection point — thread, flange, or fitting',
    ar: 'صورة مقربة لنقطة التوصيل — سن، شفة، أو وصلة',
    es: 'Acercamiento del punto de conexión — rosca, brida o accesorio',
  },
  'rfq_guide.photo_labels': {
    en: 'Any labels, part numbers, or markings on the part',
    ar: 'أي ملصقات أو أرقام قطع أو علامات على القطعة',
    es: 'Cualquier etiqueta, número de pieza o marca en la pieza',
  },
  'rfq_guide.photo_scale': {
    en: 'A ruler or coin next to the part for scale reference',
    ar: 'مسطرة أو عملة بجانب القطعة كمرجع للمقياس',
    es: 'Una regla o moneda junto a la pieza como referencia de escala',
  },
  'rfq_guide.section6_title': {
    en: 'Shipping & Delivery',
    ar: 'الشحن والتوصيل',
    es: 'Envío y Entrega',
  },
  'rfq_guide.section6_text': {
    en: 'Help us quote the best shipping option:',
    ar: 'ساعدنا في تسعير أفضل خيار شحن:',
    es: 'Ayúdenos a cotizar la mejor opción de envío:',
  },
  'rfq_guide.shipping_dest': {
    en: 'Destination country and port/airport',
    ar: 'بلد الوجهة والميناء/المطار',
    es: 'País de destino y puerto/aeropuerto',
  },
  'rfq_guide.shipping_incoterms': {
    en: 'Preferred Incoterms — FOB, CIF, DDP, or EXW',
    ar: 'شروط التجارة الدولية المفضلة — FOB، CIF، DDP، أو EXW',
    es: 'Incoterms preferidos — FOB, CIF, DDP o EXW',
  },
  'rfq_guide.shipping_packaging': {
    en: 'Any special packaging or labeling requirements',
    ar: 'أي متطلبات تغليف أو ملصقات خاصة',
    es: 'Cualquier requisito especial de embalaje o etiquetado',
  },
  'rfq_guide.shipping_deadline': {
    en: 'Target delivery date if you have a deadline',
    ar: 'تاريخ التسليم المستهدف إذا كان لديك موعد نهائي',
    es: 'Fecha de entrega objetivo si tiene una fecha límite',
  },
  'rfq_guide.next_title': {
    en: 'What Happens After You Submit',
    ar: 'ماذا يحدث بعد الإرسال',
    es: 'Qué Sucede Después de Enviar',
  },
  'rfq_guide.next_step1': {
    en: 'Within 24 Hours',
    ar: 'خلال 24 ساعة',
    es: 'Dentro de 24 Horas',
  },
  'rfq_guide.next_step1_desc': {
    en: 'Confirmation and any clarification questions.',
    ar: 'تأكيد وأي أسئلة توضيحية.',
    es: 'Confirmación y cualquier pregunta de aclaración.',
  },
  'rfq_guide.next_step2': {
    en: '1-2 Business Days',
    ar: '1-2 يوم عمل',
    es: '1-2 Días Hábiles',
  },
  'rfq_guide.next_step2_desc': {
    en: 'Detailed quote with pricing, MOQ, and lead time.',
    ar: 'عرض سعر مفصل مع التسعير والحد الأدنى للطلب والمهلة الزمنية.',
    es: 'Cotización detallada con precios, MOQ y tiempo de entrega.',
  },
  'rfq_guide.next_step3': {
    en: 'After Approval',
    ar: 'بعد الموافقة',
    es: 'Después de la Aprobación',
  },
  'rfq_guide.next_step3_desc': {
    en: 'Sample production begins. Bulk order after sample approval.',
    ar: 'يبدأ إنتاج العينة. الطلب بالجملة بعد الموافقة على العينة.',
    es: 'Comienza la producción de muestras. Pedido al por mayor después de la aprobación de la muestra.',
  },
  'rfq_guide.cta_title': {
    en: 'Ready to Request a Quote?',
    ar: 'هل أنت مستعد لطلب عرض سعر؟',
    es: '¿Listo para Solicitar una Cotización?',
  },
  'rfq_guide.cta_desc': {
    en: 'Your inquiry list items will be pre-filled in the form. Include the details above for the fastest, most accurate response.',
    ar: 'سيتم ملء عناصر قائمة استفساراتك مسبقًا في النموذج. أدرج التفاصيل أعلاه لأسرع وأدق رد.',
    es: 'Los elementos de su lista de consulta se prellenarán en el formulario. Incluya los detalles anteriores para la respuesta más rápida y precisa.',
  },
  'rfq_guide.submit_cta': {
    en: 'Submit Inquiry',
    ar: 'إرسال الاستفسار',
    es: 'Enviar Consulta',
  },

  // ── Compatibility Method Tips ──
  'compat_tips.interface_1': {
    en: 'Threaded connections — measure thread diameter and pitch (e.g., 1/2" NPT, M12×1.5)',
    ar: 'التوصيلات الملولبة — قس قطر السن ودرجته (مثال: 1/2" NPT، M12×1.5)',
    es: 'Conexiones roscadas — mida el diámetro y paso de rosca (ej., 1/2" NPT, M12×1.5)',
  },
  'compat_tips.interface_2': {
    en: 'Flange mounts — measure bolt circle diameter, hole count, and hole diameter',
    ar: 'تركيبات الشفة — قس قطر دائرة البراغي وعدد الفتحات وقطر الفتحة',
    es: 'Montajes de brida — mida el diámetro del círculo de pernos, cantidad y diámetro de agujeros',
  },
  'compat_tips.interface_3': {
    en: 'Push-fit / quick-connect — measure tube OD (outer diameter)',
    ar: 'تركيب بالدفع / توصيل سريع — قس القطر الخارجي للأنبوب (OD)',
    es: 'Ajuste a presión / conexión rápida — mida el DE (diámetro exterior) del tubo',
  },
  'compat_tips.interface_4': {
    en: 'Hose barb — measure barb OD and hose ID',
    ar: 'وصلة خرطوم — قس القطر الخارجي للوصلة والقطر الداخلي للخرطوم',
    es: 'Barba de manguera — mida el DE de la barba y el DI de la manguera',
  },
  'compat_tips.interface_5': {
    en: 'Bracket/clamp — measure bracket dimensions, hole spacing, and slot size',
    ar: 'كتيفة/مشبك — قس أبعاد الكتيفة وتباعد الفتحات وحجم الفتحة',
    es: 'Soporte/abrazadera — mida las dimensiones del soporte, espaciado de agujeros y tamaño de ranura',
  },
  'compat_tips.interface_6': {
    en: 'If your part has multiple interfaces, note all of them — we can cross-reference to find matches',
    ar: 'إذا كانت قطعتك لها واجهات متعددة، لاحظها جميعًا — يمكننا عمل مرجع متقاطع لإيجاد المطابقات',
    es: 'Si su pieza tiene múltiples interfaces, anótelas todas — podemos hacer referencia cruzada para encontrar coincidencias',
  },
  'compat_tips.dimensions_1': {
    en: 'For pumps: inlet/outlet size, overall length × width × height, mounting hole center distance',
    ar: 'للمضخات: حجم المدخل/المخرج، الطول × العرض × الارتفاع الكلي، مسافة مركز فتحة التركيب',
    es: 'Para bombas: tamaño de entrada/salida, largo × ancho × alto total, distancia entre centros de agujeros de montaje',
  },
  'compat_tips.dimensions_2': {
    en: 'For motors: shaft diameter (mm), shaft length, mounting type (B3/B5/B14), frame size',
    ar: 'للمحركات: قطر العمود (مم)، طول العمود، نوع التركيب (B3/B5/B14)، حجم الإطار',
    es: 'Para motores: diámetro del eje (mm), longitud del eje, tipo de montaje (B3/B5/B14), tamaño del marco',
  },
  'compat_tips.dimensions_3': {
    en: 'For cooling pads: width × height × thickness, flute angle, pad material',
    ar: 'لوسادات التبريد: العرض × الارتفاع × السماكة، زاوية التموج، مادة الوسادة',
    es: 'Para almohadillas de enfriamiento: ancho × alto × espesor, ángulo de acanaladura, material',
  },
  'compat_tips.dimensions_4': {
    en: 'For filters: outer dimensions, frame thickness, pleat count',
    ar: 'للفلاتر: الأبعاد الخارجية، سمك الإطار، عدد الطيات',
    es: 'Para filtros: dimensiones exteriores, espesor del marco, número de pliegues',
  },
  'compat_tips.dimensions_5': {
    en: 'For valves: port size, body length, flange dimensions',
    ar: 'للصمامات: حجم المنفذ، طول الجسم، أبعاد الشفة',
    es: 'Para válvulas: tamaño del puerto, longitud del cuerpo, dimensiones de brida',
  },
  'compat_tips.dimensions_6': {
    en: 'Always measure in millimeters for the most accurate matching',
    ar: 'قس دائمًا بالمليمترات للحصول على أدق مطابقة',
    es: 'Mida siempre en milímetros para la coincidencia más precisa',
  },
  'compat_tips.electrical_1': {
    en: 'Voltage (V) — must match exactly (110V, 220V, 230V, 380V, 415V, or Universal)',
    ar: 'الجهد (فولت) — يجب أن يتطابق تمامًا (110V، 220V، 230V، 380V، 415V، أو عالمي)',
    es: 'Voltaje (V) — debe coincidir exactamente (110V, 220V, 230V, 380V, 415V o Universal)',
  },
  'compat_tips.electrical_2': {
    en: 'Power (W) — within acceptable range; slight variations are usually OK',
    ar: 'القدرة (واط) — ضمن النطاق المقبول؛ الاختلافات الطفيفة عادة مقبولة',
    es: 'Potencia (W) — dentro del rango aceptable; variaciones leves generalmente están bien',
  },
  'compat_tips.electrical_3': {
    en: 'RPM — for motors, match the speed rating for proper fan/blower performance',
    ar: 'عدد الدورات (RPM) — للمحركات، طابق تصنيف السرعة لأداء مناسب للمروحة/المنفاخ',
    es: 'RPM — para motores, haga coincidir la velocidad para un rendimiento adecuado del ventilador/soplador',
  },
  'compat_tips.electrical_4': {
    en: 'Frequency (Hz) — 50Hz vs 60Hz affects motor speed; usually auto-adapts within range',
    ar: 'التردد (هرتز) — 50Hz مقابل 60Hz يؤثر على سرعة المحرك؛ عادة يتكيف تلقائيًا ضمن النطاق',
    es: 'Frecuencia (Hz) — 50Hz vs 60Hz afecta la velocidad del motor; generalmente se auto-adapta dentro del rango',
  },
  'compat_tips.electrical_5': {
    en: 'Capacitor — match µF rating and voltage rating',
    ar: 'المكثف — طابق تصنيف µF وتصنيف الجهد',
    es: 'Capacitor — haga coincidir la clasificación de µF y voltaje',
  },
  'compat_tips.electrical_6': {
    en: 'IP rating — match ingress protection level for outdoor/indoor use',
    ar: 'تصنيف IP — طابق مستوى الحماية من الدخول للاستخدام الخارجي/الداخلي',
    es: 'Clasificación IP — haga coincidir el nivel de protección para uso exterior/interior',
  },
  'compat_tips.cross_reference_1': {
  en: 'Pump replacement chain: pump → pump seal → strainer/filter → hose connectors → solenoid valve',
    ar: 'سلسلة استبدال المضخة: مضخة → مانع تسرب المضخة → مصفاة/فلتر → موصلات خرطوم → صمام ملف لولبي',
    es: 'Cadena de reemplazo de bomba: bomba → sello de bomba → colador/filtro → conectores de manguera → válvula solenoide',
  },
  'compat_tips.cross_reference_2': {
    en: 'Motor replacement chain: motor → capacitor → wiring → mounting bracket → fan guard',
    ar: 'سلسلة استبدال المحرك: محرك → مكثف → أسلاك → كتيفة تركيب → واقي مروحة',
    es: 'Cadena de reemplazo de motor: motor → capacitor → cableado → soporte de montaje → protector de ventilador',
  },
  'compat_tips.cross_reference_3': {
    en: 'Evaporation chain: cooling pad → pad frame → distribution bar → spray nozzle → anti-clog mesh',
    ar: 'سلسلة التبخير: وسادة تبريد → إطار الوسادة → قضيب توزيع → فوهة رذاذ → شبكة منع الانسداد',
    es: 'Cadena de evaporación: almohadilla de enfriamiento → marco de almohadilla → barra de distribución → boquilla de aspersión → malla anti-obstrucción',
  },
  'compat_tips.cross_reference_4': {
    en: 'If you have an OEM part number, provide it — we can cross-reference to our equivalent',
    ar: 'إذا كان لديك رقم قطعة OEM، قدمه — يمكننا عمل مرجع متقاطع إلى مكافئنا',
    es: 'Si tiene un número de pieza OEM, proporciónelo — podemos hacer referencia cruzada a nuestro equivalente',
  },
  'compat_tips.cross_reference_5': {
    en: 'Photos of the part with a ruler for scale are the fastest way to identify a compatible replacement',
    ar: 'صور القطعة مع مسطرة للمقياس هي أسرع طريقة لتحديد البديل المتوافق',
    es: 'Las fotos de la pieza con una regla para escala son la forma más rápida de identificar un reemplazo compatible',
  },
  'compat_tips.cross_reference_6': {
    en: 'Note any symptoms (leak, noise, reduced performance) — this helps identify which part needs replacing',
    ar: 'لاحظ أي أعراض (تسرب، ضوضاء، أداء منخفض) — هذا يساعد في تحديد القطعة التي تحتاج استبدال',
    es: 'Anote cualquier síntoma (fuga, ruido, rendimiento reducido) — esto ayuda a identificar qué pieza necesita reemplazo',
  },

  // ── Compatibility Method Headings & Bodies ──
  'compat_method_heading.interface': {
    en: 'Find Compatible Parts by Interface Type',
    ar: 'اعثر على القطع المتوافقة حسب نوع الواجهة',
    es: 'Encuentre Piezas Compatibles por Tipo de Interfaz',
  },
  'compat_method_body.interface': {
    en: 'The interface is the physical connection point between your component and the cooler. Matching the interface ensures the replacement part will physically fit and connect correctly — without needing a specific model number.',
    ar: 'الواجهة هي نقطة التوصيل الفيزيائية بين مكونك والمبرد. تضمن مطابقة الواجهة أن القطعة البديلة ستناسب وتتصل بشكل صحيح — بدون الحاجة لرقم موديل محدد.',
    es: 'La interfaz es el punto de conexión física entre su componente y el enfriador. Hacer coincidir la interfaz asegura que la pieza de repuesto encajará y se conectará correctamente — sin necesidad de un número de modelo específico.',
  },
  'compat_method_heading.dimensions': {
    en: 'Find Compatible Parts by Key Dimensions',
    ar: 'اعثر على القطع المتوافقة حسب الأبعاد الرئيسية',
    es: 'Encuentre Piezas Compatibles por Dimensiones Clave',
  },
  'compat_method_body.dimensions': {
    en: 'Key dimensions like shaft diameter, frame size, bolt patterns, and overall envelope determine whether a replacement part will physically fit in your cooler unit.',
    ar: 'الأبعاد الرئيسية مثل قطر العمود وحجم الإطار وأنماط البراغي والغلاف الكلي تحدد ما إذا كانت القطعة البديلة ستناسب فيزيائيًا في وحدة المبرد الخاصة بك.',
    es: 'Las dimensiones clave como diámetro del eje, tamaño del marco, patrones de pernos y envolvente general determinan si una pieza de repuesto encajará físicamente en su unidad de enfriamiento.',
  },
  'compat_method_heading.electrical': {
    en: 'Find Compatible Parts by Electrical Parameters',
    ar: 'اعثر على القطع المتوافقة حسب المعايير الكهربائية',
    es: 'Encuentre Piezas Compatibles por Parámetros Eléctricos',
  },
  'compat_method_body.electrical': {
    en: 'Electrical components like motors, capacitors, and control boards must match the voltage, power rating, and other electrical parameters to operate safely and correctly.',
    ar: 'يجب أن تتطابق المكونات الكهربائية مثل المحركات والمكثفات ولوحات التحكم مع الجهد وتصنيف القدرة والمعايير الكهربائية الأخرى للتشغيل بأمان وبشكل صحيح.',
    es: 'Los componentes eléctricos como motores, capacitores y tarjetas de control deben coincidir con el voltaje, potencia nominal y otros parámetros eléctricos para operar de forma segura y correcta.',
  },
  'compat_method_heading.cross-reference': {
    en: 'Cross-reference by Part Function',
    ar: 'مرجع متقاطع حسب وظيفة القطعة',
    es: 'Referencia Cruzada por Función de la Pieza',
  },
  'compat_method_body.cross-reference': {
    en: 'If you know what function the part serves but not the exact specifications, use functional cross-reference to find compatible alternatives and substitutes.',
    ar: 'إذا كنت تعرف الوظيفة التي تؤديها القطعة لكن ليس المواصفات الدقيقة، استخدم المرجع المتقاطع الوظيفي لإيجاد بدائل متوافقة.',
    es: 'Si sabe qué función cumple la pieza pero no las especificaciones exactas, use la referencia cruzada funcional para encontrar alternativas y sustitutos compatibles.',
  },

  // ── System Names (keyed by slug) ──
  'sys.water-system': {
    en: 'Water System',
    ar: 'نظام المياه',
    es: 'Sistema de Agua',
  },
  'sys.water-system.short': {
    en: 'Pumps, Valves, Filtration & Distribution',
    ar: 'مضخات، صمامات، ترشيح وتوزيع',
    es: 'Bombas, Válvulas, Filtración y Distribución',
  },
  'sys.water-system.desc': {
    en: 'Complete water system components including pumps, motors, filtration, valves, distribution manifolds, and piping connections.',
    ar: 'مكونات نظام المياه الكاملة بما في ذلك المضخات والمحركات والترشيح والصمامات ومشعبات التوزيع ووصلات الأنابيب.',
    es: 'Componentes completos del sistema de agua incluyendo bombas, motores, filtración, válvulas, múltiples de distribución y conexiones de tuberías.',
  },
  'sys.evaporation-system': {
    en: 'Evaporation System',
    ar: 'نظام التبخير',
    es: 'Sistema de Evaporación',
  },
  'sys.evaporation-system.short': {
    en: 'Cooling Pads, Distribution & Anti-clogging',
    ar: 'وسادات تبريد، توزيع ومنع انسداد',
    es: 'Paneles de Enfriamiento, Distribución y Anti-obstrucción',
  },
  'sys.evaporation-system.desc': {
    en: 'Evaporation system components including cooling pads, frames, water distributors, spray nozzles, and anti-clogging solutions.',
    ar: 'مكونات نظام التبخير بما في ذلك وسادات التبريد والإطارات وموزعات المياه وفوهات الرش وحلول منع الانسداد.',
    es: 'Componentes del sistema de evaporación incluyendo paneles de enfriamiento, marcos, distribuidores de agua, boquillas de rociado y soluciones anti-obstrucción.',
  },
  'sys.air-system': {
    en: 'Air System',
    ar: 'نظام الهواء',
    es: 'Sistema de Aire',
  },
  'sys.air-system.short': {
    en: 'Fans, Blowers, Guards & Mounting',
    ar: 'مراوح، منافيخ، واقيات وتركيب',
    es: 'Ventiladores, Sopladores, Protecciones y Montaje',
  },
  'sys.air-system.desc': {
    en: 'Air system components including fans, blowers, guards, mounting brackets, and centrifugal fan parts.',
    ar: 'مكونات نظام الهواء بما في ذلك المراوح والمنافيخ والواقيات وأقواس التركيب وأجزاء المروحة الطاردة المركزية.',
    es: 'Componentes del sistema de aire incluyendo ventiladores, sopladores, protecciones, soportes de montaje y piezas de ventilador centrífugo.',
  },
  'sys.electrical-controls': {
    en: 'Electrical & Controls',
    ar: 'النظام الكهربائي والتحكم',
    es: 'Eléctrico y Controles',
  },
  'sys.electrical-controls.short': {
    en: 'Motors, Capacitors, Control Boards & Sensors',
    ar: 'محركات، مكثفات، لوحات تحكم وحساسات',
    es: 'Motores, Capacitores, Tableros de Control y Sensores',
  },
  'sys.electrical-controls.desc': {
    en: 'Electrical and control components including replacement motors, capacitors, speed controllers, control boards, contactors, sensors, and wiring.',
    ar: 'مكونات كهربائية وتحكم بما في ذلك المحركات البديلة والمكثفات ومتحكمات السرعة ولوحات التحكم والكونتاكتورات والحساسات والأسلاك.',
    es: 'Componentes eléctricos y de control incluyendo motores de repuesto, capacitores, controladores de velocidad, tableros de control, contactores, sensores y cableado.',
  },
  'sys.structure-mounting': {
    en: 'Structure & Mounting',
    ar: 'الهيكل والتركيب',
    es: 'Estructura y Montaje',
  },
  'sys.structure-mounting.short': {
    en: 'Panels, Seals, Brackets & Hardware',
    ar: 'ألواح، موانع تسرب، أقواس ومعدات',
    es: 'Paneles, Sellos, Soportes y Herrajes',
  },
  'sys.structure-mounting.desc': {
    en: 'Structural and mounting components including cabinet panels, seals, gaskets, mounting brackets, caster wheels, and fasteners.',
    ar: 'مكونات هيكلية وتركيب بما في ذلك ألواح الخزانة وموانع التسرب والحشيات وأقواس التركيب والعجلات الدوارة والمثبتات.',
    es: 'Componentes estructurales y de montaje incluyendo paneles de gabinete, sellos, juntas, soportes de montaje, ruedas giratorias y sujetadores.',
  },
  'sys.maintenance-consumables': {
    en: 'Maintenance & Consumables',
    ar: 'الصيانة والمواد الاستهلاكية',
    es: 'Mantenimiento y Consumibles',
  },
  'sys.maintenance-consumables.short': {
    en: 'Filters, Wear Parts & Cleaning Replacements',
    ar: 'فلاتر، قطع تآكل وبدائل تنظيف',
    es: 'Filtros, Piezas de Desgaste y Repuestos de Limpieza',
  },
  'sys.maintenance-consumables.desc': {
    en: 'Maintenance and consumable items including replacement filter elements, cleaning kit parts, and common wear parts.',
    ar: 'مواد الصيانة والاستهلاكية بما في ذلك عناصر الفلتر البديلة وأجزاء مجموعة التنظيف وقطع التآكل الشائعة.',
    es: 'Artículos de mantenimiento y consumibles incluyendo elementos de filtro de repuesto, piezas de kit de limpieza y piezas de desgaste comunes.',
  },
  'sys.compatibility': {
    en: 'Compatibility & Cross-reference',
    ar: 'التوافق والمرجع المتقاطع',
    es: 'Compatibilidad y Referencia Cruzada',
  },
  'sys.compatibility.short': {
    en: 'Interface, Dimension & Electrical Matching',
    ar: 'مطابقة الواجهة والأبعاد والكهرباء',
    es: 'Coincidencia de Interfaz, Dimensión y Electricidad',
  },
  'sys.compatibility.desc': {
    en: 'Compatibility and cross-reference resources to help identify the correct replacement parts by interface type, dimensions, or electrical parameters.',
    ar: 'موارد التوافق والمرجع المتقاطع للمساعدة في تحديد القطع البديلة الصحيحة حسب نوع الواجهة أو الأبعاد أو المعايير الكهربائية.',
    es: 'Recursos de compatibilidad y referencia cruzada para ayudar a identificar las piezas de repuesto correctas por tipo de interfaz, dimensiones o parámetros eléctricos.',
  },

  // ── Area Names (keyed by slug) ──
  'area.water-pump-power': { en: 'Water Pump & Power', ar: 'مضخة المياه والطاقة', es: 'Bomba de Agua y Potencia' },
  'area.water-pump-power.short': { en: 'Replacement pumps, seals, impellers & housings', ar: 'مضخات بديلة، موانع تسرب، دافعات وهياكل', es: 'Bombas de repuesto, sellos, impulsores y carcasas' },
  'area.filtration-anti-clogging': { en: 'Filtration & Anti-clogging', ar: 'الترشيح ومنع الانسداد', es: 'Filtración y Anti-obstrucción' },
  'area.filtration-anti-clogging.short': { en: 'Strainers, filter screens & cartridges', ar: 'مصافٍ، شبكات ترشيح وخراطيش', es: 'Coladores, pantallas de filtro y cartuchos' },
  'area.valves-water-control': { en: 'Valves & Water Control', ar: 'الصمامات والتحكم بالمياه', es: 'Válvulas y Control de Agua' },
  'area.valves-water-control.short': { en: 'Solenoid, float, drain & check valves', ar: 'صمامات ملف لولبي، عوامة، تصريف وعدم رجوع', es: 'Válvulas solenoides, de flotador, drenaje y retención' },
  'area.water-distribution-level': { en: 'Water Distribution & Level Protection', ar: 'توزيع المياه وحماية المستوى', es: 'Distribución de Agua y Protección de Nivel' },
  'area.water-distribution-level.short': { en: 'Manifolds, tubes, nozzles & overflow protection', ar: 'مشعبات، أنابيب، فوهات وحماية من الطفحان', es: 'Múltiples, tubos, boquillas y protección contra desbordamiento' },
  'area.piping-connections': { en: 'Piping & Connections', ar: 'الأنابيب والتوصيلات', es: 'Tuberías y Conexiones' },
  'area.piping-connections.short': { en: 'Hoses, unions, couplings, elbows & gaskets', ar: 'خراطيم، وصلات، قارنات، أكواع وحشيات', es: 'Mangueras, uniones, acoplamientos, codos y juntas' },
  'area.tank-sump-drainage': { en: 'Tank, Sump & Drainage', ar: 'الخزان وحوض التجميع والصرف', es: 'Tanque, Sumidero y Drenaje' },
  'area.tank-sump-drainage.short': { en: 'Water tanks, drain plugs, splash guards', ar: 'خزانات مياه، سدادات تصريف، واقيات رذاذ', es: 'Tanques de agua, tapones de drenaje, protectores contra salpicaduras' },
  'area.cooling-media': { en: 'Cooling Media', ar: 'وسائط التبريد', es: 'Medios de Enfriamiento' },
  'area.cooling-media.short': { en: 'Cooling pads, pad frames & holders', ar: 'وسادات تبريد، إطارات وحوامل', es: 'Paneles de enfriamiento, marcos y soportes' },
  'area.water-feed-distribution': { en: 'Water Feed & Distribution', ar: 'تغذية وتوزيع المياه', es: 'Alimentación y Distribución de Agua' },
  'area.water-feed-distribution.short': { en: 'Pad distributors, bars & spray nozzles', ar: 'موزعات الوسادات، قضبان وفوهات رش', es: 'Distribuidores de panel, barras y boquillas de rociado' },
  'area.anti-clogging-debris': { en: 'Anti-clogging & Debris Management', ar: 'منع الانسداد وإدارة الرواسب', es: 'Anti-obstrucción y Gestión de Residuos' },
  'area.anti-clogging-debris.short': { en: 'Anti-clog mesh, screens & drift eliminators', ar: 'شبكات منع انسداد، مصافٍ ومزيلات انجراف', es: 'Mallas anti-obstrucción, pantallas y eliminadores de deriva' },
  'area.overflow-splash-drain': { en: 'Overflow, Splash & Drain Guidance', ar: 'توجيه الطفحان والرذاذ والصرف', es: 'Guía de Desbordamiento, Salpicaduras y Drenaje' },
  'area.overflow-splash-drain.short': { en: 'Overflow baffles, splash curtains & sheets', ar: 'حواجز طفحان، ستائر رذاذ وألواح', es: 'Deflectores de desbordamiento, cortinas contra salpicaduras y láminas' },
  'area.fans-blowers': { en: 'Fans & Blower Components', ar: 'مكونات المراوح والمنافيخ', es: 'Componentes de Ventiladores y Sopladores' },
  'area.fans-blowers.short': { en: 'Fan motors, guards, mounting brackets', ar: 'محركات مراوح، واقيات، أقواس تركيب', es: 'Motores de ventilador, protecciones, soportes de montaje' },
  'area.centrifugal-fan-system': { en: 'Centrifugal Fan System', ar: 'نظام المروحة الطاردة المركزية', es: 'Sistema de Ventilador Centrífugo' },
  'area.centrifugal-fan-system.short': { en: 'Blower wheels, volutes, inlet rings & bearings', ar: 'عجلات منفاخ، حلزونات، حلقات دخل ومحامل', es: 'Ruedas de soplador, volutas, anillos de entrada y cojinetes' },
  'area.air-outlet-grilles': { en: 'Air Outlet & Grilles', ar: 'مخارج الهواء والشبكات', es: 'Salidas de Aire y Rejillas' },
  'area.air-outlet-grilles.short': { en: 'Outlet grilles, louvers & safety grills', ar: 'شبكات مخارج، فتحات تهوية وشبكات أمان', es: 'Rejillas de salida, persianas y rejillas de seguridad' },
  'area.motors-drive': { en: 'Motors & Drive', ar: 'المحركات ونظام القيادة', es: 'Motores y Transmisión' },
  'area.motors-drive.short': { en: 'Replacement motors, capacitors & speed controllers', ar: 'محركات بديلة، مكثفات ومتحكمات سرعة', es: 'Motores de repuesto, capacitores y controladores de velocidad' },
  'area.control-board-protection': { en: 'Control Board & Protection', ar: 'لوحة التحكم والحماية', es: 'Tablero de Control y Protección' },
  'area.control-board-protection.short': { en: 'Control boards, contactors, relays & fuses', ar: 'لوحات تحكم، كونتاكتورات، مرحلات وفيوزات', es: 'Tableros de control, contactores, relés y fusibles' },
  'area.sensors-level-detection': { en: 'Sensors & Water Level Detection', ar: 'الحساسات وكشف مستوى المياه', es: 'Sensores y Detección de Nivel de Agua' },
  'area.sensors-level-detection.short': { en: 'Water level sensors, float switches & temp sensors', ar: 'حساسات مستوى المياه، مفاتيح عوامة وحساسات حرارة', es: 'Sensores de nivel de agua, interruptores de flotador y sensores de temperatura' },
  'area.wiring-connectors': { en: 'Wiring & Connectors', ar: 'الأسلاك والموصلات', es: 'Cableado y Conectores' },
  'area.wiring-connectors.short': { en: 'Wiring harnesses, terminal blocks & power cables', ar: 'أحزمة أسلاك، كتل طرفية وكابلات طاقة', es: 'Arneses de cableado, bloques de terminales y cables de alimentación' },
  'area.cabinet-housing': { en: 'Cabinet / Housing Replacement', ar: 'استبدال الخزانة/الهيكل', es: 'Reemplazo de Gabinete/Carcasa' },
  'area.cabinet-housing.short': { en: 'Panels, covers & access doors', ar: 'ألواح، أغطية وأبواب وصول', es: 'Paneles, cubiertas y puertas de acceso' },
  'area.seals-gaskets': { en: 'Seals, Gaskets & Water Tightness', ar: 'موانع التسرب والحشيات وإحكام المياه', es: 'Sellos, Juntas y Estanqueidad' },
  'area.seals-gaskets.short': { en: 'Gaskets, sealing strips & door seals', ar: 'حشيات، شرائط إحكام وموانع تسرب أبواب', es: 'Juntas, tiras de sellado y sellos de puerta' },
  'area.brackets-reinforcement': { en: 'Brackets & Reinforcement', ar: 'الأقواس والتقوية', es: 'Soportes y Refuerzo' },
  'area.brackets-reinforcement.short': { en: 'Mounting brackets, supports & vibration mounts', ar: 'أقواس تركيب، دعامات وقواعد مضادة للاهتزاز', es: 'Soportes de montaje, apoyos y montajes antivibración' },
  'area.mobile-hardware': { en: 'Mobile Hardware', ar: 'المعدات المتحركة', es: 'Herrajes Móviles' },
  'area.mobile-hardware.short': { en: 'Caster wheels, leveling feet & supports', ar: 'عجلات دوارة، أرجل تسوية ودعامات', es: 'Ruedas giratorias, patas niveladoras y soportes' },
  'area.fasteners-installation': { en: 'Fasteners & Installation', ar: 'المثبتات والتركيب', es: 'Sujetadores e Instalación' },
  'area.fasteners-installation.short': { en: 'Screws, bolts, clips & clamps', ar: 'براغي، مسامير، مشابك وملاقط', es: 'Tornillos, pernos, clips y abrazaderas' },
  'area.filters-replacement-elements': { en: 'Filters & Replacement Elements', ar: 'الفلاتر وعناصر الاستبدال', es: 'Filtros y Elementos de Repuesto' },
  'area.filters-replacement-elements.short': { en: 'Filter replacements & strainer screens', ar: 'بدائل فلاتر وشبكات مصافٍ', es: 'Repuestos de filtro y pantallas de colador' },
  'area.cleaning-maintenance': { en: 'Cleaning & Maintenance Replacements', ar: 'بدائل التنظيف والصيانة', es: 'Repuestos de Limpieza y Mantenimiento' },
  'area.cleaning-maintenance.short': { en: 'Cleaning kits & maintenance parts', ar: 'مجموعات تنظيف وقطع صيانة', es: 'Kits de limpieza y piezas de mantenimiento' },
  'area.wear-parts': { en: 'Wear Parts', ar: 'قطع التآكل', es: 'Piezas de Desgaste' },
  'area.wear-parts.short': { en: 'Cooling pad, seal & drain plug replacements', ar: 'بدائل وسادات تبريد، موانع تسرب وسدادات تصريف', es: 'Repuestos de panel de enfriamiento, sello y tapón de drenaje' },
  'area.by-interface': { en: 'Compatibility by Interface', ar: 'التوافق حسب الواجهة', es: 'Compatibilidad por Interfaz' },
  'area.by-interface.short': { en: 'Thread, flange & connector matching', ar: 'مطابقة السنون والشفرات والموصلات', es: 'Coincidencia de rosca, brida y conector' },
  'area.by-dimensions': { en: 'Compatibility by Dimensions', ar: 'التوافق حسب الأبعاد', es: 'Compatibilidad por Dimensiones' },
  'area.by-dimensions.short': { en: 'Size, hole pattern & shaft dimension matching', ar: 'مطابقة الحجم ونمط الثقوب وأبعاد العمود', es: 'Coincidencia de tamaño, patrón de agujeros y dimensión del eje' },
  'area.by-electrical': { en: 'Compatibility by Electrical', ar: 'التوافق حسب الكهرباء', es: 'Compatibilidad por Electricidad' },
  'area.by-electrical.short': { en: 'Voltage, power & RPM matching', ar: 'مطابقة الجهد والقدرة وعدد الدورات', es: 'Coincidencia de voltaje, potencia y RPM' },
  'area.cross-reference': { en: 'Cross-reference by Part Function', ar: 'مرجع متقاطع حسب وظيفة القطعة', es: 'Referencia Cruzada por Función de Pieza' },
  'area.cross-reference.short': { en: 'Alternative & substitute part finder', ar: 'مُحدد القطع البديلة', es: 'Buscador de piezas alternativas y sustitutas' },

  // ── Header component labels ──
  'header.inquiry_list': { en: 'Inquiry List', ar: 'قائمة الاستفسار', es: 'Lista de Consulta' },
  'header.toggle_menu': { en: 'Toggle Menu', ar: 'القائمة', es: 'Menú' },
  'header.theme': { en: 'Theme', ar: 'المظهر', es: 'Tema' },

  // ── Footer inline text ──
  'footer.tagline': {
    en: 'Direct-source replacement parts for evaporative coolers. Interface-matched components — no model number needed.',
    ar: 'قطع غيار مباشرة من المصدر لمبردات الهواء التبخيرية. مكونات متوافقة بالمقاييس — بدون الحاجة لرقم الموديل.',
    es: 'Refacciones de fuente directa para enfriadores evaporativos. Componentes compatibles por interfaz — sin número de modelo.',
  },
};

export default ui;
