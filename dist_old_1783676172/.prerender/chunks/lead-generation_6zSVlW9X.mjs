import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { t as $$Hero } from "./Hero_DTGtYvDC.mjs";
import { t as $$CallToAction } from "./CallToAction_DMUpHl3O.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
import { t as $$LandingLayout } from "./LandingLayout_Lu84MAGy.mjs";
//#region src/pages/landing/lead-generation.astro
var lead_generation_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LeadGeneration,
	file: () => $$file,
	url: () => $$url
});
var $$LeadGeneration = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Lead Generation Landing Page Demo" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {
		"tagline": "Lead Generation Landing Demo",
		"title": "Effective Lead Generation Landing Page: Unlock the Secrets",
		"subtitle": "Discover the secrets to creating a Landing Page that turns curious visitors into eager leads. (Your Hero should grab attention instantly. Use a powerful headline that speaks directly to your target audience.)",
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
			src: "https://images.unsplash.com/photo-1597423498219-04418210827d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
			alt: "Magnet attracting screws. Lead generation landing page demo"
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
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/lead-generation.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/lead-generation.astro";
var $$url = "/landing/lead-generation";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/lead-generation@_@astro
var page = () => lead_generation_exports;
//#endregion
export { page };
