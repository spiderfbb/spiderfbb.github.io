# Portfolio

Astro 7 static site: an IT student's portfolio. The site itself must never mention OJT or internships. Run with `npm run dev`
(http://localhost:4321); `npm run build` then `npm run preview` to check the real build. The
README has the folder structure and how to add projects.

## Content

- Personal details, About text and skills: `src/data/profile.ts`. The site is ready to deploy:
  no placeholders, sample entries or "unfinished" notes anywhere a visitor can see. School, email
  and LinkedIn come from the owner's résumé. The owner's photo is `src/assets/profile.jpg`.
- Projects: Markdown in `src/content/projects/`, schema in `src/content.config.ts`.
  Two projects: Perfume Costing (`C:\xampp\htdocs\costing calculator`) and CastDeck
  (`C:\xampp\htdocs\castdeck`). The owner removed RENTKEL from the site on 2026-10-25; don't add it
  back. Screenshots are real captures of those projects. Perfume Costing shows the current Vue app,
  not `legacy/`, and links to the live app (`links.demo`). CastDeck is the esports broadcast system
  (formerly "Esports Broadcast Overlay"); its screenshots come from `castdeck/docs/screenshots`.
  Say "esports", never MLBB or Mobile Legends. Each project shows at most 3 screenshots (cover plus
  2 highlights), the best-looking ones, and no videos.
- Activities: `src/content/activities.json`, empty for now, so the section and its nav link are
  hidden (the build warns that the collection is empty; that's expected). Add only real entries.
- Résumé: `BALDANO-Frederick-CV-2026.docx` (the owner's own Word CV, edited by the owner) exported
  to `public/resume.pdf`, the "Download résumé" file (`/resume` redirects to it). It is the source
  of truth for facts on the site. It lists RENT-KEL, CastDeck and Hospital Network System, not
  Perfume Costing; the site shows Perfume Costing and CastDeck. Keep it one page; update both
  files together.
- Never invent achievements, certifications or roles. Leave out what isn't known instead of
  showing a placeholder.
- `public/og.png` is a 1200×630 screenshot of the landing screen; retake it after visible changes.
- Live at https://spiderfbb.github.io/ (repo spiderfbb/spiderfbb.github.io, GitHub Pages via
  `.github/workflows/deploy.yml`, which sets `SITE_URL`). Otherwise the address comes from
  `VERCEL_PROJECT_PRODUCTION_URL` on Vercel, or `SITE_URL`
  (`astro.config.mjs`).

## Design

The owner rejected the original art-directed layout (too plain, inconsistent spacing, no nav).
The current design, chosen by the owner, is a conventional, polished portfolio:

- Sticky nav bar (brand: a plain white circle plus "Frederick Baldano" in Geist, the same font as the links, section links centred in the bar with active state, Résumé button on the right, phone menu).
- Landing hero: "IT student / Web developer" kicker, then the big silver heading "Hi, I am Frederick"
  (`greeting`) with "Your 4th year BSIT student" (`tagline`) as the italic line under it, then actions
  and links. No "My Portfolio" heading and no intro paragraph in the hero. The photo is on the right
  (max 400px wide), centred above the text on phones (max 300px). Nothing comes between the hero and
  About: the owner rejected fact cards, a "Recently built" marquee and a featured-project block.
  The browser tab title is "Frederick | Portfolio" (other pages: "CastDeck | Frederick | Portfolio").
  No custom tab icon: the owner wants the browser's default icon, so there are no favicon files
  or icon links. The brand marks in the nav and the footer are plain white circles with no
  initials inside.
- About: kicker, heading and subtitle, the hairline with a dot, then a facts list (true facts only,
  no placeholders, no 01/02 numbering) beside a large silver serif pull quote (`aboutLead` in
  `profile.ts`), the paragraphs and two buttons. On one column the story comes before the facts.
  About is about the owner, not the projects: never mention clients (the perfume maker, esports
  tournaments) or what was built for them there, and no "Built for" fact.
- Sections in order: About, Projects (compact cards: cover, title, kind, year; the whole card
  links to the project page; no band or background behind them; no filter),
  Skills (compact: one hairline row per group, tools as pills with the logo in brushed silver and
  the name; no counts and no project names; logos are Simple Icons paths in `src/data/icons.ts`, one tool per entry in
  `profile.ts`; PowerShell and SQL use generic glyphs because Simple Icons has none), Activities (hidden until there are real entries), Contact (card with form).
- Every section uses `.container` (max 1200px) and `.section` (one vertical rhythm). Keep it that way.
- Atmosphere after a reference poster the owner chose: dark only (light mode and the theme toggle were removed on purpose; don't bring them back),
  film grain over the page, thin sweeping curves, sparkles, a hairline with a dot, vertical edge
  captions, small Geist Mono caps labels (`.kicker`, "Selected / Work"), and brushed-silver
  display type (`.silver`). Black and white only, no accent colour. All of it lives in
  `Backdrop.astro` and the "Atmosphere" block of `global.css`.
- Floating liquid-glass nav (`.glass`: blur, light rim, pointer highlight). The hairline with a
  dot belongs to the hero and scrolls away; it must not be fixed/sticky.
- Fonts: Eternalo (`--display`, the owner's font, `public/fonts/eternalo.woff2`) for the hero heading,
  section headings, project titles and big numbers only; Instrument Serif italic (`.accent`) for
  role and subtitle lines; Geist (`--font`) for everything people read; Geist Mono for `.kicker`.
- Paragraphs in `main` are justified; project-card blurbs stay left-aligned (too narrow).
- Projects sit in one row: one column per project on wide screens, a swipeable row below 1100px
  (below 720px while there are only two projects, `.projects--few`).
- Section subtitles are one short line (keep them under about 45 characters).
- The owner's photo and the project screenshots are in full colour. Never greyscale them.
  The hero shows `src/assets/profile.jpg` (960×960) unprocessed (no grain or effects baked into the
  photo; the owner dropped that idea) on a playing card in `Hero.astro`: the King of Spades, a
  black foil card (5:7) with silver K/spade indices, engraved lines, an inner frame and the name
  on a plate under the portrait. It is tilted in 3D to face the heading on the left (less on
  phones) and tilts slightly towards the pointer. Nothing sits on top of the photo itself.
- Nav: one indicator pill slides to the current section's link (and the hovered link).
- Grain sits under the nav (z-index 40 < nav 50), over the content. `.grain` is the faint, even
  layer (fixed). `.grain--top` is the strong band along the top and the lower-right corner of the
  first screen; it is absolute, so it scrolls away. Never make the strong grain fixed/sticky.
- Projects never link to their source code (no GitHub links on projects; the owner's profile link stays).
- The nav logo/name scrolls smoothly to the top on the home page instead of reloading.
- Performance: the grain is a static PNG tile (`public/grain.png`), no blend modes, no animated
  full-screen layers, no `background-attachment: fixed`. Keep it that way.
- Type scale is the tokens in `global.css` only (`--step-small` … `--step-display`). No ad-hoc sizes.

Because of those choices, the design-taste-frontend inspector still reports card rows, outlined
boxes and the location pill above the name. Those are intentional; use the inspector for
overflow, contrast and type-size checks. Before calling a change done, with `npm run preview` running:

```bash
node .claude/skills/design-taste-frontend/scripts/lint.mjs src
node .claude/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/
npx astro check
```

## Skills installed in `.claude/skills/`

| Stage | Skill | Notes |
|---|---|---|
| Pick a direction | `design-taste-frontend` | Main art-direction skill, with the lint and inspect gate above. |
| Brand-style reference | `design-md-library` | 84 brand DESIGN.md token sets. Use when the user wants a look "like X". |
| Alternative styles | `minimalist-ui`, `high-end-visual-design`, `industrial-brutalist-ui`, `gpt-taste` | Only when the user asks for that aesthetic. |
| From a screenshot/mockup | `image-to-code` | Needs an image the user supplies (Claude Code cannot generate images itself). |
| Improve an existing page | `redesign-existing-projects` | Audit first, then fix. |
| React / Next.js code | `vercel-react-best-practices`, `vercel-composition-patterns`, `vercel-react-view-transitions` | Only if the site moves to React. |
| Verify in a real browser | `playwright-cli` | Open the page over HTTP (`file:` URLs are blocked), snapshot, screenshot, check console. |
| Review | `web-design-guidelines` (UI/accessibility), `writing-guidelines` (copy) | Run before calling a page done. |
| Long files | `full-output-enforcement` | No placeholders or truncated code. |
| Deploy | `deploy-to-vercel`, `vercel-cli-with-tokens`, `vercel-optimize` | Only when the user asks to deploy. |

Image-only skills (`imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, `stitch-design-taste`)
are written for tools that generate images (Codex, Google Stitch). In Claude Code they only produce
prompts and briefs.

## Conventions

- Every interactive control gets a hover tooltip (`title` attribute).
- Keep client-side JavaScript to small inline component scripts; no UI framework.
