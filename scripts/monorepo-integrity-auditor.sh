#!/bin/bash

# --- Config ---
PROJECT_ROOT=$(pwd)
APPS_DIR="$PROJECT_ROOT/apps"
PACKAGES_DIR="$PROJECT_ROOT/packages"

# --- Colors ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}--- Monorepo Integrity Auditor ---${NC}"

# --- Check 1: Boundary Violations (Deep/Relative Imports) ---
check_boundary() {
  echo -e "\n[1/5] Checking Boundary Violations..."
  VIOLATIONS=$(grep -r "import .* from \"\.\./\.\./\.\./packages/" apps --include="*.tsx" --include="*.ts")
  if [ -z "$VIOLATIONS" ]; then
    echo -e "${GREEN}✓ No boundary violations found.${NC}"
  else
    echo -e "${RED}✗ Found boundary violations:${NC}"
    echo "$VIOLATIONS"
  fi
}

# --- Check 2: Version Mismatch ---
check_versions() {
  echo -e "\n[2/5] Checking Version Mismatch (Common Libraries)..."
  node -e "
    const fs = require('fs');
    const path = require('path');
    const packages = [
      ...fs.readdirSync('apps').map(d => 'apps/' + d + '/package.json'),
      ...fs.readdirSync('packages').map(d => 'packages/' + d + '/package.json')
    ].filter(p => fs.existsSync(p));

    const commonLibs = ['react', 'react-dom', 'next', 'typescript'];
    const libVersions = {};

    packages.forEach(pkgPath => {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const deps = { ...pkg.dependencies, ...pkg.devDependencies };
      commonLibs.forEach(lib => {
        if (deps[lib]) {
          if (!libVersions[lib]) libVersions[lib] = [];
          libVersions[lib].push({ pkg: pkg.name, version: deps[lib] });
        }
      });
    });

    let errors = false;
    Object.keys(libVersions).forEach(lib => {
      const versions = libVersions[lib];
      const uniqueVersions = [...new Set(versions.map(v => v.version))];
      if (uniqueVersions.length > 1) {
        errors = true;
        console.log('\x1b[31m✗ Mismatch in ' + lib + ':\x1b[0m');
        versions.forEach(v => console.log('  - ' + v.pkg + ': ' + v.version));
      }
    });

    if (!errors) console.log('\x1b[32m✓ All common library versions are consistent.\x1b[0m');
  "
}

# --- Check 3: Circular Dependencies (between packages) ---
check_circular() {
  echo -e "\n[3/5] Checking Circular Dependencies..."
  node -e "
    const fs = require('fs');
    const path = require('path');
    const packagesDir = 'packages';
    const pkgDirs = fs.readdirSync(packagesDir).filter(d => fs.statSync(path.join(packagesDir, d)).isDirectory());
    
    const graph = {};
    pkgDirs.forEach(d => {
      const pkgPath = path.join(packagesDir, d, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        graph[pkg.name] = Object.keys(pkg.dependencies || {}).filter(dep => dep.startsWith('@repo/'));
      }
    });

    function findCycle(node, visited = new Set(), path = []) {
      if (path.includes(node)) return [...path, node];
      if (visited.has(node)) return null;
      visited.add(node);
      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        const cycle = findCycle(neighbor, visited, [...path, node]);
        if (cycle) return cycle;
      }
      return null;
    }

    let foundCycle = false;
    Object.keys(graph).forEach(node => {
      const cycle = findCycle(node);
      if (cycle) {
        foundCycle = true;
        console.log('\x1b[31m✗ Circular dependency found:\x1b[0m ' + cycle.join(' -> '));
      }
    });
    if (!foundCycle) console.log('\x1b[32m✓ No circular dependencies between packages found.\x1b[0m');
  "
}

# --- Check 4: Name Conflicts (Duplicate Package Names) ---
check_duplicates() {
  echo -e "\n[4/5] Checking for Duplicate Package Names..."
  node -e "
    const fs = require('fs');
    const path = require('path');
    const pkgs = [
      ...fs.readdirSync('apps').map(d => 'apps/' + d + '/package.json'),
      ...fs.readdirSync('packages').map(d => 'packages/' + d + '/package.json')
    ].filter(p => fs.existsSync(p));

    const names = {};
    let errors = false;
    pkgs.forEach(p => {
      const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (!names[pkg.name]) names[pkg.name] = [];
      names[pkg.name].push(p);
    });

    Object.keys(names).forEach(name => {
      if (names[name].length > 1) {
        errors = true;
        console.log('\x1b[31m✗ Duplicate name \"' + name + '\" found in:\x1b[0m');
        names[name].forEach(p => console.log('  - ' + p));
      }
    });
    if (!errors) console.log('\x1b[32m✓ No duplicate package names found.\x1b[0m');
  "
}

# --- Check 5: Naming Standards (@repo/*) ---
check_naming_standard() {
  echo -e "\n[5/5] Checking Naming Standards (@repo/* or internal names)..."
  node -e "
    const fs = require('fs');
    const path = require('path');
    const pkgs = [
      ...fs.readdirSync('apps').map(d => 'apps/' + d + '/package.json'),
      ...fs.readdirSync('packages').map(d => 'packages/' + d + '/package.json')
    ].filter(p => fs.existsSync(p));

    let errors = false;
    pkgs.forEach(p => {
      const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (!pkg.name.startsWith('@repo/') && !['web', 'me', 'unlink', 'test'].includes(pkg.name)) {
        errors = true;
        console.log('\x1b[33m⚠ Non-standard naming in ' + p + ': \"' + pkg.name + '\"\x1b[0m');
        console.log('  Advice: Consider using \"@repo/\" prefix for consistency.');
      }
    });
    if (!errors) console.log('\x1b[32m✓ All package names follow standards.\x1b[0m');
  "
}

# --- Run ---
check_boundary
check_versions
check_circular
check_duplicates
check_naming_standard

echo -e "\n${CYAN}--- Audit Complete ---${NC}"
