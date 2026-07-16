# Deploying KhulaCode to Azure

This document explains how the KhulaCode Django + React app is deployed to
**Azure App Service** via GitHub Actions, and lists the manual, one-time
Azure setup steps you need to complete before/after the pipeline works.

The GitHub Actions workflow at `.github/workflows/main_khulacode.yml`
already handles building the React frontend, collecting Django static
files, and deploying to your Azure Web App named **KhulaCode** on every
push to `main`. This guide covers everything *around* that pipeline.

---

## 1. Architecture overview

- **Backend**: Django (KhulaCodeApp/backend) served by Gunicorn.
- **Frontend**: React + Vite (KhulaCodeApp/react_frontend/react_frontend_typescript),
  built into static files and served **by Django** (WhiteNoise + a catch-all
  route in `mysite/urls.py` that returns `index.html` for any non-API path,
  letting React Router handle client-side routing).
- **Database**: SQLite locally; Azure Database for PostgreSQL in production
  (via `DATABASE_URL`).
- **Media (user uploads: videos, profile pics, badges)**: local
  `/media/` folder in dev; Azure Blob Storage in production (via
  `MEDIA_BASE_URL`).

Because the frontend is served by Django itself (single App Service), you
only need **one** Azure Web App — no separate Static Web App/Front Door is
required, which keeps this simple.

---

## 2. One-time Azure resource setup

You said Azure is already connected to your GitHub repo (i.e. the Web App
"KhulaCode" + the deployment workflow file already exist). You still need
to provision/configure the following:

### 2.1 Azure Database for PostgreSQL (recommended over SQLite in prod)
1. Azure Portal → Create a resource → **Azure Database for PostgreSQL Flexible Server**.
2. Choose Burstable B1ms (cheapest) tier for a small app.
3. Set an admin username/password, and note the **server hostname**.
4. Under **Networking**, allow Azure services to access the server (or add
   your Web App's outbound IPs) — easiest: enable "Allow public access from
   any Azure service".
5. Create a database, e.g. `khulacode`.
6. Build your `DATABASE_URL`:
   ```
   postgres://<user>:<password>@<server-hostname>:5432/khulacode?sslmode=require
   ```

### 2.2 Azure Blob Storage (for media files: videos, pfp/, areas/)
1. Azure Portal → Create a resource → **Storage account**.
2. Inside it, create a **Blob container** named e.g. `khulacode-media`.
3. Set the container's **Public access level** to "Blob" (anonymous read
   for blobs only) so images/videos can be loaded directly by the browser.
4. Upload your existing `KhulaCodeApp/backend/media/pfp/*` and
   `KhulaCodeApp/backend/media/areas/*` images (and any lesson videos) into
   that container, preserving the `pfp/...` and `areas/...` folder
   structure, since the Django serializers build URLs like
   `{MEDIA_BASE_URL}/pfp/pfp0.png`.
5. Note the container's public base URL, it looks like:
   ```
   https://<storageaccountname>.blob.core.windows.net/khulacode-media
   ```

### 2.3 App Service Configuration (Application settings / env vars)
Go to your **KhulaCode** Web App → Settings → **Configuration** →
Application settings, and add:

| Name | Value |
|---|---|
| `SECRET_KEY` | a long random string (generate with `python -c "import secrets; print(secrets.token_urlsafe(50))"`) |
| `DEBUG` | `False` |
| `DATABASE_URL` | the Postgres URL from step 2.1 |
| `MEDIA_BASE_URL` | the Blob Storage URL from step 2.2 |
| `ALLOWED_HOSTS` | (optional) extra comma-separated hostnames, e.g. a custom domain |
| `CSRF_TRUSTED_ORIGINS` | (optional) e.g. `https://www.yourdomain.com` if using a custom domain |
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `true` (usually set automatically) |

Click **Save**, then **Continue** to restart the app with new settings.

### 2.4 Startup Command
Go to **Configuration → General settings → Startup Command** and set it to:
```
bash KhulaCodeApp/backend/startup.sh
```
This script (added at `KhulaCodeApp/backend/startup.sh`) runs
`migrate`, `collectstatic`, then starts Gunicorn. (Alternatively you can
leave Startup Command blank and let Oryx auto-detect Django + gunicorn, but
then you must run `migrate` manually once via SSH/Kudu console the first
time and after any new migrations.)

### 2.5 GitHub Actions secret for collectstatic step
The workflow's "Collect static files" build step needs a `SECRET_KEY`
secret to run `manage.py collectstatic` without Django complaining about a
missing key. Add it in GitHub: repo → Settings → Secrets and variables →
Actions → New repository secret:
- Name: `SECRET_KEY`
- Value: same secret key you used in step 2.3 (or any placeholder string —
  it isn't security-sensitive for the collectstatic step alone, but using
  the same value avoids confusion).

(The `AZUREAPPSERVICE_CLIENTID_...`, `AZUREAPPSERVICE_TENANTID_...`, and
`AZUREAPPSERVICE_SUBSCRIPTIONID_...` secrets referenced in the workflow
should already exist since you connected GitHub via the Azure Portal's
deployment center.)

---

## 3. What the GitHub Actions workflow does (already set up)

On every push to `main`:
1. Checks out the repo.
2. Installs Node 20 + Python 3.12.
3. `npm ci && npm run build` inside the React app — outputs to `dist/`.
4. Copies `dist/` into `KhulaCodeApp/backend/react_build/` (this is where
   Django's `TemplateView` and `STATICFILES_DIRS` look for the built
   frontend — see `mysite/settings.py` and `mysite/urls.py`).
5. Creates a Python venv, installs `requirements.txt`.
6. Runs `collectstatic` so WhiteNoise can serve JS/CSS/images.
7. Uploads the whole repo (minus venv/node_modules) as a deployment
   artifact.
8. Logs into Azure and deploys the artifact to the **KhulaCode** Web App's
   Production slot using `azure/webapps-deploy`.

---

## 4. Migrating existing local media URLs

Because the `Video.video_url` field stores full URLs
(`http://127.0.0.1:8000/media/videos/...`), once you switch to Blob
Storage in production you should rewrite these to point at the new
`MEDIA_BASE_URL`. A management command has been added for this:

```bash
# Preview changes without saving:
python manage.py migrate_media_urls --dry-run

# Apply the changes:
python manage.py migrate_media_urls
```

Run this against your **production** database (e.g. via Azure's SSH/Kudu
console, or by temporarily pointing your local `DATABASE_URL` env var at
the Azure Postgres instance) after you've uploaded the media files to Blob
Storage and configured `MEDIA_BASE_URL`.

Note: profile picture (`pfp/pfpN.png`) and progress badge (`areas/*.png`)
URLs are generated dynamically in `KhulaCode/serializers.py` from
`settings.MEDIA_BASE_URL` — no database migration needed for those, they
automatically pick up the new base URL once the env var is set.

---

## 5. Frontend API URL configuration

The React app now reads its backend API URL from `VITE_API_URL` (see
`.env.development` / `.env.production` in
`KhulaCodeApp/react_frontend/react_frontend_typescript/`):

- **Development** (`npm run dev`): `VITE_API_URL=http://127.0.0.1:8000/KhulaCode/`
- **Production** (`npm run build`, used by CI): `VITE_API_URL=/KhulaCode/`
  (relative path — works because Django serves both frontend and API from
  the same Azure host, no CORS needed).

Similarly, `VITE_MEDIA_URL` controls where the "create course" video URL
helper points videos at (defaults to Blob Storage container URL in
`.env.production`). Update these `.env.production` values if your Blob
Storage account/container name differs from the placeholder
`khulacode.blob.core.windows.net/khulacode-media` used in this repo — swap
in your actual storage account/container name from step 2.2.

---

## 6. Deploying

Once the above Azure resources + App Settings are configured:

```bash
git add -A
git commit -m "Configure production deployment (Azure Postgres + Blob Storage + CI build)"
git push origin main
```

This triggers the GitHub Actions workflow. Watch progress under the repo's
**Actions** tab. Once it completes, visit:

```
https://khulacode-bmbhh9hrg3a2euc0.austriaeast-01.azurewebsites.net
```

(or your app's actual `*.azurewebsites.net` hostname / custom domain).

### First-time checklist after first successful deploy
- [ ] Confirm the site loads (React homepage renders, not a Django error page).
- [ ] Register a test user / sign in — confirms DB connectivity.
- [ ] Check that images (pfp/area badges) load from Blob Storage, not
      127.0.0.1.
- [ ] If you had existing local data you want to keep, either:
      - Export/import via `manage.py dumpdata` / `loaddata`, or
      - Manually re-create schools/lessons/users in production.
- [ ] Run `python manage.py migrate_media_urls` against production DB if you
      have existing `Video` rows with local media URLs.
- [ ] Create a Django superuser in production for `/admin/` access:
      ```
      python manage.py createsuperuser
      ```
      (run via Azure SSH/Kudu console, since there's no interactive shell
      in the CI pipeline).

---

## 7. Troubleshooting tips

- **500 error / "DisallowedHost"**: add your app's hostname to
  `ALLOWED_HOSTS` env var in App Service Configuration.
- **Static files 404 (blank white page, no CSS)**: confirm `collectstatic`
  ran (check the GitHub Actions build log) and that `STATIC_ROOT` /
  WhiteNoise middleware are active (already configured in `settings.py`).
- **API calls fail with CORS errors**: shouldn't happen since frontend +
  backend are same-origin in production, but if you ever split them onto
  separate domains, revisit `CORS_ALLOW_ALL_ORIGINS` / `CSRF_TRUSTED_ORIGINS`.
- **Database connection errors**: double check `DATABASE_URL` format and
  that the Postgres server's firewall allows the Web App's outbound
  traffic ("Allow public access from any Azure service").
- **Media images broken**: verify the Blob container's public access level
  is "Blob" and `MEDIA_BASE_URL` exactly matches the container's public
  URL (no trailing slash).
