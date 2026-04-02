/**
 * [SERVICE_NODE]: LUXURY_HOSPITALITY_ENGINE v19.0.0 (IMMERSIVE_DNA)
 * [STRATEGY]: Emotional UX | Direct-Booking Dominance | Sensory Branding
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const hotelResortService: TemplateMasterData = {
  id: "AEM-SVC-HR-08",
  title: "Hospitality Direct-Booking Engine | เปลี่ยนผู้ชมให้เป็นแขกผู้เข้าพัก",
  description:
    "หยุดแบ่งกำไรให้ OTA โดยไม่จำเป็น ยกระดับโรงแรมของคุณด้วยเว็บไซต์ที่ถ่ายทอด 'Sense of Place' ผ่านสถาปัตยกรรมดิจิทัลที่เน้นความรู้สึก และระบบจองตรงที่ออกแบบมาเพื่อเพิ่ม Net Profit สูงสุดให้กับธุรกิจ",
  image: "/images/services/hotel-resort-node.webp",
  templateSlug: "hotelresort",
  category: "business",

  price: "19,900",
  priceValue: 19900,
  currency: "THB",
  unit: "เริ่มต้น / โครงการ",

  theme: {
    mode: "dark",
    primary: "#c5a358", // Lanna Gold
    secondary: "#453a1f", // Deep Umber
    background: "#1c1917", // Warm Stone
    foreground: "#fafaf9", // Ivory
    accent: "#eab308", // Sunlit Gold
    gradient: "from-[#c5a358]/15 via-transparent to-transparent",
  },

  clientTrust:
    "Profit Optimized: เพิ่มอัตราการจองตรง (Direct Booking) ได้มากกว่า 20-30% พร้อมลดการพึ่งพาเอเย่นต์ 100%",

  benefits: [
    "Emotional Storytelling UX: ดีไซน์ที่ใช้รูปภาพและวิดีโอทำงานหนักเพื่อขายประสบการณ์ ไม่ใช่แค่ขายห้องพัก",
    "OTA-Bypass Strategy: สร้างเส้นทางจองตรงที่ง่ายและคุ้มค่ากว่า เพื่อเก็บกำไรสุทธิเข้ากระเป๋าธุรกิจโดยตรง",
    "Global Visibility Node: โครงสร้าง SEO นานาชาติที่ดักจับนักท่องเที่ยวจากทั่วโลกก่อนที่เขาจะไปถึงแพลตฟอร์มอื่น",
  ],

  coreFeatures: [
    {
      title: "Immersive Visual Gallery",
      description:
        "ระบบแกลเลอรี่อัจฉริยะที่โหลดไวระดับมิลลิวินาที ถ่ายทอดความงามของห้องพักและบรรยากาศได้ทุกรายละเอียด",
      icon: "Camera",
    },
    {
      title: "Seamless Booking Integration",
      description:
        "เชื่อมต่อกับระบบเช็คห้องว่างและตัดบัตรเครดิตระดับสากล มอบประสบการณ์จองที่ปลอดภัยและลื่นไหล",
      icon: "CalendarCheck",
    },
    {
      title: "Multi-Language Authority",
      description:
        "รองรับการทำเนื้อหาหลายภาษา (Eng/CN/TH) เพื่อเข้าถึงกลุ่มเป้าหมายนักท่องเที่ยวคุณภาพทุกมุมโลก",
      icon: "Globe",
    },
  ],

  faqs: [
    {
      question: "จองผ่านเว็บเราต่างจากจองผ่าน Agoda อย่างไร?",
      answer:
        "จองผ่านเว็บตรงจะทำให้โรงแรมได้รับ Data ลูกค้าทันทีและไม่ต้องเสียค่าคอมมิชชั่น 15-20% ครับ เราสามารถตั้งราคาพิเศษหรือของแถมเพื่อจูงใจลูกค้าได้โดยตรงครับ",
    },
    {
      question: "เว็บไซต์รองรับการเชื่อมต่อสต็อกห้องพักไหม?",
      answer:
        "รองรับครับ เราเชื่อมต่อกับ Channel Manager ชั้นนำได้ทุกเจ้า เพื่อให้สต็อกหน้าเว็บและ OTA ตรงกัน 100% ครับ",
    },
    {
      question: "รูปภาพไม่สวย ทีมงานช่วยได้ไหม?",
      answer:
        "เรามีทีมพาร์ทเนอร์ช่างภาพสายโรงแรมระดับพรีเมียมคอยให้คำปรึกษาและลงพื้นที่ถ่ายทำเพื่อให้ภาพออกมา 'แพง' ที่สุดครับ",
    },
  ],

  keywords: [
    "รับทำเว็บไซต์โรงแรมระดับพรีเมียม",
    "ระบบจองที่พักออนไลน์ 2026",
    "Luxury Hotel Web Design Thailand",
    "จดทะเบียนจองตรงไม่เสียคอมมิชชั่น",
    "วางระบบ Digital Marketing โรงแรม",
  ],

  priority: 6,
  isFeatured: true,
};
