//#region src/assets/images/default.png
var default_default = new Proxy({
	"src": "/_astro/default.CZ816Hke.png",
	"width": 2400,
	"height": 1256,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/default.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/default.png");
	return target[name];
} });
//#endregion
export { default_default as default };
