import { getCollection } from 'astro:content';
import type { Product, ProductSpec } from './inquiry-types';

export type { Product, ProductSpec };

export interface ProductTypeMeta {
  slug: string;
  name: string;
  nameAr: string;
  nameEs: string;
  description: string;
  productCount: number;
}

const typeNameMap: Record<string, { name: string; nameAr: string; nameEs: string; description: string }> = {
  // Water System
  'replacement-water-pump': { name: 'Replacement Water Pump', nameAr: 'مضخة مياه بديلة', nameEs: 'Bomba de Agua de Repuesto', description: 'Direct replacement water pumps for evaporative coolers with threaded or push-fit connections. Core component for water circulation.' },
  'pump-motor-drive': { name: 'Pump Motor / Drive Motor', nameAr: 'محرك مضخة / محرك قيادة', nameEs: 'Motor de Bomba / Motor de Transmisión', description: 'Drive motors for water pumps. Replacement units compatible with standard pump housings.' },
  'pump-seal-shaft': { name: 'Pump Seal / Shaft Seal', nameAr: 'مانع تسرب مضخة / مانع تسرب عمود', nameEs: 'Sello de Bomba / Sello de Eje', description: 'Replacement mechanical seals and shaft seals for water pump maintenance and leak prevention.' },
  'pump-impeller-rotor': { name: 'Pump Impeller / Pump Rotor', nameAr: 'دافعة مضخة / دوار مضخة', nameEs: 'Impulsor de Bomba / Rotor de Bomba', description: 'Replacement impellers and rotors for restoring pump flow performance.' },
  'pump-housing-volute': { name: 'Pump Housing / Volute', nameAr: 'هيكل مضخة / حلزوني', nameEs: 'Carcasa de Bomba / Voluta', description: 'Pump-side housings and volute casings for pump assembly replacement.' },
  'strainer-filter': { name: 'Strainer / Filter Screen', nameAr: 'مصفاة / شبكة ترشيح', nameEs: 'Colador / Pantalla de Filtro', description: 'Replaceable strainers and filter screens to prevent debris in water circulation systems.' },
  'filter-element-cartridge': { name: 'Filter Element / Replaceable Cartridge', nameAr: 'عنصر فلتر / خرطوشة قابلة للاستبدال', nameEs: 'Elemento de Filtro / Cartucho Reemplazable', description: 'Replaceable filter cartridges for water filtration in cooler systems.' },
  'solenoid-valve': { name: 'Solenoid Valve', nameAr: 'صمام ملف لولبي', nameEs: 'Válvula Solenoide', description: 'Electrically operated solenoid valves for automated water supply control.' },
  'float-valve': { name: 'Float Valve / Water Level Valve', nameAr: 'صمام عوامة / صمام مستوى المياه', nameEs: 'Válvula de Flotador / Válvula de Nivel de Agua', description: 'Mechanical float valves for automatic water level maintenance in cooler tanks.' },
  'drain-valve': { name: 'Drain Valve / Ball Valve', nameAr: 'صمام تصريف / صمام كروي', nameEs: 'Válvula de Drenaje / Válvula de Bola', description: 'Manual drain and ball valves for water tank drainage and maintenance.' },
  'check-valve': { name: 'Check Valve / Backflow Preventer', nameAr: 'صمام عدم رجوع / مانع تدفق عكسي', nameEs: 'Válvula de Retención / Preventor de Reflujo', description: 'One-way check valves to prevent water backflow in supply lines.' },
  'water-distribution-manifold': { name: 'Water Distribution Manifold / Header', nameAr: 'مشعب توزيع مياه / مجمع', nameEs: 'Múltiple de Distribución de Agua / Cabezal', description: 'Distribution manifolds and headers for even water flow across cooling pads.' },
  'distribution-tube-pipe': { name: 'Distribution Tube / Pipe', nameAr: 'أنبوب توزيع / ماسورة', nameEs: 'Tubo de Distribución / Tubería', description: 'Replacement distribution tubes and pipes for water delivery systems.' },
  'nozzle-spray-jet': { name: 'Nozzle / Spray Jet', nameAr: 'فوهة / نفاث رش', nameEs: 'Boquilla / Chorro de Rociado', description: 'Spray nozzles and jets for water distribution over evaporative cooling media.' },
  'hoses-pipes': { name: 'Hoses / Pipes', nameAr: 'خراطيم / مواسير', nameEs: 'Mangueras / Tuberías', description: 'Flexible hoses and rigid pipes for water connections throughout the cooling system.' },
  'couplings-connectors': { name: 'Unions / Couplings / Connectors', nameAr: 'وصلات / قارنات / موصلات', nameEs: 'Uniones / Acoplamientos / Conectores', description: 'Pipe unions, couplings, and connectors for water system assembly and repair.' },
  'gaskets-sealing-rings': { name: 'Gaskets / Sealing Rings', nameAr: 'حشيات / حلقات مانعة للتسرب', nameEs: 'Juntas / Anillos de Sellado', description: 'Sealing gaskets and O-rings for leak-proof plumbing connections.' },
  'water-tank-sump': { name: 'Water Tank / Sump', nameAr: 'خزان مياه / حوض تجميع', nameEs: 'Tanque de Agua / Sumidero', description: 'Replacement water tanks and sump assemblies for evaporative cooler water storage.' },
  'drain-plug-outlet': { name: 'Drain Plug / Drain Outlet Parts', nameAr: 'سدادة تصريف / أجزاء مخرج تصريف', nameEs: 'Tapón de Drenaje / Piezas de Salida de Drenaje', description: 'Drain plugs and outlet components for water tank drainage.' },
  // Evaporation System
  'cooling-pad': { name: 'Cooling Pad / Evaporative Pad', nameAr: 'وسادة تبريد / وسادة تبخيرية', nameEs: 'Panel de Enfriamiento / Panel Evaporativo', description: 'High-performance cellulose cooling pads with cross-fluted design for maximum evaporative efficiency.' },
  'cooling-pad-frame': { name: 'Cooling Pad Frame / Holder', nameAr: 'إطار وسادة تبريد / حامل', nameEs: 'Marco de Panel de Enfriamiento / Soporte', description: 'Frames and holders for secure cooling pad mounting and easy replacement.' },
  'pad-water-distributor': { name: 'Pad Water Distributor / Distribution Bar', nameAr: 'موزع مياه الوسادة / قضيب توزيع', nameEs: 'Distribuidor de Agua para Panel / Barra de Distribución', description: 'Water distribution bars and distributors for even water flow across cooling pad surfaces.' },
  'anti-clogging-mesh': { name: 'Anti-clogging Mesh / Screen', nameAr: 'شبكة منع انسداد / مصفاة', nameEs: 'Malla Anti-obstrucción / Pantalla', description: 'Protective meshes and screens to prevent debris accumulation on cooling pads.' },
  'water-eliminator': { name: 'Water Eliminator / Drift Eliminator', nameAr: 'مزيل مياه / مزيل انجراف', nameEs: 'Eliminador de Agua / Eliminador de Deriva', description: 'Drift eliminators to prevent water droplet carryover in the air stream.' },
  'overflow-baffle': { name: 'Overflow Baffle', nameAr: 'حاجز طفحان', nameEs: 'Deflector de Desbordamiento', description: 'Overflow baffles to direct excess water safely away from the cooler unit.' },
  'splash-curtain': { name: 'Splash Curtain / Anti-splash Sheet', nameAr: 'ستارة رذاذ / لوح مضاد للرذاذ', nameEs: 'Cortina contra Salpicaduras / Lámina Anti-salpicaduras', description: 'Anti-splash curtains and sheets to contain water within the evaporation section.' },
  // Air System
  'fan-blower-motor': { name: 'Fan / Blower Motor', nameAr: 'محرك مروحة / منفاخ', nameEs: 'Motor de Ventilador / Soplador', description: 'Replacement drive motors for fan and blower assemblies in air circulation systems.' },
  'fan-guard-grille': { name: 'Fan Guard / Protection Grille', nameAr: 'واقي مروحة / شبكة حماية', nameEs: 'Protección de Ventilador / Rejilla de Protección', description: 'Safety protection grilles and fan guards for user safety and debris prevention.' },
  'fan-mounting-bracket': { name: 'Fan Mounting Bracket', nameAr: 'قوس تركيب مروحة', nameEs: 'Soporte de Montaje de Ventilador', description: 'Mounting brackets for secure fan and blower assembly installation.' },
  'centrifugal-fan-wheel': { name: 'Centrifugal Fan Wheel / Blower Wheel', nameAr: 'عجلة مروحة طاردة مركزية / عجلة منفاخ', nameEs: 'Rueda de Ventilador Centrífugo / Rueda de Soplador', description: 'Replacement centrifugal fan and blower wheels for high-pressure air movement.' },
  'centrifugal-housing': { name: 'Volute / Fan Housing / Blower Casing', nameAr: 'حلزوني / هيكل مروحة / غلاف منفاخ', nameEs: 'Voluta / Carcasa de Ventilador / Cubierta de Soplador', description: 'Fan housings and volute casings for centrifugal blower assemblies.' },
  'bearing-block': { name: 'Bearing Block / Bearing Unit', nameAr: 'كتلة محمل / وحدة محمل', nameEs: 'Bloque de Cojinete / Unidad de Cojinete', description: 'Replaceable bearing blocks and units for centrifugal fan shaft support.' },
  'air-outlet-grille': { name: 'Air Outlet Grille / Louvers', nameAr: 'شبكة مخرج هواء / فتحات تهوية', nameEs: 'Rejilla de Salida de Aire / Persianas', description: 'Adjustable outlet grilles and louvers for air flow direction control.' },
  // Electrical & Controls
  'replacement-motor': { name: 'Replacement Motor', nameAr: 'محرك بديل', nameEs: 'Motor de Repuesto', description: 'Replacement drive motors for evaporative coolers. Available in B3, B5, B14 mounting configurations.' },
  'motor-capacitor': { name: 'Motor Capacitor / Starting Capacitor', nameAr: 'مكثف محرك / مكثف بدء تشغيل', nameEs: 'Capacitor de Motor / Capacitor de Arranque', description: 'Starting and running capacitors for single-phase evaporative cooler motors.' },
  'motor-speed-controller': { name: 'Motor Speed Controller / Drive', nameAr: 'متحكم سرعة محرك / محرك متغير', nameEs: 'Controlador de Velocidad de Motor / Variador', description: 'Variable speed controllers for fan motor speed adjustment and energy efficiency.' },
  'control-board': { name: 'Control Board / Controller', nameAr: 'لوحة تحكم / متحكم', nameEs: 'Tablero de Control / Controlador', description: 'Replacement electronic control boards and system controllers.' },
  'contactor-relay': { name: 'Contactors / Relays', nameAr: 'كونتاكتورات / مرحلات', nameEs: 'Contactores / Relés', description: 'Electrical contactors and relays for motor and pump power switching circuits.' },
  'fuse-holder': { name: 'Fuse / Fuse Holder', nameAr: 'فيوز / حامل فيوز', nameEs: 'Fusible / Portafusible', description: 'Panel-mount fuse holders with replacement fuses for electrical circuit protection.' },
  'water-level-sensor': { name: 'Water Level Sensor / Float Switch', nameAr: 'حساس مستوى المياه / مفتاح عوامة', nameEs: 'Sensor de Nivel de Agua / Interruptor de Flotador', description: 'Sensors and float switches for automatic water level detection and control.' },
  'wiring-harness': { name: 'Wiring Harness', nameAr: 'حزمة أسلاك', nameEs: 'Arnés de Cableado', description: 'Pre-assembled wiring harnesses with color-coded wires and terminals for cooler electrical systems.' },
  'terminal-block': { name: 'Terminal Block / Connector', nameAr: 'كتلة طرفية / موصل', nameEs: 'Bloque de Terminales / Conector', description: 'Screw terminal blocks for secure electrical wire termination and distribution.' },
  // Structure & Mounting
  'cabinet-panel': { name: 'Cabinet Panel / Housing Panel', nameAr: 'لوح خزانة / لوح هيكل', nameEs: 'Panel de Gabinete / Panel de Carcasa', description: 'Replacement cabinet and housing panels for evaporative cooler body repair.' },
  'service-cover': { name: 'Service Cover / Access Door', nameAr: 'غطاء خدمة / باب وصول', nameEs: 'Cubierta de Servicio / Puerta de Acceso', description: 'Replacement hinged service covers and access doors for maintenance convenience.' },
  'gasket-sealing-strip': { name: 'Gasket / Sealing Strip', nameAr: 'حشية / شريط إحكام', nameEs: 'Junta / Tira de Sellado', description: 'Self-adhesive rubber sealing strips for water-tight cabinet door and panel sealing.' },
  'mounting-bracket': { name: 'Mounting Bracket', nameAr: 'قوس تركيب', nameEs: 'Soporte de Montaje', description: 'Universal mounting brackets and support plates for component assembly.' },
  'anti-vibration-mount': { name: 'Anti-vibration Mount / Isolator', nameAr: 'قاعدة مضادة للاهتزاز / عازل', nameEs: 'Montaje Antivibración / Aislador', description: 'Vibration isolation mounts to reduce noise and mechanical stress.' },
  'caster-wheel': { name: 'Caster Wheel Kit', nameAr: 'مجموعة عجلات دوارة', nameEs: 'Kit de Ruedas Giratorias', description: 'Replacement caster wheel sets with brakes for portable cooler mobility.' },
  'fasteners-screws': { name: 'Fasteners / Screws / Bolts', nameAr: 'مثبتات / براغي / مسامير', nameEs: 'Sujetadores / Tornillos / Pernos', description: 'Assorted stainless steel fastener kits for cooler assembly and component mounting.' },
  // Maintenance & Consumables
  'filter-element': { name: 'Filter Replacement Element', nameAr: 'عنصر فلتر بديل', nameEs: 'Elemento de Filtro de Repuesto', description: 'Replaceable air filter elements for intake air filtration in evaporative coolers.' },
  'cleaning-kit-parts': { name: 'Cleaning Kit Parts', nameAr: 'أجزاء مجموعة تنظيف', nameEs: 'Piezas de Kit de Limpieza', description: 'Complete maintenance cleaning kits including descaling solution, brushes, and cloths.' },
  'cooling-pad-replacement': { name: 'Cooling Pad Replacement', nameAr: 'استبدال وسادة تبريد', nameEs: 'Reemplazo de Panel de Enfriamiento', description: 'Standard replacement cooling pads — the most common wear item in evaporative cooling systems.' },
  'sealing-strip-replacement': { name: 'Sealing Strip Replacement', nameAr: 'استبدال شريط إحكام', nameEs: 'Reemplazo de Tira de Sellado', description: 'Standard replacement panel sealing strips for maintaining water-tight cabinet integrity.' },
  'drain-plug-replacement': { name: 'Drain Plug Replacement', nameAr: 'استبدال سدادة تصريف', nameEs: 'Reemplazo de Tapón de Drenaje', description: 'Common replacement drain plugs for routine tank maintenance.' },
  // Additional types
  'splash-guard': { name: 'Splash Guard / Baffle for Sump', nameAr: 'واقي رذاذ / حاجز لحوض التجميع', nameEs: 'Protector contra Salpicaduras / Deflector para Sumidero', description: 'Protective baffles to prevent water splashing from the sump area during operation.' },
  'nozzle-spray-jet-evap': { name: 'Nozzle / Spray Jet (Evap Side)', nameAr: 'فوهة / نفاث رش (جانب التبخير)', nameEs: 'Boquilla / Chorro de Rociado (Lado Evap)', description: 'Spray nozzles and jets for water distribution over evaporative cooling pad surfaces.' },
  'overflow-protection': { name: 'Overflow Protection / Anti-Overflow Parts', nameAr: 'حماية من الطفحان / أجزاء مضادة للطفحان', nameEs: 'Protección contra Desbordamiento / Piezas Anti-desbordamiento', description: 'Overflow protection assemblies to prevent water tank overfilling and associated damage.' },
  'elbows-tees-reducers': { name: 'Elbows / Tees / Reducers', nameAr: 'أكواع / وصلات T / مخفضات', nameEs: 'Codos / Tes / Reductores', description: 'Pipe elbows, tee connectors, and reducers for water system plumbing and routing.' },
  'thermal-protector': { name: 'Thermal Protector / Overload Protector', nameAr: 'واقي حراري / واقي حمل زائد', nameEs: 'Protector Térmico / Protector de Sobrecarga', description: 'Thermal overload protectors for automatic motor safety shutdown on overheating.' },
  'temperature-sensor': { name: 'Temperature Sensor', nameAr: 'حساس درجة حرارة', nameEs: 'Sensor de Temperatura', description: 'NTC thermistor temperature sensors for ambient and water temperature monitoring.' },
  'power-cable': { name: 'Power Cable / Cord', nameAr: 'كابل طاقة / سلك', nameEs: 'Cable de Alimentación / Cable', description: 'Standard 3-core power supply cables for evaporative cooler electrical connections.' },
  'leveling-foot': { name: 'Leveling Foot / Base Support', nameAr: 'قاعدة تسوية / دعامة قاعدة', nameEs: 'Pata Niveladora / Soporte de Base', description: 'Adjustable leveling feet with rubber pads for cooler stability on uneven surfaces.' },
  'inlet-ring': { name: 'Inlet Ring / Discharge Ring', nameAr: 'حلقة مدخل / حلقة تفريغ', nameEs: 'Anillo de Entrada / Anillo de Descarga', description: 'Precision-formed aerodynamic inlet rings for centrifugal fan and blower assemblies.' },
};

/** Convert a content collection entry to the Product type used by templates. */
function toProduct(entry: { data: Record<string, unknown>; body?: string }): Product {
  const d = entry.data;
  return {
    slug: d.slug as string,
    name: d.name as string,
    nameAr: d.nameAr as string | undefined,
    nameEs: d.nameEs as string | undefined,
    category: d.category as string,
    systemSlug: d.systemSlug as string,
    areaSlug: d.areaSlug as string,
    productTypeSlug: d.productTypeSlug as string,
    moq: d.moq as string,
    priceRange: d.priceRange as string,
    image: d.image as string,
    gallery: d.gallery as string[] | undefined,
    description: d.description as string,
    longDescription: (entry.body ?? '') as string,
    compatibility: (d.compatibility as string[]) ?? [],
    specs: (d.specs as ProductSpec[]) ?? [],
    features: (d.features as { title: string; description: string }[]) ?? [],
    faqs: (d.faqs as { question: string; answer: string }[]) ?? [],
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const entries = await getCollection('products');
  return entries.map(toProduct);
}

export async function getProductsBySystem(systemSlug: string): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter((p) => p.systemSlug === systemSlug);
}

export async function getProductsByArea(systemSlug: string, areaSlug: string): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter((p) => p.systemSlug === systemSlug && p.areaSlug === areaSlug);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getAllProducts();
  return all.find((p) => p.slug === slug);
}

export async function getProductTypesByArea(systemSlug: string, areaSlug: string): Promise<string[]> {
  const products = await getProductsByArea(systemSlug, areaSlug);
  return [...new Set(products.map((p) => p.productTypeSlug))];
}

export async function getProductsByType(
  systemSlug: string,
  areaSlug: string,
  typeSlug: string,
): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter(
    (p) => p.systemSlug === systemSlug && p.areaSlug === areaSlug && p.productTypeSlug === typeSlug,
  );
}

export async function getProductTypeMeta(systemSlug: string, areaSlug: string): Promise<ProductTypeMeta[]> {
  const products = await getProductsByArea(systemSlug, areaSlug);
  const typeMap = new Map<string, { name: string; nameAr: string; nameEs: string; description: string; count: number }>();

  for (const product of products) {
    const type = product.productTypeSlug;
    const existing = typeMap.get(type);
    if (existing) {
      existing.count++;
    } else {
      const meta = typeNameMap[type] || {
        name: type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        nameAr: type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        nameEs: type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        description: 'Replacement parts for evaporative cooler systems.',
      };
      typeMap.set(type, { ...meta, count: 1 });
    }
  }

  return [...typeMap.entries()].map(([slug, meta]) => ({
    slug,
    ...meta,
    productCount: meta.count,
  }));
}
