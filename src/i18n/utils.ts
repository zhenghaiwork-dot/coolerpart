import ui, { defaultLang, supportedLocales, type Locale } from './ui';

export { defaultLang, supportedLocales };
export type { Locale };

/** Get a single translation string for a given key and locale. */
export function t(key: string, locale: string = defaultLang): string {
  const safeLocale = supportedLocales.includes(locale as Locale) ? locale : defaultLang;
  const entry = ui[key];
  if (!entry) {
    console.warn(`[i18n] Missing translation key: "${key}"`);
    return key;
  }
  return entry[safeLocale as Locale] ?? entry[defaultLang] ?? key;
}

/** Return a translation function bound to the given locale. */
export function useTranslations(locale: string = defaultLang) {
  return (key: string) => t(key, locale);
}

/** Extract the current locale from an Astro URL. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && supportedLocales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return defaultLang;
}

/** Convert a path (like "/water-system") to the localized version for a given locale. */
export function localePath(path: string, locale: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLang) return cleanPath;
  return `/${locale}${cleanPath}`;
}

/** Get all alternate URLs for the current page across supported locales. */
export function getLocaleUrls(currentPath: string, currentLocale: string): { locale: Locale; url: string }[] {
  // Strip locale prefix from path
  let basePath = currentPath;
  if (currentLocale !== defaultLang && currentPath.startsWith(`/${currentLocale}/`)) {
    basePath = currentPath.slice(currentLocale.length + 1);
  } else if (currentLocale !== defaultLang && currentPath === `/${currentLocale}`) {
    basePath = '/';
  }

  return supportedLocales.map((locale) => ({
    locale,
    url: localePath(basePath, locale),
  }));
}

/** Get HTML lang attribute value for a locale. */
export function getLangAttribute(locale: string): string {
  const map: Record<string, string> = {
    en: 'en',
    ar: 'ar',
    es: 'es',
  };
  return map[locale] || 'en';
}

/** Get text direction for a locale. */
export function getDirection(locale: string): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/** Get site URL from Astro config or fallback. */
export function siteUrl(site?: URL | string): string {
  if (site) return String(site).replace(/\/$/, '');
  return 'https://aircoolerparts.com';
}

/** Prefix a path with the locale for internal links (preserves current locale context). */
export function localeLink(path: string, locale: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLang) return cleanPath;
  return `/${locale}${cleanPath}`;
}

/** Get translated system name by slug. */
export function getSystemName(slug: string, locale: string = defaultLang): string {
  return t(`sys.${slug}`, locale);
}

/** Get translated system short description by slug. */
export function getSystemShortDesc(slug: string, locale: string = defaultLang): string {
  return t(`sys.${slug}.short`, locale);
}

/** Get translated system description by slug. */
export function getSystemDesc(slug: string, locale: string = defaultLang): string {
  return t(`sys.${slug}.desc`, locale);
}

/** Get translated area name by slug. */
export function getAreaName(slug: string, locale: string = defaultLang): string {
  return t(`area.${slug}`, locale);
}

/** Get translated area short description by slug. */
export function getAreaShortDesc(slug: string, locale: string = defaultLang): string {
  return t(`area.${slug}.short`, locale);
}

/** Get product name in the given locale (falls back to English). */
export function getProductName(product: { slug: string; name: string }, locale: string = defaultLang): string {
  const key = `product.name.${product.slug}`;
  const translated = t(key, locale);
  if (translated && translated !== key) return translated;
  return product.name;
}

/** Get product description in the given locale (falls back to English). */
export function getProductDescription(product: { slug: string; description: string }, locale: string = defaultLang): string {
  const key = `product.desc.${product.slug}`;
  const translated = t(key, locale);
  if (translated && translated !== key) return translated;
  return product.description;
}

/** Get translated feature title for a product (falls back to English). */
export function getProductFeatureTitle(productSlug: string, featureTitle: string, locale: string = defaultLang): string {
  const sanitized = featureTitle.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  const key = `product.feature.${productSlug}.${sanitized}`;
  const translated = t(key, locale);
  if (translated && translated !== key) return translated;
  return featureTitle;
}

/** Get translated feature description for a product (falls back to English). */
export function getProductFeatureDesc(productSlug: string, featureTitle: string, locale: string = defaultLang): string {
  const sanitized = featureTitle.replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  const key = `product.feature_desc.${productSlug}.${sanitized}`;
  const translated = t(key, locale);
  if (translated && translated !== key) return translated;
  return '';
}

/** Get product spec value in the given locale (falls back to English). */
export function getProductSpec(slug: string, label: string, value: string, locale: string = defaultLang): string {
  const key = `product.spec.${slug}.${label.replace(/[\s\/]+/g, '_').toLowerCase()}`;
  const translated = t(key, locale);
  if (translated && translated !== key) return translated;
  return value;
}

/** Get product type display name for locale. */
export function getProductTypeName(typeSlug: string, locale: string = defaultLang): string {
  return t(`product.type.${typeSlug}`, locale);
}
