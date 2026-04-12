# `@repo/seo` - Entity Linking Hub & E-E-A-T Accelerator

แพ็กเกจนี้ทำหน้าที่เป็น **"ศูนย์กลางการจัดการ SEO ขั้นสูง"** สำหรับระบบนิเวศ UNLINK โดยเน้นการสร้างความน่าเชื่อถือ (Authoritativeness) ผ่านการเชื่อมโยงอัตลักษณ์ (Entity Linking) ระหว่างบุคคลและองค์กร

## 📌 จุดประสงค์ (Purpose)

- **Entity Linking (The Power Couple):** เชื่อมโยงข้อมูลระหว่าง `me.aemdevweb.com` (Person) และ `aemdevweb.com` (Organization) เพื่อให้ Google Search Bot เข้าใจโครงสร้างความสัมพันธ์ของแบรนด์
- **E-E-A-T Signal Boosting:** เสริมสร้างสัญญาณความเชี่ยวชาญ (Expertise) และความน่าเชื่อถือ (Trustworthiness) ผ่านเทคนิค JSON-LD Structured Data
- **Identity Signature:** จัดการ "ลายเซ็นอัตลักษณ์" (Brand Name + First & Last Name ทั้งไทยและอังกฤษ) เพื่อสร้างความสอดคล้อง (Consistency) ทั่วทั้งระบบ

## 🏗 โครงสร้างภายใน (Structure)

```text
packages/seo/src/
├── index.ts              # จุดส่งออกหลัก และตัวจัดการ BRAND_IDENTITY
├── JsonLd.tsx            # คอมโพเนนต์พื้นฐานสำหรับใส่ข้อมูล JSON-LD ลงในหน้าเว็บ
├── ReputationShield.tsx  # คอมโพเนนต์หลักสำหรับการทำ Entity Linking (Person + Org)
└── schemas.ts            # รวมโครงสร้าง (Schemas) สำเร็จรูปสำหรับงาน SEO ต่างๆ
```

## 🚀 ฟีเจอร์หลัก (Key Features)

### 1. ลายเซ็นอัตลักษณ์ (`BRAND_IDENTITY`)

รวบรวมคีย์เวิร์ดสำคัญที่ใช้ในการระบุตัวตนบุคคลและแบรนด์อย่างเป็นระบบ

```typescript
import { BRAND_IDENTITY } from "@repo/seo";

// ดึงลายเซ็นอัตลักษณ์รวม (แบรนด์ + ชื่อจริงไทย + ชื่อจริงอังกฤษ)
const keywords = BRAND_IDENTITY.getSignatureKeywords();
```

### 2. Entity Linking Shield (`ReputationShield`)

คอมโพเนนต์ระดับสูงที่ควรวางไว้ใน `RootLayout` ของทุกแอป เพื่อสร้างสัญญาณ E-E-A-T อัตโนมัติ

```typescript
import { ReputationShield } from "@repo/seo";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReputationShield
          authorName="AEMZA MACKS"
          publisherName="AEM DEV WEB"
        />
        {children}
      </body>
    </html>
  );
}
```

### 3. Custom JSON-LD (`JsonLd`)

คอมโพเนนต์พื้นฐานสำหรับการใส่ Schema.org ในรูปแบบ JSON-LD ลงในส่วนท้ายของหน้าเว็บ (React 19 Ready)

```typescript
import { JsonLd } from "@repo/seo";

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "วิธีทำ SEO ระดับท้องถิ่น",
  // ...
};

return <JsonLd data={articleData} id="article-schema" />;
```

## 🛠 การติดตั้งและการใช้งาน (Installation & Usage)

1. เพิ่มแพ็กเกจใน `package.json` ของแอป:

```json
"dependencies": {
  "@repo/seo": "workspace:*"
}
```

2. ตั้งค่าชื่อและข้อมูลแบรนด์ใน `@repo/core` (ซึ่ง `@repo/seo` จะดึงมาใช้อัตโนมัติผ่าน `SHARED_SITE_CONFIG`)

3. นำไปใช้งานในหน้าเว็บหรือ Layout เพื่อสร้างสัญญาณ SEO

## 👨‍💻 ผู้ดูแล (Maintainer)

- **AEMZA MACKS** (Lead Architect)
