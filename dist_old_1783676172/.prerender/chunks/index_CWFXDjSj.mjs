import { m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon } from "./Footer_DU4vtWH2.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_BB0yaSci.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
//#region src/pages/compatibility/index.astro
var compatibility_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: "Compatibility Guide — Find the Right Part",
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white"><div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28"><div class="mx-auto max-w-2xl text-center"><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-200 backdrop-blur-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrows-exchange",
		"class": "h-4 w-4"
	})}Interface-First Compatibility</div><h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Find Compatible Parts</h1><p class="mt-4 text-lg text-gray-300">Match by interface type, key dimensions, or electrical parameters — no model number needed.</p></div></div></section><section class="bg-gray-50 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"><a href="#" class="group rounded-xl border border-violet-200 bg-white p-6 transition-all hover:shadow-md dark:border-violet-800 dark:bg-slate-800"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:plug",
		"class": "h-6 w-6"
	})}</div><h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600">By Interface</h3><p class="mt-1 text-sm text-muted">Match by thread type, flange size, connector, or mounting pattern.</p></a><a href="#" class="group rounded-xl border border-violet-200 bg-white p-6 transition-all hover:shadow-md dark:border-violet-800 dark:bg-slate-800"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:ruler",
		"class": "h-6 w-6"
	})}</div><h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600">By Dimensions</h3><p class="mt-1 text-sm text-muted">Match by pad size, shaft diameter, bolt pattern, or frame dimensions.</p></a><a href="#" class="group rounded-xl border border-violet-200 bg-white p-6 transition-all hover:shadow-md dark:border-violet-800 dark:bg-slate-800"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chart-bar",
		"class": "h-6 w-6"
	})}</div><h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600">By Electrical</h3><p class="mt-1 text-sm text-muted">Match by voltage, power rating, RPM, and electrical parameters.</p></a><a href="#" class="group rounded-xl border border-violet-200 bg-white p-6 transition-all hover:shadow-md dark:border-violet-800 dark:bg-slate-800"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:books",
		"class": "h-6 w-6"
	})}</div><h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600">Cross-reference</h3><p class="mt-1 text-sm text-muted">Find alternatives and substitutes by part function.</p></a></div></div></section><section class="bg-white dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div class="mx-auto max-w-3xl"><h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">How to Identify Your Part</h2><div class="space-y-6"><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span><div><h3 class="font-semibold text-gray-900 dark:text-white">Check the Interface</h3><p class="mt-1 text-sm text-muted">Look at the connection type — is it threaded, flanged, push-fit, or bolted? Measure thread diameter or flange hole pattern.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span><div><h3 class="font-semibold text-gray-900 dark:text-white">Measure Key Dimensions</h3><p class="mt-1 text-sm text-muted">For pumps: inlet/outlet size. For motors: shaft diameter and mounting pattern. For pads: width, height, thickness.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span><div><h3 class="font-semibold text-gray-900 dark:text-white">Note Electrical Specs</h3><p class="mt-1 text-sm text-muted">Voltage, power (W), RPM, and frequency must match or be within acceptable range for replacement.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">4</span><div><h3 class="font-semibold text-gray-900 dark:text-white">Submit an Inquiry</h3><p class="mt-1 text-sm text-muted">Not sure? Include measurements and photos in your inquiry. Our team will confirm compatibility.</p></div></div></div></div></div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/compatibility/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/compatibility/index.astro";
var $$url = "/compatibility";
//#endregion
//#region \0virtual:astro:page:src/pages/compatibility/index@_@astro
var page = () => compatibility_exports;
//#endregion
export { page };
