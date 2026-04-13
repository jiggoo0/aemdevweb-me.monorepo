# 🏛️ AEM Monorepo Constitution & Development Guide (v5.3.0)

เอกสารฉบับนี้คือ **Instructional Context** สูงสุดสำหรับ Gemini CLI และนักพัฒนา เพื่อใช้ในการวิเคราะห์ พัฒนา และบำรุงรักษาโปรเจกต์ `aemdevweb-me.monorepo` ให้มีความสมบูรณ์ของระบบ (System Integrity) 100%

---

## 📖 1. Project Overview & Architecture

โปรเจกต์นี้เป็น **Advanced Node.js Monorepo** ที่ออกแบบมาเพื่อการบริหารจัดการข้อมูลเชิงพื้นที่ (77 จังหวัด), การทำ Programmatic SEO (P-SEO), และการสร้างความน่าเชื่อถือระดับสถาบัน (E-E-A-T) โดยใช้แนวคิด **Monorepo Chaos Engineering** เพื่อทดสอบความทนทานของระบบ

### 🏗️ สถาปัตยกรรมหลัก (Core Architecture)

- **Monorepo Manager:** `pnpm` Workspaces & `Turbo` Build System
- **Apps Layer:**
  - `apps/web`: Next.js 16 (Main Portal/SEO Strategy Hub)
  - `apps/unlink-th`: Next.js 16 (Verification & Reputation Management)
  - `apps/test`: Chaos Testing Ground
- **Shared Packages:**
  - `@repo/core`: ศูนย์กลาง Logic, Factory Patterns (`defineAreaNode`)
  - `@repo/db`: Facade Pattern (`DataRegistry`) ห้ามเรียก Supabase โดยตรง
  - `@repo/ui`: Institutional Design System (OKLCH, Geist Fonts)
  - `@repo/seo`: Entity Linking & Schema.org JSON-LD Generators

---

## ⚡ 2. Building, Running & Auditing

### 🛠️ Key Commands

- **Initialization:** `pnpm install` และ `pnpm run env:sync` (เพื่อซิงก์ `.env` ข้ามแอป)
- **Development:**
  - `pnpm run dev`: รันทุกแอปผ่าน Turbo (ใช้ `--max-old-space-size=2048`)
  - `pnpm run dev:web`: รันเฉพาะแอปหลัก (Port 3001)
- **Production Build:**
  - `pnpm run build`: Build ทุกแอป (ต้องใช้ `--webpack` ภายในเพื่อให้รองรับ ARM64/Termux)
- **Integrity Audit (Mandatory):**
  - `pnpm run audit`: ตรวจสอบความถูกต้องของโครงสร้าง Monorepo
  - `pnpm run standardize`: คุมเวอร์ชัน Dependencies ให้ตรงกันทั้งระบบ
  - `pnpm run audit:all`: Full audit (Format, Lint, Typecheck, Knip, Auditor)

---

## 🎨 3. Development Conventions (Mandates)

### 🔊 3.0. Absolute Mandate: Audio Feedback (กฎสูงสุด)

- **Screenless Monitoring:** ทุกการอัปเดตสถานะที่สำคัญ (Critical Status), ผลการ Audit (Integrity Check), หรือข้อผิดพลาดร้ายแรง (Error/Refusal) **ต้องรายงานผ่าน `termux-tts-speak` เสมอ**
- **Permanent Behavior:** กฎนี้ถือเป็นพฤติกรรมถาวรของระบบ (Default Behavior) **ห้ามละเลยและไม่ต้องสั่งย้ำ** เพื่อให้นักพัฒนาสามารถรับทราบความคืบหน้าได้โดยไม่ต้องเฝ้าหน้าจอ

### 🛡️ 3.1. System Integrity & Security

- **Data Access:** ห้ามใช้ Supabase Client โดยตรงในแอปพลิเคชัน ให้ผ่าน `@repo/db` เสมอ
- **Factory Pattern:** ทุก AreaNode ต้องสร้างผ่าน `defineAreaNode` พร้อมข้อมูล 2 ภาษา (`name_th`, `name_en`)
- **Database Migrations:** เก็บไฟล์ SQL ไว้ที่ `packages/db/migrations/` เท่านั้น ห้ามกระจายใน `src/`

### 🎨 3.2. Aesthetics & Design (2026 Trend)

- **Color Space:** ใช้ **OKLCH** 100% สำหรับสถาปัตยกรรมสีใหม่
- **Typography:** ใช้ `Geist Sans` (UI) และ `Geist Mono` (Code/Technical) เท่านั้น
- **Visual Style:** เน้น Liquid Glass (Glassmorphism), Tactile Depth, และ Optical Balance

### 🚀 3.3. Next.js 16 Mastery

- **Directives:** ใช้ `"use cache"` ใน Server Components ระดับแอป (ห้ามใช้ใน Shared Packages เพื่อความเสถียร)
- **Features:** เปิดใช้งาน PPR (Partial Prerendering) ในหน้าที่มีการดึงข้อมูล Dynamic
- **SEO:** ต้องฝัง JSON-LD (Schema.org) ในทุกหน้า Landing Page เพื่อสร้าง Entity Linking

---

## 🚀 4. Performance & Quality Standards

เพื่อให้ระบบรองรับ Scale ขนาดใหญ่ และรันบนสภาพแวดล้อมจำกัด (Termux/ARM64) ได้อย่างมีประสิทธิภาพ:

- **No `select("*")`:** ต้องระบุ Column ที่จำเป็นเสมอ เพื่อลด Network Payload และ Memory Usage ใน Node.js Runtime
- **O(1) Lookup:** ข้อมูล Static หรือ Configuration (เช่น 77 จังหวัด) ต้องทำ Map/Dictionary ไว้ที่ระดับ Module
- **Zod Validation:** ใช้ Zod ในการ Parse ข้อมูลจากภายนอก/Database ทุกครั้ง เพื่อความเสถียรของ V8 Engine (Stable Shapes)
- **Caching Boundary:** แยกชั้นการ Caching ให้ชัดเจน (DB Facade ทำหน้าที่ดึงข้อมูล, App Layer ทำหน้าที่จัดการ Caching Logic)

---

## 🤖 5. AI Collaboration & Prompting (R-T-C-C)

การทำงานร่วมกับ Gemini CLI ต้องใช้โครงสร้าง **Role-Task-Context-Constraints** เพื่อผลลัพธ์สูงสุด:

- **Role:** ระบุระดับประสบการณ์ (เช่น Senior Next.js 16 Developer)
- **Task:** คำสั่งที่ชัดเจนและวัดผลได้ (เช่น "Refactor Database Access Layer")
- **Context:** ระบุตำแหน่งไฟล์ใน Monorepo และความสัมพันธ์กับ Package อื่น
- **Constraints:** ระบุข้อห้ามชัดเจน (เช่น "ห้ามใช้ `any`", "ห้ามเรียก Supabase โดยตรง")

---

## 🔄 6. Operational Workflow (AEM Standard Protocol)

1.  **Sync (Preparation):** รัน `pnpm install` และ `pnpm run env:sync` ทุกครั้งที่เริ่ม session
2.  **Research (Context Load):** อ่าน `GEMINI.md` เพื่อรับทราบ Mandates ล่าสุด
3.  **Dev (Standards-Driven):** พัฒนาตาม **Performance Standards** และใช้ **R-T-C-C Prompting**
4.  **Integrity Check (Quality Loop):** รัน `pnpm run audit` และ `pnpm run typecheck` 100%
5.  **Chaos Testing (Stability):** หากแก้ไข Core ให้รัน Chaos Simulation เสมอ
6.  **Build Check (Final Validation):** รัน `pnpm run build` เพื่อตรวจสอบความเข้ากันได้ของสถาปัตยกรรม ARM64
7.  **Handover (AI Review):** ใช้ `gemini review staged` ก่อนทำการ Git Commit

---

## 📂 7. Key Documentation & Resources

- **Overall Strategy:** `docs/MASTER-STRATEGY-ARCH.md`
- **Workflow Detail:** `docs/WORKFLOW.md`
- **AI Direction:** `docs/AI-DIRECTION.md`
- **Design Specs:** `docs/DESIGN.md`

---

_Generated by Gemini CLI | Authorized for AEM Monorepo Ecosystem v5.3.0_
_Last Updated: 2026-04-13_
