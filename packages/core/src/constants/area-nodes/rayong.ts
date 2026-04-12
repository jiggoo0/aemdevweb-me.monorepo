/**
 * [SERVICE_NODE]: RAYONG_INDUSTRIAL_HUB v18.0.1
 * [STRATEGY]: Heavy Industry | EEC Dominance | Dynamic Inheritance
 * [MARKET]: Rayong, Map Ta Phut, Ban Khai (Industrial & Energy)
 */

import { defineAreaNode } from "./node-factory";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง
import { catalogService } from "../services/catalog";

export const rayongNode = defineAreaNode(catalogService, {
  // --- Basic Identity ---
  slug: "rayong",
  tier: 2,
  province: "ระยอง",
  region: "East",
  priority: 98,

  title:
    "รับทำเว็บไซต์ ระยอง | โหลดเร็วพิเศษ ระบบเว็บไซต์และ SEO สำหรับโรงงานอุตสาหกรรมหนักและพลังงาน",
  description:
    "บริการวางระบบเว็บไซต์และแคตตาล็อกเทคนิคในระยอง เจาะกลุ่มนิคมมาบตาพุด-ปลวกแดง เน้นความปลอดภัยระดับ Enterprise โหลดไว และครองอันดับหนึ่งในใจฝ่ายจัดซื้อ B2B",

  longDescription:
    "ระยอง ศูนย์กลางพลังงานและอุตสาหกรรมปิโตรเคมีที่เป็นหัวใจสำคัญของ EEC " +
    "เราให้บริการออกแบบเว็บไซต์สำหรับโรงงานอุตสาหกรรมหนักที่ต้องการภาพลักษณ์ระดับมหาชน " +
    "เราเน้นโครงสร้างข้อมูลที่รองรับการแสดงผลสเปกเครื่องจักร (Spec Sheets) และการทำ Global Entity Mapping เพื่อให้ธุรกิจของคุณถูกค้นพบโดยคู่ค้าทั่วโลก",

  // --- Visual & Location ---
  heroImage: "/images/areas/universal-node.webp",
  coordinates: { lat: 12.6814, lng: 101.2813 },
  districts: ["มาบตาพุด", "บ้านฉาง", "ปลวกแดง"],

  // --- Context Data ---
  localContext: {
    marketInsight:
      "EEC Industrial & Sea Resources - ความโปร่งใส' และ 'มาตรฐานวิศวกรรม' เว็บไซต์ที่ข้อมูลเทคนิคครบถ้วนและระบบความปลอดภัยสูงจะได้รับการยอมรับในระดับ Executive",
    technicalApproach:
      "เน้นระบบจัดการแคตตาล็อกสำหรับสินค้าเทคนิค (Part Number Search) และการทำ SEO สำหรับตลาดอุตสาหกรรมหนัก",
    localStrength:
      "เข้าใจพลวัตของกลุ่มโรงงานปิโตรเคมีและยานยนต์ พร้อมบริการที่ปรึกษาด้าน Digital Transformation ในพื้นที่",
    nicheIndustries: [
      "อุตสาหกรรมปิโตรเคมีและพลังงาน",
      "โรงงานผลิตชิ้นส่วนยานยนต์ (EEC Zone)",
      "ศูนย์จำหน่ายวัสดุและเครื่องจักรโรงงาน",
      "ธุรกิจท่องเที่ยวและโรงแรมระดับพรีเมียม (เสม็ด/ระยอง)",
    ],
    painPoints: [
      "ภาพลักษณ์เว็บไซต์ไม่สะท้อนนวัตกรรมของบริษัท",
      "หาข้อมูลใบรับรองมาตรฐานโรงงาน (ISO/TIS) บนเว็บได้ยาก",
      "ระบบติดต่อฝ่ายจัดซื้อซับซ้อนและล่าช้า",
    ],
    competitorLevel: "high",
    socialProof: {
      rating: 5.0,
      reviewCount: 176,
      localClient: "บริษัทพลังงานข้ามชาติ ย่านมาบตาพุด",
    },
    regionalPricing: {
      startPrice: `${catalogService.price} บาท`,
      timeline: "20-35 วัน",
    },
    localSuccessStory: {
      title: "Case Study: โรงงานปิโตรเคมีระยอง",
      result:
        "วางระบบเทคนิคแคตตาล็อกและ SEO เจาะจงคีย์เวิร์ดวิศวกรรม ยอด RFQ จากคู่ค้าต่างชาติเพิ่มขึ้น 200%",
    },
    hyperLocalKeywords: [
      "วางระบบเว็บไซต์ มาบตาพุด",
      "จ้างทำเว็บโรงงาน ระยอง",
      "Industrial SEO Rayong",
      "ออกแบบเว็บอุตสาหกรรมหนัก",
    ],
    promotions: [
      {
        title: "Executive B2B Blueprint",
        description:
          "สิทธิพิเศษสำหรับโรงงานในนิคมอุตสาหกรรม รับฟรีบริการออกแบบ Executive Brand Storytelling และระบบ Technical SEO สำหรับอุตสาหกรรมหนักมูลค่า 18,500 บาท",
        discount: "Free Strategy & Technical Setup",
        expiry: "2026-12-31",
      },
    ],
    regionalVisuals: {
      banner: "/images/areas/universal-node.webp",
      gallery: ["/images/services/catalog-node.webp", "/images/cases/case-sme-recovery.webp"],
    },
  },

  faqs: [
    {
      question: "รับทำระบบล็อกอินสำหรับตัวแทนจำหน่าย (Dealer) ไหม?",
      answer:
        "รับครับ เราสามารถสร้างระบบ Portal ให้ Dealer ล็อกอินเข้ามาดูราคาสเปกสินค้าพิเศษ และดาวน์โหลดคู่มือการใช้งานได้ครับ",
    },
  ],

  keywords: [
    "วางระบบเว็บไซต์ ระยอง",
    "ทำเว็บโรงงาน มาบตาพุด",
    "Web Design Rayong",
    "Industrial Authority SEO",
  ],

  isTourismHeavy: false,
  marketSaturation: 88,
  regionalLatency: 6,

  // [DNA_OVERRIDE]: ปรับแต่งเพื่อให้หน้าระยองเน้น "เทคโนโลยีอุตสาหกรรมและความคุ้มค่า (ROI)"
  layoutOrder: [
    "hero",
    "insight",
    "audit", // วิเคราะห์จุดอ่อนเว็บไซต์เดิม
    "catalog", // แสดงระบบบริหารจัดการสินค้า
    "revenue", // คำนวณความคุ้มค่าเชิงธุรกิจ
    "visuals", // Roadmap & Terminal
    "success",
    "faq",
    "portal",
  ],

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
