# Zenova KSK Private Limited — Website

Company website for Zenova KSK Private Limited (Advance Building Material Solutions),
built from the company profile PDF.

**React 19 + Vite 8 + Tailwind CSS v4 + React Router 7.** No backend and no database —
it is a fully static site, so it deploys free to Netlify, Vercel, GitHub Pages or any
web host. Enquiries are collected by a Google Form embedded on the Contact page.

---

## Requirements

Node.js 20 or newer (built with 24.18). Nothing else.

### Windows PowerShell: "running scripts is disabled on this system"

PowerShell's default execution policy is `Restricted`, which blocks the `npm.ps1`
shim, so plain `npm install` fails with a `PSSecurityException`. Any one of these
fixes it:

```powershell
# Option A - use the batch shim instead of the PowerShell one (no settings change)
npm.cmd install

# Option B - allow local scripts for your user, once and for all (no admin needed)
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
npm install

# Option C - bypass for this one command only
powershell -ExecutionPolicy Bypass -Command "npm install"
```

Option B is the usual choice for a development machine.

## Running it

```bash
cd frontend
npm install          # on Windows PowerShell: npm.cmd install
npm run dev          # on Windows PowerShell: npm.cmd run dev
```

Open <http://localhost:5173>. That is the only command — there is no second server.

If port 5173 is already taken, Vite picks the next free port and prints it.

## Connecting the enquiry form

The Contact page shows your phone number and email until a Google Form is connected,
so you can deploy before the form exists. Setup takes about three minutes and there
is a script that builds the form for you:

**→ see [GOOGLE-FORM-SETUP.md](GOOGLE-FORM-SETUP.md)**

Short version: create the form, copy the id out of its URL, paste it into
`googleForm.formId` in `frontend/src/data/company.js`.

---

## Pages

| Page | Content |
|---|---|
| `/` | Hero, production-at-a-glance, capacity stats, six offerings, featured products, facilities, delivery reach, mission |
| `/about` | Introduction, 2021 → 2023 → 2025 timeline, mission and five values, offerings, supporting business |
| `/products` | All 14 products with a category filter |
| `/manufacturing` | Karad summary, five production lines, four-step process, FY 25-26 expansion |
| `/network` | Road-distance chart for twelve markets, logistics, both addresses with Maps links |
| `/contact` | Phones, emails, both addresses, and the enquiry form |

## Project layout

```
Zenova/
├─ GOOGLE-FORM-SETUP.md    How to connect the enquiry form
└─ frontend/
   ├─ src/
   │  ├─ data/
   │  │  ├─ company.js     Company info, stats, offerings, history, facilities,
   │  │  │                 contacts, navigation, Google Form settings
   │  │  └─ products.js    The 14-product portfolio
   │  ├─ components/       Navbar, Footer, Layout, Icon, ProductCard, CTABand, …
   │  ├─ pages/            Home, About, Products, Manufacturing, Network,
   │  │                    Contact, NotFound
   │  └─ index.css         Tailwind theme — brand colours, buttons, cards
   ├─ public/              Favicon
   └─ vite.config.js
```

## Editing site content

Nothing is hardcoded in the pages — change these two files and every page follows:

| What | Where |
|---|---|
| Products, categories, application notes | `frontend/src/data/products.js` |
| Intro, mission, values, offerings, history | `frontend/src/data/company.js` |
| Capacities and headline stats | `stats` and `facilities` in `company.js` |
| Distances on the Network page | `marketReach` in `company.js` |
| Addresses, phones, emails | `contact` in `company.js` |
| Navigation menu | `navLinks` in `company.js` |
| Google Form id and embed height | `googleForm` in `company.js` |

Brand colours, buttons and card styles live in `frontend/src/index.css` under
`@theme`. The palette is sampled from the logo: `#F4871F` orange, `#231F20` ink.

---

## Deploying

```bash
cd frontend
npm run build        # outputs frontend/dist/
npm run preview      # serve that build locally to check it
```

Upload `frontend/dist/` to any static host. Two things to configure:

1. **SPA fallback** — the host must serve `index.html` for unknown paths, or
   `/products` will 404 on a hard refresh. Netlify and Vercel do this
   automatically for Vite projects; on Nginx use
   `try_files $uri $uri/ /index.html;`.
2. **Custom domain** — point it at the host, then update the `canonical` URL in
   `frontend/index.html`.

Nothing needs to run server-side, so there is no API to host, no database to back up
and no server costs. Enquiries live in Google Forms.

## Notes

- Product application notes are indicative and deliberately avoid quoting standards
  or certifications. Replace them with figures from the actual technical data sheets
  before publishing.
- The general email address in the profile PDF reads
  `zenovabuildingsoltions@gmail.com` (with "soltions"). It is reproduced as given —
  correct it in `contact.emails` in `company.js` if that was a typo.
- The logo artwork sits on a near-white plate, so the header applies
  `mix-blend-multiply` to blend it in. A transparent PNG or SVG would be better if
  you have one.
