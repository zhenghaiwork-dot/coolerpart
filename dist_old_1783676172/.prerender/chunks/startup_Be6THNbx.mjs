import { A as createAstro, O as unescapeHTML, S as createRenderInstruction, b as addAttribute, c as Fragment, d as renderSlot, m as renderTemplate, o as renderComponent, t as spreadAttributes, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, t as createSvgComponent } from "./runtime_CQAp8_Zo.mjs";
import { i as renderScript } from "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$PageLayout } from "./PageLayout_9VhlMFWZ.mjs";
import { t as $$Image } from "./Image_BRpDfalA.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
import { t as $$Features2 } from "./Features2_BMx1aquy.mjs";
import { t as $$Features3 } from "./Features3_RfAPQg_W.mjs";
import { t as $$Hero } from "./Hero_BA-e9mQk.mjs";
import { t as $$Stats } from "./Stats_BI6mHeK6.mjs";
import { t as $$CallToAction } from "./CallToAction_BEw8wVYY.mjs";
import { t as $$FAQs } from "./FAQs_B03MjyKw.mjs";
import { t as $$Features } from "./Features_D5QlAq_V.mjs";
import { getAttribute, getTextContent, isElementNode, query } from "@parse5/tools";
import { parse } from "parse5";
import { AppBskyEmbedExternal, AppBskyEmbedImages, AppBskyEmbedRecord, AppBskyEmbedRecordWithMedia, AppBskyEmbedVideo, AppBskyFeedPost, AppBskyGraphDefs, AppBskyGraphStarterpack } from "@atcute/bluesky";
import { segmentize } from "@atcute/bluesky-richtext-segmenter";
import { Client, simpleFetchHandler } from "@atcute/client";
import { is } from "@atcute/lexicons";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/runtime/server/render/template-depth.js
function templateEnter(_result) {
	return createRenderInstruction({ type: "template-enter" });
}
function templateExit(_result) {
	return createRenderInstruction({ type: "template-exit" });
}
//#endregion
//#region src/components/widgets/Brands.astro
createAstro("https://coolerparts.example.com");
var $$Brands = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Brands;
	const { title = "", subtitle = "", tagline = "", icons = [], images = [], id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${maybeRenderHead($$result)}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">${icons && icons.map((icon) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500"
	})}`)}${images && images.map((image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-1 px-3 rounded-md dark:bg-gray-200">${renderComponent($$result, "Image", $$Image, {
		"src": image.src,
		"alt": image.alt || "",
		"class": "max-h-12",
		"width": 120,
		"height": 48,
		"format": "webp"
	})}</div>`)}</div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Brands.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-utils@0.2.0/node_modules/@astro-community/astro-embed-utils/index.ts
var LRU = class extends Map {
	maxSize;
	constructor(maxSize) {
		super();
		this.maxSize = maxSize;
	}
	get(key) {
		const value = super.get(key);
		if (value) this.#touch(key, value);
		return value;
	}
	set(key, value) {
		this.#touch(key, value);
		if (this.size > this.maxSize) this.delete(this.keys().next().value);
		return this;
	}
	#touch(key, value) {
		this.delete(key);
		super.set(key, value);
	}
};
var formatError = (...lines) => lines.join("\n         ");
/**
* Fetch a URL and parse it as JSON, but catch errors to stop builds erroring.
* @param url URL to fetch
* @returns {Promise<Record<string, any> | undefined>}
*/
var safeGet = makeSafeGetter((res) => res.json());
/** Factory to create safe, caching fetch functions. */
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
	const cache = new LRU(cacheSize);
	return async function safeGet(url) {
		try {
			const cached = cache.get(url);
			if (cached) return cached;
			const response = await fetch(url);
			if (!response.ok) throw new Error(formatError(`Failed to fetch ${url}`, `Error ${response.status}: ${response.statusText}`));
			const result = await handleResponse(response);
			cache.set(url, result);
			return result;
		} catch (e) {
			console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
			return;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-twitter@0.5.11/node_modules/@astro-community/astro-embed-twitter/Tweet.astro
createAstro("https://coolerparts.example.com");
var $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tweet;
	const { id, theme = "light" } = Astro.props;
	async function fetchTweet(id, theme = "light") {
		const oembedUrl = new URL("https://publish.twitter.com/oembed");
		oembedUrl.searchParams.set("url", id);
		oembedUrl.searchParams.set("omit_script", "true");
		oembedUrl.searchParams.set("dnt", "true");
		oembedUrl.searchParams.set("theme", theme);
		return await safeGet(oembedUrl.href);
	}
	const tweet = await fetchTweet(id, theme);
	return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-twitter@0.5.11/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-youtube@0.5.10/node_modules/@astro-community/astro-embed-youtube/matcher.ts
var urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
/**
* Extract a YouTube ID from a URL if it matches the pattern.
* @param url URL to test
* @returns A YouTube video ID or undefined if none matched
*/
function matcher$1(url) {
	return url.match(urlPattern$1)?.[3];
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-youtube@0.5.10/node_modules/@astro-community/astro-embed-youtube/YouTube.astro
createAstro("https://coolerparts.example.com");
var $$YouTube = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$YouTube;
	const { id, poster, posterQuality = "default", title, style, ...attrs } = Astro.props;
	const idRegExp = /^[A-Za-z0-9-_]+$/;
	function extractID(idOrUrl) {
		if (idRegExp.test(idOrUrl)) return idOrUrl;
		return matcher$1(idOrUrl);
	}
	const videoid = extractID(id);
	const posterFile = {
		max: "maxresdefault",
		high: "sddefault",
		default: "hqdefault",
		low: "default"
	}[posterQuality] || "hqdefault";
	const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
	const href = `https://youtube.com/watch?v=${videoid}`;
	const styles = [];
	if (style) styles.push(style);
	if (posterURL) styles.push(`background-image: url('${posterURL}')`);
	return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", {
		"videoid": videoid,
		"title": title,
		"data-title": title,
		...attrs,
		"style": styles.join(";")
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="lyt-playbtn"><span class="lyt-visually-hidden">${attrs.playlabel || "Play"}</span></a>` })}${renderScript($$result, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-youtube@0.5.10/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-youtube@0.5.10/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-vimeo@0.3.12/node_modules/@astro-community/astro-embed-vimeo/matcher.ts
var urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
/**
* Extract a Vimeo ID from a URL if it matches the pattern.
* @param url URL to test
* @returns A Vimeo video ID or undefined if none matched
*/
function matcher(url) {
	return url.match(urlPattern)?.[3];
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-vimeo@0.3.12/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro
createAstro("https://coolerparts.example.com");
var $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Vimeo;
	const { id, poster, posterQuality = "default", params = "", playlabel = "Play", style, ...attrs } = Astro.props;
	const idRegExp = /^\d+$/;
	function extractID(idOrUrl) {
		if (idRegExp.test(idOrUrl)) return idOrUrl;
		return matcher(idOrUrl);
	}
	const videoid = extractID(id);
	let posterURL = poster;
	if (!posterURL) {
		const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
		if (data) {
			const resolution = {
				max: 1280,
				high: 640,
				default: 480,
				low: 120
			}[posterQuality] || 480;
			const { thumbnail_large } = data?.[0] || {};
			if (thumbnail_large.endsWith("d_640")) posterURL = thumbnail_large.slice(0, -3) + resolution;
			else posterURL = thumbnail_large;
		}
	}
	let [searchString, t] = params.split("#t=");
	const searchParams = new URLSearchParams(searchString);
	if (!t) t = searchParams.get("t");
	searchParams.append("autoplay", "1");
	if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
	const color = searchParams.get("color");
	const styles = [];
	if (style) styles.push(style);
	if (color) styles.push(`--ltv-color: #${color}`);
	if (posterURL) styles.push(`background-image: url('${posterURL}')`);
	return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", {
		"data-id": videoid,
		"data-t": t,
		"data-params": searchParams.toString(),
		"style": styles.join(";"),
		...attrs
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a>` })}${renderScript($$result, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-vimeo@0.3.12/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-vimeo@0.3.12/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-gist@0.1.0/node_modules/@astro-community/astro-embed-gist/Gist.astro
createAstro("https://coolerparts.example.com");
var $$Gist = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Gist;
	const { id, file } = Astro.props;
	const url = new URL(id);
	url.pathname += ".json";
	if (file) url.searchParams.set("file", file);
	async function fetchGist(gistUrl) {
		return await safeGet(gistUrl);
	}
	const gist = await fetchGist(url.href);
	return renderTemplate`${gist && renderTemplate`${renderComponent($$result, "astro-embed-gist", "astro-embed-gist", {}, { "default": ($$result) => renderTemplate`<template shadowrootmode="open">${templateEnter($$result)}<link rel="stylesheet"${addAttribute(gist.stylesheet, "href")}><style>${unescapeHTML(":host {\n	--borderWidth-thin: 1px;\n	--borderRadius-medium: 0.5rem;\n	display: block;\n	color-scheme: light;\n}\n.gist .gist-file {\n	border-radius: calc(var(--borderRadius-medium) + 1px);\n}\n")}</style>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(gist.div)}` })}${templateExit($$result)}</template>` })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-gist@0.1.0/node_modules/@astro-community/astro-embed-gist/Gist.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-link-preview@0.3.1/node_modules/@astro-community/astro-embed-link-preview/dom.ts
/**
* Fetch a URL and parse it as HTML, but catch errors to stop builds erroring.
* @param url URL to fetch
*/
var safeGetDOM = makeSafeGetter(async (res) => {
	const document = parse(await res.text());
	return { getElement: (element, attributes = {}) => {
		const attrs = Object.entries(attributes);
		const el = query(document, (node) => isElementNode(node) && node.tagName === element && attrs.every(([name, value]) => node.attrs.some((attr) => attr.name === name && attr.value === value)));
		return el ? {
			getAttribute: (name) => getAttribute(el, name),
			getTextContent: () => getTextContent(el)
		} : null;
	} };
});
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-link-preview@0.3.1/node_modules/@astro-community/astro-embed-link-preview/lib.ts
/** Helper to filter out insecure or non-absolute URLs. */
var urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
/**
* Loads and parses an HTML page to return Open Graph metadata.
* @param pageUrl URL to parse
*/
async function parseOpenGraph(pageUrl) {
	const html = await safeGetDOM(pageUrl);
	if (!html) return;
	const getMetaProperty = (property) => html.getElement("meta", { property })?.getAttribute("content");
	const getMetaName = (name) => html.getElement("meta", { name })?.getAttribute("content");
	const title = getMetaProperty("og:title") || html.getElement("title")?.getTextContent();
	const description = getMetaProperty("og:description") || getMetaName("description");
	const image = urlOrNull(getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image"));
	const imageAlt = getMetaProperty("og:image:alt");
	const video = urlOrNull(getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video"));
	const videoType = getMetaProperty("og:video:type");
	return {
		title,
		description,
		image,
		imageAlt,
		url: urlOrNull(getMetaProperty("og:url") || html.getElement("link", { rel: "canonical" })?.getAttribute("href")) || pageUrl,
		video,
		videoType
	};
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-link-preview@0.3.1/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro
createAstro("https://coolerparts.example.com");
var $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LinkPreview;
	const { id, hideMedia = false } = Astro.props;
	const meta = await parseOpenGraph(id);
	const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
	return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(["link-preview", {
		"link-preview--has-video": !hideMedia && meta.video && meta.videoType,
		"link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
	}], "class:list")} data-astro-cid-dxufrsnn><div class="link-preview__content" data-astro-cid-dxufrsnn><header data-astro-cid-dxufrsnn><a class="link-preview__title"${addAttribute(id, "href")} data-astro-cid-dxufrsnn>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain" data-astro-cid-dxufrsnn>${domain}</small>`}</header><small class="link-preview__description" data-astro-cid-dxufrsnn>${meta.description}</small></div>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-dxufrsnn><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-dxufrsnn></video>` : meta.image ? renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" data-astro-cid-dxufrsnn>` : null}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-dxufrsnn><a${addAttribute(id, "href")} data-astro-cid-dxufrsnn>${id}</a></div>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-link-preview@0.3.1/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/MediaAttachment.astro
createAstro("https://coolerparts.example.com");
var $$MediaAttachment = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MediaAttachment;
	const { media, halfWidth } = Astro.props;
	if (media.type === "unknown") return;
	return renderTemplate`${media.type === "image" && media.preview_url && renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(media.url, "href")}><img${addAttribute(media.description, "alt")} part="image-attachment"${addAttribute(media.meta?.small?.height, "height")}${addAttribute(media.preview_url, "src")}${addAttribute([`${media.preview_url} ${media.meta?.small?.width}w`, `${media.url} ${media.meta?.original?.width}w`].join(", "), "srcset")}${addAttribute([`(width <= 400px) ${halfWidth ? "50vw" : "100vw"}`, halfWidth ? "200px" : "400px"].join(", "), "sizes")}${addAttribute(media.meta?.small?.width, "width")} loading="lazy" decoding="async"></a>`}${(media.type === "video" || media.type === "gifv") && renderTemplate`<video${addAttribute(media.description, "aria-label")} part="video-attachment" controls${addAttribute(media.meta?.original?.height, "height")}${addAttribute(media.preview_url, "poster")} preload="metadata"${addAttribute(media.url, "src")}${addAttribute(media.meta?.original?.width, "width")}${addAttribute(media.type === "gifv", "loop")}></video>`}${media.type === "audio" && renderTemplate`<audio${addAttribute(media.description, "aria-label")} part="audio-attachment" controls preload="metadata"${addAttribute(media.url, "src")}></audio>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/MediaAttachment.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PreviewCardAuthors.astro
createAstro("https://coolerparts.example.com");
var $$PreviewCardAuthors = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PreviewCardAuthors;
	const { authors } = Astro.props;
	return renderTemplate`${!!authors?.length && renderTemplate`${maybeRenderHead($$result)}<span part="preview-card-authors"><svg width="16" height="16" viewBox="0 -4 79 79" role="img"><title>Mastodon</title><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"></path></svg>More from${" "}${authors.map((author) => renderTemplate`<a${addAttribute(author.account.url, "href")}${addAttribute(`@${author.account.username}`, "title")} part="preview-card-author"><img part="preview-card-author-avatar"${addAttribute(author.account.avatar_static, "src")} alt="" width="16" height="16" loading="lazy" decoding="async"><bdi part="preview-card-author-name">${author.account.display_name}</bdi></a>`)}</span>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PreviewCardAuthors.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PreviewCard.astro
createAstro("https://coolerparts.example.com");
var $$PreviewCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PreviewCard;
	const { card } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div part="preview-card"><a${addAttribute(card.url, "href")}${addAttribute(`preview-card-link ${!card.image ? "preview-card-link--no-image" : ""}`, "part")}>${card.image ? renderTemplate`<img alt="" part="preview-card-image"${addAttribute(card.height, "height")}${addAttribute(card.image, "src")}${addAttribute(card.width, "width")} loading="lazy" decoding="async">` : renderTemplate`<span part="preview-card-image-placeholder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"></path></svg></span>`}<div part="preview-card-content"><span part="preview-card-provider-name">${card.provider_name || new URL(card.url).hostname}</span><strong part="preview-card-title">${card.title}</strong>${card.description && renderTemplate`<span part="preview-card-description">${card.description}</span>`}</div></a>${renderComponent($$result, "PreviewCardAuthors", $$PreviewCardAuthors, { "authors": card.authors })}</div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PreviewCard.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/Attachments.astro
createAstro("https://coolerparts.example.com");
var $$Attachments = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Attachments;
	const { post } = Astro.props;
	return renderTemplate`${post.media_attachments.length > 0 ? renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`attachments media-count-${post.media_attachments.length}`, "part")}>${post.media_attachments.map((media, index, attachments) => renderTemplate`<div${addAttribute(index === 0 && attachments.length === 3 ? "row-span" : void 0, "part")}>${renderComponent($$result, "MediaAttachment", $$MediaAttachment, {
		"media": media,
		"halfWidth": attachments.length > 1
	})}</div>`)}</div>` : post.card && renderTemplate`${renderComponent($$result, "PreviewCard", $$PreviewCard, { "card": post.card })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/Attachments.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PostFooter.astro
createAstro("https://coolerparts.example.com");
var $$PostFooter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostFooter;
	const { post } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div part="footer"><a${addAttribute(post.url, "href")}><time${addAttribute(post.created_at, "datetime")}>${new Date(post.created_at).toLocaleDateString(void 0, {
		year: "numeric",
		month: "long",
		day: "numeric"
	})}</time></a></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PostFooter.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/utils.ts
/**
* Thanks to @astrojs/starlight
* https://github.com/withastro/starlight/blob/8a861d16b586b019f61f30d93c61bdcd58e1503f/packages/starlight/utils/i18n.ts#L12
*
* A list of well-known right-to-left languages used as a fallback when determining the text
* direction of a locale is not supported by the `Intl.Locale` API in the current environment.
*
* @see getLocaleDir()
* @see https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags
*/
var wellKnownRTL = [
	"ar",
	"fa",
	"he",
	"prs",
	"ps",
	"syc",
	"ug",
	"ur"
];
function getLocaleDir(lang) {
	const locale = new Intl.Locale(lang);
	if ("textInfo" in locale) return locale.textInfo.direction;
	else if ("getTextInfo" in locale) return locale.getTextInfo().direction;
	return wellKnownRTL.includes(locale.language) ? "rtl" : "ltr";
}
var idRegExp = /(\d+)\/?$/;
function extractID(url) {
	return url.match(idRegExp)?.[0];
}
async function fetchMastodonPost(url) {
	const id = extractID(url);
	if (!id) throw new Error("Invalid Mastodon post URL: " + url);
	const data = await safeGet(`${new URL(url).origin}/api/v1/statuses/${id}`);
	return data ? {
		...data,
		dir: getLocaleDir(data.language)
	} : void 0;
}
function replaceEmojis(text, emojis) {
	for (const emoji of emojis) text = text.replace(new RegExp(`:${emoji.shortcode}:`, "g"), `<img alt=":${emoji.shortcode}:" class="mastodon-post-emoji" src="${emoji.static_url}" loading="lazy" decoding="async" />`);
	return text;
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PostHeader.astro
createAstro("https://coolerparts.example.com");
var $$PostHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostHeader;
	const { post } = Astro.props;
	const { hostname } = new URL(post.account.url);
	const username = `${post.account.username}@${hostname}`;
	return renderTemplate`${maybeRenderHead($$result)}<div part="header"><a part="user"${addAttribute(post.account.url, "href")}><img part="user-avatar"${addAttribute(post.account.avatar_static, "src")} alt="" width="46" height="46" loading="lazy" decoding="async"><span part="user-content"><bdi><strong part="user-display-name">${unescapeHTML(replaceEmojis(post.account.display_name || post.account.username, post.account.emojis))}</strong></bdi><span part="user-account">@${username}</span></span></a><a${addAttribute(post.url, "href")}><span class="invisible">View on Mastodon</span><svg${spreadAttributes({ part: "mastodon-logo" })} width="40" height="40" viewBox="0 -4 79 79" aria-hidden="true"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"></path></svg></a></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/PostHeader.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/QuotedPost.astro
createAstro("https://coolerparts.example.com");
var $$QuotedPost = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$QuotedPost;
	const { parent, quote, compact = false } = Astro.props;
	let post;
	if ("quoted_status" in quote && quote.quoted_status) post = quote.quoted_status;
	else if ("quoted_status_id" in quote && quote.quoted_status_id) post = await fetchMastodonPost(new URL(quote.quoted_status_id, parent.url).href);
	return renderTemplate`${post && (compact ? renderTemplate`${maybeRenderHead($$result)}<blockquote part="subquote">Quoted a post by @${post.account.acct}</blockquote>` : renderTemplate`<blockquote part="quote"><div part="quote-header"><img part="quote-avatar"${addAttribute(post.account.avatar_static, "src")} alt="" width="32" height="32" loading="lazy" decoding="async"><span part="quote-display-name"><bdi><strong>${unescapeHTML(replaceEmojis(post.account.display_name || post.account.username, post.account.emojis))}</strong></bdi><span part="quote-username">@${post.account.acct}</span></span><a${addAttribute(post.url, "href")}>${new Date(post.created_at).toLocaleDateString(void 0, {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</a></div><div part="quote-content"${addAttribute(getLocaleDir(post.language), "dir")}${addAttribute(post.language, "lang")}>${unescapeHTML(replaceEmojis(post.content, post.emojis))}</div>${post.card && renderTemplate`${renderComponent($$result, "PreviewCard", $$PreviewCard, { "card": post.card })}`}${post.media_attachments.map((media) => renderTemplate`${renderComponent($$result, "MediaAttachment", $$MediaAttachment, { "media": media })}`)}${post.quote && renderTemplate`${renderComponent($$result, "Astro.self", Astro.self, {
		"parent": post,
		"quote": post.quote,
		"compact": true
	})}`}</blockquote>`)}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/QuotedPost.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/MastodonPost.astro
createAstro("https://coolerparts.example.com");
var $$MastodonPost = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MastodonPost;
	const { id } = Astro.props;
	const post = await fetchMastodonPost(id);
	return renderTemplate`${post && renderTemplate`${renderComponent($$result, "astro-embed-mastodon", "astro-embed-mastodon", {}, { "default": ($$result) => renderTemplate`<template shadowrootmode="open">${templateEnter($$result)}<link rel="stylesheet"${addAttribute("/_astro/GlobalStyles.qGGGZqmz.css", "href")}>${maybeRenderHead($$result)}<blockquote part="root">${renderComponent($$result, "PostHeader", $$PostHeader, { "post": post })}<div part="content"${addAttribute(post.dir, "dir")}${addAttribute(post.language, "lang")}>${unescapeHTML(replaceEmojis(post.content, post.emojis))}</div>${renderComponent($$result, "Attachments", $$Attachments, { "post": post })}${post.quote && renderTemplate`${renderComponent($$result, "QuotedPost", $$QuotedPost, {
		"parent": post,
		"quote": post.quote
	})}`}${renderComponent($$result, "PostFooter", $$PostFooter, { "post": post })}</blockquote>${templateExit($$result)}</template>` })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-mastodon@0.1.1/node_modules/@astro-community/astro-embed-mastodon/src/MastodonPost.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BaselineIcon.astro
createAstro("https://coolerparts.example.com");
var $$BaselineIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaselineIcon;
	return renderTemplate`${maybeRenderHead($$result)}<svg width="36" height="20" viewBox="0 0 36 20" class="baseline-icon" aria-hidden="true">${unescapeHTML({
		limited: `<path fill="var(--color-limited)" d="m10 0 6 6-2 2-6-6 2-2Zm12 12-2 2 6 6 2-2-6-6Zm4-12 2 2-18 18-2-2L26 0Z"/><path fill="var(--color-limited-secondary)" d="m8 2 2 2-6 6 6 6-2 2-8-8 8-8Zm20 0 8 8-8 8-2-2 6-6-6-6 2-2Z"/>`,
		widely: `<path fill="var(--color-widely)" d="m18 8 2 2-2 2-2-2 2-2Z"/><path fill="var(--color-widely)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/><path fill="var(--color-widely-secondary)" d="m28 2-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/>`,
		newly: `<path fill="var(--color-newly-secondary)" d="m10 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm16 0 2 2-2 2-2-2 2-2Zm4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4 4 2 2-2 2-2-2 2-2Zm-4-4 2 2-2 2-2-2 2-2ZM6 4l2 2-2 2-2-2 2-2Z"/><path fill="var(--color-newly)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`,
		no_data: `<path fill="var(--color-no_data-secondary)" d="m18 8 2 2-2 2-2-2 2-2Zm10-6-2 2 6 6-6 6-4-4-2 2 6 6 10-10-8-8ZM10 0 2 8l2 2 6-6 4 4 2-2-6-6Z"/><path fill="var(--color-no_data-secondary)" d="m26 0 2 2-18 18L0 10l2-2 8 8L26 0Z"/>`
	}[Astro.props.support])}</svg>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BaselineIcon.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/chrome.svg
var chrome_default = createSvgComponent({
	"meta": {
		"src": "/_astro/chrome.f1eQSm4k.svg",
		"width": 21,
		"height": 21,
		"format": "svg"
	},
	"attributes": {
		"width": "21",
		"height": "21",
		"viewBox": "-10 -10 276 276"
	},
	"children": "\n	<circle cx=\"128\" cy=\"128\" r=\"64\" fill=\"#fff\" />\n	<path fill=\"#229342\" d=\"M96 183a64 64 0 0 1-23-23L17 64a128 128 0 0 0 111 192l55-96a64 64 0 0 1-87 23Z\" />\n	<path fill=\"#FBC116\" d=\"M192 128a64 64 0 0 1-9 32l-55 96A128 128 0 0 0 239 64H128a64 64 0 0 1 64 64Z\" />\n	<circle cx=\"128\" cy=\"128\" r=\"52\" fill=\"#1a73e8\" />\n	<path fill=\"#E33B2E\" d=\"M96 73a64 64 0 0 1 32-9h111a128 128 0 0 0-222 0l56 96a64 64 0 0 1 23-87Z\" />\n",
	"styles": []
});
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/edge.svg
var edge_default = createSvgComponent({
	"meta": {
		"src": "/_astro/edge.B7O1xshw.svg",
		"width": 21,
		"height": 21,
		"format": "svg"
	},
	"attributes": {
		"width": "21",
		"height": "21"
	},
	"children": "\n	<path fill=\"url(#b)\" d=\"M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z\" />\n	<path fill=\"url(#c)\" d=\"M18.416 15.18a7.485 7.485 0 0 1-.845.375 8.121 8.121 0 0 1-2.86.51c-3.77 0-7.053-2.59-7.053-5.92a2.51 2.51 0 0 1 1.307-2.176c-3.41.143-4.287 3.697-4.287 5.777 0 5.897 5.427 6.487 6.598 6.487.63 0 1.578-.184 2.152-.367l.103-.032a10.224 10.224 0 0 0 5.307-4.207.319.319 0 0 0-.422-.447Z\" opacity=\".35\" />\n	<path fill=\"url(#d)\" d=\"M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z\" />\n	<path fill=\"url(#e)\" d=\"M8.423 19.229a6.31 6.31 0 0 1-1.809-1.698A6.43 6.43 0 0 1 8.965 7.97c.255-.12.677-.327 1.243-.319a2.582 2.582 0 0 1 2.048 1.036c.32.431.497.953.502 1.49 0-.016 1.953-6.343-6.375-6.343-3.498 0-6.375 3.315-6.375 6.232-.014 1.54.316 3.065.964 4.462a10.2 10.2 0 0 0 12.464 5.34 6.015 6.015 0 0 1-5.005-.638h-.008Z\" opacity=\".41\" />\n	<path fill=\"url(#f)\" d=\"M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z\" />\n	<path fill=\"url(#g)\" d=\"M12.145 11.857c-.072.08-.271.2-.271.447 0 .207.135.414.382.582 1.14.796 3.3.685 3.307.685a4.75 4.75 0 0 0 2.415-.662A4.893 4.893 0 0 0 20.4 8.694c.024-1.785-.637-2.972-.9-3.498C17.802 1.896 14.16 0 10.2 0A10.2 10.2 0 0 0 0 10.057c.04-2.909 2.933-5.26 6.375-5.26.28 0 1.873.024 3.347.797a5.786 5.786 0 0 1 2.463 2.335c.486.845.573 1.92.573 2.35 0 .431-.215 1.06-.621 1.587l.008-.008Z\" />\n	<defs>\n		<radialGradient id=\"c\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(7.6 0 0 7.2 12.527 14.212)\" gradientUnits=\"userSpaceOnUse\">\n			<stop offset=\".7\" stop-opacity=\"0\" />\n			<stop offset=\".9\" stop-opacity=\".5\" />\n			<stop offset=\"1\" />\n		</radialGradient>\n		<radialGradient id=\"e\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(1.7 -11.3 9.1 1.4 5.623 15.854)\" gradientUnits=\"userSpaceOnUse\">\n			<stop offset=\".8\" stop-opacity=\"0\" />\n			<stop offset=\".9\" stop-opacity=\".5\" />\n			<stop offset=\"1\" />\n		</radialGradient>\n		<radialGradient id=\"f\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-.6 16.1 -34.4 -1.4 2.063 3.77)\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#35C1F1\" />\n			<stop offset=\".1\" stop-color=\"#34C1ED\" />\n			<stop offset=\".2\" stop-color=\"#2FC2DF\" />\n			<stop offset=\".3\" stop-color=\"#2BC3D2\" />\n			<stop offset=\".7\" stop-color=\"#36C752\" />\n		</radialGradient>\n		<radialGradient id=\"g\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(2.2 7.4 -6 1.8 19.13 6.16)\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#66EB6E\" />\n			<stop offset=\"1\" stop-color=\"#66EB6E\" stop-opacity=\"0\" />\n		</radialGradient>\n		<linearGradient id=\"b\" x1=\"4.678\" x2=\"18.894\" y1=\"14.105\" y2=\"14.105\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#0C59A4\" />\n			<stop offset=\"1\" stop-color=\"#114A8B\" />\n		</linearGradient>\n		<linearGradient id=\"d\" x1=\"12.168\" x2=\"3.299\" y1=\"7.937\" y2=\"17.603\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#1B9DE2\" />\n			<stop offset=\".2\" stop-color=\"#1595DF\" />\n			<stop offset=\".7\" stop-color=\"#0680D7\" />\n			<stop offset=\"1\" stop-color=\"#0078D4\" />\n		</linearGradient>\n	</defs>\n",
	"styles": []
});
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/firefox.svg
var firefox_default = createSvgComponent({
	"meta": {
		"src": "/_astro/firefox.CMmddY9p.svg",
		"width": 21,
		"height": 21,
		"format": "svg"
	},
	"attributes": {
		"width": "21",
		"height": "21"
	},
	"children": "\n	<path fill=\"url(#b)\" d=\"M19.66 6.85a5.59 5.59 0 0 0-2.05-2.5c.5.94.85 1.95 1.04 3v.01c-1.16-2.78-3.11-3.9-4.71-6.35L13.7.63l-.12-.2a1.76 1.76 0 0 1-.15-.4l-.02-.02h-.03A7.18 7.18 0 0 0 9.87 5.5a5.2 5.2 0 0 0-2.81 1.05 3.05 3.05 0 0 0-.27-.2 4.44 4.44 0 0 1-.03-2.41A7.53 7.53 0 0 0 4.3 5.78c-.4-.5-.38-2.14-.35-2.48-.12.05-.24.1-.34.18a8.68 8.68 0 0 0-1.95 1.94A8.22 8.22 0 0 0 .27 8.4l-.01.06-.1.62v.02A9.14 9.14 0 0 0 0 10.48v.05c0 2.47.97 4.85 2.7 6.67s4.1 2.95 6.65 3.16a10.45 10.45 0 0 0 7.1-2.02 9.84 9.84 0 0 0 3.83-6.14l.04-.38a9.88 9.88 0 0 0-.66-4.97zM7.9 14.59l.14.07-.14-.07zm10.76-7.22v-.01z\" />\n	<use fill=\"url(#c)\" href=\"#d\" />\n	<use fill=\"url(#e)\" href=\"#d\" />\n	<path fill=\"url(#f)\" d=\"m14.7 8.01.06.05a5.42 5.42 0 0 0-.95-1.2A4.91 4.91 0 0 1 13.37 0a7.18 7.18 0 0 0-3.5 5.49l.35-.02c.91 0 1.8.24 2.6.68A5.07 5.07 0 0 1 14.7 8z\" />\n	<use fill=\"url(#g)\" href=\"#h\" />\n	<use fill=\"url(#i)\" href=\"#h\" />\n	<path fill=\"url(#j)\" d=\"m6.58 6.22.2.14a4.44 4.44 0 0 1-.02-2.42A7.53 7.53 0 0 0 4.3 5.78c.05 0 1.53-.03 2.28.44z\" />\n	<path fill=\"url(#k)\" d=\"M.1 10.76c.78 4.5 5 7.95 9.8 8.08 4.43.13 7.26-2.37 8.43-4.8.99-2.1 1.1-4.5.32-6.67v-.01c.36 2.3-.84 4.51-2.72 6.02v.01c-3.67 2.9-7.18 1.74-7.89 1.28l-.15-.08c-2.14-.98-3.02-2.87-2.83-4.49a2.61 2.61 0 0 1-2.42-1.47c.56-.33 1.2-.52 1.86-.55a3.96 3.96 0 0 1 1.9.4 5.24 5.24 0 0 0 3.83.15c0-.08-1.78-.76-2.47-1.43l-.7-.65a2.9 2.9 0 0 0-.27-.19l-.2-.13a5.18 5.18 0 0 0-2.28-.45c-.41-.5-.38-2.13-.36-2.47-.12.04-.24.1-.34.17a8.62 8.62 0 0 0-1.96 1.94A8.22 8.22 0 0 0 .28 8.4c0 .02-.37 1.56-.19 2.35z\" />\n	<path fill=\"url(#l)\" d=\"M13.81 6.86c.37.35.7.76.95 1.2l.15.12c2.32 2.07 1.1 4.99 1.02 5.2 1.88-1.5 3.08-3.73 2.72-6.02-1.16-2.79-3.12-3.91-4.71-6.36L13.7.62l-.12-.2a1.76 1.76 0 0 1-.15-.4L13.41 0h-.03c-.4.19-2.74 3.78.43 6.85z\" />\n	<path fill=\"url(#m)\" d=\"M14.91 8.18a2.1 2.1 0 0 0-.15-.12L14.7 8a3.61 3.61 0 0 0-2.47-.58c3.68 1.78 2.7 7.9-2.4 7.68a4.7 4.7 0 0 1-1.33-.25l-.3-.12-.17-.08c.72.47 4.22 1.62 7.89-1.27v-.02c.1-.2 1.31-3.12-1-5.2z\" />\n	<path fill=\"url(#n)\" d=\"M5.63 11.42S6.1 9.72 9 9.72c.31 0 1.21-.85 1.23-1.1a5.24 5.24 0 0 1-3.84-.14 3.96 3.96 0 0 0-1.9-.4 3.9 3.9 0 0 0-1.85.54c.21.45.55.83.98 1.09s.93.4 1.44.39c-.2 1.61.7 3.5 2.83 4.49l.14.06a4.18 4.18 0 0 1-2.4-3.23z\" />\n	<path fill=\"url(#o)\" d=\"M19.66 6.84a5.59 5.59 0 0 0-2.05-2.5 10.05 10.05 0 0 1 1.04 3v.02C17.49 4.57 15.54 3.45 13.94 1L13.7.62l-.12-.2a1.78 1.78 0 0 1-.15-.4c0-.02-.01-.02-.02-.02h-.02a7.18 7.18 0 0 0-3.52 5.5l.36-.02c.9 0 1.8.23 2.59.68A5.07 5.07 0 0 1 14.7 8a3.61 3.61 0 0 0-2.46-.58c3.67 1.77 2.69 7.9-2.4 7.67a4.7 4.7 0 0 1-1.33-.25l-.3-.12-.18-.08h.01l-.15-.07.14.07a4.18 4.18 0 0 1-2.4-3.23S6.1 9.72 9 9.72c.32 0 1.21-.85 1.23-1.1 0-.08-1.78-.76-2.47-1.43l-.7-.65a3.05 3.05 0 0 0-.27-.19 4.44 4.44 0 0 1-.03-2.42A7.53 7.53 0 0 0 4.3 5.77c-.4-.5-.38-2.13-.35-2.47-.12.04-.24.1-.34.17a8.68 8.68 0 0 0-1.95 1.94 8.22 8.22 0 0 0-1.38 3l-.01.06-.12.62A11.15 11.15 0 0 0 0 10.47v.05c0 2.48.97 4.86 2.7 6.68s4.1 2.95 6.65 3.16a10.45 10.45 0 0 0 7.1-2.02 9.84 9.84 0 0 0 3.83-6.14l.04-.39a9.88 9.88 0 0 0-.66-4.96z\" />\n	<defs>\n		<radialGradient id=\"c\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(21 0 0 21 17.65 2.3)\" href=\"#p\">\n			<stop offset=\".13\" stop-color=\"#ffbd4f\" />\n			<stop offset=\".19\" stop-color=\"#ffac31\" />\n			<stop offset=\".25\" stop-color=\"#ff9d17\" />\n			<stop offset=\".28\" stop-color=\"#ff980e\" />\n			<stop offset=\".4\" stop-color=\"#ff563b\" />\n			<stop offset=\".47\" stop-color=\"#ff3750\" />\n			<stop offset=\".71\" stop-color=\"#f5156c\" />\n			<stop offset=\".78\" stop-color=\"#eb0878\" />\n			<stop offset=\".86\" stop-color=\"#e50080\" />\n		</radialGradient>\n		<radialGradient id=\"e\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(21 0 0 21 9.75 10.72)\" href=\"#p\">\n			<stop offset=\".3\" stop-color=\"#960e18\" />\n			<stop offset=\".35\" stop-color=\"#b11927\" stop-opacity=\".74\" />\n			<stop offset=\".43\" stop-color=\"#db293d\" stop-opacity=\".34\" />\n			<stop offset=\".5\" stop-color=\"#f5334b\" stop-opacity=\".09\" />\n			<stop offset=\".53\" stop-color=\"#ff3750\" stop-opacity=\"0\" />\n		</radialGradient>\n		<radialGradient id=\"f\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(15 0 0 15 12.38 -2.3)\" href=\"#p\">\n			<stop offset=\".13\" stop-color=\"#fff44f\" />\n			<stop offset=\".25\" stop-color=\"#ffdc3e\" />\n			<stop offset=\".51\" stop-color=\"#ff9d12\" />\n			<stop offset=\".53\" stop-color=\"#ff980e\" />\n		</radialGradient>\n		<radialGradient id=\"g\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(10 0 0 10 7.38 16.08)\" href=\"#p\">\n			<stop offset=\".35\" stop-color=\"#3a8ee6\" />\n			<stop offset=\".47\" stop-color=\"#5c79f0\" />\n			<stop offset=\".67\" stop-color=\"#9059ff\" />\n			<stop offset=\"1\" stop-color=\"#c139e6\" />\n		</radialGradient>\n		<radialGradient id=\"i\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(5 -1 1 6 10.78 8.95)\" href=\"#p\">\n			<stop offset=\".21\" stop-color=\"#9059ff\" stop-opacity=\"0\" />\n			<stop offset=\".28\" stop-color=\"#8c4ff3\" stop-opacity=\".06\" />\n			<stop offset=\".75\" stop-color=\"#7716a8\" stop-opacity=\".45\" />\n			<stop offset=\".97\" stop-color=\"#6e008b\" stop-opacity=\".6\" />\n		</radialGradient>\n		<radialGradient id=\"j\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(7 0 0 7 9.48 1.54)\" href=\"#p\">\n			<stop stop-color=\"#ffe226\" />\n			<stop offset=\".12\" stop-color=\"#ffdb27\" />\n			<stop offset=\".29\" stop-color=\"#ffc82a\" />\n			<stop offset=\".5\" stop-color=\"#ffa930\" />\n			<stop offset=\".73\" stop-color=\"#ff7e37\" />\n			<stop offset=\".79\" stop-color=\"#ff7139\" />\n		</radialGradient>\n		<radialGradient id=\"k\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(31 0 0 30 15.28 -3.06)\" href=\"#p\">\n			<stop offset=\".11\" stop-color=\"#fff44f\" />\n			<stop offset=\".46\" stop-color=\"#ff980e\" />\n			<stop offset=\".62\" stop-color=\"#ff5634\" />\n			<stop offset=\".72\" stop-color=\"#ff3647\" />\n			<stop offset=\".9\" stop-color=\"#e31587\" />\n		</radialGradient>\n		<radialGradient id=\"l\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(2 22 -15 2 12.7 -1.39)\" href=\"#p\">\n			<stop stop-color=\"#fff44f\" />\n			<stop offset=\".06\" stop-color=\"#ffe847\" />\n			<stop offset=\".17\" stop-color=\"#ffc830\" />\n			<stop offset=\".3\" stop-color=\"#ff980e\" />\n			<stop offset=\".36\" stop-color=\"#ff8b16\" />\n			<stop offset=\".46\" stop-color=\"#ff672a\" />\n			<stop offset=\".57\" stop-color=\"#ff3647\" />\n			<stop offset=\".74\" stop-color=\"#e31587\" />\n		</radialGradient>\n		<radialGradient id=\"m\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(19 0 0 19 9.48 4.09)\" href=\"#p\">\n			<stop offset=\".14\" stop-color=\"#fff44f\" />\n			<stop offset=\".48\" stop-color=\"#ff980e\" />\n			<stop offset=\".59\" stop-color=\"#ff5634\" />\n			<stop offset=\".66\" stop-color=\"#ff3647\" />\n			<stop offset=\".9\" stop-color=\"#e31587\" />\n		</radialGradient>\n		<radialGradient id=\"n\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(21 0 0 21 14.5 5.1)\" href=\"#p\">\n			<stop offset=\".09\" stop-color=\"#fff44f\" />\n			<stop offset=\".23\" stop-color=\"#ffe141\" />\n			<stop offset=\".51\" stop-color=\"#ffaf1e\" />\n			<stop offset=\".63\" stop-color=\"#ff980e\" />\n		</radialGradient>\n		<linearGradient id=\"b\" x1=\"18.31\" x2=\"1.88\" y1=\"3.17\" y2=\"19.53\" href=\"#p\">\n			<stop offset=\".05\" stop-color=\"#fff44f\" />\n			<stop offset=\".11\" stop-color=\"#ffe847\" />\n			<stop offset=\".23\" stop-color=\"#ffc830\" />\n			<stop offset=\".37\" stop-color=\"#ff980e\" />\n			<stop offset=\".4\" stop-color=\"#ff8b16\" />\n			<stop offset=\".46\" stop-color=\"#ff672a\" />\n			<stop offset=\".53\" stop-color=\"#ff3647\" />\n			<stop offset=\".7\" stop-color=\"#e31587\" />\n		</linearGradient>\n		<linearGradient id=\"o\" x1=\"18.1\" x2=\"4.14\" y1=\"3.08\" y2=\"17.49\" href=\"#p\">\n			<stop offset=\".17\" stop-color=\"#fff44f\" stop-opacity=\".8\" />\n			<stop offset=\".27\" stop-color=\"#fff44f\" stop-opacity=\".63\" />\n			<stop offset=\".49\" stop-color=\"#fff44f\" stop-opacity=\".22\" />\n			<stop offset=\".6\" stop-color=\"#fff44f\" stop-opacity=\"0\" />\n		</linearGradient>\n		<linearGradient id=\"p\" gradientUnits=\"userSpaceOnUse\" />\n		<path id=\"d\" d=\"M19.66 6.85a5.59 5.59 0 0 0-2.05-2.5c.5.94.85 1.95 1.04 3v.02a8.7 8.7 0 0 1-.32 6.67c-1.17 2.43-4 4.92-8.44 4.8-4.79-.13-9-3.57-9.8-8.08-.14-.71 0-1.07.08-1.65-.1.45-.16.9-.17 1.36v.05c0 2.48.97 4.86 2.7 6.68s4.1 2.95 6.65 3.16a10.45 10.45 0 0 0 7.1-2.02 9.84 9.84 0 0 0 3.83-6.14l.04-.38a9.87 9.87 0 0 0-.66-4.97z\" />\n		<path id=\"h\" d=\"M10.23 8.63C10.2 8.87 9.3 9.72 9 9.72c-2.9 0-3.38 1.7-3.38 1.7a4.18 4.18 0 0 0 2.41 3.24l.17.08.3.12c.43.14.88.23 1.33.24 5.1.23 6.08-5.9 2.4-7.67.87-.1 1.75.1 2.47.58a5.24 5.24 0 0 0-4.47-2.53l-.37.02a5.2 5.2 0 0 0-2.8 1.05c.15.12.32.3.7.65.69.66 2.46 1.34 2.47 1.42z\" />\n	</defs>\n",
	"styles": []
});
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/icons/browsers/safari.svg
var safari_default = createSvgComponent({
	"meta": {
		"src": "/_astro/safari.CdqjFDzc.svg",
		"width": 21,
		"height": 21,
		"format": "svg"
	},
	"attributes": {
		"width": "21",
		"height": "21"
	},
	"children": "\n	<path fill=\"#000\" d=\"M19.505 10.524a8.76 8.76 0 0 1-.708 3.448 8.995 8.995 0 0 1-2.017 2.922 9.33 9.33 0 0 1-3.019 1.953 9.568 9.568 0 0 1-7.12 0 9.33 9.33 0 0 1-3.019-1.953 8.995 8.995 0 0 1-2.017-2.922 8.761 8.761 0 0 1-.708-3.448c0-2.39.98-4.68 2.725-6.37a9.461 9.461 0 0 1 6.58-2.638 9.57 9.57 0 0 1 3.56.685 9.33 9.33 0 0 1 3.018 1.953 8.995 8.995 0 0 1 2.017 2.923 8.76 8.76 0 0 1 .708 3.447Z\" opacity=\".53\" />\n	<path fill=\"url(#b)\" stroke=\"#CDCDCD\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".352\" d=\"M19.859 9.729c0 1.275-.25 2.538-.736 3.716a9.712 9.712 0 0 1-2.093 3.15 9.655 9.655 0 0 1-3.134 2.106 9.612 9.612 0 0 1-10.525-2.105A9.738 9.738 0 0 1 .542 9.729a9.738 9.738 0 0 1 2.83-6.867A9.612 9.612 0 0 1 13.896.757a9.654 9.654 0 0 1 3.133 2.105 9.713 9.713 0 0 1 2.093 3.15 9.757 9.757 0 0 1 .736 3.717Z\" />\n	<path fill=\"url(#c)\" d=\"M19.102 9.729a8.98 8.98 0 0 1-2.607 6.329 8.877 8.877 0 0 1-6.294 2.62 8.877 8.877 0 0 1-6.295-2.62A8.975 8.975 0 0 1 1.3 9.728c0-2.373.938-4.65 2.607-6.328A8.877 8.877 0 0 1 10.201.778c2.36 0 4.624.943 6.294 2.622a8.975 8.975 0 0 1 2.607 6.329Z\" />\n	<path fill=\"#F4F2F3\" d=\"M10.2 1.245a.13.13 0 0 0-.13.13v1.506a.13.13 0 1 0 .26 0V1.376a.13.13 0 0 0-.13-.13Zm-.849.054h-.026a.13.13 0 0 0-.116.144l.066.63a.13.13 0 1 0 .258-.028l-.065-.63A.13.13 0 0 0 9.35 1.3Zm1.704 0a.13.13 0 0 0-.116.117l-.066.63a.13.13 0 1 0 .258.027l.066-.63a.13.13 0 0 0-.142-.143Zm-2.576.127-.026.003a.13.13 0 0 0-.1.155l.31 1.472a.13.13 0 1 0 .254-.054l-.31-1.472a.13.13 0 0 0-.128-.104Zm3.448.002a.13.13 0 0 0-.127.103l-.311 1.472a.13.13 0 0 0 .1.155.13.13 0 0 0 .153-.1l.312-1.473a.13.13 0 0 0-.127-.157Zm-4.28.234a.13.13 0 0 0-.135.17l.195.603a.13.13 0 0 0 .163.084.13.13 0 0 0 .084-.165l-.195-.602a.13.13 0 0 0-.112-.09Zm5.108 0a.13.13 0 0 0-.112.09l-.195.603a.13.13 0 0 0 .083.164.13.13 0 0 0 .164-.084l.195-.602a.13.13 0 0 0-.135-.17Zm-5.931.303a.13.13 0 0 0-.116.184l.608 1.375a.13.13 0 0 0 .17.066.13.13 0 0 0 .067-.172l-.608-1.375a.13.13 0 0 0-.121-.078Zm6.763.005a.13.13 0 0 0-.12.077l-.61 1.375a.13.13 0 0 0 .065.172.13.13 0 0 0 .172-.066l.61-1.374a.13.13 0 0 0-.117-.184Zm-7.527.402a.13.13 0 0 0-.121.196l.314.548a.13.13 0 0 0 .178.047.13.13 0 0 0 .047-.178l-.315-.548a.13.13 0 0 0-.103-.065Zm8.28 0a.13.13 0 0 0-.102.065l-.315.548a.13.13 0 0 0 .047.178.129.129 0 0 0 .178-.048l.314-.548a.13.13 0 0 0-.121-.195Zm-9.022.465a.13.13 0 0 0-.1.207l.878 1.218a.13.13 0 0 0 .182.03.13.13 0 0 0 .029-.183l-.88-1.218a.13.13 0 0 0-.109-.054Zm9.774.007a.13.13 0 0 0-.11.053l-.88 1.217a.13.13 0 0 0 .028.183.13.13 0 0 0 .182-.029l.88-1.217a.13.13 0 0 0-.1-.207Zm-10.437.552a.13.13 0 0 0-.103.218l.421.47c.048.054.13.058.183.01a.13.13 0 0 0 .01-.184l-.421-.47a.13.13 0 0 0-.09-.044Zm11.092.001a.13.13 0 0 0-.09.043l-.421.47a.13.13 0 0 0 .01.185.129.129 0 0 0 .183-.01l.421-.47a.13.13 0 0 0-.103-.218ZM4.019 4.01a.13.13 0 0 0-.08.227l1.113 1.007a.129.129 0 0 0 .183-.01.13.13 0 0 0-.01-.184L4.114 4.043a.129.129 0 0 0-.094-.033Zm12.366.004a.129.129 0 0 0-.093.034l-1.114 1.006a.13.13 0 0 0-.01.184.13.13 0 0 0 .184.01l1.113-1.006a.13.13 0 0 0-.08-.228Zm-12.894.68a.13.13 0 0 0-.08.236l.509.371c.058.043.139.03.18-.028a.13.13 0 0 0-.028-.183l-.51-.372a.13.13 0 0 0-.071-.025Zm13.422.004a.13.13 0 0 0-.071.025l-.51.372a.13.13 0 0 0-.029.182.13.13 0 0 0 .181.029l.51-.372a.13.13 0 0 0-.08-.236Zm-13.916.724a.13.13 0 0 0-.056.243l1.297.753a.13.13 0 0 0 .13-.226L3.07 5.439a.13.13 0 0 0-.074-.017Zm14.407 0a.128.128 0 0 0-.074.017l-1.296.753a.13.13 0 0 0 .13.226l1.296-.753a.13.13 0 0 0-.056-.243ZM2.624 6.2a.13.13 0 0 0-.055.25l.574.258a.13.13 0 0 0 .106-.238l-.575-.259a.129.129 0 0 0-.05-.011Zm15.156.005a.13.13 0 0 0-.05.012l-.576.257a.13.13 0 0 0 .106.239l.575-.258a.13.13 0 0 0-.055-.25Zm-15.49.807a.13.13 0 0 0-.03.254l1.425.466a.13.13 0 0 0 .08-.248l-1.423-.466a.13.13 0 0 0-.051-.006Zm15.822.006a.125.125 0 0 0-.051.006l-1.424.465a.13.13 0 0 0 .08.248l1.424-.465a.13.13 0 0 0-.03-.254Zm-16.029.846a.13.13 0 0 0-.127.104.13.13 0 0 0 .1.155l.616.131a.13.13 0 0 0 .153-.1.13.13 0 0 0-.1-.155l-.615-.132a.127.127 0 0 0-.027-.003Zm16.235.002a.159.159 0 0 0-.027.002L17.677 8a.13.13 0 0 0-.1.155.13.13 0 0 0 .154.1l.615-.131a.13.13 0 0 0 .1-.155.13.13 0 0 0-.127-.103ZM1.926 8.72a.13.13 0 0 0-.116.116.13.13 0 0 0 .116.143l1.488.159a.13.13 0 0 0 .143-.116.13.13 0 0 0-.116-.144L1.953 8.72h-.027Zm16.55.011h-.027l-1.489.156a.13.13 0 0 0-.115.144.13.13 0 0 0 .143.116l1.488-.156a.13.13 0 0 0 .116-.144.13.13 0 0 0-.116-.116ZM1.9 9.598a.13.13 0 0 0-.13.13.13.13 0 0 0 .13.131h.63a.13.13 0 0 0 .13-.13.13.13 0 0 0-.13-.13H1.9Zm15.969 0a.13.13 0 0 0-.13.13.13.13 0 0 0 .13.131h.63a.13.13 0 0 0 .13-.13.13.13 0 0 0-.13-.13h-.63Zm-14.43.712h-.027l-1.488.156a.13.13 0 0 0-.116.144.13.13 0 0 0 .142.116l1.49-.157a.13.13 0 0 0 .115-.143.13.13 0 0 0-.116-.116Zm13.52.01a.13.13 0 0 0-.116.115.13.13 0 0 0 .115.144l1.489.158a.13.13 0 0 0 .143-.116.13.13 0 0 0-.116-.144l-1.488-.158a.123.123 0 0 0-.027 0Zm-14.262.88a.13.13 0 0 0-.027.003l-.616.132a.13.13 0 0 0-.1.155.13.13 0 0 0 .154.1l.616-.131a.13.13 0 0 0 .1-.155.13.13 0 0 0-.127-.103Zm15.005.002a.13.13 0 0 0-.128.103.13.13 0 0 0 .1.155l.616.132a.13.13 0 0 0 .054-.255l-.616-.132a.131.131 0 0 0-.026-.003Zm-13.968.514a.126.126 0 0 0-.051.006l-1.424.465a.13.13 0 0 0 .08.248l1.424-.465a.13.13 0 0 0-.03-.254Zm12.93.004a.13.13 0 0 0-.03.254l1.424.467a.13.13 0 0 0 .08-.248l-1.423-.466a.129.129 0 0 0-.051-.007ZM3.192 12.735a.13.13 0 0 0-.05.011l-.576.258a.13.13 0 0 0 .105.238l.576-.257a.13.13 0 0 0-.055-.25Zm14.015.005a.13.13 0 0 0-.055.25l.575.258a.13.13 0 0 0 .106-.238l-.575-.259a.128.128 0 0 0-.05-.011Zm-12.895.283a.127.127 0 0 0-.074.017l-1.297.753a.13.13 0 0 0 .13.226l1.296-.753a.13.13 0 0 0-.055-.243Zm11.777 0a.13.13 0 0 0-.056.243l1.297.753a.13.13 0 0 0 .177-.048.13.13 0 0 0-.047-.178l-1.297-.753a.128.128 0 0 0-.074-.017Zm-12.1 1.104a.13.13 0 0 0-.073.025l-.51.372a.13.13 0 0 0-.028.182.129.129 0 0 0 .181.03l.51-.373a.13.13 0 0 0-.08-.236Zm12.42.005a.13.13 0 0 0-.08.236l.51.372c.057.042.138.03.18-.03a.13.13 0 0 0-.028-.181l-.51-.373a.13.13 0 0 0-.072-.024Zm-11.267.045a.13.13 0 0 0-.093.033l-1.113 1.006a.13.13 0 0 0-.01.184c.048.054.13.059.183.01l1.113-1.006a.13.13 0 0 0-.08-.227Zm10.113.003a.13.13 0 0 0-.08.227l1.113 1.008a.13.13 0 0 0 .183-.01.13.13 0 0 0-.01-.184l-1.112-1.007a.13.13 0 0 0-.094-.034Zm-9.056.956a.129.129 0 0 0-.11.054l-.88 1.217a.13.13 0 0 0 .028.182c.058.043.139.03.181-.028l.88-1.218a.13.13 0 0 0-.1-.207Zm7.996.006a.13.13 0 0 0-.1.207l.878 1.218a.129.129 0 0 0 .181.029.13.13 0 0 0 .03-.182l-.88-1.219a.13.13 0 0 0-.109-.053Zm-9.133.188a.13.13 0 0 0-.09.043l-.421.47a.13.13 0 0 0 .01.184.129.129 0 0 0 .183-.01l.421-.47a.13.13 0 0 0-.103-.218Zm10.276 0a.13.13 0 0 0-.103.218l.421.47c.048.054.13.058.183.01a.13.13 0 0 0 .01-.184l-.421-.47a.13.13 0 0 0-.09-.044Zm-7.91.522a.13.13 0 0 0-.12.078l-.61 1.374a.13.13 0 0 0 .065.172.13.13 0 0 0 .171-.066l.61-1.374a.13.13 0 0 0-.116-.184Zm5.536.004a.13.13 0 0 0-.116.184l.608 1.375a.13.13 0 0 0 .171.066.13.13 0 0 0 .066-.172l-.608-1.376a.13.13 0 0 0-.12-.077Zm-6.607.421a.13.13 0 0 0-.104.065l-.315.549a.13.13 0 0 0 .048.178.13.13 0 0 0 .177-.048l.315-.548a.13.13 0 0 0-.121-.196Zm7.687 0a.13.13 0 0 0-.121.195l.315.549a.13.13 0 0 0 .177.048.13.13 0 0 0 .047-.178l-.314-.549a.13.13 0 0 0-.104-.065Zm-5.258.02a.13.13 0 0 0-.128.103l-.31 1.473a.13.13 0 1 0 .253.054l.311-1.473a.13.13 0 0 0-.126-.157Zm2.824 0-.026.003a.13.13 0 0 0-.1.155l.31 1.473a.13.13 0 0 0 .154.1.13.13 0 0 0 .1-.154l-.31-1.473a.13.13 0 0 0-.128-.103Zm-1.41.15a.13.13 0 0 0-.13.13v1.505a.13.13 0 1 0 .26 0v-1.505a.13.13 0 0 0-.13-.13Zm-2.382.486a.13.13 0 0 0-.112.09l-.195.602a.13.13 0 0 0 .084.164.13.13 0 0 0 .163-.084l.195-.602a.13.13 0 0 0-.135-.17Zm4.764 0a.13.13 0 0 0-.135.17l.195.602a.13.13 0 0 0 .163.084.13.13 0 0 0 .084-.164l-.195-.602a.13.13 0 0 0-.112-.09Zm-3.196.335a.13.13 0 0 0-.117.116l-.065.63a.13.13 0 1 0 .258.027l.066-.63a.13.13 0 0 0-.142-.143Zm1.624 0a.13.13 0 0 0-.142.143l.065.631a.13.13 0 1 0 .258-.027l-.065-.63a.13.13 0 0 0-.116-.116Z\" />\n	<g filter=\"url(#d)\" opacity=\".409\">\n		<path fill=\"#000\" d=\"m16.283 4.51-7.1 4.147-4.49 7.107 6.568-4.892 5.022-6.363Z\" />\n	</g>\n	<path fill=\"#FF5150\" d=\"M11.218 10.8 9.183 8.657l7.22-4.883-5.185 7.026Z\" />\n	<path fill=\"#F1F1F1\" d=\"M11.218 10.8 9.183 8.657l-5.184 7.027 7.22-4.884Z\" />\n	<path fill=\"#000\" d=\"m3.999 15.684 7.22-4.884 5.184-7.026-12.404 11.91Z\" opacity=\".243\" />\n	<defs>\n		<radialGradient id=\"c\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(10 0 0 10 10.24 8.424)\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#06C2E7\" />\n			<stop offset=\".25\" stop-color=\"#0DB8EC\" />\n			<stop offset=\".5\" stop-color=\"#12AEF1\" />\n			<stop offset=\".75\" stop-color=\"#1F86F9\" />\n			<stop offset=\"1\" stop-color=\"#107DDD\" />\n		</radialGradient>\n		<linearGradient id=\"b\" x1=\"10.2\" x2=\"10.2\" y1=\"19.44\" y2=\".018\" gradientUnits=\"userSpaceOnUse\">\n			<stop stop-color=\"#BDBDBD\" />\n			<stop offset=\"1\" stop-color=\"#fff\" />\n		</linearGradient>\n		<filter id=\"d\" width=\"16.679\" height=\"16.344\" x=\"2.149\" y=\"1.964\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\">\n			<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n			<feBlend in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n			<feGaussianBlur result=\"effect1_foregroundBlur_1510_9490\" stdDeviation=\"1.272\" />\n		</filter>\n	</defs>\n",
	"styles": []
});
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BrowserIcon.astro
createAstro("https://coolerparts.example.com");
var $$BrowserIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BrowserIcon;
	const { browser } = Astro.props;
	const { src, width, height } = {
		chrome: chrome_default,
		edge: edge_default,
		firefox: firefox_default,
		safari: safari_default
	}[browser];
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(src, "src")} alt=""${addAttribute(width, "width")}${addAttribute(height, "height")}>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BrowserIcon.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/SupportIcon.astro
createAstro("https://coolerparts.example.com");
var $$SupportIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SupportIcon;
	const { baseline, browserImplementation } = Astro.props;
	const paths = {
		available: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/><path d="m11.35 8.13-5.01 4.93-3-2.96 1-.98 2 1.96 4-3.94 1 .98Z"/>`,
		unavailable: `<path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77 8.84 8.84 0 0 1-5.47-1.88c-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.08-4.48 10.08-10S12.29.2 6.73.2C4.37.2 2.2 1 .5 2.34c.27.31.52.64.75.97Z"/><path d="M10.32 8.13 8.33 10.1l2 1.97-1 .99-1.99-1.98-1.99 1.98-.99-.99 1.99-1.97-1.99-1.97 1-.99 1.98 1.97 1.99-1.97 1 .99Z"/>`,
		no_data: `<path d="M7.18 12.28h-1.2c.01-.41.05-.74.12-1 .07-.27.19-.5.35-.72.16-.22.38-.47.65-.74l.54-.56c.16-.18.3-.37.4-.58.1-.2.16-.45.16-.74 0-.3-.06-.55-.16-.76a1.1 1.1 0 0 0-.47-.5 1.5 1.5 0 0 0-.75-.16c-.25 0-.48.04-.7.13-.23.09-.4.23-.54.41-.14.19-.21.43-.22.72H4.18c0-.48.12-.89.36-1.23.23-.35.55-.61.95-.8.4-.18.84-.27 1.33-.27.55 0 1 .1 1.39.3.38.2.68.47.88.84.2.36.3.79.3 1.29 0 .38-.08.73-.24 1.05-.15.32-.35.62-.6.9-.24.28-.5.55-.77.8-.24.22-.4.47-.48.74-.08.27-.12.56-.12.88ZM5.94 14.3c0-.2.06-.35.18-.49.12-.13.29-.2.52-.2.23 0 .4.07.52.2.12.14.18.3.18.49 0 .18-.06.34-.18.47-.12.13-.3.2-.52.2a.67.67 0 0 1-.52-.2.68.68 0 0 1-.18-.47Z"/><path d="M1.25 3.31a8.84 8.84 0 0 1 5.47-1.88 8.8 8.8 0 0 1 8.84 8.77 8.8 8.8 0 0 1-8.84 8.77c-2.06 0-3.96-.7-5.47-1.88-.23.34-.49.66-.75.97a10.07 10.07 0 0 0 6.22 2.14c5.57 0 10.07-4.48 10.07-10S12.3.2 6.72.2C4.37.2 2.21 1 .5 2.34c.26.31.52.64.75.97Z"/>`
	};
	const support = baseline === "limited" ? browserImplementation?.status || "unavailable" : baseline;
	const icon = support === "newly" || support === "widely" ? "available" : support;
	const fill = {
		no_data: "var(--color-no_data)",
		unavailable: "var(--color-limited)",
		newly: "var(--color-newly)",
		widely: "var(--color-widely)",
		available: "var(--color-widely)"
	}[support];
	return renderTemplate`${maybeRenderHead($$result)}<svg width="17" height="21" aria-hidden="true"${addAttribute(fill, "fill")}>${unescapeHTML(paths[icon])}</svg>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/SupportIcon.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BrowserSupport.astro
createAstro("https://coolerparts.example.com");
var $$BrowserSupport = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BrowserSupport;
	const { browser, feature } = Astro.props;
	const baseline = feature.baseline.status || "no_data";
	const browserImplementation = feature.browser_implementations?.[browser];
	const browserName = {
		chrome: "Chrome",
		edge: "Edge",
		firefox: "Firefox",
		safari: "Safari"
	}[browser];
	let supportLabel = browserImplementation?.status || "no";
	if (baseline === "no_data") supportLabel = "unknown";
	if (supportLabel === "available") supportLabel = "yes";
	return renderTemplate`${maybeRenderHead($$result)}<span part="browser-support"><span part="browser-support-label">Supported in ${browserName}: ${supportLabel}.</span>${renderComponent($$result, "BrowserIcon", $$BrowserIcon, { "browser": browser })}${renderComponent($$result, "SupportIcon", $$SupportIcon, {
		"baseline": baseline,
		"browserImplementation": browserImplementation
	})}</span>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BrowserSupport.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BaselineStatus.astro
createAstro("https://coolerparts.example.com");
var $$BaselineStatus = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaselineStatus;
	const API_ENDPOINT = "https://api.webstatus.dev/v1/features/";
	const BASELINE_DEFS = {
		limited: {
			title: "Limited availability",
			defaultDescription: "This feature is not Baseline because it does not work in some of the most widely-used browsers."
		},
		newly: {
			title: "",
			defaultDescription: "This feature works across the latest devices and browser versions. This feature might not work in older devices or browsers."
		},
		widely: {
			title: "Widely available",
			defaultDescription: "This feature is well established and works across many devices and browser versions."
		},
		no_data: {
			title: "Unknown availability",
			defaultDescription: "We currently don’t have browser support information about this feature."
		}
	};
	function getBaselineDate(feature) {
		return feature.baseline.low_date ? new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long"
		}).format(new Date(feature.baseline.low_date)) : "";
	}
	function getDescriptionDate(baseline, date) {
		if (baseline === "newly" && date) return `Since ${date} this feature works across the latest
			devices and browser versions. This feature might not work in older
			devices or browsers.`;
		else if (baseline === "widely" && date) return `This feature is well established and works across many
			devices and browser versions. It’s been available across browsers
			since ${date}`;
		return BASELINE_DEFS[baseline].defaultDescription;
	}
	const featureData = await safeGet(API_ENDPOINT + Astro.props.id);
	const feature = featureData?.baseline ? featureData : {
		baseline: { status: "no_data" },
		name: Astro.props.id || "Unknown feature"
	};
	const baseline = feature.baseline.status || "no_data";
	const title = BASELINE_DEFS[baseline].title;
	const baselineDate = getBaselineDate(feature);
	const description = getDescriptionDate(baseline, baselineDate);
	const year = baseline === "newly" && baselineDate ? baselineDate.split(" ")[1] : "";
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`baseline-status baseline-status--${baseline}`, "class")} data-astro-cid-skc5y6cj><template shadowrootmode="open" data-astro-cid-skc5y6cj>${templateEnter($$result)}<div part="root" data-astro-cid-skc5y6cj><p part="feature-name" data-astro-cid-skc5y6cj>${feature.name}</p><details part="details" data-astro-cid-skc5y6cj><summary part="summary" data-astro-cid-skc5y6cj>${renderComponent($$result, "BaselineIcon", $$BaselineIcon, {
		"support": baseline,
		"data-astro-cid-skc5y6cj": true
	})}<div part="summary-content" data-astro-cid-skc5y6cj><div part="summary-label" data-astro-cid-skc5y6cj>${!(baseline === "limited" || baseline === "no_data") && renderTemplate`<strong data-astro-cid-skc5y6cj>Baseline</strong>`}${title}${year}${baseline === "newly" && renderTemplate`<span part="badge" data-astro-cid-skc5y6cj>newly available</span>`}</div><div part="browsers" data-astro-cid-skc5y6cj>${renderComponent($$result, "BrowserSupport", $$BrowserSupport, {
		"browser": "chrome",
		"feature": feature,
		"data-astro-cid-skc5y6cj": true
	})}${renderComponent($$result, "BrowserSupport", $$BrowserSupport, {
		"browser": "edge",
		"feature": feature,
		"data-astro-cid-skc5y6cj": true
	})}${renderComponent($$result, "BrowserSupport", $$BrowserSupport, {
		"browser": "firefox",
		"feature": feature,
		"data-astro-cid-skc5y6cj": true
	})}${renderComponent($$result, "BrowserSupport", $$BrowserSupport, {
		"browser": "safari",
		"feature": feature,
		"data-astro-cid-skc5y6cj": true
	})}</div></div><style>
						[part='caret'] svg {
							transition: transform var(--animation-duration);
						}
						details[open] [part='caret'] svg {
							transform: rotate(180deg);
						}
					</style><span part="caret" aria-hidden="true" data-astro-cid-skc5y6cj><svg width="11" height="7" fill="currentColor" data-astro-cid-skc5y6cj><path d="M5.5 6.45.25 1.2l.94-.94L5.5 4.6 9.8.3l.95.94L5.5 6.45Z" data-astro-cid-skc5y6cj></path></svg></span></summary><p part="description" data-astro-cid-skc5y6cj>${unescapeHTML(description)}</p>${baseline !== "no_data" && renderTemplate`<p part="link-container" data-astro-cid-skc5y6cj><a${addAttribute(`https://webstatus.dev/features/${feature.feature_id}`, "href")} target="_top" part="link" data-astro-cid-skc5y6cj>${`${feature.name} on Web Platform Status`}</a></p>`}</details></div>${templateExit($$result)}</template></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-baseline-status@0.2.2/node_modules/@astro-community/astro-embed-baseline-status/BaselineStatus.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/utils.ts
var escapeMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
var escapeHTML = (str) => str?.replace(/[&<>"']/g, (match) => escapeMap[match] || match) ?? "";
function renderPostAsHtml(post) {
	if (!post || !is(AppBskyFeedPost.mainSchema, post.record)) return "";
	const segments = segmentize(post.record.text, post.record.facets);
	let html = "";
	for (const { text, features } of segments) {
		const [feature] = features || [];
		switch (feature?.$type) {
			case "app.bsky.richtext.facet#link":
				html += `<a href="${escapeHTML(feature.uri)}">${escapeHTML(text)}</a>`;
				break;
			case "app.bsky.richtext.facet#mention":
				html += `<a href="https://bsky.app/profile/${escapeHTML(feature.did)}">${escapeHTML(text)}</a>`;
				break;
			case "app.bsky.richtext.facet#tag":
				html += `<a href="https://bsky.app/hashtag/${escapeHTML(feature.tag)}">#${escapeHTML(feature.tag)}</a>`;
				break;
			default:
				html += escapeHTML(text);
				break;
		}
	}
	return html;
}
function viewRecordToPostView(viewRecord) {
	const { value, embeds, ...rest } = viewRecord;
	return {
		...rest,
		$type: "app.bsky.feed.defs#postView",
		record: value,
		embed: embeds?.[0]
	};
}
function viewRecordToEmbed(viewRecord, allowNestedQuotes = false) {
	const { embed } = viewRecordToPostView(viewRecord);
	if (allowNestedQuotes) return embed;
	else if (is(AppBskyEmbedImages.viewSchema, embed) || is(AppBskyEmbedExternal.viewSchema, embed) || is(AppBskyEmbedVideo.viewSchema, embed)) return embed;
	else if (is(AppBskyEmbedRecordWithMedia.viewSchema, embed) && (is(AppBskyEmbedImages.viewSchema, embed.media) || is(AppBskyEmbedExternal.viewSchema, embed.media) || is(AppBskyEmbedVideo.viewSchema, embed.media))) return embed.media;
}
var client = new Client({ handler: simpleFetchHandler({ service: "https://public.api.bsky.app" }) });
async function resolvePost(postUrl) {
	let atUri;
	if (typeof postUrl === "object") return postUrl;
	if (postUrl.startsWith("at:")) atUri = postUrl;
	else {
		if (!postUrl.startsWith("https://bsky.app/")) return;
		const urlParts = new URL(postUrl).pathname.split("/");
		let did = urlParts[2];
		const postId = urlParts[4];
		if (!did || !postId) return;
		if (!did.startsWith("did:")) try {
			const handleResolution = await client.get("com.atproto.identity.resolveHandle", { params: { handle: did } });
			if (!handleResolution.ok || !handleResolution.data.did) return;
			did = handleResolution.data.did;
		} catch (e) {
			console.error("[error]  astro-embed\n         " + (e?.message ?? e));
			return;
		}
		atUri = `at://${did}/app.bsky.feed.post/${postId}`;
	}
	try {
		const hydratedPost = await client.get("app.bsky.feed.getPosts", { params: { uris: [atUri] } });
		if (!hydratedPost.ok) throw new Error(hydratedPost.data.message || "Failed to fetch post");
		return hydratedPost.data.posts[0];
	} catch (e) {
		console.error("[error]  astro-embed\n         " + (e?.message ?? e));
		return;
	}
}
function atUriToPostUri(atUri) {
	const [, , did, , postId] = atUri.split("/");
	return `https://bsky.app/profile/${did}/post/${postId}`;
}
function atUriToStarterPackUri(atUri) {
	const [, , did, , packId] = atUri.split("/");
	return `https://bsky.app/starter-pack/${did}/${packId}`;
}
function atUriToListUri(atUri) {
	const [, , did, , listId] = atUri.split("/");
	return `https://bsky.app/profile/${did}/lists/${listId}`;
}
function starterPackOgImage(uri) {
	const [, , did, , packId] = uri.split("/");
	return `https://ogcard.cdn.bsky.app/start/${did}/${packId}`;
}
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/external.astro
createAstro("https://coolerparts.example.com");
var $$External = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$External;
	const { uri, thumb, title, description } = Astro.props.embed.external;
	const domain = new URL(uri).hostname;
	const { compact } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(uri, "href")} target="_blank" rel="noopener noreferrer nofollow" class="external-link" data-astro-cid-zifiuvpr>${!compact && thumb && renderTemplate`<img${addAttribute(thumb, "src")}${addAttribute(title, "alt")} class="thumbnail" data-astro-cid-zifiuvpr>`}<div class="content" data-astro-cid-zifiuvpr><p class="domain" data-astro-cid-zifiuvpr>${domain}</p>${!compact && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<p class="title" data-astro-cid-zifiuvpr>${title}</p><p class="description" data-astro-cid-zifiuvpr>${description}</p>` })}`}</div></a>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/external.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/image-grid.astro
createAstro("https://coolerparts.example.com");
var $$ImageGrid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ImageGrid;
	const { images } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="image-grid-container" data-astro-cid-chjj5sht><div${addAttribute(["image-grid", `image-grid--${images.length}`], "class:list")} data-astro-cid-chjj5sht>${images.map((image) => renderTemplate`<div class="image-grid-item" data-astro-cid-chjj5sht><img${addAttribute(image.thumb, "src")}${addAttribute(image.alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-chjj5sht></div>`)}</div></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/image-grid.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/avatar.astro
createAstro("https://coolerparts.example.com");
var $$Avatar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Avatar;
	const { user, link, size = "medium" } = Astro.props;
	const src = user.avatar;
	return renderTemplate`${link ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(["avatar", size], "class:list")}${addAttribute(`https://bsky.app/profile/${user?.handle}`, "href")} target="_blank" rel="noopener noreferrer nofollow" data-astro-cid-qntvoo3b>${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} data-astro-cid-qntvoo3b>`}</a>` : renderTemplate`<div${addAttribute(["avatar", size], "class:list")} data-astro-cid-qntvoo3b>${src && renderTemplate`<img${addAttribute(src, "src")}${addAttribute(user.displayName ?? user.handle, "alt")} data-astro-cid-qntvoo3b>`}</div>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/avatar.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/card.astro
createAstro("https://coolerparts.example.com");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { href, image, avatarUser, title, subtitle, description } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer nofollow" class="card" data-astro-cid-pvrw4lez>${image && renderTemplate`<img class="cover-image"${addAttribute(image.src, "src")}${addAttribute(image.alt ?? "", "alt")} data-astro-cid-pvrw4lez>`}<div class="content" data-astro-cid-pvrw4lez><div class="header" data-astro-cid-pvrw4lez>${renderComponent($$result, "Avatar", $$Avatar, {
		"user": avatarUser,
		"data-astro-cid-pvrw4lez": true
	})}<div class="title-group" data-astro-cid-pvrw4lez><p class="title" data-astro-cid-pvrw4lez>${title}</p><p class="subtitle" data-astro-cid-pvrw4lez>${subtitle}</p></div></div>${description && renderTemplate`<p class="description" data-astro-cid-pvrw4lez>${description}</p>`}</div></a>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/card.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/list.astro
createAstro("https://coolerparts.example.com");
var $$List = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$List;
	const { record } = Astro.props;
	const list = is(AppBskyGraphDefs.listViewSchema, record) ? record : null;
	const purpose = (list && {
		"app.bsky.graph.defs#curatelist": "User list",
		"app.bsky.graph.defs#modlist": "Moderation list",
		"app.bsky.graph.defs#referencelist": "List"
	}[list.purpose]) ?? "List";
	return renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"href": atUriToListUri(record.uri),
		"avatarUser": record.creator,
		"title": list?.name || "",
		"subtitle": `${purpose} by ${record.creator.displayName}`,
		"description": list?.description
	})}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/list.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/quote-embed.astro
createAstro("https://coolerparts.example.com");
var $$QuoteEmbed = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$QuoteEmbed;
	const { embed } = Astro.props;
	return renderTemplate`${is(AppBskyEmbedRecord.viewRecordSchema, embed.record) && is(AppBskyFeedPost.mainSchema, embed.record.value) ? renderTemplate`${maybeRenderHead($$result)}<div class="post-container" data-astro-cid-n4cpsivo><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link" data-astro-cid-n4cpsivo><div class="user-info" data-astro-cid-n4cpsivo>${renderComponent($$result, "Avatar", $$Avatar, {
		"user": embed.record.author,
		"size": "small",
		"data-astro-cid-n4cpsivo": true
	})}<p class="user-text" data-astro-cid-n4cpsivo><span class="name" data-astro-cid-n4cpsivo>${embed.record.author.displayName}</span><span class="handle" data-astro-cid-n4cpsivo>@${embed.record.author.handle}</span></p></div></a><a${addAttribute(atUriToPostUri(embed.record.uri), "href")} class="post-link" data-astro-cid-n4cpsivo><p class="content" data-astro-cid-n4cpsivo>${embed.record.value.text}</p></a>${renderComponent($$result, "Embed", $$Embed, {
		"embed": viewRecordToEmbed(embed.record),
		"postUrl": atUriToPostUri(embed.record.uri),
		"compact": true,
		"data-astro-cid-n4cpsivo": true
	})}</div>` : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/quote-embed.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/starter-pack.astro
createAstro("https://coolerparts.example.com");
var $$StarterPack = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StarterPack;
	const { record } = Astro.props;
	const pack = is(AppBskyGraphStarterpack.mainSchema, record.record) ? record.record : null;
	return renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"href": atUriToStarterPackUri(record.uri),
		"image": {
			src: starterPackOgImage(record.uri),
			alt: pack?.name || "Starter pack cover image"
		},
		"avatarUser": record.creator,
		"title": pack?.name || "",
		"subtitle": `Starter pack by ${record.creator.displayName}`,
		"description": pack?.description
	})}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/starter-pack.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/media-container.astro
createAstro("https://coolerparts.example.com");
var $$MediaContainer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MediaContainer;
	const { aspectRatio, onClick, className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["media-container", className], "class:list")}${addAttribute({ aspectRatio: aspectRatio ? `${aspectRatio.width}/${aspectRatio.height}` : void 0 }, "style")}${spreadAttributes(onClick ? { onClick } : {})} data-astro-cid-43zhifz4>${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/media-container.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/video-thumbnail.astro
createAstro("https://coolerparts.example.com");
var $$VideoThumbnail = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$VideoThumbnail;
	const { thumbnail, aspectRatio } = Astro.props;
	return renderTemplate`${renderComponent($$result, "MediaContainer", $$MediaContainer, {
		"aspectRatio": aspectRatio,
		"data-astro-cid-httzdlzn": true
	}, { "default": ($$result) => renderTemplate`${thumbnail && renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(thumbnail, "src")} class="thumbnail" alt="Video thumbnail" data-astro-cid-httzdlzn>`}<div class="play-button" data-astro-cid-httzdlzn><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fff'%20d='M9.576%202.534C7.578%201.299%205%202.737%205%205.086v13.828c0%202.35%202.578%203.787%204.576%202.552l11.194-6.914c1.899-1.172%201.899-3.932%200-5.104L9.576%202.534Z'/%3e%3c/svg%3e" class="play-icon" alt="Play button" data-astro-cid-httzdlzn></div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/video-thumbnail.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/embed.astro
createAstro("https://coolerparts.example.com");
var $$Embed = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Embed;
	const { embed, postUrl, compact } = Astro.props;
	return renderTemplate`${is(AppBskyEmbedRecordWithMedia.viewSchema, embed) ? renderTemplate`${maybeRenderHead($$result)}<div class="record-with-media" data-astro-cid-koiqsqlr>${renderComponent($$result, "Astro.self", Astro.self, {
		"embed": embed.media,
		"postUrl": postUrl,
		"compact": compact,
		"data-astro-cid-koiqsqlr": true
	})}${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, {
		"embed": embed.record,
		"data-astro-cid-koiqsqlr": true
	})}</div>` : is(AppBskyEmbedExternal.viewSchema, embed) ? renderTemplate`${renderComponent($$result, "External", $$External, {
		"embed": embed,
		"compact": compact,
		"data-astro-cid-koiqsqlr": true
	})}` : is(AppBskyEmbedImages.viewSchema, embed) ? renderTemplate`<a${addAttribute(postUrl, "href")} data-astro-cid-koiqsqlr>${renderComponent($$result, "ImageGrid", $$ImageGrid, {
		"images": embed.images,
		"data-astro-cid-koiqsqlr": true
	})}</a>` : is(AppBskyEmbedVideo.viewSchema, embed) ? renderTemplate`<a${addAttribute(postUrl, "href")} data-astro-cid-koiqsqlr>${renderComponent($$result, "VideoThumbnail", $$VideoThumbnail, {
		"thumbnail": embed.thumbnail,
		"aspectRatio": embed.aspectRatio,
		"data-astro-cid-koiqsqlr": true
	})}</a>` : is(AppBskyGraphDefs.starterPackViewBasicSchema, embed?.record) ? renderTemplate`${renderComponent($$result, "StarterPack", $$StarterPack, {
		"record": embed.record,
		"data-astro-cid-koiqsqlr": true
	})}` : is(AppBskyGraphDefs.listViewSchema, embed?.record) ? renderTemplate`${renderComponent($$result, "List", $$List, {
		"record": embed.record,
		"data-astro-cid-koiqsqlr": true
	})}` : is(AppBskyEmbedRecord.viewSchema, embed) ? renderTemplate`${renderComponent($$result, "QuoteEmbed", $$QuoteEmbed, {
		"embed": embed,
		"data-astro-cid-koiqsqlr": true
	})}` : !embed ? null : embed?.$type}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/embed.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/post.astro
createAstro("https://coolerparts.example.com");
var $$Post = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Post;
	const postRef = Astro.props.id ?? Astro.props.post;
	if (!postRef) return new Response("");
	const post = await resolvePost(postRef);
	if (!post) return new Response("");
	const postUrl = atUriToPostUri(post.uri);
	const { record, embed, author } = post;
	const authorUrl = `https://bsky.app/profile/${author?.handle}`;
	const body = renderPostAsHtml(post);
	const formatter = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		timeZone: "UTC",
		timeZoneName: "short"
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="bluesky-post-container not-content" data-astro-cid-e77wgzlr><div class="post-content" data-astro-cid-e77wgzlr><div class="post-header" data-astro-cid-e77wgzlr>${renderComponent($$result, "Avatar", $$Avatar, {
		"user": author,
		"link": true,
		"data-astro-cid-e77wgzlr": true
	})}<div class="user-info" data-astro-cid-e77wgzlr><a${addAttribute(authorUrl, "href")} class="display-name" data-astro-cid-e77wgzlr>${author?.displayName}</a><a${addAttribute(authorUrl, "href")} class="username" data-astro-cid-e77wgzlr>@${author?.handle}</a></div><a${addAttribute(postUrl, "href")} class="logo-link" data-astro-cid-e77wgzlr><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20320%20286'%3e%3cpath%20fill='rgb(10,122,255)'%20d='M69.364%2019.146c36.687%2027.806%2076.147%2084.186%2090.636%20114.439%2014.489-30.253%2053.948-86.633%2090.636-114.439C277.107-.917%20320-16.44%20320%2032.957c0%209.865-5.603%2082.875-8.889%2094.729-11.423%2041.208-53.045%2051.719-90.071%2045.357%2064.719%2011.12%2081.182%2047.953%2045.627%2084.785-80%2082.874-106.667-44.333-106.667-44.333s-26.667%20127.207-106.667%2044.333c-35.555-36.832-19.092-73.665%2045.627-84.785-37.026%206.362-78.648-4.149-90.071-45.357C5.603%20115.832%200%2042.822%200%2032.957%200-16.44%2042.893-.917%2069.364%2019.147Z'/%3e%3c/svg%3e" class="bluesky-logo" alt="Bluesky" data-astro-cid-e77wgzlr></a></div><p class="post-text" data-astro-cid-e77wgzlr>${unescapeHTML(body)}</p>${embed && renderTemplate`${renderComponent($$result, "Embed", $$Embed, {
		"embed": embed,
		"postUrl": postUrl,
		"data-astro-cid-e77wgzlr": true
	})}`}<a${addAttribute(postUrl, "href")} class="timestamp" data-astro-cid-e77wgzlr>${formatter.format(new Date(record.createdAt ?? ""))}</a></div></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/@astro-community+astro-embed-bluesky@0.2.2_typescript@5.9.3/node_modules/@astro-community/astro-embed-bluesky/src/post.astro", void 0);
//#endregion
//#region src/pages/homes/startup.astro
var startup_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Startup,
	file: () => $$file,
	url: () => $$url
});
var $$Startup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title: "Startup Landing Page" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {
		"tagline": "Startup Web Demo",
		"actions": [{
			variant: "primary",
			target: "_blank",
			text: "Get templates",
			href: "https://github.com/arthelokyo/astrowind",
			icon: "tabler:download"
		}, {
			text: "Learn more",
			href: "#features"
		}]
	}, {
		"title": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result) => renderTemplate`Improve ${maybeRenderHead($$result)}<span class="hidden sm:inline">the online presence of</span> your <span class="text-accent dark:text-white">Startup</span> with Astrowind templates` })}`,
		"subtitle": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result) => renderTemplate`Step into the spotlight with <span class="font-semibold">Astrowind</span> templates, your pathway to fortifying your startup's digital footprint, fostering credibility, and expanding your reach.` })}`,
		"image": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "image" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "YouTube", $$YouTube, {
			"id": "gxBkghlglTg",
			"title": "Astro just Launched.... Could it be the ultimate web framework?"
		})}<style>
        lite-youtube {
          margin: 0 auto;
          max-width: 100%;
        }
      </style>` })}`
	})}${renderComponent($$result, "Features2", $$Features2, {
		"title": "About us",
		"subtitle": "We believe in the magic of turning dreams into stunning realities. Founded by passionate developers with a shared vision, we set out to simplify the website creation process. Our templates bring together the innovation of Astro v6 and the versatility of Tailwind CSS v4, enabling you to express your unique brand identity like never before."
	}, { "bg": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}` })}${renderComponent($$result, "Stats", $$Stats, {
		"title": "Discover the impressive impact of Astrowind",
		"subtitle": "The numbers below reflect the trust our users have placed in us and the remarkable outcomes we've helped them achieve.",
		"stats": [
			{
				title: "Downloads",
				amount: "182K"
			},
			{
				title: "Websites Launched",
				amount: "87"
			},
			{
				title: "User Ratings",
				amount: "4.8"
			},
			{
				title: "Satisfied Clients",
				amount: "116K"
			}
		]
	})}${renderComponent($$result, "Brands", $$Brands, {
		"title": "Partnerships & Collaborations",
		"subtitle": "At Astrowind, we believe in the power of collaboration to drive innovation and create exceptional experiences.",
		"icons": [],
		"images": [
			{
				src: "https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png",
				alt: "Paypal"
			},
			{
				src: "https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png",
				alt: "Visa"
			},
			{
				src: "https://cdn.pixabay.com/photo/2013/10/01/10/29/ebay-189064_1280.png",
				alt: "Ebay"
			},
			{
				src: "https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720944_1280.png",
				alt: "Youtube"
			},
			{
				src: "https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png",
				alt: "Microsoft"
			},
			{
				src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
				alt: "Node JS"
			},
			{
				src: "https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png",
				alt: "Google"
			},
			{
				src: "https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png",
				alt: "Meta"
			},
			{
				src: "https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_1280.png",
				alt: "Yahoo"
			}
		]
	})}${renderComponent($$result, "Features2", $$Features2, {
		"title": "What services do we provide?",
		"subtitle": "We offer a wide range of website templates that suit various industries and purposes such as business, portfolio, e-commerce, blog, etc.",
		"items": [
			{
				title: "Installation Instructions",
				description: "Offer clear instructions on how to download the purchased templates and install them on various website platforms or content management systems.",
				icon: "flat-color-icons:document"
			},
			{
				title: "Demo and Previews",
				description: "Provide interactive demos and previews that allow customers to see how their chosen template will look and function before making a purchase.",
				icon: "flat-color-icons:template"
			},
			{
				title: "Technical Support",
				description: "Providing customer support for any technical issues related to the templates or their implementation.",
				icon: "flat-color-icons:voice-presentation"
			}
		]
	}, { "bg": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}` })}${renderComponent($$result, "Features", $$Features, {
		"id": "features",
		"title": "Main features of our templates",
		"subtitle": "Possess several key characteristics to effectively cater to the needs of startups and entrepreneurs.",
		"columns": 3,
		"items": [
			{
				title: "Modern and Professional Design",
				description: "Have a contemporary design that reflects current design trends and gives a professional impression.",
				icon: "tabler:artboard"
			},
			{
				title: "Responsive and Mobile-Friendly",
				description: "Adapt seamlessly to different screen sizes and devices to ensure a consistent experience.",
				icon: "tabler:picture-in-picture"
			},
			{
				title: "Customizability",
				description: "Easily customizable, allowing users to adapt the design, colors, typography, and content to match their brand identity.",
				icon: "tabler:adjustments-horizontal"
			},
			{
				title: "Fast Loading Times",
				description: "Optimized for speed to ensure a smooth user experience and favorable search engine rankings.",
				icon: "tabler:rocket"
			},
			{
				title: "Search Engine Optimization (SEO)",
				description: "Incorporate SEO best practices in template structure and code to improve visibility in search engine results.",
				icon: "tabler:arrows-right-left"
			},
			{
				title: "Compatibility",
				description: "The templates work seamlessly across various content management systems and website builders.",
				icon: "tabler:plug-connected"
			}
		]
	})}${renderComponent($$result, "FAQs", $$FAQs, {
		"title": "Frequently Asked Questions",
		"items": [
			{
				title: "What are landing page templates?",
				description: "Landing page templates are pre-designed web page layouts that are specifically created to serve as a foundation for building effective landing pages. These templates are designed to capture the attention of visitors and guide them towards a specific action or goal, such as signing up for a newsletter, making a purchase, or downloading a resource."
			},
			{
				title: "Why should I use a template?",
				description: "Some of the advantages are that they provide a ready-to-use structure,  saving you significant time. Are designed with user-friendliness in mind and provide a cost-effective alternative, saving you money while still delivering a quality result."
			},
			{
				title: "Can I preview templates before buying?",
				description: "Yes, the templates allow you to preview them before making a purchase. There is a \"Demo\" button associated with each template."
			},
			{
				title: "Do I need technical skills to use a template?",
				description: "Advanced technical skills are not required to use a template, but having a basic understanding of web navigation and familiarity with using online tools can still be beneficial. If you have more specific customization needs, you might need to consult guides or reach out to customer support for assistance."
			},
			{
				title: "Can I use the template on multiple websites?",
				description: "No, the template comes with a single-use license, meaning you can use the template on one website or project only. Using the template on additional websites would require purchasing additional licenses."
			},
			{
				title: "What if I need help with customization?",
				description: "The templates provides a comprehensive step-by-step guide that walk you through the customization process. If you still have doubts, you can reach out to our customer support team. They can answer your questions, provide guidance on customization, and address any issues you're facing."
			}
		]
	}, { "bg": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}` })}${renderComponent($$result, "Features3", $$Features3, {
		"title": "Let us know how we can help",
		"subtitle": "We’re here to help and answer any question you might have.",
		"columns": 4,
		"items": [
			{
				title: "Phone",
				icon: "tabler:phone",
				callToAction: {
					target: "_blank",
					text: "Call us",
					href: "/",
					variant: "link"
				}
			},
			{
				title: "Email",
				icon: "tabler:mail",
				callToAction: {
					target: "_blank",
					text: "Write to us",
					href: "/",
					variant: "link"
				}
			},
			{
				title: "Chat with sales",
				icon: "tabler:message-circle",
				callToAction: {
					target: "_blank",
					text: "Start chatting",
					href: "/",
					variant: "link"
				}
			},
			{
				title: "Chat with support",
				icon: "tabler:message-circle",
				callToAction: {
					target: "_blank",
					text: "Start chatting",
					href: "/",
					variant: "link"
				}
			}
		]
	})}${renderComponent($$result, "CallToAction", $$CallToAction, { "actions": [{
		variant: "primary",
		target: "_blank",
		text: "Get templates",
		href: "https://github.com/arthelokyo/astrowind",
		icon: "tabler:download"
	}] }, {
		"title": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result) => renderTemplate`Be a part of our vision` })}`,
		"subtitle": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result) => renderTemplate`Discover a dynamic work environment, unparalleled growth opportunities, and the chance to make a meaningful impact.` })}`
	})}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/homes/startup.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/homes/startup.astro";
var $$url = "/homes/startup";
//#endregion
//#region \0virtual:astro:page:src/pages/homes/startup@_@astro
var page = () => startup_exports;
//#endregion
export { page, __exportAll as t };
