import { A as createAstro, d as renderSlot, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$PageLayout } from "./PageLayout_9VhlMFWZ.mjs";
//#region src/layouts/MarkdownLayout.astro
createAstro("https://coolerparts.example.com");
var $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MarkdownLayout;
	const { frontmatter } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title: frontmatter?.title } }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-4xl"><h1 class="font-bold font-heading text-4xl md:text-5xl leading-tighter tracking-tighter">${frontmatter.title}</h1><div class="mx-auto prose prose-lg max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8">${renderSlot($$result, $$slots["default"])}</div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/layouts/MarkdownLayout.astro", void 0);
//#endregion
export { $$MarkdownLayout as t };
