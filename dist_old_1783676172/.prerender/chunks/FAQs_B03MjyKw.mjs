import { A as createAstro, O as unescapeHTML, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_BCFP2GBT.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
//#region src/components/widgets/FAQs.astro
createAstro("https://coolerparts.example.com");
var $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FAQs;
	const { title = "", subtitle = "", tagline = "", items = [], columns = 2, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const columnsClass = columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : "max-w-4xl";
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${items.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["grid mx-auto gap-y-8 md:gap-y-12 gap-8", columnsClass], "class:list")}>${items.map(({ title: itemTitle, description, icon, callToAction }) => renderTemplate`<div class="intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade"><div class="flex flex-row max-w-none"><div class="flex justify-center">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || "tabler:chevron-right",
		"class": "flex-shrink-0 mt-1 w-6 h-6 text-primary mr-2 rtl:mr-0 rtl:ml-2"
	})}</div><div class="mt-0.5">${itemTitle && renderTemplate`<h3 class="text-xl font-bold">${itemTitle}</h3>`}${description && renderTemplate`<p${addAttribute([{ "mt-3": itemTitle }, "text-muted"], "class:list")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute([{ "mt-3": itemTitle || description }], "class:list")}>${renderComponent($$result, "Button", $$Button, {
		"variant": "link",
		...callToAction
	})}</div>`}</div></div></div>`)}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/FAQs.astro", void 0);
//#endregion
export { $$FAQs as t };
