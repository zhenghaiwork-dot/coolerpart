import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$Image } from "./Image_B5BQcUlA.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Features3.astro
createAstro("https://coolerparts.example.com");
var $$Features3 = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Features3;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), image, items = [], columns, defaultIcon, isBeforeContent, isAfterContent, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const columnsClass = columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : "";
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `${isBeforeContent ? "md:pb-8 lg:pb-12" : ""} ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": classes?.headline
	})}${maybeRenderHead($$result)}<div aria-hidden="true" class="aspect-w-16 aspect-h-7">${image && renderTemplate`<div class="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"class": "w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg",
		"width": 768,
		"height": 320,
		"widths": [400, 768],
		"layout": "fullWidth",
		"format": "webp",
		...image
	})}`}</div>`}</div>${items.length > 0 && renderTemplate`<div${addAttribute(["grid mx-auto gap-8 md:gap-y-12 mt-12", columnsClass], "class:list")}>${items.map(({ title: itemTitle, description, icon, callToAction }) => renderTemplate`<div class="intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="flex flex-row max-w-full sm:max-w-md">${(icon || defaultIcon) && renderTemplate`<div class="flex justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || defaultIcon,
		"class": "flex-shrink-0 mt-1 mr-2 rtl:mr-0 rtl:ml-2 w-6 h-6 text-primary"
	})}</div>`}<div class="mt-0.5">${itemTitle && renderTemplate`<h3 class="text-lg font-semibold">${itemTitle}</h3>`}${description && renderTemplate`<p${addAttribute([{ "mt-0.5": itemTitle }, "text-muted"], "class:list")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute([{ "mt-3": itemTitle || description }], "class:list")}>${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		...callToAction
	})}</div>`}</div></div></div>`)}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Features3.astro", void 0);
//#endregion
export { $$Features3 as t };
