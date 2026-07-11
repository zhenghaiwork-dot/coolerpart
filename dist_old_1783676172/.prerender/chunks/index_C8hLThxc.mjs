import { A as createAstro, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/compatibility/[method]/index.astro
var _method__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
async function getStaticPaths() {
	return [
		{
			params: { method: "interface" },
			props: {
				method: "interface",
				title: "By Interface",
				icon: "tabler:plug"
			}
		},
		{
			params: { method: "dimensions" },
			props: {
				method: "dimensions",
				title: "By Dimensions",
				icon: "tabler:ruler"
			}
		},
		{
			params: { method: "electrical" },
			props: {
				method: "electrical",
				title: "By Electrical",
				icon: "tabler:chart-bar"
			}
		},
		{
			params: { method: "cross-reference" },
			props: {
				method: "cross-reference",
				title: "Cross-reference",
				icon: "tabler:books"
			}
		}
	];
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { method, title, icon } = Astro.props;
	const c = {
		interface: {
			heading: "Find Compatible Parts by Interface Type",
			body: "The interface is the physical connection point between your component and the cooler. Matching the interface ensures the replacement part will physically fit and connect correctly — without needing a specific model number.",
			tips: [
				"Threaded connections — measure thread diameter and pitch (e.g., 1/2\" NPT, M12×1.5)",
				"Flange mounts — measure bolt circle diameter, hole count, and hole diameter",
				"Push-fit / quick-connect — measure tube OD (outer diameter)",
				"Hose barb — measure barb OD and hose ID",
				"Bracket/clamp — measure bracket dimensions, hole spacing, and slot size",
				"If your part has multiple interfaces, note all of them — we can cross-reference to find matches"
			]
		},
		dimensions: {
			heading: "Find Compatible Parts by Key Dimensions",
			body: "Key dimensions like shaft diameter, frame size, bolt patterns, and overall envelope determine whether a replacement part will physically fit in your cooler unit.",
			tips: [
				"For pumps: inlet/outlet size, overall length × width × height, mounting hole center distance",
				"For motors: shaft diameter (mm), shaft length, mounting type (B3/B5/B14), frame size",
				"For cooling pads: width × height × thickness, flute angle, pad material",
				"For filters: outer dimensions, frame thickness, pleat count",
				"For valves: port size, body length, flange dimensions",
				"Always measure in millimeters for the most accurate matching"
			]
		},
		electrical: {
			heading: "Find Compatible Parts by Electrical Parameters",
			body: "Electrical components like motors, capacitors, and control boards must match the voltage, power rating, and other electrical parameters to operate safely and correctly.",
			tips: [
				"Voltage (V) — must match exactly (110V, 220V, 230V, 380V, 415V, or Universal)",
				"Power (W) — within acceptable range; slight variations are usually OK",
				"RPM — for motors, match the speed rating for proper fan/blower performance",
				"Frequency (Hz) — 50Hz vs 60Hz affects motor speed; usually auto-adapts within range",
				"Capacitor — match µF rating and voltage rating",
				"IP rating — match ingress protection level for outdoor/indoor use"
			]
		},
		"cross-reference": {
			heading: "Cross-reference by Part Function",
			body: "If you know what function the part serves but not the exact specifications, use functional cross-reference to find compatible alternatives and substitutes.",
			tips: [
				"Pump replacement chain: pump → pump seal → strainer/filter → hose connectors → solenoid valve",
				"Motor replacement chain: motor → capacitor → wiring → mounting bracket → fan guard",
				"Evaporation chain: cooling pad → pad frame → distribution bar → spray nozzle → anti-clog mesh",
				"If you have an OEM part number, provide it — we can cross-reference to our equivalent",
				"Photos of the part with a ruler for scale are the fastest way to identify a compatible replacement",
				"Note any symptoms (leak, noise, reduced performance) — this helps identify which part needs replacing"
			]
		}
	}[method];
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: `Compatibility ${title} — CoolerParts`,
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white"><div class="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20"><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200 backdrop-blur-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrows-exchange",
		"class": "h-4 w-4"
	})}Compatibility</div><h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">${c.heading}</h1><p class="mt-4 text-lg text-gray-300">${c.body}</p></div></section><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16"><div class="mb-10 flex items-center gap-4"><div class="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "h-7 w-7"
	})}</div><h2 class="text-2xl font-bold text-gray-900 dark:text-white">What to Check</h2></div><div class="space-y-4">${c.tips.map((tip, i) => renderTemplate`<div class="flex gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-slate-700 dark:bg-slate-800"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">${i + 1}</span><p class="text-sm text-muted pt-1">${tip}</p></div>`)}</div><div class="mt-12 rounded-xl bg-violet-50 p-6 text-center dark:bg-violet-900/20"><h3 class="text-lg font-semibold text-violet-800 dark:text-violet-300">Have your measurements ready?</h3><p class="mt-2 text-sm text-violet-700 dark:text-violet-400">Include all interface details, dimensions, and electrical specs in your inquiry for the fastest match.</p><div class="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center"><a href="/inquiry" class="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-4 w-4"
	})} Submit Inquiry</a><a href="/compatibility" class="inline-flex items-center gap-2 rounded-xl border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-900/20">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrow-left",
		"class": "h-4 w-4"
	})} Back to Guide</a></div></div></div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/compatibility/[method]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/compatibility/[method]/index.astro";
var $$url = "/compatibility/[method]";
//#endregion
//#region \0virtual:astro:page:src/pages/compatibility/[method]/index@_@astro
var page = () => _method__exports;
//#endregion
export { page };
