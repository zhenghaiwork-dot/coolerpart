import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$Hero } from "./Hero_BA-e9mQk.mjs";
import { t as $$CallToAction } from "./CallToAction_BEw8wVYY.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
import { t as $$LandingLayout } from "./LandingLayout_a0g3yAXz.mjs";
//#region src/pages/landing/product.astro
var product_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Product,
	file: () => $$file,
	url: () => $$url
});
var $$Product = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Product Details Landing Page Demo" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {
		"tagline": "Product Details Demo",
		"title": "Product Landing Page: Showcase with Precision and Passion!",
		"subtitle": "Step-by-step guide to designing a Landing Page that highlights every facet of your product or service.",
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
			src: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2174&q=80",
			alt: "A spotlight on a product. Product Details Landing Page Demo"
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
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/product.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/product.astro";
var $$url = "/landing/product";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/product@_@astro
var page = () => product_exports;
//#endregion
export { page };
