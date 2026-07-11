import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_BCFP2GBT.mjs";
import { t as $$Image } from "./Image_BRpDfalA.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
//#region src/components/widgets/Content.astro
createAstro("https://coolerparts.example.com");
var $$Content = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Content;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline, content = await Astro.slots.render("content"), callToAction, items = [], columns, image = await Astro.slots.render("image"), isReversed = false, isAfterContent = false, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const columnsClass = columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : "";
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": {
			container: "max-w-xl sm:mx-auto lg:max-w-2xl",
			title: "text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading",
			subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
		}
	})}${maybeRenderHead($$result)}<div class="mx-auto max-w-7xl p-4 md:px-8"><div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}><div class="md:basis-1/2 self-center">${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`}${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary">${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		...callToAction
	})}</div>`}${items.length > 0 && renderTemplate`<div${addAttribute(["grid mx-auto gap-y-4 md:gap-y-8 gap-8", columnsClass], "class:list")}>${items.map(({ title: itemTitle, description, icon, callToAction }) => renderTemplate`<div class="intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="flex flex-row max-w-none"><div class="flex justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || "tabler:check",
		"class": "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1 mr-2 rtl:mr-0 rtl:ml-2"
	})}</div><div class="mt-0.5">${itemTitle && renderTemplate`<h3 class="text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2">${itemTitle}</h3>`}${description && renderTemplate`<p${addAttribute([{ "mt-3": itemTitle }, "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2"], "class:list")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute([{ "mt-3": itemTitle || description }, "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"], "class:list")}>${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		...callToAction
	})}</div>`}</div></div></div>`)}</div>`}</div><div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2">${image && renderTemplate`<div class="relative m-auto max-w-4xl">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg",
		"width": 500,
		"height": 500,
		"widths": [400, 768],
		"sizes": "(max-width: 768px) 100vw, 432px",
		"layout": "responsive",
		"format": "webp",
		...image
	})}`}</div>`}</div></div></div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Content.astro", void 0);
//#endregion
export { $$Content as t };
