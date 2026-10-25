// @ts-check
import { defineConfig } from 'astro/config';

// The public address, used for canonical URLs and link previews. Vercel provides the production
// domain during its builds; set SITE_URL to override it (for example with a custom domain).
/** @type {Record<string, string | undefined>} */
const env = /** @type {any} */ (globalThis).process?.env ?? {};
const site =
  env.SITE_URL ??
  (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

export default defineConfig({
  site,
  // The résumé is the PDF itself; /resume is kept as a short link to it.
  redirects: {
    '/resume': '/resume.pdf',
  },
});
