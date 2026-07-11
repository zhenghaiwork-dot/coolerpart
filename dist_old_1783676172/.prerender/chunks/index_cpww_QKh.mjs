import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import { i as renderScript } from "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { a as productsData } from "./products_LdiYll85.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/products/[slug]/index.astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
async function getStaticPaths() {
	return productsData.map((product) => ({
		params: { slug: product.slug },
		props: { product }
	}));
}
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { product } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: `${product.name} — Replacement Parts`,
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="border-b border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-3 text-sm text-muted sm:px-6"><a href="/" class="hover:text-blue-600">Home</a><span class="mx-2">/</span><a${addAttribute(`/systems/${product.systemSlug}`, "href")} class="hover:text-blue-600">${product.category}</a><span class="mx-2">/</span><span class="text-gray-700 dark:text-gray-300">${product.name}</span></div></div><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16"><div class="grid gap-8 lg:grid-cols-2 lg:gap-12"><!-- Left: Image placeholder --><div class="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700"><div class="flex h-full w-full items-center justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-32 w-32 text-gray-300 dark:text-slate-600"
	})}</div></div><!-- Right: Product info --><div class="flex flex-col justify-center"><span class="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 w-fit">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:tag",
		"class": "h-3.5 w-3.5"
	})}${product.category}</span><h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">${product.name}</h1><p class="mt-4 text-base leading-relaxed text-muted">${product.longDescription}</p><!-- Quick compatibility badges --><div class="mt-6"><h3 class="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">Compatible with:</h3><div class="flex flex-wrap gap-2">${product.compatibility.map((item) => renderTemplate`<span class="rounded-lg border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400">✓ ${item}</span>`)}</div></div><!-- CTA Buttons --><div class="mt-8 flex flex-col gap-3 sm:flex-row"><button id="request-quote-btn"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")} class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-5 w-5"
	})}Request Quote →</button><button id="add-to-basket-btn"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")} class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-slate-500">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clipboard-plus",
		"class": "h-5 w-5"
	})}Add to Inquiry List</button></div><!-- Added feedback --><div id="added-feedback" class="mt-3 hidden items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:circle-check",
		"class": "h-4 w-4"
	})}Added to your inquiry list!</div><!-- MOQ + Price --><div class="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800"><div><span class="text-xs text-muted">MOQ</span><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.moq}</p></div><div><span class="text-xs text-muted">Price Range</span><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.priceRange}</p></div></div></div></div></div></section><section class="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Key Specifications</h2><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${product.specs.map((spec) => renderTemplate`<div class="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"><span class="text-xs font-medium uppercase tracking-wider text-muted">${spec.label}</span><p class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">${spec.value}</p></div>`)}</div></div></section><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Features & Benefits</h2><div class="grid gap-6 sm:grid-cols-2">${product.features.map((feature) => renderTemplate`<div class="flex gap-4"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:check",
		"class": "h-5 w-5"
	})}</div><div><h3 class="font-semibold text-gray-900 dark:text-white">${feature.title}</h3><p class="mt-1 text-sm text-muted">${feature.description}</p></div></div>`)}</div></div></section><section class="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Related Products</h2><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">${productsData.filter((p) => p.slug !== product.slug && p.areaSlug === product.areaSlug).slice(0, 4).map((related) => renderTemplate`<a${addAttribute(`/products/${related.slug}`, "href")} class="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800"><div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:components",
		"class": "h-6 w-6 text-gray-400"
	})}</div><h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">${related.name}</h3><p class="mt-1 text-xs text-muted line-clamp-2">${related.description}</p><span class="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400">View Details →</span></a>`)}</div></div></section><div class="sticky bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"><div><p class="text-sm font-semibold text-gray-900 dark:text-white">${product.name}</p><p class="text-xs text-muted">${product.moq}</p></div><div class="flex gap-2"><button class="sticky-quote-btn inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-4 w-4"
	})}Request Quote</button></div></div></div>${product.faqs.length > 0 && renderTemplate`<section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16"><h2 class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2><div class="space-y-4">${product.faqs.map((faq) => renderTemplate`<details class="group rounded-xl border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800"><summary class="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">${faq.question}${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-down",
		"class": "h-4 w-4 transition-transform group-open:rotate-180"
	})}</summary><div class="px-6 pb-4 text-sm text-muted">${faq.answer}</div></details>`)}</div></div></section>`}${renderScript($$result, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/products/[slug]/index.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/products/[slug]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/products/[slug]/index.astro";
var $$url = "/products/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/products/[slug]/index@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
