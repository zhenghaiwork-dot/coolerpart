import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, d as getPermalink, h as APP_BLOG } from "./runtime_CQAp8_Zo.mjs";
import { n as findImage } from "./Layout_DEwJA1GM.mjs";
import { t as $$Image } from "./Image_BRpDfalA.mjs";
//#region src/components/blog/GridItem.astro
createAstro("https://coolerparts.example.com");
var $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GridItem;
	const { post } = Astro.props;
	const image = await findImage(post.image);
	const link = APP_BLOG?.post?.isEnabled ? getPermalink(post.permalink, "post") : "";
	return renderTemplate`${maybeRenderHead($$result)}<article class="mb-6 transition intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6">${image && (link ? renderTemplate`<a${addAttribute(link, "href")}>${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "w-full md:h-full object-cover rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}</a>` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "w-full md:h-full object-cover rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}`)}</div><h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">${link ? renderTemplate`<a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}>${post.title}</a>` : post.title}</h3><p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p></article>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/GridItem.astro", void 0);
//#endregion
//#region src/components/blog/Grid.astro
createAstro("https://coolerparts.example.com");
var $$Grid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Grid;
	const { posts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6">${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)}</div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/Grid.astro", void 0);
//#endregion
export { $$Grid as t };
