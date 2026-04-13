/**
 * [IDENTITY HUB]: GLOBAL_SHARED_SITE_CONFIGURATION v18.0.1 (UNIVERSAL_SYNC)
 * [STRATEGY]: Strategic Identity Hub | E-E-A-T Authority | UNLINK Ecosystem Sync | AI-Search Domination
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SiteConfig } from "../types";

// -----------------------------------------------------------------------------
// Core Ecosystem URLs (Multi-Domain Strategy)
// -----------------------------------------------------------------------------

const APP_URLS = {
  web: process.env.NEXT_PUBLIC_WEB_URL || "https://www.aemdevweb.com",
  me: process.env.NEXT_PUBLIC_WEB_URL || "https://www.aemdevweb.com", // Consolidation into main domain
  unlink: process.env.NEXT_PUBLIC_UNLINK_URL || "https://www.unlink-th.com",
};

export const SHARED_SITE_CONFIG: SiteConfig = {
  // 1. Core Identity (EEAT Injection)
  expert: {
    displayName: "นายเอ็มซ่ามากส์",
    alternateName: "AEMZA MACKS",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    legalNameEnglish: "Alongkorn Yomkerd",
    strategicAlias: "9mza",
    role: "Web Architect & Technical SEO Specialist",
    jobTitle: "Strategic Infrastructure Architect & Technical SEO Specialist",
    signature: "AEMZA MACKS",
    avatar: "/images/avatar.webp",
    email: "me@aemdevweb.com",
    bio: "ผู้เชี่ยวชาญด้านวิศวกรรมเว็บไซต์และ Technical SEO ที่เน้นการสร้างผลลัพธ์ทางธุรกิจผ่านโครงสร้างพื้นฐานดิจิทัลที่แม่นยำและล้ำสมัย ครอบคลุมระบบนิเวศ UNLINK-GLOBAL ทั่วประเทศไทย",
    googleMerchantId: "8653147979146207424",
    twitterHandle: "@aemdevweb",
    linkedinUrl: "https://th.linkedin.com/in/alongkorl-aemdevweb",
    skills: {
      technical: [
        "Monorepo Architecture (Turborepo/pnpm)",
        "Next.js 16+ & React 19 (RSC)",
        "Database Engineering (Supabase/PostgreSQL)",
        "High-Integrity System Auditing",
        "Performance Optimization (Node 22 Runtime)",
      ],
      seo: [
        "Technical SEO Dominance",
        "GEO (Generative Engine Optimization)",
        "Entity Linking & Schema.org Mapping",
        "Localized P-SEO Strategy (77 Provinces)",
      ],
      governance: [
        "Institutional Trust Engineering",
        "Cryptographic Integrity Verification",
        "E-E-A-T Framework Compliance",
        "Digital Authority Regulation",
      ],
    },
  },

  // 2. Brand & Business
  brand: {
    name: "AEMDEVWEB",
    fullName: "AEMDEVWEB | High-End Web & SEO Expert Hub (นายเอ็มซ่ามากส์)",
    legalName: "AEMDEVWEB Technical Infrastructure & SEO Solutions",
    siteUrl: APP_URLS.web,
    logo: "/images/logo-main.webp",
    ogImage: "/images/og-main.webp",
    established: "2024",
    foundingDate: "2024-01-16",
    industry: "Digital Infrastructure & Technical SEO",
    taxId: "127cnhtn-AEM-2024", // Internal Tracking / Placeholder for trust
    isoCertified: "ISO-AEM-2026-INTEGRITY",
    location: "กำแพงเพชร, ประเทศไทย",
    themeColor: "#ef4444",
    locale: "th_TH",
    description:
      "พาร์ทเนอร์ด้านการทำเว็บไซต์และระบบ SEO สำหรับธุรกิจ B2B และ SME รับทำเว็บไซต์โหลดเร็วพิเศษ และปรับแต่งให้ธุรกิจของคุณถูกแนะนำโดย AI (GEO) เพื่อสร้างยอดขายที่จับต้องได้จริง ดูแลโดยทีมวิศวกรและผู้เชี่ยวชาญด้าน Technical SEO",
    areaServed: ["Thailand", "Bangkok", "Kamphaeng Phet", "77 Provinces Coverage"],
  },

  // 3. Marketing & SEO Registry
  hero: {
    title: "ยกระดับธุรกิจคุณด้วยเว็บไซต์โหลดเร็วพิเศษและ SEO ยุคใหม่",
    tagline: "Technical SEO & Infrastructure Authority",
    description:
      "เปลี่ยนเว็บให้เป็นพนักงานขายที่เก่งที่สุด โหลดเร็ว ลื่นไหล และปรับโครงสร้างให้ AI (GEO) เลือกแนะนำธุรกิจคุณก่อนใคร... ไม่ต้องยิงแอดก็มีลูกค้าทักทุกวัน โดยนายเอ็มซ่ามากส์",
    primaryAction: "ทักแชทปรึกษาฟรี",
    secondaryAction: "ดูผลงานและบริการ",
  },

  // 4. persona (AI & Communication)
  persona: {
    tone: "Strategic Partner, Technical Authority, Business-Centric",
    communicationStyle: "Result-oriented, Friendly Specialist, Transparent & Logical",
    antiConnotation: "No Fluff, No Robot-speak, Avoid Over-promising",
  },

  keywords: [
    "AEMZA MACKS",
    "นายเอ็มซ่ามากส์",
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

  // 4. Social & Connections (LINK_REGISTRY)
  links: {
    site: APP_URLS.web,
    me: APP_URLS.me,
    unlink: APP_URLS.unlink,
    line: "https://lin.ee/kVRNkIy",
    lineId: "@127cnhtn",
    messenger: "https://m.me/aemdevweb",
    facebook: "https://www.facebook.com/share/18HFcziyn7/",
    github: "https://github.com/aemdevweb",
    linkedin: "https://th.linkedin.com/in/alongkorl-aemdevweb",
    twitter: "https://x.com/aemdevweb",
    youtube: "https://youtube.com/@aemdevweb",
    googleMaps: "https://share.google/MMWnXPv3evv4Qd8aC",
    googleReview: "https://search.google.com/local/writereview?placeid=ChIJ0S9uG79lHTERERERERERERE",
  },

  // 5. Contact & Logistics
  contact: {
    email: "me@aemdevweb.com",
    phone: "099-032-2175",
    displayPhone: "099 032 2175 (สายด่วนปรึกษานายเอ็มซ่ามากส์)",
    address: "กำแพงเพชร, ประเทศไทย",
    streetAddress: "ตำบลในเมือง อำเภอเมืองกำแพงเพชร",
    postalCode: "62000",
    workHours: "จันทร์ - ศุกร์, 09:00 - 18:00 (Technical Support 24/7)",
  },

  // 6. Business Parameters
  business: {
    location: "กำแพงเพชร",
    region: "Northern Thailand",
    roiFocus: true,
    status: "Active",
    priceRange: "฿฿฿",
    ids: {
      businessProfileId: "17539943195708104348",
      storeCode: "01162024004001766449",
    },
  },

  // 7. Technical & Verification
  analytics: {
    gaId: "G-XXXXXXXXXX",
  },
  verification: {
    google: "HmlcGbJ8eKWuc1QN_UUpBQ",
    facebook: "fb_domain_verification_id",
  },

  // 8. Ecosystem mapping
  ecosystem: {
    masterHub: APP_URLS.unlink,
    commercialUrl: APP_URLS.web,
    identityUrl: APP_URLS.me,
  },
} as const;
