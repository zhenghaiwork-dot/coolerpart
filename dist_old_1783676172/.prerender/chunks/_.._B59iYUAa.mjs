import { A as createAstro, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { t as $$PageLayout } from "./PageLayout_C-5dCF8L.mjs";
import { n as $$Headline, r as $$List, t as $$Pagination } from "./Pagination_DqlRg_-V.mjs";
import { n as blogListRobots, u as getStaticPathsBlogList } from "./blog_bzv07QmT.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
//#region src/pages/[...blog]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
var getStaticPaths = (async ({ paginate }) => {
	return await getStaticPathsBlogList({ paginate });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page } = Astro.props;
	const currentPage = page.currentPage ?? 1;
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": {
		title: `Blog${currentPage > 1 ? ` — Page ${currentPage}` : ""}`,
		robots: {
			index: blogListRobots?.index && currentPage === 1,
			follow: blogListRobots?.follow
		},
		openGraph: { type: "blog" }
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">${renderComponent($$result, "Headline", $$Headline, { "subtitle": "A statically generated blog example with news, tutorials, resources and other interesting content related to AstroWind" }, { "default": ($$result) => renderTemplate`The Blog` })}${renderComponent($$result, "BlogList", $$List, { "posts": page.data })}${renderComponent($$result, "Pagination", $$Pagination, {
		"prevUrl": page.url.prev,
		"nextUrl": page.url.next
	})}<!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[...page].astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[...page].astro";
var $$url = "/[...blog]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
