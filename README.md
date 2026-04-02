# Monorepo Excellence: Simulation & Integrity Auditor

โปรเจกต์นี้เป็นระบบทดสอบและรักษามาตรฐานสำหรับสถาปัตยกรรม Monorepo ขนาดใหญ่ โดยใช้แนวคิด "Chaos Engineering" เพื่อจำลองความผิดพลาดที่มักเกิดขึ้นในระบบซับซ้อน และใช้ "Auditor" ขั้นสูงในการตรวจจับและบังคับใช้มาตรฐานให้ถูกต้อง 100%

โปรดใช้ระบบนี้เพื่อฝึกฝนการตรวจจับ Anti-patterns หรือเพื่อทดสอบความแข็งแกร่งของระบบ CI/CD ในโครงสร้าง Monorepo ของคุณ

---

## Monorepo Chaos Simulation

Monorepo Chaos Simulation คือสคริปต์อัจฉริยะที่ออกแบบมาเพื่อ "ฉีดความผิดพลาด" (Fault Injection) เข้าสู่ระบบอย่างมีระบบ เพื่อทดสอบว่า Auditor หรือนักพัฒนาสามารถตรวจพบปัญหาเหล่านี้ได้หรือไม่

สคริปต์นี้รองรับการจำลองปัญหาดังนี้:
- **Circular Dependency:** การสร้างวงกลมความสัมพันธ์ระหว่าง Package ที่ทำให้เกิดปัญหาในการ Build
- **Boundary Violation:** การ Import ข้ามเลเยอร์ผ่านทางลัด (Deep Import) ซึ่งทำลายหลักการ Encapsulation
- **Phantom Dependency:** การแอบใช้ Library ภายนอกโดยไม่ได้ลงทะเบียนไว้ใน `package.json`
- **Version Mismatch:** การใช้ Library พื้นฐาน (เช่น React) ต่างเวอร์ชันกันในแต่ละ App ซึ่งนำไปสู่ Runtime Error

---

## Monorepo Integrity Auditor

Auditor ทำหน้าที่เป็นผู้คุมกฎของระบบ โดยใช้เทคนิคการวิเคราะห์ Static Analysis และ Dependency Graph เพื่อตรวจสอบความสมบูรณ์ของสถาปัตยกรรม

ขั้นตอนการตรวจสอบประกอบด้วย:
1.  **Boundary Check:** ค้นหารูปแบบการ Import ที่ผิดกฎระเบียบของ Monorepo
2.  **Version Consistency:** เปรียบเทียบเวอร์ชันของ Library หลักทั่วทั้ง Workspace เพื่อป้องกันความขัดแย้ง
3.  **Circular Detection:** วิเคราะห์กราฟความสัมพันธ์เพื่อหาจุดที่มีการอ้างอิงเป็นวงกลม
4.  **Phantom Scan:** ตรวจสอบการเรียกใช้ Module ที่ไม่มีอยู่ในรายการ Dependency

---

## Getting Started

คุณสามารถเริ่มต้นใช้งานระบบจำลองและตรวจสอบได้ตามขั้นตอนดังนี้:

### 1. การจำลองความผิดพลาด (Inject Chaos)
รันคำสั่งนี้เพื่อฉีดความผิดพลาดทุกรูปแบบเข้าสู่ระบบเพื่อทดสอบ:
```bash
cd next-monorepo && ./scripts/monorepo-chaos-simulation.sh --all
```

### 2. การตรวจสอบระบบ (Run Audit)
รันคำสั่งนี้เพื่อตรวจจับความผิดพลาดที่เกิดขึ้นและรับรายงานผลการตรวจสอบ:
```bash
cd next-monorepo && ./scripts/monorepo-integrity-auditor.sh
```

### 3. การคืนค่าระบบ (Restore Standards)
รันคำสั่งนี้เพื่อล้างความผิดพลาดทั้งหมดและกลับสู่สถานะมาตรฐานที่ถูกต้อง:
```bash
cd next-monorepo && ./scripts/monorepo-chaos-simulation.sh --restore
```

### 4. การปรับปรุงมาตรฐานเวอร์ชัน (Standardize Versions)
รันคำสั่งนี้เพื่อปรับจูนเวอร์ชันของ Library หลักให้เท่ากันทั้ง Workspace (React 19.2.4, Next 16.2.2, TS 5.9.2):
```bash
cd next-monorepo && ./scripts/monorepo-standardizer.sh
```

### 5. การทำความสะอาดพื้นที่ทำงาน (Workspace Cleanup)
รันคำสั่งนี้เพื่อลบไฟล์สำรอง (.bak) และไฟล์ชั่วคราวทั้งหมด:
```bash
cd next-monorepo && ./scripts/monorepo-cleanup.sh
```

---

## Elite Automation: AI Review & Fix

ระบบนี้รองรับการตรวจสอบและแก้ไขโค้ดอัตโนมัติ (Pickle Rick Mode) เพื่อให้มั่นใจว่าทุกการเปลี่ยนแปลงเป็นไปตามมาตรฐานสูงสุดของ Monorepo:

### 1. การตรวจสอบและแก้ไขอัตโนมัติ (Staged Changes)
หากคุณมีการแก้ไขโค้ดและ `git add` ไว้แล้ว สามารถใช้คำสั่งนี้เพื่อให้ AI ช่วยรีวิวและแก้บั๊ก/จัดโครงสร้างให้ถูกหลักสถาปัตยกรรมได้ทันที:
```bash
gemini monorepo-fix staged
```

### 2. การรีวิว Pull Request
สำหรับทีมงานที่ใช้ GitHub สามารถสั่งให้ AI ตรวจสอบและแก้ไข PR ได้โดยตรง:
```bash
gemini monorepo-fix <PR_NUMBER>
```

---

## Technical Architecture

<details>
<summary>รายละเอียดการทำงานเชิงลึก</summary>

- **Language:** สคริปต์หลักเขียนด้วย Bash และใช้ Node.js Runtime ในการประมวลผล JSON/Graph
- **Safety:** ระบบจำลองจะสร้างไฟล์ `.bak` สำรองข้อมูลไว้เสมอเพื่อให้มั่นใจว่าสามารถ Restore กลับมาได้ 100%
- **Standardization:** ระบบ Standardizer จะรักษาความสอดคล้องของ Dependency ทั่วทั้งองค์กร
- **Extensibility:** คุณสามารถเพิ่มกฎการตรวจสอบใหม่ๆ ได้ใน `monorepo-integrity-auditor.sh` โดยใช้ Logic การค้นหาผ่าน `grep` หรือ `node`

</details>

<!-- prettier-ignore -->
> [!IMPORTANT]
> ห้ามรันการจำลองในสภาพแวดล้อม Production ระบบนี้ออกแบบมาเพื่อการทดสอบใน Development Environment เท่านั้น
