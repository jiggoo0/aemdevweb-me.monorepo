/**
 * [SERVICE_NODE]: CORPORATE_IDENTITY_HUB v19.0.0 (ENTERPRISE_HARDENED)
 * [STRATEGY]: B2B Authority | High-Fidelity UX | Identity Sovereignty
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "../../types";

export const corporateService: TemplateMasterData = {
  id: "AEM-SVC-CP-03",
  title: "Enterprise Corporate Infrastructure | ยกระดับภาพลักษณ์ธุรกิจด้วยสถาปัตยกรรมความเร็วสูง",
  description:
    "ไม่ใช่แค่เว็บไซต์ แต่คือโครงสร้างพื้นฐานดิจิทัลที่ออกแบบมาเพื่อความน่าเชื่อถือระดับเอ็นเตอร์ไพรส์ ผสมผสานดีไซน์ระดับสากลเข้ากับวิศวกรรม Next.js 16 เพื่อสร้าง 'Sovereignty' ให้กับตัวตนทางธุรกิจของคุณบนโลกออนไลน์",
  image: "/images/services/corporate-node.webp",
  templateSlug: "corporate",
  category: "business",

  price: "24,500",
  priceValue: 24500,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",

  theme: {
    mode: "system",
    primary: "#0f172a", // Slate 900
    secondary: "#334155", // Slate 700
    background: "#ffffff",
    foreground: "#0f172a",
    accent: "#2563eb", // Blue 600
    gradient: "from-[#0f172a]/5 via-transparent to-transparent",
  },

  clientTrust:
    "Authorized Infrastructure: มาตรฐานความปลอดภัยระดับ ISO และสถาปัตยกรรมที่รองรับการขยายตัว 100%",

  benefits: [
    "Corporate Sovereignty: ควบคุมตัวตนดิจิทัลของคุณด้วยระบบที่ทนทานต่อการโจมตีและโหลดไวที่สุดในอุตสาหกรรม",
    "Zero-Friction UX: มอบประสบการณ์การเข้าชมที่ลื่นไหลระดับ 60fps เพิ่มความพึงพอใจและโอกาสในการเป็นคู่ค้า",
    "E-E-A-T Optimized: โครงสร้างข้อมูลที่ส่งสัญญาณความเชี่ยวชาญ (Expertise) ไปยังฐานข้อมูล Google และ AI โดยตรง",
  ],

  coreFeatures: [
    {
      title: "Hardened Security Node",
      description:
        "ระบบความปลอดภัยขั้นสูงที่ป้องกันช่องโหว่พื้นฐาน 100% พร้อมการเข้ารหัสข้อมูลมาตรฐานสากล",
      icon: "ShieldCheck",
    },
    {
      title: "Investor-Grade Newsroom",
      description:
        "ระบบจัดการข่าวสารและประกาศที่ออกแบบมาเพื่อความโปร่งใสและสร้างความเชื่อมั่นให้นักลงทุน",
      icon: "Building2",
    },
    {
      title: "Semantic SEO Core",
      description:
        "โครงสร้างพื้นฐานที่เข้าใจความหมายของเนื้อหา ช่วยให้แบรนด์ขึ้นแท่นเป็นเบอร์หนึ่งในกลุ่มอุตสาหกรรม",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "ทำไมบริษัทระดับมหาชนถึงควรใช้ระบบนี้?",
      answer:
        "เพราะระบบเราถูกสร้างบนสถาปัตยกรรม Next.js ที่แยก Content ออกจาก Code ทำให้ปลอดภัยจากการเจาะระบบแบบเดิมๆ และโหลดไวระดับมิลลิวินาทีครับ",
    },
    {
      question: "รองรับการเชื่อมต่อ API ขององค์กรไหม?",
      answer:
        "รองรับสมบูรณ์แบบครับ เราออกแบบระบบให้เป็น API-First พร้อมเชื่อมต่อกับ CRM หรือ ERP เดิมของคุณได้ทันที",
    },
    {
      question: "การดูแลรักษาในระยะยาวเป็นอย่างไร?",
      answer:
        "เรามีระบบ Monitoring ตลอด 24 ชม. พร้อมอัปเดต Security Patch อัตโนมัติ เพื่อให้ธุรกิจของคุณรันได้อย่างต่อเนื่องไม่มีสะดุดครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์องค์กรระดับพรีเมียม",
    "Enterprise Web Development Thailand",
    "Next.js Corporate Architecture",
    "วางระบบ Digital Branding องค์กร",
    "สถาปัตยกรรมเว็บไซต์ความเร็วสูง",
  ],

  priority: 2,
  isFeatured: true,
};
