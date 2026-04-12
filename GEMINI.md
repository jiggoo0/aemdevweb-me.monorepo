# 🏛️ AEM Monorepo Constitution (v4.0.0)

เอกสารนี้คือมาตรฐานสูงสุดในการพัฒนาโปรเจกต์ `aemdevweb-me.monorepo` AI ทุกตัวต้องยึดถือปฏิบัติ 100% เพื่อรักษาความสมบูรณ์ของระบบ (System Integrity)

---

## 🎯 1. Architectural Mandates

- **Factory Pattern (@repo/core):** ห้ามสร้าง AreaNode โดยไม่ผ่าน `defineAreaNode` และต้องมี `name_th`, `name_en` เสมอเพื่อป้องกัน Build Error
- **Facade Pattern (@repo/db):** ทุกแอปพลิเคชันต้องเรียกข้อมูลผ่าน `DataRegistry` เท่านั้น ห้ามเรียก `supabase` client โดยตรงในระดับ UI
- **Strategy Pattern (apps/web):** การเจน SEO และ Layout ในหน้าจังหวัดต้องแยกเป็น Strategies เพื่อรองรับ 77 จังหวัดที่มีพฤติกรรมต่างกัน

## 🎨 2. Design & UI Standards

- **Design System:** อ้างอิงสไตล์จาก `docs/DESIGN.md` เสมอ
- **Color Space:** ใช้ **OKLCH** 100% สำหรับสไตล์ใหม่ๆ
- **Typography:** ใช้ `Geist Sans` และ `Geist Mono` เท่านั้น
- **Component Library:** ใช้คอมโพเนนต์จาก `@repo/ui` และรักษาสไตล์ **Glassmorphism**

## ⚡ 3. Next.js 16 & Performance

- **Caching:** ใช้ `cacheComponents: true` (boolean) ใน `next.config.js` เสมอ
- **Directives:** ใช้ `"use cache"` ในระดับ Server Components ของ App Router (ห้ามใช้ใน Shared Packages เพื่อความเสถียรบน WASM)
- **PPR:** รองรับ Partial Prerendering ผ่านโครงสร้าง Suspense Boundaries ที่ชัดเจน

## 🛡️ 4. Environment Constraints (Termux/arm64)

- **Bundler:** ต้องใช้ `--webpack` ในการ build/dev เสมอ
- **WASM:** ห้ามใช้ native bindings ที่ไม่มีใน arm64 (เช่น Turbopack)
- **Integrity:** รัน `pnpm run audit` ก่อนส่งมอบงานทุกครั้ง

---

_Enforced by Gemini CLI & AEMZA MACKS_
