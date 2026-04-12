# 🧠 AI Database Manifest (v4.0.0)

เอกสารฉบับนี้คือ "ความจริง" ชุดเดียวที่ AI ทุกตัวต้องใช้อ้างอิงก่อนการ Query หรือ Modify ฐานข้อมูล Supabase (Project: aureolin-horizon)

---

## 🏗️ 1. Core Tables (Public Schema)

### 📍 `provinces_content`
เก็บเนื้อหาเชิงลึกและ SEO ของแต่ละจังหวัด
- `id` (uuid): PK
- `province_slug` (text): Unique Slug (e.g., "bangkok")
- `title` (text): หัวข้อหน้าจังหวัด
- `content` (text): เนื้อหาหลัก (HTML/Markdown)
- `seo_title`, `seo_description` (text): สำหรับ Metadata
- `keywords` (text[]): คำค้นหาประจำจังหวัด

### 🚀 `projects`
เก็บผลงานที่ผ่านๆ มา
- `id` (uuid): PK
- `slug` (text): Unique
- `title`, `description` (text)
- `category` (text): ประเภทงาน (e.g., "Web App", "SEO")

### 🛡️ `unlink_verification` (Trust Engine)
เก็บลายเซ็นดิจิทัลและข้อมูลการตรวจสอบความปลอดภัย
- `site_id` (text): รหัสโหนดที่ได้รับตรวจสอบ
- `signature` (text): ลายเซ็นต์เข้ารหัส
- `status` (text): "VERIFIED" | "PENDING"

---

## 🚦 2. AI Workflows (How to update)

1. **Before Query:** AI ต้องอ่าน `packages/db/src/types.ts` เพื่อเช็คความถูกต้องของฟิลด์
2. **Before Update:** AI ต้องทำการตรวจสอบ RLS Policy (ในหน้า Dashboard) ว่าอนุญาตให้เขียนข้อมูลหรือไม่
3. **After Update:** ต้องทำการอัปเดตไฟล์นี้ (DATABASE-SCHEMA.md) ทันทีหากมีการเปลี่ยนโครงสร้างตาราง

---

## 📅 3. Sync Status
- **Last Sync:** 2026-04-12
- **Current Version:** v4.0.0 (Next.js 16 Compatible)
- **Status:** 🟢 Healthy & Synchronized with @repo/db
