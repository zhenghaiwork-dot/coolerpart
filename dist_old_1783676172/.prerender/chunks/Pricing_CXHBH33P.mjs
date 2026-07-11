import { A as createAstro, O as unescapeHTML, b as addAttribute, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon, r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Pricing.astro
createAstro("https://coolerparts.example.com");
var $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pricing;
	const { title = "", subtitle = "", tagline = "", prices = [], id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${maybeRenderHead($$result)}<div class="flex items-stretch justify-center"><div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">${prices && prices.map(({ title, subtitle, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter">${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center">${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"><span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']">${ribbonTitle}</span></div>`}<div class="px-2 py-0">${title && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title}</h3>`}${subtitle && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle}</p>`}<div class="my-8"><div class="flex items-center justify-center text-center mb-1"><span class="text-5xl">$</span><span class="text-6xl font-extrabold">${price}</span></div><span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span></div>${items && renderTemplate`<ul class="my-8 md:my-10 space-y-2 text-left">${items.map(({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"><div class="rounded-full bg-primary mt-1">${renderComponent($$result, "Icon", $$Icon, {
		"name": icon ? icon : "tabler:check",
		"class": "w-5 h-5 font-bold p-1 text-white"
	})}</div><span>${description}</span></li>`)}</ul>`}</div>${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}>${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result, "Button", $$Button, {
		...hasRibbon ? { variant: "primary" } : {},
		...callToAction
	})}`}</div>`}</div>`}</div>`)}</div></div>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Pricing.astro", void 0);
//#endregion
export { $$Pricing as t };
