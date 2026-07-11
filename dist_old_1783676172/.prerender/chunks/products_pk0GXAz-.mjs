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
			description: "Direct replacement water pumps for evaporative coolers with threaded or push-fit connections."
		},
		"pump-seal-shaft": {
			name: "Pump Seal / Shaft Seal",
			description: "Replacement mechanical seals for water pump shafts to prevent leakage."
		},
		"strainer-filter": {
			name: "Strainer / Filter Screen",
			description: "Replaceable strainers and filter screens to prevent debris in water circulation."
		},
		"solenoid-valve": {
			name: "Solenoid Valve",
			description: "Electrically operated valves for automated water supply control."
		},
		"cooling-pad": {
			name: "Cooling Pad / Evaporative Pad",
			description: "High-performance cellulose cooling pads with cross-fluted design."
		},
		"cooling-pad-frame": {
			name: "Cooling Pad Frame / Holder",
			description: "Frames and holders for secure cooling pad mounting."
		},
		"replacement-motor": {
			name: "Replacement Motor",
			description: "Replacement fan/blower motors for evaporative coolers. B3/B5 mount types available."
		},
		"motor-capacitor": {
			name: "Motor Capacitor",
			description: "Starting and running capacitors for evaporative cooler motors."
		},
		"mounting-bracket": {
			name: "Mounting Bracket",
			description: "Universal mounting brackets for fan and component assembly."
		},
		"filter-element": {
			name: "Filter Replacement Element",
			description: "Replaceable filter elements for air intake filtration."
		},
		"caster-wheel": {
			name: "Caster Wheel Kit",
			description: "Replacement caster wheel sets for portable cooler mobility."
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
