import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, d as getPermalink, h as APP_BLOG, p as getFormattedDate } from "./runtime_CQAp8_Zo.mjs";
import { n as findImage } from "./Layout_DEwJA1GM.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_BCFP2GBT.mjs";
import { t as $$Image } from "./Image_BRpDfalA.mjs";
import { t as $$Tags } from "./Tags_CQRZ0pEF.mjs";
//#region src/components/blog/ListItem.astro
createAstro("https://coolerparts.example.com");
var $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ListItem;
	const { post } = Astro.props;
	const image = await findImage(post.image);
	const link = APP_BLOG?.post?.isEnabled ? getPermalink(post.permalink, "post") : "";
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ${image ? "md:grid-cols-2" : ""}`, "class")}>${image && (link ? renderTemplate`<a class="relative block group"${addAttribute(link ?? "javascript:void(0)", "href")}><div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">${image && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}`}</div></a>` : renderTemplate`<div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">${image && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": image,
		"class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"width": 900,
		"height": 506,
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post.title,
		"format": "webp",
		"loading": "lazy",
		"decoding": "async"
	})}`}</div>`)}<div class="mt-2"><header><div class="mb-1"><span class="text-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clock",
		"class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400"
	})}<time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time>${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}· ${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:user",
		"class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400"
	})}<span>${post.author.replaceAll("-", " ")}</span>` })}`}${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}·${" "}<a class="hover:underline"${addAttribute(getPermalink(post.category.slug, "category"), "href")}>${post.category.title}</a>` })}`}</span></div><h2 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">${link ? renderTemplate`<a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}>${post.title}</a>` : post.title}</h2></header>${post.excerpt && renderTemplate`<p class="flex-grow text-muted dark:text-slate-400 text-lg">${post.excerpt}</p>`}${post.tags && Array.isArray(post.tags) ? renderTemplate`<footer class="mt-5">${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags })}</footer>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}</div></article>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/ListItem.astro", void 0);
//#endregion
//#region src/components/blog/List.astro
createAstro("https://coolerparts.example.com");
var $$List = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$List;
	const { posts } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ul>${posts.map((post) => renderTemplate`<li class="mb-12 md:mb-20">${renderComponent($$result, "Item", $$ListItem, { "post": post })}</li>`)}</ul>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/List.astro", void 0);
//#endregion
//#region src/components/blog/Headline.astro
createAstro("https://coolerparts.example.com");
var $$Headline = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Headline;
	const { title = await Astro.slots.render("default"), subtitle = await Astro.slots.render("subtitle") } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="mb-8 md:mb-16 text-center max-w-3xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${unescapeHTML(title)}</h1>${subtitle && renderTemplate`<div class="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`}</header>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/Headline.astro", void 0);
//#endregion
//#region src/components/blog/Pagination.astro
createAstro("https://coolerparts.example.com");
var $$Pagination = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pagination;
	const { prevUrl, nextUrl, prevText = "Newer posts", nextText = "Older posts" } = Astro.props;
	return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead($$result)}<div class="container flex"><div class="flex flex-row mx-auto container justify-between">${renderComponent($$result, "Button", $$Button, {
		"variant": "tertiary",
		"class": `md:px-3 px-3 mr-2 ${!prevUrl ? "invisible" : ""}`,
		"href": getPermalink(prevUrl)
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-left",
		"class": "w-6 h-6"
	})}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, {
		"variant": "tertiary",
		"class": `md:px-3 px-3 ${!nextUrl ? "invisible" : ""}`,
		"href": getPermalink(nextUrl)
	}, { "default": ($$result) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "w-6 h-6"
	})}` })}</div></div>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/Pagination.astro", void 0);
//#endregion
export { $$Headline as n, $$List as r, $$Pagination as t };
