import { A as createAstro, d as renderSlot, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import { t as $$Layout } from "./Layout_BPWRV8yA.mjs";
import { n as $$Header, t as $$Footer } from "./Footer_DU4vtWH2.mjs";
//#region src/layouts/InquiryLayout.astro
createAstro("https://coolerparts.example.com");
var $$InquiryLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InquiryLayout;
	const { metadata } = Astro.props;
	const headerLinks = [
		{
			text: "Products",
			links: [
				{
					text: "Water System",
					href: "/water-system"
				},
				{
					text: "Evaporation System",
					href: "/evaporation-system"
				},
				{
					text: "Air System",
					href: "/air-system"
				},
				{
					text: "Electrical & Controls",
					href: "/electrical-controls"
				},
				{
					text: "Structure & Mounting",
					href: "/structure-mounting"
				},
				{
					text: "Maintenance & Consumables",
					href: "/maintenance-consumables"
				}
			]
		},
		{
			text: "Compatibility",
			href: "/compatibility"
		},
		{
			text: "Inquiry List",
			href: "/inquiry"
		},
		{
			text: "Contact",
			href: "/contact"
		}
	];
	const headerActions = [{
		text: "Request Quote",
		href: "/inquiry"
	}];
	const footerLinks = [
		{
			title: "Products",
			links: [
				{
					text: "Water System",
					href: "/water-system"
				},
				{
					text: "Evaporation System",
					href: "/evaporation-system"
				},
				{
					text: "Air System",
					href: "/air-system"
				},
				{
					text: "Electrical & Controls",
					href: "/electrical-controls"
				},
				{
					text: "Structure & Mounting",
					href: "/structure-mounting"
				},
				{
					text: "Maintenance & Consumables",
					href: "/maintenance-consumables"
				}
			]
		},
		{
			title: "Support",
			links: [
				{
					text: "Compatibility Guide",
					href: "/compatibility"
				},
				{
					text: "How to Identify Parts",
					href: "/compatibility"
				},
				{
					text: "RFQ Help",
					href: "/inquiry"
				}
			]
		},
		{
			title: "Company",
			links: [{
				text: "About Us",
				href: "/about"
			}, {
				text: "Contact",
				href: "/contact"
			}]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {
		"links": headerLinks,
		"actions": headerActions,
		"isSticky": true,
		"showToggleTheme": true
	})}${maybeRenderHead($$result)}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {
		"links": footerLinks,
		"secondaryLinks": [{
			text: "Terms",
			href: "/terms"
		}, {
			text: "Privacy",
			href: "/privacy"
		}],
		"socialLinks": [],
		"footNote": "Evaporative Cooler Parts — B2B Inquiry Platform"
	})}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/layouts/InquiryLayout.astro", void 0);
//#endregion
export { $$InquiryLayout as t };
