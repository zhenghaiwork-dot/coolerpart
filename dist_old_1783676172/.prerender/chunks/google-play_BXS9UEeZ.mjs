//#region src/assets/images/google-play.png
var google_play_default = new Proxy({
	"src": "/_astro/google-play.ISTMcpLO.png",
	"width": 300,
	"height": 89,
	"format": "png"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/google-play.png";
	if (target[name] !== void 0 && globalThis.astroAsset) globalThis.astroAsset?.referencedImages?.add("D:/Dev/CoolerPartsNew/coolerparts/src/assets/images/google-play.png");
	return target[name];
} });
//#endregion
export { google_play_default as default };
