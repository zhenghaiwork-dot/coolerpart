// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

// Fontsource packages ship CSS only (no type declarations); declare them so
// side-effect imports type-check under TypeScript 6 strict (ts2882).
declare module '@fontsource-variable/*';
declare module '@fontsource/*';

// H1 fix: Window globals used by client-side i18n + locale-aware navigation
// in InquiryPage, AllProductsPage, ProductDetailPage components.
declare global {
  interface Window {
    __cpLocale?: string;
    __cpLink?: (p: string) => string;
    __i18n?: Record<string, string>;
  }
}

export {};
