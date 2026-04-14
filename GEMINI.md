# 🏛️ AEM Monorepo Constitution (v5.3.0)
_Last Updated: 2026-04-14_

เอกสารฉบับนี้คือ **Instructional Context** สูงสุดสำหรับ `aemdevweb-me.monorepo`

## 🏗️ Core Architecture & Tech Stack
- **Manager:** `pnpm` Workspaces + `Turbo` Build System
- **Framework:** Next.js 16 (PPR & "use cache" focus)
- **Apps:** `apps/web` (Main), `apps/unlink-th` (Reputation)
- **Packages:** `@repo/core` (Logic), `@repo/db` (Facade), `@repo/ui` (Institutional Design)
- **Design System:** OKLCH Colors, Geist Fonts, Liquid Glass Style

## 🛠️ Operational Workflow (Standard Protocol)
1. **Preparation:** `pnpm install` && `pnpm run env:sync`
2. **Quality Check:** `pnpm run audit` (Mandatory before PR)
3. **Execution:** Use R-T-C-C Prompting (Role-Task-Context-Constraints)
4. **Validation:** Build test on ARM64/Termux compatibility

## 🛡️ Mandates & Constraints
- **Data Safety:** ห้ามเรียก Supabase ตรงๆ ให้ผ่าน `@repo/db` เท่านั้น
- **Factory Patterns:** ใช้ `defineAreaNode` สำหรับข้อมูล 77 จังหวัด
- **SEO Mastery:** ทุกหน้าต้องมี Schema.org JSON-LD สำหรับ Entity Linking
- **Resource Locations:** เครื่องมือเสริมจัดเก็บใน `~/sources/` ทั้งหมด

---
_Authorized by Gemini CLI for AEM Monorepo Ecosystem_
