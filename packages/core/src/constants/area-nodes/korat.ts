import { defineAreaNode } from "./node-factory";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Industrial Standard)
import { catalogService } from "../services/catalog";

export const koratNode = defineAreaNode(catalogService, {
  // --- Basic Identity ---
  slug: "korat",
  province: "นครราชสีมา",
  region: "Northeast",
  tier: 1,

  title: "วางระบบเว็บไซต์ โคราช | เว็บไซต์โรงงานและแคตตาล็อกสินค้าอุตสาหกรรม",
  description:
    "บริการวางระบบเว็บไซต์โรงงานในโคราช เปลี่ยนแคตตาล็อกเล่มหนาเป็นระบบออนไลน์ ค้นหาง่ายด้วย Part Number รองรับงานจัดซื้อ B2B และนิคมอุตสาหกรรม",

  longDescription:
    "โคราชคือศูนย์กลางอุตสาหกรรมและประตูสู่อีสาน ธุรกิจที่นี่ต้องการความรวดเร็วและความแม่นยำ " +
    "นายเอ็มซ่ามากส์ ให้บริการออกแบบเว็บไซต์เชิงวิศวกรรม (Engineering Web Design) ที่เน้นการจัดระเบียบข้อมูลสินค้าจำนวนมาก (SKU) ให้ค้นหาง่าย " +
    "ลดความผิดพลาดในการสั่งซื้อ และช่วยให้ทีมขายของคุณปิดดีลกับฝ่ายจัดซื้อของโรงงานในนวนครและสุรนารีได้ง่ายขึ้น",

  // --- Visual & Location ---
  heroImage: "/images/areas/korat-monolith.webp",
  coordinates: { lat: 14.9759, lng: 102.1177 },
  districts: [
    "เมืองนครราชสีมา",
    "ปากช่อง",
    "สีคิ้ว",
    "สูงเนิน",
    "ขามทะเลสอ",
    "โชคชัย",
    "นิคมอุตสาหกรรมนวนคร",
    "นิคมอุตสาหกรรมสุรนารี",
  ],

  // [DNA_OVERRIDE]: ปรับแต่งเพื่อให้หน้าโคราชเน้น "ประสิทธิภาพและการจัดระเบียบข้อมูล"
  layoutOrder: [
    "hero",
    "insight", // วิเคราะห์ Pain Point โรงงาน
    "catalog", // โชว์ระบบแคตตาล็อกที่เป็นจุดเด่น
    "promotions",
    "matrix", // Roadmap & Terminal
    "success", // บทพิสูจน์ความสำเร็จ B2B
    "faq",
    "portal",
  ],

  regionalRoadmap: [
    {
      step: "01",
      title: "Digital Catalog Audit",
      description:
        "จัดระเบียบข้อมูลสินค้า (SKU) และ Part Number เพื่อวางโครงสร้าง Database ที่ค้นหาง่ายที่สุด",
    },
    {
      step: "02",
      title: "B2B Inquiry Gateway",
      description:
        "ติดตั้งระบบขอใบเสนอราคา (RFQ) ที่เชื่อมต่อกับระบบหลังบ้านของโรงงานเพื่อความรวดเร็วในการปิดดีล",
    },
    {
      step: "03",
      title: "Industrial SEO Layering",
      description:
        "วางรากฐานคีย์เวิร์ดเฉพาะทางเพื่อดักจับ Traffic จากฝ่ายจัดซื้อโรงงานทั่วเขตโคราชและอีสาน",
    },
  ],

  // --- Localized Benefits ---
  benefits: [
    "Structured Data: จัดระเบียบข้อมูลสินค้าแบบ Matrix รองรับการค้นหา Part Number หรือ Spec สินค้าได้แม่นยำ",
    "Zero-Latency Search: ระบบ Cache สินค้าที่ช่วยให้ฝ่ายจัดซื้อค้นหารายการสินค้าหลักหมื่นได้ในเสี้ยววินาที",
    "Site-Ready UI: ดีไซน์ที่เน้นความชัดเจน (High Legibility) อ่านสเปกง่ายแม้เปิดดูผ่านมือถือกลางไซต์งานก่อสร้าง",
  ],

  // --- Core Features (Industrial Specific) ---
  coreFeatures: [
    {
      title: "Part Number Search",
      description: "ระบบค้นหาอัจฉริยะที่เข้าใจรหัสสินค้า (SKU) และสเปกทางวิศวกรรม",
      icon: "Search",
    },
    {
      title: "B2B RFQ Portal",
      description: "ระบบสมาชิกสำหรับคู่ค้า (Dealer) เพื่อล็อกอินดูราคาส่งและเช็คสต็อก Real-time",
      icon: "ShieldCheck",
    },
    {
      title: "Spec Sheet Hub",
      description: "ศูนย์รวมไฟล์ PDF และ Data Sheet ให้ลูกค้าดาวน์โหลดได้เอง ลดงานส่งไฟล์ของเซลล์",
      icon: "FileDown",
    },
  ],

  // --- Localized FAQs ---
  faqs: [
    {
      question: "ระบบรองรับการเชื่อมต่อ ERP ของโรงงานหรือไม่?",
      answer:
        "ทำได้ครับ เราสามารถพัฒนา API เชื่อมต่อกับระบบบัญชีหรือ ERP (เช่น SAP, Express) เพื่อดึงสต็อกมาแสดงผลได้ครับ",
    },
    {
      question: "นัดคุยงานที่โรงงานในเขตอุตสาหกรรมได้ไหม?",
      answer:
        "ได้ครับ ผมพร้อมเข้าไปดูหน้างานจริงในเขตนวนคร, สุรนารี หรือสูงเนิน เพื่อออกแบบระบบให้ตรงโจทย์การใช้งานที่สุดครับ",
    },
    {
      question: "สินค้ามีสเปกซับซ้อน (ขนาด, สี, รุ่น) ทำได้ไหม?",
      answer:
        "ทำได้สบายมากครับ ระบบของเราออกแบบมาเพื่อจัดการ Product Variant ที่ซับซ้อนโดยเฉพาะครับ",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "Logistics Gateway & Industry - ความเชื่อมั่น' และ 'สเปกที่ถูกต้อง' เว็บไซต์ที่ข้อมูลชัดเจนจะช่วยลดเวลาการตอบคำถามลูกค้าได้มหาศาล",
    technicalApproach:
      "เน้นระบบ Search และ Filtering ที่แม่นยำ เพื่อให้ฝ่ายจัดซื้อหาสินค้าเจอเร็วที่สุด",
    localStrength:
      "เข้าใจศัพท์เทคนิคและกระบวนการทำงานของโรงงาน สามารถจัดหมวดหมู่สินค้าได้ถูกต้องตามหลักวิศวกรรม",
    nicheIndustries: [
      "อุตสาหกรรมผลิตชิ้นส่วน (Heavy Machinery)",
      "ร้านขายเหล็กและวัสดุก่อสร้าง (Construction Material)",
      "โลจิสติกส์และคลังสินค้า (Logistics)",
      "เครื่องมือช่างและฮาร์ดแวร์ (Hardware Tools)",
    ],
    painPoints: [
      "ลูกค้าโทรมาถามสเปกเดิมๆ ซ้ำๆ",
      "ส่งไฟล์แคตตาล็อก PDF ทางไลน์แล้วลูกค้าหาของไม่เจอ",
      "สต็อกหน้าเว็บไม่ตรงกับของจริง",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 4.9,
      reviewCount: 99,
      localClient: "โรงงานเหล็กรายใหญ่ อ.สีคิ้ว",
    },
    regionalPricing: {
      startPrice: `${catalogService.price} บาท`,
      timeline: "20-30 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานเหล็กสีคิ้ว",
      result: "สร้าง Digital Catalog 2,000 รายการ ช่วยลดเวลาตอบคำถามลูกค้าทางไลน์ได้ 60%",
    },
    hyperLocalKeywords: [
      "วางระบบเว็บไซต์ นวนคร โคราช",
      "ออกแบบเว็บ ปากช่อง",
      "ทำเว็บโรงงาน สูงเนิน",
      "รับทำ SEO โคราช",
    ],
    promotions: [
      {
        title: "Logistics Hub Digitalization (Korat)",
        description:
          "สิทธิพิเศษสำหรับธุรกิจคลังสินค้าและโรงงาน รับฟรีบริการเชื่อมต่อระบบสต็อกสินค้าออนไลน์มูลค่า 12,000 บาท เพื่อความโปร่งใสของข้อมูล B2B",
        discount: "Free Stock Sync Setup",
        expiry: "2026-12-31",
      },
    ],
    regionalVisuals: {
      banner: "/images/areas/korat-monolith.webp",
      gallery: ["/images/cases/case-sme-recovery.webp", "/images/services/catalog-node.webp"],
    },
  },

  priority: 99,
  keywords: [
    "วางระบบเว็บไซต์ โคราช",
    "ทำเว็บโรงงาน นครราชสีมา",
    "ระบบแคตตาล็อกออนไลน์",
    "วางระบบเว็บไซต์ B2B",
    "Web Design Korat",
  ],
});
