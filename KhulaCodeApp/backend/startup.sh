#!/bin/bash
# Startup script used by Azure App Service (Linux, Python runtime) to run
# the Django app with Gunicorn. Configure this as the App Service
# "Startup Command" in: Azure Portal > App Service > Configuration > General
# settings > Startup Command, e.g.:
#
#   bash KhulaCodeApp/backend/startup.sh
#
# (Or, if your App Service's "App service settings > Startup Command" only
# runs from the repo root after Oryx build places the app at /home/site/wwwroot,
# just point it at this file's path relative to wwwroot.)

set -e

# Ensure we run relative to this script's directory (KhulaCodeApp/backend)
cd "$(dirname "$0")"

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting Gunicorn..."
exec gunicorn mysite.wsgi:application --bind=0.0.0.0:8000 --timeout 600
