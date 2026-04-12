# 🏛 MASTER STRATEGY & ARCHITECTURE: AEMDEVWEB MONOREPO

เอกสารฉบับนี้กำหนดวิสัยทัศน์ทางธุรกิจ (Business Strategy) และโครงสร้างทางสถาปัตยกรรมเทคนิค (Technical Architecture) สำหรับระบบนิเวศ **AEMDEVWEB & UNLINK THAILAND** เพื่อความยั่งยืน ความน่าเชื่อถือ และประสิทธิภาพสูงสุดในระดับ Enterprise

---

## 🌟 1. วิสัยทัศน์และข้อกำหนดระบบ (Vision & Requirements)

### 🎯 เป้าหมายหลัก (Core Objective)
สร้างระบบนิเวศน์ออนไลน์ที่เน้น **"ความเชื่อมั่น (Trust)"** และ **"การเข้าถึงระดับท้องถิ่น (Hyper-Localization)"** ผ่านเทคโนโลยี Modern Web เพื่อให้บริการ SME ทั่วประเทศไทย

### 🛠 ข้อกำหนดหน้าที่ (Functional Requirements)
- **P-SEO Engine:** ระบบสร้างเนื้อหาและโครงสร้างรองรับ SEO แยกตาม 77 จังหวัดอัตโนมัติ
- **Entity Linking:** ระบบเชื่อมโยงตัวตนเจ้าของผลงาน (Architect) เข้ากับแบรนด์ธุรกิจ
- **Multi-Tenant Architecture:** รองรับการทำงานแยกโดเมน (me, web, unlink-th) บนฐานข้อมูลชุดเดียวกัน

### ⚡ ข้อกำหนดคุณภาพ (Non-Functional Requirements)
- **Performance:** โหลดหน้าเว็บเร็วสูงสุด (LCP < 1.2s) ผ่าน Vercel Edge Runtime
- **E-E-A-T (Expertise, Authoritativeness, Trustworthiness):** ออกแบบ Schema.org ขั้นสูงเพื่อยืนยันตัวตนกับ Google Search Bot
- **Scalability:** โครงสร้าง Monorepo ที่รองรับการเพิ่ม Apps และ Packages ใหม่โดยไม่กระทบระบบเดิม

---

## 🏗 2. สถาปัตยกรรมระบบ (System Architecture)

ระบบถูกออกแบบบนโครงสร้าง **Monorepo (Turborepo + pnpm)** เพื่อให้เกิดการใช้ทรัพยากรร่วมกัน (Code Sharing) สูงสุด

### 📱 Applications (The Power Trio)
1.  **`me.aemdevweb.com` (App: me)**
    - **Role:** Digital Identity & E-E-A-T Hub
    - **Focus:** ประวัติ, ความเชี่ยวชาญ, และผลงานในระดับบุคคล (Person Entity)
2.  **`aemdevweb.com` (App: web)**
    - **Role:** Business Operations & P-SEO Engine
    - **Focus:** การบริการรับทำเว็บไซต์, Landing Pages 77 จังหวัด (Organization Entity)
3.  **`unlink-th.com` (App: unlink-th)**
    - **Role:** Specialized Utility & Verification
    - **Focus:** ระบบตรวจสอบ (Registry) และบริการเฉพาะทางของ Unlink Thailand

---

## 📦 3. โครงสร้างแพ็กเกจส่วนกลาง (Core Packages)

| Package | Responsibility | Key Features |
| :--- | :--- | :--- |
| `@repo/core` | **Business Logic** | ข้อมูลจังหวัด (77 Provinces), Site Config, Constant Data |
| `@repo/db` | **Data Access** | Supabase/PostgreSQL Client, Static Fallback Logic |
| `@repo/ui` | **Design System** | Tailwind CSS Components, Shared Hooks, Theme Control |
| `@repo/seo` | **Metadata & Identity** | Schema.org JSON-LD Generators, Entity Signature Mapping |
| `@repo/trust` | **Validation** | Trust-scoring logic, Integrity Auditing |

---

## 🔑 4. ระบบอัตลักษณ์และลายเซ็นดิจิทัล (Identity & Signatures)

เพื่อให้ Google ยืนยันความเชื่อมโยงระหว่าง "บุคคล" และ "องค์กร" ระบบจะฝังลายเซ็นดิจิทัลผ่าน Metadata:

### 🖋️ ลายเซ็นอัตลักษณ์ (Official Signatures)
- **Lead Architect:** `Alongkorn Yomkerd` (นายอลงกรณ์ ยมเกิด)
- **Digital Aliases:** `Aemza Macks` (นายเอ็มซ่ามากส์), `9mza`
- **Brand Entity:** `AEMDEVWEB`, `UNLINK THAILAND`

### 🔗 การเชื่อมโยง (Entity Linking Flow)
1.  **Apps (web/me)** เรียกใช้ `@repo/seo`
2.  **SEO Generator** สร้าง Schema `Person` เชื่อมเข้ากับ `Organization`
3.  **SameAs Tags** เชื่อมโยงไปยัง Social Profiles และ Portfolio เพื่อสร้าง Graph ของความเชื่อมั่น

---

## 🔄 5. ขั้นตอนการประมวลผล (Data & SEO Flow)

1.  **Inbound Request:** ผู้ใช้ค้นหา "รับทำเว็บ [จังหวัด]"
2.  **Dynamic Routing:** Next.js App Router รับค่า Parameter จังหวัด
3.  **Data Hydration:**
    - ดึงข้อมูล Static พื้นที่จาก `@repo/core`
    - ดึงข้อมูลผลงานล่าสุดจาก `@repo/db`
4.  **SEO Rendering:** `@repo/seo` สร้าง Metadata เฉพาะพื้นที่พร้อมฝัง Identity Signature
5.  **Edge Delivery:** Vercel ทำการ Cache หน้าผลลัพธ์เพื่อส่งมอบประสบการณ์ที่รวดเร็ว

---

## 🛡️ 6. มาตรฐานและความเสถียร (Standards & Stability)

- **Runtime:** Node.js 22 (LTS)
- **Framework:** Next.js 15+ (App Router), React 19
- **Type System:** TypeScript 5.x (Strict Mode)
- **CSS:** Tailwind CSS 4.x
- **Quality Control:** 
    - `pnpm audit` สำหรับตรวจสอบช่องโหว่
    - `knip` สำหรับล้างโค้ดที่ไม่ได้ใช้
    - `turborepo` สำหรับจัดการ Build Pipeline

---
*จัดทำและควบคุมคุณภาพโดย **AEMZA MACKS (Lead Architect)** | ฉบับปรับปรุงปี 2026*
