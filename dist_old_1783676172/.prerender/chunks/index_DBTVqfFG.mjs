import { A as createAstro, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import { i as renderScript } from "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { a as productsData } from "./products_LdiYll85.mjs";
import { t as systemsData } from "./systems_blIFLfkM.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/[system]/[area]/[type]/[product]/index.astro
var _product__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
async function getStaticPaths() {
	const paths = [];
	for (const product of productsData) paths.push({
		params: {
			system: product.systemSlug,
			area: product.areaSlug,
			type: product.productTypeSlug,
			product: product.slug
		},
		props: { product }
	});
	return paths;
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { product } = Astro.props;
	const system = systemsData.find((s) => s.slug === product.systemSlug);
	const area = system?.areas.find((a) => a.slug === product.areaSlug);
	const typeName = product.category;
	const relatedProducts = productsData.filter((p) => p.slug !== product.slug && p.productTypeSlug === product.productTypeSlug).slice(0, 4);
	const crossSell = productsData.filter((p) => p.slug !== product.slug && p.areaSlug === product.areaSlug && p.productTypeSlug !== product.productTypeSlug).slice(0, 4);
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: `${product.name} — ${product.category}`,
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="border-b border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-3 text-sm text-muted sm:px-6"><a href="/" class="hover:text-blue-600">Home</a>${system && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="mx-2">/</span><a${addAttribute(`/${system.slug}`, "href")} class="hover:text-blue-600">${system.name}</a>` })}`}${area && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="mx-2">/</span><a${addAttribute(`/${system.slug}/${area.slug}`, "href")} class="hover:text-blue-600">${area.name}</a>` })}`}<span class="mx-2">/</span><a${addAttribute(`/${product.systemSlug}/${product.areaSlug}/${product.productTypeSlug}`, "href")} class="hover:text-blue-600">${typeName}</a><span class="mx-2">/</span><span class="text-gray-700 dark:text-gray-300">${product.name}</span></div></div><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16"><div class="grid gap-8 lg:grid-cols-2 lg:gap-12"><!-- Image --><div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700"><div class="flex h-full w-full items-center justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-32 w-32 text-gray-300 dark:text-slate-600"
	})}</div></div><!-- Info --><div class="flex flex-col justify-center"><span class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 w-fit">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:tag",
		"class": "h-3.5 w-3.5"
	})}${product.category}</span><h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">${product.name}</h1><p class="mt-4 text-base leading-relaxed text-muted">${product.longDescription}</p><!-- Quick Compatibility Snapshot -->${product.compatibility.length > 0 && renderTemplate`<div class="mt-6 rounded-xl border border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10"><h3 class="mb-3 flex items-center gap-2 text-sm font-semibold text-green-800 dark:text-green-300">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:circle-check",
		"class": "h-4 w-4"
	})}Quick Compatibility Snapshot</h3><div class="flex flex-wrap gap-2">${product.compatibility.map((item) => renderTemplate`<span class="rounded-lg border border-green-300 bg-white px-3 py-1 text-xs font-medium text-green-700 dark:border-green-700 dark:bg-green-900/20 dark:text-green-300">&#x2713; ${item}</span>`)}</div></div>`}<!-- CTA Buttons --><div class="mt-8 flex flex-col gap-3 sm:flex-row"><button id="request-quote-btn"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")} class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-5 w-5"
	})}Request Quote &rarr;</button><button id="add-to-basket-btn"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")} class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-slate-500">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clipboard-plus",
		"class": "h-5 w-5"
	})}Add to Inquiry List</button></div><div id="added-feedback" class="mt-3 hidden items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:circle-check",
		"class": "h-4 w-4"
	})}Added to your inquiry list!</div><!-- MOQ + Price + Lead Time --><div class="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800"><div><span class="text-xs text-muted">MOQ</span><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.moq}</p></div><div><span class="text-xs text-muted">Price Range</span><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.priceRange}</p></div></div></div></div></div></section>${product.specs.length > 0 && renderTemplate`<section class="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Key Specifications</h2><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${product.specs.map((spec) => renderTemplate`<div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"><span class="text-xs font-medium uppercase tracking-wider text-muted">${spec.label}</span><p class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">${spec.value}</p></div>`)}</div></div></section>`}${product.features.length > 0 && renderTemplate`<section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features & Benefits</h2><div class="grid gap-6 sm:grid-cols-2">${product.features.map((feature) => renderTemplate`<div class="flex gap-4"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:check",
		"class": "h-5 w-5"
	})}</div><div><h3 class="font-semibold text-gray-900 dark:text-white">${feature.title}</h3><p class="mt-1 text-sm text-muted">${feature.description}</p></div></div>`)}</div></div></section>`}<section class="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Installation &amp; Replacement Notes</h2><div class="max-w-3xl space-y-4"><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span><div><p class="text-sm text-muted">Disconnect power and water supply before beginning replacement.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span><div><p class="text-sm text-muted">Check interface type and dimensions match your existing component. Refer to the specification table above.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span><div><p class="text-sm text-muted">Install the replacement part using the same mounting method. Ensure all seals and gaskets are properly seated.</p></div></div><div class="flex gap-4"><span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">4</span><div><p class="text-sm text-muted">Test operation with water supply before returning the unit to full service. Check for leaks and proper function.</p></div></div></div><div class="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/10"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Note:</strong> Differences in interface, mounting holes, or dimensions may require adapter rings, gaskets, or mounting plates. Confirm measurements before ordering. Contact us if unsure.</p></div></div></section><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><div class="max-w-3xl"><h2 class="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Warranty &amp; Quality</h2><div class="space-y-4 text-sm text-muted"><p>All parts are manufactured to OEM-compatible specifications with rigorous quality control testing before shipment.</p><p><strong>Warranty:</strong> 12-month standard warranty against manufacturing defects. Extended warranty options available for bulk orders.</p><p><strong>Customization:</strong> OEM/ODM available with your branding. Custom specifications, packaging, and labeling supported for qualifying order volumes.</p></div></div></div></section>${relatedProducts.length > 0 && renderTemplate`<section class="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Similar Products</h2><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${relatedProducts.map((related) => renderTemplate`<a${addAttribute(`/${related.systemSlug}/${related.areaSlug}/${related.productTypeSlug}/${related.slug}`, "href")} class="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"><div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:components",
		"class": "h-6 w-6 text-gray-400"
	})}</div><h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">${related.name}</h3><p class="mt-1 text-xs text-muted line-clamp-2">${related.description}</p><span class="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400">View Details &rarr;</span></a>`)}</div></div></section>`}${crossSell.length > 0 && renderTemplate`<section class="border-t border-gray-200 bg-white dark:border-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">You May Also Need</h2><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${crossSell.map((item) => renderTemplate`<a${addAttribute(`/${item.systemSlug}/${item.areaSlug}/${item.productTypeSlug}/${item.slug}`, "href")} class="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"><div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:components",
		"class": "h-6 w-6 text-gray-400"
	})}</div><h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">${item.name}</h3><p class="mt-1 text-xs text-muted line-clamp-2">${item.description}</p><span class="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400">View Details &rarr;</span></a>`)}</div></div></section>`}${product.faqs.length > 0 && renderTemplate`<section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2><div class="max-w-3xl space-y-4">${product.faqs.map((faq) => renderTemplate`<details class="group rounded-xl border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800"><summary class="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">${faq.question}${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-down",
		"class": "h-4 w-4 transition-transform group-open:rotate-180"
	})}</summary><div class="px-6 pb-4 text-sm text-muted">${faq.answer}</div></details>`)}</div></div></section>`}<div class="sticky bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"><div><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.name}</p><p class="text-xs text-muted">${product.moq}</p></div><button class="sticky-quote-btn inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-4 w-4"
	})}Request Quote</button></div></div>` })}${renderScript($$result, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[system]/[area]/[type]/[product]/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[system]/[area]/[type]/[product]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[system]/[area]/[type]/[product]/index.astro";
var $$url = "/[system]/[area]/[type]/[product]";
//#endregion
//#region \0virtual:astro:page:src/pages/[system]/[area]/[type]/[product]/index@_@astro
var page = () => _product__exports;
//#endregion
export { page };
