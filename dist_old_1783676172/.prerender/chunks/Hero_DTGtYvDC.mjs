import { A as createAstro, O as unescapeHTML, c as Fragment, d as renderSlot, m as renderTemplate, o as renderComponent, t as spreadAttributes, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { r as $$Button } from "./Footer_DU4vtWH2.mjs";
import { t as $$Image } from "./Image_B5BQcUlA.mjs";
//#region src/components/widgets/Hero.astro
createAstro("https://coolerparts.example.com");
var $$Hero = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Hero;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline, content = await Astro.slots.render("content"), actions = await Astro.slots.render("actions"), image = await Astro.slots.render("image"), id, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}><div class="absolute inset-0 pointer-events-none" aria-hidden="true">${renderSlot($$result, $$slots["bg"], renderTemplate`
      ${bg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(bg)}` })}` : null}
    `)}</div><div class="relative max-w-7xl mx-auto px-4 sm:px-6"><div class="pt-0 md:pt-[76px] pointer-events-none"></div><div class="py-12 md:py-20"><div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto">${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(title)}</h1>`}<div class="max-w-3xl mx-auto">${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${unescapeHTML(subtitle)}</p>`}${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto">${renderComponent($$result, "Button", $$Button, {
		...action || {},
		"class": "w-full sm:mb-0"
	})}</div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(actions)}` })}`}</div>`}</div>${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(content)}` })}`}</div><div class="intersect-once intersect-no-queue intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade">${image && renderTemplate`<div class="relative m-auto max-w-5xl">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"class": "mx-auto rounded-md w-full",
		"widths": [
			400,
			768,
			1024,
			2040
		],
		"sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px",
		"loading": "eager",
		"fetchpriority": "high",
		"width": 1024,
		"height": 576,
		"format": "webp",
		...image
	})}`}</div>`}</div></div></div></section>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Hero.astro", void 0);
//#endregion
export { $$Hero as t };
