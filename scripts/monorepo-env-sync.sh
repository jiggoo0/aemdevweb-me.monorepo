#!/bin/bash

# [MONOREPO SYNC]: Domain & Auth Environment Synchronizer
# Strategy: Single Source of Truth from root .env.local

ROOT_ENV=".env.local"
APPS=("apps/web" "apps/me" "apps/unlink-th")

if [ ! -f "$ROOT_ENV" ]; then
    echo "❌ Root .env.local not found!"
    exit 1
fi

echo "🔄 Synchronizing Environment Variables to all Apps..."

for APP in "${APPS[@]}"; do
    cp "$ROOT_ENV" "$APP/.env.local"
    echo "✅ Synced to $APP"
done

echo "🚀 Monorepo Domain Engine is ready for Local/Cloud development."
