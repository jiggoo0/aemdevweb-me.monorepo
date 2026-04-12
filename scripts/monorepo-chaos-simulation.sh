#!/bin/bash

# --- Config ---
PROJECT_ROOT=$(pwd)
APPS_DIR="$PROJECT_ROOT/apps"
PACKAGES_DIR="$PROJECT_ROOT/packages"

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "--- Monorepo Chaos Engine ---"

# --- Functions ---

inject_circular_dependency() {
  echo -e "${RED}[Chaos]${NC} Injecting Circular Dependency..."
  # Backup
  cp packages/core/package.json packages/core/package.json.bak
  cp packages/ui/package.json packages/ui/package.json.bak
  # core depends on ui
  node -e "
    const fs = require('fs');
    const path = 'packages/core/package.json';
    const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies['@repo/ui'] = 'workspace:*';
    fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
  "
  # ui depends on core
  node -e "
    const fs = require('fs');
    const path = 'packages/ui/package.json';
    const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies['@repo/core'] = 'workspace:*';
    fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
  "
  echo "Done: core <-> ui circular dependency created."
}

inject_boundary_violation() {
  echo -e "${RED}[Chaos]${NC} Injecting Boundary Violation (Deep Import)..."
  FILE="apps/web/app/(main)/page.tsx"
  if [ -f "$FILE" ]; then
    # Backup
    cp "$FILE" "$FILE.bak"
    # Change @repo/core import to deep import with relative path
    sed -i "s|import { AREA_NODES } from \"@repo/core\"|import { AREA_NODES } from \"../../../packages/core/src/index\"|g" "$FILE"
    echo "Done: Boundary violation injected in $FILE."
  else
    echo "File $FILE not found."
  fi
}

inject_phantom_dependency() {
  echo -e "${RED}[Chaos]${NC} Injecting Phantom Dependency..."
  FILE="apps/web/app/(main)/page.tsx"
  if [ -f "$FILE" ]; then
    # Backup if not already backed up
    if [ ! -f "$FILE.bak" ]; then cp "$FILE" "$FILE.bak"; fi
    echo "import _ from 'lodash';" | cat - "$FILE" > temp && mv temp "$FILE"
    echo "Done: lodash imported in $FILE but not in package.json."
  fi
}

inject_version_mismatch() {
  echo -e "${RED}[Chaos]${NC} Injecting Version Mismatch..."
  # Backup
  cp apps/web/package.json apps/web/package.json.bak
  cp apps/unlink-th/package.json apps/unlink-th/package.json.bak
  node -e "
    const fs = require('fs');
    const path = 'apps/web/package.json';
    const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
    pkg.dependencies['react'] = '18.2.0';
    fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
  "
  node -e "
    const fs = require('fs');
    const path = 'apps/unlink-th/package.json';
    const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
    pkg.dependencies['react'] = '19.0.0-rc';
    fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
  "
  echo "Done: React version mismatch injected between web and unlink-th apps."
}

restore_repo() {
  echo -e "${GREEN}[Restore]${NC} Restoring repo using .bak files..."
  # Use find to locate all .bak files and restore them
  find apps packages -name "*.bak" | while read bak; do
    original="${bak%.bak}"
    mv "$bak" "$original"
    echo "Restored: $original"
  done
  # Also try git checkout for tracked files just in case
  git checkout apps packages 2>/dev/null
  echo "Done: All changes reverted."
}

# --- Main ---

case "$1" in
  --circular)
    inject_circular_dependency
    ;;
  --boundary)
    inject_boundary_violation
    ;;
  --phantom)
    inject_phantom_dependency
    ;;
  --mismatch)
    inject_version_mismatch
    ;;
  --all)
    inject_circular_dependency
    inject_boundary_violation
    inject_phantom_dependency
    inject_version_mismatch
    ;;
  --restore)
    restore_repo
    ;;
  *)
    echo "Usage: $0 [--circular|--boundary|--phantom|--mismatch|--all|--restore]"
    ;;
esac
