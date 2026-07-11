import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon } from "./Footer_DU4vtWH2.mjs";
//#region src/components/inquiry/ProductCard.astro
createAstro("https://coolerparts.example.com");
var $$ProductCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductCard;
	const { product } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"><!-- Image placeholder --><a${addAttribute(`/${product.systemSlug}/${product.areaSlug}/${product.productTypeSlug}/${product.slug}`, "href")} class="block aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700"><div class="flex h-full w-full items-center justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:package",
		"class": "h-16 w-16 text-gray-300 dark:text-slate-600"
	})}</div></a><!-- Content --><div class="flex flex-1 flex-col p-5"><!-- Category tag --><span class="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 w-fit">${product.category}</span><!-- Product name --><a${addAttribute(`/${product.systemSlug}/${product.areaSlug}/${product.productTypeSlug}/${product.slug}`, "href")} class="mb-2"><h3 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">${product.name}</h3></a><!-- Description --><p class="mb-4 text-sm text-muted line-clamp-2 flex-1">${product.description}</p><!-- Key specs (first 3) --><div class="mb-4 space-y-1">${product.specs.slice(0, 3).map((spec) => renderTemplate`<div class="flex justify-between text-xs"><span class="text-muted">${spec.label}</span><span class="font-medium text-gray-800 dark:text-gray-200">${spec.value}</span></div>`)}</div><!-- Bottom: MOQ + Action --><div class="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-slate-700"><div class="text-xs text-muted"><span class="font-medium text-gray-700 dark:text-gray-300">${product.moq}</span><span class="mx-1">·</span><span>${product.priceRange}</span></div><button${addAttribute(product.slug, "data-product-slug")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.category, "data-product-category")}${addAttribute(product.moq, "data-product-moq")}${addAttribute(product.priceRange, "data-product-price")}${addAttribute(product.image, "data-product-image")} class="add-to-basket-btn inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clipboard-plus",
		"class": "h-3.5 w-3.5"
	})}Add to Inquiry</button></div></div></article>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/inquiry/ProductCard.astro", void 0);
//#endregion
export { $$ProductCard as t };
