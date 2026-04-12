#!/bin/bash

# --- Colors ---
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}--- AEM Monorepo: Production Build Engine (Termux/ARM64) ---${NC}"

# 1. Cleanup
echo -e "${YELLOW}Step 1: Cleaning up previous builds...${NC}"
rm -rf apps/*/.next
rm -rf apps/*/out

# 2. Check Core Dependencies
echo -e "${YELLOW}Step 2: Checking Workspace Integrity...${NC}"
pnpm install

# 3. Build Apps Sequentially
# We skip Turborepo because it does not support android-arm64 (Termux)
echo -e "${YELLOW}Step 3: Building Applications...${NC}"

# App: Identity Hub (me)
echo -e "${CYAN}[Building: apps/me]${NC}"
pnpm --filter "me" build
if [ $? -ne 0 ]; then echo -e "${RED}❌ Build failed: apps/me${NC}"; exit 1; fi

# App: SEO Hub (web)
echo -e "${CYAN}[Building: apps/web]${NC}"
pnpm --filter "web" build
if [ $? -ne 0 ]; then echo -e "${RED}❌ Build failed: apps/web${NC}"; exit 1; fi

# App: Master Hub (unlink)
echo -e "${CYAN}[Building: apps/unlink]${NC}"
pnpm --filter "unlink" build
if [ $? -ne 0 ]; then echo -e "${RED}❌ Build failed: apps/unlink${NC}"; exit 1; fi

echo -e "${GREEN}🏆 PRODUCTION BUILD COMPLETED SUCCESSFULLY 100%${NC}"
