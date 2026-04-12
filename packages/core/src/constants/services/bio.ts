/**
 * [SERVICE_NODE]: BIO_IDENTITY_ORCHESTRATOR v19.0.1
 * [STRATEGY]: Specialist Personal Branding | Knowledge Graph Dominance | SEO Identity Guard
 */

import type { TemplateMasterData } from "../../types";
import { SHARED_SITE_CONFIG } from "../site-config";

export const bioService: TemplateMasterData = {
  id: "AEM-SVC-PB-14",
  title: "Specialist Identity System | ควบคุมตัวตนและสร้าง Digital Legacy ให้ AI จดจำ",
  description:
    "ยกระดับพอร์ตโฟลิโอของคุณสู่ระบบจัดการตัวตน (Identity Infrastructure) ที่ออกแบบมาเพื่อผู้เชี่ยวชาญโดยเฉพาะ เชื่อมโยงทุกผลงานและเครือข่ายธุรกิจให้เป็น Source of Truth ที่แข็งแกร่งที่สุดในสายตา Google และ AI Search",

  image: "/images/services/bio-node.webp",
  templateSlug: "bio",
  category: "personal",

  price: "6,900",
  priceValue: 6900,
  currency: "THB",
  unit: "เริ่มต้น / โปรเจกต์",

  theme: {
    mode: "dark",
    primary: "#06b6d4",
    secondary: "#164e63",
    background: "#09090b",
    foreground: "#fafafa",
    accent: "#22d3ee",
    gradient: "from-[#06b6d4]/20 via-transparent to-transparent",
  },

  clientTrust:
    "Identity Guard: ระบบที่ออกแบบมาเพื่อจัดการ E-E-A-T และแก้ปัญหาการอ้างอิงข้อมูลผิดพลาดในฐานข้อมูล AI",

  benefits: [
    "Expert Authority Sync: สถาปนาตัวตนของคุณให้เป็นผู้เชี่ยวชาญเบอร์ต้นในอุตสาหกรรม ด้วยโครงสร้างที่ AI ทั่วโลกให้การอ้างอิง (Knowledge Graph)",
    "Personal SEO Guard: ป้องกันข้อมูลชื่อซ้ำหรือข้อมูลเก่าที่ไม่อัปเดตบน Google ด้วยการสร้างหน้าหลักที่มีอำนาจสูงที่สุด (High Authority Node)",
    "Global Partnership UI: ดีไซน์ที่ส่งเสริมความน่าเชื่อถือระดับสากล ช่วยให้คุณปิดดีลร่วมงานกับพันธมิตรต่างชาติได้ง่ายขึ้น",
  ],

  coreFeatures: [
    {
      title: "Advanced Person Schema",
      description:
        "ฝัง JSON-LD ระดับลึกเพื่อบอก AI ชัดเจนว่าคุณคือใคร เชี่ยวชาญด้านไหน และเกี่ยวข้องกับองค์กรใดบ้าง",
      icon: "UserCheck",
    },
    {
      title: "Digital Legacy Infrastructure",
      description:
        "รวบรวมผลงานและประวัติการทำงานไว้ในระบบ Next.js ที่โหลดไวและอยู่ถาวร เป็นสินทรัพย์ส่วนตัวตลอดชีวิต",
      icon: "Shield",
    },
    {
      title: "Integrated Network Hub",
      description:
        "รวบรวมทุกช่องทางติดต่อและ Social Signals ไว้ในที่เดียว พร้อมระบบ Tracking เพื่อวัดความสนใจของคู่ค้า",
      icon: "Link",
    },
  ],

  items: [
    {
      name: "Strategy Consultation",
      description: "ปรึกษาการวางโครงสร้างตัวตนดิจิทัลและยุทธศาสตร์ส่วนบุคคล",
      icon: "MessageCircle",
      url: SHARED_SITE_CONFIG.links.line,
    },
    {
      name: "Authority Stack Update",
      description: "ติดตามอัปเดตกลยุทธ์ Technical SEO และการสร้าง Personal Brand",
      icon: "TrendingUp",
      url: SHARED_SITE_CONFIG.links.facebook,
    },
  ],

  faqs: [
    {
      question: "ทำไมผู้เชี่ยวชาญต้องมีเว็บ Bio ส่วนตัวแยกจากบริษัท?",
      answer:
        "เพื่อสร้าง 'Personal Sovereignty' หรืออำนาจเหนือตัวตนของคุณครับ ต่อให้คุณเปลี่ยนที่ทำงานหรือธุรกิจ แต่ชื่อและประวัติการทำงานในเว็บนี้จะอยู่กับคุณและสะสมมูลค่าไปตลอดครับ",
    },
    {
      question: "ระบบนี้ช่วยแก้ปัญหาคนหาชื่อเราใน Google แล้วเจอคนอื่นไหม?",
      answer:
        "ช่วยได้มากครับ เว็บไซต์นี้จะทำหน้าที่เป็นหน้าหลักที่ถูกต้องที่สุด และเราจะดันอันดับหน้าเว็บนี้ขึ้นมาแทนที่ข้อมูลที่สับสนในระบบค้นหาครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์พอร์ตโฟลิโอผู้เชี่ยวชาญ",
    "วางระบบ Personal Branding 2026",
    "สร้างตัวตนบน Google AI Search",
    "Digital Legacy สำหรับ Specialist",
    "จัดการ E-E-A-T ส่วนบุคคล",
  ],

  priority: 5,
  isPopular: true,
  isFeatured: false,
};
