import { A as createAstro, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { t as $$PageLayout } from "./PageLayout_C-5dCF8L.mjs";
import { n as $$Headline, r as $$List, t as $$Pagination } from "./Pagination_DqlRg_-V.mjs";
import { l as getStaticPathsBlogCategory, t as blogCategoryRobots } from "./blog_bzv07QmT.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
//#region src/pages/[...blog]/[category]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
var getStaticPaths = (async ({ paginate }) => {
	return await getStaticPathsBlogCategory({ paginate });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page, category } = Astro.props;
	const currentPage = page.currentPage ?? 1;
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": {
		title: `Category '${category.title}' ${currentPage > 1 ? ` — Page ${currentPage}` : ""}`,
		robots: {
			index: blogCategoryRobots?.index,
			follow: blogCategoryRobots?.follow
		}
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">${renderComponent($$result, "Headline", $$Headline, {}, { "default": ($$result) => renderTemplate`${category.title}` })}${renderComponent($$result, "BlogList", $$List, { "posts": page.data })}${renderComponent($$result, "Pagination", $$Pagination, {
		"prevUrl": page.url.prev,
		"nextUrl": page.url.next
	})}</section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[category]/[...page].astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[category]/[...page].astro";
var $$url = "/[...blog]/[category]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/[category]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
