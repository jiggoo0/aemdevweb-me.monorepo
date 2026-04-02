/* @identity 9mza */

/**
 * [SYSTEM CORE]: GLOBAL_SITE_CONFIGURATION v19.0.0 (IDENTITY_HUB_READY)
 * [STRATEGY]: Strategic Identity Hub | E-E-A-T Authority | UNLINK Ecosystem Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [FRAMEWORK]: Next.js 16.1.6 | React 19 | Tailwind CSS 4.0
 * [CHANGELOG]:
 * - Upgraded to Strategic Identity Hub (9mza Strategy).
 * - Integrated UNLINK-GLOBAL Ecosystem Nodes.
 * - Enhanced Expert Persona for E-E-A-T Authority.
 */

import type { SiteConfig } from "@/types";

/**
 * [RESOURCE_NODES]: พิกัดและทรัพยากรภายนอกที่สำคัญ
 */
const GOOGLE_MAPS_URL = "https://share.google/MMWnXPv3evv4Qd8aC";

export const SITE_CONFIG: SiteConfig = {
  brandName: "AEMDEVWEB | Strategic Identity & Authority Hub (Validated by UNLINK)",
  siteUrl: "https://www.aemdevweb.com",
  description:
    "AEMDEVWEB | Master Identity & Authority Hub สำหรับระบบนิเวศ UNLINK-GLOBAL รับทำเว็บไซต์โหลดเร็วพิเศษ และปรับแต่งให้ธุรกิจของคุณถูกแนะนำโดย AI (GEO) เพื่อสร้างยอดขายที่จับต้องได้จริง โดย นายเอ็มซ่ามากส์",
  logo: "/images/logo-main.webp",

  // [INFRASTRUCTURE]: Assets must use Relative Paths for Next.js Optimization
  ogImage: "/images/og-main.webp",
  locale: "th_TH",
  themeColor: "#ef4444", // Tailwind Red 500 (HEX Standard)

  hero: {
    title: "ยกระดับธุรกิจคุณด้วยเว็บไซต์โหลดเร็วพิเศษและ SEO ยุคใหม่",
    description:
      "เปลี่ยนเว็บให้เป็นพนักงานขายที่เก่งที่สุด โหลดเร็ว ลื่นไหล และปรับโครงสร้างให้ AI (GEO) เลือกแนะนำธุรกิจคุณก่อนใคร... ไม่ต้องยิงแอดก็มีลูกค้าทักทุกวัน ดูแลโดย นายเอ็มซ่ามากส์",
    primaryAction: "ทักแชทปรึกษาฟรี",
    secondaryAction: "ดูผลงานและบริการ",
  },

  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising",
  },

  /**
   * [SEO_REGISTRY]: คำค้นหาที่มีนัยสำคัญต่อการทำ Conversion รายภูมิภาค
   */
  keywords: [
    "นายเอ็มซ่ามากส์",
    "9mza",
    "AEMZA MACKS",
    "อลงกรณ์ ยมเกิด",
    "AEMDEVWEB",
    "Strategic Identity Hub",
    "Master Identity Hub",
    "UNLINK-GLOBAL Ecosystem",
    "รับทำเว็บไซต์บริษัท ราคาคุ้มค่า",
    "จ้างทำเว็บ SEO ติดหน้าแรก Google",
    "ระบบพนักงาน AI ช่วยขายของ",
    "รับทำเว็บไซต์โหลดเร็วพิเศษ",
    "จ้างทำเว็บไซต์ Next.js มืออาชีพ",
    "วิธีทำให้ AI แนะนำธุรกิจคุณ (GEO)",
    "รับทำระบบ AI สำหรับธุรกิจ",
    "พัฒนาเว็บแอปพลิเคชันเทคโนโลยีล่าสุด",
    "บริการทำ SEO ยุคใหม่",
    "โปรโมทธุรกิจบน Google Gemini",
    "ผู้เชี่ยวชาญด้านเว็บไซต์และ SEO",
  ],

  project: {
    title: "AEMDEVWEB | Strategic Identity & Authority Hub (Validated by UNLINK)",
    shortTitle: "AEMDEVWEB",
    version: "19.0.0",
    framework: "Next.js 16.1.6 (App Router)",
    uiStack: "React 19 + Tailwind CSS 4",
  },

  /**
   * [EXPERT_IDENTITY]: การฉีดตัวตน (EEAT) เพื่อการยืนยันผู้เชี่ยวชาญใน Knowledge Graph
   */
  expert: {
    displayName: "นายเอ็มซ่ามากส์ (9mza)",
    alternateName: "AEMZA MACKS",
    alias: ["9mza", "Mza-Marks", "AEMZA MACKS"],
    legalName: "อลงกรณ์ ยมเกิด (Alongkorn Yomkerd)",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    role: "Lead Architect & Maintainer of UNLINK-GLOBAL (77 Provinces)",
    jobTitle: "Strategic Infrastructure Architect & Technical SEO Specialist",
    signature: "9mza",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bioUrl: "/services/bio",
    bio: "สถาปนิกผู้วางโครงสร้างพื้นฐานดิจิทัลและระบบนิเวศ UNLINK-GLOBAL ครอบคลุม 77 จังหวัดทั่วประเทศไทย เชี่ยวชาญการสร้าง 'Strategic Identity' ที่ทรงพลังและน่าเชื่อถือสูงสุด เพื่อการเติบโตที่ยั่งยืนในยุค AI",
    googleMerchantId: "8653147979146207424",
    twitterHandle: "@aemdevweb",
    linkedinUrl: "https://th.linkedin.com/in/alongkorl-aemdevweb",
    sameAs: [
      "https://me.aemdevweb.com",
      "https://github.com/aemdevweb",
      "https://th.linkedin.com/in/alongkorl-aemdevweb",
    ],
  },

  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Technical Support 24/7)",
    mapUrl: GOOGLE_MAPS_URL,
  },

  /**
   * [LINK_REGISTRY]: แหล่งรวม Social Graph ทั้งหมด
   */
  links: {
    line: "https://line.me/R/ti/p/@204uuzew",
    lineId: "@204uuzew",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://www.facebook.com/share/18HFcziyn7/",
    github: "https://github.com/aemdevweb",
    linkedin: "https://th.linkedin.com/in/alongkorl-aemdevweb", // [ADDED]: เพื่อแก้ Error Runtime และสร้าง Author Graph
    twitter: "https://x.com/aemdevweb",
    youtube: "https://youtube.com/@aemdevweb",
    googleMaps: GOOGLE_MAPS_URL,
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    industry: "Strategic Digital Infrastructure",
    roiFocus: true,
    established: "2024",
    status: "Active",
    priceRange: "฿฿฿",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
      unlinkRegistryId: "UL-P-001",
    },
  },

  analytics: {
    gaId: "G-XXXXXXXXXX",
  },

  /**
   * [STRATEGIC]: UNLINK-GLOBAL Ecosystem Integration
   */
  ecosystem: {
    masterHub: "https://www.unlink-th.com",
    registryUrl: "https://registry.unlink-th.com/v/UL-P-001",
    verificationUrl: "https://www.unlink-th.com/verify/c/c-002",
    nodes: [
      {
        name: "UNLINK-TH",
        url: "https://www.unlink-th.com",
        role: "Reputation & Data Management Node",
      },
      {
        name: "AEMDEVWEB",
        url: "https://www.aemdevweb.com",
        role: "Strategic Hub & Web Architecture Node",
      },
    ],
  },

  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
    facebook: "fb_domain_verification_id",
  },
} as const;
