import { defineAreaNode } from "./node-factory";
// [IMPORT]: นำเข้า Template หลักเพื่อดึงค่ากลาง (Local Authority Standard - ปรับให้ทันสมัย)
import { localAuthorityService } from "../services/local-authority";

export const phraeNode = defineAreaNode(localAuthorityService, {
  // --- Basic Identity ---
  slug: "phrae",
  tier: 2,
  province: "แพร่",
  region: "North",
  priority: 84,

  title:
    "รับทำเว็บไซต์ แพร่ | โหลดเร็วพิเศษ พัฒนาเว็บไซต์งานไม้และธุรกิจท่องเที่ยววิถีล้านนาตะวันออก",
  description:
    "ยกระดับงานฝีมือเมืองแพร่สู่ตลาดสากล ด้วยเว็บไซต์ที่ออกแบบอย่างประณีตและระบบรองรับการขายสินค้าคราฟต์พรีเมียม",

  longDescription:
    "แพร่ เมืองแห่งไม้สักทองและงานหัตถศิลป์ที่สืบทอดกันมานับร้อยปีจากล้านนาตะวันออก " +
    "นายเอ็มซ่ามากส์ พร้อมยกระดับแบรนด์เฟอร์นิเจอร์ไม้สักและผ้าหม้อห้อมของแพร่สู่เวทีระดับสากล " +
    "ด้วยการออกแบบเว็บไซต์ที่เน้นความประณีต (Craftsmanship Aesthetic) และระบบแคตตาล็อกออนไลน์ที่ทรงพลัง " +
    "เพื่อเปลี่ยนยอดผู้เข้าชมให้กลายเป็นคำสั่งซื้อ และสร้างชื่อเสียงให้ธุรกิจท้องถิ่นของคุณโดดเด่นบนหน้าแรก Google",

  // --- Visual & Location ---
  heroImage: "/images/areas/universal-node.webp",
  coordinates: { lat: 18.1446, lng: 100.1403 },
  districts: [
    "เมืองแพร่",
    "สูงเม่น",
    "เด่นชัย",
    "ร้องกวาง",
    "ลอง",
    "วังชิ้น",
    "สอง",
    "หนองม่วงไข่",
  ],

  // --- Localized Benefits ---
  benefits: [
    "Teak-Heritage Design: งานดีไซน์ที่สะท้อนถึงความคลาสสิกและทรงคุณค่าของสินค้าไม้สักพรีเมียม",
    "Artisan Catalog Mastery: ระบบจัดการข้อมูลสินค้าที่เน้นรายละเอียดงานฝีมือ เพื่อเพิ่มมูลค่าให้วิสาหกิจชุมชนและ SME",
    "Eastern Lanna SEO: วางรากฐานการค้นหาเพื่อดักจับลูกค้าที่หลงใหลในเสน่ห์เมืองแพร่และสินค้าภูมิปัญญา",
  ],

  marketSaturation: 38,
  regionalLatency: 25,

  regionalRoadmap: [
    {
      step: "01",
      title: "Artisan Brand Sync",
      description: "วิเคราะห์คุณค่างานไม้หรือสินค้าภูมิปัญญาเพื่อสร้างแบรนด์ดิจิทัลที่ดูพรีเมียม",
    },
    {
      step: "02",
      title: "Catalog Node Deployment",
      description:
        "ติดตั้งระบบแสดงผลสินค้าและแกลเลอรี่ที่โชว์รายละเอียดเนื้อไม้และงานฝีมือได้อย่างคมชัด",
    },
    {
      step: "03",
      title: "Lanna East SEO",
      description: "ทำ Local SEO ดักจับ Traffic จากกลุ่มผู้รักงานไม้และนักท่องเที่ยวล้านนาตะวันออก",
    },
  ],

  // --- Context Data ---
  localContext: {
    marketInsight: "การท่องเที่ยวเชิงวัฒนธรรมและเกษตรแปรรูป",
    technicalApproach:
      "เน้นการแสดงผล Portfolio สินค้าและระบบการติดต่อสอบถามที่รวดเร็ว (Fast Response)",
    localStrength: "เป็นแหล่งผลิตเฟอร์นิเจอร์ไม้สักคุณภาพสูงที่สุดในประเทศไทย",
    nicheIndustries: [
      "โรงงานเฟอร์นิเจอร์ไม้สัก",
      "วิสาหกิจชุมชนผ้าหม้อห้อม",
      "ที่พักเมืองเก่าแบบวินเทจ",
    ],
    painPoints: ["สินค้าดีระดับโลกแต่ภาพลักษณ์เว็บดูไม่แพง", "ขาดระบบแคตตาล็อกออนไลน์ที่ค้นหาง่าย"],
    competitorLevel: "low",
    socialProof: {
      rating: 5.0,
      reviewCount: 38,
      localClient: "โรงงานเฟอร์นิเจอร์ไม้สักพรีเมียม ย่านสูงเม่น",
    },
    regionalPricing: {
      startPrice: `${localAuthorityService.price} บาท`,
      timeline: "14-21 วัน",
    },
    localSuccessStory: {
      title: "Case Study: แบรนด์เฟอร์นิเจอร์ไม้สัก",
      result:
        "วางระบบ Digital Catalog ใหม่ ยอดสั่งซื้อจากลูกค้าระดับ High-end ทั่วประเทศเพิ่มขึ้น 150%",
    },
    hyperLocalKeywords: [
      "วางระบบเว็บไซต์ สูงเม่น",
      "ออกแบบเว็บเฟอร์นิเจอร์ไม้ แพร่",
      "จ้างทำ SEO แพร่",
      "ทำเว็บผ้าหม้อห้อม แพร่",
    ],
    promotions: [
      {
        title: "Teak Heritage Digital Offer",
        description:
          "สิทธิพิเศษสำหรับโรงงานไม้สักและ SME แพร่ รับฟรีบริการถ่ายภาพสินค้าพรีเมียมและระบบจัดการแคตตาล็อกออนไลน์มูลค่า 7,500 บาท",
        discount: "Free Artisan Catalog Setup",
        expiry: "2026-12-31",
      },
    ],
    regionalVisuals: {
      banner: "/images/areas/universal-node.webp",
      gallery: ["/images/services/local-node.webp", "/images/cases/case-reputation-cleared.webp"],
    },
  },

  keywords: ["วางระบบเว็บไซต์ แพร่", "ทำเว็บงานไม้ แพร่", "จ้างทำเว็บแพร่", "รับทำ SEO แพร่"],
});
