//#region src/data/products.ts
var productsData = [
	{
		slug: "replacement-water-pump-110v",
		name: "Replacement Water Pump 110V",
		category: "Water Pump & Power",
		areaSlug: "water-pump-power",
		systemSlug: "water-system",
		productTypeSlug: "replacement-water-pump",
		moq: "10 pcs",
		priceRange: "$12.50 – $28.00 / pc",
		image: "/images/products/water-pump.jpg",
		description: "Direct replacement water pump for portable evaporative coolers. Compatible with threaded connection interfaces.",
		longDescription: "This replacement water pump is designed for evaporative air cooler units. Features threaded inlet/outlet connections for easy installation. Suitable for portable cabinet coolers with standard sump configurations.",
		compatibility: [
			"Threaded Connection 1/2\"",
			"Universal Mounting Bracket",
			"Most Portable Coolers"
		],
		specs: [
			{
				label: "Voltage",
				value: "110V / 60Hz"
			},
			{
				label: "Power",
				value: "15W"
			},
			{
				label: "Max Head",
				value: "2.5m"
			},
			{
				label: "Flow Rate",
				value: "2000 L/h"
			},
			{
				label: "Inlet/Outlet",
				value: "1/2\" Thread"
			},
			{
				label: "Lift Grade",
				value: "Low Head"
			}
		],
		features: [
			{
				title: "Direct Replacement",
				description: "Drop-in replacement for most portable evaporative cooler pumps."
			},
			{
				title: "Threaded Connections",
				description: "Standard 1/2\" threaded inlet and outlet for easy plumbing."
			},
			{
				title: "Low Power Consumption",
				description: "Energy-efficient 15W motor for continuous operation."
			},
			{
				title: "Corrosion Resistant",
				description: "Engineered with durable materials for long service life."
			}
		],
		faqs: [{
			question: "Is this pump compatible with my cooler?",
			answer: "Check your inlet/outlet size — this pump uses standard 1/2\" threaded connections. Most portable coolers with this interface size will be compatible."
		}, {
			question: "What is the warranty?",
			answer: "Standard 12-month warranty against manufacturing defects."
		}]
	},
	{
		slug: "replacement-water-pump-220v",
		name: "Replacement Water Pump 220V",
		category: "Water Pump & Power",
		areaSlug: "water-pump-power",
		systemSlug: "water-system",
		productTypeSlug: "replacement-water-pump",
		moq: "10 pcs",
		priceRange: "$13.00 – $30.00 / pc",
		image: "/images/products/water-pump.jpg",
		description: "220V replacement water pump for evaporative coolers. Threaded interface for universal fitment.",
		longDescription: "220V/50Hz replacement water pump designed for international evaporative cooler units. Compatible threaded connections ensure broad compatibility with existing plumbing.",
		compatibility: [
			"Threaded Connection 1/2\"",
			"Universal Mounting",
			"220V Cooler Units"
		],
		specs: [
			{
				label: "Voltage",
				value: "220V / 50Hz"
			},
			{
				label: "Power",
				value: "15W"
			},
			{
				label: "Max Head",
				value: "2.5m"
			},
			{
				label: "Flow Rate",
				value: "2000 L/h"
			},
			{
				label: "Inlet/Outlet",
				value: "1/2\" Thread"
			},
			{
				label: "Lift Grade",
				value: "Low Head"
			}
		],
		features: [{
			title: "International Voltage",
			description: "220V/50Hz for markets outside North America."
		}, {
			title: "Universal Fit",
			description: "Standard interface dimensions compatible with most cabinet coolers."
		}],
		faqs: [{
			question: "What is the shaft material?",
			answer: "Ceramic shaft for corrosion resistance and long life."
		}]
	},
	{
		slug: "pump-seal-kit",
		name: "Pump Seal / Shaft Seal Kit",
		category: "Water Pump & Power",
		areaSlug: "water-pump-power",
		systemSlug: "water-system",
		productTypeSlug: "pump-seal-shaft",
		moq: "50 pcs",
		priceRange: "$1.50 – $3.00 / pc",
		image: "/images/products/pump-seal.jpg",
		description: "Replacement pump seal kit for water pump maintenance. Compatible with standard pump shaft sizes.",
		longDescription: "High-quality replacement mechanical seal kit for evaporative cooler water pumps. Prevents water leakage around the pump shaft.",
		compatibility: [
			"6mm Shaft",
			"8mm Shaft",
			"Standard Pump Housing"
		],
		specs: [
			{
				label: "Shaft Diameter",
				value: "6mm / 8mm"
			},
			{
				label: "Material",
				value: "Ceramic / Carbon"
			},
			{
				label: "Type",
				value: "Mechanical Seal"
			}
		],
		features: [{
			title: "Leak Prevention",
			description: "Reliable sealing to prevent water leakage around pump shaft."
		}],
		faqs: []
	},
	{
		slug: "water-strainer-filter",
		name: "Water Strainer / Filter Screen",
		category: "Filtration & Anti-clogging",
		areaSlug: "filtration-anti-clogging",
		systemSlug: "water-system",
		productTypeSlug: "strainer-filter",
		moq: "100 pcs",
		priceRange: "$0.80 – $2.00 / pc",
		image: "/images/products/strainer.jpg",
		description: "Replaceable water strainer screen for evaporative cooler water systems.",
		longDescription: "Fine-mesh water strainer designed to prevent debris from entering the pump and distribution system. Easy to clean and replace.",
		compatibility: ["Standard Inlet Fitting", "Universal Fit"],
		specs: [
			{
				label: "Mesh Size",
				value: "40 mesh"
			},
			{
				label: "Material",
				value: "Stainless Steel / Nylon"
			},
			{
				label: "Connection",
				value: "Push-fit / Threaded"
			}
		],
		features: [{
			title: "Anti-clogging",
			description: "Prevents debris from entering pump and distribution system."
		}],
		faqs: []
	},
	{
		slug: "solenoid-valve-110v",
		name: "Solenoid Valve 110V",
		category: "Valves & Water Control",
		areaSlug: "valves-water-control",
		systemSlug: "water-system",
		productTypeSlug: "solenoid-valve",
		moq: "20 pcs",
		priceRange: "$5.50 – $12.00 / pc",
		image: "/images/products/solenoid-valve.jpg",
		description: "110V solenoid valve for automatic water supply control in evaporative coolers.",
		longDescription: "Normally closed solenoid valve for automated water fill control. Compatible with standard control boards.",
		compatibility: ["1/4\" Quick Connect", "Standard Control Board"],
		specs: [
			{
				label: "Voltage",
				value: "110V / 60Hz"
			},
			{
				label: "Connection",
				value: "1/4\" Tube"
			},
			{
				label: "Type",
				value: "Normally Closed"
			}
		],
		features: [{
			title: "Automatic Control",
			description: "Electrically operated for automated water fill management."
		}],
		faqs: []
	},
	{
		slug: "cooling-pad-standard",
		name: "Standard Cooling Pad 600x300x50mm",
		category: "Cooling Media",
		areaSlug: "cooling-media",
		systemSlug: "evaporation-system",
		productTypeSlug: "cooling-pad",
		moq: "50 pcs",
		priceRange: "$3.00 – $8.00 / pc",
		image: "/images/products/cooling-pad.jpg",
		description: "High-performance evaporative cooling pad with cross-fluted design for maximum cooling efficiency.",
		longDescription: "Premium cellulose cooling pad with cross-fluted media design. Provides excellent water distribution and air flow for optimal evaporative cooling.",
		compatibility: ["600mm Width", "Universal Frame Fit"],
		specs: [
			{
				label: "Dimensions",
				value: "600 x 300 x 50 mm"
			},
			{
				label: "Material",
				value: "Cellulose Paper"
			},
			{
				label: "Flute Angle",
				value: "45/45 deg"
			}
		],
		features: [{
			title: "High Efficiency",
			description: "Cross-fluted design maximizes water-air contact for superior cooling."
		}],
		faqs: []
	},
	{
		slug: "cooling-pad-frame",
		name: "Cooling Pad Frame / Holder",
		category: "Cooling Media",
		areaSlug: "cooling-media",
		systemSlug: "evaporation-system",
		productTypeSlug: "cooling-pad-frame",
		moq: "30 pcs",
		priceRange: "$2.00 – $5.00 / pc",
		image: "/images/products/pad-frame.jpg",
		description: "Durable cooling pad frame for secure pad mounting in evaporative coolers.",
		longDescription: "Replacement pad frame/holder designed to secure cooling pads in position. Corrosion-resistant construction.",
		compatibility: ["600x300mm Pads", "Standard Cabinet"],
		specs: [{
			label: "Material",
			value: "Plastic / Metal"
		}, {
			label: "Compatible Pad Size",
			value: "600 x 300 mm"
		}],
		features: [],
		faqs: []
	},
	{
		slug: "replacement-motor-110v",
		name: "Replacement Motor 110V 550W",
		category: "Motors & Drive",
		areaSlug: "motors-drive",
		systemSlug: "electrical-controls",
		productTypeSlug: "replacement-motor",
		moq: "10 pcs",
		priceRange: "$25.00 – $55.00 / pc",
		image: "/images/products/motor.jpg",
		description: "110V replacement fan/blower motor for evaporative coolers. B3 foot mount, 1400 RPM.",
		longDescription: "High-quality replacement motor designed for evaporative cooler fan and blower applications. B3 foot mount configuration for easy installation.",
		compatibility: [
			"B3 Foot Mount",
			"Standard Frame Size",
			"Most Cabinet Coolers"
		],
		specs: [
			{
				label: "Voltage",
				value: "110V / 60Hz"
			},
			{
				label: "Power",
				value: "550W"
			},
			{
				label: "RPM",
				value: "1400 rpm"
			},
			{
				label: "Mounting Type",
				value: "B3 (Foot Mount)"
			},
			{
				label: "Shaft Diameter",
				value: "12mm"
			},
			{
				label: "Capacitor",
				value: "6 µF"
			}
		],
		features: [{
			title: "B3 Foot Mount",
			description: "Standard B3 foot mounting configuration for easy replacement."
		}, {
			title: "Quiet Operation",
			description: "Precision-balanced rotor for smooth, low-noise operation."
		}],
		faqs: [{
			question: "What mounting type is this motor?",
			answer: "This motor uses B3 foot mount configuration. Check your existing motor mount before ordering."
		}]
	},
	{
		slug: "replacement-motor-220v",
		name: "Replacement Motor 220V 750W",
		category: "Motors & Drive",
		areaSlug: "motors-drive",
		systemSlug: "electrical-controls",
		productTypeSlug: "replacement-motor",
		moq: "10 pcs",
		priceRange: "$28.00 – $60.00 / pc",
		image: "/images/products/motor.jpg",
		description: "220V 750W replacement motor for evaporative coolers. B5 flange mount, 1400 RPM.",
		longDescription: "Robust 220V replacement motor with B5 flange mounting. Suitable for larger evaporative cooler units requiring higher power output.",
		compatibility: [
			"B5 Flange Mount",
			"Standard Frame Size",
			"Large Cabinet Coolers"
		],
		specs: [
			{
				label: "Voltage",
				value: "220V / 50Hz"
			},
			{
				label: "Power",
				value: "750W"
			},
			{
				label: "RPM",
				value: "1400 rpm"
			},
			{
				label: "Mounting Type",
				value: "B5 (Flange Mount)"
			},
			{
				label: "Shaft Diameter",
				value: "14mm"
			},
			{
				label: "Capacitor",
				value: "8 µF"
			}
		],
		features: [{
			title: "B5 Flange Mount",
			description: "Standard B5 flange mounting for secure installation."
		}],
		faqs: []
	},
	{
		slug: "motor-capacitor-6uf",
		name: "Motor Capacitor 6 µF",
		category: "Motors & Drive",
		areaSlug: "motors-drive",
		systemSlug: "electrical-controls",
		productTypeSlug: "motor-capacitor",
		moq: "100 pcs",
		priceRange: "$0.50 – $1.50 / pc",
		image: "/images/products/capacitor.jpg",
		description: "Starting/running capacitor for evaporative cooler motors.",
		longDescription: "Replacement motor capacitor for evaporative cooler fan and pump motors. Metallized polypropylene film construction.",
		compatibility: ["6 µF Rating", "Standard Motor"],
		specs: [
			{
				label: "Capacitance",
				value: "6 µF"
			},
			{
				label: "Voltage",
				value: "450V AC"
			},
			{
				label: "Type",
				value: "Motor Run Capacitor"
			}
		],
		features: [],
		faqs: []
	},
	{
		slug: "fan-mounting-bracket",
		name: "Fan Mounting Bracket Universal",
		category: "Brackets & Reinforcement",
		areaSlug: "brackets-reinforcement",
		systemSlug: "structure-mounting",
		productTypeSlug: "mounting-bracket",
		moq: "50 pcs",
		priceRange: "$1.50 – $3.50 / pc",
		image: "/images/products/bracket.jpg",
		description: "Universal fan mounting bracket for evaporative cooler fan/blower assembly.",
		longDescription: "Heavy-duty fan mounting bracket designed for secure fan assembly mounting. Adjustable design fits multiple frame sizes.",
		compatibility: ["Universal Fit", "Standard Fan Housing"],
		specs: [
			{
				label: "Material",
				value: "Galvanized Steel"
			},
			{
				label: "Finish",
				value: "Zinc Plated"
			},
			{
				label: "Type",
				value: "Universal L-Bracket"
			}
		],
		features: [{
			title: "Universal Fit",
			description: "Adjustable design accommodates multiple fan frame sizes."
		}],
		faqs: []
	},
	{
		slug: "filter-replacement-element",
		name: "Filter Replacement Element",
		category: "Filters & Replacement Elements",
		areaSlug: "filters-replacement-elements",
		systemSlug: "maintenance-consumables",
		productTypeSlug: "filter-element",
		moq: "100 pcs",
		priceRange: "$1.00 – $2.50 / pc",
		image: "/images/products/filter-element.jpg",
		description: "Replaceable filter element for evaporative cooler air intake.",
		longDescription: "High-quality replacement filter element for capturing dust and particles from incoming air. Washable and reusable design.",
		compatibility: ["Standard Filter Frame", "Universal Fit"],
		specs: [
			{
				label: "Material",
				value: "Non-woven Fabric"
			},
			{
				label: "Thickness",
				value: "10mm"
			},
			{
				label: "Washable",
				value: "Yes"
			}
		],
		features: [],
		faqs: []
	},
	{
		slug: "caster-wheel-kit",
		name: "Caster Wheel Kit (4 pcs)",
		category: "Mobile Hardware",
		areaSlug: "mobile-hardware",
		systemSlug: "structure-mounting",
		productTypeSlug: "caster-wheel",
		moq: "20 sets",
		priceRange: "$4.00 – $8.00 / set",
		image: "/images/products/caster.jpg",
		description: "Replacement caster wheel set for portable evaporative coolers.",
		longDescription: "Set of 4 heavy-duty caster wheels with brakes for portable evaporative cooler units. Easy bolt-on installation.",
		compatibility: ["Universal Base Frame", "Standard Mounting Holes"],
		specs: [
			{
				label: "Wheel Diameter",
				value: "50mm"
			},
			{
				label: "Material",
				value: "Rubber / Nylon"
			},
			{
				label: "Brake",
				value: "Dual Locking"
			},
			{
				label: "Load Capacity",
				value: "30 kg per wheel"
			}
		],
		features: [],
		faqs: []
	},
	{
		slug: "float-valve-universal",
		name: "Float Valve Universal",
		category: "Valves & Water Control",
		areaSlug: "valves-water-control",
		systemSlug: "water-system",
		productTypeSlug: "float-valve",
		moq: "50 pcs",
		priceRange: "$2.00 – $4.00 / pc",
		image: "",
		description: "Mechanical float valve for automatic water level control in cooler water tanks.",
		longDescription: "Reliable mechanical float valve designed to maintain consistent water levels in evaporative cooler sump tanks. Adjustable float arm for custom level settings.",
		compatibility: ["Standard Tank Mount", "Universal Water Level"],
		specs: [
			{
				label: "Connection",
				value: "1/4\" Thread"
			},
			{
				label: "Material",
				value: "Brass / Plastic"
			},
			{
				label: "Type",
				value: "Mechanical Float"
			}
		],
		features: [{
			title: "Automatic Level Control",
			description: "Maintains water level without electrical power."
		}],
		faqs: []
	},
	{
		slug: "drain-valve-ball",
		name: "Drain Valve Ball Type",
		category: "Valves & Water Control",
		areaSlug: "valves-water-control",
		systemSlug: "water-system",
		productTypeSlug: "drain-valve",
		moq: "100 pcs",
		priceRange: "$1.50 – $3.00 / pc",
		image: "",
		description: "Manual ball drain valve for water tank drainage in evaporative coolers.",
		longDescription: "Quarter-turn ball valve for quick and complete water tank drainage. Corrosion-resistant construction for long service life in wet environments.",
		compatibility: ["Standard Drain Port", "Threaded Connection"],
		specs: [
			{
				label: "Size",
				value: "1/2\" NPT"
			},
			{
				label: "Material",
				value: "PVC / Brass"
			},
			{
				label: "Type",
				value: "Ball Valve"
			}
		],
		features: [{
			title: "Quick Drain",
			description: "Full-bore design for fast and complete tank drainage."
		}],
		faqs: []
	},
	{
		slug: "nozzle-spray-jet-standard",
		name: "Spray Nozzle Standard",
		category: "Water Distribution & Level Protection",
		areaSlug: "water-distribution-level",
		systemSlug: "water-system",
		productTypeSlug: "nozzle-spray-jet",
		moq: "200 pcs",
		priceRange: "$0.30 – $0.80 / pc",
		image: "",
		description: "Standard spray nozzle for water distribution over cooling pads.",
		longDescription: "High-precision spray nozzle designed for uniform water distribution over evaporative cooling pad surfaces. Anti-clog design with wide spray angle.",
		compatibility: ["Standard Distribution Pipe", "Push-fit Connection"],
		specs: [
			{
				label: "Spray Angle",
				value: "120°"
			},
			{
				label: "Flow Rate",
				value: "2 L/min"
			},
			{
				label: "Material",
				value: "ABS / PP"
			}
		],
		features: [{
			title: "Even Distribution",
			description: "Uniform spray pattern for optimal pad wetting."
		}],
		faqs: []
	},
	{
		slug: "pad-water-distributor-standard",
		name: "Pad Water Distributor Bar",
		category: "Water Feed & Distribution",
		areaSlug: "water-feed-distribution",
		systemSlug: "evaporation-system",
		productTypeSlug: "pad-water-distributor",
		moq: "30 pcs",
		priceRange: "$3.00 – $6.00 / pc",
		image: "",
		description: "Water distribution bar for even water flow across cooling pad surfaces.",
		longDescription: "Replacement water distribution bar with evenly spaced outlet holes for uniform water delivery to cooling pad media. Durable PVC construction.",
		compatibility: ["600mm Pad Width", "Standard Pad Frame"],
		specs: [
			{
				label: "Length",
				value: "600mm"
			},
			{
				label: "Material",
				value: "PVC"
			},
			{
				label: "Hole Spacing",
				value: "25mm"
			}
		],
		features: [{
			title: "Even Distribution",
			description: "Uniformly spaced outlet holes for consistent pad wetting."
		}],
		faqs: []
	},
	{
		slug: "centrifugal-fan-wheel-standard",
		name: "Centrifugal Fan Wheel 250mm",
		category: "Centrifugal Fan System",
		areaSlug: "centrifugal-fan-system",
		systemSlug: "air-system",
		productTypeSlug: "centrifugal-fan-wheel",
		moq: "20 pcs",
		priceRange: "$15.00 – $30.00 / pc",
		image: "",
		description: "Forward-curved centrifugal fan wheel for blower replacement.",
		longDescription: "Forward-curved centrifugal fan wheel designed for replacement in evaporative cooler blower assemblies. Dynamically balanced for smooth, quiet operation.",
		compatibility: ["Standard Blower Housing", "12mm Shaft"],
		specs: [
			{
				label: "Diameter",
				value: "250mm"
			},
			{
				label: "Width",
				value: "80mm"
			},
			{
				label: "Material",
				value: "Galvanized Steel"
			},
			{
				label: "Bore",
				value: "12mm"
			}
		],
		features: [{
			title: "Dynamically Balanced",
			description: "Factory balanced for vibration-free operation."
		}],
		faqs: []
	},
	{
		slug: "control-board-universal",
		name: "Control Board Universal 110V",
		category: "Control Board & Protection",
		areaSlug: "control-board-protection",
		systemSlug: "electrical-controls",
		productTypeSlug: "control-board",
		moq: "10 pcs",
		priceRange: "$18.00 – $35.00 / pc",
		image: "",
		description: "Universal replacement control board for evaporative cooler electronic systems.",
		longDescription: "Replacement electronic control board compatible with most cabinet evaporative coolers. Controls pump, fan, and water fill functions with LED indicator display.",
		compatibility: ["Universal Cooler Fit", "110V Systems"],
		specs: [
			{
				label: "Voltage",
				value: "110V / 60Hz"
			},
			{
				label: "Functions",
				value: "Pump + Fan + Fill"
			},
			{
				label: "Display",
				value: "LED Indicator"
			}
		],
		features: [{
			title: "Plug & Play",
			description: "Standard connector interface for easy control board replacement."
		}, {
			title: "Protection Built-in",
			description: "Overload and short-circuit protection included."
		}],
		faqs: []
	},
	{
		slug: "water-level-sensor-float",
		name: "Water Level Sensor Float Switch",
		category: "Sensors & Water Level Detection",
		areaSlug: "sensors-level-detection",
		systemSlug: "electrical-controls",
		productTypeSlug: "water-level-sensor",
		moq: "50 pcs",
		priceRange: "$2.50 – $5.00 / pc",
		image: "",
		description: "Float-type water level sensor switch for automatic fill control.",
		longDescription: "Reed switch type water level sensor with magnetic float. Provides reliable water level detection for automatic fill and overflow protection circuits.",
		compatibility: ["Standard Tank Mount", "Control Board Compatible"],
		specs: [
			{
				label: "Type",
				value: "Reed Switch + Magnetic Float"
			},
			{
				label: "Output",
				value: "NC / NO Selectable"
			},
			{
				label: "Mounting",
				value: "Tank Side Mount"
			}
		],
		features: [{
			title: "Reliable Detection",
			description: "Non-contact reed switch for long service life."
		}],
		faqs: []
	},
	{
		slug: "cabinet-side-panel-standard",
		name: "Cabinet Side Panel Standard",
		category: "Cabinet / Housing Replacement",
		areaSlug: "cabinet-housing",
		systemSlug: "structure-mounting",
		productTypeSlug: "cabinet-panel",
		moq: "20 pcs",
		priceRange: "$12.00 – $25.00 / pc",
		image: "",
		description: "Replacement side panel for standard cabinet evaporative coolers.",
		longDescription: "Factory-spec replacement side panel for cabinet-type evaporative coolers. Powder-coated finish for corrosion resistance. Pre-drilled mounting holes.",
		compatibility: ["Standard Cabinet Frame", "Pre-drilled Mounting"],
		specs: [
			{
				label: "Material",
				value: "Galvanized Steel"
			},
			{
				label: "Finish",
				value: "Powder Coated"
			},
			{
				label: "Thickness",
				value: "0.8mm"
			}
		],
		features: [{
			title: "Exact Fit",
			description: "Manufactured to factory dimensions for perfect fit."
		}],
		faqs: []
	},
	{
		slug: "anti-vibration-mount-standard",
		name: "Anti-Vibration Mount Set (4 pcs)",
		category: "Brackets & Reinforcement",
		areaSlug: "brackets-reinforcement",
		systemSlug: "structure-mounting",
		productTypeSlug: "anti-vibration-mount",
		moq: "50 sets",
		priceRange: "$1.50 – $3.00 / set",
		image: "",
		description: "Rubber anti-vibration mounts for reducing fan and pump vibration.",
		longDescription: "Set of 4 rubber vibration isolation mounts designed to reduce noise and mechanical vibration from fans, pumps, and motors in evaporative cooler units.",
		compatibility: ["Standard Frame Mount", "M6 Thread"],
		specs: [
			{
				label: "Material",
				value: "Natural Rubber"
			},
			{
				label: "Thread Size",
				value: "M6"
			},
			{
				label: "Load Capacity",
				value: "10 kg each"
			}
		],
		features: [{
			title: "Noise Reduction",
			description: "Significantly reduces vibration transmission to the cabinet."
		}],
		faqs: []
	},
	{
		slug: "cooling-pad-replacement-set",
		name: "Cooling Pad Replacement Set 600x300",
		category: "Wear Parts",
		areaSlug: "wear-parts",
		systemSlug: "maintenance-consumables",
		productTypeSlug: "cooling-pad-replacement",
		moq: "30 pcs",
		priceRange: "$2.50 – $5.00 / pc",
		image: "",
		description: "Standard replacement cooling pad — the most frequent wear part replacement.",
		longDescription: "High-quality replacement cooling pad for routine maintenance. Standard size fits most portable and cabinet evaporative coolers. Recommended replacement every 12-18 months for optimal performance.",
		compatibility: ["600x300mm Frame", "Universal Fit"],
		specs: [
			{
				label: "Dimensions",
				value: "600 x 300 x 50 mm"
			},
			{
				label: "Material",
				value: "Cellulose / Paper"
			},
			{
				label: "Flute Angle",
				value: "45/45 deg"
			},
			{
				label: "Service Life",
				value: "12-18 months"
			}
		],
		features: [{
			title: "Regular Replacement",
			description: "Maintain cooling efficiency with scheduled pad replacement."
		}],
		faqs: []
	}
];
function getProductsByArea(systemSlug, areaSlug) {
	return productsData.filter((p) => p.systemSlug === systemSlug && p.areaSlug === areaSlug);
}
function getProductsBySystem(systemSlug) {
	return productsData.filter((p) => p.systemSlug === systemSlug);
}
function getProductsByType(systemSlug, areaSlug, typeSlug) {
	return productsData.filter((p) => p.systemSlug === systemSlug && p.areaSlug === areaSlug && p.productTypeSlug === typeSlug);
}
function getProductTypeMeta(systemSlug, areaSlug) {
	const products = getProductsByArea(systemSlug, areaSlug);
	const typeMap = /* @__PURE__ */ new Map();
	const typeNameMap = {
		"replacement-water-pump": {
			name: "Replacement Water Pump",
			description: "Direct replacement water pumps for evaporative coolers with threaded or push-fit connections. Core component for water circulation."
		},
		"pump-motor-drive": {
			name: "Pump Motor / Drive Motor",
			description: "Drive motors for water pumps. Replacement units compatible with standard pump housings."
		},
		"pump-seal-shaft": {
			name: "Pump Seal / Shaft Seal",
			description: "Replacement mechanical seals and shaft seals for water pump maintenance and leak prevention."
		},
		"pump-impeller-rotor": {
			name: "Pump Impeller / Pump Rotor",
			description: "Replacement impellers and rotors for restoring pump flow performance."
		},
		"pump-housing-volute": {
			name: "Pump Housing / Volute",
			description: "Pump-side housings and volute casings for pump assembly replacement."
		},
		"strainer-filter": {
			name: "Strainer / Filter Screen",
			description: "Replaceable strainers and filter screens to prevent debris in water circulation systems."
		},
		"filter-element-cartridge": {
			name: "Filter Element / Replaceable Cartridge",
			description: "Replaceable filter cartridges for water filtration in cooler systems."
		},
		"solenoid-valve": {
			name: "Solenoid Valve",
			description: "Electrically operated solenoid valves for automated water supply control."
		},
		"float-valve": {
			name: "Float Valve / Water Level Valve",
			description: "Mechanical float valves for automatic water level maintenance in cooler tanks."
		},
		"drain-valve": {
			name: "Drain Valve / Ball Valve",
			description: "Manual drain and ball valves for water tank drainage and maintenance."
		},
		"check-valve": {
			name: "Check Valve / Backflow Preventer",
			description: "One-way check valves to prevent water backflow in supply lines."
		},
		"water-distribution-manifold": {
			name: "Water Distribution Manifold / Header",
			description: "Distribution manifolds and headers for even water flow across cooling pads."
		},
		"distribution-tube-pipe": {
			name: "Distribution Tube / Pipe",
			description: "Replacement distribution tubes and pipes for water delivery systems."
		},
		"nozzle-spray-jet": {
			name: "Nozzle / Spray Jet",
			description: "Spray nozzles and jets for water distribution over evaporative cooling media."
		},
		"hoses-pipes": {
			name: "Hoses / Pipes",
			description: "Flexible hoses and rigid pipes for water connections throughout the cooling system."
		},
		"couplings-connectors": {
			name: "Unions / Couplings / Connectors",
			description: "Pipe unions, couplings, and connectors for water system assembly and repair."
		},
		"gaskets-sealing-rings": {
			name: "Gaskets / Sealing Rings",
			description: "Sealing gaskets and O-rings for leak-proof plumbing connections."
		},
		"water-tank-sump": {
			name: "Water Tank / Sump",
			description: "Replacement water tanks and sump assemblies for evaporative cooler water storage."
		},
		"drain-plug-outlet": {
			name: "Drain Plug / Drain Outlet Parts",
			description: "Drain plugs and outlet components for water tank drainage."
		},
		"cooling-pad": {
			name: "Cooling Pad / Evaporative Pad",
			description: "High-performance cellulose cooling pads with cross-fluted design for maximum evaporative efficiency."
		},
		"cooling-pad-frame": {
			name: "Cooling Pad Frame / Holder",
			description: "Frames and holders for secure cooling pad mounting and easy replacement."
		},
		"pad-water-distributor": {
			name: "Pad Water Distributor / Distribution Bar",
			description: "Water distribution bars and distributors for even water flow across cooling pad surfaces."
		},
		"anti-clogging-mesh": {
			name: "Anti-clogging Mesh / Screen",
			description: "Protective meshes and screens to prevent debris accumulation on cooling pads."
		},
		"water-eliminator": {
			name: "Water Eliminator / Drift Eliminator",
			description: "Drift eliminators to prevent water droplet carryover in the air stream."
		},
		"overflow-baffle": {
			name: "Overflow Baffle",
			description: "Overflow baffles to direct excess water safely away from the cooler unit."
		},
		"splash-curtain": {
			name: "Splash Curtain / Anti-splash Sheet",
			description: "Anti-splash curtains and sheets to contain water within the evaporation section."
		},
		"fan-blower-motor": {
			name: "Fan / Blower Motor",
			description: "Replacement fan and blower drive motors for air movement in evaporative coolers."
		},
		"fan-guard-grille": {
			name: "Fan Guard / Protection Grille",
			description: "Safety protection grilles and fan guards for user safety and debris prevention."
		},
		"fan-mounting-bracket": {
			name: "Fan Mounting Bracket",
			description: "Mounting brackets for secure fan and blower assembly installation."
		},
		"centrifugal-fan-wheel": {
			name: "Centrifugal Fan Wheel / Blower Wheel",
			description: "Replacement centrifugal fan and blower wheels for high-pressure air movement."
		},
		"centrifugal-housing": {
			name: "Volute / Fan Housing / Blower Casing",
			description: "Fan housings and volute casings for centrifugal blower assemblies."
		},
		"bearing-block": {
			name: "Bearing Block / Bearing Unit",
			description: "Replaceable bearing blocks and units for centrifugal fan shaft support."
		},
		"air-outlet-grille": {
			name: "Air Outlet Grille / Louvers",
			description: "Adjustable outlet grilles and louvers for air flow direction control."
		},
		"replacement-motor": {
			name: "Replacement Motor",
			description: "Replacement drive motors for evaporative coolers. Available in B3, B5, B14 mounting configurations."
		},
		"motor-capacitor": {
			name: "Motor Capacitor / Starting Capacitor",
			description: "Starting and running capacitors for single-phase evaporative cooler motors."
		},
		"motor-speed-controller": {
			name: "Motor Speed Controller / Drive",
			description: "Variable speed controllers and motor drives for fan speed adjustment."
		},
		"control-board": {
			name: "Control Board / Controller",
			description: "Replacement electronic control boards and system controllers."
		},
		"contactor-relay": {
			name: "Contactors / Relays",
			description: "Electrical contactors and relays for motor and pump switching circuits."
		},
		"fuse-holder": {
			name: "Fuse / Fuse Holder",
			description: "Replacement fuses and fuse holders for electrical protection circuits."
		},
		"water-level-sensor": {
			name: "Water Level Sensor / Float Switch",
			description: "Sensors and float switches for automatic water level detection and control."
		},
		"wiring-harness": {
			name: "Wiring Harness",
			description: "Pre-assembled wiring harnesses for electrical system connections and replacements."
		},
		"terminal-block": {
			name: "Terminal Block / Connector",
			description: "Electrical terminal blocks and connectors for wire termination and distribution."
		},
		"cabinet-panel": {
			name: "Cabinet Panel / Housing Panel",
			description: "Replacement cabinet and housing panels for evaporative cooler body repair."
		},
		"service-cover": {
			name: "Service Cover / Access Door",
			description: "Service access covers and doors for maintenance access to internal components."
		},
		"gasket-sealing-strip": {
			name: "Gasket / Sealing Strip",
			description: "Sealing gaskets and strips for water-tight cabinet and panel sealing."
		},
		"mounting-bracket": {
			name: "Mounting Bracket",
			description: "Universal mounting brackets and support plates for component assembly."
		},
		"anti-vibration-mount": {
			name: "Anti-vibration Mount / Isolator",
			description: "Vibration isolation mounts to reduce noise and mechanical stress."
		},
		"caster-wheel": {
			name: "Caster Wheel Kit",
			description: "Replacement caster wheel sets with brakes for portable cooler mobility."
		},
		"fasteners-screws": {
			name: "Fasteners / Screws / Bolts",
			description: "Replacement fasteners, screws, bolts, and installation hardware kits."
		},
		"filter-element": {
			name: "Filter Replacement Element",
			description: "Replaceable air filter elements for intake air filtration in evaporative coolers."
		},
		"cleaning-kit-parts": {
			name: "Cleaning Kit Parts",
			description: "Maintenance cleaning kits and replacement cleaning components for routine servicing."
		},
		"cooling-pad-replacement": {
			name: "Cooling Pad Replacement",
			description: "Standard replacement cooling pads — the most common wear item in evaporative cooling systems."
		},
		"sealing-strip-replacement": {
			name: "Sealing Strip Replacement",
			description: "Replacement door and panel sealing strips for maintaining water-tight integrity."
		},
		"drain-plug-replacement": {
			name: "Drain Plug Replacement",
			description: "Common replacement drain plugs for routine tank maintenance."
		}
	};
	for (const product of products) {
		const type = product.productTypeSlug;
		const existing = typeMap.get(type);
		if (existing) existing.count++;
		else {
			const meta = typeNameMap[type] || {
				name: type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
				description: "Replacement parts for evaporative cooler systems."
			};
			typeMap.set(type, {
				...meta,
				count: 1
			});
		}
	}
	return [...typeMap.entries()].map(([slug, meta]) => ({
		slug,
		...meta,
		productCount: meta.count
	}));
}
//#endregion
export { productsData as a, getProductsByType as i, getProductsByArea as n, getProductsBySystem as r, getProductTypeMeta as t };
