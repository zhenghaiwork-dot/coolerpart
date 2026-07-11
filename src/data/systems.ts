import type { System, SystemArea } from './inquiry-types';

export const systemsData: System[] = [
  {
    slug: 'water-system',
    name: 'Water System',
    shortDesc: 'Pumps, Valves, Filtration & Distribution',
    description:
      'Complete water system components including pumps, motors, filtration, valves, distribution manifolds, and piping connections. Core products for water circulation and management in evaporative cooling units.',
    icon: 'tabler:droplet',
    color: 'blue',
    priority: 1,
    areas: [
      {
        slug: 'water-pump-power',
        name: 'Water Pump & Power',
        shortDesc: 'Replacement pumps, seals, impellers & housings',
        description: 'Core water pump components including replacement pumps, drive motors, seals, impellers, and volute housings for evaporative cooler water circulation.',
        icon: 'tabler:engine',
      },
      {
        slug: 'filtration-anti-clogging',
        name: 'Filtration & Anti-clogging',
        shortDesc: 'Strainers, filter screens & cartridges',
        description: 'Filtration components including strainers, filter screens, and replaceable cartridges to prevent clogging and ensure clean water flow.',
        icon: 'tabler:filter',
      },
      {
        slug: 'valves-water-control',
        name: 'Valves & Water Control',
        shortDesc: 'Solenoid, float, drain & check valves',
        description: 'Water control valves including solenoid valves, float valves, drain valves, ball valves, and check valves for precise water management.',
        icon: 'tabler:arrow-autofit-down',
      },
      {
        slug: 'water-distribution-level',
        name: 'Water Distribution & Level Protection',
        shortDesc: 'Manifolds, tubes, nozzles & overflow protection',
        description: 'Water distribution components including manifolds, distribution tubes, spray nozzles, and overflow protection parts.',
        icon: 'tabler:droplets',
      },
      {
        slug: 'piping-connections',
        name: 'Piping & Connections',
        shortDesc: 'Hoses, unions, couplings, elbows & gaskets',
        description: 'Piping and connection components including hoses, unions, couplings, connectors, elbows, tees, reducers, and sealing gaskets.',
        icon: 'tabler:shovel',
      },
      {
        slug: 'tank-sump-drainage',
        name: 'Tank, Sump & Drainage',
        shortDesc: 'Water tanks, drain plugs, splash guards',
        description: 'Tank and drainage components including water tanks, sump parts, drain plugs, outlet parts, splash guards, and baffles.',
        icon: 'tabler:bucket',
      },
    ],
  },
  {
    slug: 'evaporation-system',
    name: 'Evaporation System',
    shortDesc: 'Cooling Pads, Distribution & Anti-clogging',
    description:
      'Evaporation system components including cooling pads, frames, water distributors, spray nozzles, and anti-clogging solutions for efficient evaporative cooling.',
    icon: 'tabler:wind',
    color: 'emerald',
    priority: 2,
    areas: [
      {
        slug: 'cooling-media',
        name: 'Cooling Media',
        shortDesc: 'Cooling pads, pad frames & holders',
        description: 'Cooling media components including evaporative cooling pads, pad frames, and holders for efficient water-to-air heat exchange.',
        icon: 'tabler:layout-grid',
      },
      {
        slug: 'water-feed-distribution',
        name: 'Water Feed & Distribution',
        shortDesc: 'Pad distributors, bars & spray nozzles',
        description: 'Water feed and distribution components for the evaporation side, including pad water distributors, distribution bars, and spray nozzles.',
        icon: 'tabler:spray',
      },
      {
        slug: 'anti-clogging-debris',
        name: 'Anti-clogging & Debris Management',
        shortDesc: 'Anti-clog mesh, screens & drift eliminators',
        description: 'Anti-clogging and debris management components including protective meshes, screens, and water eliminators.',
        icon: 'tabler:shield-check',
      },
      {
        slug: 'overflow-splash-drain',
        name: 'Overflow, Splash & Drain Guidance',
        shortDesc: 'Overflow baffles, splash curtains & sheets',
        description: 'Overflow and splash control components including overflow baffles, splash curtains, and anti-splash sheets.',
        icon: 'tabler:droplet-off',
      },
    ],
  },
  {
    slug: 'air-system',
    name: 'Air System',
    shortDesc: 'Fans, Blowers, Guards & Mounting',
    description:
      'Air system components including fans, blowers, guards, mounting brackets, and centrifugal fan parts for air movement and ventilation.',
    icon: 'tabler:propeller',
    color: 'cyan',
    priority: 3,
    areas: [
      {
        slug: 'fans-blowers',
        name: 'Fans & Blower Components',
        shortDesc: 'Fan motors, guards, mounting brackets',
        description: 'General fan and blower components including fan/blower motors, protection grilles, and mounting brackets.',
        icon: 'tabler:windmill',
      },
      {
        slug: 'centrifugal-fan-system',
        name: 'Centrifugal Fan System',
        shortDesc: 'Blower wheels, volutes, inlet rings & bearings',
        description: 'Centrifugal fan system components including blower wheels, fan housings, inlet rings, bearing blocks, and flange parts.',
        icon: 'tabler:propeller',
      },
      {
        slug: 'air-outlet-grilles',
        name: 'Air Outlet & Grilles',
        shortDesc: 'Outlet grilles, louvers & safety grills',
        description: 'Air outlet components including outlet grilles, louvers, and front/rear safety protection grills.',
        icon: 'tabler:grid-dots',
      },
    ],
  },
  {
    slug: 'electrical-controls',
    name: 'Electrical & Controls',
    shortDesc: 'Motors, Capacitors, Control Boards & Sensors',
    description:
      'Electrical and control components including replacement motors, capacitors, speed controllers, control boards, contactors, sensors, and wiring.',
    icon: 'tabler:bolt',
    color: 'amber',
    priority: 4,
    areas: [
      {
        slug: 'motors-drive',
        name: 'Motors & Drive',
        shortDesc: 'Replacement motors, capacitors & speed controllers',
        description: 'Core motor components including replacement motors, starting capacitors, and speed controllers for evaporative cooler drive systems.',
        icon: 'tabler:rotate',
      },
      {
        slug: 'control-board-protection',
        name: 'Control Board & Protection',
        shortDesc: 'Control boards, contactors, relays & fuses',
        description: 'Control and protection components including control boards, contactors, relays, fuses, fuse holders, thermal protectors, and overload protectors.',
        icon: 'tabler:cpu',
      },
      {
        slug: 'sensors-level-detection',
        name: 'Sensors & Water Level Detection',
        shortDesc: 'Water level sensors, float switches & temp sensors',
        description: 'Sensing components including water level sensors, float switches, and temperature sensors for automated system monitoring.',
        icon: 'tabler:thermometer',
      },
      {
        slug: 'wiring-connectors',
        name: 'Wiring & Connectors',
        shortDesc: 'Wiring harnesses, terminal blocks & power cables',
        description: 'Wiring and connector components including wiring harnesses, terminal blocks, connectors, and power cables.',
        icon: 'tabler:plug-connected',
      },
    ],
  },
  {
    slug: 'structure-mounting',
    name: 'Structure & Mounting',
    shortDesc: 'Panels, Seals, Brackets & Hardware',
    description:
      'Structural and mounting components including cabinet panels, seals, gaskets, mounting brackets, caster wheels, and fasteners for assembly and installation.',
    icon: 'tabler:tools',
    color: 'slate',
    priority: 5,
    areas: [
      {
        slug: 'cabinet-housing',
        name: 'Cabinet / Housing Replacement',
        shortDesc: 'Panels, covers & access doors',
        description: 'Cabinet and housing replacement components including side panels, back panels, service covers, and access doors.',
        icon: 'tabler:box',
      },
      {
        slug: 'seals-gaskets',
        name: 'Seals, Gaskets & Water Tightness',
        shortDesc: 'Gaskets, sealing strips & door seals',
        description: 'Sealing components including gaskets, sealing strips, door seals, and rubber gaskets for water tightness.',
        icon: 'tabler:square',
      },
      {
        slug: 'brackets-reinforcement',
        name: 'Brackets & Reinforcement',
        shortDesc: 'Mounting brackets, supports & vibration mounts',
        description: 'Bracket and reinforcement components including mounting brackets, reinforcement plates, support brackets, and anti-vibration mounts.',
        icon: 'tabler:brackets-angle',
      },
      {
        slug: 'mobile-hardware',
        name: 'Mobile Hardware',
        shortDesc: 'Caster wheels, leveling feet & supports',
        description: 'Mobility components including caster wheel kits, leveling feet, and base supports for portable cooler units.',
        icon: 'tabler:car',
      },
      {
        slug: 'fasteners-installation',
        name: 'Fasteners & Installation',
        shortDesc: 'Screws, bolts, clips & clamps',
        description: 'Fasteners and installation components including screws, bolts, clips, clamps, and press-strip parts.',
        icon: 'tabler:tool',
      },
    ],
  },
  {
    slug: 'maintenance-consumables',
    name: 'Maintenance & Consumables',
    shortDesc: 'Filters, Wear Parts & Cleaning Replacements',
    description:
      'Maintenance and consumable items including replacement filter elements, cleaning kit parts, and common wear parts for ongoing cooler upkeep.',
    icon: 'tabler:reload',
    color: 'stone',
    priority: 6,
    areas: [
      {
        slug: 'filters-replacement-elements',
        name: 'Filters & Replacement Elements',
        shortDesc: 'Filter replacements & strainer screens',
        description: 'Filter replacement components including filter elements, mesh filters, and strainer screen replacements.',
        icon: 'tabler:filter',
      },
      {
        slug: 'cleaning-maintenance',
        name: 'Cleaning & Maintenance Replacements',
        shortDesc: 'Cleaning kits & maintenance parts',
        description: 'Cleaning and maintenance replacement parts for routine cooler servicing.',
        icon: 'tabler:brush',
      },
      {
        slug: 'wear-parts',
        name: 'Wear Parts',
        shortDesc: 'Cooling pad, seal & drain plug replacements',
        description: 'Common wear parts requiring periodic replacement including cooling pads, sealing strips, and drain plugs.',
        icon: 'tabler:sparkles',
      },
    ],
  },
  {
    slug: 'compatibility',
    name: 'Compatibility & Cross-reference',
    shortDesc: 'Interface, Dimension & Electrical Matching',
    description:
      'Compatibility and cross-reference resources to help identify the correct replacement parts by interface type, dimensions, electrical parameters, or part number cross-reference.',
    icon: 'tabler:arrows-exchange',
    color: 'violet',
    priority: 7,
    areas: [
      {
        slug: 'by-interface',
        name: 'Compatibility by Interface',
        shortDesc: 'Thread, flange & connector matching',
        description: 'Find compatible parts matching your interface type — threaded connections, flanges, hose fittings, and connector patterns.',
        icon: 'tabler:plug',
      },
      {
        slug: 'by-dimensions',
        name: 'Compatibility by Dimensions',
        shortDesc: 'Size, hole pattern & shaft dimension matching',
        description: 'Find compatible parts by key dimensions including pad size, frame size, bolt patterns, and shaft diameters.',
        icon: 'tabler:ruler',
      },
      {
        slug: 'by-electrical',
        name: 'Compatibility by Electrical',
        shortDesc: 'Voltage, power & RPM matching',
        description: 'Find compatible electrical components by matching voltage, power rating, RPM, and other electrical parameters.',
        icon: 'tabler:chart-bar',
      },
      {
        slug: 'cross-reference',
        name: 'Cross-reference by Part Function',
        shortDesc: 'Alternative & substitute part finder',
        description: 'Cross-reference parts by function to find compatible alternatives, substitutes, and replacement options.',
        icon: 'tabler:books',
      },
    ],
  },
];

export function getSystemBySlug(slug: string): System | undefined {
  return systemsData.find((s) => s.slug === slug);
}

export function getAreaBySlug(systemSlug: string, areaSlug: string): SystemArea | undefined {
  const system = getSystemBySlug(systemSlug);
  return system?.areas.find((a) => a.slug === areaSlug);
}

export const featuredSystems = systemsData.filter((s) => s.priority <= 4);
