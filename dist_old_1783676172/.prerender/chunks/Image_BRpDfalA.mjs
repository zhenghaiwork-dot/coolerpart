import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, t as spreadAttributes, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import { n as findImage, r as $$Image$1 } from "./Layout_DEwJA1GM.mjs";
import { parseUrl, transformUrl } from "unpic";
//#region src/components/common/Image.astro
createAstro("https://coolerparts.example.com");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Image;
	const { src, alt, width, height, widths, format, layout = "constrained", ...rest } = Astro.props;
	if (alt === void 0 || alt === null) throw new Error(`Image: missing required \`alt\` prop (src=${String(src)}). Pass alt="" explicitly for decorative images.`);
	const toNumber = (v) => typeof v === "string" ? Number.isFinite(Number(v)) ? Number(v) : void 0 : v;
	let w = toNumber(width);
	let h = toNumber(height);
	rest.loading ??= "lazy";
	rest.decoding ??= "async";
	const resolved = await findImage(src);
	const isCdnUrl = typeof resolved === "string" && (resolved.startsWith("http://") || resolved.startsWith("https://")) && parseUrl(resolved) !== void 0;
	if (resolved && typeof resolved === "object" && "width" in resolved && "height" in resolved) {
		const { width: srcW, height: srcH } = resolved;
		if (!w && !h) {
			w = srcW;
			h = srcH;
		} else if (w && !h) h = Math.round(w * srcH / srcW);
		else if (h && !w) w = Math.round(h * srcW / srcH);
	}
	const aspectRatio = w && h ? w / h : void 0;
	const px = (v) => v == null ? void 0 : `${v}px`;
	const declarations = [["object-fit", "cover"], ["object-position", "center"]];
	switch (layout) {
		case "fixed":
			declarations.push(["width", px(w)], ["height", px(h)], ["object-position", "top left"]);
			break;
		case "constrained":
			declarations.push(["max-width", px(w)], ["max-height", px(h)], ["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0], ["width", "100%"]);
			break;
		case "fullWidth":
			declarations.push(["width", "100%"], ["height", px(h)]);
			break;
		case "responsive":
			declarations.push(["width", "100%"], ["height", "auto"], ["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
			break;
		case "cover":
			declarations.push(["max-width", "100%"], ["max-height", "100%"]);
			break;
	}
	const finalStyle = declarations.filter(([, value]) => value).map(([key, value]) => `${key}:${value}`).join(";") + (rest.style ? `;${rest.style}` : "");
	const buildCdnUrl = (variantWidth, variantHeight) => transformUrl({
		url: resolved,
		width: variantWidth,
		height: variantHeight,
		fallback: "astro"
	})?.toString();
	const CDN_BREAKPOINTS = [
		320,
		400,
		500,
		640,
		720,
		828,
		960,
		1080,
		1200,
		1440,
		1600,
		1920,
		2048
	];
	const expandWidths = (raw) => {
		if (!Array.isArray(raw) || raw.length === 0) return raw;
		const min = Math.min(...raw);
		const max = Math.max(...raw);
		const extras = CDN_BREAKPOINTS.filter((bp) => bp > min && bp < max);
		return [.../* @__PURE__ */ new Set([...raw, ...extras])].sort((a, b) => a - b);
	};
	const heightFromWidth = (variantWidth) => aspectRatio ? Math.round(variantWidth / aspectRatio) : void 0;
	const cdnSrc = isCdnUrl ? buildCdnUrl(w, h) : void 0;
	const cdnWidths = isCdnUrl ? expandWidths(widths) : void 0;
	const cdnSrcSet = isCdnUrl && cdnWidths?.length ? cdnWidths.map((bw) => `${buildCdnUrl(bw, heightFromWidth(bw))} ${bw}w`).join(", ") : void 0;
	return renderTemplate`${isCdnUrl ? renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(cdnSrc, "src")}${addAttribute(cdnSrcSet, "srcset")}${addAttribute(w, "width")}${addAttribute(h, "height")}${addAttribute(alt, "alt")} crossorigin="anonymous" referrerpolicy="no-referrer"${spreadAttributes(rest)}${addAttribute(finalStyle, "style")}>` : resolved && renderTemplate`${renderComponent($$result, "AstroImage", $$Image$1, {
		...rest,
		src: resolved,
		width: w,
		height: h,
		alt,
		widths,
		format,
		style: finalStyle
	})}`}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/common/Image.astro", void 0);
//#endregion
export { $$Image as t };
