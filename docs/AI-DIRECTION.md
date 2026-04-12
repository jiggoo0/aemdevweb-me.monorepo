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
*กำหนดโดย **AEMZA MACKS (Lead Architect)** | คู่มือปฏิบัติการ AI ฉบับปี 2026*
