#!/bin/bash
# =============================================================================
# compress_and_upload_videos.sh
#
# Batch web-optimizes every .mp4 in the local media/videos folder to 720p
# (H.264 CRF 23, AAC, +faststart) and uploads each to Azure Blob Storage,
# overwriting the matching blob with the smaller version.
#
#   * Local originals are NEVER overwritten — compressed copies are written to
#     a temp dir, uploaded, then removed.
#   * Already-compressed KC.mp4 is skipped (set SKIP list below).
#   * Sets the 30-day Cache-Control header on each uploaded blob.
#
# Requires: ffmpeg + az CLI (logged in).
# Usage: bash scripts/compress_and_upload_videos.sh
# =============================================================================
set -euo pipefail

RESOURCE_GROUP="KhulaCode"
STORAGE_ACCOUNT="khulacode"
STORAGE_CONTAINER="khulacode-media"
CACHE="public, max-age=2592000"   # 30 days
CRF="23"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIDEO_DIR="$ROOT/KhulaCodeApp/backend/media/videos"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

# Files to skip (already compressed / handled).
SKIP=("KC.mp4")

echo "Fetching storage key..."
STORAGE_KEY="$(az storage account keys list \
  --account-name "$STORAGE_ACCOUNT" \
  --resource-group "$RESOURCE_GROUP" \
  --query "[0].value" -o tsv)"

total_before=0
total_after=0
count=0

for src in "$VIDEO_DIR"/*.mp4; do
  name="$(basename "$src")"

  # skip our own -720p outputs and the skip list
  case "$name" in *-720p.mp4) continue;; esac
  skip=false
  for s in "${SKIP[@]}"; do [ "$name" = "$s" ] && skip=true; done
  $skip && { echo "SKIP $name (in skip list)"; continue; }

  out="$TMP_DIR/$name"
  echo ""
  echo ">>> Compressing $name ..."
  ffmpeg -y -loglevel error -i "$src" \
    -vf "scale=-2:720" \
    -c:v libx264 -preset slow -crf "$CRF" \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$out"

  before=$(stat -f%z "$src")
  after=$(stat -f%z "$out")
  total_before=$((total_before + before))
  total_after=$((total_after + after))
  count=$((count + 1))
  printf "    %s: %.1fMB -> %.1fMB\n" "$name" \
    "$(echo "$before/1048576" | bc -l)" "$(echo "$after/1048576" | bc -l)"

  echo "    Uploading videos/$name ..."
  az storage blob upload \
    --account-name "$STORAGE_ACCOUNT" \
    --account-key "$STORAGE_KEY" \
    --container-name "$STORAGE_CONTAINER" \
    --name "videos/$name" \
    --file "$out" \
    --content-type "video/mp4" \
    --content-cache "$CACHE" \
    --overwrite -o none
  echo "    done."

  rm -f "$out"
done

echo ""
echo "=============================================================="
printf "Compressed & uploaded %d videos.\n" "$count"
printf "Total: %.1fMB -> %.1fMB\n" \
  "$(echo "$total_before/1048576" | bc -l)" "$(echo "$total_after/1048576" | bc -l)"
echo "All blobs carry Cache-Control: $CACHE"
