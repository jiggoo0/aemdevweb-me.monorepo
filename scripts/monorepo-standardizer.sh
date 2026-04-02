#!/bin/bash

# --- Config: Standard Versions ---
REACT_VERSION="19.2.4"
REACT_DOM_VERSION="19.2.4"
NEXT_VERSION="16.2.2"
TYPESCRIPT_VERSION="5.9.2"

# --- Colors ---
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}--- Monorepo Version Standardizer ---${NC}"

# Use Node.js to update all package.json files
node -e "
const fs = require('fs');
const path = require('path');

const targetVersions = {
  'react': '$REACT_VERSION',
  'react-dom': '$REACT_DOM_VERSION',
  'next': '$NEXT_VERSION',
  'typescript': '$TYPESCRIPT_VERSION'
};

const findPackageJsons = (dir, list = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules') findPackageJsons(fullPath, list);
    } else if (file === 'package.json') {
      list.push(fullPath);
    }
  });
  return list;
};

const pkgPaths = [
  ...findPackageJsons('apps'),
  ...findPackageJsons('packages')
];

pkgPaths.forEach(p => {
  const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));
  let modified = false;

  ['dependencies', 'devDependencies'].forEach(depType => {
    if (pkg[depType]) {
      Object.keys(targetVersions).forEach(lib => {
        if (pkg[depType][lib] && pkg[depType][lib] !== targetVersions[lib]) {
          console.log(\`Updating \${lib} in \${p}: \${pkg[depType][lib]} -> \${targetVersions[lib]}\`);
          pkg[depType][lib] = targetVersions[lib];
          modified = true;
        }
      });
    }
  });

  if (modified) {
    fs.writeFileSync(p, JSON.stringify(pkg, null, 2) + '\\n');
  }
});
"

echo -e "${GREEN}✓ All package versions have been standardized.${NC}"
