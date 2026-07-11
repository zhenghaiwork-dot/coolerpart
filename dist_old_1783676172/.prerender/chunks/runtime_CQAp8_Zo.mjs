import { S as InvalidComponentArgs, t as AstroError } from "./errors_95H_i_4D.mjs";
import { O as unescapeHTML, _ as generateCspDigest, m as renderTemplate, t as spreadAttributes } from "./server_DvF4bWil.mjs";
import slugify from "limax";
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region \0astrowind:config
var SITE = {
	"name": "CoolerParts",
	"site": "https://coolerparts.example.com",
	"base": "/",
	"trailingSlash": false,
	"googleSiteVerificationId": ""
};
var I18N = {
	"language": "en",
	"textDirection": "ltr"
};
var METADATA = {
	"title": {
		"default": "CoolerParts — Evaporative Cooler Replacement Parts",
		"template": "%s — CoolerParts"
	},
	"description": "B2B inquiry platform for evaporative cooler replacement parts. Find compatible pumps, motors, cooling pads, valves, and more by interface, dimensions, or electrical specs.",
	"robots": {
		"index": true,
		"follow": true
	},
	"openGraph": {
		"type": "website",
		"site_name": "AstroWind",
		"images": [{
			"url": "~/assets/images/default.png",
			"width": 1200,
			"height": 628
		}]
	},
	"twitter": {
		"handle": "@arthelokyo",
		"site": "@arthelokyo",
		"cardType": "summary_large_image"
	}
};
var APP_BLOG = {
	"isEnabled": false,
	"postsPerPage": 6,
	"isRelatedPostsEnabled": true,
	"relatedPostsCount": 4,
	"post": {
		"isEnabled": true,
		"permalink": "/%slug%",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"list": {
		"isEnabled": true,
		"pathname": "blog",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"category": {
		"isEnabled": true,
		"pathname": "category",
		"robots": {
			"index": true,
			"follow": true
		}
	},
	"tag": {
		"isEnabled": true,
		"pathname": "tag",
		"robots": {
			"index": false,
			"follow": true
		}
	}
};
var UI = { "theme": "system" };
var ANALYTICS = { "vendors": { "googleAnalytics": {
	"id": null,
	"partytown": true
} } };
//#endregion
//#region src/utils/utils.ts
var formatter = new Intl.DateTimeFormat(I18N?.language, {
	year: "numeric",
	month: "short",
	day: "numeric",
	timeZone: "UTC"
});
var getFormattedDate = (date) => date ? formatter.format(date) : "";
var trim = (str = "", ch) => {
	let start = 0, end = str.length || 0;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};
//#endregion
//#region src/utils/permalinks.ts
var trimSlash = (s) => trim(trim(s, "/"));
var createPath = (...params) => {
	const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
	return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};
var BASE_PATHNAME = SITE.base || "/";
var cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
var BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
var CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
var TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
var POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
/** */
var getCanonical = (path = "") => {
	const url = String(new URL(path, SITE.site));
	if (SITE.trailingSlash == false && path && url.endsWith("/")) return url.slice(0, -1);
	else if (SITE.trailingSlash == true && path && !url.endsWith("/")) return url + "/";
	return url;
};
/** */
var getPermalink = (slug = "", type = "page") => {
	let permalink;
	if (slug.startsWith("https://") || slug.startsWith("http://") || slug.startsWith("://") || slug.startsWith("#") || slug.startsWith("javascript:")) return slug;
	switch (type) {
		case "home":
			permalink = getHomePermalink();
			break;
		case "blog":
			permalink = getBlogPermalink();
			break;
		case "asset":
			permalink = getAsset(slug);
			break;
		case "category":
			permalink = createPath(CATEGORY_BASE, trimSlash(slug));
			break;
		case "tag":
			permalink = createPath(TAG_BASE, trimSlash(slug));
			break;
		case "post":
			permalink = createPath(trimSlash(slug));
			break;
		default:
			permalink = createPath(slug);
			break;
	}
	return definitivePermalink(permalink);
};
/** */
var getHomePermalink = () => getPermalink("/");
/** */
var getBlogPermalink = () => getPermalink(BLOG_BASE);
/** */
var getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
/** */
var definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);
//#endregion
//#region node_modules/.pnpm/astro@7.0.7_@astrojs+markdo_c369546db944dabd34549c51ef4ba606/node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
export { METADATA as _, TAG_BASE as a, createComponent as b, getBlogPermalink as c, getPermalink as d, trimSlash as f, I18N as g, APP_BLOG as h, POST_PERMALINK_PATTERN as i, getCanonical as l, ANALYTICS as m, BLOG_BASE as n, cleanSlug as o, getFormattedDate as p, CATEGORY_BASE as r, getAsset as s, createSvgComponent as t, getHomePermalink as u, SITE as v, UI as y };
