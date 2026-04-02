/**
 * [SERVICE_NODE]: CATALOG_ENGINEERING_HUB v19.0.0 (B2B_PRECISION)
 * [STRATEGY]: SKU Velocity | Technical Authority | Procurement-Centric UX
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "../../types";

export const catalogService: TemplateMasterData = {
  id: "AEM-SVC-CT-05",
  title: "Precision B2B Catalog Hub | เปลี่ยนฐานข้อมูลสินค้าเป็นเครื่องมือทำกำไร",
  description:
    "โซลูชันเพื่อโรงงานและผู้นำเข้าอุตสาหกรรม เปลี่ยนความซับซ้อนของ SKU นับพันให้ค้นหาง่ายในพริบตา ด้วยสถาปัตยกรรมเว็บไซต์ที่เน้นความแม่นยำทางเทคนิค และระบบ RFQ ที่ช่วยให้ฝ่ายจัดซื้อปิดดีลได้เร็วขึ้น 3 เท่า",

  image: "/images/services/catalog-node.webp",
  templateSlug: "catalog",
  category: "business",

  price: "29,900",
  priceValue: 29900,
  currency: "THB",
  unit: "เริ่มต้น / ระบบ",

  theme: {
    mode: "light",
    primary: "#334155", // Slate 700
    secondary: "#0f172a", // Slate 900
    background: "#f8fafc", // Industrial Slate
    foreground: "#1e293b",
    accent: "#f97316", // Safety Orange
    gradient: "from-[#334155]/10 via-transparent to-transparent",
  },

  clientTrust:
    "Engineering Grade: โครงสร้างข้อมูลที่รองรับสเปกสินค้าเชิงลึกและ Search Intent ของกลุ่มวิศวกรโรงงาน",

  benefits: [
    "SKU Velocity UX: ระบบนำทางและตัวกรองอัจฉริยะที่ช่วยให้ลูกค้าเจอสินค้าที่ต้องการใน 2 คลิก แม้จะมีสินค้าเป็นหมื่นรายการ",
    "Procurement-Ready Flow: ออกแบบมาเพื่ออำนวยความสะดวกฝ่ายจัดซื้อ ด้วยปุ่มขอใบเสนอราคาและดาวน์โหลด Data Sheet ที่ชัดเจน",
    "B2B Authority SEO: ยึดครองอันดับ Google ด้วยคีย์เวิร์ดรหัสสินค้า (Part Number) และสเปกทางเทคนิคที่คู่แข่งเข้าไม่ถึง",
  ],

  coreFeatures: [
    {
      title: "Technical Spec Matrix",
      description:
        "ระบบแสดงตารางเปรียบเทียบคุณสมบัติทางเทคนิคที่ละเอียดและอ่านง่าย รองรับการตัดสินใจเชิงวิศวกรรม",
      icon: "Search",
    },
    {
      title: "Bulk RFQ Generator",
      description:
        "ระบบตะกร้าสินค้าสำหรับขอราคาจำนวนมากพร้อมกัน ช่วยลดภาระงานเอกสารของฝ่ายขายและลูกค้า",
      icon: "FileText",
    },
    {
      title: "Dynamic Asset Bridge",
      description:
        "ศูนย์รวมไฟล์ PDF Catalog, 3D Model และคู่มือการใช้งานที่เชื่อมโยงกับสินค้าทุกรายการแบบอัตโนมัติ",
      icon: "FileDown",
    },
  ],

  faqs: [
    {
      question: "ระบบรองรับสินค้าที่มีตัวแปร (Variants) เยอะๆ ไหม?",
      answer:
        "รองรับสมบูรณ์แบบครับ เราออกแบบระบบ Attribute Mapping ที่สามารถจัดการขนาด สี วัสดุ หรือกำลังไฟของสินค้าแต่ละรุ่นได้อย่างเป็นระเบียบครับ",
    },
    {
      question: "สามารถนำเข้าข้อมูลจาก Excel ได้ไหม?",
      answer:
        "ได้ครับ เรามีระบบ Data Bridge ที่ช่วยให้คุณ Bulk Upload ข้อมูลสินค้าหลักหมื่นรายการได้ภายในไม่กี่วินาทีครับ",
    },
    {
      question: "ลูกค้าสามารถสั่งซื้อและจ่ายเงินออนไลน์ได้เลยไหม?",
      answer:
        "ในเวอร์ชัน Catalog จะเน้นการขอใบเสนอราคา (RFQ) ครับ แต่เราสามารถอัปเกรดเป็น Full E-Commerce ที่ตัดบัตรเครดิตได้หากธุรกิจของคุณต้องการครับ",
    },
  ],

  keywords: [
    "วางระบบ E-Catalog อุตสาหกรรม",
    "รับทำเว็บไซต์ B2B 2026",
    "ออกแบบเว็บโรงงานผลิต",
    "ระบบจัดการ SKU สินค้าจำนวนมาก",
    "เว็บขายอะไหล่เทคนิค",
  ],

  priority: 4,
  isFeatured: true,
};
