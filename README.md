# Air Cooler Parts

Production source for [aircoolerparts.com](https://aircoolerparts.com), a static Astro catalog with a small PHP inquiry endpoint. English, Spanish, and Arabic routes are generated at build time.

## Runtime

- Node.js 22.12.0 for install and build
- PHP 8.1+ for `/api/submit-inquiry.php` and `/api/health.php`
- Apache-compatible hosting for `public/.htaccess`

The final site is generated into `dist/`. The Docker image serves only the static frontend through Nginx and does **not** run the PHP inquiry endpoint; production currently uses Hostinger hosting with PHP enabled.

## Local checks

```sh
npm ci
npm run check
npm run build
```

Start Astro in the repository-prescribed background mode:

```sh
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Production configuration

Optional environment variables:

- `EVAPFIT_NOTIFY_EMAIL`: notification recipient; defaults to `rfq@aircoolerparts.com`
- `EVAPFIT_DATA_DIR`: writable private storage outside the public web root; defaults to the project-level `data` directory

New inquiries are appended to `data/inquiries/YYYY-MM.ndjson`. Any older `data/inquiries.json` is retained as historical data. Neither directory should be committed or exposed by the web server.

See [docs/operations.md](docs/operations.md) for deploy, monitoring, backup, restore, and incident procedures.
