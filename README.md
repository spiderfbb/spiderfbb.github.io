# Portfolio

My portfolio, built with [Astro](https://astro.build). Static HTML and CSS,
with a little JavaScript for the navigation, the contact form and the scroll animations.

## Run it locally

Needs Node.js 22.22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # builds the finished site into dist/
npm run preview   # serves dist/ so you can check the real build
npm run check     # type-checks the project
```

`npm run dev` also shows projects marked `draft: true`. `npm run build` leaves them out.

## Folder structure

```
src/
  data/profile.ts         Your name, school, contact links, about text and skills
  data/areas.ts           The work areas a project or skill can belong to
  data/icons.ts           The skill logos (Simple Icons paths)
  content.config.ts       The fields every project and activity must have
  content/projects/       One Markdown file per project, plus its screenshots in images/<project>/
  content/activities.json Organizations, seminars, certifications and competitions
  components/             The page sections (Navbar, Hero, About, Projects, Skills, Activities,
                          Contact, Footer) and small parts (Backdrop, ProjectCard, ContactForm)
  layouts/Base.astro      The HTML shell: SEO and link-preview tags, fonts
  pages/                  index (home), projects/[slug] (one page per project), 404
  styles/global.css       Colours, type sizes, buttons, links, motion, the film-grain atmosphere
  assets/                 Your photo (profile.jpg) and the display font source
public/
  fonts/                  Eternalo, the display font, self-hosted
  resume.pdf              The file behind "Download résumé" (PDF of BALDANO-Frederick-CV-2026.docx)
  og.png                  The picture shown when the link is shared (1200×630)
```

## Keeping it up to date

1. **`src/data/profile.ts`:** name, school, contact links, About text and skills. Keep them in line
   with the résumé.
2. **Your photo:** `src/assets/profile.jpg`. The landing screen shows it on a tilted playing card.
3. **`public/resume.pdf`:** your résumé, exported from `BALDANO-Frederick-CV-2026.docx` in this folder.
   After editing the Word file, save it as PDF over `public/resume.pdf`. `/resume` links to it too.
4. **`src/content/activities.json`:** empty for now, so the Activities section and its menu link are
   hidden. Add a real entry (see below) and they appear. Until then the build warns that the
   collection is empty; that is expected.
5. **Site address:** the live site is <https://spiderfbb.github.io/>, published by
   `.github/workflows/deploy.yml` on every push to `main` (it sets `SITE_URL`). On Vercel the address
   is picked up automatically; with a custom domain, change `SITE_URL` so link previews use it.
6. **`public/og.png`:** the picture shown when the link is shared. After a visible change to the
   landing screen, take a new 1200×630 screenshot of it.
7. **Optional:** set `formEndpoint` in `profile.ts` (for example a free [Formspree](https://formspree.io)
   form) so messages arrive without opening the visitor's email app.

## Add a new project

1. Put its screenshots in `src/content/projects/images/<project-name>/` (PNG, JPG or WebP; any
   size, Astro resizes and compresses them).
2. Create `src/content/projects/<project-name>.md`. The file name becomes the page address
   (`/projects/<project-name>/`).

```markdown
---
title: Library Booking
kind: Room booking system for the campus library
summary: One sentence on what it does and who it's for.
client: University library
role: Back-end developer
team: Team of 4 # optional
year: 2027
ongoing: false # true = still being built, shown as "2027 – Present"
order: 5 # position in lists; lower comes first
stack: [Laravel, MySQL, Tailwind CSS]
areas: [backend, database] # any of: frontend, backend, database, design
links: # optional
  demo: https://library-booking.example.com
screenshots: # 1 to 3 of the best ones; the first is the main image
  - src: ./images/library-booking/home.png
    alt: Describe what the screenshot shows
draft: false # true = visible only in npm run dev
---

The case study: what problem it solved, what you built, and how it works.
Use ## headings and lists as in the other project files.
```

3. Run `npm run dev` and check the home page and `/projects/<project-name>/`. If a field is missing
   or misspelled, the terminal says which one.

Activities work the same way: add an object to `src/content/activities.json` with a unique `id`,
`year`, `title`, `by`, a `type` (`Organization`, `Seminar`, `Certification` or `Competition`), and
an optional `result` and `url`.

## Deploy for free

The build output is a plain static site in `dist/`, so any of these work.

**Vercel:** push the project to GitHub, then on [vercel.com](https://vercel.com) choose
*Add New → Project*, import the repository and press *Deploy*. Vercel detects Astro on its own.
Every later push redeploys.

**Netlify:** on [netlify.com](https://app.netlify.com) choose *Add new site → Import an existing
project*, pick the repository, keep the detected settings (`npm run build`, publish directory
`dist`) and deploy.

**GitHub Pages:** in the repository's *Settings → Pages*, set *Source* to *GitHub Actions*. The
included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`. In
`astro.config.mjs`, set `site: 'https://<user>.github.io'`, and if the repository isn't named
`<user>.github.io`, also set `base: '/<repository-name>'`.

After deploying, update `site` in `astro.config.mjs` to the real address and deploy once more.

## Credits

- Typeface: General Sans by Indian Type Foundry, from [Fontshare](https://www.fontshare.com/fonts/general-sans).
