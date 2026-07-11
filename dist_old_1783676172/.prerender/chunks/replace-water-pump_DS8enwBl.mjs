import { m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_DEwJA1GM.mjs";
import { i as $$Icon } from "./Footer_BCFP2GBT.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_CvBfye5u.mjs";
import { t as __exportAll } from "./startup_Be6THNbx.mjs";
//#region src/pages/guides/replace-water-pump.astro
var replace_water_pump_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ReplaceWaterPump,
	file: () => $$file,
	url: () => $$url
});
var $$ReplaceWaterPump = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": {
		title: "How to Replace a Water Pump — CoolerParts Guide",
		ignoreTitleTemplate: true
	} }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"><div class="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20"><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:tools",
		"class": "h-4 w-4"
	})}Troubleshooting Guide</div><h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl">How to Replace a Water Pump in an Evaporative Cooler</h1><p class="mt-4 text-lg text-gray-300">Step-by-step guide for replacing a faulty water pump in cabinet-type evaporative air coolers.</p></div></section><section class="bg-white dark:bg-slate-900"><div class="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16"><div class="prose dark:prose-invert max-w-none space-y-8"><div class="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/10"><p class="text-sm text-amber-800 dark:text-amber-300"><strong>Before you start:</strong> Disconnect power and drain the water tank. Have your replacement pump ready — verify the interface type matches (threaded, push-fit, or hose barb).</p></div><h2>Symptoms of a Failing Water Pump</h2><ul><li>Reduced or no water flow to cooling pads</li><li>Unusual noise or vibration from the pump area</li><li>Water leakage around the pump housing</li><li>Pump runs but water doesn't circulate</li><li>Intermittent operation</li></ul><h2>Step-by-Step Replacement</h2><h3>1. Access the Pump</h3><p>Remove the service panel or access cover on the side or bottom of your cooler. The pump is typically located in the water sump/tank area at the bottom of the unit.</p><h3>2. Disconnect Plumbing</h3><p>Disconnect the water outlet hose or pipe from the pump. Note the connection type — threaded, push-fit, or hose barb. If threaded, unscrew carefully to avoid damaging the threads.</p><h3>3. Remove the Old Pump</h3><p>Unplug the electrical connector from the pump. Remove any mounting screws or brackets. Lift the old pump out of the sump. Check for debris or scale buildup in the sump area.</p><h3>4. Install the New Pump</h3><p>Position the new pump in the sump. Secure with the original mounting method. Reconnect the water outlet — ensure a tight seal to prevent leaks. Plug in the electrical connector.</p><h3>5. Test</h3><p>Refill the water tank to the proper level. Reconnect power and run the pump. Check for proper water flow to the cooling pads and verify there are no leaks at the connections.</p><div class="mt-10 rounded-xl bg-blue-50 p-6 text-center dark:bg-blue-900/20"><h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300">Need a replacement pump?</h3><p class="mt-2 text-sm text-blue-700 dark:text-blue-400">Find your pump by interface type and voltage in our Water System catalog.</p><a href="/water-system/water-pump-power" class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrow-right",
		"class": "h-4 w-4"
	})} Browse Water Pumps</a></div></div></div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/guides/replace-water-pump.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/guides/replace-water-pump.astro";
var $$url = "/guides/replace-water-pump";
//#endregion
//#region \0virtual:astro:page:src/pages/guides/replace-water-pump@_@astro
var page = () => replace_water_pump_exports;
//#endregion
export { page };
