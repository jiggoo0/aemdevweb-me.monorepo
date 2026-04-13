# Project Context for LLM

เอกสารนี้รวบรวมโครงสร้างและโค้ดที่สำคัญของโปรเจ็กต์เพื่อใช้เป็นบริบทอ้างอิง

## File: `docs/AI-DIRECTION.md`

```md
# 🤖 AI-DRIVEN DESIGN & DEVELOPMENT DIRECTION

เอกสารฉบับนี้กำหนดมาตรฐานและทิศทางการทำงานของ AI ในการสร้างสรรค์เว็บไซต์สำหรับระบบนิเวศ **AEMDEVWEB & UNLINK THAILAND** เพื่อให้งานที่สร้างโดย AI มีคุณภาพระดับสากลและสอดคล้องกับวิสัยทัศน์ทางธุรกิจ

---

## 🏗️ 1. Architectural Intelligence (โครงสร้างอัจฉริยะ)

AI ต้องสร้าง Code ที่มีความเป็นระเบียบ ยืดหยุ่น และปลอดภัยสูงสุด

- **Atomic Component Design:** ออกแบบ Component แยกส่วนย่อยเพื่อให้ใช้ซ้ำได้ในทุก Apps (me, web, unlink-th) โดยอ้างอิงมาตรฐานจาก `@repo/ui`
- **Strict Type Safety:** เขียน TypeScript แบบ `strict: true` 100% เพื่อลด Runtime Error และเพิ่มความแม่นยำในการบำรุงรักษา
- **App Router Standard:** ใช้ Next.js 15+ App Router พร้อมการจัดการ Server/Client Components (RSC Boundaries) ที่มีประสิทธิภาพ

---

## 🎨 2. Aesthetic Intelligence (สุนทรียภาพอัจฉริยะ)

AI ต้องเปลี่ยน Concept ให้เป็น Visual ที่ "มีชีวิต" และดูพรีเมียม

- **Liquid Glass & Tactile Depth:** ใช้ Tailwind CSS ในการสร้างเอฟเฟกต์ความโปร่งใสมีมิติ (Refraction) และเลเยอร์ที่ดูสมจริง
- **Optical Balance:** จัดวาง Spacing, Padding และ Layout โดยเน้นความสมดุลทางสายตา (Visual Balance) มากกว่าแค่การยึด Grid ที่แข็งตัว
- **Typography as Hero:** เน้นการใช้ตัวอักษรขนาดใหญ่ (Oversized Headline) และ White Space อย่างชาญฉลาดเพื่อลด Cognitive Load

---

## 📈 3. Performance & SEO Intelligence (ประสิทธิภาพและ SEO อัจฉริยะ)

AI ต้องสร้างเว็บไซต์ที่ Google ให้คะแนนสูงสุดและผู้ใช้เข้าถึงได้รวดเร็ว

- **Programmatic SEO (P-SEO):** สร้างเนื้อหาเฉพาะจังหวัด (77 Provinces) โดยดึงข้อมูลจริงจาก `@repo/core` เพื่อความแม่นยำและน่าเชื่อถือ
- **Entity Linking (Schema.org):** ฝัง JSON-LD ทุกครั้งเพื่อเชื่อมโยง Person (Lead Architect) และ Organization (Brand) เข้าด้วยกันตามมาตรฐาน E-E-A-T
- **Core Web Vitals Mastery:** จัดการ formats ภาพ (WebP/AVIF), Lazy Loading และ Metadata อัตโนมัติเพื่อให้ผ่านเกณฑ์ LCP < 1.2s

---

## 🤝 4. Collaborative Intelligence (การทำงานร่วมกันอัจฉริยะ)

AI ต้องทำหน้าที่เป็น "คู่คิด" ที่ตรวจสอบตัวเองและให้เหตุผลได้

- **Design Integrity Check:** AI ต้องตรวจสอบความสอดคล้องกับ `docs/design.md` และ `MASTER-STRATEGY-ARCH.md` ก่อนส่งมอบงานทุกครั้ง
- **Self-Documenting Rationale:** ทุกการตัดสินใจออกแบบหรือการเขียน Code AI ต้องสามารถอธิบายเหตุผล (The "Why") ได้อย่างชัดเจน
- **Iterative Improvement:** AI ต้องพร้อมรับ Feedback และปรับปรุงงานให้ดียิ่งขึ้นตามมาตรฐานการพัฒนาที่เปลี่ยนแปลงไป

---

## 🛠️ AI Execution Checklist (รายการตรวจสอบงานจาก AI)

- [ ] Code สอดคล้องกับมาตรฐาน @repo/ui และ TypeScript หรือไม่?
- [ ] UI มีเอฟเฟกต์ Glassmorphism และความพรีเมียมตามเทรนด์ 2026 หรือไม่?
- [ ] มีการฝัง Schema.org สำหรับ Entity Linking หรือยัง?
- [ ] ประสิทธิภาพการโหลด (Performance) อยู่ในเกณฑ์ระดับสูงหรือไม่?
- [ ] เนื้อหา (Content) สะท้อนตัวตน Brand และ Localization หรือไม่?

---

_กำหนดโดย **AEMZA MACKS (Lead Architect)** | คู่มือปฏิบัติการ AI ฉบับปี 2026_
```

## File: `docs/DATABASE-SCHEMA.md`

```md
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
```

## File: `docs/DESIGN-PATTERNS-ANALYSIS.md`

````md
# Design Pattern Analysis: AEM Monorepo Ecosystem

เอกสารฉบับนี้วิเคราะห์และเสนอแนะการนำ Design Patterns มาปรับใช้กับโปรเจกต์ `aemdevweb-me.monorepo` เพื่อแก้ปัญหาความซับซ้อนของข้อมูล 77 จังหวัด และเพิ่มความเสถียรของระบบในระยะยาว

---

## 1. Factory Pattern (Creational)

**ตำแหน่งที่ใช้:** `@repo/core` (ระบบสร้าง AreaNode)

### **ปัญหาที่พบ (Problem)**

การมีไฟล์จังหวัด 77 ไฟล์ที่นิยามข้อมูลแบบ Static แยกกัน ทำให้เสี่ยงต่อการขาด Property สำคัญ (เช่น `name.th` ที่ทำให้ Build พัง) และยากต่อการอัปเดต Schema ของข้อมูลพร้อมกันทั้งหมด

### **แนวทางแก้ไข (Solution)**

สร้าง `AreaNodeFactory` เพื่อควบคุมมาตรฐานการสร้าง Object จังหวัดทุกตัว

```typescript
// ตัวอย่างการนำไปใช้
class AreaNodeFactory {
  static create(data: Partial<AreaNode>): AreaNode {
    return {
      priority: 50,
      region: "Central",
      // กำหนดค่าเริ่มต้นเพื่อป้องกัน undefined
      name: {
        th: data.province || "ไม่ระบุชื่อภาษาไทย",
        en: data.slug || "unknown",
      },
      ...data,
    } as AreaNode;
  }
}
```
````

---

## 2. Facade Pattern (Structural)

**ตำแหน่งที่ใช้:** `@repo/db` (การจัดการ Supabase Client)

### **ปัญหาที่พบ (Problem)**

แอปพลิเคชัน (web, me, unlink-th) เรียกใช้งาน Database Client โดยตรง ทำให้ยากต่อการจัดการ Error Handling, Caching และการเปลี่ยนแปลง Schema ของฐานข้อมูลในอนาคต

### **แนวทางแก้ไข (Solution)**

สร้าง `DataRegistryFacade` เพื่อเป็นจุดเชื่อมต่อเดียว (Unified Interface) สำหรับทุกแอปพลิเคชัน

```typescript
// packages/db/src/facade.ts
export class DataRegistry {
  async getProvinceContext(slug: string) {
    // รวมตรรกะการ Fetch และ Data Normalization ไว้ในที่เดียว
    const { data } = await supabase.from("provinces").select("*").eq("slug", slug).single();
    return this.mapToSafeUIModel(data);
  }
}
```

---

## 3. Strategy Pattern (Behavioral)

**ตำแหน่งที่ใช้:** `apps/web` (ระบบแสดงผลหน้าจังหวัด)

### **ปัญหาที่พบ (Problem)**

หน้าจังหวัดแต่ละกลุ่ม (อุตสาหกรรม, ท่องเที่ยว, บริการ) มีพฤติกรรมการแสดงผลและ SEO ต่างกัน การใช้เงื่อนไข `if-else` ในคอมโพเนนต์จะทำให้โค้ดซับซ้อนเกินไป

### **แนวทางแก้ไข (Solution)**

แยกอัลกอริทึมการแสดงผลตามประเภทของจังหวัด (Interchangeable Strategies)

```typescript
interface SEOStrategy {
  generateMetadata(node: AreaNode): Metadata;
}

class IndustrialSEO implements SEOStrategy {
  generateMetadata(node: AreaNode) {
    /* เน้น B2B Keywords */
  }
}

class TourismSEO implements SEOStrategy {
  generateMetadata(node: AreaNode) {
    /* เน้นรูปภาพและสถานที่ */
  }
}
```

---

## สรุปผลลัพธ์ที่คาดหวัง (Expected Outcomes)

1. **Build Resilience:** ลดโอกาสเกิด Error `undefined` ในช่วงการทำ Prerender 100%
2. **Maintenance Efficiency:** อัปเดตโครงสร้างข้อมูลทั้ง 77 จังหวัดได้จากการแก้ไขโค้ดเพียงจุดเดียว
3. **Unified Standard:** ทุกแอปพลิเคชันใน Monorepo ทำงานภายใต้มาตรฐานเดียวกัน

---

**Maintainer:** Gemini CLI & AEMZA MACKS
**Date:** April 11, 2026

````

## File: `docs/DESIGN.md`

```md
# AEM Monorepo Design System (v4.0.0)

เอกสารนี้กำหนดมาตรฐานการออกแบบ (Design System) สำหรับโปรเจกต์ในเครือ AEM Ecosystem เพื่อให้ AI Agent สามารถเจนหน้าเว็บที่ pixel-perfect และสอดคล้องกัน

---

## 1. Visual Theme & Atmosphere
- **Core Mood:** Institutional Authority, Professional Trust, High-end Craftsmanship.
- **Atmosphere:** Cinematic Dark (Unlink), Clean Editorial (Me), Corporate Precision (Web).
- **Density:** Spacious with high legibility.

---

## 2. Color Palette & Roles (OKLCH Standard)

### 🏛️ Institutional Core (Unlink-TH)
- **Primary:** `oklch(0.546 0.245 262.881)` - Trust Blue
- **Background:** `oklch(0.05 0 0)` - Void Black
- **Surface:** `oklch(0.08 0 0)` - Deep Gray

### 💼 Identity Core (Me)
- **Primary:** `oklch(0.21 0.006 285.885)` - Professional Slate
- **Accent:** `oklch(0.446 0.03 256.802)` - Expert Gray

### 🌐 Global Status
- **Success:** `oklch(0.627 0.194 149.214)`
- **Error:** `oklch(0.577 0.245 27.325)`

---

## 3. Typography Rules
- **Sans-serif:** `Geist Sans`, `Inter`, `system-ui`
- **Monospace:** `Geist Mono`, `JetBrains Mono` (ใช้สำหรับ Site ID และ Technical Data)
- **Scale:**
  - `Display:` 8xl (Black tracking-tighter) - สำหรับชื่อจังหวัด/หัวข้อหลัก
  - `Heading:` 2xl (Bold) - สำหรับ Section Headers
  - `Body:` base (Light/Regular) - สำหรับเนื้อหา

---

## 4. Component Stylings

### 🛡️ Glass Cards (Glassmorphism)
- **Standard:** `bg-white/5 backdrop-blur-2xl border-white/10`
- **Hover:** `border-primary/30 -translate-y-1 transition-all`

### 🔘 Buttons
- **Premium:** OKLCH Linear Gradient, high-contrast text.
- **Glass:** Transparent background, heavy backdrop blur, subtle border.

---

## 5. Layout Principles
- **Grid:** 12-column system, max-width 6xl (1152px).
- **Spacing:** Factor of 4 (4, 8, 16, 24, 32, 40, 64, 80).
- **P-SEO Pattern:** Hero -> Network Grid -> Strategic Content -> Conversion Form.

---

## 6. Depth & Elevation
- **Level 0:** Base background with `tech-grid` radial pattern.
- **Level 1:** Cards with subtle 1px border.
- **Level 2:** Modals/Overlays with heavy 2xl shadow and high blur.

---

## 7. Agent Prompt Guide
**เมื่อสั่งให้ AI สร้างหน้าใหม่:**
> "Build a page using the AEM DESIGN.md standards. Focus on OKLCH colors, Geist typography, and high-end Glassmorphism cards. Apply the `tech-grid` background and maintain Institutional Authority mood."

````

## File: `docs/MASTER-STRATEGY-ARCH.md`

```md
# 🏆 แผนแม่บทธุรกิจและสถาปัตยกรรมดิจิทัล: กะเพรารสมือแม่

เอกสารฉบับนี้รวบรวมกลยุทธ์ การตัดสินใจ และโครงสร้างทางเทคนิคทั้งหมดสำหรับธุรกิจซอสสำเร็จรูปและการขยายตัวใน Monorepo

---

## 📂 1. อัตลักษณ์และแบรนด์ (Business Identity)

**คอนเซปต์หลัก:** "ความอบอุ่นของคำว่าแม่" ผสมผสานกับ "ความเป็นมืออาชีพระดับสากล"

- **ชื่อแบรนด์:** กะเพรารสมือแม่ (Krapow Ros Mue Mae)
- **ทิศทางการออกแบบ (UI/UX):**
  - **Warm Glassmorphism:** ใช้ความโปร่งแสงแบบกระจกแต่เน้นโทนสีอุ่น
  - **Color Palette (OKLCH):**
    - `oklch(0.97 0.02 85)` (Warm Sand) - พื้นหลังสื่อถึงความนุ่มนวล
    - `oklch(0.45 0.12 140)` (Basil Green) - ความสดใหม่ของวัตถุดิบ
    - `oklch(0.55 0.18 35)` (Chili Red) - ความเผ็ดร้อนและพลังของธุรกิจ
- **การสื่อสาร:** เน้นการเล่าเรื่อง (Storytelling) ของสูตรลับก้นครัวและการเลือกสรรวัตถุดิบจริง

---

## 🏗️ 2. สถาปัตยกรรมเทคนิค (Technical Infrastructure)

**โครงสร้าง:** Monorepo (1 GitHub Repo, Multiple Vercel Projects)

- **Apps:**
  - `apps/web`: (aemdevweb.com) - ธุรกิจหลัก/พอร์ตโฟลิโอ
  - `apps/unlink-th`: (unlink-th.com) - ระบบตรวจสอบและความปลอดภัย
  - `apps/test`: (krapowrosmuemae.com) - ธุรกิจซอสสำเร็จรูป
- **Shared Packages:**
  - `@repo/ui`: คอมโพเนนต์มาตรฐาน (Button, GlassCard, LeadForm)
  - `@repo/db`: ระบบจัดการข้อมูลส่วนกลาง (DataRegistry)
  - `@repo/core`: กฎทางธุรกิจและโมเดลข้อมูล (AreaNodes, Factory)
- **Build System:** Next.js 16 + Turborepo + Webpack (ARM64 Optimized)

---

## 🗄️ 3. กลยุทธ์ฐานข้อมูล (Database Strategy)

**ระบบ:** Supabase (Project: aureolin-horizon)

- **Single Source of Truth:** ทั้ง 3 เว็บไซต์ใช้ฐานข้อมูลเดียวกันเพื่อแชร์ข้อมูลลูกค้า (Leads) และผลงาน (Projects)
- **Resilient Client:** ใช้ Proxy-based Lazy Initialization เพื่อป้องกันการ Build ล้มเหลวเมื่อขาด Environment Variables
- **Data Integrity:** ข้อมูลจังหวัด 77 จังหวัดถูก Seeding ไว้อย่างถูกต้องเพื่อรองรับ Local SEO
- **Inventory Management:** ออกแบบตาราง `inventory` เพื่อคุมสต็อกสินค้าจากเว็บเดียวและซิงก์ไปยังช่องทางอื่นๆ

---

## ⚖️ 4. กฎหมายและการผลิต (Legal & Production)

**แนวทาง:** SME Standard Compliance

- **การผลิต (OEM):** จ้างโรงงานที่มีมาตรฐาน GMP/HACCP เพื่อเซฟต้นทุนหลักล้านในการสร้างโรงงานเอง
- **อย. (FDA):** ขอเลขสารบบอาหารผ่านโรงงาน OEM โดยระบุแบรนด์เราเป็นผู้จัดจำหน่าย (เพิ่มความน่าเชื่อถือระดับสากล)
- **ความลับทางการค้า:** บังคับใช้สัญญา NDA กับโรงงานเพื่อปกป้อง "สูตรแม่"
- **PDPA:** ระบบ Footer มีลิงก์ Privacy Policy และ Terms ที่ครอบคลุมการเก็บข้อมูลส่วนบุคคล

---

## 💰 5. กลยุทธ์การขายและต้นทุน (Sales & Funnel)

**แนวทาง:** แพลตฟอร์มหาลูกค้า เว็บไซต์ทำกำไร

- **Shopee/Lazada:** ใช้เป็น "ด่านหน้า" ในการหาลูกค้าใหม่ (แม้เสียค่าธรรมเนียม 15-25%)
- **D2C (Direct to Consumer):** ใส่ QR Code ในกล่องสินค้าเพื่อดึงลูกค้ามาซื้อซ้ำบนเว็บตัวเอง (รับส่วนลด 10% และสะสมแต้ม)
- **Wholesale (B2B):** เว็บไซต์เน้นการขายส่งให้ "ร้านอาหาร" ซึ่งมีกำไรสูงและระยะยาวกว่าขายปลีก
- **Payment:** เริ่มต้นด้วยระบบแนบสลิป (0% Fee) และขยายสู่ Stripe/PromptPay Auto (3-4% Fee)

---

## 📈 6. กลยุทธ์ SEO และความน่าเชื่อถือ (Search Authority)

**แนวทาง:** Personal Branding + Technical SEO

- **Entity-Based SEO:** ใช้ชื่อ "AEMZA MACKS" เชื่อมโยงทุกธุรกิจเข้าด้วยกันผ่าน Schema Markup เพื่อให้ Google เชื่อใจแบรนด์ใหม่ทันที
- **E-E-A-T:** แสดงประสบการณ์จริงผ่านหน้า "The Architect" และ "Story of Mae"
- **Content Power:** สร้างหน้า Recipe Blog (สูตรอาหาร) เพื่อยึด Keyword "ซอสกะเพรา" และ "ซอสอเนกประสงค์"
- **Technical Performance:** เว็บโหลดเร็วพิเศษ (LCP < 1.2s) เพื่อคะแนนจัดอันดับสูงสุดใน Google

---

**Enforced & Documented by Gemini CLI**
**Last Updated:** 2026-04-12
```

## File: `docs/README.md`

```md
# 📚 AEM Strategic Documentation Registry

[![Documentation Status](https://img.shields.io/badge/Status-Maintained-success?style=for-the-badge)](./MASTER-STRATEGY-ARCH.md)
[![Design System](https://img.shields.io/badge/Design-v4.0.0-blue?style=for-the-badge)](./DESIGN.md)
[![AI Ready](https://img.shields.io/badge/AI-Agentic_Ready-orange?style=for-the-badge)](./AI-DIRECTION.md)

**ศูนย์รวมพิมพ์เขียวเชิงสถาปัตยกรรม กลยุทธ์ทางธุรกิจ และมาตรฐานการออกแบบสำหรับระบบนิเวศ AEMDEVWEB & UNLINK THAILAND**

## 📖 คำอธิบาย (Description)

เอกสารชุดนี้ทำหน้าที่เป็น "Single Source of Truth" สำหรับนักพัฒนาและ AI Agents ในการทำความเข้าใจโครงสร้างอันซับซ้อนของ Monorepo โดยครอบคลุมตั้งแต่การวางแผนระดับสูง (High-level Strategy) ไปจนถึงรายละเอียดทางเทคนิคระดับพิกเซล

### จุดประสงค์ (Purpose)

- **Architectural Guidance:** กำหนดทิศทางสถาปัตยกรรมเพื่อให้การขยายตัว (Scaling) เป็นไปอย่างมีระเบียบ
- **Strategic Alignment:** เชื่อมโยงเป้าหมายทางธุรกิจ (P-SEO, E-E-A-T) เข้ากับการพัฒนาซอฟต์แวร์
- **Design Consistency:** ควบคุมมาตรฐาน Visual ผ่าน OKLCH และ Glassmorphism
- **AI Orchestration:** เตรียม Prompt และ Context สำหรับ AI Agents ในการช่วยเขียนโค้ดและสร้างเนื้อหา

---

## 📋 สารบัญเอกสาร (Documentation Index)

### 🏛️ ระดับสถาปัตยกรรม (Monorepo Level)

| ไฟล์                                                                | หัวข้อหลัก                | เนื้อหาโดยสรุป                                                  |
| :------------------------------------------------------------------ | :------------------------ | :-------------------------------------------------------------- |
| 🔄 [**WORKFLOW.md**](./WORKFLOW.md)                                 | **ขั้นตอนการพัฒนา**       | มาตรฐานการ Sync, Development, Audit และ Deploy                  |
| 🏆 [**MASTER-STRATEGY-ARCH.md**](./MASTER-STRATEGY-ARCH.md)         | **ยุทธศาสตร์สถาปัตยกรรม** | วิสัยทัศน์ระบบ, ข้อกำหนด E-E-A-T, และโครงสร้าง Monorepo         |
| 🎨 [**DESIGN.md**](./DESIGN.md)                                     | **ระบบการออกแบบ**         | มาตรฐาน OKLCH, Typography Geist, และสไตล์ Glassmorphism         |
| 🧠 [**AI-DIRECTION.md**](./AI-DIRECTION.md)                         | **ทิศทาง AI**             | คู่มือสำหรับ AI Agents ในการจัดการโครงสร้างและ Logic ของระบบ    |
| 📊 [**DATABASE-SCHEMA.md**](./DATABASE-SCHEMA.md)                   | **พิมพ์เขียวฐานข้อมูล**   | รายละเอียดโครงสร้าง Tables ใน Supabase และความสัมพันธ์ของข้อมูล |
| 📐 [**DESIGN-PATTERNS-ANALYSIS.md**](./DESIGN-PATTERNS-ANALYSIS.md) | **รูปแบบการออกแบบโค้ด**   | การใช้ Factory, Facade และ Strategy Patterns ในระบบ             |

### 🚀 ระดับแอปพลิเคชัน (Application Specific)

| โฟลเดอร์                                        | แอปพลิเคชัน               | รายละเอียด                                    |
| :---------------------------------------------- | :------------------------ | :-------------------------------------------- |
| 🌐 [**docs/web/**](./web/README.md)             | **AEMDEVWEB / Portfolio** | คู่มือการพัฒนาหน้าพอร์ตโฟลิโอและอัตลักษณ์หลัก |
| 🛡️ [**docs/unlink-th/**](./unlink-th/README.md) | **UNLINK Thailand**       | เอกสารระบบตรวจสอบความปลอดภัยและความเชื่อถือ   |
| 🍳 [**docs/test/**](./test/README.md)           | **Krapow Ros Mue Mae**    | กลยุทธ์ธุรกิจซอสกะเพราและระบบ E-Commerce      |

### 🛠️ ทรัพยากรการพัฒนา (Development Resources)

- 🎨 [**Design References**](./resources/design/) - ตัวอย่างมาตรฐานดีไซน์จาก Apple, Stripe, และ Vercel
- ⚡ [**Next.js Best Practices**](./resources/nextjs/) - คู่มือ RSC, Async Patterns, และการแก้ปัญหา Hydration
- 🤖 [**Gemini CLI Guide**](./resources/gemini-cli/) - วิธีการสร้าง Skills และการใช้งาน Plan Mode สำหรับ AI Automation

---

## ⚡ การใช้งานสำหรับนักพัฒนา (Usage for Developers)

### การอ้างอิงมาตรฐานสี (OKLCH)

นักพัฒนาควรใช้ค่าสีตามที่ระบุใน [DESIGN.md](./DESIGN.md) เสมอ เพื่อให้รองรับ P3 Display Gamut:

- **Trust Blue:** `oklch(0.546 0.245 262.881)`
- **Void Black:** `oklch(0.05 0 0)`

### การทำงานร่วมกับ AI Agents

เมื่อใช้ Gemini หรือ AI ตัวอื่นๆ ให้ทำการ Load ไฟล์ [AI-DIRECTION.md](./AI-DIRECTION.md) เข้าไปใน Context เพื่อให้ AI เข้าใจกฎระเบียบของระบบก่อนเริ่มทำงาน

---

## 🏗️ โครงสร้างฐานข้อมูล (Data Architecture)

ระบบถูกออกแบบให้เป็น **Multi-tenant Data Sharing** โดยมี `packages/db` เป็น Facade หลัก อ่านรายละเอียดเพิ่มเติมได้ที่ [DATABASE-SCHEMA.md](./DATABASE-SCHEMA.md)

---

## 🗺️ แผนผังระบบ (System Map)

สามารถตรวจสอบโครงสร้างไฟล์ล่าสุดได้จาก [GEMINI-MAP.txt](./GEMINI-MAP.txt) ซึ่งถูกอัปเดตโดยระบบ Audit อัตโนมัติ

---

## 📜 ลิขสิทธิ์และผู้ดูแล (Authors & Governance)

- **Lead Architect:** AEMZA MACKS
- **Audit Policy:** การแก้ไขเอกสารในโฟลเดอร์นี้ต้องผ่านการรัน `pnpm run audit` ทุกครั้ง

---

## 📞 ช่องทางการติดต่อ (Contact)

หากมีข้อสงสัยเกี่ยวกับสถาปัตยกรรม โปรดติดต่อฝ่ายเทคนิคผ่านโปรโตคอลที่ระบุไว้ในหน้าหลักของระบบ

---

_เอกสารนี้เป็นส่วนหนึ่งของ AEM Constitution v4.0.0_
```

## File: `docs/SEO-INTEGRATED-STRATEGY.md`

```md
# 🌐 ยุทธศาสตร์ SEO และสถาปัตยกรรมบูรณาการ (2025-2026)

เอกสารนี้กำหนดมาตรฐานการทำงานร่วมกันระหว่าง **Main Domain (Business Hub)** และ **Subdomain (Identity Portal)** เพื่อสร้างอำนาจในผลการค้นหา (Search Engine Authority) และความเชื่อถือระดับสถาบัน (E-E-A-T)

---

## 🏛️ 1. โครงสร้างและการแบ่งแยกบทบาท (Division of Concerns)

| มิติการเปรียบเทียบ  | **Business Hub (web)**                         | **Identity Portal (me)**                        |
| :------------------ | :--------------------------------------------- | :---------------------------------------------- |
| **Domain**          | `aemdevweb.com`                                | `aemza.me` (หรือ `me.aemdevweb.com`)            |
| **บทบาทหลัก**       | การตลาด, การขาย (Conversion), P-SEO            | อัตลักษณ์ (Identity), ความเชี่ยวชาญ (Expertise) |
| **เจตนาการค้นหา**   | Commercial & Informational (กว้าง)             | Navigational & Long-tail (เฉพาะบุคคล)           |
| **ปรัชญาการออกแบบ** | **AIDA** (Attention, Interest, Desire, Action) | **Dashboard UI** (Functional, Glassmorphism)    |
| **เป้าหมาย SEO**    | ติดอันดับ Keyword บริการ + 77 จังหวัด          | ติดอันดับ Entity Name + Technical Authority     |

---

## 🔗 2. กลไกการขับเคลื่อน SEO Synergy (ถ่ายโอนพลังลิงก์)

เพื่อให้ทั้งสองส่วนส่งเสริมกัน ไม่ใช่แยกเกาะ (Isolated Islands):

1.  **Logical Internal Linking**:
    - `web` -> `me`: ลิงก์จาก "Chief Architect" หรือ "Review by" ไปยังหน้าโปรไฟล์เชิงลึก
    - `me` -> `web`: ลิงก์จากหน้าทักษะ (Skills) หรือบทความ R&D กลับมายังหน้าบริการจริง
2.  **Hub-and-Spoke Model**:
    - ใช้ `web` เป็น Hub ของเนื้อหาเสาหลัก (Cornerstone)
    - ใช้ `me` เป็น Spoke ที่ให้ข้อมูลเจาะลึกพิเศษที่ `web` ไม่สามารถแสดงได้ (Deep Technical Stats)
3.  **Cross-Domain Entity Linking**:
    - ใช้ **Schema.org (JSON-LD)** เชื่อมโยงเอนทิตี `Person` (จาก `me`) เข้ากับ `Organization` (จาก `web`) ผ่านฟิลด์ `founder` และ `knowsAbout`

---

## 🛡️ 3. การป้องกันความขัดแย้ง (Conflict Prevention)

- **Search Intent Separation**: ห้ามใช้ Keyword เดียวกันในหน้าหลักของทั้งสองโดเมน
  - _Web:_ "รับทำ SEO Technical"
  - _Me:_ "ยุทธศาสตร์สถาปัตยกรรม SEO โดย นายเอ็มซ่ามากส์"
- **Canonicalization**: หากเนื้อหาใน `me` เป็นส่วนขยายของ `web` ให้ใช้ `Cross-Domain Canonical` ชี้กลับไปยังหน้าหลักเพื่อรวมอำนาจการจัดอันดับ

---

## 🎨 4. มาตรฐานการออกแบบ (Design DNA)

- **Typography**: Geist Sans (UI) / Geist Mono (Code) 100%
- **Color Space**: OKLCH 100% (เพื่อความแม่นยำของสีบนทุกหน้าจอ)
- **Visual Style**: Liquid Glass (Glassmorphism) และ Tactile Depth (ความลึกที่สัมผัสได้)

---

_Generated by Gemini CLI | Strategic SEO Protocol v1.0.0_
```

## File: `docs/STRATEGIC-PROMPTS.md`

```md
# 🤖 ชุดคำสั่งเชิงยุทธศาสตร์ (Strategic Prompt Templates)

ใช้คำสั่งเหล่านี้เพื่อให้ AI พัฒนาโค้ดที่สอดคล้องกับ DNA ของ AEM Monorepo และรักษาความสมบูรณ์ของระบบ 100%

---

## 🏗️ 1. Prompt สำหรับหน้า Business (AIDA Model)

**Context:** ใช้สำหรับ `apps/web`

> **Role:** Senior Conversion Rate Optimizer & Next.js Developer
> **Task:** ออกแบบส่วน [Hero/Service/Pricing] ของหน้า [Page Name]
> **Constraints:**
>
> - ใช้หลักการ **AIDA** (Attention, Interest, Desire, Action)
> - ต้องมีปุ่ม CTA ที่ชัดเจนเพียง 1-2 จุด
> - ใช้สไตล์ **Liquid Glass** และ **OKLCH Colors** ตาม `docs/DESIGN.md`
> - ดึงข้อมูลจาก `@repo/db` ผ่าน `DataRegistry` เท่านั้น ห้ามเรียก Supabase ตรงๆ
> - ฝัง JSON-LD (Organization) โดยใช้ `@repo/seo`

---

## 👤 2. Prompt สำหรับหน้า Identity (Dashboard UI)

**Context:** ใช้สำหรับ `apps/me-aemdevweb`

> **Role:** Senior UI/UX Architect & Personal Branding Expert
> **Task:** พัฒนาส่วน [Skills Matrix/Technical Insights] ของหน้า Home
> **Constraints:**
>
> - ใช้สถาปัตยกรรม **Dashboard UI** (Grid-based, Layered Info)
> - เน้นความโปร่งใส (Glassmorphism) และการแสดงข้อมูลเชิงเทคนิค (Technical Stats)
> - เชื่อมโยงลิงก์กลับไปยัง `aemdevweb.com` สำหรับการจ้างงานจริง
> - ใช้รูปภาพจากชุด **Mastermind Identity** ใน `/public/images/`
> - ฝัง JSON-LD (Person) พร้อมระบุ `knowsAbout` จาก `SHARED_SITE_CONFIG`

---

## 🛡️ 3. Prompt สำหรับการตรวจสอบ Integrity (Audit)

**Context:** ใช้ก่อนการ Commit

> **Task:** ตรวจสอบความสมบูรณ์ของโค้ดล่าสุด
> **Requirements:**
>
> - รัน `pnpm run typecheck` และแก้ไขทุก Error
> - ตรวจสอบ **Boundary Violations** (ห้าม Import `../../packages`)
> - ยืนยันว่าไม่มีไฟล์ `.js` ตกค้างในโฟลเดอร์ `src` (ต้องเป็น `.ts/.tsx` 100%)
> - ตรวจสอบว่ามีการลบไฟล์เก่าทิ้งหลังการย้ายตำแหน่งหรือเปลี่ยนชื่อแล้ว

---

_Generated by Gemini CLI | Operational Excellence v1.0.0_
```

## File: `docs/WORKFLOW.md`

````md
# 🔄 AEM Standard Development Workflow (v1.0.0)

มาตรฐานขั้นตอนการพัฒนาสำหรับระบบนิเวศ AEM Monorepo เพื่อรักษาความสมบูรณ์ของระบบ (System Integrity) และประสิทธิภาพสูงสุด

---

## 1. การเตรียมพื้นที่ทำงาน (Workspace Setup)

ก่อนเริ่มงานทุกครั้ง ให้มั่นใจว่าสภาพแวดล้อมได้รับการซิงโครไนซ์แล้ว:

```bash
# ติดตั้ง dependencies ทั้งหมด
pnpm install

# ซิงก์ environment variables ระหว่าง apps
pnpm run env:sync
```
````

## 3. ขั้นตอนการพัฒนา (Development Cycle)

ใช้โครงสร้างเอกสารใน `docs/` เป็นแนวทาง:

- **แอปหลัก (Portfolio):** อ้างอิง `docs/web/README.md`
- **ระบบความปลอดภัย:** อ้างอิง `docs/unlink-th/README.md`

**การจัดการทรัพยากร (Asset Management):**

- **Images:** เก็บไฟล์ภาพใน `public/images/` แยกโฟลเดอร์ตามประเภทงาน (`cases`, `blog`, `services`)
- **Branding:** ใช้ `logo-icon.svg` ใน UI Components เพื่อความสอดคล้องของแบรนด์

**การตรวจสอบเทมเพลต (Template Verification):**

- เมื่อสร้าง Case Study ใหม่ ต้องระบุ `theme` (เช่น `theme-hospitality`) ใน MDX Frontmatter
- ตรวจสอบความถูกต้องของสไตล์ผ่าน `pnpm run build` เพื่อดูการแสดงผล Layout เฉพาะอุตสาหกรรม

## 4. การตรวจสอบความสมบูรณ์ (Integrity Check)

**ห้ามข้ามขั้นตอนพื้นฐานเหล่านี้:**

1.  **Standardize:** รัน `pnpm run standardize` เพื่อคุมเวอร์ชันไลบรารี
2.  **Audit:** รัน `pnpm run audit` เพื่อตรวจสอบโครงสร้าง Monorepo
3.  **Type Check:** รัน `pnpm run typecheck` เพื่อป้องกัน Runtime Error

## 4. การทดสอบภายใต้สภาวะวิกฤต (Chaos Testing)

สำหรับฟีเจอร์ที่กระทบโครงสร้างหลัก ให้รัน Chaos Simulation เพื่อทดสอบความทนทาน:

```bash
# รันการจำลองความล้มเหลว (Circular Dep, Phantom Dep)
cd scripts && ./monorepo-chaos-simulation.sh --all

# กู้คืนระบบกลับสู่สถานะมาตรฐาน
./monorepo-chaos-simulation.sh --restore
```

## 5. การส่งมอบงาน (Deployment & CI)

เมื่อผ่านการตรวจสอบทั้งหมด:

1.  **Build Check:** รัน `pnpm run build` (Turbo จะจัดการข้ามขั้นตอนที่ไม่ได้แก้ไข)
2.  **Git Push:** เมื่อ Push ขึ้น GitHub ระบบ CI จะรัน `audit.yml` โดยอัตโนมัติ
3.  **Vercel Deploy:** หาก Audit ผ่าน ระบบจะทำการ Deploy ไปยัง Vercel Projects ที่เกี่ยวข้อง

---

_Enforced by Gemini CLI & AEM Monorepo Constitution_

````

## File: `docs/meta.json`

```json
{
  "name": "AEM Monorepo",
  "description": "High-performance Monorepo for AEMDEVWEB & UNLINK THAILAND built with Next.js 15 and React 19",
  "maintainedByCoreTeam": true,
  "techStack": {
    "framework": "Next.js 15 (App Router)",
    "ui": "React 19, Vanilla CSS",
    "monorepo": "Turborepo, pnpm",
    "database": "Supabase (PostgreSQL)"
  }
}

````

## File: `docs/resources/design/apple.md`

```md
# Apple Inspired Design System

Design system details have been moved to: https://getdesign.md/apple/design-md
```

## File: `docs/resources/design/stripe.md`

```md
# Stripe Inspired Design System

Design system details have been moved to: https://getdesign.md/stripe/design-md
```

## File: `docs/resources/design/vercel.md`

```md
# Vercel Inspired Design System

Design system details have been moved to: https://getdesign.md/vercel/design-md
```

## File: `docs/resources/gemini-cli/core-readme.md`

````md
# Gemini CLI

[![Gemini CLI CI](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/google-gemini/gemini-cli/actions/workflows/ci.yml)
[![Gemini CLI E2E (Chained)](https://github.com/google-gemini/gemini-cli/actions/workflows/chained_e2e.yml/badge.svg)](https://github.com/google-gemini/gemini-cli/actions/workflows/chained_e2e.yml)
[![Version](https://img.shields.io/npm/v/@google/gemini-cli)](https://www.npmjs.com/package/@google/gemini-cli)
[![License](https://img.shields.io/github/license/google-gemini/gemini-cli)](https://github.com/google-gemini/gemini-cli/blob/main/LICENSE)
[![View Code Wiki](https://assets.codewiki.google/readme-badge/static.svg)](https://codewiki.google/github.com/google-gemini/gemini-cli?utm_source=badge&utm_medium=github&utm_campaign=github.com/google-gemini/gemini-cli)

![Gemini CLI Screenshot](/docs/assets/gemini-screenshot.png)

Gemini CLI is an open-source AI agent that brings the power of Gemini directly
into your terminal. It provides lightweight access to Gemini, giving you the
most direct path from your prompt to our model.

Learn all about Gemini CLI in our [documentation](https://geminicli.com/docs/).

## 🚀 Why Gemini CLI?

- **🎯 Free tier**: 60 requests/min and 1,000 requests/day with personal Google
  account.
- **🧠 Powerful Gemini 3 models**: Access to improved reasoning and 1M token
  context window.
- **🔧 Built-in tools**: Google Search grounding, file operations, shell
  commands, web fetching.
- **🔌 Extensible**: MCP (Model Context Protocol) support for custom
  integrations.
- **💻 Terminal-first**: Designed for developers who live in the command line.
- **🛡️ Open source**: Apache 2.0 licensed.

## 📦 Installation

See
[Gemini CLI installation, execution, and releases](https://www.geminicli.com/docs/get-started/installation)
for recommended system specifications and a detailed installation guide.

### Quick Install

#### Run instantly with npx

```bash
# Using npx (no installation required)
npx @google/gemini-cli
```
````

#### Install globally with npm

```bash
npm install -g @google/gemini-cli
```

#### Install globally with Homebrew (macOS/Linux)

```bash
brew install gemini-cli
```

#### Install globally with MacPorts (macOS)

```bash
sudo port install gemini-cli
```

#### Install with Anaconda (for restricted environments)

```bash
# Create and activate a new environment
conda create -y -n gemini_env -c conda-forge nodejs
conda activate gemini_env

# Install Gemini CLI globally via npm (inside the environment)
npm install -g @google/gemini-cli
```

## Release Channels

See [Releases](https://www.geminicli.com/docs/changelogs) for more details.

### Preview

New preview releases will be published each week at UTC 23:59 on Tuesdays. These
releases will not have been fully vetted and may contain regressions or other
outstanding issues. Please help us test and install with `preview` tag.

```bash
npm install -g @google/gemini-cli@preview
```

### Stable

- New stable releases will be published each week at UTC 20:00 on Tuesdays, this
  will be the full promotion of last week's `preview` release + any bug fixes
  and validations. Use `latest` tag.

```bash
npm install -g @google/gemini-cli@latest
```

### Nightly

- New releases will be published each day at UTC 00:00. This will be all changes
  from the main branch as represented at time of release. It should be assumed
  there are pending validations and issues. Use `nightly` tag.

```bash
npm install -g @google/gemini-cli@nightly
```

## 📋 Key Features

### Code Understanding & Generation

- Query and edit large codebases
- Generate new apps from PDFs, images, or sketches using multimodal capabilities
- Debug issues and troubleshoot with natural language

### Automation & Integration

- Automate operational tasks like querying pull requests or handling complex
  rebases
- Use MCP servers to connect new capabilities, including
  [media generation with Imagen, Veo or Lyria](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia)
- Run non-interactively in scripts for workflow automation

### Advanced Capabilities

- Ground your queries with built-in
  [Google Search](https://ai.google.dev/gemini-api/docs/grounding) for real-time
  information
- Conversation checkpointing to save and resume complex sessions
- Custom context files (GEMINI.md) to tailor behavior for your projects

### GitHub Integration

Integrate Gemini CLI directly into your GitHub workflows with
[**Gemini CLI GitHub Action**](https://github.com/google-github-actions/run-gemini-cli):

- **Pull Request Reviews**: Automated code review with contextual feedback and
  suggestions
- **Issue Triage**: Automated labeling and prioritization of GitHub issues based
  on content analysis
- **On-demand Assistance**: Mention `@gemini-cli` in issues and pull requests
  for help with debugging, explanations, or task delegation
- **Custom Workflows**: Build automated, scheduled and on-demand workflows
  tailored to your team's needs

## 🔐 Authentication Options

Choose the authentication method that best fits your needs:

### Option 1: Sign in with Google (OAuth login using your Google Account)

**✨ Best for:** Individual developers as well as anyone who has a Gemini Code
Assist License. (see
[quota limits and terms of service](https://cloud.google.com/gemini/docs/quotas)
for details)

**Benefits:**

- **Free tier**: 60 requests/min and 1,000 requests/day
- **Gemini 3 models** with 1M token context window
- **No API key management** - just sign in with your Google account
- **Automatic updates** to latest models

#### Start Gemini CLI, then choose _Sign in with Google_ and follow the browser authentication flow when prompted

```bash
gemini
```

#### If you are using a paid Code Assist License from your organization, remember to set the Google Cloud Project

```bash
# Set your Google Cloud Project
export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_ID"
gemini
```

### Option 2: Gemini API Key

**✨ Best for:** Developers who need specific model control or paid tier access

**Benefits:**

- **Free tier**: 1000 requests/day with Gemini 3 (mix of flash and pro)
- **Model selection**: Choose specific Gemini models
- **Usage-based billing**: Upgrade for higher limits when needed

```bash
# Get your key from https://aistudio.google.com/apikey
export GEMINI_API_KEY="YOUR_API_KEY"
gemini
```

### Option 3: Vertex AI

**✨ Best for:** Enterprise teams and production workloads

**Benefits:**

- **Enterprise features**: Advanced security and compliance
- **Scalable**: Higher rate limits with billing account
- **Integration**: Works with existing Google Cloud infrastructure

```bash
# Get your key from Google Cloud Console
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true
gemini
```

For Google Workspace accounts and other authentication methods, see the
[authentication guide](https://www.geminicli.com/docs/get-started/authentication).

## 🚀 Getting Started

### Basic Usage

#### Start in current directory

```bash
gemini
```

#### Include multiple directories

```bash
gemini --include-directories ../lib,../docs
```

#### Use specific model

```bash
gemini -m gemini-2.5-flash
```

#### Non-interactive mode for scripts

Get a simple text response:

```bash
gemini -p "Explain the architecture of this codebase"
```

For more advanced scripting, including how to parse JSON and handle errors, use
the `--output-format json` flag to get structured output:

```bash
gemini -p "Explain the architecture of this codebase" --output-format json
```

For real-time event streaming (useful for monitoring long-running operations),
use `--output-format stream-json` to get newline-delimited JSON events:

```bash
gemini -p "Run tests and deploy" --output-format stream-json
```

### Quick Examples

#### Start a new project

```bash
cd new-project/
gemini
> Write me a Discord bot that answers questions using a FAQ.md file I will provide
```

#### Analyze existing code

```bash
git clone https://github.com/google-gemini/gemini-cli
cd gemini-cli
gemini
> Give me a summary of all of the changes that went in yesterday
```

## 📚 Documentation

### Getting Started

- [**Quickstart Guide**](https://www.geminicli.com/docs/get-started) - Get up
  and running quickly.
- [**Authentication Setup**](https://www.geminicli.com/docs/get-started/authentication) -
  Detailed auth configuration.
- [**Configuration Guide**](https://www.geminicli.com/docs/reference/configuration) -
  Settings and customization.
- [**Keyboard Shortcuts**](https://www.geminicli.com/docs/reference/keyboard-shortcuts) -
  Productivity tips.

### Core Features

- [**Commands Reference**](https://www.geminicli.com/docs/reference/commands) -
  All slash commands (`/help`, `/chat`, etc).
- [**Custom Commands**](https://www.geminicli.com/docs/cli/custom-commands) -
  Create your own reusable commands.
- [**Context Files (GEMINI.md)**](https://www.geminicli.com/docs/cli/gemini-md) -
  Provide persistent context to Gemini CLI.
- [**Checkpointing**](https://www.geminicli.com/docs/cli/checkpointing) - Save
  and resume conversations.
- [**Token Caching**](https://www.geminicli.com/docs/cli/token-caching) -
  Optimize token usage.

### Tools & Extensions

- [**Built-in Tools Overview**](https://www.geminicli.com/docs/reference/tools)
  - [File System Operations](https://www.geminicli.com/docs/tools/file-system)
  - [Shell Commands](https://www.geminicli.com/docs/tools/shell)
  - [Web Fetch & Search](https://www.geminicli.com/docs/tools/web-fetch)
- [**MCP Server Integration**](https://www.geminicli.com/docs/tools/mcp-server) -
  Extend with custom tools.
- [**Custom Extensions**](https://geminicli.com/docs/extensions/writing-extensions) -
  Build and share your own commands.

### Advanced Topics

- [**Headless Mode (Scripting)**](https://www.geminicli.com/docs/cli/headless) -
  Use Gemini CLI in automated workflows.
- [**IDE Integration**](https://www.geminicli.com/docs/ide-integration) - VS
  Code companion.
- [**Sandboxing & Security**](https://www.geminicli.com/docs/cli/sandbox) - Safe
  execution environments.
- [**Trusted Folders**](https://www.geminicli.com/docs/cli/trusted-folders) -
  Control execution policies by folder.
- [**Enterprise Guide**](https://www.geminicli.com/docs/cli/enterprise) - Deploy
  and manage in a corporate environment.
- [**Telemetry & Monitoring**](https://www.geminicli.com/docs/cli/telemetry) -
  Usage tracking.
- [**Tools reference**](https://www.geminicli.com/docs/reference/tools) -
  Built-in tools overview.
- [**Local development**](https://www.geminicli.com/docs/local-development) -
  Local development tooling.

### Troubleshooting & Support

- [**Troubleshooting Guide**](https://www.geminicli.com/docs/resources/troubleshooting) -
  Common issues and solutions.
- [**FAQ**](https://www.geminicli.com/docs/resources/faq) - Frequently asked
  questions.
- Use `/bug` command to report issues directly from the CLI.

### Using MCP Servers

Configure MCP servers in `~/.gemini/settings.json` to extend Gemini CLI with
custom tools:

```text
> @github List my open pull requests
> @slack Send a summary of today's commits to #dev channel
> @database Run a query to find inactive users
```

See the
[MCP Server Integration guide](https://www.geminicli.com/docs/tools/mcp-server)
for setup instructions.

## 🤝 Contributing

We welcome contributions! Gemini CLI is fully open source (Apache 2.0), and we
encourage the community to:

- Report bugs and suggest features.
- Improve documentation.
- Submit code improvements.
- Share your MCP servers and extensions.

See our [Contributing Guide](./CONTRIBUTING.md) for development setup, coding
standards, and how to submit pull requests.

Check our [Official Roadmap](https://github.com/orgs/google-gemini/projects/11)
for planned features and priorities.

## 📖 Resources

- **[Official Roadmap](./ROADMAP.md)** - See what's coming next.
- **[Changelog](https://www.geminicli.com/docs/changelogs)** - See recent
  notable updates.
- **[NPM Package](https://www.npmjs.com/package/@google/gemini-cli)** - Package
  registry.
- **[GitHub Issues](https://github.com/google-gemini/gemini-cli/issues)** -
  Report bugs or request features.
- **[Security Advisories](https://github.com/google-gemini/gemini-cli/security/advisories)** -
  Security updates.

### Uninstall

See the [Uninstall Guide](https://www.geminicli.com/docs/resources/uninstall)
for removal instructions.

## 📄 Legal

- **License**: [Apache License 2.0](LICENSE)
- **Terms of Service**:
  [Terms & Privacy](https://www.geminicli.com/docs/resources/tos-privacy)
- **Security**: [Security Policy](SECURITY.md)

---

<p align="center">
  Built with ❤️ by Google and the open source community
</p>

````

## File: `docs/resources/gemini-cli/creating-skills.md`

```md
# Creating Agent Skills

This guide provides an overview of how to create your own Agent Skills to extend
the capabilities of Gemini CLI.

## Getting started: The `skill-creator` skill

The recommended way to create a new skill is to use the built-in `skill-creator`
skill. To use it, ask Gemini CLI to create a new skill for you.

**Example prompt:**

> "create a new skill called 'code-reviewer'"

Gemini CLI will then use the `skill-creator` to generate the skill:

1.  Generate a new directory for your skill (e.g., `my-new-skill/`).
2.  Create a `SKILL.md` file with the necessary YAML frontmatter (`name` and
    `description`).
3.  Create the standard resource directories: `scripts/`, `references/`, and
    `assets/`.

## Manual skill creation

If you prefer to create skills manually:

1.  **Create a directory** for your skill (e.g., `my-new-skill/`).
2.  **Create a `SKILL.md` file** inside the new directory.

To add additional resources that support the skill, refer to the skill
structure.

## Skill structure

A skill is a directory containing a `SKILL.md` file at its root.

### Folder structure

While a `SKILL.md` file is the only required component, we recommend the
following structure for organizing your skill's resources:

```text
my-skill/
├── SKILL.md       (Required) Instructions and metadata
├── scripts/       (Optional) Executable scripts
├── references/    (Optional) Static documentation
└── assets/        (Optional) Templates and other resources
````

### `SKILL.md` file

The `SKILL.md` file is the core of your skill. This file uses YAML frontmatter
for metadata and Markdown for instructions. For example:

```markdown
---
name: code-reviewer
description: Use this skill to review code. It supports both local changes and remote Pull
  Requests.
---

# Code Reviewer

This skill guides the agent in conducting thorough code reviews.

## Workflow

### 1. Determine Review Target

- **Remote PR**: If the user gives a PR number or URL, target that remote PR.
- **Local Changes**: If changes are local... ...
```

- **`name`**: A unique identifier for the skill. This should match the directory
  name.
- **`description`**: A description of what the skill does and when Gemini should
  use it.
- **Body**: The Markdown body of the file contains the instructions that guide
  the agent's behavior when the skill is active.

````

## File: `docs/resources/gemini-cli/plan-mode.md`

```md
# Plan Mode

Plan Mode is a read-only environment for architecting robust solutions before
implementation. With Plan Mode, you can:

- **Research:** Explore the project in a read-only state to prevent accidental
  changes.
- **Design:** Understand problems, evaluate trade-offs, and choose a solution.
- **Plan:** Align on an execution strategy before any code is modified.

Plan Mode is enabled by default. You can manage this setting using the
`/settings` command.

## How to enter Plan Mode

Plan Mode integrates seamlessly into your workflow, letting you switch between
planning and execution as needed.

You can either configure Gemini CLI to start in Plan Mode by default or enter
Plan Mode manually during a session.

### Launch in Plan Mode

To start Gemini CLI directly in Plan Mode by default:

1.  Use the `/settings` command.
2.  Set **Default Approval Mode** to `Plan`.

To launch Gemini CLI in Plan Mode once:

1. Use `gemini --approval-mode=plan` when launching Gemini CLI.

### Enter Plan Mode manually

To start Plan Mode while using Gemini CLI:

- **Keyboard shortcut:** Press `Shift+Tab` to cycle through approval modes
  (`Default` -> `Auto-Edit` -> `Plan`). Plan Mode is automatically removed from
  the rotation when Gemini CLI is actively processing or showing confirmation
  dialogs.

- **Command:** Type `/plan [goal]` in the input box. The `[goal]` is optional;
  for example, `/plan implement authentication` will switch to Plan Mode and
  immediately submit the prompt to the model.

- **Natural Language:** Ask Gemini CLI to "start a plan for...". Gemini CLI
  calls the
  [`enter_plan_mode`](../tools/planning.md#1-enter_plan_mode-enterplanmode) tool
  to switch modes. This tool is not available when Gemini CLI is in
  [YOLO mode](../reference/configuration.md#command-line-arguments).

## How to use Plan Mode

Plan Mode lets you collaborate with Gemini CLI to design a solution before
Gemini CLI takes action.

1.  **Provide a goal:** Start by describing what you want to achieve. Gemini CLI
    will then enter Plan Mode (if it's not already) to research the task.
2.  **Discuss and agree on strategy:** As Gemini CLI analyzes your codebase, it
    will discuss its findings and proposed strategy with you to ensure
    alignment. It may ask you questions or present different implementation
    options using [`ask_user`](../tools/ask-user.md). **Gemini CLI will stop and
    wait for your confirmation** before drafting the formal plan. You should
    reach an informal agreement on the approach before proceeding.
3.  **Review the plan:** Once you've agreed on the strategy, Gemini CLI creates
    a detailed implementation plan as a Markdown file in your plans directory.
    - **View:** You can open and read this file to understand the proposed
      changes.
    - **Edit:** Press `Ctrl+X` to open the plan directly in your configured
      external editor.

4.  **Approve or iterate:** Gemini CLI will present the finalized plan for your
    formal approval.
    - **Approve:** If you're satisfied with the plan, approve it to start the
      implementation immediately: **Yes, automatically accept edits** or **Yes,
      manually accept edits**.
    - **Iterate:** If the plan needs adjustments, provide feedback in the input
      box or [edit the plan file directly](#collaborative-plan-editing). Gemini
      CLI will refine the strategy and update the plan.
    - **Cancel:** You can cancel your plan with `Esc`.

For more complex or specialized planning tasks, you can
[customize the planning workflow with skills](#custom-planning-with-skills).

### Collaborative plan editing

You can collaborate with Gemini CLI by making direct changes or leaving comments
in the implementation plan. This is often faster and more precise than
describing complex changes in natural language.

1.  **Open the plan:** Press `Ctrl+X` when Gemini CLI presents a plan for
    review.
2.  **Edit or comment:** The plan opens in your configured external editor (for
    example, VS Code or Vim). You can:
    - **Modify steps:** Directly reorder, delete, or rewrite implementation
      steps.
    - **Leave comments:** Add inline questions or feedback (for example, "Wait,
      shouldn't we use the existing `Logger` class here?").
3.  **Save and close:** Save your changes and close the editor.
4.  **Review and refine:** Gemini CLI automatically detects the changes, reviews
    your comments, and adjusts the implementation strategy. It then presents the
    refined plan for your final approval.

## How to exit Plan Mode

You can exit Plan Mode at any time, whether you have finalized a plan or want to
switch back to another mode.

- **Approve a plan:** When Gemini CLI presents a finalized plan, approving it
  automatically exits Plan Mode and starts the implementation.
- **Keyboard shortcut:** Press `Shift+Tab` to cycle to the desired mode.
- **Natural language:** Ask Gemini CLI to "exit plan mode" or "stop planning."

## Tool Restrictions

Plan Mode enforces strict safety policies to prevent accidental changes.

These are the only allowed tools:

- **FileSystem (Read):**
  [`read_file`](../tools/file-system.md#2-read_file-readfile),
  [`list_directory`](../tools/file-system.md#1-list_directory-readfolder),
  [`glob`](../tools/file-system.md#4-glob-findfiles)
- **Search:** [`grep_search`](../tools/file-system.md#5-grep_search-searchtext),
  [`google_web_search`](../tools/web-search.md),
  [`web_fetch`](../tools/web-fetch.md) (requires explicit confirmation),
  [`get_internal_docs`](../tools/internal-docs.md)
- **Research Subagents:**
  [`codebase_investigator`](../core/subagents.md#codebase-investigator),
  [`cli_help`](../core/subagents.md#cli-help-agent)
- **Interaction:** [`ask_user`](../tools/ask-user.md)
- **MCP tools (Read):** Read-only [MCP tools](../tools/mcp-server.md) (for
  example, `github_read_issue`, `postgres_read_schema`) are allowed.
- **Planning (Write):**
  [`write_file`](../tools/file-system.md#3-write_file-writefile) and
  [`replace`](../tools/file-system.md#6-replace-edit) only allowed for `.md`
  files in the `~/.gemini/tmp/<project>/<session-id>/plans/` directory or your
  [custom plans directory](#custom-plan-directory-and-policies).
- **Memory:** [`save_memory`](../tools/memory.md)
- **Skills:** [`activate_skill`](../cli/skills.md) (allows loading specialized
  instructions and resources in a read-only manner)

## Customization and best practices

Plan Mode is secure by default, but you can adapt it to fit your specific
workflows. You can customize how Gemini CLI plans by using skills, adjusting
safety policies, changing where plans are stored, or adding hooks.

### Custom planning with skills

You can use [Agent Skills](../cli/skills.md) to customize how Gemini CLI
approaches planning for specific types of tasks. When a skill is activated
during Plan Mode, its specialized instructions and procedural workflows will
guide the research, design, and planning phases.

For example:

- A **"Database Migration"** skill could ensure the plan includes data safety
  checks and rollback strategies.
- A **"Security Audit"** skill could prompt Gemini CLI to look for specific
  vulnerabilities during codebase exploration.
- A **"Frontend Design"** skill could guide Gemini CLI to use specific UI
  components and accessibility standards in its proposal.

To use a skill in Plan Mode, you can explicitly ask Gemini CLI to "use the
`<skill-name>` skill to plan..." or Gemini CLI may autonomously activate it
based on the task description.

### Custom policies

Plan Mode's default tool restrictions are managed by the
[policy engine](../reference/policy-engine.md) and defined in the built-in
[`plan.toml`] file. The built-in policy (Tier 1) enforces the read-only state,
but you can customize these rules by creating your own policies in your
`~/.gemini/policies/` directory (Tier 2).

#### Global vs. mode-specific rules

As described in the
[policy engine documentation](../reference/policy-engine.md#approval-modes), any
rule that does not explicitly specify `modes` is considered "always active" and
will apply to Plan Mode as well.

To maintain the integrity of Plan Mode as a safe research environment,
persistent tool approvals are context-aware. Approvals granted in modes like
Default or Auto-Edit do not apply to Plan Mode, ensuring that tools trusted for
implementation don't automatically execute while you're researching. However,
approvals granted while in Plan Mode are treated as intentional choices for
global trust and apply to all modes.

If you want to manually restrict a rule to other modes but _not_ to Plan Mode,
you must explicitly specify the target modes. For example, to allow `npm test`
in default and Auto-Edit modes but not in Plan Mode:

```toml
[[rule]]
toolName = "run_shell_command"
commandPrefix = "npm test"
decision = "allow"
priority = 100
# By omitting "plan", this rule will not be active in Plan Mode.
modes = ["default", "autoEdit"]
````

#### Example: Automatically approve read-only MCP tools

By default, read-only MCP tools require user confirmation in Plan Mode. You can
use `toolAnnotations` and the `mcpName` wildcard to customize this behavior for
your specific environment.

`~/.gemini/policies/mcp-read-only.toml`

```toml
[[rule]]
toolName = "*"
mcpName = "*"
toolAnnotations = { readOnlyHint = true }
decision = "allow"
priority = 100
modes = ["plan"]
```

For more information on how the policy engine works, see the
[policy engine](../reference/policy-engine.md) docs.

#### Example: Allow git commands in Plan Mode

This rule lets you check the repository status and see changes while in Plan
Mode.

`~/.gemini/policies/git-research.toml`

```toml
[[rule]]
toolName = "run_shell_command"
commandPrefix = ["git status", "git diff"]
decision = "allow"
priority = 100
modes = ["plan"]
```

#### Example: Enable custom subagents in Plan Mode

Built-in research [subagents](../core/subagents.md) like
[`codebase_investigator`](../core/subagents.md#codebase-investigator) and
[`cli_help`](../core/subagents.md#cli-help-agent) are enabled by default in Plan
Mode. You can enable additional
[custom subagents](../core/subagents.md#creating-custom-subagents) by adding a
rule to your policy.

`~/.gemini/policies/research-subagents.toml`

```toml
[[rule]]
toolName = "my_custom_subagent"
decision = "allow"
priority = 100
modes = ["plan"]
```

Tell Gemini CLI it can use these tools in your prompt, for example: _"You can
check ongoing changes in git."_

### Custom plan directory and policies

By default, planning artifacts are stored in a managed temporary directory
outside your project: `~/.gemini/tmp/<project>/<session-id>/plans/`.

You can configure a custom directory for plans in your `settings.json`. For
example, to store plans in a `.gemini/plans` directory within your project:

```json
{
  "general": {
    "plan": {
      "directory": ".gemini/plans"
    }
  }
}
```

To maintain the safety of Plan Mode, user-configured paths for the plans
directory are restricted to the project root. This ensures that custom planning
locations defined within a project's workspace cannot be used to escape and
overwrite sensitive files elsewhere. Any user-configured directory must reside
within the project boundary.

Using a custom directory requires updating your
[policy engine](../reference/policy-engine.md) configurations to allow
`write_file` and `replace` in that specific location. For example, to allow
writing to the `.gemini/plans` directory within your project, create a policy
file at `~/.gemini/policies/plan-custom-directory.toml`:

```toml
[[rule]]
toolName = ["write_file", "replace"]
decision = "allow"
priority = 100
modes = ["plan"]
# Adjust the pattern to match your custom directory.
# This example matches any .md file in a .gemini/plans directory within the project.
argsPattern = "\"file_path\":\"[^\"]+[\\\\/]+\\.gemini[\\\\/]+plans[\\\\/]+[\\w-]+\\.md\""
```

### Using hooks with Plan Mode

You can use the [hook system](../hooks/writing-hooks.md) to automate parts of
the planning workflow or enforce additional checks when Gemini CLI transitions
into or out of Plan Mode.

Hooks such as `BeforeTool` or `AfterTool` can be configured to intercept the
`enter_plan_mode` and `exit_plan_mode` tool calls.

> [!WARNING] When hooks are triggered by **tool executions**, they do **not**
> run when you manually toggle Plan Mode using the `/plan` command or the
> `Shift+Tab` keyboard shortcut. If you need hooks to execute on mode changes,
> ensure the transition is initiated by the agent (e.g., by asking "start a plan
> for...").

#### Example: Archive approved plans to GCS (`AfterTool`)

If your organizational policy requires a record of all execution plans, you can
use an `AfterTool` hook to securely copy the plan artifact to Google Cloud
Storage whenever Gemini CLI exits Plan Mode to start the implementation.

**`.gemini/hooks/archive-plan.sh`:**

```bash
#!/usr/bin/env bash
# Extract the plan path from the tool input JSON
plan_path=$(jq -r '.tool_input.plan_path // empty')

if [ -f "$plan_path" ]; then
  # Generate a unique filename using a timestamp
  filename="$(date +%s)_$(basename "$plan_path")"

  # Upload the plan to GCS in the background so it doesn't block the CLI
  gsutil cp "$plan_path" "gs://my-audit-bucket/gemini-plans/$filename" > /dev/null 2>&1 &
fi

# AfterTool hooks should generally allow the flow to continue
echo '{"decision": "allow"}'
```

To register this `AfterTool` hook, add it to your `settings.json`:

```json
{
  "hooks": {
    "AfterTool": [
      {
        "matcher": "exit_plan_mode",
        "hooks": [
          {
            "name": "archive-plan",
            "type": "command",
            "command": "./.gemini/hooks/archive-plan.sh"
          }
        ]
      }
    ]
  }
}
```

## Commands

- **`/plan copy`**: Copy the currently approved plan to your clipboard.

## Planning workflows

Plan Mode provides building blocks for structured research and design. These are
implemented as [extensions](../extensions/index.md) using core planning tools
like [`enter_plan_mode`](../tools/planning.md#1-enter_plan_mode-enterplanmode),
[`exit_plan_mode`](../tools/planning.md#2-exit_plan_mode-exitplanmode), and
[`ask_user`](../tools/ask-user.md).

### Built-in planning workflow

The built-in planner uses an adaptive workflow to analyze your project, consult
you on trade-offs via [`ask_user`](../tools/ask-user.md), and draft a plan for
your approval.

### Custom planning workflows

You can install or create specialized planners to suit your workflow.

#### Conductor

[Conductor] is designed for spec-driven development. It organizes work into
"tracks" and stores persistent artifacts in your project's `conductor/`
directory:

- **Automate transitions:** Switches to read-only mode via
  [`enter_plan_mode`](../tools/planning.md#1-enter_plan_mode-enterplanmode).
- **Streamline decisions:** Uses [`ask_user`](../tools/ask-user.md) for
  architectural choices.
- **Maintain project context:** Stores artifacts in the project directory using
  [custom plan directory and policies](#custom-plan-directory-and-policies).
- **Handoff execution:** Transitions to implementation via
  [`exit_plan_mode`](../tools/planning.md#2-exit_plan_mode-exitplanmode).

#### Build your own

Since Plan Mode is built on modular building blocks, you can develop your own
custom planning workflow as an [extensions](../extensions/index.md). By
leveraging core tools and [custom policies](#custom-policies), you can define
how Gemini CLI researches and stores plans for your specific domain.

To build a custom planning workflow, you can use:

- **Tool usage:** Use core tools like
  [`enter_plan_mode`](../tools/planning.md#1-enter_plan_mode-enterplanmode),
  [`ask_user`](../tools/ask-user.md), and
  [`exit_plan_mode`](../tools/planning.md#2-exit_plan_mode-exitplanmode) to
  manage the research and design process.
- **Customization:** Set your own storage locations and policy rules using
  [custom plan directories](#custom-plan-directory-and-policies) and
  [custom policies](#custom-policies).

<!-- prettier-ignore -->
> [!TIP]
> Use [Conductor] as a reference when building your own custom
> planning workflow.

By using Plan Mode as its execution environment, your custom methodology can
enforce read-only safety during the design phase while benefiting from
high-reasoning model routing.

## Automatic Model Routing

When using an [auto model](../reference/configuration.md#model), Gemini CLI
automatically optimizes [model routing](../cli/telemetry.md#model-routing) based
on the current phase of your task:

1.  **Planning Phase:** While in Plan Mode, the CLI routes requests to a
    high-reasoning **Pro** model to ensure robust architectural decisions and
    high-quality plans.
2.  **Implementation Phase:** Once a plan is approved and you exit Plan Mode,
    the CLI detects the existence of the approved plan and automatically
    switches to a high-speed **Flash** model. This provides a faster, more
    responsive experience during the implementation of the plan.

This behavior is enabled by default to provide the best balance of quality and
performance. You can disable this automatic switching in your settings:

```json
{
  "general": {
    "plan": {
      "modelRouting": false
    }
  }
}
```

## Cleanup

By default, Gemini CLI automatically cleans up old session data, including all
associated plan files and task trackers.

- **Default behavior:** Sessions (and their plans) are retained for **30 days**.
- **Configuration:** You can customize this behavior via the `/settings` command
  (search for **Session Retention**) or in your `settings.json` file. See
  [session retention](../cli/session-management.md#session-retention) for more
  details.

Manual deletion also removes all associated artifacts:

- **Command Line:** Use `gemini --delete-session <index|id>`.
- **Session Browser:** Press `/resume`, navigate to a session, and press `x`.

If you use a [custom plans directory](#custom-plan-directory-and-policies),
those files are not automatically deleted and must be managed manually.

## Non-interactive execution

When running Gemini CLI in non-interactive environments (such as headless
scripts or CI/CD pipelines), Plan Mode optimizes for automated workflows:

- **Automatic transitions:** The policy engine automatically approves the
  `enter_plan_mode` and `exit_plan_mode` tools without prompting for user
  confirmation.
- **Automated implementation:** When exiting Plan Mode to execute the plan,
  Gemini CLI automatically switches to
  [YOLO mode](../reference/policy-engine.md#approval-modes) instead of the
  standard Default mode. This allows the CLI to execute the implementation steps
  automatically without hanging on interactive tool approvals.

**Example:**

```bash
gemini --approval-mode plan -p "Analyze telemetry and suggest improvements"
```

[`plan.toml`]: https://github.com/google-gemini/gemini-cli/blob/main/packages/core/src/policy/policies/plan.toml
[Conductor]: https://github.com/gemini-cli-extensions/conductor
[open an issue]: https://github.com/google-gemini/gemini-cli/issues

````

## File: `docs/resources/nextjs/SKILL.md`

```md
---
name: next-best-practices
description: Next.js best practices - file conventions, RSC boundaries, data patterns, async APIs, metadata, error handling, route handlers, image/font optimization, bundling
user-invocable: false
---

# Next.js Best Practices

Apply these rules when writing or reviewing Next.js code.

## File Conventions

See [file-conventions.md](./file-conventions.md) for:
- Project structure and special files
- Route segments (dynamic, catch-all, groups)
- Parallel and intercepting routes
- Middleware rename in v16 (middleware → proxy)

## RSC Boundaries

Detect invalid React Server Component patterns.

See [rsc-boundaries.md](./rsc-boundaries.md) for:
- Async client component detection (invalid)
- Non-serializable props detection
- Server Action exceptions

## Async Patterns

Next.js 15+ async API changes.

See [async-patterns.md](./async-patterns.md) for:
- Async `params` and `searchParams`
- Async `cookies()` and `headers()`
- Migration codemod

## Runtime Selection

See [runtime-selection.md](./runtime-selection.md) for:
- Default to Node.js runtime
- When Edge runtime is appropriate

## Directives

See [directives.md](./directives.md) for:
- `'use client'`, `'use server'` (React)
- `'use cache'` (Next.js)

## Functions

See [functions.md](./functions.md) for:
- Navigation hooks: `useRouter`, `usePathname`, `useSearchParams`, `useParams`
- Server functions: `cookies`, `headers`, `draftMode`, `after`
- Generate functions: `generateStaticParams`, `generateMetadata`

## Error Handling

See [error-handling.md](./error-handling.md) for:
- `error.tsx`, `global-error.tsx`, `not-found.tsx`
- `redirect`, `permanentRedirect`, `notFound`
- `forbidden`, `unauthorized` (auth errors)
- `unstable_rethrow` for catch blocks

## Data Patterns

See [data-patterns.md](./data-patterns.md) for:
- Server Components vs Server Actions vs Route Handlers
- Avoiding data waterfalls (`Promise.all`, Suspense, preload)
- Client component data fetching

## Route Handlers

See [route-handlers.md](./route-handlers.md) for:
- `route.ts` basics
- GET handler conflicts with `page.tsx`
- Environment behavior (no React DOM)
- When to use vs Server Actions

## Metadata & OG Images

See [metadata.md](./metadata.md) for:
- Static and dynamic metadata
- `generateMetadata` function
- OG image generation with `next/og`
- File-based metadata conventions

## Image Optimization

See [image.md](./image.md) for:
- Always use `next/image` over `<img>`
- Remote images configuration
- Responsive `sizes` attribute
- Blur placeholders
- Priority loading for LCP

## Font Optimization

See [font.md](./font.md) for:
- `next/font` setup
- Google Fonts, local fonts
- Tailwind CSS integration
- Preloading subsets

## Bundling

See [bundling.md](./bundling.md) for:
- Server-incompatible packages
- CSS imports (not link tags)
- Polyfills (already included)
- ESM/CommonJS issues
- Bundle analysis

## Scripts

See [scripts.md](./scripts.md) for:
- `next/script` vs native script tags
- Inline scripts need `id`
- Loading strategies
- Google Analytics with `@next/third-parties`

## Hydration Errors

See [hydration-error.md](./hydration-error.md) for:
- Common causes (browser APIs, dates, invalid HTML)
- Debugging with error overlay
- Fixes for each cause

## Suspense Boundaries

See [suspense-boundaries.md](./suspense-boundaries.md) for:
- CSR bailout with `useSearchParams` and `usePathname`
- Which hooks require Suspense boundaries

## Parallel & Intercepting Routes

See [parallel-routes.md](./parallel-routes.md) for:
- Modal patterns with `@slot` and `(.)` interceptors
- `default.tsx` for fallbacks
- Closing modals correctly with `router.back()`

## Self-Hosting

See [self-hosting.md](./self-hosting.md) for:
- `output: 'standalone'` for Docker
- Cache handlers for multi-instance ISR
- What works vs needs extra setup

## Debug Tricks

See [debug-tricks.md](./debug-tricks.md) for:
- MCP endpoint for AI-assisted debugging
- Rebuild specific routes with `--debug-build-paths`


````

## File: `docs/resources/nextjs/async-patterns.md`

````md
# Async Patterns

In Next.js 15+, `params`, `searchParams`, `cookies()`, and `headers()` are asynchronous.

## Async Params and SearchParams

Always type them as `Promise<...>` and await them.

### Pages and Layouts

```tsx
type Props = { params: Promise<{ slug: string }> };

export default async function Page({ params }: Props) {
  const { slug } = await params;
}
```
````

### Route Handlers

```tsx
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

### SearchParams

```tsx
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ query?: string }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { query } = await searchParams;
}
```

### Synchronous Components

Use `React.use()` for non-async components:

```tsx
import { use } from "react";

type Props = { params: Promise<{ slug: string }> };

export default function Page({ params }: Props) {
  const { slug } = use(params);
}
```

### generateMetadata

```tsx
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug };
}
```

## Async Cookies and Headers

```tsx
import { cookies, headers } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const headersList = await headers();

  const theme = cookieStore.get("theme");
  const userAgent = headersList.get("user-agent");
}
```

## Migration Codemod

```bash
npx @next/codemod@latest next-async-request-api .
```

````

## File: `docs/resources/nextjs/bundling.md`

```md
# Bundling

Fix common bundling issues with third-party packages.

## Server-Incompatible Packages

Some packages use browser APIs (`window`, `document`, `localStorage`) and fail in Server Components.

### Error Signs

````

ReferenceError: window is not defined
ReferenceError: document is not defined
ReferenceError: localStorage is not defined
Module not found: Can't resolve 'fs'

````

### Solution 1: Mark as Client-Only

If the package is only needed on client:

```tsx
// Bad: Fails - package uses window
import SomeChart from 'some-chart-library'

export default function Page() {
  return <SomeChart />
}

// Good: Use dynamic import with ssr: false
import dynamic from 'next/dynamic'

const SomeChart = dynamic(() => import('some-chart-library'), {
  ssr: false,
})

export default function Page() {
  return <SomeChart />
}
````

### Solution 2: Externalize from Server Bundle

For packages that should run on server but have bundling issues:

```js
// next.config.js
module.exports = {
  serverExternalPackages: ["problematic-package"],
};
```

Use this for:

- Packages with native bindings (sharp, bcrypt)
- Packages that don't bundle well (some ORMs)
- Packages with circular dependencies

### Solution 3: Client Component Wrapper

Wrap the entire usage in a client component:

```tsx
// components/ChartWrapper.tsx
"use client";

import { Chart } from "chart-library";

export function ChartWrapper(props) {
  return <Chart {...props} />;
}

// app/page.tsx (server component)
import { ChartWrapper } from "@/components/ChartWrapper";

export default function Page() {
  return <ChartWrapper data={data} />;
}
```

## CSS Imports

Import CSS files instead of using `<link>` tags. Next.js handles bundling and optimization.

```tsx
// Bad: Manual link tag
<link rel="stylesheet" href="/styles.css" />;

// Good: Import CSS
import "./styles.css";

// Good: CSS Modules
import styles from "./Button.module.css";
```

## Polyfills

Next.js includes common polyfills automatically. Don't load redundant ones from polyfill.io or similar CDNs.

Already included: `Array.from`, `Object.assign`, `Promise`, `fetch`, `Map`, `Set`, `Symbol`, `URLSearchParams`, and 50+ others.

```tsx
// Bad: Redundant polyfills
<script src="https://polyfill.io/v3/polyfill.min.js?features=fetch,Promise,Array.from" />

// Good: Next.js includes these automatically
```

## ESM/CommonJS Issues

### Error Signs

```
SyntaxError: Cannot use import statement outside a module
Error: require() of ES Module
Module not found: ESM packages need to be imported
```

### Solution: Transpile Package

```js
// next.config.js
module.exports = {
  transpilePackages: ["some-esm-package", "another-package"],
};
```

## Common Problematic Packages

| Package         | Issue           | Solution                                                        |
| --------------- | --------------- | --------------------------------------------------------------- |
| `sharp`         | Native bindings | `serverExternalPackages: ['sharp']`                             |
| `bcrypt`        | Native bindings | `serverExternalPackages: ['bcrypt']` or use `bcryptjs`          |
| `canvas`        | Native bindings | `serverExternalPackages: ['canvas']`                            |
| `recharts`      | Uses window     | `dynamic(() => import('recharts'), { ssr: false })`             |
| `react-quill`   | Uses document   | `dynamic(() => import('react-quill'), { ssr: false })`          |
| `mapbox-gl`     | Uses window     | `dynamic(() => import('mapbox-gl'), { ssr: false })`            |
| `monaco-editor` | Uses window     | `dynamic(() => import('@monaco-editor/react'), { ssr: false })` |
| `lottie-web`    | Uses document   | `dynamic(() => import('lottie-react'), { ssr: false })`         |

## Bundle Analysis

Analyze bundle size with the built-in analyzer (Next.js 16.1+):

```bash
next experimental-analyze
```

This opens an interactive UI to:

- Filter by route, environment (client/server), and type
- Inspect module sizes and import chains
- View treemap visualization

Save output for comparison:

```bash
next experimental-analyze --output
# Output saved to .next/diagnostics/analyze
```

Reference: https://nextjs.org/docs/app/guides/package-bundling

## Migrating from Webpack to Turbopack

Turbopack is the default bundler in Next.js 15+. If you have custom webpack config, migrate to Turbopack-compatible alternatives:

```js
// next.config.js
module.exports = {
  // Good: Works with Turbopack
  serverExternalPackages: ["package"],
  transpilePackages: ["package"],

  // Bad: Webpack-only - migrate away from this
  webpack: (config) => {
    // custom webpack config
  },
};
```

Reference: https://nextjs.org/docs/app/building-your-application/upgrading/from-webpack-to-turbopack

````

## File: `docs/resources/nextjs/data-patterns.md`

```md
# Data Patterns

Choose the right data fetching pattern for each use case.

## Decision Tree

````

Need to fetch data?
├── From a Server Component?
│ └── Use: Fetch directly (no API needed)
│
├── From a Client Component?
│ ├── Is it a mutation (POST/PUT/DELETE)?
│ │ └── Use: Server Action
│ └── Is it a read (GET)?
│ └── Use: Route Handler OR pass from Server Component
│
├── Need external API access (webhooks, third parties)?
│ └── Use: Route Handler
│
└── Need REST API for mobile app / external clients?
└── Use: Route Handler

````

## Pattern 1: Server Components (Preferred for Reads)

Fetch data directly in Server Components - no API layer needed.

```tsx
// app/users/page.tsx
async function UsersPage() {
  // Direct database access - no API round-trip
  const users = await db.user.findMany();

  // Or fetch from external API
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
````

**Benefits**:

- No API to maintain
- No client-server waterfall
- Secrets stay on server
- Direct database access

## Pattern 2: Server Actions (Preferred for Mutations)

Server Actions are the recommended way to handle mutations.

```tsx
// app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;

  await db.post.create({ data: { title } });

  revalidatePath("/posts");
}

export async function deletePost(id: string) {
  await db.post.delete({ where: { id } });

  revalidateTag("posts");
}
```

```tsx
// app/posts/new/page.tsx
import { createPost } from "@/app/actions";

export default function NewPost() {
  return (
    <form action={createPost}>
      <input name="title" required />
      <button type="submit">Create</button>
    </form>
  );
}
```

**Benefits**:

- End-to-end type safety
- Progressive enhancement (works without JS)
- Automatic request handling
- Integrated with React transitions

**Constraints**:

- POST only (no GET caching semantics)
- Internal use only (no external access)
- Cannot return non-serializable data

## Pattern 3: Route Handlers (APIs)

Use Route Handlers when you need a REST API.

```tsx
// app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";

// GET is cacheable
export async function GET(request: NextRequest) {
  const posts = await db.post.findMany();
  return NextResponse.json(posts);
}

// POST for mutations
export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await db.post.create({ data: body });
  return NextResponse.json(post, { status: 201 });
}
```

**When to use**:

- External API access (mobile apps, third parties)
- Webhooks from external services
- GET endpoints that need HTTP caching
- OpenAPI/Swagger documentation needed

**When NOT to use**:

- Internal data fetching (use Server Components)
- Mutations from your UI (use Server Actions)

## Avoiding Data Waterfalls

### Problem: Sequential Fetches

```tsx
// Bad: Sequential waterfalls
async function Dashboard() {
  const user = await getUser(); // Wait...
  const posts = await getPosts(); // Then wait...
  const comments = await getComments(); // Then wait...

  return <div>...</div>;
}
```

### Solution 1: Parallel Fetching with Promise.all

```tsx
// Good: Parallel fetching
async function Dashboard() {
  const [user, posts, comments] = await Promise.all([getUser(), getPosts(), getComments()]);

  return <div>...</div>;
}
```

### Solution 2: Streaming with Suspense

```tsx
// Good: Show content progressively
import { Suspense } from "react";

async function Dashboard() {
  return (
    <div>
      <Suspense fallback={<UserSkeleton />}>
        <UserSection />
      </Suspense>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsSection />
      </Suspense>
    </div>
  );
}

async function UserSection() {
  const user = await getUser(); // Fetches independently
  return <div>{user.name}</div>;
}

async function PostsSection() {
  const posts = await getPosts(); // Fetches independently
  return <PostList posts={posts} />;
}
```

### Solution 3: Preload Pattern

```tsx
// lib/data.ts
import { cache } from "react";

export const getUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });
});

export const preloadUser = (id: string) => {
  void getUser(id); // Fire and forget
};
```

```tsx
// app/user/[id]/page.tsx
import { getUser, preloadUser } from "@/lib/data";

export default async function UserPage({ params }) {
  const { id } = await params;

  // Start fetching early
  preloadUser(id);

  // Do other work...

  // Data likely ready by now
  const user = await getUser(id);
  return <div>{user.name}</div>;
}
```

## Client Component Data Fetching

When Client Components need data:

### Option 1: Pass from Server Component (Preferred)

```tsx
// Server Component
async function Page() {
  const data = await fetchData();
  return <ClientComponent initialData={data} />;
}

// Client Component
("use client");
function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  // ...
}
```

### Option 2: Fetch on Mount (When Necessary)

```tsx
"use client";
import { useEffect, useState } from "react";

function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) return <Loading />;
  return <div>{data.value}</div>;
}
```

### Option 3: Server Action for Reads (Works But Not Ideal)

Server Actions can be called from Client Components for reads, but this is not their intended purpose:

```tsx
"use client";
import { getData } from "./actions";
import { useEffect, useState } from "react";

function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return <div>{data?.value}</div>;
}
```

**Note**: Server Actions always use POST, so no HTTP caching. Prefer Route Handlers for cacheable reads.

## Quick Reference

| Pattern                | Use Case                    | HTTP Method | Caching              |
| ---------------------- | --------------------------- | ----------- | -------------------- |
| Server Component fetch | Internal reads              | Any         | Full Next.js caching |
| Server Action          | Mutations, form submissions | POST only   | No                   |
| Route Handler          | External APIs, webhooks     | Any         | GET can be cached    |
| Client fetch to API    | Client-side reads           | Any         | HTTP cache headers   |

````

## File: `docs/resources/nextjs/debug-tricks.md`

```md
# Debug Tricks

Tricks to speed up debugging Next.js applications.

## MCP Endpoint (Dev Server)

Next.js exposes a `/_next/mcp` endpoint in development for AI-assisted debugging via MCP (Model Context Protocol).

- **Next.js 16+**: Enabled by default, use `next-devtools-mcp`
- **Next.js < 16**: Requires `experimental.mcpServer: true` in next.config.js

Reference: https://nextjs.org/docs/app/guides/mcp

**Important**: Find the actual port of the running Next.js dev server (check terminal output or `package.json` scripts). Don't assume port 3000.

### Request Format

The endpoint uses JSON-RPC 2.0 over HTTP POST:

```bash
curl -X POST http://localhost:<port>/_next/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "tools/call",
    "params": {
      "name": "<tool-name>",
      "arguments": {}
    }
  }'
````

### Available Tools

#### `get_errors`

Get current errors from dev server (build errors, runtime errors with source-mapped stacks):

```json
{ "name": "get_errors", "arguments": {} }
```

#### `get_routes`

Discover all routes by scanning filesystem:

```json
{ "name": "get_routes", "arguments": {} }
// Optional: { "name": "get_routes", "arguments": { "routerType": "app" } }
```

Returns: `{ "appRouter": ["/", "/api/users/[id]", ...], "pagesRouter": [...] }`

#### `get_project_metadata`

Get project path and dev server URL:

```json
{ "name": "get_project_metadata", "arguments": {} }
```

Returns: `{ "projectPath": "/path/to/project", "devServerUrl": "http://localhost:3000" }`

#### `get_page_metadata`

Get runtime metadata about current page render (requires active browser session):

```json
{ "name": "get_page_metadata", "arguments": {} }
```

Returns segment trie data showing layouts, boundaries, and page components.

#### `get_logs`

Get path to Next.js development log file:

```json
{ "name": "get_logs", "arguments": {} }
```

Returns path to `<distDir>/logs/next-development.log`

#### `get_server_action_by_id`

Locate a Server Action by ID:

```json
{ "name": "get_server_action_by_id", "arguments": { "actionId": "<action-id>" } }
```

### Example: Get Errors

```bash
curl -X POST http://localhost:<port>/_next/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":"1","method":"tools/call","params":{"name":"get_errors","arguments":{}}}'
```

## Rebuild Specific Routes (Next.js 16+)

Use `--debug-build-paths` to rebuild only specific routes instead of the entire app:

```bash
# Rebuild a specific route
next build --debug-build-paths "/dashboard"

# Rebuild routes matching a glob
next build --debug-build-paths "/api/*"

# Dynamic routes
next build --debug-build-paths "/blog/[slug]"
```

Use this to:

- Quickly verify a build fix without full rebuild
- Debug static generation issues for specific pages
- Iterate faster on build errors

````

## File: `docs/resources/nextjs/directives.md`

```md
# Directives

## React Directives

These are React directives, not Next.js specific.

### `'use client'`

Marks a component as a Client Component. Required for:
- React hooks (`useState`, `useEffect`, etc.)
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`window`, `localStorage`)

```tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
````

Reference: https://react.dev/reference/rsc/use-client

### `'use server'`

Marks a function as a Server Action. Can be passed to Client Components.

```tsx
"use server";

export async function submitForm(formData: FormData) {
  // Runs on server
}
```

Or inline within a Server Component:

```tsx
export default function Page() {
  async function submit() {
    "use server";
    // Runs on server
  }
  return <form action={submit}>...</form>;
}
```

Reference: https://react.dev/reference/rsc/use-server

---

## Next.js Directive

### `'use cache'`

Marks a function or component for caching. Part of Next.js Cache Components.

```tsx
"use cache";

export async function getCachedData() {
  return await fetchData();
}
```

Requires `cacheComponents: true` in `next.config.ts`.

For detailed usage including cache profiles, `cacheLife()`, `cacheTag()`, and `updateTag()`, see the `next-cache-components` skill.

Reference: https://nextjs.org/docs/app/api-reference/directives/use-cache

````

## File: `docs/resources/nextjs/error-handling.md`

```md
# Error Handling

Handle errors gracefully in Next.js applications.

Reference: https://nextjs.org/docs/app/getting-started/error-handling

## Error Boundaries

### `error.tsx`

Catches errors in a route segment and its children:

```tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
````

**Important:** `error.tsx` must be a Client Component.

### `global-error.tsx`

Catches errors in root layout:

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

**Important:** Must include `<html>` and `<body>` tags.

## Server Actions: Navigation API Gotcha

**Do NOT wrap navigation APIs in try-catch.** They throw special errors that Next.js handles internally.

Reference: https://nextjs.org/docs/app/api-reference/functions/redirect#behavior

```tsx
'use server'

import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

// Bad: try-catch catches the navigation "error"
async function createPost(formData: FormData) {
  try {
    const post = await db.post.create({ ... })
    redirect(`/posts/${post.id}`)  // This throws!
  } catch (error) {
    // redirect() throw is caught here - navigation fails!
    return { error: 'Failed to create post' }
  }
}

// Good: Call navigation APIs outside try-catch
async function createPost(formData: FormData) {
  let post
  try {
    post = await db.post.create({ ... })
  } catch (error) {
    return { error: 'Failed to create post' }
  }
  redirect(`/posts/${post.id}`)  // Outside try-catch
}

// Good: Re-throw navigation errors
async function createPost(formData: FormData) {
  try {
    const post = await db.post.create({ ... })
    redirect(`/posts/${post.id}`)
  } catch (error) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error  // Re-throw navigation errors
    }
    return { error: 'Failed to create post' }
  }
}
```

Same applies to:

- `redirect()` - 307 temporary redirect
- `permanentRedirect()` - 308 permanent redirect
- `notFound()` - 404 not found
- `forbidden()` - 403 forbidden
- `unauthorized()` - 401 unauthorized

Use `unstable_rethrow()` to re-throw these errors in catch blocks:

```tsx
import { unstable_rethrow } from "next/navigation";

async function action() {
  try {
    // ...
    redirect("/success");
  } catch (error) {
    unstable_rethrow(error); // Re-throws Next.js internal errors
    return { error: "Something went wrong" };
  }
}
```

## Redirects

```tsx
import { redirect, permanentRedirect } from "next/navigation";

// 307 Temporary - use for most cases
redirect("/new-path");

// 308 Permanent - use for URL migrations (cached by browsers)
permanentRedirect("/new-url");
```

## Auth Errors

Trigger auth-related error pages:

```tsx
import { forbidden, unauthorized } from "next/navigation";

async function Page() {
  const session = await getSession();

  if (!session) {
    unauthorized(); // Renders unauthorized.tsx (401)
  }

  if (!session.hasAccess) {
    forbidden(); // Renders forbidden.tsx (403)
  }

  return <Dashboard />;
}
```

Create corresponding error pages:

```tsx
// app/forbidden.tsx
export default function Forbidden() {
  return <div>You don't have access to this resource</div>;
}

// app/unauthorized.tsx
export default function Unauthorized() {
  return <div>Please log in to continue</div>;
}
```

## Not Found

### `not-found.tsx`

Custom 404 page for a route segment:

```tsx
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested resource</p>
    </div>
  );
}
```

### Triggering Not Found

```tsx
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound(); // Renders closest not-found.tsx
  }

  return <div>{post.title}</div>;
}
```

## Error Hierarchy

Errors bubble up to the nearest error boundary:

```
app/
├── error.tsx           # Catches errors from all children
├── blog/
│   ├── error.tsx       # Catches errors in /blog/*
│   └── [slug]/
│       ├── error.tsx   # Catches errors in /blog/[slug]
│       └── page.tsx
└── layout.tsx          # Errors here go to global-error.tsx
```

````

## File: `docs/resources/nextjs/file-conventions.md`

```md
# File Conventions

Next.js App Router uses file-based routing with special file conventions.

## Project Structure

Reference: https://nextjs.org/docs/app/getting-started/project-structure

````

app/
├── layout.tsx # Root layout (required)
├── page.tsx # Home page (/)
├── loading.tsx # Loading UI
├── error.tsx # Error UI
├── not-found.tsx # 404 UI
├── global-error.tsx # Global error UI
├── route.ts # API endpoint
├── template.tsx # Re-rendered layout
├── default.tsx # Parallel route fallback
├── blog/
│ ├── page.tsx # /blog
│ └── [slug]/
│ └── page.tsx # /blog/:slug
└── (group)/ # Route group (no URL impact)
└── page.tsx

```

## Special Files

| File | Purpose |
|------|---------|
| `page.tsx` | UI for a route segment |
| `layout.tsx` | Shared UI for segment and children |
| `loading.tsx` | Loading UI (Suspense boundary) |
| `error.tsx` | Error UI (Error boundary) |
| `not-found.tsx` | 404 UI |
| `route.ts` | API endpoint |
| `template.tsx` | Like layout but re-renders on navigation |
| `default.tsx` | Fallback for parallel routes |

## Route Segments

```

app/
├── blog/ # Static segment: /blog
├── [slug]/ # Dynamic segment: /:slug
├── [...slug]/ # Catch-all: /a/b/c
├── [[...slug]]/ # Optional catch-all: / or /a/b/c
└── (marketing)/ # Route group (ignored in URL)

```

## Parallel Routes

```

app/
├── @analytics/
│ └── page.tsx
├── @sidebar/
│ └── page.tsx
└── layout.tsx # Receives { analytics, sidebar } as props

```

## Intercepting Routes

```

app/
├── feed/
│ └── page.tsx
├── @modal/
│ └── (.)photo/[id]/ # Intercepts /photo/[id] from /feed
│ └── page.tsx
└── photo/[id]/
└── page.tsx

```

Conventions:
- `(.)` - same level
- `(..)` - one level up
- `(..)(..)` - two levels up
- `(...)` - from root

## Private Folders

```

app/
├── \_components/ # Private folder (not a route)
│ └── Button.tsx
└── page.tsx

````

Prefix with `_` to exclude from routing.

## Middleware / Proxy

### Next.js 14-15: `middleware.ts`

```ts
// middleware.ts (root of project)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Auth, redirects, rewrites, etc.
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
````

### Next.js 16+: `proxy.ts`

Renamed for clarity - same capabilities, different names:

```ts
// proxy.ts (root of project)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Same logic as middleware
  return NextResponse.next();
}

export const proxyConfig = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
```

| Version | File            | Export         | Config        |
| ------- | --------------- | -------------- | ------------- |
| v14-15  | `middleware.ts` | `middleware()` | `config`      |
| v16+    | `proxy.ts`      | `proxy()`      | `proxyConfig` |

**Migration**: Run `npx @next/codemod@latest upgrade` to auto-rename.

## File Conventions Reference

Reference: https://nextjs.org/docs/app/api-reference/file-conventions

````

## File: `docs/resources/nextjs/font.md`

```md
# Font Optimization

Use `next/font` for automatic font optimization with zero layout shift.

## Google Fonts

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
````

## Multiple Fonts

```tsx
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

Use in CSS:

```css
body {
  font-family: var(--font-inter);
}

code {
  font-family: var(--font-roboto-mono);
}
```

## Font Weights and Styles

```tsx
// Single weight
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

// Multiple weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Variable font (recommended) - includes all weights
const inter = Inter({
  subsets: ["latin"],
  // No weight needed - variable fonts support all weights
});

// With italic
const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
```

## Local Fonts

```tsx
import localFont from "next/font/local";

const myFont = localFont({
  src: "./fonts/MyFont.woff2",
});

// Multiple files for different weights
const myFont = localFont({
  src: [
    {
      path: "./fonts/MyFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MyFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// Variable font
const myFont = localFont({
  src: "./fonts/MyFont-Variable.woff2",
  variable: "--font-my-font",
});
```

## Tailwind CSS Integration

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
```

## Preloading Subsets

Only load needed character subsets:

```tsx
// Latin only (most common)
const inter = Inter({ subsets: ["latin"] });

// Multiple subsets
const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic"] });
```

## Display Strategy

Control font loading behavior:

```tsx
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Default - shows fallback, swaps when loaded
});

// Options:
// 'auto' - browser decides
// 'block' - short block period, then swap
// 'swap' - immediate fallback, swap when ready (recommended)
// 'fallback' - short block, short swap, then fallback
// 'optional' - short block, no swap (use if font is optional)
```

## Don't Use Manual Font Links

Always use `next/font` instead of `<link>` tags for Google Fonts.

```tsx
// Bad: Manual link tag (blocks rendering, no optimization)
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />

// Bad: Missing display and preconnect
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />

// Good: Use next/font (self-hosted, zero layout shift)
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## Common Mistakes

```tsx
// Bad: Importing font in every component
// components/Button.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] }) // Creates new instance each time!

// Good: Import once in layout, use CSS variable
// app/layout.tsx
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// Bad: Using @import in CSS (blocks rendering)
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter');

// Good: Use next/font (self-hosted, no network request)
import { Inter } from 'next/font/google'

// Bad: Loading all weights when only using a few
const inter = Inter({ subsets: ['latin'] }) // Loads all weights

// Good: Specify only needed weights (for non-variable fonts)
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

// Bad: Missing subset - loads all characters
const inter = Inter({})

// Good: Always specify subset
const inter = Inter({ subsets: ['latin'] })
```

## Font in Specific Components

```tsx
// For component-specific fonts, export from a shared file
// lib/fonts.ts
import { Inter, Playfair_Display } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// components/Heading.tsx
import { playfair } from "@/lib/fonts";

export function Heading({ children }) {
  return <h1 className={playfair.className}>{children}</h1>;
}
```

````

## File: `docs/resources/nextjs/functions.md`

```md
# Functions

Next.js function APIs.

Reference: https://nextjs.org/docs/app/api-reference/functions

## Navigation Hooks (Client)

| Hook | Purpose | Reference |
|------|---------|-----------|
| `useRouter` | Programmatic navigation (`push`, `replace`, `back`, `refresh`) | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-router) |
| `usePathname` | Get current pathname | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-pathname) |
| `useSearchParams` | Read URL search parameters | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-search-params) |
| `useParams` | Access dynamic route parameters | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-params) |
| `useSelectedLayoutSegment` | Active child segment (one level) | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) |
| `useSelectedLayoutSegments` | All active segments below layout | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) |
| `useLinkStatus` | Check link prefetch status | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-link-status) |
| `useReportWebVitals` | Report Core Web Vitals metrics | [Docs](https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals) |

## Server Functions

| Function | Purpose | Reference |
|----------|---------|-----------|
| `cookies` | Read/write cookies | [Docs](https://nextjs.org/docs/app/api-reference/functions/cookies) |
| `headers` | Read request headers | [Docs](https://nextjs.org/docs/app/api-reference/functions/headers) |
| `draftMode` | Enable preview of unpublished CMS content | [Docs](https://nextjs.org/docs/app/api-reference/functions/draft-mode) |
| `after` | Run code after response finishes streaming | [Docs](https://nextjs.org/docs/app/api-reference/functions/after) |
| `connection` | Wait for connection before dynamic rendering | [Docs](https://nextjs.org/docs/app/api-reference/functions/connection) |
| `userAgent` | Parse User-Agent header | [Docs](https://nextjs.org/docs/app/api-reference/functions/userAgent) |

## Generate Functions

| Function | Purpose | Reference |
|----------|---------|-----------|
| `generateStaticParams` | Pre-render dynamic routes at build time | [Docs](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) |
| `generateMetadata` | Dynamic metadata | [Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) |
| `generateViewport` | Dynamic viewport config | [Docs](https://nextjs.org/docs/app/api-reference/functions/generate-viewport) |
| `generateSitemaps` | Multiple sitemaps for large sites | [Docs](https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps) |
| `generateImageMetadata` | Multiple OG images per route | [Docs](https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata) |

## Request/Response

| Function | Purpose | Reference |
|----------|---------|-----------|
| `NextRequest` | Extended Request with helpers | [Docs](https://nextjs.org/docs/app/api-reference/functions/next-request) |
| `NextResponse` | Extended Response with helpers | [Docs](https://nextjs.org/docs/app/api-reference/functions/next-response) |
| `ImageResponse` | Generate OG images | [Docs](https://nextjs.org/docs/app/api-reference/functions/image-response) |

## Common Examples

### Navigation

Use `next/link` for internal navigation instead of `<a>` tags.

```tsx
// Bad: Plain anchor tag
<a href="/about">About</a>

// Good: Next.js Link
import Link from 'next/link'

<Link href="/about">About</Link>
````

Active link styling:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link href={href} className={pathname === href ? "active" : ""}>
      {children}
    </Link>
  );
}
```

### Static Generation

```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
```

### After Response

```tsx
import { after } from "next/server";

export async function POST(request: Request) {
  const data = await processRequest(request);

  after(async () => {
    await logAnalytics(data);
  });

  return Response.json({ success: true });
}
```

````

## File: `docs/resources/nextjs/hydration-error.md`

```md
# Hydration Errors

Diagnose and fix React hydration mismatch errors.

## Error Signs

- "Hydration failed because the initial UI does not match"
- "Text content does not match server-rendered HTML"

## Debugging

In development, click the hydration error to see the server/client diff.

## Common Causes and Fixes

### Browser-only APIs

```tsx
// Bad: Causes mismatch - window doesn't exist on server
<div>{window.innerWidth}</div>

// Good: Use client component with mounted check
'use client'
import { useState, useEffect } from 'react'

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? children : null
}
````

### Date/Time Rendering

Server and client may be in different timezones:

```tsx
// Bad: Causes mismatch
<span>{new Date().toLocaleString()}</span>;

// Good: Render on client only
("use client");
const [time, setTime] = useState<string>();
useEffect(() => setTime(new Date().toLocaleString()), []);
```

### Random Values or IDs

```tsx
// Bad: Random values differ between server and client
<div id={Math.random().toString()}>

// Good: Use useId hook
import { useId } from 'react'

function Input() {
  const id = useId()
  return <input id={id} />
}
```

### Invalid HTML Nesting

```tsx
// Bad: Invalid - div inside p
<p><div>Content</div></p>

// Bad: Invalid - p inside p
<p><p>Nested</p></p>

// Good: Valid nesting
<div><p>Content</p></div>
```

### Third-party Scripts

Scripts that modify DOM during hydration.

```tsx
// Good: Use next/script with afterInteractive
import Script from "next/script";

export default function Page() {
  return <Script src="https://example.com/script.js" strategy="afterInteractive" />;
}
```

````

## File: `docs/resources/nextjs/image.md`

```md
# Image Optimization

Use `next/image` for automatic image optimization.

## Always Use next/image

```tsx
// Bad: Avoid native img
<img src="/hero.png" alt="Hero" />

// Good: Use next/image
import Image from 'next/image'
<Image src="/hero.png" alt="Hero" width={800} height={400} />
````

## Required Props

Images need explicit dimensions to prevent layout shift:

```tsx
// Local images - dimensions inferred automatically
import heroImage from './hero.png'
<Image src={heroImage} alt="Hero" />

// Remote images - must specify width/height
<Image src="https://example.com/image.jpg" alt="Hero" width={800} height={400} />

// Or use fill for parent-relative sizing
<div style={{ position: 'relative', width: '100%', height: 400 }}>
  <Image src="/hero.png" alt="Hero" fill style={{ objectFit: 'cover' }} />
</div>
```

## Remote Images Configuration

Remote domains must be configured in `next.config.js`:

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "*.cdn.com", // Wildcard subdomain
      },
    ],
  },
};
```

## Responsive Images

Use `sizes` to tell the browser which size to download:

```tsx
// Full-width hero
<Image
  src="/hero.png"
  alt="Hero"
  fill
  sizes="100vw"
/>

// Responsive grid (3 columns on desktop, 1 on mobile)
<Image
  src="/card.png"
  alt="Card"
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
/>

// Fixed sidebar image
<Image
  src="/avatar.png"
  alt="Avatar"
  width={200}
  height={200}
  sizes="200px"
/>
```

## Blur Placeholder

Prevent layout shift with placeholders:

```tsx
// Local images - automatic blur hash
import heroImage from './hero.png'
<Image src={heroImage} alt="Hero" placeholder="blur" />

// Remote images - provide blurDataURL
<Image
  src="https://example.com/image.jpg"
  alt="Hero"
  width={800}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>

// Or use color placeholder
<Image
  src="https://example.com/image.jpg"
  alt="Hero"
  width={800}
  height={400}
  placeholder="empty"
  style={{ backgroundColor: '#e0e0e0' }}
/>
```

## Priority Loading

Use `priority` for above-the-fold images (LCP):

```tsx
// Hero image - loads immediately
<Image src="/hero.png" alt="Hero" fill priority />

// Below-fold images - lazy loaded by default (no priority needed)
<Image src="/card.png" alt="Card" width={400} height={300} />
```

## Common Mistakes

```tsx
// Bad: Missing sizes with fill - downloads largest image
<Image src="/hero.png" alt="Hero" fill />

// Good: Add sizes for proper responsive behavior
<Image src="/hero.png" alt="Hero" fill sizes="100vw" />

// Bad: Using width/height for aspect ratio only
<Image src="/hero.png" alt="Hero" width={16} height={9} />

// Good: Use actual display dimensions or fill with sizes
<Image src="/hero.png" alt="Hero" fill sizes="100vw" style={{ objectFit: 'cover' }} />

// Bad: Remote image without config
<Image src="https://untrusted.com/image.jpg" alt="Image" width={400} height={300} />
// Error: Invalid src prop, hostname not configured

// Good: Add hostname to next.config.js remotePatterns
```

## Static Export

When using `output: 'export'`, use `unoptimized` or custom loader:

```tsx
// Option 1: Disable optimization
<Image src="/hero.png" alt="Hero" width={800} height={400} unoptimized />;

// Option 2: Global config
// next.config.js
module.exports = {
  output: "export",
  images: { unoptimized: true },
};

// Option 3: Custom loader (Cloudinary, Imgix, etc.)
const cloudinaryLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/demo/image/upload/w_${width},q_${quality || 75}/${src}`;
};

<Image loader={cloudinaryLoader} src="sample.jpg" alt="Sample" width={800} height={400} />;
```

````

## File: `docs/resources/nextjs/metadata.md`

```md
# Metadata

Add SEO metadata to Next.js pages using the Metadata API.

## Important: Server Components Only

The `metadata` object and `generateMetadata` function are **only supported in Server Components**. They cannot be used in Client Components.

If the target page has `'use client'`:
1. Remove `'use client'` if possible, move client logic to child components
2. Or extract metadata to a parent Server Component layout
3. Or split the file: Server Component with metadata imports Client Components

## Static Metadata

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for search engines',
}
````

## Dynamic Metadata

```tsx
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.description };
}
```

## Avoid Duplicate Fetches

Use React `cache()` when the same data is needed for both metadata and page:

```tsx
import { cache } from "react";

export const getPost = cache(async (slug: string) => {
  return await db.posts.findFirst({ where: { slug } });
});
```

## Viewport

Separate from metadata for streaming support:

```tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

// Or dynamic
export function generateViewport({ params }): Viewport {
  return { themeColor: getThemeColor(params) };
}
```

## Title Templates

In root layout for consistent naming:

```tsx
export const metadata: Metadata = {
  title: { default: "Site Name", template: "%s | Site Name" },
};
```

## Metadata File Conventions

Reference: https://nextjs.org/docs/app/getting-started/project-structure#metadata-file-conventions

Place these files in `app/` directory (or route segments):

| File                            | Purpose                                       |
| ------------------------------- | --------------------------------------------- |
| `favicon.ico`                   | Favicon                                       |
| `icon.png` / `icon.svg`         | App icon                                      |
| `apple-icon.png`                | Apple app icon                                |
| `opengraph-image.png`           | OG image                                      |
| `twitter-image.png`             | Twitter card image                            |
| `sitemap.ts` / `sitemap.xml`    | Sitemap (use `generateSitemaps` for multiple) |
| `robots.ts` / `robots.txt`      | Robots directives                             |
| `manifest.ts` / `manifest.json` | Web app manifest                              |

## SEO Best Practice: Static Files Are Often Enough

For most sites, **static metadata files provide excellent SEO coverage**:

```
app/
├── favicon.ico
├── opengraph-image.png     # Works for both OG and Twitter
├── sitemap.ts
├── robots.ts
└── layout.tsx              # With title/description metadata
```

**Tips:**

- A single `opengraph-image.png` covers both Open Graph and Twitter (Twitter falls back to OG)
- Static `title` and `description` in layout metadata is sufficient for most pages
- Only use dynamic `generateMetadata` when content varies per page

---

# OG Image Generation

Generate dynamic Open Graph images using `next/og`.

## Important Rules

1. **Use `next/og`** - not `@vercel/og` (it's built into Next.js)
2. **No searchParams** - OG images can't access search params, use route params instead
3. **Avoid Edge runtime** - Use default Node.js runtime

```tsx
// Good
import { ImageResponse } from "next/og";

// Bad
// import { ImageResponse } from '@vercel/og'
// export const runtime = 'edge'
```

## Basic OG Image

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt = "Site Name";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hello World
    </div>,
    { ...size },
  );
}
```

## Dynamic OG Image

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #1a1a1a, #333)",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold" }}>{post.title}</div>
      <div style={{ marginTop: 24, opacity: 0.8 }}>{post.description}</div>
    </div>,
    { ...size },
  );
}
```

## Custom Fonts

```tsx
import { ImageResponse } from "next/og";
import { join } from "path";
import { readFile } from "fs/promises";

export default async function Image() {
  const fontPath = join(process.cwd(), "assets/fonts/Inter-Bold.ttf");
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    <div style={{ fontFamily: "Inter", fontSize: 64 }}>Custom Font Text</div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Inter", data: fontData, style: "normal" }],
    },
  );
}
```

## File Naming

- `opengraph-image.tsx` - Open Graph (Facebook, LinkedIn)
- `twitter-image.tsx` - Twitter/X cards (optional, falls back to OG)

## Styling Notes

ImageResponse uses Flexbox layout:

- Use `display: 'flex'`
- No CSS Grid support
- Styles must be inline objects

## Multiple OG Images

Use `generateImageMetadata` for multiple images per route:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export async function generateImageMetadata({ params }) {
  const images = await getPostImages(params.slug);
  return images.map((img, idx) => ({
    id: idx,
    alt: img.alt,
    size: { width: 1200, height: 630 },
    contentType: "image/png",
  }));
}

export default async function Image({ params, id }) {
  const images = await getPostImages(params.slug);
  const image = images[id];
  return new ImageResponse(/* ... */);
}
```

## Multiple Sitemaps

Use `generateSitemaps` for large sites:

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";

export async function generateSitemaps() {
  // Return array of sitemap IDs
  return [{ id: 0 }, { id: 1 }, { id: 2 }];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const start = id * 50000;
  const end = start + 50000;
  const products = await getProducts(start, end);

  return products.map((product) => ({
    url: `https://example.com/product/${product.id}`,
    lastModified: product.updatedAt,
  }));
}
```

Generates `/sitemap/0.xml`, `/sitemap/1.xml`, etc.

````

## File: `docs/resources/nextjs/parallel-routes.md`

```md
# Parallel & Intercepting Routes

Parallel routes render multiple pages in the same layout. Intercepting routes show a different UI when navigating from within your app vs direct URL access. Together they enable modal patterns.

## File Structure

````

app/
├── @modal/ # Parallel route slot
│ ├── default.tsx # Required! Returns null
│ ├── (.)photos/ # Intercepts /photos/\*
│ │ └── [id]/
│ │ └── page.tsx # Modal content
│ └── [...]catchall/ # Optional: catch unmatched
│ └── page.tsx
├── photos/
│ └── [id]/
│ └── page.tsx # Full page (direct access)
├── layout.tsx # Renders both children and @modal
└── page.tsx

````

## Step 1: Root Layout with Slot

```tsx
// app/layout.tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
````

## Step 2: Default File (Critical!)

**Every parallel route slot MUST have a `default.tsx`** to prevent 404s on hard navigation.

```tsx
// app/@modal/default.tsx
export default function Default() {
  return null;
}
```

Without this file, refreshing any page will 404 because Next.js can't determine what to render in the `@modal` slot.

## Step 3: Intercepting Route (Modal)

The `(.)` prefix intercepts routes at the same level.

```tsx
// app/@modal/(.)photos/[id]/page.tsx
import { Modal } from "@/components/modal";

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = await getPhoto(id);

  return (
    <Modal>
      <img src={photo.url} alt={photo.title} />
    </Modal>
  );
}
```

## Step 4: Full Page (Direct Access)

```tsx
// app/photos/[id]/page.tsx
export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const photo = await getPhoto(id);

  return (
    <div className="full-page">
      <img src={photo.url} alt={photo.title} />
      <h1>{photo.title}</h1>
    </div>
  );
}
```

## Step 5: Modal Component with Correct Closing

**Critical: Use `router.back()` to close modals, NOT `router.push()` or `<Link>`.**

```tsx
// components/modal.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        router.back(); // Correct
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  // Close on overlay click
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        router.back(); // Correct
      }
    },
    [router],
  );

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <button
          onClick={() => router.back()} // Correct!
          className="absolute top-4 right-4"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
```

### Why NOT `router.push('/')` or `<Link href="/">`?

Using `push` or `Link` to "close" a modal:

1. Adds a new history entry (back button shows modal again)
2. Doesn't properly clear the intercepted route
3. Can cause the modal to flash or persist unexpectedly

`router.back()` correctly:

1. Removes the intercepted route from history
2. Returns to the previous page
3. Properly unmounts the modal

## Route Matcher Reference

Matchers match **route segments**, not filesystem paths:

| Matcher    | Matches       | Example                                                               |
| ---------- | ------------- | --------------------------------------------------------------------- |
| `(.)`      | Same level    | `@modal/(.)photos` intercepts `/photos`                               |
| `(..)`     | One level up  | `@modal/(..)settings` from `/dashboard/@modal` intercepts `/settings` |
| `(..)(..)` | Two levels up | Rarely used                                                           |
| `(...)`    | From root     | `@modal/(...)photos` intercepts `/photos` from anywhere               |

**Common mistake**: Thinking `(..)` means "parent folder" - it means "parent route segment".

## Handling Hard Navigation

When users directly visit `/photos/123` (bookmark, refresh, shared link):

- The intercepting route is bypassed
- The full `photos/[id]/page.tsx` renders
- Modal doesn't appear (expected behavior)

If you want the modal to appear on direct access too, you need additional logic:

```tsx
// app/photos/[id]/page.tsx
import { Modal } from "@/components/modal";

export default async function PhotoPage({ params }) {
  const { id } = await params;
  const photo = await getPhoto(id);

  // Option: Render as modal on direct access too
  return (
    <Modal>
      <img src={photo.url} alt={photo.title} />
    </Modal>
  );
}
```

## Common Gotchas

### 1. Missing `default.tsx` → 404 on Refresh

Every `@slot` folder needs a `default.tsx` that returns `null` (or appropriate content).

### 2. Modal Persists After Navigation

You're using `router.push()` instead of `router.back()`.

### 3. Nested Parallel Routes Need Defaults Too

If you have `@modal` inside a route group, each level needs its own `default.tsx`:

```
app/
├── (marketing)/
│   ├── @modal/
│   │   └── default.tsx     # Needed!
│   └── layout.tsx
└── layout.tsx
```

### 4. Intercepted Route Shows Wrong Content

Check your matcher:

- `(.)photos` intercepts `/photos` from the same route level
- If your `@modal` is in `app/dashboard/@modal`, use `(.)photos` to intercept `/dashboard/photos`, not `/photos`

### 5. TypeScript Errors with `params`

In Next.js 15+, `params` is a Promise:

```tsx
// Correct
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

## Complete Example: Photo Gallery Modal

```
app/
├── @modal/
│   ├── default.tsx
│   └── (.)photos/
│       └── [id]/
│           └── page.tsx
├── photos/
│   ├── page.tsx           # Gallery grid
│   └── [id]/
│       └── page.tsx       # Full photo page
├── layout.tsx
└── page.tsx
```

Links in the gallery:

```tsx
// app/photos/page.tsx
import Link from "next/link";

export default async function Gallery() {
  const photos = await getPhotos();

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Link key={photo.id} href={`/photos/${photo.id}`}>
          <img src={photo.thumbnail} alt={photo.title} />
        </Link>
      ))}
    </div>
  );
}
```

Clicking a photo → Modal opens (intercepted)
Direct URL → Full page renders
Refresh while modal open → Full page renders

````

## File: `docs/resources/nextjs/route-handlers.md`

```md
# Route Handlers

Create API endpoints with `route.ts` files.

## Basic Usage

```tsx
// app/api/users/route.ts
export async function GET() {
  const users = await getUsers()
  return Response.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  const user = await createUser(body)
  return Response.json(user, { status: 201 })
}
````

## Supported Methods

`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`

## GET Handler Conflicts with page.tsx

**A `route.ts` and `page.tsx` cannot coexist in the same folder.**

```
app/
├── api/
│   └── users/
│       └── route.ts    # /api/users
└── users/
    ├── page.tsx        # /users (page)
    └── route.ts        # Warning: Conflicts with page.tsx!
```

If you need both a page and an API at the same path, use different paths:

```
app/
├── users/
│   └── page.tsx        # /users (page)
└── api/
    └── users/
        └── route.ts    # /api/users (API)
```

## Environment Behavior

Route handlers run in a **Server Component-like environment**:

- Yes: Can use `async/await`
- Yes: Can access `cookies()`, `headers()`
- Yes: Can use Node.js APIs
- No: Cannot use React hooks
- No: Cannot use React DOM APIs
- No: Cannot use browser APIs

```tsx
// Bad: This won't work - no React DOM in route handlers
import { renderToString } from "react-dom/server";

export async function GET() {
  const html = renderToString(<Component />); // Error!
  return new Response(html);
}
```

## Dynamic Route Handlers

```tsx
// app/api/users/[id]/route.ts
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(user);
}
```

## Request Helpers

```tsx
export async function GET(request: Request) {
  // URL and search params
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  // Headers
  const authHeader = request.headers.get("authorization");

  // Cookies (Next.js helper)
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return Response.json({ query, token });
}
```

## Response Helpers

```tsx
// JSON response
return Response.json({ data });

// With status
return Response.json({ error: "Not found" }, { status: 404 });

// With headers
return Response.json(data, {
  headers: {
    "Cache-Control": "max-age=3600",
  },
});

// Redirect
return Response.redirect(new URL("/login", request.url));

// Stream
return new Response(stream, {
  headers: { "Content-Type": "text/event-stream" },
});
```

## When to Use Route Handlers vs Server Actions

| Use Case                 | Route Handlers | Server Actions |
| ------------------------ | -------------- | -------------- |
| Form submissions         | No             | Yes            |
| Data mutations from UI   | No             | Yes            |
| Third-party webhooks     | Yes            | No             |
| External API consumption | Yes            | No             |
| Public REST API          | Yes            | No             |
| File uploads             | Both work      | Both work      |

**Prefer Server Actions** for mutations triggered from your UI.
**Use Route Handlers** for external integrations and public APIs.

````

## File: `docs/resources/nextjs/rsc-boundaries.md`

```md
# RSC Boundaries

Detect and prevent invalid patterns when crossing Server/Client component boundaries.

## Detection Rules

### 1. Async Client Components Are Invalid

Client components **cannot** be async functions. Only Server Components can be async.

**Detect:** File has `'use client'` AND component is `async function` or returns `Promise`

```tsx
// Bad: async client component
'use client'
export default async function UserProfile() {
  const user = await getUser() // Cannot await in client component
  return <div>{user.name}</div>
}

// Good: Remove async, fetch data in parent server component
// page.tsx (server component - no 'use client')
export default async function Page() {
  const user = await getUser()
  return <UserProfile user={user} />
}

// UserProfile.tsx (client component)
'use client'
export function UserProfile({ user }: { user: User }) {
  return <div>{user.name}</div>
}
````

```tsx
// Bad: async arrow function client component
"use client";
const Dashboard = async () => {
  const data = await fetchDashboard();
  return <div>{data}</div>;
};

// Good: Fetch in server component, pass data down
```

### 2. Non-Serializable Props to Client Components

Props passed from Server → Client must be JSON-serializable.

**Detect:** Server component passes these to a client component:

- Functions (except Server Actions with `'use server'`)
- `Date` objects
- `Map`, `Set`, `WeakMap`, `WeakSet`
- Class instances
- `Symbol` (unless globally registered)
- Circular references

```tsx
// Bad: Function prop
// page.tsx (server)
export default function Page() {
  const handleClick = () => console.log("clicked");
  return <ClientButton onClick={handleClick} />;
}

// Good: Define function inside client component
// ClientButton.tsx
("use client");
export function ClientButton() {
  const handleClick = () => console.log("clicked");
  return <button onClick={handleClick}>Click</button>;
}
```

```tsx
// Bad: Date object (silently becomes string, then crashes)
// page.tsx (server)
export default async function Page() {
  const post = await getPost();
  return <PostCard createdAt={post.createdAt} />; // Date object
}

// PostCard.tsx (client) - will crash on .getFullYear()
("use client");
export function PostCard({ createdAt }: { createdAt: Date }) {
  return <span>{createdAt.getFullYear()}</span>; // Runtime error!
}

// Good: Serialize to string on server
// page.tsx (server)
export default async function Page() {
  const post = await getPost();
  return <PostCard createdAt={post.createdAt.toISOString()} />;
}

// PostCard.tsx (client)
("use client");
export function PostCard({ createdAt }: { createdAt: string }) {
  const date = new Date(createdAt);
  return <span>{date.getFullYear()}</span>;
}
```

```tsx
// Bad: Class instance
const user = new UserModel(data)
<ClientProfile user={user} /> // Methods will be stripped

// Good: Pass plain object
const user = await getUser()
<ClientProfile user={{ id: user.id, name: user.name }} />
```

```tsx
// Bad: Map/Set
<ClientComponent items={new Map([['a', 1]])} />

// Good: Convert to array/object
<ClientComponent items={Object.fromEntries(map)} />
<ClientComponent items={Array.from(set)} />
```

### 3. Server Actions Are the Exception

Functions marked with `'use server'` CAN be passed to client components.

```tsx
// Valid: Server Action can be passed
// actions.ts
"use server";
export async function submitForm(formData: FormData) {
  // server-side logic
}

// page.tsx (server)
import { submitForm } from "./actions";
export default function Page() {
  return <ClientForm onSubmit={submitForm} />; // OK!
}

// ClientForm.tsx (client)
("use client");
export function ClientForm({ onSubmit }: { onSubmit: (data: FormData) => Promise<void> }) {
  return <form action={onSubmit}>...</form>;
}
```

## Quick Reference

| Pattern                           | Valid? | Fix                                   |
| --------------------------------- | ------ | ------------------------------------- |
| `'use client'` + `async function` | No     | Fetch in server parent, pass data     |
| Pass `() => {}` to client         | No     | Define in client or use server action |
| Pass `new Date()` to client       | No     | Use `.toISOString()`                  |
| Pass `new Map()` to client        | No     | Convert to object/array               |
| Pass class instance to client     | No     | Pass plain object                     |
| Pass server action to client      | Yes    | -                                     |
| Pass `string/number/boolean`      | Yes    | -                                     |
| Pass plain object/array           | Yes    | -                                     |

````

## File: `docs/resources/nextjs/runtime-selection.md`

```md
# Runtime Selection

## Use Node.js Runtime by Default

Use the default Node.js runtime for new routes and pages. Only use Edge runtime if the project already uses it or there's a specific requirement.

```tsx
// Good: Default - no runtime config needed (uses Node.js)
export default function Page() { ... }

// Caution: Only if already used in project or specifically required
export const runtime = 'edge'
````

## When to Use Each

### Node.js Runtime (Default)

- Full Node.js API support
- File system access (`fs`)
- Full `crypto` support
- Database connections
- Most npm packages work

### Edge Runtime

- Only for specific edge-location latency requirements
- Limited API (no `fs`, limited `crypto`)
- Smaller cold start
- Geographic distribution needs

## Detection

**Before adding `runtime = 'edge'`**, check:

1. Does the project already use Edge runtime?
2. Is there a specific latency requirement?
3. Are all dependencies Edge-compatible?

If unsure, use Node.js runtime.

````

## File: `docs/resources/nextjs/scripts.md`

```md
# Scripts

Loading third-party scripts in Next.js.

## Use next/script

Always use `next/script` instead of native `<script>` tags for better performance.

```tsx
// Bad: Native script tag
<script src="https://example.com/script.js"></script>

// Good: Next.js Script component
import Script from 'next/script'

<Script src="https://example.com/script.js" />
````

## Inline Scripts Need ID

Inline scripts require an `id` attribute for Next.js to track them.

```tsx
// Bad: Missing id
<Script dangerouslySetInnerHTML={{ __html: 'console.log("hi")' }} />

// Good: Has id
<Script id="my-script" dangerouslySetInnerHTML={{ __html: 'console.log("hi")' }} />

// Good: Inline with id
<Script id="show-banner">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
```

## Don't Put Script in Head

`next/script` should not be placed inside `next/head`. It handles its own positioning.

```tsx
// Bad: Script inside Head
import Head from 'next/head'
import Script from 'next/script'

<Head>
  <Script src="/analytics.js" />
</Head>

// Good: Script outside Head
<Head>
  <title>Page</title>
</Head>
<Script src="/analytics.js" />
```

## Loading Strategies

```tsx
// afterInteractive (default) - Load after page is interactive
<Script src="/analytics.js" strategy="afterInteractive" />

// lazyOnload - Load during idle time
<Script src="/widget.js" strategy="lazyOnload" />

// beforeInteractive - Load before page is interactive (use sparingly)
// Only works in app/layout.tsx or pages/_document.js
<Script src="/critical.js" strategy="beforeInteractive" />

// worker - Load in web worker (experimental)
<Script src="/heavy.js" strategy="worker" />
```

## Google Analytics

Use `@next/third-parties` instead of inline GA scripts.

```tsx
// Bad: Inline GA script
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX" />
<Script id="ga-init">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');`}
</Script>

// Good: Next.js component
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXX" />
    </html>
  )
}
```

## Google Tag Manager

```tsx
import { GoogleTagManager } from "@next/third-parties/google";

export default function Layout({ children }) {
  return (
    <html>
      <GoogleTagManager gtmId="GTM-XXXXX" />
      <body>{children}</body>
    </html>
  );
}
```

## Other Third-Party Scripts

```tsx
// YouTube embed
import { YouTubeEmbed } from "@next/third-parties/google";

<YouTubeEmbed videoid="dQw4w9WgXcQ" />;

// Google Maps
import { GoogleMapsEmbed } from "@next/third-parties/google";

<GoogleMapsEmbed apiKey="YOUR_API_KEY" mode="place" q="Brooklyn+Bridge,New+York,NY" />;
```

## Quick Reference

| Pattern                                       | Issue                      | Fix                       |
| --------------------------------------------- | -------------------------- | ------------------------- |
| `<script src="...">`                          | No optimization            | Use `next/script`         |
| `<Script>` without id                         | Can't track inline scripts | Add `id` attribute        |
| `<Script>` inside `<Head>`                    | Wrong placement            | Move outside Head         |
| Inline GA/GTM scripts                         | No optimization            | Use `@next/third-parties` |
| `strategy="beforeInteractive"` outside layout | Won't work                 | Only use in root layout   |

````

## File: `docs/resources/nextjs/self-hosting.md`

```md
# Self-Hosting Next.js

Deploy Next.js outside of Vercel with confidence.

## Quick Start: Standalone Output

For Docker or any containerized deployment, use standalone output:

```js
// next.config.js
module.exports = {
  output: 'standalone',
};
````

This creates a minimal `standalone` folder with only production dependencies:

```
.next/
├── standalone/
│   ├── server.js          # Entry point
│   ├── node_modules/      # Only production deps
│   └── .next/             # Build output
└── static/                # Must be copied separately
```

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

## PM2 Deployment

For traditional server deployments:

```js
// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "nextjs",
      script: ".next/standalone/server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
```

```bash
npm run build
pm2 start ecosystem.config.js
```

## ISR and Cache Handlers

### The Problem

ISR (Incremental Static Regeneration) uses filesystem caching by default. This **breaks with multiple instances**:

- Instance A regenerates page → saves to its local disk
- Instance B serves stale page → doesn't see Instance A's cache
- Load balancer sends users to random instances → inconsistent content

### Solution: Custom Cache Handler

Next.js 14+ supports custom cache handlers for shared storage:

```js
// next.config.js
module.exports = {
  cacheHandler: require.resolve("./cache-handler.js"),
  cacheMaxMemorySize: 0, // Disable in-memory cache
};
```

#### Redis Cache Handler Example

```js
// cache-handler.js
const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL);
const CACHE_PREFIX = "nextjs:";

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    const data = await redis.get(CACHE_PREFIX + key);
    if (!data) return null;

    const parsed = JSON.parse(data);
    return {
      value: parsed.value,
      lastModified: parsed.lastModified,
    };
  }

  async set(key, data, ctx) {
    const cacheData = {
      value: data,
      lastModified: Date.now(),
    };

    // Set TTL based on revalidate option
    if (ctx?.revalidate) {
      await redis.setex(CACHE_PREFIX + key, ctx.revalidate, JSON.stringify(cacheData));
    } else {
      await redis.set(CACHE_PREFIX + key, JSON.stringify(cacheData));
    }
  }

  async revalidateTag(tags) {
    // Implement tag-based invalidation
    // This requires tracking which keys have which tags
  }
};
```

#### S3 Cache Handler Example

```js
// cache-handler.js
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({ region: process.env.AWS_REGION });
const BUCKET = process.env.CACHE_BUCKET;

module.exports = class CacheHandler {
  async get(key) {
    try {
      const response = await s3.send(
        new GetObjectCommand({
          Bucket: BUCKET,
          Key: `cache/${key}`,
        }),
      );
      const body = await response.Body.transformToString();
      return JSON.parse(body);
    } catch (err) {
      if (err.name === "NoSuchKey") return null;
      throw err;
    }
  }

  async set(key, data, ctx) {
    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: `cache/${key}`,
        Body: JSON.stringify({
          value: data,
          lastModified: Date.now(),
        }),
        ContentType: "application/json",
      }),
    );
  }
};
```

## What Works vs What Needs Setup

| Feature              | Single Instance | Multi-Instance      | Notes                       |
| -------------------- | --------------- | ------------------- | --------------------------- |
| SSR                  | Yes             | Yes                 | No special setup            |
| SSG                  | Yes             | Yes                 | Built at deploy time        |
| ISR                  | Yes             | Needs cache handler | Filesystem cache breaks     |
| Image Optimization   | Yes             | Yes                 | CPU-intensive, consider CDN |
| Middleware           | Yes             | Yes                 | Runs on Node.js             |
| Edge Runtime         | Limited         | Limited             | Some features Node-only     |
| `revalidatePath/Tag` | Yes             | Needs cache handler | Must share cache            |
| `next/font`          | Yes             | Yes                 | Fonts bundled at build      |
| Draft Mode           | Yes             | Yes                 | Cookie-based                |

## Image Optimization

Next.js Image Optimization works out of the box but is CPU-intensive.

### Option 1: Built-in (Simple)

Works automatically, but consider:

- Set `deviceSizes` and `imageSizes` in config to limit variants
- Use `minimumCacheTTL` to reduce regeneration

```js
// next.config.js
module.exports = {
  images: {
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
    deviceSizes: [640, 750, 1080, 1920], // Limit sizes
  },
};
```

### Option 2: External Loader (Recommended for Scale)

Offload to Cloudinary, Imgix, or similar:

```js
// next.config.js
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
};
```

```js
// lib/image-loader.js
export default function cloudinaryLoader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/demo/image/upload/${params.join(",")}${src}`;
}
```

## Environment Variables

### Build-time vs Runtime

```js
// Available at build time only (baked into bundle)
NEXT_PUBLIC_API_URL=https://api.example.com

// Available at runtime (server-side only)
DATABASE_URL=postgresql://...
API_SECRET=...
```

### Runtime Configuration

For truly dynamic config, don't use `NEXT_PUBLIC_*`. Instead:

```tsx
// app/api/config/route.ts
export async function GET() {
  return Response.json({
    apiUrl: process.env.API_URL,
    features: process.env.FEATURES?.split(","),
  });
}
```

## OpenNext: Serverless Without Vercel

[OpenNext](https://open-next.js.org/) adapts Next.js for AWS Lambda, Cloudflare Workers, etc.

```bash
npx create-sst@latest
# or
npx @opennextjs/aws build
```

Supports:

- AWS Lambda + CloudFront
- Cloudflare Workers
- Netlify Functions
- Deno Deploy

## Health Check Endpoint

Always include a health check for load balancers:

```tsx
// app/api/health/route.ts
export async function GET() {
  try {
    // Optional: check database connection
    // await db.$queryRaw`SELECT 1`;

    return Response.json({ status: "healthy" }, { status: 200 });
  } catch (error) {
    return Response.json({ status: "unhealthy" }, { status: 503 });
  }
}
```

## Pre-Deployment Checklist

1. **Build locally first**: `npm run build` - catch errors before deploy
2. **Test standalone output**: `node .next/standalone/server.js`
3. **Set `output: 'standalone'`** for Docker
4. **Configure cache handler** for multi-instance ISR
5. **Set `HOSTNAME="0.0.0.0"`** for containers
6. **Copy `public/` and `.next/static/`** - not included in standalone
7. **Add health check endpoint**
8. **Test ISR revalidation** after deployment
9. **Monitor memory usage** - Node.js defaults may need tuning

## Testing Cache Handler

**Critical**: Test your cache handler on every Next.js upgrade:

```bash
# Start multiple instances
PORT=3001 node .next/standalone/server.js &
PORT=3002 node .next/standalone/server.js &

# Trigger ISR revalidation
curl http://localhost:3001/api/revalidate?path=/posts

# Verify both instances see the update
curl http://localhost:3001/posts
curl http://localhost:3002/posts
# Should return identical content
```

````

## File: `docs/resources/nextjs/suspense-boundaries.md`

```md
# Suspense Boundaries

Client hooks that cause CSR bailout without Suspense boundaries.

## useSearchParams

Always requires Suspense boundary in static routes. Without it, the entire page becomes client-side rendered.

```tsx
// Bad: Entire page becomes CSR
'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()
  return <div>Query: {searchParams.get('q')}</div>
}
````

```tsx
// Good: Wrap in Suspense
import { Suspense } from "react";
import SearchBar from "./search-bar";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchBar />
    </Suspense>
  );
}
```

## usePathname

Requires Suspense boundary when route has dynamic parameters.

```tsx
// In dynamic route [slug]
// Bad: No Suspense
"use client";
import { usePathname } from "next/navigation";

export function Breadcrumb() {
  const pathname = usePathname();
  return <nav>{pathname}</nav>;
}
```

```tsx
// Good: Wrap in Suspense
<Suspense fallback={<BreadcrumbSkeleton />}>
  <Breadcrumb />
</Suspense>
```

If you use `generateStaticParams`, Suspense is optional.

## Quick Reference

| Hook                | Suspense Required    |
| ------------------- | -------------------- |
| `useSearchParams()` | Yes                  |
| `usePathname()`     | Yes (dynamic routes) |
| `useParams()`       | No                   |
| `useRouter()`       | No                   |

````

## File: `docs/state.json`

```json
{
  "iteration": 1,
  "max_iterations": 10,
  "status": "synchronized",
  "target": "all",
  "last_command": "/conductor:setup",
  "last_update": "2026-04-03T01:13:00.000Z",
  "strategic_context": {
    "product": "defined",
    "tech_stack": "defined",
    "workflow": "defined"
  },
  "active_tracks": [
    "arch-001",
    "seo_77_province_engine_20260402",
    "auth-001",
    "lead-mgmt-001",
    "showcase-001",
    "ecosystem-glue-001"
  ]
}

````

## File: `docs/test/README.md`

```md
# 🍳 Krapow Ros Mue Mae Docs (`apps/test`)

**Krapow Sauce Business | Storytelling Funnel | Sauce E-Commerce**

เอกสารส่วนนี้ครอบคลุมรายละเอียดการพัฒนาแอปพลิเคชัน "กะเพรารสมือแม่" (Krapow Ros Mue Mae) ซึ่งเป็นธุรกิจขายซอสอเนกประสงค์

## 🎯 ภารกิจ (Mission)

นำเสนอธุรกิจซอสสำเร็จรูปที่เน้นความอบอุ่นและคุณภาพระดับ OEM ด้วยการผสมผสานการเล่าเรื่อง (Storytelling) เข้ากับระบบการขายที่ทันสมัย

## 🎨 มาตรฐานการออกแบบ (Design Standards)

- **Theme:** Warm Glassmorphism / Culinary Tradition
- **Colors (OKLCH):**
  - Background: `oklch(0.97 0.02 85)` (Warm Sand) - สื่อถึงความนุ่มนวล
  - Primary: `oklch(0.45 0.12 140)` (Basil Green) - ความสดใหม่
  - Accent: `oklch(0.55 0.18 35)` (Chili Red) - ความเผ็ดร้อน
- **Mood:** Warmth, Traditional Secret, Professional Professionalism.

## 🏗️ โครงสร้างสำคัญ (Core Components)

- **Story of Mae:** เล่าเรื่องสูตรลับก้นครัวและการเลือกวัตถุดิบ
- **Inventory Management:** ระบบจัดการสต็อกสินค้าที่เชื่อมโยงกับฐานข้อมูลส่วนกลาง
- **D2C Sales Funnel:** ระบบการขายตรงสู่ผู้บริโภคพร้อมระบบสะสมแต้ม

---

_Maintained by Krapow Ros Mue Mae Culinary Strategy_
```

## File: `docs/unlink-th/DESIGN.md`

```md
# 🏛️ UNLINK THAILAND: Institutional Design System (v1.0.0)

เอกสารนี้กำหนดมาตรฐานการออกแบบสำหรับ **UNLINK THAILAND** เพื่อสร้างภาพลักษณ์สถาบันตรวจสอบความน่าเชื่อถือระดับสากล

---

## 🎨 1. Color Palette (Institutional OKLCH)

ห้ามใช้สีสันฉูดฉาด เน้นความสุขุมและอำนาจ:

- **Core Trust:** `oklch(0.546 0.245 262.881)` - Trust Blue (ใช้สำหรับ Verified Signals)
- **Base Void:** `oklch(0.05 0 0)` - Deep Space Black (พื้นหลังหลัก)
- **Surface:** `oklch(0.12 0.01 262.881)` - Layered Gray (พื้นผิวคอมโพเนนต์)
- **Warning/Critical:** `oklch(0.55 0.22 25)` - Warning Amber (ใช้เฉพาะจุดที่มีความเสี่ยง)

## ✍️ 2. Typography

- **Headings:** `Geist Sans` (Black/Bold) - Tracking `-0.05em` สำหรับความแน่นและทรงพลัง
- **Technical Data:** `Geist Mono` - สำหรับ Site IDs, Wallet Addresses, Hash Codes
- **Labels:** Uppercase, Tracking `0.3em`, Weight `Black` - เพื่อความรู้สึกแบบ Military/Institutional Grade

## 🧱 3. Visual Components

### 🛡️ The Verification Box (Core UI)

- ต้องเป็นจุดศูนย์กลางของหน้า (Optical Center)
- ใช้ Heavy Backdrop Blur (`64px+`) และเส้นขอบแบบ Subtle Gradient
- มีสถานะ "Scanning" หรือ "Verifying" ที่ดูสมจริง

### 💎 Glassmorphism 2.0 (Institutional Grade)

- ห้ามใช้กระจกใสเกินไป (Opacity < 0.05)
- เน้นการใช้ `border-white/5` และ `shadow-2xl` เพื่อสร้างมิติของเลเยอร์ที่ซ้อนทับกัน

## 🎞️ 4. Cinematic Effects

- **Atmospheric Fog:** ใช้ Gradient วงกลมขนาดใหญ่ที่ขอบหน้าจอเพื่อสร้างความลึก
- **Scanning Beam:** แสงกวาดผ่านหน้าจอแบบสุ่มเพื่อสื่อถึงระบบที่ทำงานตลอดเวลา (Active Monitoring)

---

_Authorized by UNLINK THAILAND Global Registry_
```

## File: `docs/unlink-th/README.md`

```md
# 🛡️ UNLINK Thailand Docs (`apps/unlink-th`)

**Institutional Core | Trust Verification | Security Infrastructure**

เอกสารส่วนนี้ครอบคลุมรายละเอียดการพัฒนาแอปพลิเคชัน UNLINK Thailand ซึ่งทำหน้าที่เป็นระบบตรวจสอบความน่าเชื่อถือและความปลอดภัย

## 🎯 ภารกิจ (Mission)

ทำหน้าที่เป็น "Trusted Source" ในการตรวจสอบความปลอดภัยทางดิจิทัล รายงานความเสี่ยง และยืนยันตัวตนอัตลักษณ์ดิจิทัล

## 🎨 มาตรฐานการออกแบบ (Design Standards)

- **Theme:** Cinematic Dark / Institutional Core
- **Colors (OKLCH):**
  - Primary: `oklch(0.546 0.245 262.881)` (Trust Blue)
  - Background: `oklch(0.05 0 0)` (Void Black)
  - Surface: `oklch(0.08 0 0)` (Deep Gray)
- **Mood:** Institutional Authority, Professional Trust, High-end Craftsmanship.

## 🏗️ โครงสร้างสำคัญ (Core Components)

- **Verification Portal:** ระบบตรวจสอบ Site ID แบบ Real-time
- **Audit Reports:** แสดงผล Trust Score และคะแนนประสิทธิภาพ
- **Monorepo Chaos Simulator (Auditor):** ระบบหลังบ้านที่คอยตรวจสอบ Monorepo Integrity

---

_Enforced by UNLINK Thailand Architecture Standards_
```

## File: `docs/web/README.md`

```md
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
```

## File: `packages/core/src/types/index.ts`

```ts
/* @identity 9mza */

/**
 * [SYSTEM CORE]: GLOBAL_TYPE_DEFINITIONS v19.1.0 (IDENTITY_HUB_READY)
 * [STRATEGY]: Strict Type Contract | E-E-A-T Knowledge Graph | UNLINK Ecosystem Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode } from "react";

// =========================================
// [00] GLOBAL AUGMENTATION
// =========================================

declare global {
  interface Window {
    /** [MARKETING]: Google Tag Manager Data Layer */
    dataLayer: unknown[];
  }
}

// =========================================
// [01] INFRASTRUCTURE & ADAPTERS
// =========================================

/** [NEXTJS_PROTOCOL]: Supporting Next.js 15/16 Async Parameters */
export interface PageProps<T = Record<string, string>> {
  readonly params: Promise<T>;
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export interface LayoutProps {
  readonly children: ReactNode;
}

/** [ICON_SYSTEM]: Registry of Validated Lucide Icons */
export type IconName =
  | "Menu"
  | "X"
  | "Check"
  | "CheckCircle"
  | "CheckCircle2"
  | "Star"
  | "ChevronRight"
  | "ChevronDown"
  | "ArrowRight"
  | "ArrowUpRight"
  | "Search"
  | "SearchX"
  | "Zap"
  | "Target"
  | "Layers"
  | "Shield"
  | "ShieldCheck"
  | "Newspaper"
  | "Building2"
  | "FileText"
  | "FileDown"
  | "MousePointerClick"
  | "Smartphone"
  | "Globe"
  | "TrendingUp"
  | "Award"
  | "MapPin"
  | "Activity"
  | "UserCheck"
  | "Quote"
  | "Settings"
  | "Disc"
  | "Wifi"
  | "Code2"
  | "Network"
  | "User"
  | "Camera"
  | "CloudSun"
  | "Wind"
  | "Droplets"
  | "Eye"
  | "Cloud"
  | "AlertCircle"
  | "Sparkles"
  | "Database"
  | "Map"
  | "CalendarCheck"
  | "Lock"
  | "Phone"
  | "MessageCircle"
  | (string & {});

export type TemplateSlug =
  | "corporate"
  | "salepage"
  | "local"
  | "local-authority"
  | "catalog"
  | "bio"
  | "hotelresort"
  | "seo-agency"
  | (string & {});

export type ServiceCategory =
  | "landing"
  | "business"
  | "ecommerce"
  | "personal"
  | "area"
  | "authority"
  | "governance";

// =========================================
// [02] THEME & SITE CONFIGURATION
// =========================================

export interface ThemeConfig {
  readonly primary: string;
  readonly background: string;
  readonly mode: "light" | "dark" | "system";
  readonly foreground: string;
  readonly secondary?: string;
  readonly accent?: string;
  readonly gradient?: string;
  readonly token?: string;
  readonly radius?: string;
  readonly fontFamily?: string;
  readonly borderWidth?: string;
}

export interface SiteConfig {
  /** [IDENTITY]: Core Expert Information (E-E-A-T) */
  readonly expert: {
    readonly displayName: string;
    readonly alternateName?: string;
    readonly strategicAlias?: string;
    readonly legalNameThai: string;
    readonly legalNameEnglish: string;
    readonly role: string;
    readonly jobTitle: string;
    readonly signature: string;
    readonly avatar: string;
    readonly email: string;
    readonly bio: string;
    readonly bioUrl?: string;
    readonly googleMerchantId?: string;
    readonly twitterHandle?: string;
    readonly linkedinUrl?: string;
    readonly sameAs?: readonly string[];
    readonly skills?: {
      readonly technical: readonly string[];
      readonly seo: readonly string[];
      readonly governance: readonly string[];
    };
  };

  /** [BRANDING]: Institutional Visuals & Identity */
  readonly brand: {
    readonly name: string;
    readonly fullName: string;
    readonly legalName?: string;
    readonly siteUrl: string;
    readonly logo?: string;
    readonly ogImage?: string;
    readonly established: string;
    readonly foundingDate?: string;
    readonly industry: string;
    readonly taxId?: string;
    readonly isoCertified?: string;
    readonly location: string;
    readonly themeColor: string;
    readonly locale: string;
    readonly description: string;
    readonly areaServed?: readonly string[];
  };

  /** [MARKETING]: Strategic Messaging */
  readonly hero: {
    readonly title: string;
    readonly tagline?: string;
    readonly description: string;
    readonly primaryAction: string;
    readonly secondaryAction?: string;
  };

  /** [PERSONA]: AI & Communication Strategy */
  readonly persona: {
    readonly tone: string;
    readonly communicationStyle: string;
    readonly antiConnotation: string;
  };

  /** [SEO]: Authority Keywords */
  readonly keywords: readonly string[];

  /** [LOGISTICS]: Contact & Support */
  readonly contact: {
    readonly email: string;
    readonly phone: string;
    readonly displayPhone: string;
    readonly address: string;
    readonly streetAddress: string;
    readonly postalCode: string;
    readonly workHours: string;
    readonly mapUrl?: string;
  };

  /** [PARAMETERS]: Business Metadata */
  readonly business: {
    readonly location: string;
    readonly region: string;
    readonly industry?: string;
    readonly roiFocus: boolean;
    readonly established?: string;
    readonly status: string;
    readonly priceRange: string;
    readonly ids: {
      readonly businessProfileId?: string;
      readonly storeCode?: string;
      readonly [key: string]: string | undefined;
    };
  };

  /** [TECHNICAL]: Compliance & Tracking */
  readonly analytics?: {
    readonly gaId?: string;
    readonly pixelId?: string;
  };
  readonly verification: {
    readonly google: string;
    readonly facebook?: string;
  };

  /** [ECOSYSTEM]: UNLINK-GLOBAL Integration */
  readonly ecosystem?: {
    readonly masterHub: string;
    readonly commercialUrl?: string;
    readonly identityUrl?: string;
    readonly [key: string]: string | undefined;
  };

  /** [LINK_REGISTRY]: Authoritative Social Connections */
  readonly links: {
    readonly site: string;
    readonly me: string;
    readonly unlink: string;
    readonly line: string;
    readonly lineId: string;
    readonly messenger: string;
    readonly facebook: string;
    readonly github: string;
    readonly linkedin: string;
    readonly twitter?: string;
    readonly youtube?: string;
    readonly googleMaps?: string;
    readonly googleReview?: string;
    readonly [key: string]: string | undefined;
  };
}

// =========================================
// [03] DATA MODELS (CMS & REGISTRY)
// =========================================

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}

export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface CatalogItem {
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly price?: string;
  readonly unit?: string;
  readonly image?: string;
  readonly url?: string;
  readonly technicalID?: string;
}

/** [E-E-A-T]: Author Identity for Expertise Verification */
export interface Author {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly bio?: string;
}

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
  readonly excerpt: string;
  readonly description?: string;
  readonly coverImage: string;
  readonly thumbnail?: string;
  readonly category: string;
  readonly tags?: readonly string[];
  readonly readingTime?: string;
  readonly content?: string;
  readonly author?: Author;
}

export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly client: string;
  readonly result: string;
  readonly results?: readonly string[];
  readonly description?: string;
  readonly date?: string;
  readonly image: string;
  readonly thumbnail?: string;
  readonly content?: string;
  readonly author?: Author;
}

export interface ImageBlurMetadata {
  readonly blurDataURL: string;
  readonly width: number;
  readonly height: number;
}
export type ImageBlurRegistry = Record<string, ImageBlurMetadata>;

// =========================================
// [04] CONTEXT & UNIVERSAL TEMPLATES
// =========================================

export interface LocalContext {
  readonly marketInsight: string;
  /** [NEW]: Unique characteristics or slogan of the province (e.g., "เมืองรถม้า", "ไข่มุกแห่งอันดามัน") */
  readonly localIdentity?: string;
  /** [NEW]: Personal observation from "นายเอ็มซ่ามากส์" about the local digital landscape */
  readonly expertObservation?: string;
  /** [NEW]: Specific business culture or behavior in this province */
  readonly localBusinessCulture?: string;
  readonly technicalApproach: string;
  readonly localStrength: string;
  readonly nicheIndustries: readonly string[];
  readonly painPoints: readonly string[];
  readonly competitorLevel: "low" | "medium" | "high" | "extreme";
  readonly marketSaturation?: number; // 0-100 percentage
  readonly isTourismHeavy?: boolean;
  readonly socialProof?: {
    readonly rating: number;
    readonly reviewCount: number;
    readonly localClient?: string;
  };
  readonly regionalPricing?: {
    readonly startPrice: string;
    readonly timeline: string;
  };
  readonly localSuccessStory?: {
    readonly title: string;
    readonly result: string;
  };
  readonly hyperLocalKeywords?: readonly string[];
  readonly promotions?: readonly {
    readonly title: string;
    readonly description?: string;
    readonly discount?: string;
    readonly expiry?: string;
  }[];
  readonly regionalVisuals?: {
    readonly banner?: string;
    readonly gallery?: readonly string[];
  };
}

export interface BioProject {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly link?: string;
  readonly thumbnail?: string;
}

/** [STRICT]: มาตรฐานปุ่มกดและการนำทางทั่วทั้งระบบ */
export interface TemplateAction {
  readonly label: string;
  readonly href: string;
  readonly icon?: IconName;
  readonly variant?: "default" | "outline" | "ghost" | "link" | "brand";
}

/**
 * [STRATEGIC]: Bridge Interface สำหรับ Data Normalization
 * ทำหน้าที่รวม Master Data และ Area Nodes ให้เป็นก้อนเดียวที่ TemplateRenderer เข้าใจ
 */
export interface UniversalTemplateProps {
  readonly id: string;
  readonly tier: number; // [NEW]: ลำดับความสำคัญของพื้นที่
  readonly templateSlug: TemplateSlug;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly theme: ThemeConfig;
  readonly price: string;
  readonly priceValue: number;
  readonly currency: string;
  readonly unit: string;
  readonly priority: number;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly items?: readonly CatalogItem[];
  readonly clientTrust?: string;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly featuredProjects?: readonly BioProject[];
  readonly localContext?: LocalContext;
  readonly province?: string;
  readonly districts?: readonly string[];
  readonly coordinates?: { readonly lat: number; readonly lng: number };
  readonly aiSignal?: {
    readonly summary: string;
    readonly topBenefits: readonly string[];
    readonly expertRef: string;
    readonly expertNote?: string;
  };
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];
  readonly regionalVisuals?: LocalContext["regionalVisuals"];
  readonly promotions?: LocalContext["promotions"];
  readonly marketSaturation?: number;
  readonly isTourismHeavy?: boolean;
  readonly regionalLatency?: number;
  readonly layoutOrder?: string[]; // [PATCH]: Supports custom section ordering
  readonly regionalRoadmap?: readonly {
    readonly step: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly primaryAction: TemplateAction;
  readonly secondaryAction?: TemplateAction;

  // --- Internal Linking & P-SEO Hub ---
  /** [NEW]: ลิงก์กลับไปยังหน้าบริการหลัก (สำหรับหน้าจังหวัด) */
  readonly masterServiceUrl?: string;
  /** [NEW]: รายชื่อพื้นที่ที่ให้บริการ (สำหรับหน้าบริการหลัก) */
  readonly servingAreas?: readonly string[];
}

export interface BaseTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

// =========================================
// [05] REGISTRY SCHEMAS (CROSS-LINKED)
// =========================================

export interface TemplateMasterData {
  readonly id: string;
  readonly slug?: string;
  readonly title: string;
  readonly description: string;
  readonly templateSlug: TemplateSlug;
  readonly priority: number;
  readonly image?: string;
  readonly category: ServiceCategory;
  readonly priceValue: number;
  readonly price: string;
  readonly currency: string;
  readonly unit: string;
  readonly theme: ThemeConfig;
  readonly benefits: readonly string[];
  readonly coreFeatures: readonly ServiceFeature[];
  readonly faqs: readonly ServiceFaq[];
  readonly keywords: readonly string[];
  readonly primaryAction?: TemplateAction;
  readonly secondaryAction?: TemplateAction;
  readonly isPopular?: boolean;
  readonly isFeatured?: boolean;
  readonly clientTrust?: string;
  readonly socialProof?: {
    readonly rating: number;
    readonly reviewCount: number;
    readonly localClient?: string;
  };
  readonly items?: readonly CatalogItem[];
  readonly activeAreas?: readonly string[];
  readonly expert?: {
    readonly displayName: string;
    readonly jobTitle: string;
    readonly avatar: string;
  };
}

export interface AreaNode {
  readonly id?: string;
  readonly tier?: number; // [NEW]: ลำดับความสำคัญ (1 = Major City, 2 = Province)
  readonly slug: string;
  readonly province: string;
  readonly name_th: string; // [FACTORY]: Enforced Thai Name
  readonly name_en: string; // [FACTORY]: Enforced English Name
  readonly title: string;
  readonly description: string;
  readonly templateSlug: TemplateSlug;
  readonly priority: number;
  readonly region: "North" | "Northeast" | "Central" | "East" | "South" | "West";
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly longDescription?: string;
  readonly districts: readonly string[];
  readonly keywords: readonly string[];
  readonly heroImage: string;
  readonly coordinates: { readonly lat: number; readonly lng: number };
  readonly localContext: LocalContext;
  readonly theme?: Partial<ThemeConfig> | ThemeConfig;
  readonly regionalVisuals?: LocalContext["regionalVisuals"];
  readonly socialProof?: LocalContext["socialProof"];
  readonly regionalPricing?: LocalContext["regionalPricing"];
  readonly localSuccessStory?: LocalContext["localSuccessStory"];
  readonly promotions?: LocalContext["promotions"];
  readonly marketSaturation?: number;
  readonly isTourismHeavy?: boolean;
  readonly regionalLatency?: number;
  readonly layoutOrder?: string[]; // [PATCH]: Custom section ordering per node
  readonly regionalRoadmap?: readonly {
    readonly step: string;
    readonly title: string;
    readonly description: string;
  }[];
  readonly price?: string;
  readonly priceValue?: number;
  readonly currency?: string;
  readonly unit?: string;
  readonly clientTrust?: string;
  readonly benefits?: readonly string[];
  readonly coreFeatures?: readonly ServiceFeature[];
  readonly faqs?: readonly ServiceFaq[];
}
```

## File: `packages/core/src/types/templates.ts`

```ts
/**
 * [TEMPLATE ARCHITECTURE]: MASTER_TEMPLATE_BLUEPRINT v20.1.0
 * [STRATEGY]: Schema-Driven UI | High-Performance Hydration | Zero-CLS Strategy
 */

import { ProfessionalService, Product } from "schema-dts";

export type TemplateTheme = "dark" | "light" | "glass" | "neon" | "minimal";

export interface TemplateStyleConfig {
  theme: TemplateTheme;
  primaryColor?: string;
  accentColor?: string;
  fontFamily?: string;
  borderRadius?: "none" | "sm" | "md" | "lg" | "full";
  glassIntensity?: number;
}

export interface PremiumFeature {
  id: string;
  type: "dashboard" | "calculator" | "terminal" | "map" | "timeline";
  title: string;
  config: Record<string, unknown>;
}

export interface TemplateMasterData {
  id: string;
  templateSlug: string;
  title: string;
  description: string;
  image?: string;
  priceValue?: number | string;
  unit?: string;
  features: PremiumFeature[];
  schema?: ProfessionalService | Product;
  style?: TemplateStyleConfig;
  socialProof?: {
    rating: number;
    reviewCount: number;
    clients: string[];
  };
}

export interface TemplateContextProps {
  data: TemplateMasterData;
  activeTheme: TemplateTheme;
  isHighPerformance: boolean;
  toggleTheme: (theme: TemplateTheme) => void;
}
```

## File: `packages/ui/src/components/AmbientBackground.tsx`

```tsx
/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v18.0.5 (NAMED_EXPORT)
 */

import React, { memo } from "react";
import { cn } from "../lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly color?: string;
  readonly opacity?: number;
}

const AmbientBackgroundComponent = ({ className, color, opacity = 1 }: AmbientBackgroundProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "h-[100dvh] w-full",
        !color && "bg-surface-main",
        className,
      )}
      style={{
        backgroundColor: color,
        opacity: opacity,
      }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -top-[15%] -left-[10%] h-[80vw] w-[80vw] transform-gpu rounded-full opacity-[0.10]",
          "blur-[60px] md:blur-[120px]",
          "md:animate-aura-1",
        )}
        style={{ backgroundColor: "var(--brand-primary)" }}
      />

      <div
        className={cn(
          "absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] transform-gpu rounded-full opacity-[0.06]",
          "blur-[50px] md:blur-[100px]",
          "md:animate-aura-2",
        )}
        style={{
          backgroundColor: "var(--brand-secondary, var(--brand-primary))",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="from-surface-main/40 to-surface-main/60 absolute inset-0 bg-gradient-to-tr via-transparent" />
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundComponent);
```

## File: `packages/ui/src/components/ArticleLayout.tsx`

```tsx
"use client";

import React from "react";
import { Calendar, User, ChevronLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

interface ArticleLayoutProps {
  post: {
    title: string;
    excerpt: string;
    content: string;
    thumbnail_url: string | null;
    category: string;
    published_at: string | null;
    author_id: string;
  };
  backPath?: string;
}

/**
 * [UI COMPONENT]: ARTICLE_LAYOUT v1.0.0
 * [STRATEGY]: High-E-E-A-T article presentation with institutional polish
 */
export function ArticleLayout({ post, backPath = "/blog" }: ArticleLayoutProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="py-24 border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={backPath}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors mb-12"
          >
            <ChevronLeft size={14} />
            Back to Feed
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">
              {post.category}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} />{" "}
              {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
            {post.title}
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-8 mb-12">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between py-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-blue-600">
                <User size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                  Architect
                </p>
                <p className="font-bold text-sm text-gray-900">
                  {post.author_id.replace("_", " ")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                <Share2 size={18} />
              </button>
              <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.thumbnail_url && (
        <div className="max-w-6xl mx-auto px-6 -mt-12 mb-24">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src={post.thumbnail_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-xl prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl">
          {/* 
               Note: In a real app, we'd use a markdown parser here like 'react-markdown' or 'next-mdx-remote'.
               For now, we'll render as whitespace-preserved text.
            */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br/>"),
            }}
          />
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="py-32 bg-gray-50 border-t border-gray-100 mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
            Interested in this Analysis?
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            เราพร้อมนำกลยุทธ์ที่วิเคราะห์ไว้ไปปรับใช้กับธุรกิจของคุณ
            เพื่อสร้างความได้เปรียบที่ยั่งยืน
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
          >
            Establish Transmission
          </Link>
        </div>
      </footer>
    </article>
  );
}
```

## File: `packages/ui/src/components/AuthProvider.tsx`

```tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@repo/db";
import type { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth
      .getSession()
      .then(({ data: { session } }: { data: { session: Session | null } }) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, session: Session | null) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

## File: `packages/ui/src/components/AuthoritySkillMatrix.tsx`

```tsx
"use client";

import React from "react";
import { Cpu, Globe, ShieldCheck } from "lucide-react";

interface SkillMatrixProps {
  skills: {
    technical: string[];
    seo: string[];
    governance: string[];
  };
}

/**
 * [UI COMPONENT]: AUTHORITY_SKILL_MATRIX v1.0.0
 * [STRATEGY]: Showcase professional expertise with institutional aesthetic
 */
export function AuthoritySkillMatrix({ skills }: SkillMatrixProps) {
  const categories = [
    {
      title: "Architecture & DevOps",
      icon: <Cpu className="text-blue-500" size={24} />,
      items: skills.technical,
      color: "border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "SEO & Growth Strategy",
      icon: <Globe className="text-green-500" size={24} />,
      items: skills.seo,
      color: "border-green-500/20 bg-green-500/5",
    },
    {
      title: "Governance & Trust",
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      items: skills.governance,
      color: "border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className={`p-8 rounded-[2rem] border ${cat.color} backdrop-blur-sm transition-all hover:scale-[1.02]`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/10 rounded-2xl">{cat.icon}</div>
            <h3 className="font-black uppercase tracking-tighter text-sm">{cat.title}</h3>
          </div>
          <ul className="space-y-4">
            {cat.items.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-widest">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

## File: `packages/ui/src/components/CookieBanner.tsx`

```tsx
/**
 * [UI COMPONENT]: COOKIE_BANNER v1.5.0 (STABLE)
 * [STRATEGY]: Client-side Hydration | LocalStorage Persistence | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect } from "react";

interface CookieBannerProps {
  /** [OPTIONAL]: ข้อความบนปุ่มกดยอมรับ */
  readonly acceptText?: string;
  /** [OPTIONAL]: ข้อความอธิบายเรื่องคุกกี้ */
  readonly message?: string;
  /** [OPTIONAL]: ชื่อคีย์ที่ใช้เก็บใน LocalStorage (Default: 'cookie-consent') */
  readonly storageKey?: string;
}

/**
 * @component CookieBanner
 * @description แถบแจ้งเตือนคุกกี้ที่ออกแบบมาให้เรียบหรูและรองรับการทำงานแบบ Client-side เท่านั้น
 */
export function CookieBanner({
  acceptText = "ยอมรับ",
  message = "เราใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งานของคุณให้ดียิ่งขึ้น",
  storageKey = "cookie-consent",
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(storageKey);
    if (!consent) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleAccept = () => {
    localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        right: "1rem",
        zIndex: 1000,
        backgroundColor: "var(--background-card, #1a1a1a)",
        border: "1px solid var(--border, #333)",
        borderRadius: "0.75rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontSize: "0.875rem", color: "var(--foreground, #fff)" }}>{message}</div>
      <button
        onClick={handleAccept}
        style={{
          backgroundColor: "var(--primary, #0070f3)",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {acceptText}
      </button>
    </div>
  );
}
```

## File: `packages/ui/src/components/LeadCard.tsx`

```tsx
"use client";

import React from "react";
import { Mail, Clock, MessageSquare } from "lucide-react";

export type LeadStatus = "new" | "contacted" | "completed";

export function LeadStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    contacted: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    completed: "bg-green-500/10 text-green-500 border-green-500/20",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles[status] || styles.new}`}
    >
      {status}
    </span>
  );
}

interface LeadCardProps {
  lead: {
    id: string;
    site_origin: string;
    name: string;
    contact: string;
    message: string;
    status: string;
    created_at: string;
  };
  onStatusUpdate?: (id: string, status: LeadStatus) => void;
}

export function LeadCard({ lead, onStatusUpdate }: LeadCardProps) {
  return (
    <div className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            {lead.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">{lead.name}</h4>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">
              {lead.site_origin}
            </p>
          </div>
        </div>
        <LeadStatusBadge status={lead.status} />
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-400">
          <Mail size={14} className="flex-shrink-0" />
          <span className="text-xs font-mono">{lead.contact}</span>
        </div>
        <div className="flex items-start gap-3 text-gray-400">
          <MessageSquare size={14} className="mt-1 flex-shrink-0" />
          <p className="text-xs leading-relaxed line-clamp-2">{lead.message}</p>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Clock size={14} />
          <span className="text-[10px] uppercase tracking-widest">
            {new Date(lead.created_at).toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {lead.status === "new" && (
          <button
            onClick={() => onStatusUpdate?.(lead.id, "contacted")}
            className="flex-1 py-2 rounded-lg bg-purple-500/10 text-purple-500 text-[10px] font-bold uppercase tracking-widest border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
          >
            Mark Contacted
          </button>
        )}
        {lead.status !== "completed" && (
          <button
            onClick={() => onStatusUpdate?.(lead.id, "completed")}
            className="flex-1 py-2 rounded-lg bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20 hover:bg-green-500/20 transition-colors"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
}
```

## File: `packages/ui/src/components/LeadForm.tsx`

```tsx
/** @format */

"use client";

import React, { useState } from "react";
import { submitLead } from "@repo/db";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface LeadFormProps {
  siteOrigin: string;
  metadata?: Record<string, unknown>;
}

export function LeadForm({ siteOrigin, metadata = {} }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const { error } = await submitLead({
        site_origin: siteOrigin,
        name: formData.name,
        contact: formData.contact,
        message: formData.message,
        metadata: metadata as Record<string, string>,
      });

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", contact: "", message: "" });
    } catch (err: unknown) {
      console.error("Lead submission error:", err);
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message: unknown }).message)
            : "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 text-center bg-success/10 border border-success/20 rounded-3xl animate-in zoom-in-95 duration-500">
        <div className="inline-flex p-4 bg-success/20 rounded-full mb-6">
          <CheckCircle2 size={32} className="text-success" />
        </div>
        <h4 className="text-xl font-bold mb-2">Transmission Successful</h4>
        <p className="text-sm text-muted-foreground">
          ข้อมูลของคุณถูกเข้ารหัสและส่งเข้าสู่ระบบ UNLINK Thailand เรียบร้อยแล้ว
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-xl flex items-center gap-3 text-error text-xs font-bold uppercase tracking-widest">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
            Identity / Full Name
          </label>
          <input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe"
            className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
            Communication Protocol
          </label>
          <input
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="Phone or Email"
            className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
          Strategic Inquiry / Message
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your requirements..."
          className="w-full bg-muted/30 border border-border focus:border-primary/50 focus:bg-muted/50 rounded-xl px-5 py-4 text-sm outline-none transition-all font-medium resize-none"
        />
      </div>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full py-5 bg-primary text-primary-foreground rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === "loading" ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            Send Transmission
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
```

## File: `packages/ui/src/components/LoginForm.tsx`

```tsx
"use client";

import React, { useState } from "react";
import { supabase } from "@repo/db";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "เข้าสู่ระบบสำเร็จ กำลังเปลี่ยนหน้า...",
      });
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-900/80 border border-gray-800 rounded-2xl backdrop-blur-xl shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Identity Login
        </h2>
        <p className="text-gray-400 mt-2">ยืนยันตัวตนเพื่อเข้าถึงระบบนิเวศ UNLINK</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="••••••••"
            required
          />
        </div>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          {isLoading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>

      <div className="relative my-8 text-center">
        <hr className="border-gray-800" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4 text-xs text-gray-500 uppercase">
          Or continue with
        </span>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
```

## File: `packages/ui/src/components/PostCard.tsx`

```tsx
"use client";

import React from "react";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    thumbnail_url: string | null;
    category: string;
    published_at: string | null;
    author_id: string;
  };
  basePath?: string;
}

export function PostCard({ post, basePath = "/blog" }: PostCardProps) {
  return (
    <article className="group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
      <Link href={`${basePath}/${post.slug}`} className="block">
        {/* Thumbnail */}
        <div className="aspect-[16/9] overflow-hidden bg-gray-50 relative">
          {post.thumbnail_url ? (
            <img
              src={post.thumbnail_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-200 uppercase font-black tracking-tighter text-4xl">
              Analysis
            </div>
          )}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg border border-gray-100">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />{" "}
              {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
            </span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="flex items-center gap-1.5 text-blue-600">
              <User size={12} /> {post.author_id.replace("_", " ")}
            </span>
          </div>

          <h3 className="text-2xl font-black text-gray-900 tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 group-hover:gap-4 transition-all">
            Establish Uplink
            <ArrowUpRight size={14} className="text-blue-600" />
          </div>
        </div>
      </Link>
    </article>
  );
}
```

## File: `packages/ui/src/components/PostGrid.tsx`

```tsx
"use client";

import React, { useState } from "react";
import { PostCard } from "./PostCard";

interface PostGridProps {
  initialPosts: unknown[];
  categories: string[];
  basePath?: string;
}

export function PostGrid({ initialPosts, categories, basePath }: PostGridProps) {
  const [filter, setFilter] = useState("all");

  const filteredPosts =
    filter === "all"
      ? initialPosts
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initialPosts.filter((p: any) => p.category === filter);

  return (
    <div className="space-y-16">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all ${
            filter === "all"
              ? "bg-black border-black text-white shadow-xl"
              : "border-gray-100 text-gray-400 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          Full Feed
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all ${
              filter === cat
                ? "bg-black border-black text-white shadow-xl"
                : "border-gray-100 text-gray-400 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {filteredPosts.map((post: any) => (
          <PostCard key={post.id} post={post} basePath={basePath} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-32 text-center">
          <p className="font-black uppercase tracking-[0.4em] text-gray-200 text-xs text-center">
            No Analysis Dispatched
          </p>
        </div>
      )}
    </div>
  );
}
```

## File: `packages/ui/src/components/ProjectCard.tsx`

```tsx
"use client";

import React from "react";
import { ExternalLink, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  // Support both DB format and static format from apps/me
  project?: {
    slug?: string;
    title?: string;
    description?: string;
    thumbnail_url?: string | null;
    image?: string; // Fallback for static
    category?: string;
    tags?: string[];
    client_name?: string | null;
    href?: string; // Fallback for static
  };
  // Props for static usage (Legacy Support)
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  href?: string;
  basePath?: string;
}

/**
 * [UI COMPONENT]: PROJECT_CARD v1.5.0 (UNIFIED_FLEX_SCHEMA)
 */
export function ProjectCard({
  project,
  title,
  description,
  image,
  tags,
  href,
  basePath = "/portfolio",
}: ProjectCardProps) {
  // Resolve data from either prop style
  const _title = project?.title || title || "Untitled Project";
  const _desc = project?.description || description || "No description provided for this node.";
  const _img = project?.thumbnail_url || project?.image || image || null;
  const _tags = project?.tags || tags || [];
  const _category = project?.category || "Strategic Hub";
  const _href = project?.href || href || (project?.slug ? `${basePath}/${project.slug}` : "#");
  const _client = project?.client_name || "Classified Identity";

  const isExternal = _href.startsWith("http");

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500">
      {/* Thumbnail Layer */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-900 relative">
        {_img ? (
          <img
            src={_img}
            alt={_title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 italic text-[10px] uppercase tracking-widest font-black">
            Transmission Node Offline
          </div>
        )}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1 bg-blue-600/20 backdrop-blur-md text-blue-500 border border-blue-500/20 text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
            {_category}
          </span>
        </div>
      </div>

      {/* Content Engine */}
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {(_tags ?? []).slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/5 rounded-full text-[8px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1"
            >
              <Tag size={8} /> {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-500 transition-colors leading-tight">
          {_title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-8 font-mono">{_desc}</p>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <span className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-black">
            Intel: {_client}
          </span>

          {isExternal ? (
            <a
              href={_href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/0 group-hover:shadow-blue-600/20"
            >
              <ExternalLink size={16} />
            </a>
          ) : (
            <Link
              href={_href}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/0 group-hover:shadow-blue-600/20"
            >
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
```

## File: `packages/ui/src/components/ProjectGrid.tsx`

```tsx
"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Filter } from "lucide-react";

interface ProjectGridProps {
  initialProjects?: unknown[];
  categories?: string[];
  basePath?: string;
  children?: React.ReactNode; // รองรับการส่ง children มาตรงๆ แบบใน apps/me
}

/**
 * [UI COMPONENT]: PROJECT_GRID v1.2.0 (SAFETY_ENFORCED)
 */
export function ProjectGrid({
  initialProjects = [],
  categories = [],
  basePath,
  children,
}: ProjectGridProps) {
  const [filter, setFilter] = useState("all");

  // Safety filter
  const filteredProjects =
    filter === "all"
      ? (initialProjects ?? [])
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (initialProjects ?? []).filter((p: any) => p?.category === filter);

  // หากมีการส่ง children มา (สไตล์ apps/me) ให้แสดงผล children แทน
  if (children) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>;
  }

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      {(categories ?? []).length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
              filter === "all"
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "border-white/10 text-gray-500 hover:text-white"
            }`}
          >
            All Intel
          </button>
          {(categories ?? []).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                filter === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "border-white/10 text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {(filteredProjects ?? []).map((project: any) => (
          <ProjectCard key={project?.id || project?.title} project={project} basePath={basePath} />
        ))}
      </div>

      {(filteredProjects ?? []).length === 0 && (
        <div className="py-20 text-center opacity-40">
          <Filter size={48} className="mx-auto mb-4" />
          <p className="font-bold uppercase tracking-widest text-sm">No data in this category</p>
        </div>
      )}
    </div>
  );
}
```

## File: `packages/ui/src/components/ProtectedRoute.tsx`

```tsx
"use client";

import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

export function ProtectedRoute({ children, fallbackPath = "/login" }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(fallbackPath);
    }
  }, [user, isLoading, router, fallbackPath]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            Verifying Identity...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}
```

## File: `packages/ui/src/components/SafeAnalytics.tsx`

```tsx
/**
 * [UI COMPONENT]: SAFE_ANALYTICS v2.1.0 (STABLE)
 * [STRATEGY]: Deferred Loading | Privacy First | Multi-Provider Support
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

interface SafeAnalyticsProps {
  /** [OPTIONAL]: Google Tag Manager ID (e.g., GTM-XXXXXX) */
  readonly gtmId?: string;
  /** [OPTIONAL]: Google Analytics Measurement ID (e.g., G-XXXXXX) */
  readonly gaId?: string;
  /** [OPTIONAL]: Toggle Vercel Analytics (Default: true) */
  readonly enableVercel?: boolean;
}

/**
 * @component SafeAnalytics
 * @description รวบรวมระบบ Analytics ทั้งหมดไว้ที่เดียว พร้อมระบบโหลดแบบ Lazy-load เพื่อประสิทธิภาพสูงสุด
 */
export function SafeAnalytics({ gtmId, gaId, enableVercel = true }: SafeAnalyticsProps) {
  return (
    <>
      {/* [1] Google Tag Manager (LazyOnload) */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* [2] Google Analytics (LazyOnload) */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* [3] Vercel Analytics */}
      {enableVercel && process.env.NODE_ENV === "production" && (
        <VercelAnalytics mode="production" />
      )}
    </>
  );
}
```

## File: `packages/ui/src/components/SectionHeader.tsx`

```tsx
import React from "react";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  badge,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-16 space-y-4",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className,
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full",
            align === "center" ? "justify-center" : "",
          )}
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg font-light leading-relaxed">{description}</p>
      )}
    </div>
  );
};
```

## File: `packages/ui/src/components/ServiceCard.tsx`

```tsx
import React from "react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

/**
 * [UI COMPONENT]: ServiceCard
 * [DESIGN]: Institutional Authority Style
 */
export const ServiceCard = ({ title, description, icon, href, className }: ServiceCardProps) => {
  return (
    <a href={href} className={cn("authority-card group block no-underline", className)}>
      <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
        {/* Render icon directly or wrap it to ensure type safety */}
        <div className="size-8">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors duration-300 tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-light">{description}</p>
    </a>
  );
};
```

## File: `packages/ui/src/components/SkillMatrix.tsx`

```tsx
/**
 * [UI COMPONENT]: SKILL_MATRIX v1.0.0 (NAMED_EXPORT)
 */

import React, { memo } from "react";
import { cn } from "../lib/utils";

export interface SkillItem {
  name: string;
  level: number;
  category: "CORE" | "SEO" | "UI" | "ARCH";
  icon?: React.ReactNode;
}

interface SkillMatrixProps {
  skills: SkillItem[];
  className?: string;
  title?: string;
}

const SkillMatrixComponent = ({ skills, className, title = "Expertise Hub" }: SkillMatrixProps) => {
  return (
    <div className={cn("relative z-10 w-full max-w-4xl mx-auto p-8", className)}>
      <header className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
          {title.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-blue-500" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="h-1 w-24 bg-blue-500 rounded-full mb-6 mx-auto md:mx-0" />
      </header>

      <div className="grid grid-cols-1 md:md:grid-cols-2 gap-6">
        {(skills ?? []).map((skill) => (
          <div
            key={skill.name}
            className={cn(
              "group relative p-6 bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500",
              "hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1",
            )}
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all" />

            <div className="flex justify-between items-end mb-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                  {skill.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <span className="text-2xl font-black text-white/20 group-hover:text-blue-500/40 font-mono transition-all">
                {skill.level}%
              </span>
            </div>

            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative z-10">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 relative z-10">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full animate-pulse",
                  skill.level > 80 ? "bg-green-500" : "bg-blue-500",
                )}
              />
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">
                {skill.level > 90 ? "Authority Master" : "Active Specialist"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillMatrix = memo(SkillMatrixComponent);
```

## File: `packages/ui/src/components/StatusIndicator.tsx`

```tsx
"use client";

import React from "react";

export type SystemStatus = "OPERATIONAL" | "ACTIVE" | "SECURE" | "MAINTENANCE" | "INTERVENTION";

interface StatusIndicatorProps {
  status: SystemStatus;
  label?: string;
  className?: string;
}

/**
 * [UI COMPONENT]: STATUS_INDICATOR v1.0.0
 * [STRATEGY]: Cyber-Authority visual signal for system trust
 */
export function StatusIndicator({ status, label, className = "" }: StatusIndicatorProps) {
  const configs: Record<SystemStatus, { color: string; bg: string; dot: string }> = {
    OPERATIONAL: {
      color: "text-green-500",
      bg: "bg-green-500/10",
      dot: "bg-green-500",
    },
    ACTIVE: {
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      dot: "bg-blue-500",
    },
    SECURE: {
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      dot: "bg-purple-500",
    },
    MAINTENANCE: {
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      dot: "bg-yellow-500",
    },
    INTERVENTION: {
      color: "text-red-500",
      bg: "bg-red-500/10",
      dot: "bg-red-500",
    },
  };

  const current = configs[status] || configs.OPERATIONAL;

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 ${current.bg} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`}
        ></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`}></span>
      </span>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${current.color}`}>
        {label || status}
      </span>
    </div>
  );
}
```

## File: `packages/ui/src/components/TemplateShowcase.tsx`

```tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

interface TemplateItem {
  slug: string;
  title: string;
  industry: string;
  description: string;
  thumbnail: string;
}

interface TemplateShowcaseProps {
  templates: TemplateItem[];
  className?: string;
}

/**
 * [COMPONENT]: TemplateShowcase
 * แสดงรายการเทมเพลตธุรกิจด้วยดีไซน์ระดับโลก (Glass Liquid Effect)
 */
export const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({ templates, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {templates.map((template) => (
        <Link
          key={template.slug}
          href={`/portfolio/${template.slug}`}
          className="group relative block h-full"
        >
          <div className="glass-liquid authority-card h-full p-0 overflow-hidden flex flex-col transition-all duration-500 hover:scale-[1.02]">
            {/* 🖼️ Thumbnail with Dynamic Image */}
            <div className="relative aspect-[16/10] bg-muted/20 overflow-hidden">
              <Image
                src={template.thumbnail}
                alt={template.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />

              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-xl text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/30">
                  {template.industry}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>

            {/* 📝 Content */}
            <div className="p-8 flex flex-col flex-grow relative z-20">
              <h3 className="text-2xl font-black mb-3 group-hover:text-secondary transition-colors line-clamp-1 uppercase tracking-tighter">
                {template.title}
              </h3>
              <p className="text-sm text-muted-foreground/80 line-clamp-2 mb-6 flex-grow font-light leading-relaxed">
                {template.description}
              </p>
              <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                  Next.js 16 PPR
                </span>
                <span>SEO Authority</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
```

## File: `packages/ui/src/components/ThemeToggle.tsx`

```tsx
/**
 * [UI COMPONENT]: THEME_TOGGLE v1.0.0 (NAMED_EXPORT)
 */

import React, { memo } from "react";
import { Sun } from "lucide-react";
import { cn } from "../lib/utils";

const ThemeToggleComponent = ({ className }: { className?: string }) => {
  // Simple Toggle logic for now
  return (
    <button
      className={cn(
        "p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors",
        className,
      )}
    >
      <Sun size={18} />
    </button>
  );
};

export const ThemeToggle = memo(ThemeToggleComponent);
```

## File: `packages/ui/src/components/UnlinkTrustBadge.tsx`

```tsx
"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface UnlinkTrustBadgeProps {
  siteId?: string;
  status?: "verified" | "pending" | "alert";
  className?: string;
}

export function UnlinkTrustBadge({
  siteId = "AEM-HUB-001",
  status: _status = "verified",
  className = "",
}: UnlinkTrustBadgeProps) {
  return (
    <div className={`inline-flex flex-col items-start gap-1 ${className}`}>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/5 border border-blue-500/20 rounded-full backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300">
        <ShieldCheck className="w-4 h-4 text-blue-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
          Verified by UNLINK
        </span>
        <CheckCircle2 className="w-3 h-3 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
      </div>

      {/* Verification Ledger Trace */}
      <div className="flex items-center gap-1.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-1 h-1 bg-blue-500/30 rounded-full" />
        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">
          Ledger ID: {siteId}
        </span>
      </div>
    </div>
  );
}
```

## File: `packages/ui/src/components/UserMenu.tsx`

```tsx
"use client";

import React from "react";
import { useAuth } from "./AuthProvider";
import { LogOut, User as UserIcon, Settings } from "lucide-react";

export function UserMenu() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 p-2 bg-gray-900/50 border border-gray-800 rounded-full pr-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white uppercase">
        {user.email?.[0] || <UserIcon size={16} />}
      </div>
      <div className="hidden md:block">
        <p className="text-xs text-gray-400 font-mono leading-none mb-1">Authenticated</p>
        <p className="text-sm font-medium text-white leading-none max-w-[150px] truncate">
          {user.email}
        </p>
      </div>
      <div className="flex items-center gap-1 ml-2 border-l border-gray-800 pl-3">
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors" title="Settings">
          <Settings size={16} />
        </button>
        <button
          onClick={() => signOut()}
          className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
          title="Sign Out"
        >
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}
```

## File: `packages/ui/src/components/button.tsx`

```tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "focus-visible:ring-brand-primary inline-flex items-center justify-center gap-2 rounded-[var(--radius-button,0.75rem)] text-sm font-bold whitespace-nowrap transition-all duration-300 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "shadow-glow bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-fg)] hover:brightness-110",
        neo: "shadow-glow hover:shadow-pro bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-fg)] hover:translate-y-[-2px]",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline:
          "border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-offset)]",
        secondary:
          "bg-[var(--surface-offset)] text-[var(--text-primary)] hover:bg-[var(--border)]/50",
        ghost:
          "text-[var(--text-secondary)] hover:bg-[var(--surface-offset)] hover:text-[var(--text-primary)]",
        link: "text-[var(--color-brand-primary)] underline-offset-4 hover:underline",
        specialist:
          "border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/10",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-[1rem] px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// [PATCH]: Unified Props to handle Button, Anchor, and Link safely
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const isExternal =
      href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("tel:");

    if (href) {
      const commonProps = {
        className: cn(buttonVariants({ variant, size, className })),
        children: props.children,
      };

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...commonProps}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        );
      }

      return <Link href={href} {...commonProps} {...(props as Record<string, unknown>)} />;
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

## File: `packages/ui/src/components/card.tsx`

```tsx
import * as React from "react";

import { cn } from "../lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardContent };
```

## File: `packages/ui/src/components/code.tsx`

```tsx
import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children}</code>;
}
```

## File: `packages/ui/src/components/glass-card.tsx`

```tsx
import * as React from "react";
import { cn } from "../lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  intensity?: "low" | "medium" | "high";
  withBorder?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, blur = "md", intensity = "medium", withBorder = true, children, ...props },
    ref,
  ) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    const intensityClasses = {
      low: "bg-white/5",
      medium: "bg-white/10",
      high: "bg-white/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-300",
          blurClasses[blur],
          intensityClasses[intensity],
          withBorder && "border border-white/10 border-t-white/20 border-l-white/20",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
          "hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-white/30",
          className,
        )}
        {...props}
      >
        {/* Subtle Highlight Reflection */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 p-6">{children}</div>
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
```

## File: `packages/seo/src/schemas.ts`

```ts
/** @format */

import { SHARED_SITE_CONFIG } from "@repo/core";
import { WithContext, Thing, Person, Organization, WebSite } from "schema-dts";

/**
 * 🌐 Unified Graph Schema (SEO Authority Bridge)
 */
/**
 * [SEO]: Strategic Entity Intelligence Network (JSON-LD Graph) v5.0.0
 * ---------------------------------------------------------
 * This protocol links the Person, the Agency, and the Institutional Authority
 * to establish maximum E-E-A-T for AI Search Engines (GEO).
 */

const ECOSYSTEM = {
  identityUrl: SHARED_SITE_CONFIG.ecosystem?.identityUrl ?? SHARED_SITE_CONFIG.links.me,
  commercialUrl: SHARED_SITE_CONFIG.ecosystem?.commercialUrl ?? SHARED_SITE_CONFIG.links.site,
  masterHub: SHARED_SITE_CONFIG.ecosystem?.masterHub ?? SHARED_SITE_CONFIG.links.unlink,
};

export const getPersonSchema = (): Person => ({
  "@type": "Person",
  "@id": `${ECOSYSTEM.identityUrl}/#expert`,
  name: SHARED_SITE_CONFIG.expert.legalNameThai,
  alternateName: [
    SHARED_SITE_CONFIG.expert.displayName,
    SHARED_SITE_CONFIG.expert.alternateName,
    SHARED_SITE_CONFIG.expert.strategicAlias,
    SHARED_SITE_CONFIG.expert.legalNameEnglish,
  ].filter((v): v is string => !!v),
  url: ECOSYSTEM.identityUrl,
  image: SHARED_SITE_CONFIG.expert.avatar,
  jobTitle: SHARED_SITE_CONFIG.expert.jobTitle,
  description: SHARED_SITE_CONFIG.expert.bio,
  email: SHARED_SITE_CONFIG.expert.email,
  telephone: SHARED_SITE_CONFIG.contact.phone,
  sameAs: [
    SHARED_SITE_CONFIG.links.github,
    SHARED_SITE_CONFIG.links.linkedin,
    SHARED_SITE_CONFIG.links.facebook,
    SHARED_SITE_CONFIG.links.twitter,
    SHARED_SITE_CONFIG.links.youtube,
  ].filter((v): v is string => !!v),
  knowsAbout: SHARED_SITE_CONFIG.expert.skills
    ? [
        ...SHARED_SITE_CONFIG.expert.skills.technical,
        ...SHARED_SITE_CONFIG.expert.skills.seo,
        ...SHARED_SITE_CONFIG.expert.skills.governance,
      ]
    : [],
});

export const getOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  "@id": `${ECOSYSTEM.commercialUrl}/#organization`,
  name: SHARED_SITE_CONFIG.brand.name,
  legalName: SHARED_SITE_CONFIG.brand.legalName,
  url: ECOSYSTEM.commercialUrl,
  logo: {
    "@type": "ImageObject",
    url: `${ECOSYSTEM.commercialUrl}${SHARED_SITE_CONFIG.brand.logo}`,
  },
  description: SHARED_SITE_CONFIG.brand.description,
  foundingDate: SHARED_SITE_CONFIG.brand.foundingDate,
  founder: { "@id": `${ECOSYSTEM.identityUrl}/#expert` },
  address: {
    "@type": "PostalAddress",
    streetAddress: SHARED_SITE_CONFIG.contact.streetAddress,
    addressLocality: SHARED_SITE_CONFIG.business.location,
    addressRegion: SHARED_SITE_CONFIG.business.region,
    postalCode: SHARED_SITE_CONFIG.contact.postalCode,
    addressCountry: "TH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SHARED_SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
    },
  ],
  areaServed: SHARED_SITE_CONFIG.brand.areaServed?.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  sameAs: [
    SHARED_SITE_CONFIG.links.facebook,
    SHARED_SITE_CONFIG.links.linkedin,
    SHARED_SITE_CONFIG.links.twitter,
    SHARED_SITE_CONFIG.links.youtube,
    SHARED_SITE_CONFIG.links.googleMaps,
  ].filter((v): v is string => !!v),
  memberOf: {
    "@type": "Organization",
    name: "UNLINK-GLOBAL Institutional Network",
    url: ECOSYSTEM.masterHub,
  },
});

export const getWebSiteSchema = (): WebSite => ({
  "@type": "WebSite",
  "@id": `${ECOSYSTEM.commercialUrl}/#website`,
  url: ECOSYSTEM.commercialUrl,
  name: SHARED_SITE_CONFIG.brand.fullName,
  publisher: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
});

export const getServiceSchema = (industry: string, location?: string): Thing => ({
  "@type": "Service",
  name: `Professional Web Design & SEO for ${industry}`,
  provider: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
  areaServed: location ? { "@type": "City", name: location } : undefined,
  description: `Advanced Next.js 16 solutions tailored for the ${industry} sector.`,
});

export const getProjectSchema = (study: {
  title: string;
  description: string;
  url: string;
  image: string;
}): Thing => ({
  "@type": "CreativeWork",
  name: study.title,
  description: study.description,
  url: study.url,
  image: study.image,
  author: { "@id": `${ECOSYSTEM.identityUrl}/#expert` },
  publisher: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
});

export const getGraphSchema = (additionalNodes: Thing[] = []): WithContext<Thing> => {
  return {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), getOrganizationSchema(), getWebSiteSchema(), ...additionalNodes],
  } as unknown as WithContext<Thing>;
};
```

## File: `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "globalPassThroughEnv": [
    "NODE_ENV",
    "VERCEL_ENV",
    "VERCEL_URL",
    "SUPABASE_URL",
    "SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_JWT_SECRET",
    "SUPABASE_PUBLISHABLE_KEY",
    "POSTGRES_URL",
    "POSTGRES_PRISMA_URL",
    "POSTGRES_URL_NON_POOLING",
    "POSTGRES_USER",
    "POSTGRES_HOST",
    "POSTGRES_PASSWORD",
    "POSTGRES_DATABASE",
    "BLOB_READ_WRITE_TOKEN"
  ],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"],
      "cache": true
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "clean": {
      "cache": false
    }
  }
}
```

## File: `apps/web/package.json`

```json
{
  "name": "web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "next build --webpack",
    "dev": "next dev -p 3001 --webpack",
    "lint": "next lint",
    "start": "next start -p 3001",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@mdx-js/loader": "^3.1.1",
    "@mdx-js/react": "^3.1.1",
    "@next/mdx": "^16.2.3",
    "@repo/core": "workspace:*",
    "@repo/db": "workspace:*",
    "@repo/next-config": "workspace:*",
    "@repo/seo": "workspace:*",
    "@repo/ui": "workspace:*",
    "@supabase/ssr": "^0.10.2",
    "@tailwindcss/typography": "^0.5.19",
    "@types/mdx": "^2.0.13",
    "clsx": "^2.1.1",
    "framer-motion": "^12.38.0",
    "geist": "^1.7.0",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.474.0",
    "next": "16.2.3",
    "next-mdx-remote": "^6.0.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "4.2.2",
    "tailwindcss-animate": "1.0.7"
  },
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@tailwindcss/postcss": "^4.2.2",
    "@types/node": "^22.15.3",
    "@types/react": "19.2.14",
    "@types/react-dom": "19.2.2",
    "@typescript-eslint/eslint-plugin": "^8.0.0",
    "@typescript-eslint/parser": "^8.0.0",
    "eslint": "^9.7.0",
    "eslint-plugin-react-hooks": "^5.0.0"
  }
}
```
