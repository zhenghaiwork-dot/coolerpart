import { A as createAstro, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$PageLayout } from "./PageLayout_9VhlMFWZ.mjs";
import { n as $$Headline, r as $$List, t as $$Pagination } from "./Pagination_gGjly32X.mjs";
import { f as getStaticPathsBlogTag, i as blogTagRobots } from "./blog_bzv07QmT.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/[...blog]/[tag]/[...page].astro
var ____page__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
var getStaticPaths = (async ({ paginate }) => {
	return await getStaticPathsBlogTag({ paginate });
});
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { page, tag } = Astro.props;
	const currentPage = page.currentPage ?? 1;
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": {
		title: `Posts by tag '${tag.title}'${currentPage > 1 ? ` — Page ${currentPage} ` : ""}`,
		robots: {
			index: blogTagRobots?.index,
			follow: blogTagRobots?.follow
		}
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl">${renderComponent($$result, "Headline", $$Headline, {}, { "default": ($$result) => renderTemplate`Tag: ${tag.title}` })}${renderComponent($$result, "BlogList", $$List, { "posts": page.data })}${renderComponent($$result, "Pagination", $$Pagination, {
		"prevUrl": page.url.prev,
		"nextUrl": page.url.next
	})}</section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[tag]/[...page].astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/[tag]/[...page].astro";
var $$url = "/[...blog]/[tag]/[...page]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/[tag]/[...page]@_@astro
var page = () => ____page__exports;
//#endregion
export { page };
