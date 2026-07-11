import { A as createAstro, b as addAttribute, m as renderTemplate, o as renderComponent, v as maybeRenderHead } from "./server_DvF4bWil.mjs";
import { b as createComponent } from "./runtime_CQAp8_Zo.mjs";
import "./Layout_BPWRV8yA.mjs";
import { i as $$Icon } from "./Footer_DU4vtWH2.mjs";
import { t as $$InquiryLayout } from "./InquiryLayout_BB0yaSci.mjs";
import { a as productsData } from "./products_pk0GXAz-.mjs";
import { t as systemsData } from "./systems_blIFLfkM.mjs";
import { t as __exportAll } from "./startup_DSxiSYRv.mjs";
//#region src/components/inquiry/CategoryCard.astro
createAstro("https://coolerparts.example.com");
var $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CategoryCard;
	const { system } = Astro.props;
	const colorMap = {
		blue: {
			bg: "bg-blue-50 dark:bg-blue-950/30",
			hover: "hover:bg-blue-100 dark:hover:bg-blue-950/50",
			text: "text-blue-700 dark:text-blue-300",
			border: "border-blue-200 dark:border-blue-800",
			iconBg: "bg-blue-100 dark:bg-blue-900/50",
			iconColor: "text-blue-600 dark:text-blue-400"
		},
		emerald: {
			bg: "bg-emerald-50 dark:bg-emerald-950/30",
			hover: "hover:bg-emerald-100 dark:hover:bg-emerald-950/50",
			text: "text-emerald-700 dark:text-emerald-300",
			border: "border-emerald-200 dark:border-emerald-800",
			iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
			iconColor: "text-emerald-600 dark:text-emerald-400"
		},
		cyan: {
			bg: "bg-cyan-50 dark:bg-cyan-950/30",
			hover: "hover:bg-cyan-100 dark:hover:bg-cyan-950/50",
			text: "text-cyan-700 dark:text-cyan-300",
			border: "border-cyan-200 dark:border-cyan-800",
			iconBg: "bg-cyan-100 dark:bg-cyan-900/50",
			iconColor: "text-cyan-600 dark:text-cyan-400"
		},
		amber: {
			bg: "bg-amber-50 dark:bg-amber-950/30",
			hover: "hover:bg-amber-100 dark:hover:bg-amber-950/50",
			text: "text-amber-700 dark:text-amber-300",
			border: "border-amber-200 dark:border-amber-800",
			iconBg: "bg-amber-100 dark:bg-amber-900/50",
			iconColor: "text-amber-600 dark:text-amber-400"
		},
		slate: {
			bg: "bg-slate-50 dark:bg-slate-800/30",
			hover: "hover:bg-slate-100 dark:hover:bg-slate-800/50",
			text: "text-slate-700 dark:text-slate-300",
			border: "border-slate-200 dark:border-slate-700",
			iconBg: "bg-slate-100 dark:bg-slate-800/50",
			iconColor: "text-slate-600 dark:text-slate-400"
		},
		stone: {
			bg: "bg-stone-50 dark:bg-stone-800/30",
			hover: "hover:bg-stone-100 dark:hover:bg-stone-800/50",
			text: "text-stone-700 dark:text-stone-300",
			border: "border-stone-200 dark:border-stone-700",
			iconBg: "bg-stone-100 dark:bg-stone-800/50",
			iconColor: "text-stone-600 dark:text-stone-400"
		},
		violet: {
			bg: "bg-violet-50 dark:bg-violet-950/30",
			hover: "hover:bg-violet-100 dark:hover:bg-violet-950/50",
			text: "text-violet-700 dark:text-violet-300",
			border: "border-violet-200 dark:border-violet-800",
			iconBg: "bg-violet-100 dark:bg-violet-900/50",
			iconColor: "text-violet-600 dark:text-violet-400"
		}
	};
	const colors = colorMap[system.color] || colorMap.blue;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/${system.slug}`, "href")}${addAttribute(`group relative flex flex-col overflow-hidden rounded-2xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`, "class")}><!-- Top accent bar --><div${addAttribute(`h-1.5 w-full ${colors.iconBg}`, "class")}></div><!-- Content area --><div class="flex flex-col items-center text-center p-8 md:p-10"><!-- Icon circle --><div${addAttribute(`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.iconColor} transition-transform duration-300 group-hover:scale-110`, "class")}>${renderComponent($$result, "Icon", $$Icon, {
		"name": system.icon,
		"class": "h-10 w-10"
	})}</div><!-- System name --><h3${addAttribute(`text-xl font-bold tracking-tight mb-2 ${colors.text}`, "class")}>${system.name}</h3><!-- Short description --><p class="text-sm text-muted leading-relaxed mb-4 line-clamp-2">${system.shortDesc}</p><!-- Area count badge --><span${addAttribute(`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${colors.iconBg} ${colors.iconColor}`, "class")}>${system.areas.length} Categories</span></div></a>`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/components/inquiry/CategoryCard.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const metadata = {
		title: "Evaporative Cooler Parts — B2B Inquiry Platform",
		ignoreTitleTemplate: true
	};
	const featuredSystems = systemsData;
	const totalProducts = productsData.length;
	const totalCategories = systemsData.reduce((sum, s) => sum + s.areas.length, 0);
	return renderTemplate`${renderComponent($$result, "Layout", $$InquiryLayout, { "metadata": metadata }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white"><!-- Decorative grid pattern --><div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEwIDBoMXY0ME0wIDEwaDQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-40"></div><div class="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36"><div class="mx-auto max-w-3xl text-center"><!-- Badge --><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:building-factory",
		"class": "h-4 w-4"
	})}B2B Direct Inquiry Platform</div><!-- Main heading --><h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Evaporative Cooler<span class="block text-blue-400">Replacement Parts</span></h1><!-- Subtitle --><p class="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">Find compatible replacement components for portable and cabinet evaporative air coolers. Interface-matched parts — no model number needed.</p><!-- CTA buttons --><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/water-system" class="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:search",
		"class": "h-5 w-5"
	})}Browse by System</a><a href="/compatibility" class="inline-flex items-center gap-2 rounded-xl border border-gray-500/50 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-gray-400">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:arrows-exchange",
		"class": "h-5 w-5"
	})}Find by Compatibility</a></div><!-- Quick stats --><div class="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"><div class="text-center"><div class="text-2xl font-bold text-white">${totalCategories}</div><div class="text-sm text-gray-400">Part Categories</div></div><div class="text-center"><div class="text-2xl font-bold text-white">${totalProducts}+</div><div class="text-sm text-gray-400">Available Parts</div></div><div class="text-center"><div class="text-2xl font-bold text-white">${systemsData.length}</div><div class="text-sm text-gray-400">Main Systems</div></div></div></div></div></section><section class="relative bg-gray-50 dark:bg-slate-900"><div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28"><!-- Section header --><div class="mx-auto max-w-2xl text-center mb-12 sm:mb-16"><span class="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-4">Product Categories</span><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Find Parts by System</h2><p class="mt-4 text-lg text-muted">Select your system below to browse compatible replacement parts. All components organized by function and interface type.</p></div><!-- Category cards grid — 3 columns on desktop, 2 on tablet, 1 on mobile --><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">${featuredSystems.map((system) => renderTemplate`${renderComponent($$result, "CategoryCard", $$CategoryCard, { "system": system })}`)}</div></div></section><section class="relative bg-white dark:bg-slate-800/50"><div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"><div class="mx-auto max-w-2xl text-center mb-12 sm:mb-16"><h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">How It Works</h2><p class="mt-4 text-lg text-muted">Simple 3-step process to get the parts you need</p></div><div class="grid gap-8 md:grid-cols-3"><!-- Step 1 --><div class="relative text-center"><div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:search",
		"class": "h-8 w-8 text-blue-600 dark:text-blue-400"
	})}</div><div class="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</div><h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Find Your Part</h3><p class="text-sm text-muted">Browse by system or search by interface type, dimensions, or electrical specs.</p></div><!-- Step 2 --><div class="relative text-center"><div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:clipboard-list",
		"class": "h-8 w-8 text-emerald-600 dark:text-emerald-400"
	})}</div><div class="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">2</div><h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Add to Inquiry List</h3><p class="text-sm text-muted">Select parts and build your inquiry list. Review and modify at any time.</p></div><!-- Step 3 --><div class="relative text-center"><div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/30">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:send",
		"class": "h-8 w-8 text-amber-600 dark:text-amber-400"
	})}</div><div class="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">3</div><h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Request a Quote</h3><p class="text-sm text-muted">Add contact details and submit. We'll respond with MOQ, pricing, and lead time.</p></div></div></div></section><section class="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 sm:py-20"><div class="mx-auto max-w-3xl px-4 text-center sm:px-6"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Need Help Finding the Right Part?</h2><p class="mt-4 text-lg text-blue-100">Our team can help identify the correct replacement based on your current part's measurements and specifications.</p><div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/inquiry" class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-blue-700 transition-all hover:bg-blue-50">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:mail",
		"class": "h-5 w-5"
	})}Submit General Inquiry</a><a href="/compatibility" class="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10">${renderComponent($$result, "Icon", $$Icon, {
		"name": "tabler:book",
		"class": "h-5 w-5"
	})}Compatibility Guide</a></div></div></section>` })}`;
}, "D:/Dev/CoolerPartsNew/coolerparts/src/pages/index.astro", void 0);
var $$file = "D:/Dev/CoolerPartsNew/coolerparts/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
