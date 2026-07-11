import { b as ImageMissingAlt, p as FontFamilyNotFound, t as AstroError } from "./errors_95H_i_4D.mjs";
import { A as createAstro, O as unescapeHTML, S as createRenderInstruction, b as addAttribute, d as renderSlot, m as renderTemplate, o as renderComponent, t as spreadAttributes, v as maybeRenderHead, x as defineScriptVars, y as renderHead } from "./server_DvF4bWil.mjs";
import { _ as METADATA, b as createComponent, g as I18N, l as getCanonical, m as ANALYTICS, s as getAsset, t as createSvgComponent, v as SITE, y as UI } from "./runtime_CQAp8_Zo.mjs";
import { n as getImage$1, t as getConfiguredImageService } from "./assets_COd5dEt-.mjs";
import { c as isRemoteImage, i as inferRemoteSize$1, l as resolveSrc, s as isESMImportedImage } from "./service_DsUCbgrW.mjs";
import merge from "lodash.merge";
import * as mime from "mrmime";
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/common/CommonMeta.astro
var $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/CommonMeta.astro", void 0);
//#endregion
//#region src/assets/favicons/favicon.ico
var favicon_default$1 = "/_astro/favicon.CGiRCjPI.ico";
//#endregion
//#region src/assets/favicons/favicon.svg
var favicon_default = createSvgComponent({
	"meta": {
		"src": "/_astro/favicon.vp_fBu0c.svg",
		"width": 128,
		"height": 128,
		"format": "svg"
	},
	"attributes": {
		"fill": "none",
		"viewBox": "0 0 128 128"
	},
	"children": "\n    <path d=\"M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z\" />\n    <style>\n        path { fill: #000; }\n        @media (prefers-color-scheme: dark) {\n            path { fill: #FFF; }\n        }\n    </style>\n",
	"styles": ["\n        path { fill: #000; }\n        @media (prefers-color-scheme: dark) {\n            path { fill: #FFF; }\n        }\n    "]
});
//#endregion
//#region src/assets/favicons/apple-touch-icon.png
var apple_touch_icon_default = new Proxy({
	"src": "/_astro/apple-touch-icon.DHIlG7dp.png",
	"width": 180,
	"height": 180,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Dev/CoolerPartsNew/coolerparts/src/assets/favicons/apple-touch-icon.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Dev/CoolerPartsNew/coolerparts/src/assets/favicons/apple-touch-icon.png");
	return target[name];
} });
//#endregion
//#region src/components/Favicons.astro
var $$Favicons = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<link rel="shortcut icon"${addAttribute(favicon_default$1, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favicon_default.src, "href")}><link rel="mask-icon"${addAttribute(favicon_default.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(apple_touch_icon_default.src, "href")}>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/Favicons.astro", void 0);
//#endregion
//#region src/components/CustomStyles.astro
var $$CustomStyles = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<style>
  :root {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: 'Inter Variable';
    --aw-font-heading: 'Inter Variable';

    --aw-color-primary: rgb(1 97 239);
    --aw-color-secondary: rgb(1 84 207);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(0 0 0);
    --aw-color-text-default: rgb(16 16 16);
    --aw-color-text-muted: rgb(16 16 16 / 66%);
    --aw-color-bg-page: rgb(255 255 255);

    --aw-color-bg-page-dark: rgb(3 6 32);

    ::selection {
      background-color: lavender;
    }
  }

  .dark {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: 'Inter Variable';
    --aw-font-heading: 'Inter Variable';

    --aw-color-primary: rgb(1 97 239);
    --aw-color-secondary: rgb(1 84 207);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(247, 248, 248);
    --aw-color-text-default: rgb(229 236 246);
    --aw-color-text-muted: rgb(229 236 246 / 66%);
    --aw-color-bg-page: rgb(3 6 32);

    ::selection {
      background-color: black;
      color: snow;
    }
  }
</style>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/CustomStyles.astro", void 0);
//#endregion
//#region src/components/common/ApplyColorMode.astro
var $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script>(function(){${defineScriptVars({ defaultTheme: UI.theme || "system" })}
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const matches = document.querySelectorAll('[data-aw-toggle-color-scheme] > input');

    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.checked = theme !== 'dark';
      });
    }
  }

  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {
    applyTheme(defaultTheme.replace(':only', ''));
  } else if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
})();<\/script>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/ApplyColorMode.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro
createAstro("https://coolerparts.example.com");
var $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphArticleTags;
	const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro.props.openGraph.article;
	return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro
createAstro("https://coolerparts.example.com");
var $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphBasicTags;
	const { openGraph } = Astro.props;
	return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro.url.href, "content")}>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphImageTags.astro
createAstro("https://coolerparts.example.com");
var $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphImageTags;
	const { image } = Astro.props.openGraph.basic;
	const { secureUrl, type, width, height, alt } = Astro.props.openGraph.image;
	return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro
createAstro("https://coolerparts.example.com");
var $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OpenGraphOptionalTags;
	const { optional } = Astro.props.openGraph;
	return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/ExtendedTags.astro
createAstro("https://coolerparts.example.com");
var $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExtendedTags;
	const { props } = Astro;
	return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/TwitterTags.astro
createAstro("https://coolerparts.example.com");
var $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TwitterTags;
	const { card, site, title, creator, description, image, imageAlt } = Astro.props.twitter;
	return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro
createAstro("https://coolerparts.example.com");
var $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LanguageAlternatesTags;
	const { languageAlternates } = Astro.props;
	return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/SEO.astro
createAstro("https://coolerparts.example.com");
var $$SEO = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SEO;
	Astro.props.surpressWarnings = true;
	function validateProps(props) {
		if (props.openGraph) {
			if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) throw new Error("If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!");
		}
		if (props.title && props.openGraph?.basic.title) {
			if (props.title == props.openGraph.basic.title && !props.surpressWarnings) console.warn("WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more.");
		}
		if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) console.warn("WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'");
	}
	validateProps(Astro.props);
	let updatedTitle = "";
	if (Astro.props.title) {
		updatedTitle = Astro.props.title;
		if (Astro.props.titleTemplate) updatedTitle = Astro.props.titleTemplate.replace(/%s/g, updatedTitle);
	} else if (Astro.props.titleDefault) updatedTitle = Astro.props.titleDefault;
	const baseUrl = Astro.site ?? Astro.url;
	const defaultCanonicalUrl = new URL(Astro.url.pathname + Astro.url.search, baseUrl);
	const canonicalHref = Astro.props.removeTrailingSlashForRoot && Astro.url.pathname === "/" ? defaultCanonicalUrl.origin + defaultCanonicalUrl.search : defaultCanonicalUrl.href;
	return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro.props.charset ? renderTemplate`<meta${addAttribute(Astro.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro.props.canonical || canonicalHref, "href")}>${Astro.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro.props.noindex ? "noindex" : "index"}, ${Astro.props.nofollow ? "nofollow" : "follow"}${Astro.props.noarchive ? ", noarchive" : ""}${Astro.props.nocache ? ", nocache" : ""}${Astro.props.robotsExtras ? `, ${Astro.props.robotsExtras}` : ""}`, "content")}>${Astro.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro.props })}`}${Astro.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro.props })}`}${Astro.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro.props })}`}${Astro.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro.props })}`}${Astro.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro.props })}`}${Astro.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro.props })}`}${Astro.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro.props })}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro-seo@1.1.0_prettier-pl_795ec7078b934e2da146617c43f533a8/node_modules/astro-seo/src/SEO.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Image.astro
createAstro("https://coolerparts.example.com");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Picture.astro
createAstro("https://coolerparts.example.com");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
	else pictureAttributes.class = scopedStyleClass;
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		return renderTemplate`<source${addAttribute(props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Font.astro
createAstro("https://coolerparts.example.com");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url) {
		if (!this.#urls.has(url)) return null;
		if (!this.#address) throw new Error("Server address unavailable, this should not happen. Open an issue.");
		if (!url.startsWith("/")) url = new URL(url).pathname;
		return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
//#endregion
//#region \0astro:assets
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": ["cdn.pixabay.com"],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
//#region src/utils/images.ts
var _localImages;
var loadLocalImages = () => {
	if (_localImages) return _localImages;
	try {
		_localImages = /* #__PURE__ */ Object.assign({
			"/src/assets/images/app-store.png": () => import("./app-store_BsGeECyA.mjs"),
			"/src/assets/images/default.png": () => import("./default_Bcu7G_8L.mjs"),
			"/src/assets/images/google-play.png": () => import("./google-play_BXS9UEeZ.mjs"),
			"/src/assets/images/hero-image.png": () => import("./hero-image_Cga1T7LV.mjs")
		});
	} catch {
		_localImages = {};
	}
	return _localImages;
};
/**
* Resolve an image reference to either ImageMetadata (local) or a string URL (remote/public).
* Accepts:
*   - `null` / `undefined`         → returned as-is
*   - `ImageMetadata`              → returned as-is (already imported)
*   - `"http(s)://…"` or `"/path"` → returned as-is (external or public/)
*   - `"~/assets/images/…"`        → resolved to its ImageMetadata via the glob
*/
var findImage = async (imagePath) => {
	if (typeof imagePath !== "string") return imagePath;
	if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) return imagePath;
	if (!imagePath.startsWith("~/assets/images")) return imagePath;
	const loader = loadLocalImages()[imagePath.replace("~/", "/src/")];
	if (typeof loader !== "function") return null;
	return (await loader()).default;
};
var OG_WIDTH = 1200;
var OG_HEIGHT = 626;
/**
* Adapt OpenGraph images to absolute, optimized URLs.
* Used by Metadata.astro to produce social-card-ready URLs.
*/
var adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
	if (!openGraph?.images?.length) return openGraph;
	const adaptedImages = await Promise.all(openGraph.images.map(async (image) => {
		if (!image?.url) return { url: "" };
		const resolved = await findImage(image.url);
		if (!resolved) return { url: "" };
		const optimized = await getImage({
			src: resolved,
			width: OG_WIDTH,
			height: OG_HEIGHT,
			format: "jpg"
		});
		return {
			url: String(new URL(optimized.src, astroSite)),
			width: Number(optimized.attributes.width) || OG_WIDTH,
			height: Number(optimized.attributes.height) || OG_HEIGHT
		};
	}));
	return {
		...openGraph,
		images: adaptedImages
	};
};
//#endregion
//#region src/components/common/Metadata.astro
createAstro("https://coolerparts.example.com");
var $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Metadata;
	const { title, ignoreTitleTemplate = false, canonical = String(getCanonical(String(Astro.url.pathname))), robots = {}, description, openGraph = {}, twitter = {} } = Astro.props;
	const adaptedOg = await adaptOpenGraphImages(merge({
		url: canonical,
		siteName: SITE?.name,
		images: [],
		locale: I18N?.language || "en",
		type: "website"
	}, METADATA?.openGraph, {
		url: canonical,
		...openGraph
	}), Astro.site);
	const firstImage = adaptedOg?.images?.[0];
	function buildOpenGraph(og) {
		if (!og) return void 0;
		const imageUrl = firstImage?.url || "";
		if (!imageUrl) return void 0;
		return {
			basic: {
				title: title || METADATA?.title?.default || "",
				type: og.type || "website",
				image: imageUrl,
				url: og.url
			},
			optional: {
				description: description || METADATA?.description,
				locale: og.locale,
				siteName: og.siteName
			},
			image: {
				url: imageUrl,
				width: firstImage?.width,
				height: firstImage?.height,
				alt: title || METADATA?.title?.default || ""
			}
		};
	}
	const mergedTwitter = merge({ card: adaptedOg?.images?.length ? "summary_large_image" : "summary" }, METADATA?.twitter ? {
		card: METADATA.twitter.cardType,
		site: METADATA.twitter.site,
		creator: METADATA.twitter.handle
	} : {}, twitter ? {
		card: twitter.cardType,
		site: twitter.site,
		creator: twitter.handle
	} : {});
	return renderTemplate`${renderComponent($$result, "SEO", $$SEO, {
		title: title || METADATA?.title?.default || "",
		titleTemplate: ignoreTitleTemplate ? "%s" : METADATA?.title?.template || "%s",
		canonical,
		noindex: typeof robots?.index !== "undefined" ? !robots.index : typeof METADATA?.robots?.index !== "undefined" ? !METADATA.robots.index : true,
		nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : typeof METADATA?.robots?.follow !== "undefined" ? !METADATA.robots.follow : true,
		description: description || METADATA?.description,
		openGraph: buildOpenGraph(adaptedOg),
		twitter: mergedTwitter,
		surpressWarnings: true
	})}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/Metadata.astro", void 0);
//#endregion
//#region src/components/common/SiteVerification.astro
var $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${SITE.googleSiteVerificationId && renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/SiteVerification.astro", void 0);
//#endregion
//#region src/components/common/Analytics.astro
var $$Analytics = createComponent(($$result, $$props, $$slots) => {
	const id = ANALYTICS?.vendors?.googleAnalytics?.id ? String(ANALYTICS.vendors.googleAnalytics.id) : "";
	const scriptType = !!ANALYTICS?.vendors?.googleAnalytics?.partytown ? "text/partytown" : void 0;
	return renderTemplate`${id && renderTemplate`<script async${addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src")}${addAttribute(scriptType, "type")}><\/script>`}<script id="ga-init"${addAttribute(id, "data-id")}${addAttribute(id ? scriptType : void 0, "type")}>
  if (document.getElementById('ga-init').dataset.id) {
    var d = document.getElementById('ga-init').dataset.id;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', d);
  }
<\/script>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/Analytics.astro", void 0);
//#endregion
//#region src/components/common/BasicScripts.astro
var $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script>(function(){${defineScriptVars({ defaultTheme: UI.theme })}
  if (!window.basic_script) {

  window.basic_script = true;

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const initTheme = function () {
    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {
      applyTheme(defaultTheme.replace(':only', ''));
    } else if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }
  };
  initTheme();

  function attachEvent(selector, event, fn) {
    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (matches && matches.length) {
      matches.forEach((elem) => {
        elem.addEventListener(event, (e) => fn(e, elem), false);
      });
    }
  }

  const onLoad = function () {
    let lastKnownScrollPosition = window.scrollY;
    let ticking = true;

    attachEvent('#header nav', 'click', function () {
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('header')?.classList.remove('h-screen');
      document.getElementById('header')?.classList.remove('expanded');
      document.getElementById('header')?.classList.remove('bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {
      elem.classList.toggle('expanded');
      document.body.classList.toggle('overflow-hidden');
      document.getElementById('header')?.classList.toggle('h-screen');
      document.getElementById('header')?.classList.toggle('expanded');
      document.getElementById('header')?.classList.toggle('bg-page');
      document.querySelector('#header nav')?.classList.toggle('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');
    });

    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {
      if (defaultTheme.endsWith(':only')) {
        return;
      }

      Observer.removeAnimationDelay();

      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {
      const network = elem.getAttribute('data-aw-social-share');
      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));
      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));

      let href;
      switch (network) {
        case 'facebook':
          href = \`https://www.facebook.com/sharer.php?u=\${url}\`;
          break;
        case 'twitter':
          href = \`https://twitter.com/intent/tweet?url=\${url}&text=\${text}\`;
          break;
        case 'linkedin':
          href = \`https://www.linkedin.com/shareArticle?mini=true&url=\${url}&title=\${text}\`;
          break;
        case 'whatsapp':
          href = \`https://wa.me/?text=\${text}%20\${url}\`;
          break;
        case 'mail':
          href = \`mailto:?subject=%22\${text}%22&body=\${text}%20\${url}\`;
          break;

        default:
          return;
      }

      const newlink = document.createElement('a');
      newlink.target = '_blank';
      newlink.href = href;
      newlink.click();
    });

    const screenSize = window.matchMedia('(max-width: 767px)');
    screenSize.addEventListener('change', function () {
      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');
      document.body.classList.remove('overflow-hidden');
      document.getElementById('header')?.classList.remove('h-screen');
      document.getElementById('header')?.classList.remove('expanded');
      document.getElementById('header')?.classList.remove('bg-page');
      document.querySelector('#header nav')?.classList.add('hidden');
      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');
    });

    function applyHeaderStylesOnScroll() {
      const header = document.querySelector('#header[data-aw-sticky-header]');
      if (!header) return;
      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {
        header.classList.add('scroll');
      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {
        header.classList.remove('scroll');
      }
      ticking = false;
    }
    applyHeaderStylesOnScroll();

    attachEvent([document], 'scroll', function () {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          applyHeaderStylesOnScroll();
        });
        ticking = true;
      }
    });
  };
  const onPageShow = function () {
    document.documentElement.classList.add('motion-safe:scroll-smooth');
    const elem = document.querySelector('[data-aw-toggle-menu]');
    if (elem) {
      elem.classList.remove('expanded');
    }
    document.body.classList.remove('overflow-hidden');
    document.getElementById('header')?.classList.remove('h-screen');
    document.getElementById('header')?.classList.remove('expanded');
    document.querySelector('#header nav')?.classList.add('hidden');
  };

  window.onload = onLoad;
  window.onpageshow = onPageShow;

  document.addEventListener('astro:after-swap', () => {
    initTheme();
    onLoad();
    onPageShow();
  });

  }
})();<\/script><script>
  /* Inspired by: https://github.com/heidkaemper/tailwindcss-intersect */
  const Observer = {
    observer: null,
    delayBetweenAnimations: 100,
    animationCounter: 0,
    elements: null,

    start(isNavigation) {
      if (this.observer) {
        this.observer.disconnect();
      }

      this.animationCounter = 0;

      const selectors = [
        '[class*=" intersect:"]',
        '[class*=":intersect:"]',
        '[class^="intersect:"]',
        '[class="intersect"]',
        '[class*=" intersect "]',
        '[class^="intersect "]',
        '[class$=" intersect"]',
      ];

      this.elements = Array.from(document.querySelectorAll(selectors.join(',')));

      const getThreshold = (element) => {
        if (element.classList.contains('intersect-full')) return 0.99;
        if (element.classList.contains('intersect-half')) return 0.5;
        if (element.classList.contains('intersect-quarter')) return 0.25;
        return 0;
      };

      this.elements.forEach((el) => {
        el.setAttribute('no-intersect', '');
        el._intersectionThreshold = getThreshold(el);
      });

      if (isNavigation) {
        const vh = window.innerHeight;
        this.elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh && rect.bottom > 0) {
            el.removeAttribute('no-intersect');
            el.setAttribute('data-animated', 'true');
            el.style.animationDuration = '0s';
          }
        });
      }

      const callback = (entries) => {
        entries.forEach((entry) => {
          requestAnimationFrame(() => {
            const target = entry.target;
            const intersectionRatio = entry.intersectionRatio;
            const threshold = target._intersectionThreshold;

            if (target.classList.contains('intersect-no-queue')) {
              if (entry.isIntersecting) {
                target.removeAttribute('no-intersect');
                if (target.classList.contains('intersect-once')) {
                  this.observer.unobserve(target);
                }
              } else {
                target.setAttribute('no-intersect', '');
              }
              return;
            }

            if (intersectionRatio >= threshold) {
              if (!target.hasAttribute('data-animated')) {
                target.removeAttribute('no-intersect');
                target.setAttribute('data-animated', 'true');
                target.style.animationDuration = '';

                const delay = this.animationCounter * this.delayBetweenAnimations;
                this.animationCounter++;

                target.style.transitionDelay = \`\${delay}ms\`;
                target.style.animationDelay = \`\${delay}ms\`;

                if (target.classList.contains('intersect-once')) {
                  this.observer.unobserve(target);
                }
              }
            } else {
              target.setAttribute('no-intersect', '');
              target.removeAttribute('data-animated');
              target.style.transitionDelay = '';
              target.style.animationDelay = '';
              target.style.animationDuration = '';

              this.animationCounter = 0;
            }
          });
        });
      };

      this.observer = new IntersectionObserver(callback, { threshold: [0, 0.25, 0.5, 0.99] });

      this.elements.forEach((el) => {
        if (!el.hasAttribute('data-animated')) {
          this.observer.observe(el);
        }
      });
    },

    /*
      REF: #643;
      We need to remove the delay to fix flickering/delay
      when toggling the theme. Observer only removes them
      after data-animated is gone (out of view).
    */
    removeAnimationDelay() {
      this.elements.forEach((el) => {
        if (el.getAttribute('data-animated') === 'true') {
          el.style.transitionDelay = '';
          el.style.animationDelay = '';
        }
      });
    },
  };

  Observer.start(false);

  document.addEventListener('astro:after-swap', () => {
    Observer.start(true);
  });
<\/script>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/BasicScripts.astro", void 0);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/ClientRouter.astro
createAstro("https://coolerparts.example.com");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://coolerparts.example.com");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { metadata = {} } = Astro.props;
	const { language, textDirection } = I18N;
	return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"><head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}<link rel="preconnect" href="https://images.unsplash.com"><!-- Comment the line below to disable View Transitions -->${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "swap" })}${renderHead($$result)}</head><body class="antialiased text-default bg-page tracking-tight">${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}</body></html>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/layouts/Layout.astro", void 0);
//#endregion
export { renderScript as i, findImage as n, $$Image as r, $$Layout as t };
