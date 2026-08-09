# Raw customer logos

Put the original logo files here — whatever size or format they arrive in — then
run this from the project root:

```bash
python scripts/prepare-logos.py
```

The script trims empty margins, scales everything to a common box and writes
optimised PNGs into `frontend/src/assets/customers/`, where the site picks them up
automatically.

## Name each file after its slug

```
ultratech      somany       nuvoco     hindware
jsw            nippon-paint cera       joint-seal
```

So `ultratech.png`, `somany.jpg`, and so on. The extension does not matter —
`.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp` and `.gif` all work. Anything missing
simply shows as a name on the site, so you can add them a few at a time.

## Getting the best result

- **Bigger is better.** The script scales up to fit, but an enlarged small image
  looks soft. It warns you when it has had to upscale by more than 2.5×.
- **Ask the customer for their brand kit.** Most large companies publish a media or
  brand-assets page with proper transparent PNG or vector files, which will always
  beat a screenshot.
- **Logos on a brand colour are kept as they are.** UltraTech's yellow, Somany's
  red and the blue panels behind Nippon and Cera are part of those marks — the
  script deliberately does not strip them, because the artwork on top is white and
  would vanish against the page.
- **Logos on white** can be made transparent if you prefer:
  `python scripts/prepare-logos.py --white-transparent`

## Permission

These are registered trademarks. Publish a logo only once that company has given
written permission to use it.
