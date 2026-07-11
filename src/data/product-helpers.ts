import { getCollection } from 'astro:content';
import type { Product, ProductSpec } from './inquiry-types';

export type { Product, ProductSpec };

export interface ProductTypeMeta {
  slug: string;
  name: string;
  description: string;
  productCount: number;
}

const typeNameMap: Record<string, { name: string; description: string }> = {
  // Water System
  'replacement-water-pump': { name: 'Replacement Water Pump', description: 'Direct replacement water pumps for evaporative coolers with threaded or push-fit connections. Core component for water circulation.' },
  'pump-motor-drive': { name: 'Pump Motor / Drive Motor', description: 'Drive motors for water pumps. Replacement units compatible with standard pump housings.' },
  'pump-seal-shaft': { name: 'Pump Seal / Shaft Seal', description: 'Replacement mechanical seals and shaft seals for water pump maintenance and leak prevention.' },
  'pump-impeller-rotor': { name: 'Pump Impeller / Pump Rotor', description: 'Replacement impellers and rotors for restoring pump flow performance.' },
  'pump-housing-volute': { name: 'Pump Housing / Volute', description: 'Pump-side housings and volute casings for pump assembly replacement.' },
  'strainer-filter': { name: 'Strainer / Filter Screen', description: 'Replaceable strainers and filter screens to prevent debris in water circulation systems.' },
  'filter-element-cartridge': { name: 'Filter Element / Replaceable Cartridge', description: 'Replaceable filter cartridges for water filtration in cooler systems.' },
  'solenoid-valve': { name: 'Solenoid Valve', description: 'Electrically operated solenoid valves for automated water supply control.' },
  'float-valve': { name: 'Float Valve / Water Level Valve', description: 'Mechanical float valves for automatic water level maintenance in cooler tanks.' },
  'drain-valve': { name: 'Drain Valve / Ball Valve', description: 'Manual drain and ball valves for water tank drainage and maintenance.' },
  'check-valve': { name: 'Check Valve / Backflow Preventer', description: 'One-way check valves to prevent water backflow in supply lines.' },
  'water-distribution-manifold': { name: 'Water Distribution Manifold / Header', description: 'Distribution manifolds and headers for even water flow across cooling pads.' },
  'distribution-tube-pipe': { name: 'Distribution Tube / Pipe', description: 'Replacement distribution tubes and pipes for water delivery systems.' },
  'nozzle-spray-jet': { name: 'Nozzle / Spray Jet', description: 'Spray nozzles and jets for water distribution over evaporative cooling media.' },
  'hoses-pipes': { name: 'Hoses / Pipes', description: 'Flexible hoses and rigid pipes for water connections throughout the cooling system.' },
  'couplings-connectors': { name: 'Unions / Couplings / Connectors', description: 'Pipe unions, couplings, and connectors for water system assembly and repair.' },
  'gaskets-sealing-rings': { name: 'Gaskets / Sealing Rings', description: 'Sealing gaskets and O-rings for leak-proof plumbing connections.' },
  'water-tank-sump': { name: 'Water Tank / Sump', description: 'Replacement water tanks and sump assemblies for evaporative cooler water storage.' },
  'drain-plug-outlet': { name: 'Drain Plug / Drain Outlet Parts', description: 'Drain plugs and outlet components for water tank drainage.' },
  // Evaporation System
  'cooling-pad': { name: 'Cooling Pad / Evaporative Pad', description: 'High-performance cellulose cooling pads with cross-fluted design for maximum evaporative efficiency.' },
  'cooling-pad-frame': { name: 'Cooling Pad Frame / Holder', description: 'Frames and holders for secure cooling pad mounting and easy replacement.' },
  'pad-water-distributor': { name: 'Pad Water Distributor / Distribution Bar', description: 'Water distribution bars and distributors for even water flow across cooling pad surfaces.' },
  'anti-clogging-mesh': { name: 'Anti-clogging Mesh / Screen', description: 'Protective meshes and screens to prevent debris accumulation on cooling pads.' },
  'water-eliminator': { name: 'Water Eliminator / Drift Eliminator', description: 'Drift eliminators to prevent water droplet carryover in the air stream.' },
  'overflow-baffle': { name: 'Overflow Baffle', description: 'Overflow baffles to direct excess water safely away from the cooler unit.' },
  'splash-curtain': { name: 'Splash Curtain / Anti-splash Sheet', description: 'Anti-splash curtains and sheets to contain water within the evaporation section.' },
  // Air System
  'fan-blower-motor': { name: 'Fan / Blower Motor', description: 'Replacement drive motors for fan and blower assemblies in air circulation systems.' },
  'fan-guard-grille': { name: 'Fan Guard / Protection Grille', description: 'Safety protection grilles and fan guards for user safety and debris prevention.' },
  'fan-mounting-bracket': { name: 'Fan Mounting Bracket', description: 'Mounting brackets for secure fan and blower assembly installation.' },
  'centrifugal-fan-wheel': { name: 'Centrifugal Fan Wheel / Blower Wheel', description: 'Replacement centrifugal fan and blower wheels for high-pressure air movement.' },
  'centrifugal-housing': { name: 'Volute / Fan Housing / Blower Casing', description: 'Fan housings and volute casings for centrifugal blower assemblies.' },
  'bearing-block': { name: 'Bearing Block / Bearing Unit', description: 'Replaceable bearing blocks and units for centrifugal fan shaft support.' },
  'air-outlet-grille': { name: 'Air Outlet Grille / Louvers', description: 'Adjustable outlet grilles and louvers for air flow direction control.' },
  // Electrical & Controls
  'replacement-motor': { name: 'Replacement Motor', description: 'Replacement drive motors for evaporative coolers. Available in B3, B5, B14 mounting configurations.' },
  'motor-capacitor': { name: 'Motor Capacitor / Starting Capacitor', description: 'Starting and running capacitors for single-phase evaporative cooler motors.' },
  'motor-speed-controller': { name: 'Motor Speed Controller / Drive', description: 'Variable speed controllers for fan motor speed adjustment and energy efficiency.' },
  'control-board': { name: 'Control Board / Controller', description: 'Replacement electronic control boards and system controllers.' },
  'contactor-relay': { name: 'Contactors / Relays', description: 'Electrical contactors and relays for motor and pump power switching circuits.' },
  'fuse-holder': { name: 'Fuse / Fuse Holder', description: 'Panel-mount fuse holders with replacement fuses for electrical circuit protection.' },
  'water-level-sensor': { name: 'Water Level Sensor / Float Switch', description: 'Sensors and float switches for automatic water level detection and control.' },
  'wiring-harness': { name: 'Wiring Harness', description: 'Pre-assembled wiring harnesses with color-coded wires and terminals for cooler electrical systems.' },
  'terminal-block': { name: 'Terminal Block / Connector', description: 'Screw terminal blocks for secure electrical wire termination and distribution.' },
  // Structure & Mounting
  'cabinet-panel': { name: 'Cabinet Panel / Housing Panel', description: 'Replacement cabinet and housing panels for evaporative cooler body repair.' },
  'service-cover': { name: 'Service Cover / Access Door', description: 'Replacement hinged service covers and access doors for maintenance convenience.' },
  'gasket-sealing-strip': { name: 'Gasket / Sealing Strip', description: 'Self-adhesive rubber sealing strips for water-tight cabinet door and panel sealing.' },
  'mounting-bracket': { name: 'Mounting Bracket', description: 'Universal mounting brackets and support plates for component assembly.' },
  'anti-vibration-mount': { name: 'Anti-vibration Mount / Isolator', description: 'Vibration isolation mounts to reduce noise and mechanical stress.' },
  'caster-wheel': { name: 'Caster Wheel Kit', description: 'Replacement caster wheel sets with brakes for portable cooler mobility.' },
  'fasteners-screws': { name: 'Fasteners / Screws / Bolts', description: 'Assorted stainless steel fastener kits for cooler assembly and component mounting.' },
  // Maintenance & Consumables
  'filter-element': { name: 'Filter Replacement Element', description: 'Replaceable air filter elements for intake air filtration in evaporative coolers.' },
  'cleaning-kit-parts': { name: 'Cleaning Kit Parts', description: 'Complete maintenance cleaning kits including descaling solution, brushes, and cloths.' },
  'cooling-pad-replacement': { name: 'Cooling Pad Replacement', description: 'Standard replacement cooling pads — the most common wear item in evaporative cooling systems.' },
  'sealing-strip-replacement': { name: 'Sealing Strip Replacement', description: 'Standard replacement panel sealing strips for maintaining water-tight cabinet integrity.' },
  'drain-plug-replacement': { name: 'Drain Plug Replacement', description: 'Common replacement drain plugs for routine tank maintenance.' },
  // Additional types
  'splash-guard': { name: 'Splash Guard / Baffle for Sump', description: 'Protective baffles to prevent water splashing from the sump area during operation.' },
  'nozzle-spray-jet-evap': { name: 'Nozzle / Spray Jet (Evap Side)', description: 'Spray nozzles and jets for water distribution over evaporative cooling pad surfaces.' },
  'overflow-protection': { name: 'Overflow Protection / Anti-Overflow Parts', description: 'Overflow protection assemblies to prevent water tank overfilling and associated damage.' },
  'elbows-tees-reducers': { name: 'Elbows / Tees / Reducers', description: 'Pipe elbows, tee connectors, and reducers for water system plumbing and routing.' },
  'thermal-protector': { name: 'Thermal Protector / Overload Protector', description: 'Thermal overload protectors for automatic motor safety shutdown on overheating.' },
  'temperature-sensor': { name: 'Temperature Sensor', description: 'NTC thermistor temperature sensors for ambient and water temperature monitoring.' },
  'power-cable': { name: 'Power Cable / Cord', description: 'Standard 3-core power supply cables for evaporative cooler electrical connections.' },
  'leveling-foot': { name: 'Leveling Foot / Base Support', description: 'Adjustable leveling feet with rubber pads for cooler stability on uneven surfaces.' },
  'inlet-ring': { name: 'Inlet Ring / Discharge Ring', description: 'Precision-formed aerodynamic inlet rings for centrifugal fan and blower assemblies.' },
};

/** Convert a content collection entry to the Product type used by templates. */
function toProduct(entry: { data: Record<string, unknown>; body?: string }): Product {
  const d = entry.data;
  return {
    slug: d.slug as string,
    name: d.name as string,
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
  const typeMap = new Map<string, { name: string; description: string; count: number }>();

  for (const product of products) {
    const type = product.productTypeSlug;
    const existing = typeMap.get(type);
    if (existing) {
      existing.count++;
    } else {
      const meta = typeNameMap[type] || {
        name: type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
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
