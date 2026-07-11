import { A as createAstro, O as unescapeHTML, c as Fragment, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$Image } from "./Image_B5BQcUlA.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_CvDfZUX_.mjs";
import { t as $$Headline } from "./Headline_B_8gs6MY.mjs";
//#region src/components/widgets/Testimonials.astro
createAstro("https://coolerparts.example.com");
var $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Testimonials;
	const { title = "", subtitle = "", tagline = "", testimonials = [], callToAction, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${maybeRenderHead($$result)}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${testimonials && testimonials.map(({ title, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto intersect-once motion-safe:md:intersect:animate-fade motion-safe:md:opacity-0 intersect-quarter"><div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600">${title && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title}</h2>`}${testimonial && renderTemplate`<blockquote class="flex-auto"><p class="text-muted">" ${testimonial} "</p></blockquote>`}<hr class="border-slate-200 dark:border-slate-600 my-4"><div class="flex items-center">${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full",
		"width": 40,
		"height": 40,
		"layout": "fixed",
		"format": "webp",
		...image
	})}`}</div>`}<div class="grow ml-3 rtl:ml-0 rtl:mr-3">${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`}${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`}</div></div></div></div>`)}</div>${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Testimonials.astro", void 0);
//#endregion
export { $$Testimonials as t };
