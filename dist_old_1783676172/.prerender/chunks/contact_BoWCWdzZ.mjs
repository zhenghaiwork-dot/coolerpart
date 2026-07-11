import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { r as $$Button } from "./Footer_BCFP2GBT.mjs";
import { t as $$PageLayout } from "./PageLayout_9VhlMFWZ.mjs";
import { t as $$WidgetWrapper } from "./WidgetWrapper_iFZDrLVM.mjs";
import { t as $$Headline } from "./Headline_BwhVh9y6.mjs";
import { t as $$Features2 } from "./Features2_BMx1aquy.mjs";
import { t as $$HeroText } from "./HeroText_BQ5zLXCQ.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/components/ui/Form.astro
createAstro("https://coolerparts.example.com");
var $$Form = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Form;
	const { inputs, textarea, disclaimer, button = "Contact us", description = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<form>${inputs && inputs.map(({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6">${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium">${label}</label>`}<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></div>`)}${textarea && renderTemplate`<div><label for="textarea" class="block text-sm font-medium">${textarea.label}</label><textarea id="textarea"${addAttribute(textarea.name ? textarea.name : "message", "name")}${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea></div>`}${disclaimer && renderTemplate`<div class="mt-3 flex items-start"><div class="flex mt-0.5"><input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></div><div class="ml-3"><label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400">${disclaimer.label}</label></div></div>`}${button && renderTemplate`<div class="mt-10 grid">${renderComponent($$result, "Button", $$Button, {
		"variant": "primary",
		"type": "submit"
	}, { "default": ($$result) => renderTemplate`${button}` })}</div>`}${description && renderTemplate`<div class="mt-3 text-center"><p class="text-sm text-gray-600 dark:text-gray-400">${description}</p></div>`}</form>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/ui/Form.astro", void 0);
//#endregion
//#region src/components/widgets/Contact.astro
createAstro("https://coolerparts.example.com");
var $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Contact$1;
	const { title = await Astro.slots.render("title"), subtitle = await Astro.slots.render("subtitle"), tagline = await Astro.slots.render("tagline"), inputs, textarea, disclaimer, button, description, id, isDark = false, classes = {}, bg = await Astro.slots.render("bg") } = Astro.props;
	return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, {
		"id": id,
		"isDark": isDark,
		"containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`,
		"bg": bg
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Headline", $$Headline, {
		"title": title,
		"subtitle": subtitle,
		"tagline": tagline
	})}${inputs && renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full">${renderComponent($$result, "FormContainer", $$Form, {
		"inputs": inputs,
		"textarea": textarea,
		"disclaimer": disclaimer,
		"button": button,
		"description": description
	})}</div>`}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/widgets/Contact.astro", void 0);
//#endregion
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title: "Contact" } }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroText", $$HeroText, {
		"tagline": "Contact",
		"title": "Let's Connect!"
	})}${renderComponent($$result, "ContactUs", $$Contact$1, {
		"id": "form",
		"title": "Drop us a message today!",
		"subtitle": "For quicker answers, explore our FAQs section. You may find the solution you're looking  for right there! If not, our support team is delighted to help you.",
		"inputs": [{
			type: "text",
			name: "name",
			label: "Name"
		}, {
			type: "email",
			name: "email",
			label: "Email"
		}],
		"textarea": { label: "Message" },
		"disclaimer": { label: "By submitting this contact form, you acknowledge and agree to the collection of your personal information." },
		"description": "Our support team typically responds within 24 business hours."
	})}${renderComponent($$result, "Features2", $$Features2, {
		"title": "We are here to help!",
		"items": [
			{
				title: "General support",
				description: `Chat with us for inquiries related to account management, website navigation, payment issues, accessing purchased templates or general questions about the website's functionality.`
			},
			{
				title: "Contact sales",
				description: "Chat with us for questions about purchases, customization options, licensing for commercial use, inquiries about specific template, etc."
			},
			{
				title: "Technical support",
				description: "Chat with us when facing issues like template installation, problems editing difficulties, compatibility issues with software or download errors, or other technical challenges related to using the templates."
			},
			{
				title: "Phone",
				description: "+1 (234) 567-890",
				icon: "tabler:headset"
			},
			{
				title: "Email",
				description: "contact@support.com",
				icon: "tabler:mail"
			},
			{
				title: "Location",
				description: "1234 Lorem Ipsum St, 12345, Miami, EEUU",
				icon: "tabler:map-pin"
			}
		]
	})}` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/contact.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
