import { A as createAstro, O as unescapeHTML, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, c as getBlogPermalink, h as APP_BLOG } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { o as findLatestPosts } from "./blog_bzv07QmT.mjs";
import { t as $$Grid } from "./Grid_BGbhT6L_.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
//#region src/components/widgets/BlogLatestPosts.astro
createAstro("https://coolerparts.example.com");
var $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogLatestPosts;
	const { title = await Astro.slots.render("title"), linkText = "View all posts", linkUrl = getBlogPermalink(), information = await Astro.slots.render("information"), count = 4, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
	return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": classes?.container,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		"href": linkUrl
	}, { "default": ($$result) => renderTemplate`${" "}${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/BlogLatestPosts.astro", void 0);
//#endregion
export { $$BlogLatestPosts as t };
