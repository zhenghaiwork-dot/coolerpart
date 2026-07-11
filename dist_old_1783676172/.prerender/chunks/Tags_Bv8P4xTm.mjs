import { A as createAstro, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, d as getPermalink, h as APP_BLOG } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
//#region src/components/blog/Tags.astro
createAstro("https://coolerparts.example.com");
var $$Tags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tags;
	const { tags, class: className = "text-sm", title = void 0, isCategory = false } = Astro.props;
	return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${title !== void 0 && renderTemplate`${maybeRenderHead($$result)}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-2 py-0.5 px-2 lowercase font-medium">${!APP_BLOG?.tag?.isEnabled ? tag.title : renderTemplate`<a${addAttribute(getPermalink(tag.slug, isCategory ? "category" : "tag"), "href")} class="text-muted dark:text-slate-300 hover:text-primary dark:hover:text-gray-200">${tag.title}</a>`}</li>`)}</ul>` })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/Tags.astro", void 0);
//#endregion
export { $$Tags as t };
