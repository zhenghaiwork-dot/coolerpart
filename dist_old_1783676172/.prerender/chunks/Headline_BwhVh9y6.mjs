import { A as createAstro, O as unescapeHTML, b as addAttribute, m as renderTemplate, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { twMerge } from "tailwind-merge";
//#region src/components/ui/Headline.astro
createAstro("https://coolerparts.example.com");
var $$Headline = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Headline;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline, classes = {} } = Astro.props;
	const { container: containerClass = "max-w-3xl", title: titleClass = "text-3xl md:text-4xl ", subtitle: subtitleClass = "text-xl" } = classes;
	return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl", titleClass), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/ui/Headline.astro", void 0);
//#endregion
export { $$Headline as t };
