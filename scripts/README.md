# 🛠 Monorepo Operations & Automation Scripts

โฟลเดอร์นี้รวบรวมชุดเครื่องมือสำหรับการจัดการระบบ (Automation Scripts) ของ Monorepo เพื่อให้การพัฒนา, การตรวจสอบคุณภาพ, และการจัดการฐานข้อมูลเป็นไปอย่างรวดเร็วและเป็นมาตรฐานเดียวกัน

## 📌 จุดประสงค์ (Purpose)

- **Maintain Integrity:** ตรวจสอบความถูกต้องของสถาปัตยกรรม (เช่น ห้ามใช้ Deep Import ข้าม Package)
- **Chaos Testing:** จำลองข้อผิดพลาดเพื่อทดสอบความทนทานของระบบ CI/CD และโครงสร้างโค้ด
- **Database Seeding:** จัดการข้อมูลตั้งต้นสำหรับระบบ Hyper-localization (77 จังหวัด) และข้อมูลพอร์ตโฟลิโอ
- **Version Standardization:** ควบคุมเวอร์ชันของไลบรารีหลัก (React, Next, TS) ให้ตรงกันทั้งโปรเจกต์

## 🚀 สคริปต์หลัก (Core Scripts)

### 1. ระบบตรวจสอบและควบคุม (Audit & Standards)

- **`monorepo-integrity-auditor.sh`**: ตรวจสอบกฎเหล็ก 6 ข้อของ Monorepo (เช่น Boundary Violations, Version Mismatch, Unused Deps)
- **`monorepo-standardizer.sh`**: ปรับปรุงเวอร์ชันของ React, Next.js และ TypeScript ในทุก `package.json` ให้ตรงตามค่ามาตรฐานที่กำหนดไว้
- **`monorepo-cleanup.sh`**: ลบไฟล์ขยะ, `node_modules`, และ `.next` ทั่วทั้งโปรเจกต์เพื่อเริ่มระบบใหม่จากศูนย์

### 2. ระบบทดสอบขั้นสูง (Advanced Testing)

- **`monorepo-chaos-simulation.sh`**: **[อันตราย]** ใช้สำหรับฉีดข้อผิดพลาดจำลอง เช่น การสร้าง Circular Dependency หรือ Boundary Violation เพื่อทดสอบว่า Auditor ของเราตรวจพบหรือไม่

### 3. การจัดการข้อมูล (Database & Seeding)

- **`setup-database.ts`**: ตั้งค่าโครงสร้างตารางเริ่มต้นใน Supabase
- **`seed-provinces.ts`**: นำเข้าข้อมูลจังหวัดทั้ง 77 จังหวัดเข้าสู่ฐานข้อมูล
- **`seed-projects.ts` / `seed-blog.ts`**: นำเข้าข้อมูลตัวอย่างสำหรับพอร์ตโฟลิโอและบทความ
- **`test-database-ops.ts`**: ทดสอบการเชื่อมต่อและการเขียน/อ่านข้อมูลจริงจาก Supabase

## 🛠 วิธีการใช้งาน (Usage)

รันสคริปต์ผ่าน `pnpm` จากระดับ Root ของ Monorepo (แนะนำ):

```bash
# ตรวจสอบความถูกต้องของระบบทั้งหมด
pnpm run audit

# ปรับมาตรฐานเวอร์ชันไลบรารี
pnpm run standardize

# ล้างข้อมูลขยะทั้งหมด
pnpm run clean
```

หรือรันไฟล์สคริปต์โดยตรง (ต้องให้สิทธิ์การรันก่อน):

```bash
chmod +x scripts/*.sh
./scripts/monorepo-integrity-auditor.sh
```

## ⚠️ ข้อควรระวัง (Warnings)

- **Chaos Simulation:** ห้ามรันสคริปต์นี้บน Production โดยเด็ดขาด เพราะจะทำให้โค้ดพังทันที (ต้องรัน `monorepo-cleanup.sh` และ `pnpm install` ใหม่เพื่อกู้คืน)
- **Database Seeding:** การรันสคริปต์ `seed-*` อาจเขียนทับข้อมูลเดิมในฐานข้อมูล ควรตรวจสอบ Environment Variables ให้ถูกต้องก่อนรันเสมอ

## 👨‍💻 ผู้ดูแล (Maintainer)

- **AEMZA MACKS** (Lead Architect)
