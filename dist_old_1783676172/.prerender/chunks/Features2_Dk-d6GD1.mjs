import { A as createAstro, O as unescapeHTML, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Features2.astro
createAstro("https://coolerparts.example.com");
var $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Features2;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), items = [], columns = 3, defaultIcon, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	const columnsClass = columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2" : "";
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": classes?.headline
	})}${items.length > 0 && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["grid gap-4 md:gap-6 gap-x-12", columnsClass], "class:list")}>${items.map(({ title: itemTitle, description, icon, callToAction }) => renderTemplate`<div class="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6 intersect-once intersect-quarter intersect-no-queue motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"name": icon || defaultIcon,
		"class": "mb-6 w-12 h-12 text-primary"
	})}`}<div class="text-xl font-bold">${itemTitle}</div>${description && renderTemplate`<p class="text-muted mt-2">${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`)}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Features2.astro", void 0);
//#endregion
export { $$Features2 as t };
