/**
 * [SERVICE_NODE]: LOCAL_AUTHORITY_ENGINE v19.0.0 (CIVIC_CORE)
 * [STRATEGY]: Hyper-Local Dominance | Inclusive UX | Gov-Cloud Standards
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "../../types";

export const localAuthorityService: TemplateMasterData = {
  id: "AEM-SVC-LS-10",
  title: "Civic Digital Infrastructure | ยกระดับความน่าเชื่อถือท้องถิ่นสู่มาตรฐานสากล",
  description:
    "โซลูชันเพื่อหน่วยงานท้องถิ่นและธุรกิจ SME ที่ต้องการครองพื้นที่บนโลกดิจิทัล เปลี่ยนภาพลักษณ์แบบเดิมสู่สถาปัตยกรรมเว็บไซต์ที่โปร่งใส เข้าถึงง่าย และยึดอันดับหนึ่งบน Google Maps เพื่อให้บริการประชาชนและลูกค้าได้อย่างแม่นยำ",
  image: "/images/services/local-node.webp",
  templateSlug: "local-authority",
  category: "business",

  price: "15,900",
  priceValue: 15900,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",

  theme: {
    mode: "light",
    primary: "#047857", // Emerald 700
    secondary: "#064e3b", // Emerald 900
    background: "#fafafa",
    foreground: "#09090b",
    accent: "#d97706", // Amber 600
    gradient: "from-[#047857]/10 via-transparent to-transparent",
  },

  clientTrust:
    "Civic Standard: มาตรฐานความปลอดภัยข้อมูลภาครัฐและโครงสร้างรองรับการประเมิน ITA/OIT 100%",

  benefits: [
    "Community Dominance UX: ดีไซน์ที่ออกแบบมาเพื่อคนทุกช่วงวัย (Inclusive Design) ใช้งานง่ายบนมือถือ และโหลดไวแม้ในพื้นที่สัญญาณต่ำ",
    "Local SEO Authority: ยึดพื้นที่การค้นหาในจังหวัดและตำบลของคุณเหนือคู่แข่ง ด้วยสถาปัตยกรรม Schema Local Business เชิงลึก",
    "Transparency Engine: ระบบจัดการข้อมูลข่าวสารและเอกสารทางราชการที่โปร่งใส ตรวจสอบได้ง่าย สร้างความเชื่อมั่นให้ประชาชน",
  ],

  coreFeatures: [
    {
      title: "Smart E-Service Node",
      description:
        "ระบบรับเรื่องราวร้องทุกข์และบริการออนไลน์ที่ช่วยลดขั้นตอนเอกสาร เพิ่มประสิทธิภาพการทำงานของเจ้าหน้าที่",
      icon: "ShieldCheck",
    },
    {
      title: "GMB Geo-Tagging",
      description:
        "บริการปรับจูนหมุด Google Maps ให้แม่นยำและติดอันดับต้นๆ เมื่อมีการค้นหาบริการในพื้นที่ของคุณ",
      icon: "MapPin",
    },
    {
      title: "Compliant CMS Hub",
      description:
        "ระบบจัดการเนื้อหามาตรฐานสูง รองรับการประกาศจัดซื้อจัดจ้างและแผนพัฒนาท้องถิ่นตามระเบียบพัสดุ",
      icon: "FileText",
    },
  ],

  faqs: [
    {
      question: "ระบบรองรับการประเมิน ITA (คุณธรรมและความโปร่งใส) ไหม?",
      answer:
        "รองรับสมบูรณ์แบบครับ เราจัดเตรียมเมนูและโครงสร้างไฟล์ให้สอดคล้องกับตัวชี้วัดการประเมินของ สตง. และ ป.ป.ช. ครับ",
    },
    {
      question: "เจ้าหน้าที่ที่ไม่มีทักษะคอมพิวเตอร์จะใช้งานได้ไหม?",
      answer:
        "ใช้งานได้แน่นอนครับ เราออกแบบหน้า Admin ให้เหมือนการโพสต์โซเชียลมีเดีย พร้อมคู่มือภาษาไทยและทีม Support ตลอดอายุสัญญาครับ",
    },
    {
      question: "สามารถเบิกจ่ายตามระเบียบพัสดุราชการได้ไหม?",
      answer:
        "ได้ครับ เรามีนิติบุคคลจดทะเบียนถูกต้อง สามารถออกใบเสนอราคา ใบแจ้งหนี้ และดำเนินการตามงวดงานราชการได้ทุกขั้นตอนครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์ อบต เทศบาล 2026",
    "วางระบบ Local SEO ธุรกิจท้องถิ่น",
    "ออกแบบเว็บไซต์หน่วยงานรัฐ",
    "จ้างทำเว็บติด Google Maps",
    "สถาปัตยกรรมเว็บไซต์ Civic Tech",
  ],

  priority: 3,
  isFeatured: true,
};
