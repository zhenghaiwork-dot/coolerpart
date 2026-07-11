import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { r as getProductsBySystem } from "./products_LdiYll85.mjs";
import { t as systemsData } from "./systems_blIFLfkM.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/systems/[system]/index.astro
var _system__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
async function getStaticPaths() {
	return systemsData.map((system) => ({
		params: { system: system.slug },
		props: { system }
	}));
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { system } = Astro.props;
	const products = getProductsBySystem(system.slug);
	const colorMap = {
		blue: {
			bg: "bg-blue-50 dark:bg-blue-950/30",
			text: "text-blue-600 dark:text-blue-400",
			border: "border-blue-200 dark:border-blue-800",
			iconBg: "bg-blue-100 dark:bg-blue-900/50"
		},
		emerald: {
			bg: "bg-emerald-50 dark:bg-emerald-950/30",
			text: "text-emerald-600 dark:text-emerald-400",
			border: "border-emerald-200 dark:border-emerald-800",
			iconBg: "bg-emerald-100 dark:bg-emerald-900/50"
		},
		cyan: {
			bg: "bg-cyan-50 dark:bg-cyan-950/30",
			text: "text-cyan-600 dark:text-cyan-400",
			border: "border-cyan-200 dark:border-cyan-800",
			iconBg: "bg-cyan-100 dark:bg-cyan-900/50"
		},
		amber: {
			bg: "bg-amber-50 dark:bg-amber-950/30",
			text: "text-amber-600 dark:text-amber-400",
			border: "border-amber-200 dark:border-amber-800",
			iconBg: "bg-amber-100 dark:bg-amber-900/50"
		},
		slate: {
			bg: "bg-slate-50 dark:bg-slate-800/30",
			text: "text-slate-600 dark:text-slate-400",
			border: "border-slate-200 dark:border-slate-700",
			iconBg: "bg-slate-100 dark:bg-slate-800/50"
		},
		stone: {
			bg: "bg-stone-50 dark:bg-stone-800/30",
			text: "text-stone-600 dark:text-stone-400",
			border: "border-stone-200 dark:border-stone-700",
			iconBg: "bg-stone-100 dark:bg-stone-800/50"
		},
		violet: {
			bg: "bg-violet-50 dark:bg-violet-950/30",
			text: "text-violet-600 dark:text-violet-400",
			border: "border-violet-200 dark:border-violet-800",
			iconBg: "bg-violet-100 dark:bg-violet-900/50"
		}
	};
	const c = colorMap[system.color] || colorMap.blue;
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: `${system.name} — Evaporative Cooler Parts`,
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"><div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28"><div class="flex flex-col items-center text-center"><div${addAttribute(`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${c.iconBg} ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": system.icon,
		"class": "h-8 w-8"
	})}</div><h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">${system.name}</h1><p class="mt-4 max-w-2xl text-lg text-gray-300">${system.description}</p><div class="mt-6 flex items-center gap-6 text-sm text-gray-400"><span class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:folder",
		"class": "h-4 w-4"
	})} ${system.areas.length} Sub-categories</span><span class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-4 w-4"
	})} ${products.length} Products</span></div></div></div></section><section class="bg-gray-50 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div class="mb-8"><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Browse by Sub-category</h2></div><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${system.areas.map((area) => {
		const areaProductCount = products.filter((p) => p.areaSlug === area.slug).length;
		return renderTemplate`<a${addAttribute(`/systems/${system.slug}/${area.slug}`, "href")}${addAttribute(`group flex flex-col rounded-xl border ${c.border} ${c.bg} p-6 transition-all hover:shadow-md hover:-translate-y-0.5`, "class")}><div${addAttribute(`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
			"name": area.icon,
			"class": "h-6 w-6"
		})}</div><h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">${area.name}</h3><p class="mt-1 text-sm text-muted flex-1">${area.shortDesc}</p><div${addAttribute(`mt-4 inline-flex items-center gap-1 text-xs font-medium ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
			"name": "tabler:package",
			"class": "h-3.5 w-3.5"
		})}${areaProductCount} Products</div></a>`;
	})}</div></div></section>${products.length > 0 && renderTemplate`<section class="bg-white dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div class="mb-8 flex items-center justify-between"><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Available Parts</h2><a${addAttribute(`/systems/${system.slug}/${system.areas[0]?.slug}`, "href")} class="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">View All →</a></div><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${products.slice(0, 4).map((product) => renderTemplate`<article class="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50"><div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:components",
		"class": "h-6 w-6 text-gray-400 dark:text-slate-500"
	})}</div><h3 class="text-sm font-semibold text-gray-900 dark:text-white">${product.name}</h3><p class="mt-1 text-xs text-muted line-clamp-2">${product.description}</p><div class="mt-3 border-t border-gray-100 pt-3 text-xs text-muted dark:border-slate-700">${product.moq}</div><a${addAttribute(`/products/${product.slug}`, "href")} class="mt-3 text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">View Details →</a></article>`)}</div></div></section>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/systems/[system]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/systems/[system]/index.astro";
var $$url = "/systems/[system]";
//#endregion
//#region \0virtual:astro:page:src/pages/systems/[system]/index@_@astro
var page = () => _system__exports;
//#endregion
export { page };
