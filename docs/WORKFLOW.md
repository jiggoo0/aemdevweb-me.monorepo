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
*Enforced by Gemini CLI & AEM Monorepo Constitution*
