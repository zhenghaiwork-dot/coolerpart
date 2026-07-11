import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$Hero2 } from "./Hero2_Coe1wGTV.mjs";
import { t as $$CallToAction } from "./CallToAction_BEw8wVYY.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
import { t as $$LandingLayout } from "./LandingLayout_a0g3yAXz.mjs";
//#region src/pages/landing/click-through.astro
var click_through_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ClickThrough,
	file: () => $$file,
	url: () => $$url
});
var $$ClickThrough = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Click-through Landing Page Demo" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero2", $$Hero2, {
		"tagline": "Click-through Demo",
		"title": "Click-through Landing Page: The Perfect Bridge to Conversion!",
		"subtitle": "Learn how to design a Click-Through Landing Page that seamlessly guides visitors to your main offer.",
		"actions": [{
			variant: "primary",
			text: "Call to Action",
			href: "#",
			icon: "tabler:square-rounded-arrow-right"
		}, {
			text: "Learn more",
			href: "#"
		}],
		"image": {
			src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			alt: "Click-through Landing Page Hero Image"
		}
	})}${renderComponent($$result, "CallToAction", $$CallToAction, {
		"title": "Coming soon",
		"subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!",
		"actions": [{
			variant: "primary",
			text: "Download Template",
			href: "https://github.com/arthelokyo/astrowind",
			icon: "tabler:download"
		}]
	})}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/click-through.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/click-through.astro";
var $$url = "/landing/click-through";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/click-through@_@astro
var page = () => click_through_exports;
//#endregion
export { page };
