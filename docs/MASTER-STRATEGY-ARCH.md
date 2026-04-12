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
