import { b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, u as getHomePermalink } from "./runtime_CQAp8_Zo.mjs";
import { t as $$Layout } from "./Layout_BPWRV8yA.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title: `Error 404` } }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="flex items-center h-full p-16"><div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"><div class="max-w-md text-center"><h2 class="mb-8 font-bold text-9xl"><span class="sr-only">Error</span><span class="text-primary">404</span></h2><p class="text-3xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p><p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">But don't worry, you can find plenty of other things on our homepage.</p><a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Back to homepage</a></div></div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/404.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
