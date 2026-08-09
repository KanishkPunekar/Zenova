"""
Prepare customer logos for the website.

Drop the raw logo files (any size, any format) into  logos-raw/  naming each after
its slug, then run:

    python scripts/prepare-logos.py

Expected names in logos-raw/ (extension does not matter):

    ultratech, somany, nuvoco, hindware, jsw, nippon-paint, cera, joint-seal

What it does to each file:

  1. Trims the flat border around the artwork, so a logo with lots of empty margin
     does not end up rendering smaller than its neighbours.
  2. Optionally knocks out a white background (--white-transparent) for logos that
     sit on white. Logos on a solid brand colour — UltraTech's yellow, Somany's red,
     Nippon's and Cera's blue — are left alone, because removing that colour would
     leave white text that vanishes on the page.
  3. Scales the artwork to fit a common box and centres it on a transparent canvas,
     so every logo occupies the same visual weight in the grid.
  4. Saves an optimised PNG into frontend/src/assets/customers/.

Options:
    --white-transparent   make near-white pixels transparent
    --box 480x180         change the output canvas (default 480x180)
    --threshold 12        how close to the corner colour still counts as border
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required.  Install it with:  python -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
RAW_DIR = ROOT / "logos-raw"
OUT_DIR = ROOT / "frontend" / "src" / "assets" / "customers"

SLUGS = [
    "ultratech",
    "somany",
    "nuvoco",
    "hindware",
    "jsw",
    "nippon-paint",
    "cera",
    "joint-seal",
]

# Whatever the file is called, we try to work out which customer it belongs to, so
# you can save straight from a browser without renaming anything. Longest match
# wins, which is what stops "somany-ceramics.png" being claimed by "cera".
ALIASES = {
    "ultratech": ["ultratechcement", "ultratech"],
    "somany": ["somanyceramics", "somany"],
    "nuvoco": ["nuvocovistas", "nuvoco"],
    # hhil = Hindware Home Innovation Limited, how their own asset files are named
    "hindware": ["hindwarehome", "hindware", "hhil"],
    "jsw": ["jswgreencement", "jswcement", "jsw"],
    "nippon-paint": ["nipponpaint", "nippon"],
    "cera": ["cerasanitaryware", "cera"],
    "joint-seal": ["jointseal", "joint"],
}

SUPPORTED = (".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif")


WHITE_ENOUGH = 235   # a border this pale counts as empty margin, not artwork


def trim_border(img: Image.Image, threshold: int) -> Image.Image:
    """
    Crop away an empty white or transparent margin.

    A border in a solid brand colour is deliberately left alone. Somany, Nippon and
    Cera are white artwork on a coloured panel — strip that panel and you are left
    with white artwork that is invisible against the page.
    """
    rgba = img.convert("RGBA")
    w, h = rgba.size
    px = rgba.load()

    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    opaque = [c for c in corners if c[3] > 0]
    if not opaque:
        return rgba.crop(rgba.getbbox() or (0, 0, w, h))

    # Only trim if the corners agree — otherwise the edge is part of the artwork.
    first = opaque[0]
    if any(max(abs(a - b) for a, b in zip(first[:3], c[:3])) > threshold for c in opaque):
        return rgba

    # The border is a solid colour rather than empty space — it belongs to the logo.
    if not all(channel >= WHITE_ENOUGH for channel in first[:3]):
        return rgba

    def differs(pixel):
        if pixel[3] == 0:
            return True
        return max(abs(a - b) for a, b in zip(pixel[:3], first[:3])) > threshold

    left, right, top, bottom = 0, w - 1, 0, h - 1
    while left < right and not any(differs(px[left, y]) for y in range(h)):
        left += 1
    while right > left and not any(differs(px[right, y]) for y in range(h)):
        right -= 1
    while top < bottom and not any(differs(px[x, top]) for x in range(w)):
        top += 1
    while bottom > top and not any(differs(px[x, bottom]) for x in range(w)):
        bottom -= 1

    if right <= left or bottom <= top:
        return rgba
    return rgba.crop((left, top, right + 1, bottom + 1))


def whiten_to_alpha(img: Image.Image, cutoff: int = 238) -> Image.Image:
    """Make near-white pixels transparent. Only sensible for logos on white."""
    rgba = img.convert("RGBA")
    pixels = rgba.getdata()
    rgba.putdata([
        (r, g, b, 0) if r >= cutoff and g >= cutoff and b >= cutoff else (r, g, b, a)
        for r, g, b, a in pixels
    ])
    return rgba


MAX_UPSCALE = 4.0    # beyond this a raster logo just goes soft


def fit_to_box(img: Image.Image, box: tuple[int, int]) -> tuple[Image.Image, float]:
    """
    Scale to fit inside the box and centre it on a transparent canvas.

    Scales up as well as down — Image.thumbnail() only ever shrinks, which would
    leave a small source logo marooned in the middle of the canvas and rendering
    at a different visual weight from its neighbours.
    """
    bw, bh = box
    src = img.copy()
    ratio = min(bw / src.width, bh / src.height)
    ratio = min(ratio, MAX_UPSCALE)

    target = (max(1, round(src.width * ratio)), max(1, round(src.height * ratio)))
    src = src.resize(target, Image.LANCZOS)

    canvas = Image.new("RGBA", box, (0, 0, 0, 0))
    canvas.paste(src, ((bw - src.width) // 2, (bh - src.height) // 2), src)
    return canvas, ratio


def normalise(text: str) -> str:
    return "".join(ch for ch in text.lower() if ch.isalnum())


def match_sources() -> tuple[dict[str, Path], list[Path]]:
    """
    Work out which file belongs to which customer.

    Exact `slug.ext` wins. Otherwise the filename is matched against the alias list,
    longest alias first, so files saved straight from a browser still land in the
    right place. Returns the mapping plus any files it could not place.
    """
    files = [p for p in sorted(RAW_DIR.iterdir())
             if p.is_file() and p.suffix.lower() in SUPPORTED]

    matched: dict[str, Path] = {}
    claimed: set[Path] = set()

    # Pass 1 — exact slug filenames.
    for path in files:
        stem = normalise(path.stem)
        for slug in SLUGS:
            if stem == normalise(slug) and slug not in matched:
                matched[slug] = path
                claimed.add(path)
                break

    # Pass 2 — alias matching, best (longest) alias wins for each file.
    for path in files:
        if path in claimed:
            continue
        stem = normalise(path.stem)
        best_slug, best_len = None, 0
        for slug, aliases in ALIASES.items():
            if slug in matched:
                continue
            for alias in aliases:
                if alias in stem and len(alias) > best_len:
                    best_slug, best_len = slug, len(alias)
        if best_slug:
            matched[best_slug] = path
            claimed.add(path)

    return matched, [p for p in files if p not in claimed]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--white-transparent", action="store_true",
                        help="make near-white pixels transparent")
    parser.add_argument("--box", default="480x180",
                        help="output canvas, e.g. 480x180")
    parser.add_argument("--threshold", type=int, default=12,
                        help="border trim tolerance (default 12)")
    args = parser.parse_args()

    try:
        bw, bh = (int(v) for v in args.box.lower().split("x"))
    except ValueError:
        return print(f"Bad --box value: {args.box}. Use WIDTHxHEIGHT, e.g. 480x180.") or 1

    if not RAW_DIR.exists():
        RAW_DIR.mkdir(parents=True)
        print(f"Created {RAW_DIR.relative_to(ROOT)}")
        print("Put the raw logo files in there, named after each slug:")
        print("  " + ", ".join(SLUGS))
        return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    sources, unmatched = match_sources()

    if not sources:
        print(f"No image files found in {RAW_DIR.relative_to(ROOT)}\n")
        print("Save the eight logo images into that folder, then run this again.")
        print("The filenames do not matter much — anything containing the company")
        print("name is recognised, e.g. 'UltraTech Cement logo.png'.")
        return 1

    done, missing = 0, []
    for slug in SLUGS:
        source = sources.get(slug)
        if source is None:
            missing.append(slug)
            continue

        img = Image.open(source)
        img = trim_border(img, args.threshold)
        if args.white_transparent:
            img = whiten_to_alpha(img)
            img = img.crop(img.getbbox() or (0, 0, *img.size))
        img, ratio = fit_to_box(img, (bw, bh))

        target = OUT_DIR / f"{slug}.png"
        img.save(target, "PNG", optimize=True)
        size_kb = target.stat().st_size / 1024
        note = "  (upscaled — a larger source would look sharper)" if ratio > 2.5 else ""
        print(f"  ok   {slug:<14} {source.name:<22} -> {target.name}  ({size_kb:.1f} KB){note}")
        done += 1

    print(f"\n{done} logo(s) written to {OUT_DIR.relative_to(ROOT)}")
    if missing:
        print("\nStill missing (these show as text on the site until added):")
        for slug in missing:
            print(f"  - {slug}")
    if unmatched:
        print("\nCould not work out which customer these belong to — rename them")
        print("after the slug above and run again:")
        for path in unmatched:
            print(f"  - {path.name}")
    if done:
        print("\nIf the dev server is running, restart it so Vite picks up the new files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
