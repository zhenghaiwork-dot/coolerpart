import { A as createAstro, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon } from "./Footer_DU4vtWH2.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Stats.astro
createAstro("https://coolerparts.example.com");
var $$Stats = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Stats;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline, stats = [], id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${maybeRenderHead($$result)}<div class="flex flex-wrap justify-center -m-4 text-center">${stats && stats.map(({ amount, title, icon }) => renderTemplate`<div class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:border-gray-200 md:last:border-none dark:md:border-slate-500 intersect-once motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade intersect-quarter">${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-4 text-primary">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon,
		"class": "w-10 h-10"
	})}</div>`}${amount && renderTemplate`<div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl">${amount}</div>`}${title && renderTemplate`<div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">${title}</div>`}</div>`)}</div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Stats.astro", void 0);
//#endregion
export { $$Stats as t };
