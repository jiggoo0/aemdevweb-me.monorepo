#!/bin/bash

# --- Colors ---
GREEN='\033[0;32m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}--- Monorepo Workspace Cleanup ---${NC}"

# Remove .bak files
find apps packages -name "*.bak" -type f -delete
echo -e "${GREEN}✓ Removed all .bak backup files.${NC}"

# Remove temp files if any
if [ -f "temp" ]; then
  rm temp
  echo -e "${GREEN}✓ Removed temporary 'temp' file.${NC}"
fi

echo -e "${GREEN}✓ Cleanup complete.${NC}"
