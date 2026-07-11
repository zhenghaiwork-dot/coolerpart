import { A as createAstro, c as Fragment, d as renderSlot, m as renderTemplate, o as renderComponent } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { n as $$Header } from "./Footer_DU4vtWH2.mjs";
import { n as headerData, t as $$PageLayout } from "./PageLayout_C-5dCF8L.mjs";
//#region src/layouts/LandingLayout.astro
createAstro("https://coolerparts.example.com");
var $$LandingLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LandingLayout;
	const { metadata } = Astro.props;
	return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "metadata": metadata }, {
		"default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["default"])}`,
		"announcement": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "announcement" }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["announcement"])}` })}`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`${renderSlot($$result, $$slots["header"], renderTemplate`
      ${renderComponent($$result, "Header", $$Header, {
			"links": headerData?.links[2] ? [headerData.links[2]] : void 0,
			"actions": [{
				text: "Download",
				href: "https://github.com/arthelokyo/astrowind"
			}],
			"showToggleTheme": true,
			"position": "right"
		})}
    `)}` })}`
	})}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/layouts/LandingLayout.astro", void 0);
//#endregion
export { $$LandingLayout as t };
