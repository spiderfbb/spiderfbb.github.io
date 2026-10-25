---
title: Perfume Costing
kind: Costing and profit planner
summary: Works out what every bottle really costs, from ingredients and packaging to monthly expenses, then the selling price, profit and break-even point.
client: A small perfume business
role: Solo developer
year: 2026
order: 3
stack: [Vue 3, Vue Router, Chart.js, Vite, Supabase, Cloudflare Turnstile, Vercel]
areas: [frontend, backend, database, design]
links:
  demo: https://costing-calculator-delta.vercel.app/
screenshots:
  - src: ./images/perfume-costing/dashboard.png
    alt: Dashboard with the net profit per month, average margin, break-even point and a price build-up chart for each perfume
  - src: ./images/perfume-costing/product-detail.png
    alt: Product editor with the formula, concentration presets and the costing sheet that adds up the selling price
  - src: ./images/perfume-costing/projection.png
    alt: Monthly profit projection with a sales plan table and a profit and loss summary showing break-even
---

It started as a single HTML file with the maths in it. I rebuilt it as a proper app so the owner could keep their data in an account and use it from any device.

## What it does

Add your supplies once (oils, alcohol, bottles, boxes, labels) and build each product from them. The app works out the cost per bottle, the selling price for the margin you want, discounts, monthly expenses and how many bottles you need to sell to break even. A change history logs every edit with its old and new value, and a backup can be downloaded and restored.

## How it works

- **Vue 3 and Vue Router**, bundled with Vite. Templates are compiled at build time, so the Content-Security-Policy doesn't need `'unsafe-eval'`.
- **Supabase** handles accounts, the Postgres database and product photos. Every table and the photo bucket use Row Level Security, so each person can only reach their own data.
- **Cloudflare Turnstile** protects sign-up, sign-in and password reset from bots.
- **Chart.js** draws the profit charts. It is deployed on Vercel with security headers set in `vercel.json`.
