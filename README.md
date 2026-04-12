# 🏛️ AEM Architectural Ecosystem Mastery (Monorepo)

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.0-red?style=for-the-badge&logo=turborepo)](https://turbo.build/)
[![Zero-Waste](https://img.shields.io/badge/Quality-0%25_Lint_/_Type_Errors-success?style=for-the-badge)](./docs/MASTER-STRATEGY-ARCH.md)

**โครงสร้างพื้นฐานดิจิทัลระดับสถาบัน (Institutional Digital Infrastructure) ที่ออกแบบมาเพื่อการยึดครองอันดับบน AI Search (GEO) และความเชื่อถือสูงสุดในระดับ E-E-A-T**

## 📖 คำอธิบาย (Description)

AEM เป็นระบบนิเวศน์ Monorepo ขั้นสูงที่รวมเอา **Technical SEO Authority** เข้ากับสถาปัตยกรรมเว็บสมัยใหม่ ระบบนี้ถูกสร้างขึ้นเพื่อทำลายขีดจำกัดของเว็บไซต์แบบเดิม โดยเน้นความเร็วระดับมิลลิวินาที (LCP < 1.0s) และการเชื่อมโยงอัตลักษณ์ (Entity Linking) ระหว่างบุคคล (Chief Architect) และสถาบัน (AEM) อย่างสมบูรณ์แบบ

### ทำไมโปรเจกต์นี้จึงพิเศษ? (Unique Propositions)

- 🚀 **Next.js 16 & PPR:** ใช้งาน Partial Prerendering และ `"use cache"` เพื่อประสิทธิภาพสูงสุดบนทุกอุปกรณ์
- 📍 **Province Node Engine:** ระบบสร้าง Landing Pages เจาะลึก 77 จังหวัดทั่วไทยแบบ Dynamic พร้อม Schema เฉพาะพื้นที่
- 🛡️ **Zero-Waste Architecture:** มาตรฐานความสะอาดของโค้ดที่ 0% Lint, 0% Type Warnings และ 0% Unused Code
- 🏛️ **Institutional Design:** ใช้มาตรฐานสี OKLCH (P3 Gamut) และ Glassmorphism ระดับพรีเมียมที่ผ่านการวิจัยด้าน UX มาแล้ว

---

## 📋 สารบัญ (Table of Contents)

1. [โครงสร้าง Monorepo (Ecosystem Structure)](#-โครงสร้าง-monorepo-ecosystem-structure)
2. [การติดตั้ง (Installation)](#-การติดตั้ง-installation)
3. [การเริ่มต้นใช้งาน (Quick Start)](#-การเริ่มต้นใช้งาน-quick-start)
4. [สถาปัตยกรรมข้อมูล (Data & SEO Architecture)](#-สถาปัตยกรรมข้อมูล-data--seo-architecture)
5. [การพัฒนาและมาตรฐาน (Development & Standards)](#-การพัฒนาและมาตรฐาน-development--standards)
6. [แผนการดำเนินงาน (Roadmap)](#-แผนการดำเนินงาน-roadmap)

---

## 🏗️ โครงสร้าง Monorepo (Ecosystem Structure)

ระบบใช้ **pnpm Workspaces** ในการจัดการ Apps และ Packages:

### Applications (`apps/`)

- **`web`**: หัวใจหลักของระบบ รวบรวม Institutional Pages, Portfolio และ P-SEO Nodes
- **`unlink-th`**: ระบบตรวจสอบความน่าเชื่อถือ (Verification) และเครื่องมือเฉพาะทาง

### Shared Packages (`packages/`)

- **`@repo/core`**: ศูนย์กลาง Configuration, Area Nodes (77 จังหวัด), และ Business Constants
- **`@repo/db`**: Facade เชื่อมต่อ Supabase พร้อมระบบ Type Safety 100%
- **`@repo/ui`**: คลังคอมโพเนนต์ Glassmorphism และ Design System (OKLCH)
- **`@repo/seo`**: ตัวช่วยสร้าง Schema.org JSON-LD สำหรับการทำ Entity Linking
- **`@repo/trust-engine`**: ระบบวิเคราะห์ความน่าเชื่อถือและการทำ Integrity Audit

---

## 🛠️ การติดตั้ง (Installation)

### ความต้องการพื้นฐาน (Prerequisites)

- Node.js >= 22.0.0 (Node 24 Recommended)
- pnpm >= 10.33.0
- Android / Termux (หากพัฒนาบนมือถือ) หรือมาตรฐาน Linux/macOS

### ขั้นตอนการติดตั้ง

```bash
# 1. Clone และเข้าสู่ Root
git clone <repository-url>
cd aemdevweb-me.monorepo

# 2. ติดตั้ง Dependencies ทั้งหมด (Monorepo-wide)
pnpm install

# 3. ตรวจสอบความสมบูรณ์ของระบบ
pnpm run audit
```

---

## ⚡ การเริ่มต้นใช้งาน (Quick Start)

รันโปรเจกต์ในโหมดพัฒนา (Development):

```bash
# รันแอปพลิเคชันเว็บหลัก
pnpm --filter web dev

# รันระบบตรวจสอบความสมบูรณ์ขนานกัน
pnpm run dev:termux
```

ทำการ Build สำหรับ Production:

```bash
pnpm build
```

---

## ⚙️ การตั้งค่า (Configuration)

โปรเจกต์ใช้ไฟล์ `.env.local` สำหรับการเชื่อมต่อบริการภายนอก:

```env
# Supabase Integration
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Site Identity
NEXT_PUBLIC_WEB_URL=https://www.aemdevweb.com
```

---

## 🏗️ สถาปัตยกรรมข้อมูล (Data & SEO Architecture)

ระบบใช้สถาปัตยกรรม **Strategic Identity Hub** เพื่อสร้างความเชื่อมั่นสูงสุด:

1.  **Data Registry Facade**: อยู่ใน `@repo/db` ทำหน้าที่เป็นตัวกลางควบคุมการดึงข้อมูลจาก Supabase
2.  **Shared Site Config**: อยู่ใน `@repo/core` เป็น Single Source of Truth สำหรับสโลแกนและข้อมูล SEO
3.  **Entity Linking**: ใช้ `@repo/seo` สร้างความสัมพันธ์ระหว่าง `Person` (Architect) และ `Organization` (AEM) เพื่อส่งสัญญาณให้ Google เข้าใจโครงสร้างธุรกิจ

---

## 🏗️ การพัฒนาและมาตรฐาน (Development & Standards)

เพื่อให้โค้ดมีคุณภาพระดับ Enterprise 100%:

- **Linting:** `pnpm run lint` (ต้อง 0% Warning)
- **Typing:** `pnpm run typecheck` (ต้อง 0% Error)
- **Unused Code:** `pnpm run knip` (ตรวจสอบโค้ดขยะ)
- **Documentation:** ทุกการเปลี่ยนแปลงสำคัญต้องบันทึกลงใน `GEMINI.md` ของแต่ละ App/Package

---

## 🗺️ แผนการดำเนินงาน (Roadmap)

- [x] **Phase 1: Foundation** - วางโครงสร้าง Monorepo และ Next.js 16 PPR
- [x] **Phase 2: Identity Sync** - รวมหน้า Chief Architect และ Portfolio อย่างสมบูรณ์
- [ ] **Phase 3: Hyper-Localization** - ขยาย P-SEO จากระดับจังหวัดสู่ระดับอำเภอ (District Nodes)
- [ ] **Phase 4: AI Content Orchestration** - พัฒนาระบบเจนเนื้อหา SEO อัตโนมัติด้วย AI Agents
- [ ] **Phase 5: Global Expansion** - ปรับปรุงระบบให้รองรับ Multi-Language ระดับภูมิภาคสากล

---

## 📜 ใบอนุญาต (License)

ลิขสิทธิ์ © 2026 **AEMDEVWEB GROUP**. ภายใต้ใบอนุญาต ISC

---

## 👥 ผู้เขียนและกิตติกรรมประกาศ (Authors)

- **Lead Architect:** [AEMZA MACKS](https://www.aemdevweb.com)
- **Core Team:** UNLINK Thailand & Strategic Partners

---

## 📞 ช่องทางการติดต่อ (Support)

หากพบปัญหาหรือต้องการปรึกษาด้านสถาปัตยกรรมดิจิทัล:

- **Email:** architect@aemdevweb.com
- **Line:** [@204uuzew](https://line.me/R/ti/p/@204uuzew)
- **Issue Tracker:** [GitHub Issues](https://github.com/aemdevweb/aem-monorepo/issues)

---

_เอกสารนี้ถูกควบคุมโดย AEM Strategic Governance Protocol v4.0.0_
