import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { t as $$Hero2 } from "./Hero2_FzKOoJAu.mjs";
import { t as $$CallToAction } from "./CallToAction_DMUpHl3O.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
import { t as $$LandingLayout } from "./LandingLayout_Lu84MAGy.mjs";
//#region src/pages/landing/sales.astro
var sales_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Sales,
	file: () => $$file,
	url: () => $$url
});
var $$Sales = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Sales Landing Page Demo" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero2", $$Hero2, {
		"tagline": "Long-form Sales Demo",
		"title": "Long-form Sales: Sell with a Story: The Long-form Way!",
		"subtitle": "Dive deep into crafting a Landing Page that narrates, persuades, and converts.",
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
			src: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
			alt: "Children telling a story. Long-form Sales Landing Page demo"
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
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/sales.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/sales.astro";
var $$url = "/landing/sales";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/sales@_@astro
var page = () => sales_exports;
//#endregion
export { page };
