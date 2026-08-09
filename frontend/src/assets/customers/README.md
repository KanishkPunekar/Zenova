# Customer logos

Drop logo files in this folder and they appear on the home page automatically —
there is nothing to import or register in code.

## Filenames

The filename (without extension) must match the customer's `slug` in
`src/data/company.js`:

| File | Customer |
|---|---|
| `ultratech.png` | UltraTech Cement Ltd |
| `somany.png` | Somany Ceramics Ltd |
| `nuvoco.png` | Nuvoco Vistas Corp Ltd |
| `hindware.png` | Hindware Limited |
| `jsw.png` | JSW Green Cement Pvt Ltd |
| `nippon-paint.png` | Nippon Paint (India) Pvt Ltd |
| `cera.png` | Cera Sanitaryware Ltd |
| `joint-seal.png` | Joint Seal |

`.png`, `.jpg`, `.webp` and `.svg` all work. A customer with no file here shows its
name only, so you can add logos one at a time without anything breaking.

## Preparing the files

Raw logos come in wildly different sizes and margins, which makes a grid look
untidy. To trim and normalise them in one go, put the originals in `logos-raw/` at
the project root, named after the slugs above, then run from the project root:

```bash
python scripts/prepare-logos.py
```

That trims the flat border around each logo, scales everything to the same box and
writes optimised PNGs straight into this folder.

If a logo sits on a white background and you would rather it were transparent:

```bash
python scripts/prepare-logos.py --white-transparent
```

Do **not** use that flag for logos whose artwork is white text on a brand colour —
UltraTech on yellow, Somany on red, Nippon and Cera on blue. Stripping the
background would leave white text that disappears against the page.

## Before publishing

These are registered trademarks. Show a logo only once that company has given
written permission to use it.
