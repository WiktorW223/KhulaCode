"""
Web-optimize a source video into one or two H.264 MP4 variants.

- Re-encodes with libx264 (CRF quality) + AAC audio.
- Adds `-movflags +faststart` so the file starts playing before the whole
  thing downloads (crucial for web streaming).
- Never overwrites the source; writes new sibling files.

Variants produced:
  <name>-compressed.mp4  keeps original resolution, CRF 24.
  <name>-720p.mp4        scaled down to 720p height, CRF 23.

Usage:
  python scripts/compress_video.py <input.mp4> [--crf 24] [--crf720 23]

Requires ffmpeg/ffprobe on PATH (brew install ffmpeg).
"""
import subprocess
import sys
from pathlib import Path


def arg(flag, default):
    if flag in sys.argv:
        return sys.argv[sys.argv.index(flag) + 1]
    return default


def duration_seconds(path: Path) -> float:
    out = subprocess.run(
        [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", str(path),
        ],
        capture_output=True, text=True, check=True,
    )
    return float(out.stdout.strip())


def mb(path: Path) -> float:
    return path.stat().st_size / 1024 / 1024


def encode(src: Path, dst: Path, crf: str, scale_720: bool):
    cmd = ["ffmpeg", "-y", "-i", str(src)]
    if scale_720:
        # -2 keeps width even and preserves aspect ratio
        cmd += ["-vf", "scale=-2:720"]
    cmd += [
        "-c:v", "libx264", "-preset", "slow", "-crf", crf,
        "-c:a", "aac", "-b:a", "128k",
        "-movflags", "+faststart",
        str(dst),
    ]
    print(f"\n>>> Encoding {dst.name} (crf={crf}{', 720p' if scale_720 else ''})...")
    subprocess.run(cmd, check=True)


def main():
    if len(sys.argv) < 2:
        sys.exit("Usage: python scripts/compress_video.py <input.mp4>")
    src = Path(sys.argv[1]).resolve()
    if not src.exists():
        sys.exit(f"Not found: {src}")

    crf = arg("--crf", "24")
    crf720 = arg("--crf720", "23")

    dur = duration_seconds(src)
    print(f"Source: {src.name}  {mb(src):.1f}MB  {dur:.0f}s "
          f"(~{dur/60:.1f} min)")

    full = src.with_name(src.stem + "-compressed.mp4")
    p720 = src.with_name(src.stem + "-720p.mp4")

    encode(src, full, crf, scale_720=False)
    encode(src, p720, crf720, scale_720=True)

    print("\n================ RESULTS ================")
    print(f"original          {mb(src):8.1f} MB  {src.name}")
    print(f"full-res compressed {mb(full):6.1f} MB  {full.name} "
          f"(-{(1-mb(full)/mb(src))*100:.0f}%)")
    print(f"720p              {mb(p720):8.1f} MB  {p720.name} "
          f"(-{(1-mb(p720)/mb(src))*100:.0f}%)")
    print(f"\nDetected duration: {dur:.0f}s  (~{round(dur/60)} min)")


if __name__ == "__main__":
    main()
