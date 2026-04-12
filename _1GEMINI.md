# 🏛️ AEM Monorepo Constitution (v5.0.0)

เอกสารนี้คือมาตรฐานสูงสุดในการพัฒนาโปรเจกต์ `aemdevweb-me.monorepo` AI และนักพัฒนาทุกท่านต้องยึดถือปฏิบัติ 100% เพื่อรักษาความสมบูรณ์ของระบบ (System Integrity)

---

## 🎯 1. Architectural & Database Mandates

- **Factory Pattern (@repo/core):** ห้ามสร้าง AreaNode โดยไม่ผ่าน `defineAreaNode` และต้องมี `name_th`, `name_en` เสมอ
- **Facade Pattern (@repo/db):** ทุกแอปพลิเคชันต้องเรียกข้อมูลผ่าน `DataRegistry` เท่านั้น ห้ามเรียก `supabase` client โดยตรง
- **Strategy Pattern (apps/web):** การเจน SEO/Layout ต้องแยกเป็น Strategies ตาม `docs/web/README.md`
- **Database Migrations:** ห้ามเก็บไฟล์ SQL ใน `src/` ให้เก็บไว้ใน `packages/db/migrations/` เท่านั้น

## 🎨 2. Design & UI Standards

- **Design System:** อ้างอิงสไตล์จาก `docs/DESIGN.md` และทรัพยากรใน `docs/resources/design/` (Apple, Stripe, Vercel)
- **Color Space:** ใช้ **OKLCH** 100% สำหรับสไตล์ใหม่ๆ (Institutional Core & Cinematic Dark)
- **Typography:** ใช้ `Geist Sans` และ `Geist Mono` เท่านั้น

## ⚡ 3. Next.js 16 & Performance

- **Development:** ต้องใช้ทรัพยากรใน `docs/resources/nextjs/` เป็นคู่มือมาตรฐาน (RSC, PPR, Use Cache)
- **Directives:** ใช้ `"use cache"` ในระดับ Server Components (ห้ามใช้ใน Shared Packages เพื่อความเสถียรบน WASM)
- **Bundler:** ต้องใช้ `--webpack` ในการ build/dev เสมอเพื่อรองรับ Termux/ARM64

## 🔄 4. Operational Workflow (Strict Enforcement)

- **Documentation:** ทุกการพัฒนาต้องแยกข้อมูลตามโฟลเดอร์แอปใน `docs/` (`web`, `unlink-th`, `test`)
- **Integrity Audit:** ต้องรัน `pnpm run audit` และ `pnpm run standardize` ก่อนส่งมอบงานทุกครั้ง
- **Workflow Compliance:** ปฏิบัติตามขั้นตอนใน `docs/WORKFLOW.md` (Sync -> Dev -> Audit -> Deploy)

## 🛡️ 5. AI Agent Guidelines

- **Context Load:** AI ต้องอ่าน `docs/AI-DIRECTION.md` และ `docs/WORKFLOW.md` ก่อนเริ่มงานเสมอ
- **Automation:** ใช้ `gemini` CLI ในการวิเคราะห์โค้ดและช่วยตรวจสอบมาตรฐานก่อน Commit

---

_Enforced & Updated by Gemini CLI | v5.0.0_
_Last Updated: 2026-04-12_
