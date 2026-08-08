import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  i18n: {
    locales: ['en', 'ar', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Legacy /systems/* URLs are static noindex redirects to the canonical
      // root-level taxonomy. Redirect URLs and the private CMS shell should
      // not compete with content pages in the sitemap.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !/^\/(?:ar\/|es\/)?systems\//.test(pathname) && !pathname.startsWith('/decapcms');
      },
      // Generate hreflang alternate links so search engines know that
      // /about, /ar/about and /es/about are the same page in three
      // languages. Locale keys must match the Astro i18n routing config
      // (locales above). Values are BCP 47 language tags emitted as hreflang.
      // Language-only tags (`ar`, `es`) are used because the site ships a
      // single version per language — no regional differentiation to express.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ar: 'ar',
          es: 'es',
        },
      },
      // The i18n option above emits hreflang alternate links for en/ar/es
      // but does NOT add an `x-default` entry. For a global B2B audience
      // the default-language (English) page should be the fallback served
      // to visitors whose locale matches none of the localized versions.
      // Google explicitly recommends `x-default` for exactly this case.
      // Here we append one `x-default` link per URL group, pointing to the
      // English (default, non-prefixed) version of that page.
      serialize(item) {
        if (item.links && item.links.length > 0) {
          const enLink = item.links.find((l) => l.lang === 'en');
          if (enLink) {
            const hasXDefault = item.links.some(
              (l) => l.lang === 'x-default' || l.hreflang === 'x-default'
            );
            if (!hasXDefault) {
              item.links.push({ lang: 'x-default', url: enLink.url });
            }
          }
        }
        return item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // Tailwind CSS v4 emits modern range media queries (for example,
      // `@media (width >= 48rem)`). The CSS optimizer used by
      // astro-compress currently drops those queries in production, which
      // removes every responsive utility and leaves the site in its
      // mobile-first layout. Vite already minifies the generated CSS.
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    domains: ['cdn.pixabay.com', 'cdn.aircoolerparts.com'],
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
