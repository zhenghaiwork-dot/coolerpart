import { A as createAstro, d as renderSlot, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent, c as getBlogPermalink, d as getPermalink, s as getAsset } from "./runtime_CQAp8_Zo.mjs";
import { t as $$Layout } from "./Layout_BPWRV8yA.mjs";
import { n as $$Header, t as $$Footer } from "./Footer_DU4vtWH2.mjs";
//#region src/components/widgets/Announcement.astro
var $$Announcement = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="text-sm bg-slate-900 text-slate-300 dark:bg-transparent dark:border-b dark:border-slate-800 dark:text-slate-400 hidden md:flex gap-1 overflow-hidden px-3 py-2 relative text-ellipsis whitespace-nowrap"><span class="bg-white/20 dark:bg-slate-700 text-slate-100 dark:text-slate-300 font-semibold px-1 py-0.5 text-xs mr-0.5 rtl:mr-0 rtl:ml-0.5 inline-block">NEW</span><a href="https://astro.build/blog/astro-6/" class="text-slate-300 hover:underline dark:text-slate-400 font-medium">Astro v6 is now available! »</a><a target="_blank" rel="noopener" class="ltr:ml-auto rtl:mr-auto w-[5.6rem] h-[1.25rem] ml-auto bg-contain inline-block bg-[url(https://img.shields.io/github/stars/arthelokyo/astrowind.svg?style=social&label=Stars&maxAge=86400)]" title="If you like AstroWind, give us a star." href="https://github.com/arthelokyo/astrowind"></a></div>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Announcement.astro", void 0);
//#endregion
//#region src/navigation.ts
var headerData = {
	links: [
		{
			text: "Homes",
			links: [
				{
					text: "SaaS",
					href: getPermalink("/homes/saas")
				},
				{
					text: "Startup",
					href: getPermalink("/homes/startup")
				},
				{
					text: "Mobile App",
					href: getPermalink("/homes/mobile-app")
				},
				{
					text: "Personal",
					href: getPermalink("/homes/personal")
				}
			]
		},
		{
			text: "Pages",
			links: [
				{
					text: "Features (Anchor Link)",
					href: getPermalink("/#features")
				},
				{
					text: "Services",
					href: getPermalink("/services")
				},
				{
					text: "Pricing",
					href: getPermalink("/pricing")
				},
				{
					text: "About us",
					href: getPermalink("/about")
				},
				{
					text: "Contact",
					href: getPermalink("/contact")
				},
				{
					text: "Terms",
					href: getPermalink("/terms")
				},
				{
					text: "Privacy policy",
					href: getPermalink("/privacy")
				}
			]
		},
		{
			text: "Landing",
			links: [
				{
					text: "Lead Generation",
					href: getPermalink("/landing/lead-generation")
				},
				{
					text: "Long-form Sales",
					href: getPermalink("/landing/sales")
				},
				{
					text: "Click-Through",
					href: getPermalink("/landing/click-through")
				},
				{
					text: "Product Details (or Services)",
					href: getPermalink("/landing/product")
				},
				{
					text: "Coming Soon or Pre-Launch",
					href: getPermalink("/landing/pre-launch")
				},
				{
					text: "Subscription",
					href: getPermalink("/landing/subscription")
				}
			]
		},
		{
			text: "Blog",
			links: [
				{
					text: "Blog List",
					href: getBlogPermalink()
				},
				{
					text: "Article",
					href: getPermalink("get-started-website-with-astro-tailwind-css", "post")
				},
				{
					text: "Article (with MDX)",
					href: getPermalink("markdown-elements-demo-post", "post")
				},
				{
					text: "Category Page",
					href: getPermalink("tutorials", "category")
				},
				{
					text: "Tag Page",
					href: getPermalink("astro", "tag")
				}
			]
		},
		{
			text: "Widgets",
			href: "#"
		}
	],
	actions: [{
		text: "Download",
		href: "https://github.com/arthelokyo/astrowind",
		target: "_blank"
	}]
};
var footerData = {
	links: [
		{
			title: "Product",
			links: [
				{
					text: "Features",
					href: "#"
				},
				{
					text: "Security",
					href: "#"
				},
				{
					text: "Team",
					href: "#"
				},
				{
					text: "Enterprise",
					href: "#"
				},
				{
					text: "Customer stories",
					href: "#"
				},
				{
					text: "Pricing",
					href: "#"
				},
				{
					text: "Resources",
					href: "#"
				}
			]
		},
		{
			title: "Platform",
			links: [
				{
					text: "Developer API",
					href: "#"
				},
				{
					text: "Partners",
					href: "#"
				},
				{
					text: "Atom",
					href: "#"
				},
				{
					text: "Electron",
					href: "#"
				},
				{
					text: "AstroWind Desktop",
					href: "#"
				}
			]
		},
		{
			title: "Support",
			links: [
				{
					text: "Docs",
					href: "#"
				},
				{
					text: "Community Forum",
					href: "#"
				},
				{
					text: "Professional Services",
					href: "#"
				},
				{
					text: "Skills",
					href: "#"
				},
				{
					text: "Status",
					href: "#"
				}
			]
		},
		{
			title: "Company",
			links: [
				{
					text: "About",
					href: "#"
				},
				{
					text: "Blog",
					href: "#"
				},
				{
					text: "Careers",
					href: "#"
				},
				{
					text: "Press",
					href: "#"
				},
				{
					text: "Inclusion",
					href: "#"
				},
				{
					text: "Social Impact",
					href: "#"
				},
				{
					text: "Shop",
					href: "#"
				}
			]
		}
	],
	secondaryLinks: [{
		text: "Terms",
		href: getPermalink("/terms")
	}, {
		text: "Privacy Policy",
		href: getPermalink("/privacy")
	}],
	socialLinks: [
		{
			ariaLabel: "X",
			icon: "tabler:brand-x",
			href: "#"
		},
		{
			ariaLabel: "Instagram",
			icon: "tabler:brand-instagram",
			href: "#"
		},
		{
			ariaLabel: "Facebook",
			icon: "tabler:brand-facebook",
			href: "#"
		},
		{
			ariaLabel: "RSS",
			icon: "tabler:rss",
			href: getAsset("/rss.xml")
		},
		{
			ariaLabel: "Github",
			icon: "tabler:brand-github",
			href: "https://github.com/arthelokyo/astrowind"
		}
	],
	footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `
};
//#endregion
//#region src/layouts/PageLayout.astro
createAstro("https://coolerparts.example.com");
var $$PageLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageLayout;
	const { metadata } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["announcement"], renderTemplate`
    ${renderComponent($$result, "Announcement", $$Announcement, {})}
  `)}${renderSlot($$result, $$slots["header"], renderTemplate`
    ${renderComponent($$result, "Header", $$Header, {
		...headerData,
		"isSticky": true,
		"showRssFeed": true,
		"showToggleTheme": true
	})}
  `)}${maybeRenderHead($$result)}<main>${renderSlot($$result, $$slots["default"])}</main>${renderSlot($$result, $$slots["footer"], renderTemplate`
    ${renderComponent($$result, "Footer", $$Footer, { ...footerData })}
  `)}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/layouts/PageLayout.astro", void 0);
//#endregion
export { headerData as n, $$PageLayout as t };
