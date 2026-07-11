//#region src/assets/images/app-store.png
var app_store_default = new Proxy({
	"src": "/_astro/app-store.t3tG4Jz3.png",
	"width": 300,
	"height": 89,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/app-store.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/app-store.png");
	return target[name];
} });
//#endregion
export { app_store_default as default };
