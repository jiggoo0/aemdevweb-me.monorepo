/**
 * [SERVICE_NODE]: SARABURI_INDUSTRIAL_GATEWAY v18.0.1
 * [STRATEGY]: Heavy Industry | Logistics | Dynamic Inheritance
 */

import { defineAreaNode } from "./node-factory";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง
import { catalogService } from "../services/catalog";

export const saraburiNode = defineAreaNode(catalogService, {
  // --- Basic Identity ---
  slug: "saraburi",
  tier: 2,
  province: "สระบุรี",
  region: "Central",
  priority: 94,

  title:
    "รับทำเว็บไซต์ สระบุรี | โหลดเร็วพิเศษ ระบบเว็บไซต์และ SEO สำหรับอุตสาหกรรมก่อสร้างและโลจิสติกส์",
  description:
    "บริการวางระบบเว็บไซต์และแคตตาล็อกสินค้าอุตสาหกรรมในสระบุรี เจาะกลุ่มโรงงานปูนซีเมนต์และวัสดุก่อสร้างย่านแก่งคอย-หนองแค เน้นความโปรระดับ B2B โหลดไว และระบบ RFQ ที่แม่นยำ",

  longDescription:
    "สระบุรี 'ประตูสู่ภาคอีสาน' และหัวใจของอุตสาหกรรมก่อสร้างไทย " +
    "เราให้บริการออกแบบเว็บไซต์เชิงวิศวกรรมสำหรับโรงงานผลิตและธุรกิจขนส่งที่ต้องการแสดงศักยภาพการจัดส่งสู่ระดับสากล " +
    "เราเน้นโครงสร้างข้อมูลสินค้า (SKU) ที่ค้นหาง่าย และการทำ Local Entity Mapping เพื่อให้ธุรกิจของคุณครองอันดับหนึ่งในสายตาฝ่ายจัดซื้อทั่วประเทศ",

  // --- Visual & Location ---
  heroImage: "/images/areas/universal-node.webp",
  coordinates: { lat: 14.5289, lng: 100.9101 },
  districts: ["เมืองสระบุรี", "ย่านธุรกิจสำคัญ", "ย่านการค้า"],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "ศูนย์กลางธุรกิจและการค้า - สเปกที่ถูกต้อง' และ 'ความมั่นคงของบริษัท' เว็บไซต์ที่แสดงข้อมูลเทคนิคครบถ้วนและระบบความปลอดภัยสูงจะได้รับเลือกก่อนเสมอ",
    technicalApproach:
      "เน้นระบบ Search สำหรับ Part Number และสเปกสินค้าอุตสาหกรรม พร้อมการทำ SEO สำหรับตลาดอุตสาหกรรมหนัก",
    localStrength:
      "เข้าใจความซับซ้อนของธุรกิจวัสดุก่อสร้างและระบบโลจิสติกส์ในเขตสระบุรี พร้อมบริการที่ปรึกษาเชิงเทคนิคถึงหน้างาน",
    nicheIndustries: [
      "โรงงานผลิตปูนซีเมนต์และคอนกรีตผสมเสร็จ",
      "เหมืองหินและโรงโม่หิน (Industrial Rock)",
      "ศูนย์กระจายสินค้าวัสดุก่อสร้างรายใหญ่",
      "ธุรกิจขนส่งและชิปปิ้งข้ามภูมิภาค",
    ],
    painPoints: [
      "เว็บไซต์เดิมดูเก่าไม่สะท้อนมาตรฐานสากลของบริษัท",
      "หาข้อมูลใบรับรองมาตรฐาน (ISO/TIS) บนหน้าเว็บได้ยาก",
      "ระบบติดต่อประสานงานฝ่ายจัดซื้อล่าช้าและไม่มีประสิทธิภาพ",
    ],
    competitorLevel: "medium",
    socialProof: {
      rating: 5.0,
      reviewCount: 148,
      localClient: "ผู้ผลิตวัสดุก่อสร้างรายใหญ่ ย่านหนองแค",
    },
    regionalPricing: {
      startPrice: `${catalogService.price} บาท`,
      timeline: "14-25 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงโม่หินสระบุรี",
      result: "สร้างระบบแคตตาล็อกสินค้าและ SEO ใหม่ ยอด RFQ จากโครงการก่อสร้างภาครัฐเพิ่มขึ้น 200%",
    },
    hyperLocalKeywords: [
      "วางระบบเว็บไซต์ แก่งคอย",
      "จ้างทำเว็บโรงงาน สระบุรี",
      "Construction SEO Thailand",
      "ทำแคตตาล็อกสินค้าก่อสร้าง",
    ],
    promotions: [
      {
        title: "B2B Catalog Transformation",
        description:
          "สิทธิพิเศษสำหรับโรงงานวัสดุก่อสร้าง รับฟรีระบบ Digital Catalog รองรับ SKU หลักพันรายการ พร้อมระบบ RFQ มูลค่า 12,000 บาท",
        discount: "Free Catalog & RFQ Setup",
        expiry: "2026-12-31",
      },
    ],
    regionalVisuals: {
      banner: "/images/areas/universal-node.webp",
      gallery: [
        "/images/services/catalog-node.webp",
        "/images/case-studies/industrial-catalog.webp",
      ],
    },
  },

  faqs: [
    {
      question: "ระบบรองรับการดาวน์โหลดไฟล์ Spec Sheet (PDF) ไหม?",
      answer:
        "รองรับครับ เราออกแบบปุ่ม Download ที่เห็นชัดเจนและจัดการไฟล์เป็นหมวดหมู่ เพื่อให้ฝ่ายจัดซื้อเข้าถึงข้อมูลวิศวกรรมได้ง่ายที่สุดครับ",
    },
  ],

  keywords: [
    "วางระบบเว็บไซต์ สระบุรี",
    "ทำเว็บโรงงาน แก่งคอย",
    "Web Design Saraburi",
    "Construction Industry SEO",
  ],

  isTourismHeavy: false,
  marketSaturation: 78,
  regionalLatency: 11,

  regionalRoadmap: [
    {
      step: "01",
      title: "Regional Market Analysis",
      description:
        "วิเคราะห์พฤติกรรมการค้นหาและคู่แข่งในพื้นที่เพื่อวางโครงสร้างเว็บไซต์ที่ตอบโจทย์ท้องถิ่น",
    },
    {
      step: "02",
      title: "High-Performance Deployment",
      description:
        "ติดตั้งระบบเว็บไซต์ที่โหลดไวและรองรับ SEO เชิงลึกเพื่อสร้างความได้เปรียบทางเทคโนโลยี",
    },
    {
      step: "03",
      title: "Strategic Growth & Scaling",
      description:
        "ขยายฐานลูกค้าด้วย Content Marketing และระบบปิดการขายที่มีประสิทธิภาพเพื่อความเป็นผู้นำในภูมิภาค",
    },
  ],
});
