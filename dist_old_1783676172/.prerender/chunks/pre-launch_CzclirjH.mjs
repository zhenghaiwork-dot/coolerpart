import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$Hero2 } from "./Hero2_Coe1wGTV.mjs";
import { t as $$CallToAction } from "./CallToAction_BEw8wVYY.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
import { t as $$LandingLayout } from "./LandingLayout_a0g3yAXz.mjs";
//#region src/pages/landing/pre-launch.astro
var pre_launch_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PreLaunch,
	file: () => $$file,
	url: () => $$url
});
var $$PreLaunch = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Pre-Launch Landing Page" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero2", $$Hero2, {
		"tagline": "Pre-launch Demo",
		"title": "Pre-launch Landing Page: Build the Hype Before the Big Reveal!",
		"subtitle": "Craft a tantalizing Coming Soon or Pre-Launch Landing Page that leaves visitors eagerly awaiting your launch.",
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
			src: "https://images.unsplash.com/photo-1558803116-c1b4ac867b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
			alt: "Store with a Coming Soon sign. Pre-launch Landing Page"
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
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/pre-launch.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/pre-launch.astro";
var $$url = "/landing/pre-launch";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/pre-launch@_@astro
var page = () => pre_launch_exports;
//#endregion
export { page };
