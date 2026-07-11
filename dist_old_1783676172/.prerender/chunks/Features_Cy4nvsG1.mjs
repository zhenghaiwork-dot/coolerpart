import { A as createAstro, O as unescapeHTML, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Features.astro
createAstro("https://coolerparts.example.com");
var $$Features = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Features;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), items = [], columns = 2, defaultIcon, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const columnsClass = columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : "";
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-5xl ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": classes?.headline
	})}${items.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["grid mx-auto gap-8 md:gap-y-12", columnsClass], "class:list")}>${items.map(({ title: itemTitle, description, icon, callToAction }) => renderTemplate`<div class="intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="flex flex-row max-w-md">${(icon || defaultIcon) && renderTemplate`<div class="flex justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || defaultIcon,
		"class": "w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2 text-white bg-primary rounded-full md:w-12 md:h-12 md:p-3 p-2 mr-4 rtl:ml-4 rtl:mr-0"
	})}</div>`}<div class="mt-0.5">${itemTitle && renderTemplate`<h3 class="text-xl md:text-[1.3rem] font-bold">${itemTitle}</h3>`}${description && renderTemplate`<p${addAttribute([{ "mt-3": itemTitle }, "text-muted"], "class:list")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute([{ "mt-3": itemTitle || description }], "class:list")}>${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		...callToAction
	})}</div>`}</div></div></div>`)}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Features.astro", void 0);
//#endregion
export { $$Features as t };
