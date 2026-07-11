import { A as createAstro, O as unescapeHTML, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { r as $$Button } from "./Footer_BCFP2GBT.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
//#region src/components/widgets/CallToAction.astro
createAstro("https://coolerparts.example.com");
var $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CallToAction;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), actions = await Astro.slots.render("actions"), id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline,
		"classes": {
			container: "mb-0 md:mb-0",
			title: "text-4xl md:text-4xl font-bold tracking-tighter mb-4 font-heading",
			subtitle: "text-xl text-muted dark:text-slate-400"
		}
	})}${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6">${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto">${renderComponent($$result, "Button", $$Button, {
		...action || {},
		"class": "w-full sm:mb-0"
	})}</div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(actions)}` })}`}</div>`}</div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/CallToAction.astro", void 0);
//#endregion
export { $$CallToAction as t };
