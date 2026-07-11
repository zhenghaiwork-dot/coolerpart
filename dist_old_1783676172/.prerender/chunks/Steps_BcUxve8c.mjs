import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$Image } from "./Image_BRpDfalA.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
import { twMerge } from "tailwind-merge";
//#region src/components/ui/Timeline.astro
createAstro("https://coolerparts.example.com");
var $$Timeline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Timeline;
	const { items = [], classes = {}, defaultIcon } = Astro.props;
	const { container: containerClass = "", panel: panelClass = "", title: titleClass = "", description: descriptionClass = "", icon: defaultIconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700" } = classes;
	return renderTemplate`${items && items.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(containerClass, "class")}>${items.map(({ title, description, icon, classes: itemClasses = {} }, index = 0) => renderTemplate`<div${addAttribute(twMerge("flex intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade", panelClass, itemClasses?.panel), "class")}><div class="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4"><div><div class="flex items-center justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || defaultIcon,
		"class": twMerge("w-10 h-10 p-2 rounded-full border-2", defaultIconClass, itemClasses?.icon)
	})}`}</div></div>${index !== items.length - 1 && renderTemplate`<div class="w-px h-full bg-black/10 dark:bg-slate-400/50"></div>`}</div><div${addAttribute(`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`, "class")}>${title && renderTemplate`<p${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${unescapeHTML(title)}</p>`}${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}</div></div>`)}</div>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/ui/Timeline.astro", void 0);
//#endregion
//#region src/components/widgets/Steps.astro
createAstro("https://coolerparts.example.com");
var $$Steps = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Steps;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), items = [], image = await Astro.slots.render("image"), isReversed = false, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-5xl ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"flex flex-col gap-8 md:gap-12",
		{ "md:flex-row-reverse": isReversed },
		{ "md:flex-row": image }
	], "class:list")}><div${addAttribute([
		"md:py-4 md:self-center",
		{ "md:basis-1/2": image },
		{ "w-full": !image }
	], "class:list")}>${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": {
			container: "text-left rtl:text-right",
			title: "text-3xl lg:text-4xl",
			...classes?.headline ?? {}
		}
	})}${renderComponent($$result, "Timeline", $$Timeline, {
		"items": items,
		"classes": classes?.items
	})}</div>${image && renderTemplate`<div class="relative md:basis-1/2">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"class": "inset-0 object-cover object-top w-full rounded-md shadow-lg md:absolute md:h-full bg-gray-400 dark:bg-slate-700",
		"widths": [400, 768],
		"sizes": "(max-width: 768px) 100vw, 432px",
		"width": 432,
		"height": 768,
		"layout": "cover",
		"format": "webp",
		"src": image?.src,
		"alt": image?.alt || ""
	})}`}</div>`}</div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Steps.astro", void 0);
//#endregion
export { $$Steps as t };
