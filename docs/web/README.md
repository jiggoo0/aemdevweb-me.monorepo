# 🌐 AEM Web Hub: Institutional P-SEO Engine

นี่คือแอปพลิเคชันหลักของระบบนิเวศ AEM Monorepo พัฒนาด้วย Next.js 16 (App Router) เพื่อเป็นศูนย์กลางการแสดงศักยภาพทางดิจิทัลและกลยุทธ์การยึดครองอันดับบน Search Engine แบบครอบคลุมพื้นที่

---

## 🏗️ Architecture & Stack
- **Framework:** Next.js 16.2.3 (Webpack Mode for ARM64)
- **Rendering:** Partial Prerendering (PPR) & `"use cache"` Directive
- **Styling:** Tailwind CSS 4.0 + OKLCH Color Space
- **Components:** Shared `@repo/ui` Institutional Glassmorphism
- **Data:** Facade Pattern via `@repo/db` (DataRegistry)

---

## 📍 P-SEO Strategy (77 Province Nodes)
ระบบใช้โครงสร้างการเจนหน้าอัตโนมัติสำหรับ 77 จังหวัดทั่วประเทศไทย เพื่อสร้าง **Localized Authority** โดยมีองค์ประกอบหลักดังนี้:

1.  **Strategic Metadata:** ใช้ `SEOStrategy` Interface ในการกำหนดคำค้นหาและ Metadata เฉพาะพื้นที่
2.  **Entity Linking:** เชื่อมโยงแบรนด์ AEM เข้ากับบริการในจังหวัดนั้นๆ ผ่าน JSON-LD Schema.org
3.  **Dynamic Industry Matching:** ระบบจะเสนอแนะ **Business Template** ที่เหมาะสมตามบริบทของจังหวัด (เช่น ภูเก็ต -> Hospitality, กรุงเทพ -> Professional Services)

---

## 💎 Business Templates Showcase
แอปเว็บรวบรวม 5 มาตรฐานการออกแบบระดับโลก (Case Studies) เพื่อแสดงศักยภาพแก่ผู้เข้าชม:

1.  **Hospitality Elite:** เน้น Cinematic Immersive สำหรับโรงแรมหรู
2.  **Elite Retail:** แพลตฟอร์ม E-commerce แบบ Headless พร้อม Liquid Glass UI
3.  **Legal Authority:** ดีไซน์ Minimalism สำหรับบริษัทกฎหมายและที่ปรึกษา
4.  **Industrial Core:** ระบบแคตตาล็อก B2B ที่เน้นความแม่นยำของข้อมูล
5.  **Serenity Wellness:** ดีไซน์ที่มอบความสงบและการนัดหมายที่ไร้รอยต่อสำหรับคลินิก

---

## 🛠️ Development & Deployment
- **Dev Mode:** `pnpm run dev:web` (Port 3001)
- **Build Protocol:** ต้องรันผ่าน `--webpack` ภายในเพื่อรองรับสภาพแวดล้อม Termux
- **Audit Mandate:** ทุกการแก้ไขต้องผ่าน `pnpm run audit` ก่อนการส่งมอบงาน

---
_Documentation Enforced by AEM Strategic Hub | v1.1.0_
