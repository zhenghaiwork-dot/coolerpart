import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { t as $$Hero2 } from "./Hero2_FzKOoJAu.mjs";
import { t as $$CallToAction } from "./CallToAction_DMUpHl3O.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
import { t as $$LandingLayout } from "./LandingLayout_Lu84MAGy.mjs";
//#region src/pages/landing/subscription.astro
var subscription_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Subscription,
	file: () => $$file,
	url: () => $$url
});
var $$Subscription = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": { title: "Subscription Landing Page Demo" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero2", $$Hero2, {
		"tagline": "Subscription Landing Demo",
		"title": "Subscription Landing Page: Turn Casual Browsers into Loyal Subscribers!",
		"subtitle": "Unlock the formula for a Subscription Landing Page that keeps your audience coming back for more.",
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
			src: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			alt: "Ironic image associated with canceling a subscription. Subscription Landing Page Demo"
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
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/subscription.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/landing/subscription.astro";
var $$url = "/landing/subscription";
//#endregion
//#region \0virtual:astro:page:src/pages/landing/subscription@_@astro
var page = () => subscription_exports;
//#endregion
export { page };
