# Production operations runbook

This runbook is for the Hostinger deployment of `aircoolerparts.com`. It cannot guarantee zero downtime; its purpose is to detect failures quickly and make recovery repeatable.

## Release gate

Before every deployment:

1. Work from a reviewed Git commit and keep the previous working commit/tag.
2. Use Node.js `22.12.0` and run `npm ci`, `npm run check`, `npm run check:prettier`, and `npm run build`.
3. Confirm that `dist/api/submit-inquiry.php`, `dist/api/health.php`, and `dist/.htaccess` exist.
4. Deploy the complete `dist` output without deleting the private `data` directory.
5. Check the URLs listed below. Do not perform a real inquiry POST unless the recipient has approved the test email.

Rollback means redeploying the previous known-good `dist` artifact. Never roll back or overwrite the private `data` directory.

## Monitoring

Configure an external uptime monitor from a provider independent of Hostinger:

| Check                                          | Expected                     | Interval  |
| ---------------------------------------------- | ---------------------------- | --------- |
| `https://aircoolerparts.com/`                  | HTTP 200 and page text       | 5 minutes |
| `https://aircoolerparts.com/api/health.php`    | HTTP 200 and `"status":"ok"` | 5 minutes |
| `https://aircoolerparts.com/sitemap-index.xml` | HTTP 200                     | 1 hour    |
| TLS certificate expiry                         | More than 21 days            | Daily     |

Send alerts to at least two channels, such as email plus mobile messaging. A health failure means PHP or private storage is unavailable even if the static homepage still works.

Review Hostinger/PHP error logs weekly. Alert-worthy text includes `EVAPFit:`, `PHP Fatal`, storage failures, and repeated HTTP 429/5xx responses.

## Inquiry verification

After a deployment that changes the form or PHP:

1. Get approval to send one clearly labeled test inquiry.
2. Confirm the browser receives a 303 redirect to the success page.
3. Confirm a new line appears in the current `data/inquiries/YYYY-MM.ndjson` file.
4. Confirm `rfq@aircoolerparts.com` receives the notification and Reply-To is the submitted address.
5. Confirm the same inquiry ID exists in both the stored record and email.

The stored record is the source of truth. A mail failure is logged and must not erase the inquiry.

## Backup and restore

Back up both of these independently:

- Git repository and the exact deployed `dist` artifact
- Private `data` directory, including legacy `inquiries.json`, monthly NDJSON files, and rate-limit state

Recommended retention: daily backups for 30 days, monthly backups for 12 months, and one encrypted offline copy. Keep customer inquiry data access-restricted because it contains personal information.

Every quarter, restore a backup into a non-public temporary directory and verify:

1. Files can be listed and decompressed/decrypted.
2. Every non-empty line in each `.ndjson` file parses as JSON.
3. A sample inquiry contains an ID, timestamp, name, and email.
4. The restored site artifact builds or serves successfully.

Do not call a backup strategy complete until this restore drill succeeds.

## Monthly maintenance

- Review and merge Dependabot patch/minor updates only after CI passes.
- Handle major updates separately and test them before production.
- Review disk usage, PHP/Apache logs, failed notification logs, and uptime history.
- Confirm domain, hosting plan, SSL, and mailbox renewals have valid payment and contact details.
- Export Search Console coverage/security reports and investigate sudden crawl or traffic drops.

## Incident response

1. Preserve logs and note the first failure time; do not repeatedly redeploy without evidence.
2. If only the form is failing, verify `/api/health.php`, storage permissions, disk quota, and PHP logs.
3. If a new release caused the issue, redeploy the previous artifact while preserving `data`.
4. If storage is corrupted, take a copy first, then restore the newest verified backup.
5. After recovery, perform one approved end-to-end inquiry test and record the cause and corrective action.
