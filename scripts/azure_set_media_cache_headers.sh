#!/bin/bash
# =============================================================================
# azure_set_media_cache_headers.sh (formerly azure_setup_cdn.sh)
#
# Speeds up media loading (videos, profile pics, badges served from Azure
# Blob Storage) by setting long-lived Cache-Control headers (30 days) on
# all blobs in the "khulacode-media" container, so browsers cache media
# aggressively and repeat visits don't re-download anything.
#
# Re-run this script whenever you upload NEW media files to the container
# (newly uploaded blobs have no Cache-Control header by default).
#
# --- NOTE ON CDN (attempted 2026-07-21, not possible on this account) ------
# The ideal fix for global media latency would be a CDN in front of the
# storage account, but:
#   * Azure CDN "classic" (Standard_Microsoft) no longer allows NEW profile
#     creation: "(BadRequest) Azure CDN from Microsoft (classic) no longer
#     support new profile creation."
#   * Azure Front Door (the replacement) is blocked on this subscription:
#     "(BadRequest) Free Trial and Student account is forbidden for Azure
#     Frontdoor resources."
# If the subscription is ever upgraded to pay-as-you-go, create an Azure
# Front Door Standard profile with the blob account as origin and point
# MEDIA_BASE_URL / VITE_MEDIA_URL at the Front Door endpoint. Alternatively,
# with a custom domain you can use Cloudflare's free CDN in front of the
# blob URL.
# -----------------------------------------------------------------------------
#
# Requirements: az CLI logged in (az login).
# Usage: bash scripts/azure_setup_cdn.sh
# =============================================================================

set -euo pipefail

RESOURCE_GROUP="KhulaCode"
STORAGE_ACCOUNT="khulacode"
STORAGE_CONTAINER="khulacode-media"
CACHE_MAX_AGE_SECONDS=$((30 * 24 * 3600))   # 30 days

echo "=============================================================="
echo " KhulaCode — set Cache-Control headers on media blobs"
echo "=============================================================="

echo
echo "Fetching storage account key..."
STORAGE_KEY="$(az storage account keys list \
  --account-name "$STORAGE_ACCOUNT" \
  --resource-group "$RESOURCE_GROUP" \
  --query "[0].value" -o tsv)"

echo "Setting Cache-Control: public, max-age=${CACHE_MAX_AGE_SECONDS} on all blobs in '$STORAGE_CONTAINER'..."
az storage blob list \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --container-name "$STORAGE_CONTAINER" \
  --query "[].name" -o tsv | while IFS= read -r blob; do
    az storage blob update \
      --account-name "$STORAGE_ACCOUNT" \
      --account-key "$STORAGE_KEY" \
      --container-name "$STORAGE_CONTAINER" \
      --name "$blob" \
      --content-cache "public, max-age=${CACHE_MAX_AGE_SECONDS}" \
      -o none
    echo "  cache header set: $blob"
done

echo
echo "DONE. Browsers will now cache media for 30 days."
echo "Re-run this script after uploading new media files."
