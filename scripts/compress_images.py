"""
Lossy in-place compression for frontend images.

- JPEGs: re-encode at quality 78, optimized, progressive.
- PNGs: quantize to adaptive 256-color palette (great for illustrations/UI art)
  and re-encode optimized. Preserves transparency.
- Keeps the same filenames/extensions so no source-code changes are needed.
- Skips files where compression wouldn't save at least 10%.

Usage: python scripts/compress_images.py [--dry-run]
"""
import sys
from pathlib import Path

from PIL import Image

ASSETS = Path(__file__).resolve().parent.parent / (
    "KhulaCodeApp/react_frontend/react_frontend_typescript/src/assets/img"
)
MAX_DIM = 1920          # cap the longest edge; UI images never need more
JPEG_QUALITY = 78
MIN_SAVING = 0.10       # only rewrite if >= 10% smaller
DRY = "--dry-run" in sys.argv

total_before = total_after = 0
changed = skipped = 0

for path in sorted(ASSETS.rglob("*")):
    if path.suffix.lower() not in (".jpg", ".jpeg", ".png"):
        continue
    orig_size = path.stat().st_size
    if orig_size < 30_000:  # tiny files aren't worth touching
        skipped += 1
        continue

    try:
        img = Image.open(path)
        img.load()
    except Exception as e:
        print(f"SKIP (unreadable) {path.name}: {e}")
        skipped += 1
        continue

    # Downscale overly large dimensions
    if max(img.size) > MAX_DIM:
        img.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)

    tmp = path.with_suffix(path.suffix + ".tmp")
    try:
        if path.suffix.lower() in (".jpg", ".jpeg"):
            img = img.convert("RGB")
            img.save(tmp, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        else:  # PNG
            has_alpha = img.mode in ("RGBA", "LA") or (
                img.mode == "P" and "transparency" in img.info
            )
            conv = img.convert("RGBA" if has_alpha else "RGB")
            quant = conv.quantize(colors=256, method=Image.FASTOCTREE, dither=Image.FLOYDSTEINBERG)
            quant.save(tmp, "PNG", optimize=True)
    except Exception as e:
        print(f"SKIP (encode error) {path.name}: {e}")
        tmp.unlink(missing_ok=True)
        skipped += 1
        continue

    new_size = tmp.stat().st_size
    if new_size <= orig_size * (1 - MIN_SAVING):
        if DRY:
            tmp.unlink()
        else:
            tmp.replace(path)
        changed += 1
        total_before += orig_size
        total_after += new_size
        print(f"{path.name}: {orig_size/1024:.0f}K -> {new_size/1024:.0f}K "
              f"(-{(1-new_size/orig_size)*100:.0f}%)")
    else:
        tmp.unlink()
        skipped += 1

print(f"\n{'[DRY RUN] ' if DRY else ''}Compressed {changed} files, skipped {skipped}.")
if total_before:
    print(f"Total: {total_before/1024/1024:.1f}MB -> {total_after/1024/1024:.1f}MB "
          f"(saved {(total_before-total_after)/1024/1024:.1f}MB)")
