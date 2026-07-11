import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { n as getProductsByArea, t as getProductTypeMeta } from "./products_LdiYll85.mjs";
import { t as systemsData } from "./systems_blIFLfkM.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/[system]/[area]/index.astro
var _area__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
async function getStaticPaths() {
	const paths = [];
	for (const system of systemsData) for (const area of system.areas) paths.push({
		params: {
			system: system.slug,
			area: area.slug
		},
		props: {
			system,
			area
		}
	});
	return paths;
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { system, area } = Astro.props;
	const productTypes = getProductTypeMeta(system.slug, area.slug);
	const totalProducts = getProductsByArea(system.slug, area.slug).length;
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
		title: `${area.name} — ${system.name} Parts`,
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="border-b border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-3 text-sm text-muted sm:px-6"><a href="/" class="hover:text-blue-600">Home</a><span class="mx-2">/</span><a${addAttribute(`/${system.slug}`, "href")} class="hover:text-blue-600">${system.name}</a><span class="mx-2">/</span><span class="text-gray-700 dark:text-gray-300">${area.name}</span></div></div><section${addAttribute(`border-b ${c.border} ${c.bg}`, "class")}><div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"><div class="flex items-start gap-5"><div${addAttribute(`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${c.iconBg} ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": area.icon,
		"class": "h-7 w-7"
	})}</div><div><div class="flex items-center gap-2 mb-1"><span class="text-xs font-medium uppercase tracking-wider text-muted">${system.name}</span></div><h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">${area.name}</h1><p class="mt-2 max-w-2xl text-muted">${area.description}</p><div class="mt-4 flex flex-wrap gap-3 text-sm text-muted"><span class="flex items-center gap-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-4 w-4"
	})} ${totalProducts} Products in ${productTypes.length} Types</span></div></div></div></div></section><section class="bg-gray-50 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"><div class="mb-8"><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Browse by Product Type</h2><p class="mt-2 text-sm text-muted">Select a product type to view specific replacement parts.</p></div>${productTypes.length > 0 ? renderTemplate`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${productTypes.map((type) => renderTemplate`<a${addAttribute(`/${system.slug}/${area.slug}/${type.slug}`, "href")}${addAttribute(`group flex flex-col rounded-xl border ${c.border} ${c.bg} p-6 transition-all hover:shadow-md hover:-translate-y-0.5`, "class")}><div${addAttribute(`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": area.icon,
		"class": "h-6 w-6"
	})}</div><h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:underline">${type.name}</h3><p class="mt-1 text-sm text-muted flex-1 line-clamp-2">${type.description}</p><div${addAttribute(`mt-4 inline-flex items-center gap-1 text-xs font-medium ${c.text}`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-3.5 w-3.5"
	})}${type.productCount} Product${type.productCount !== 1 ? "s" : ""}<span class="ml-1 opacity-70">&rarr;</span></div></a>`)}</div>` : renderTemplate`<div class="flex flex-col items-center justify-center py-16 text-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package-off",
		"class": "mb-4 h-16 w-16 text-gray-300 dark:text-slate-600"
	})}<h3 class="text-lg font-semibold text-gray-900 dark:text-white">No product types listed yet</h3><p class="mt-2 text-sm text-muted">Products in this category are being added.</p><a href="/inquiry" class="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:send",
		"class": "h-4 w-4"
	})} Submit Inquiry</a></div>`}</div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[system]/[area]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[system]/[area]/index.astro";
var $$url = "/[system]/[area]";
//#endregion
//#region \0virtual:astro:page:src/pages/[system]/[area]/index@_@astro
var page = () => _area__exports;
//#endregion
export { page };
