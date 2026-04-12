# 🌐 AEM Web Application (apps/web)

**Institutional Hub | P-SEO Engine | Portfolio Registry**

แอปพลิเคชันหลักของระบบนิเวศ AEM ออกแบบมาเพื่อสร้างความเชื่อถือ (Authority) และการยึดครองอันดับบน AI Search (GEO)

## 🚀 คุณสมบัติหลัก (Features)
- **Next.js 16 (RSC):** ใช้ระบบ Server Components 100% เพื่อความเร็วสูงสุด
- **Dynamic Province Nodes:** ระบบ Routing อัจฉริยะรองรับ 77 จังหวัดทั่วไทย
- **Institutional Identity:** หน้าประวัติ Chief Architect และ Portfolio ที่เชื่อมโยงกับ Entity อื่นๆ
- **Partial Prerendering (PPR):** ผสมผสานความเร็วของ Static และความสดใหม่ของ Dynamic Content

## 🏗️ โครงสร้างภายใน (Structure)
- `app/(marketing)`: หน้าข้อมูลสถาบัน (About, Me, Services, Portfolio)
- `app/[province]`: หน้า Landing Page รายจังหวัดที่ดึงข้อมูลจาก `@repo/core`
- `content/blog`: คลังบทความ MDX สำหรับการทำ SEO Authority

## 🛠️ การพัฒนา (Development)
```bash
pnpm dev # รันแอปพลิเคชันบนพอร์ต 3001
pnpm build # สร้าง Static Pages ทั้งหมด (130+ หน้า)
```

---
*Governance by AEM Strategic Protocol*
