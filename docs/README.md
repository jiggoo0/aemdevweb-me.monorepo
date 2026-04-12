# 📚 AEM Strategic Documentation Registry

[![Documentation Status](https://img.shields.io/badge/Status-Maintained-success?style=for-the-badge)](./MASTER-STRATEGY-ARCH.md)
[![Design System](https://img.shields.io/badge/Design-v4.0.0-blue?style=for-the-badge)](./DESIGN.md)
[![AI Ready](https://img.shields.io/badge/AI-Agentic_Ready-orange?style=for-the-badge)](./AI-DIRECTION.md)

**ศูนย์รวมพิมพ์เขียวเชิงสถาปัตยกรรม กลยุทธ์ทางธุรกิจ และมาตรฐานการออกแบบสำหรับระบบนิเวศ AEMDEVWEB & UNLINK THAILAND**

## 📖 คำอธิบาย (Description)
เอกสารชุดนี้ทำหน้าที่เป็น "Single Source of Truth" สำหรับนักพัฒนาและ AI Agents ในการทำความเข้าใจโครงสร้างอันซับซ้อนของ Monorepo โดยครอบคลุมตั้งแต่การวางแผนระดับสูง (High-level Strategy) ไปจนถึงรายละเอียดทางเทคนิคระดับพิกเซล

### จุดประสงค์ (Purpose)
*   **Architectural Guidance:** กำหนดทิศทางสถาปัตยกรรมเพื่อให้การขยายตัว (Scaling) เป็นไปอย่างมีระเบียบ
*   **Strategic Alignment:** เชื่อมโยงเป้าหมายทางธุรกิจ (P-SEO, E-E-A-T) เข้ากับการพัฒนาซอฟต์แวร์
*   **Design Consistency:** ควบคุมมาตรฐาน Visual ผ่าน OKLCH และ Glassmorphism
*   **AI Orchestration:** เตรียม Prompt และ Context สำหรับ AI Agents ในการช่วยเขียนโค้ดและสร้างเนื้อหา

---

## 📋 สารบัญเอกสาร (Documentation Index)

| ไฟล์ | หัวข้อหลัก | เนื้อหาโดยสรุป |
| :--- | :--- | :--- |
| 🏛️ [**MASTER-STRATEGY-ARCH.md**](./MASTER-STRATEGY-ARCH.md) | **ยุทธศาสตร์สถาปัตยกรรม** | วิสัยทัศน์ระบบ, ข้อกำหนด E-E-A-T, และโครงสร้าง Monorepo |
| 🎨 [**DESIGN.md**](./DESIGN.md) | **ระบบการออกแบบ** | มาตรฐาน OKLCH, Typography Geist, และสไตล์ Glassmorphism |
| 🧠 [**AI-DIRECTION.md**](./AI-DIRECTION.md) | **ทิศทาง AI** | คู่มือสำหรับ AI Agents ในการจัดการโครงสร้างและ Logic ของระบบ |
| 📊 [**DATABASE-SCHEMA.md**](./DATABASE-SCHEMA.md) | **พิมพ์เขียวฐานข้อมูล** | รายละเอียดโครงสร้าง Tables ใน Supabase และความสัมพันธ์ของข้อมูล |
| 📐 [**DESIGN-PATTERNS-ANALYSIS.md**](./DESIGN-PATTERNS-ANALYSIS.md) | **รูปแบบการออกแบบโค้ด** | การใช้ Factory, Facade และ Strategy Patterns ในระบบ |
| 🗺️ [**WORKSPACE_MAP.txt**](./WORKSPACE_MAP.txt) | **แผนผังพื้นที่ทำงาน** | รายละเอียดโครงสร้างไฟล์และแพ็กเกจทั้งหมดใน Monorepo |

---

## ⚡ การใช้งานสำหรับนักพัฒนา (Usage for Developers)

### การอ้างอิงมาตรฐานสี (OKLCH)
นักพัฒนาควรใช้ค่าสีตามที่ระบุใน [DESIGN.md](./DESIGN.md) เสมอ เพื่อให้รองรับ P3 Display Gamut:
*   **Trust Blue:** `oklch(0.546 0.245 262.881)`
*   **Void Black:** `oklch(0.05 0 0)`

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
*   **Lead Architect:** AEMZA MACKS
*   **Audit Policy:** การแก้ไขเอกสารในโฟลเดอร์นี้ต้องผ่านการรัน `pnpm run audit` ทุกครั้ง

---

## 📞 ช่องทางการติดต่อ (Contact)
หากมีข้อสงสัยเกี่ยวกับสถาปัตยกรรม โปรดติดต่อฝ่ายเทคนิคผ่านโปรโตคอลที่ระบุไว้ในหน้าหลักของระบบ

---

_เอกสารนี้เป็นส่วนหนึ่งของ AEM Constitution v4.0.0_
