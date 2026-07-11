import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, d as renderSlot, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, c as getBlogPermalink, d as getPermalink, g as I18N, h as APP_BLOG, l as getCanonical, p as getFormattedDate } from "./runtime_CQAp8_Zo.mjs";
import { n as findImage } from "./Layout_BPWRV8yA.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$PageLayout } from "./PageLayout_C-5dCF8L.mjs";
import { t as $$Image } from "./Image_B5BQcUlA.mjs";
import { t as $$Tags } from "./Tags_Bv8P4xTm.mjs";
import { c as getRelatedPosts, d as getStaticPathsBlogPost, r as blogPostRobots, s as findPostsByIds } from "./blog_bzv07QmT.mjs";
import { t as $$Grid } from "./Grid_BGbhT6L_.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
import merge from "lodash.merge";
//#region src/components/common/SocialShare.astro
createAstro("https://coolerparts.example.com");
var $$SocialShare = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SocialShare;
	const { text, url, class: className = "inline-block" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(className, "class")}><span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span><button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-x",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
	})}</button><button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-facebook",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
	})}</button><button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-linkedin",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
	})}</button><button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:brand-whatsapp",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
	})}</button><button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
	})}</button></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/SocialShare.astro", void 0);
//#endregion
//#region src/components/blog/SinglePost.astro
createAstro("https://coolerparts.example.com");
var $$SinglePost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SinglePost;
	const { post, url } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-8 sm:py-16 lg:py-20 mx-auto"><article><header${addAttribute(post.image ? "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" : "intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", "class")}><div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"><p>${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clock",
		"class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400"
	})}<time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time>${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}· ${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:user",
		"class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400"
	})}<span class="inline-block">${post.author}</span>` })}`}${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${" "}·${" "}<a class="hover:underline inline-block"${addAttribute(getPermalink(post.category.slug, "category"), "href")}>${post.category.title}</a>` })}`}${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`&nbsp;· <span>${post.readingTime}</span> min read` })}`}</p></div><h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${post.title}</h1><p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify">${post.excerpt}</p>${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": post.image,
		"class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700",
		"widths": [400, 900],
		"sizes": "(max-width: 900px) 400px, 900px",
		"alt": post?.excerpt || "",
		"width": 900,
		"height": 506,
		"format": "webp",
		"loading": "eager",
		"decoding": "async"
	})}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"><div class="border-t dark:border-slate-700"></div></div>`}</header><div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px] prose-li:my-0">${renderSlot($$result, $$slots["default"])}</div><div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row">${renderComponent($$result, "PostTags", $$Tags, {
		"tags": post.tags,
		"class": "mr-5 rtl:mr-0 rtl:ml-5"
	})}${renderComponent($$result, "SocialShare", $$SocialShare, {
		"url": url,
		"text": post.title,
		"class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600"
	})}</div></article></section>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/SinglePost.astro", void 0);
//#endregion
//#region src/components/blog/ToBlogLink.astro
var $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
	const { textDirection } = I18N;
	return renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20">${renderComponent($$result, "Button", $$Button, {
		"variant": "tertiary",
		"class": "px-3 md:px-3",
		"href": getBlogPermalink()
	}, { "default": ($$result) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-right",
		"class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1"
	})}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:chevron-left",
		"class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1"
	})}`} Back to Blog` })}</div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/ToBlogLink.astro", void 0);
//#endregion
//#region src/components/widgets/BlogHighlightedPosts.astro
createAstro("https://coolerparts.example.com");
var $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogHighlightedPosts;
	const { title = await Astro.slots.render("title"), linkText = "View all posts", linkUrl = getBlogPermalink(), information = await Astro.slots.render("information"), postIds = [], id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const posts = APP_BLOG.isEnabled ? await findPostsByIds(postIds) : [];
	return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": classes?.container,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")}>${linkText} »</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/BlogHighlightedPosts.astro", void 0);
//#endregion
//#region src/components/blog/RelatedPosts.astro
createAstro("https://coolerparts.example.com");
var $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RelatedPosts;
	const { post } = Astro.props;
	const relatedPosts = post.tags ? await getRelatedPosts(post, 4) : [];
	return renderTemplate`${APP_BLOG.isRelatedPostsEnabled ? renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, {
		"classes": { container: "pt-0 lg:pt-0 md:pt-0 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade" },
		"title": "Related Posts",
		"linkText": "View All Posts",
		"linkUrl": getBlogPermalink(),
		"postIds": relatedPosts.map((post) => post.id)
	})}` : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/blog/RelatedPosts.astro", void 0);
//#endregion
//#region src/pages/[...blog]/index.astro
var ____blog__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	prerender: () => true,
	url: () => $$url
});
createAstro("https://coolerparts.example.com");
var getStaticPaths = (async () => {
	return await getStaticPathsBlogPost();
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { post } = Astro.props;
	const url = getCanonical(getPermalink(post.permalink, "post"));
	const image = await findImage(post.image);
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": merge({
		title: post.title,
		description: post.excerpt,
		robots: {
			index: blogPostRobots?.index,
			follow: blogPostRobots?.follow
		},
		openGraph: {
			type: "article",
			...image ? { images: [{
				url: image,
				width: image?.width,
				height: image?.height
			}] } : {}
		}
	}, { ...post?.metadata ? {
		...post.metadata,
		canonical: post.metadata?.canonical || url
	} : {} }) }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SinglePost", $$SinglePost, {
		"post": {
			...post,
			image
		},
		"url": url
	}, { "default": ($$result) => renderTemplate`${post.Content && renderTemplate`${renderComponent($$result, "post.Content", post.Content, {})}`}` })}${renderComponent($$result, "ToBlogLink", $$ToBlogLink, {})}${renderComponent($$result, "RelatedPosts", $$RelatedPosts, { "post": post })}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/[...blog]/index.astro";
var $$url = "/[...blog]";
//#endregion
//#region \0virtual:astro:page:src/pages/[...blog]/index@_@astro
var page = () => ____blog__exports;
//#endregion
export { page };
