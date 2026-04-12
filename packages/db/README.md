# 📦 AEM Database Facade (@repo/db)

**Supabase Client | Data Registry | Model Definitions**

ตัวกลางการเข้าถึงข้อมูล (Data Access Layer) เพื่อความปลอดภัยและความเสถียรสูงสุด

## 📂 หน้าที่สำคัญ (Responsibilities)

- **Supabase Client:** ระบบเชื่อมต่อฐานข้อมูลที่รองรับทั้ง Client และ Server environments
- **Data Registry:** ฟังก์ชันดึงข้อมูลแบบ Facade (getProjects, getPosts, getProvinceData)
- **Model Types:** ส่งออก TypeScript Types ที่สอดคล้องกับ Database Schema 100%

## 🛠️ การใช้งาน (Usage)

```typescript
import { getProjects, type Project } from "@repo/db";
const { data: projects } = await getProjects();
```

---

_Maintained by AEM Data Registry_
