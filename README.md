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
| `/products` | All 14 products with a category filter, plus FAQs |
| `/products/:slug` | A page per product — description, features, applications, substrates, technical data, packing, safety, related products |
| `/manufacturing` | Karad summary, five production lines, four-step process, quality assurance, FY 25-26 expansion |
| `/network` | Road-distance chart for twelve markets, logistics, dealer appointment, both addresses with Maps links |
| `/contact` | Phones, emails, both addresses, and the enquiry form |

---

## What still needs your real data

> To collect this from the client, send them
> **Zenova KSK - Information Required.docx** together with
> **client-product-data-template.csv**. The document is written for a non-technical
> reader and covers everything below plus photographs, brand assets and content we
> cannot write ourselves.

Four things are deliberately left blank rather than filled with plausible-looking
numbers. Each one degrades gracefully — the site looks finished without them — but
each is worth completing.

### 1. Product technical data (the important one)

Coverage, pot life, open time, bond strength, pack sizes and IS classification are
figures customers make structural decisions on, so nothing was invented. Until you
fill them in, each product page shows a **"Technical data sheet on request"** panel
with a request button, which is honest and looks intentional.

To complete a product, open `frontend/src/data/products.js` and fill in `code`,
`standard`, `technical` and `packing` from that product's real TDS. The file has a
worked example at the top. Whatever you provide is rendered as a spec table;
whatever you leave out is skipped.

### 2. Certifications

`certifications` in `company.js` is an empty array, and the Quality section simply
omits the certifications block while it stays empty — the site never implies an
approval that is not held. Add entries only for certifications actually in hand:

```js
export const certifications = [
  { name: "ISO 9001:2015", detail: "Quality management system", issuer: "Certificate no. XXXXX" },
];
```

The Quality section already describes the controls you genuinely have — in-house
lab, own sand washing, separate grey and white lines, automated batching.

### 3. Social profiles and statutory details

`social` and `legal` in `company.js`. Blank entries are hidden, so the footer never
shows a dead icon or an empty CIN line. Fill in full profile URLs, and the CIN and
GSTIN as printed on your invoices.

### 4. The Google Form

See [GOOGLE-FORM-SETUP.md](GOOGLE-FORM-SETUP.md).

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
| Products, descriptions, features, specs, packing | `frontend/src/data/products.js` |
| Intro, mission, values, offerings, history | `frontend/src/data/company.js` |
| Capacities and headline stats | `stats` and `facilities` in `company.js` |
| Quality controls / certifications | `qualityPractices`, `certifications` in `company.js` |
| FAQs on the Products page | `faqs` in `company.js` |
| Distances on the Network page | `marketReach` in `company.js` |
| Addresses, phones, emails | `contact` in `company.js` |
| Social links, CIN / GSTIN | `social`, `legal` in `company.js` |
| Customer list | `customers` in `company.js` |
| Customer logos | drop files in `frontend/src/assets/customers/` |
| Navigation menu | `navLinks` in `company.js` |
| Google Form id and embed height | `googleForm` in `company.js` |

The WhatsApp floating button uses the first number in `contact.phones`.

Customer logos are picked up automatically from `frontend/src/assets/customers/`
by filename — there is no import to edit. To trim and normalise raw logo files
first, put them in `logos-raw/` and run `python scripts/prepare-logos.py`.
See [logos-raw/README.md](logos-raw/README.md).

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
