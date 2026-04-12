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
        en: data.slug || "unknown" 
      },
      ...data
    } as AreaNode;
  }
}
```

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
    const { data } = await supabase.from('provinces').select('*').eq('slug', slug).single();
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
  generateMetadata(node: AreaNode) { /* เน้น B2B Keywords */ }
}

class TourismSEO implements SEOStrategy {
  generateMetadata(node: AreaNode) { /* เน้นรูปภาพและสถานที่ */ }
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
