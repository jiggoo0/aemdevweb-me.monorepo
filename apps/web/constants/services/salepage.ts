/**
 * [SERVICE_NODE]: SALE_PAGE_CONVERSION_ENGINE v19.0.0 (ROI_MAXIMIZED)
 * [STRATEGY]: Neuro-Marketing UX | Zero-Latency Path | Algorithm-First Delivery
 * [MAINTAINER]: AEMZA MACKS
 */

import type { TemplateMasterData } from "@/types";

export const salePageService: TemplateMasterData = {
  id: "AEM-SVC-SP-01",
  title: "High-Performance Conversion Engine | หน้าปิดการขายอัจฉริยะที่ AI โฆษณาหลงรัก",
  description:
    "หยุดตำน้ำพริกละลายแม่น้ำกับค่าแอด ยกระดับสู่ Sale Page สถาปัตยกรรม Hardened Next.js ที่โหลดเสร็จใน 0.5s พร้อมระบบ Server-Side Tracking (CAPI) 100% เพื่อป้อน Data คุณภาพสูงกลับไปเทรน AI ให้หาลูกค้าแม่นยำขึ้น 10 เท่า",

  image: "/images/services/salepage-node.webp",
  templateSlug: "salepage",
  category: "landing",

  price: "4,500",
  priceValue: 4500,
  currency: "THB",
  unit: "เริ่มต้น / หน้า",

  theme: {
    mode: "dark",
    primary: "#f43f5e", // Rose 500
    secondary: "#881337", // Rose 900
    background: "#0f0505", // Deep Obsidian
    foreground: "#fff1f2", // Soft Rose White
    accent: "#fb7185", // Rose 400
    gradient: "from-[#f43f5e]/25 via-transparent to-transparent",
  },

  clientTrust:
    "Conversion Proven: ช่วยธุรกิจลด Cost per Result ได้เฉลี่ย 35-50% ทันทีหลังติดตั้งระบบสถาปัตยกรรมใหม่",

  benefits: [
    "Zero-Latency Conversion: เส้นทางตัดสินใจที่ไร้รอยต่อ โหลดไวกว่าคู่แข่ง 5 เท่า เพื่อดักจับทุกความอยากซื้อของลูกค้า",
    "Precision Pixel CAPI: ติดตามทุก Micro-conversion อย่างแม่นยำ แก้ปัญหา iOS 14+ บล็อกข้อมูล เพื่อลดค่าแอดให้ต่ำที่สุด",
    "Psychological Trigger UX: ดีไซน์ที่ผ่านการวิจัยพฤติกรรมผู้บริโภคยุค AI เพื่อกระตุ้นการตัดสินใจซื้อในครั้งแรกที่เห็น",
  ],

  coreFeatures: [
    {
      title: "Hardened CAPI Node",
      description:
        "ระบบส่ง Event การซื้อผ่านเซิร์ฟเวอร์โดยตรง ไม่พึ่งพาคุกกี้เบราว์เซอร์ เพื่อความแม่นยำ 100%",
      icon: "Zap",
    },
    {
      title: "Direct-Line CRM Hub",
      description:
        "ระบบแจ้งเตือนและเก็บข้อมูลลูกค้าเข้า LINE OA และ Google Sheet อัตโนมัติ พร้อมปิดการขายได้ทันที",
      icon: "MessageCircle",
    },
    {
      title: "Sticky Action Dock",
      description:
        "แถบปุ่มสั่งซื้อที่ติดตามสายตาลูกค้าตลอดเวลา (iOS/Android) ออกแบบมาเพื่อกระตุ้น Conversion โดยเฉพาะ",
      icon: "MousePointerClick",
    },
  ],

  faqs: [
    {
      question: "ทำไมต้องจ้างทำหน้า Sale Page แพงกว่าเว็บสำเร็จรูป?",
      answer:
        "เพราะเว็บสำเร็จรูปโหลดช้าและ Data รั่วครับ ระบบเราเป็นโค้ดดิ้งเพียวๆ ที่ AI โฆษณา (FB/TikTok) เข้าใจง่ายกว่า ทำให้ค่าส่งคอนเทนต์ถูกลงและเจอคนซื้อจริงได้มากกว่าครับ",
    },
    {
      question: "ติดพิกเซลได้กี่ตัว?",
      answer:
        "ไม่จำกัดครับ และเราตั้งค่าแบบ Advanced Matching ให้ครบทุกช่องทางเพื่อให้คุณเป็นเจ้าของ Data ลูกค้าอย่างแท้จริง",
    },
    {
      question: "ระบบนี้แก้ไขเองได้ไหม?",
      answer:
        "เรามีระบบ Mini-CMS ที่คุณสามารถเปลี่ยนราคา แก้โปรโมชั่น หรืออัปรูปใหม่ผ่านมือถือได้ง่ายๆ ใน 1 นาทีครับ",
    },
  ],

  keywords: [
    "รับทำ Sale Page โหลดไวที่สุด",
    "ติดตั้ง Conversion API Facebook 2026",
    "หน้าปิดการขาย Next.js 16",
    "เทคนิคยิงแอดให้แม่นด้วย Data",
    "Sale Page Specialist Thailand",
  ],

  priority: 1,
  isFeatured: true,
};
