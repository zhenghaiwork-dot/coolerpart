//#region src/assets/images/hero-image.png
var hero_image_default = new Proxy({
	"src": "/_astro/hero-image.DwIC_L_T.png",
	"width": 1600,
	"height": 939,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/hero-image.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/hero-image.png");
	return target[name];
} });
//#endregion
export { hero_image_default as default };
