#!/bin/bash
# =============================================================================
# azure_provision.sh
#
# One-time provisioning script for the KhulaCode Azure deployment.
#
# What this does:
#   1. Creates an Azure Database for PostgreSQL Flexible Server (Burstable
#      B1ms, 32GB, PostgreSQL 16) in the same resource group/region as your
#      existing Web App.
#   2. Creates the "khulacode" database on that server.
#   3. Configures the server firewall to allow access from Azure services.
#   4. Reads your existing Storage Account key (khulacode / khulacode-media)
#      to build MEDIA_BASE_URL.
#   5. Generates a random Django SECRET_KEY.
#   6. Applies all of these as Application Settings on your existing
#      "KhulaCode" Web App (SECRET_KEY, DEBUG, DATABASE_URL, MEDIA_BASE_URL).
#   7. Sets the Web App's Startup Command to run startup.sh.
#   8. (Optional) If the GitHub CLI (`gh`) is installed and authenticated,
#      sets the SECRET_KEY repo secret so the CI collectstatic step works.
#
# Requirements: az CLI logged in (az login), already the case in this repo's
# environment. Run from anywhere; paths below are absolute-safe.
#
# Usage:
#   bash scripts/azure_provision.sh
#
# All resource names/locations below were detected from your existing Azure
# resources (Web App "KhulaCode", resource group "KhulaCode", region
# "austriaeast", Storage Account "khulacode", container "khulacode-media").
# Edit the variables below if any of these are wrong.
# =============================================================================

set -euo pipefail

# ---- Existing resources (detected) -----------------------------------------
RESOURCE_GROUP="KhulaCode"
LOCATION="austriaeast"
WEBAPP_NAME="KhulaCode"
STORAGE_ACCOUNT="khulacode"
STORAGE_CONTAINER="khulacode-media"

# ---- New Postgres server settings ------------------------------------------
PG_SERVER_NAME="khulacode-db-$(date +%s | tail -c 6)"   # must be globally unique
PG_DB_NAME="khulacode"
PG_ADMIN_USER="khulacodeadmin"
PG_SKU="Standard_B1ms"          # Burstable, cheapest usable tier
PG_STORAGE_SIZE=32              # GB
PG_VERSION="16"

echo "=============================================================="
echo " KhulaCode Azure Provisioning"
echo "=============================================================="
echo "Resource group : $RESOURCE_GROUP"
echo "Location       : $LOCATION"
echo "Web App        : $WEBAPP_NAME"
echo "Postgres server: $PG_SERVER_NAME (new)"
echo "Storage account: $STORAGE_ACCOUNT / container: $STORAGE_CONTAINER"
echo "=============================================================="
echo

# ---- 1. Generate a strong random admin password ----------------------------
echo "Generating random PostgreSQL admin password..."
PG_ADMIN_PASSWORD="$(python3 -c "
import secrets, string
alphabet = string.ascii_letters + string.digits
# Ensure at least one of each required class, then pad randomly
pwd = (
    secrets.choice(string.ascii_uppercase)
    + secrets.choice(string.ascii_lowercase)
    + secrets.choice(string.digits)
    + secrets.choice('!@#%^*_-+=')
    + ''.join(secrets.choice(alphabet) for _ in range(20))
)
print(pwd)
")"

# ---- 2. Create the PostgreSQL Flexible Server -------------------------------
echo
echo "Creating PostgreSQL Flexible Server '$PG_SERVER_NAME' (this can take a few minutes)..."
az postgres flexible-server create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$PG_SERVER_NAME" \
  --location "$LOCATION" \
  --admin-user "$PG_ADMIN_USER" \
  --admin-password "$PG_ADMIN_PASSWORD" \
  --sku-name "$PG_SKU" \
  --tier Burstable \
  --storage-size "$PG_STORAGE_SIZE" \
  --version "$PG_VERSION" \
  --public-access 0.0.0.0 \
  --yes

# The "flexible-server create" command always provisions a default
# "postgres" database; create our application database separately.
echo
echo "Creating database '$PG_DB_NAME' on the new server..."
az postgres flexible-server db create \
  --resource-group "$RESOURCE_GROUP" \
  --server-name "$PG_SERVER_NAME" \
  --database-name "$PG_DB_NAME"


# ---- 3. Allow Azure services (App Service) to reach the server -------------
echo
echo "Configuring firewall rule to allow Azure services..."
az postgres flexible-server firewall-rule create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$PG_SERVER_NAME" \
  --rule-name "AllowAllAzureServices" \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0

# ---- 4. Build DATABASE_URL ---------------------------------------------------
PG_HOST="${PG_SERVER_NAME}.postgres.database.azure.com"
DATABASE_URL="postgres://${PG_ADMIN_USER}:${PG_ADMIN_PASSWORD}@${PG_HOST}:5432/${PG_DB_NAME}?sslmode=require"

# ---- 5. Look up the Storage Account key & build MEDIA_BASE_URL -------------
echo
echo "Fetching storage account key for '$STORAGE_ACCOUNT'..."
STORAGE_KEY="$(az storage account keys list \
  --account-name "$STORAGE_ACCOUNT" \
  --resource-group "$RESOURCE_GROUP" \
  --query "[0].value" -o tsv)"

MEDIA_BASE_URL="https://${STORAGE_ACCOUNT}.blob.core.windows.net/${STORAGE_CONTAINER}"

# Sanity check the container is publicly readable (should already be, per your setup)
PUBLIC_ACCESS="$(az storage container show \
  --account-name "$STORAGE_ACCOUNT" \
  --name "$STORAGE_CONTAINER" \
  --account-key "$STORAGE_KEY" \
  --query "properties.publicAccess" -o tsv || echo "unknown")"
echo "Storage container public access level: $PUBLIC_ACCESS"

# ---- 6. Generate Django SECRET_KEY -----------------------------------------
echo
echo "Generating Django SECRET_KEY..."
SECRET_KEY="$(python3 -c "import secrets; print(secrets.token_urlsafe(50))")"

# ---- 7. Apply App Service Application Settings -----------------------------
echo
echo "Applying Application Settings to Web App '$WEBAPP_NAME'..."
az webapp config appsettings set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEBAPP_NAME" \
  --settings \
    SECRET_KEY="$SECRET_KEY" \
    DEBUG="False" \
    DATABASE_URL="$DATABASE_URL" \
    MEDIA_BASE_URL="$MEDIA_BASE_URL" \
    SCM_DO_BUILD_DURING_DEPLOYMENT="true" \
  -o none

# ---- 8. Set Startup Command --------------------------------------------------
echo
echo "Setting Startup Command..."
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEBAPP_NAME" \
  --startup-file "bash KhulaCodeApp/backend/startup.sh" \
  -o none

# ---- 9. Optional: push SECRET_KEY as a GitHub Actions secret ---------------
if command -v gh >/dev/null 2>&1; then
  if gh auth status >/dev/null 2>&1; then
    echo
    echo "GitHub CLI detected and authenticated. Setting SECRET_KEY repo secret..."
    gh secret set SECRET_KEY --body "$SECRET_KEY" || \
      echo "WARNING: failed to set GitHub secret automatically. Set it manually (see below)."
  else
    echo
    echo "GitHub CLI found but not authenticated (run 'gh auth login'). Skipping automatic secret creation."
  fi
else
  echo
  echo "GitHub CLI (gh) not found. Skipping automatic secret creation."
fi

# ---- 10. Restart the Web App to pick up new settings -----------------------
echo
echo "Restarting Web App..."
az webapp restart --resource-group "$RESOURCE_GROUP" --name "$WEBAPP_NAME" -o none

# ---- Summary -----------------------------------------------------------------
echo
echo "=============================================================="
echo " DONE. Save these values somewhere safe (e.g. a password manager):"
echo "=============================================================="
echo "Postgres server FQDN : $PG_HOST"
echo "Postgres admin user  : $PG_ADMIN_USER"
echo "Postgres admin pass  : $PG_ADMIN_PASSWORD"
echo "Postgres database    : $PG_DB_NAME"
echo "DATABASE_URL         : $DATABASE_URL"
echo "MEDIA_BASE_URL        : $MEDIA_BASE_URL"
echo "Django SECRET_KEY     : $SECRET_KEY"
echo "=============================================================="
echo
echo "If the GitHub secret was NOT set automatically above, set it manually:"
echo "  gh secret set SECRET_KEY --body \"$SECRET_KEY\""
echo "or via GitHub web UI: repo Settings > Secrets and variables > Actions"
echo
echo "Next step: git push origin main to trigger the deployment workflow."
echo "=============================================================="
