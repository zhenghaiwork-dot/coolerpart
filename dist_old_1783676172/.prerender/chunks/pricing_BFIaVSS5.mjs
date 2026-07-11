import { m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { t as $$PageLayout } from "./PageLayout_9VhlMFWZ.mjs";
import { t as $$Features3 } from "./Features3_RfAPQg_W.mjs";
import { t as $$HeroText } from "./HeroText_BQ5zLXCQ.mjs";
import { t as $$CallToAction } from "./CallToAction_BEw8wVYY.mjs";
import { t as $$FAQs } from "./FAQs_B03MjyKw.mjs";
import { t as $$Steps } from "./Steps_BcUxve8c.mjs";
import { t as $$Pricing$1 } from "./Pricing_CriPZjqa.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/pricing.astro
var pricing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pricing,
	file: () => $$file,
	url: () => $$url
});
var $$Pricing = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title: "Pricing" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroText", $$HeroText, {
		"tagline": "Pricing",
		"title": "Stellar Pricing for Every Journey",
		"subtitle": "Choose the perfect plan that aligns with your cosmic goals."
	})}${renderComponent($$result, "Prices", $$Pricing$1, {
		"title": "Our prices",
		"subtitle": "Only pay for what you need",
		"prices": [
			{
				title: "basic",
				subtitle: "Optimal choice for personal use",
				price: 29,
				period: "per month",
				items: [
					{ description: "Etiam in libero, et volutpat" },
					{ description: "Aenean ac nunc dolor tristique" },
					{ description: "Cras scelerisque accumsan lib" },
					{ description: "In hac habitasse" }
				],
				callToAction: {
					target: "_blank",
					text: "Get started",
					href: "#"
				}
			},
			{
				title: "standard",
				subtitle: "Optimal choice for small teams",
				price: 69,
				period: "Per Month",
				items: [
					{ description: "Proin vel laoreet" },
					{ description: "Ut efficitur habitasse egestas" },
					{ description: "Volutpat hac curabitur" },
					{ description: "Pellentesque blandit ut nibh" },
					{ description: "Donec fringilla sem" }
				],
				callToAction: {
					target: "_blank",
					text: "Get started",
					href: "#"
				},
				hasRibbon: true,
				ribbonTitle: "popular"
			},
			{
				title: "premium",
				subtitle: "Optimal choice for companies",
				price: 199,
				period: "Per Month",
				items: [
					{ description: "Curabitur suscipit risus" },
					{ description: "Aliquam habitasse malesuada" },
					{ description: "Suspendisse sit amet blandit" },
					{ description: "Suspendisse auctor blandit dui" }
				],
				callToAction: {
					target: "_blank",
					text: "Get started",
					href: "#"
				}
			}
		]
	})}${renderComponent($$result, "Features3", $$Features3, {
		"title": "Price-related features",
		"subtitle": "Discover the advantages of choosing our plans",
		"columns": 2,
		"items": [
			{
				title: "Tiered Pricing Plans",
				description: "Choose from a range of pricing plans designed to accommodate different budgets and requirements.",
				icon: "tabler:stairs"
			},
			{
				title: "Transparent Pricing",
				description: "Clearly displayed pricing details for each plan, with no hidden costs or unexpected charges.",
				icon: "tabler:flip-vertical"
			},
			{
				title: "Secure Payment Methods",
				description: "Secure payment gateways to protect your financial information during transactions.",
				icon: "tabler:shield-lock"
			},
			{
				title: "Instant Access",
				description: `Immediate access to your chosen plan's features and templates upon subscription.`,
				icon: "tabler:accessible"
			},
			{
				title: "Upgrade Value",
				description: "Upgrade to higher-tier plans to unlock more features and benefits for an enhanced experience.",
				icon: "tabler:chevrons-up"
			},
			{
				title: "24H support",
				description: "Questions answered via live chat, email or phone, every calendar day.",
				icon: "tabler:headset"
			}
		],
		"classes": { container: "max-w-5xl" }
	})}${renderComponent($$result, "Steps", $$Steps, {
		"title": "A guided journey from plans to creativity",
		"tagline": "simplified process",
		"isReversed": true,
		"items": [
			{
				title: "Explore plans",
				icon: "tabler:number-1"
			},
			{
				title: "Select a plan",
				icon: "tabler:number-2"
			},
			{
				title: "Sign Up / Log In",
				icon: "tabler:number-3"
			},
			{
				title: "Review order",
				icon: "tabler:number-4"
			},
			{
				title: "Enter payment details",
				icon: "tabler:number-5"
			},
			{
				title: "Confirmation",
				icon: "tabler:number-6"
			},
			{
				title: "Download and start using the template(s)",
				icon: "tabler:number-7"
			}
		],
		"image": {
			src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
			alt: "Steps image"
		}
	})}${renderComponent($$result, "FAQs", $$FAQs, {
		"title": "Pricing FAQs",
		"subtitle": "Choosing the right plan is important, and we're here to answer your questions. If you have queries about our pricing options, you're in the right place.",
		"columns": 1,
		"items": [
			{
				title: "Do the plans come with customer support?",
				description: "Absolutely, all plans include access to our dedicated customer support to assist you with any queries or concerns."
			},
			{
				title: "Is there a trial period for the different plans?",
				description: "Unfortunately, we don't offer trial periods for the plans. However, you can check out our demo section to preview the quality of our templates."
			},
			{
				title: "Can I switch between plans?",
				description: "Certainly! You can easily upgrade or downgrade your plan, at any time, to find the one that best suits your evolving requirements."
			},
			{
				title: "What payment methods do you accept?",
				description: "We accept major credit cards and online payment methods to ensure a convenient and secure transaction process."
			},
			{
				title: "Are there any hidden fees beyond the displayed cost?",
				description: "No, the subscription cost covers all the features and templates listed under each plan. There are no hidden fees or extra charges."
			}
		]
	})}${renderComponent($$result, "CallToAction", $$CallToAction, {
		"title": "Ready to boost your projects?",
		"subtitle": "Join our community of satisfied customers who have transformed their work with our templates.",
		"actions": [{
			variant: "primary",
			text: "Get started now",
			href: "/"
		}]
	})}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/pricing.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/pricing.astro";
var $$url = "/pricing";
//#endregion
//#region \0virtual:astro:page:src/pages/pricing@_@astro
var page = () => pricing_exports;
//#endregion
export { page };
