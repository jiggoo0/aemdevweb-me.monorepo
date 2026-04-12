# Database Schema Design: AEM Monorepo Ecosystem

เอกสารฉบับนี้กำหนดโครงสร้างฐานข้อมูล (PostgreSQL/Supabase) สำหรับโปรเจกต์ `aemdevweb-me.monorepo` เพื่อรองรับระบบ P-SEO 77 จังหวัด และระบบ Trust Ledger

---

## 1. Entity-Relationship Diagram (ERD)

```text
[Users] (Admin)
  |
  |---< [Posts] (Blog)
  |
[Provinces] (Core Area Nodes)
  |
  |---1:1--- [ProvinceContent] (SEO/Marketing)
  |---1:N--- [Leads] (Inquiries)
  |---1:N--- [Verifications] (Trust Ledger)
  |
[Projects] (Portfolio)
  |
  |---M:N--- [Provinces] (via ProjectLocations)
```

---

## 2. Table Definitions

### 2.1 Table: `provinces` (Core Nodes)
ทำหน้าที่เป็นสารบัญพื้นที่ 77 จังหวัด

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PK | Unique ID |
| slug | VARCHAR(50) | UNIQUE, NOT NULL | URL key (e.g., 'korat') |
| name_th | VARCHAR(100) | NOT NULL | ชื่อจังหวัดภาษาไทย |
| name_en | VARCHAR(100) | NOT NULL | ชื่อจังหวัดภาษาอังกฤษ |
| region | VARCHAR(20) | NOT NULL | ภาค (North, Northeast, etc.) |
| tier | INT | DEFAULT 2 | 1: หัวเมืองใหญ่, 2: ทั่วไป |
| priority | INT | DEFAULT 50 | ลำดับการแสดงผล SEO |

### 2.2 Table: `province_content` (SEO Facade)
เก็บเนื้อหา Marketing และ Metadata สำหรับการทำ SEO แยกออกจากตารางหลักเพื่อ Performance

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| province_id | INT | PK, FK | Reference to provinces.id |
| seo_title | TEXT | NOT NULL | Title tag |
| seo_description| TEXT | NOT NULL | Meta description |
| keywords | TEXT[] | - | Array ของคีย์เวิร์ด |
| custom_layout | JSONB | - | ลำดับ Section (Strategy Pattern) |

### 2.3 Table: `verifications` (Institutional Ledger)
เก็บบันทึกความน่าเชื่อถือและสถานะการตรวจสอบ (Trust Badge)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | Unique Verification ID |
| site_id | VARCHAR(100)| UNIQUE, NOT NULL | รหัสอ้างอิงของ Node |
| ledger_signature| TEXT | NOT NULL | Hash สำหรับตรวจสอบความถูกต้อง |
| status | VARCHAR(20) | CHECK (...) | active, revoked, pending |

---

## 3. SQL DDL (Ready for Supabase)

```sql
-- Create Core Table
CREATE TABLE provinces (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(50) UNIQUE NOT NULL,
  name_th VARCHAR(100) NOT NULL,
  name_en VARCHAR(100) NOT NULL,
  region VARCHAR(20) NOT NULL,
  tier INT DEFAULT 2,
  priority INT DEFAULT 50,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Content Table (Optimized for Read)
CREATE TABLE province_content (
  province_id INT PRIMARY KEY REFERENCES provinces(id) ON DELETE CASCADE,
  seo_title TEXT NOT NULL,
  seo_description TEXT NOT NULL,
  long_description TEXT,
  keywords TEXT[],
  metadata JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Indices
CREATE INDEX idx_provinces_slug ON provinces(slug);
CREATE INDEX idx_provinces_priority_tier ON provinces(priority DESC, tier ASC);
```

---

## 4. Design Decisions (Rationale)

1.  **Strict Naming (`name_th`, `name_en`):** เพื่อป้องกันปัญหา `TypeError: Cannot read properties of undefined (reading 'th')` ที่เคยเกิดขึ้นในช่วง Build บนสภาพแวดล้อมจำกัด
2.  **JSONB Metadata:** ใช้สำหรับเก็บข้อมูลยืดหยุ่น เช่น Slogan ประจำจังหวัด หรือสไตล์เฉพาะตัว โดยไม่ต้องแก้ Schema บ่อยๆ
3.  **Separation of Concerns:** แยก Content ออกจากตารางหลัก เพื่อให้การ Query ข้อมูลเบื้องต้น (เช่น รายชื่อจังหวัดใน Registry) ทำงานได้รวดเร็วที่สุดโดยไม่ติดข้อมูล Text ขนาดใหญ่

---
**Maintainer:** Gemini CLI & AEMZA MACKS
**Status:** Approved for Implementation
**Date:** April 11, 2026
