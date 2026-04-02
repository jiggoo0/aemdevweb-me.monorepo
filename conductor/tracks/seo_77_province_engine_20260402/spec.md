# Specification: seo_77_province_engine_20260402

## Goal
สร้างระบบ Dynamic Routing ใน `apps/web` เพื่อรองรับเทมเพลตเว็บไซต์รายจังหวัด 77 จังหวัด โดยใช้ข้อมูลจากฐานข้อมูลกลางและจัดการ SEO ผ่านแพ็กเกจ `@repo/seo`

## Requirements
1.  **Dynamic Route:** สร้าง Path `apps/web/app/[province]/page.tsx`
2.  **Metadata Integration:** ใช้ `generateMetadata` ร่วมกับ `@repo/seo` เพื่อสร้าง Tag อัตลักษณ์ (Signature Identity)
3.  **Data Fetching:** ดึงข้อมูลเนื้อหาเฉพาะจังหวัดจาก Supabase ผ่าน `@repo/db`
4.  **UI Components:** ใช้ Shared Components จาก `@repo/ui` ในการเรนเดอร์เทมเพลต

## Technical Design
- **Routing:** Next.js Dynamic Routes
- **Data:** Supabase Client (`@repo/db`)
- **SEO:** Metadata API (`@repo/seo`)
