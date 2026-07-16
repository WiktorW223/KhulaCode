#!/bin/bash
# =============================================================================
# azure_finish_provision.sh
#
# Completes the provisioning that was interrupted after the PostgreSQL
# Flexible Server 'khulacode-db-50874' finished creating. The original script
# was killed while waiting on server creation, so none of the follow-up steps
# ran. This script:
#
#   1. RESETS the Postgres admin password (the original random password was
#      lost when the script died — we never saw it printed). A new one is
#      generated here and printed at the end.
#   2. Creates the "khulacode" database (idempotent).
#   3. Adds the AllowAllAzureServices firewall rule (idempotent).
#   4. Builds DATABASE_URL / MEDIA_BASE_URL, generates SECRET_KEY.
#   5. Applies App Settings + Startup Command on the KhulaCode Web App.
#   6. Optionally sets the SECRET_KEY GitHub Actions secret via gh.
#   7. Restarts the Web App.
#
# Usage: bash scripts/azure_finish_provision.sh
# =============================================================================

set -euo pipefail

RESOURCE_GROUP="KhulaCode"
WEBAPP_NAME="KhulaCode"
STORAGE_ACCOUNT="khulacode"
STORAGE_CONTAINER="khulacode-media"

PG_SERVER_NAME="khulacode-db-50874"   # already created & Ready
PG_DB_NAME="khulacode"
PG_ADMIN_USER="khulacodeadmin"

echo "=============================================================="
echo " KhulaCode Azure Provisioning — FINISH (resume after interrupt)"
echo "=============================================================="
echo "Postgres server: $PG_SERVER_NAME (existing, Ready)"
echo

# ---- 1. Reset admin password (original was lost) ----------------------------
echo "Generating and resetting PostgreSQL admin password..."
PG_ADMIN_PASSWORD="$(python3 -c "
import secrets, string
alphabet = string.ascii_letters + string.digits
pwd = (
    secrets.choice(string.ascii_uppercase)
    + secrets.choice(string.ascii_lowercase)
    + secrets.choice(string.digits)
    + ''.join(secrets.choice(alphabet) for _ in range(21))
)
print(pwd)
")"

az postgres flexible-server update \
  --resource-group "$RESOURCE_GROUP" \
  --name "$PG_SERVER_NAME" \
  --admin-password "$PG_ADMIN_PASSWORD" \
  -o none
echo "Password reset OK."

# ---- 2. Create the application database (idempotent) ------------------------
echo
echo "Ensuring database '$PG_DB_NAME' exists..."
az postgres flexible-server db create \
  --resource-group "$RESOURCE_GROUP" \
  --server-name "$PG_SERVER_NAME" \
  --database-name "$PG_DB_NAME" \
  -o none 2>/dev/null || echo "(database already exists — OK)"

# ---- 3. Firewall rule: allow Azure services ---------------------------------
echo
echo "Ensuring firewall rule 'AllowAllAzureServices' exists..."
az postgres flexible-server firewall-rule create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$PG_SERVER_NAME" \
  --rule-name "AllowAllAzureServices" \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0 \
  -o none 2>/dev/null || echo "(firewall rule already exists — OK)"

# ---- 4. Build DATABASE_URL / MEDIA_BASE_URL ----------------------------------
PG_HOST="${PG_SERVER_NAME}.postgres.database.azure.com"
DATABASE_URL="postgres://${PG_ADMIN_USER}:${PG_ADMIN_PASSWORD}@${PG_HOST}:5432/${PG_DB_NAME}?sslmode=require"
MEDIA_BASE_URL="https://${STORAGE_ACCOUNT}.blob.core.windows.net/${STORAGE_CONTAINER}"

# ---- 5. Generate Django SECRET_KEY ------------------------------------------
echo
echo "Generating Django SECRET_KEY..."
SECRET_KEY="$(python3 -c "import secrets; print(secrets.token_urlsafe(50))")"

# ---- 6. Apply App Service Application Settings ------------------------------
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

# ---- 7. Set Startup Command ---------------------------------------------------
echo
echo "Setting Startup Command..."
az webapp config set \
  --resource-group "$RESOURCE_GROUP" \
  --name "$WEBAPP_NAME" \
  --startup-file "bash KhulaCodeApp/backend/startup.sh" \
  -o none

# ---- 8. Optional: push SECRET_KEY as a GitHub Actions secret ----------------
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  echo
  echo "Setting SECRET_KEY GitHub repo secret via gh..."
  gh secret set SECRET_KEY --body "$SECRET_KEY" || \
    echo "WARNING: failed to set GitHub secret automatically — set it manually."
else
  echo
  echo "GitHub CLI not available/authenticated — set the SECRET_KEY repo secret manually:"
  echo "  repo Settings > Secrets and variables > Actions > New repository secret"
fi

# ---- 9. Restart the Web App ---------------------------------------------------
echo
echo "Restarting Web App..."
az webapp restart --resource-group "$RESOURCE_GROUP" --name "$WEBAPP_NAME" -o none

# ---- Summary -------------------------------------------------------------------
echo
echo "=============================================================="
echo " DONE. Save these values somewhere safe:"
echo "=============================================================="
echo "Postgres server FQDN : $PG_HOST"
echo "Postgres admin user  : $PG_ADMIN_USER"
echo "Postgres admin pass  : $PG_ADMIN_PASSWORD"
echo "Postgres database    : $PG_DB_NAME"
echo "DATABASE_URL         : $DATABASE_URL"
echo "MEDIA_BASE_URL       : $MEDIA_BASE_URL"
echo "Django SECRET_KEY    : $SECRET_KEY"
echo "=============================================================="
echo
echo "Next step: git push origin main to trigger the deployment workflow."
