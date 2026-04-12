/**
 * [IDENTITY HUB]: GLOBAL_SHARED_SITE_CONFIGURATION
 * [STRATEGY]: Strategic Identity Hub | E-E-A-T Authority | UNLINK Ecosystem Sync
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

// -----------------------------------------------------------------------------
// Core Ecosystem URLs (Multi-Domain Strategy)
// -----------------------------------------------------------------------------

const APP_URLS = {
  web: process.env.NEXT_PUBLIC_WEB_URL || "https://www.aemdevweb.com",
  me: process.env.NEXT_PUBLIC_ME_URL || "https://me.aemdevweb.com",
  unlink: process.env.NEXT_PUBLIC_UNLINK_URL || "https://www.unlink-th.com",
};

export const SHARED_SITE_CONFIG = {
  // 1. Core Identity
  expert: {
    displayName: "นายเอ็มซ่ามากส์ (9mza)",
    alternateName: "AEMZA MACKS",
    legalNameThai: "อลงกรณ์ ยมเกิด",
    legalNameEnglish: "Alongkorn Yomkerd",
    strategicAlias: "9mza",
    role: "Lead Architect & Founder of UNLINK-GLOBAL",
    jobTitle: "Strategic Infrastructure Architect & Technical SEO Specialist",
    signature: "9mza",
    avatar: "/images/profile-mysterious-1x1.webp",
    email: "me@aemdevweb.com",
    bio: "สถาปนิกผู้วางโครงสร้างพื้นฐานดิจิทัลและระบบนิเวศ UNLINK-GLOBAL ครอบคลุม 77 จังหวัดทั่วประเทศไทย",
    skills: {
      technical: [
        "Monorepo Architecture (Turborepo/pnpm)",
        "Next.js 15+ & React 19 (RSC)",
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
    fullName: "AEMDEVWEB | Strategic Identity & Authority Hub",
    siteUrl: APP_URLS.web,
    established: "2024",
    industry: "Strategic Digital Infrastructure",
    location: "กำแพงเพชร, ประเทศไทย",
    description:
      "Digital Infrastructure Engine driving 77 provinces with high-integrity SEO and performance.",
  },

  // 3. Marketing
  hero: {
    title: "Digital Sovereignty.",
    tagline: "Technical SEO & Infrastructure Authority",
    description:
      "เปลี่ยนเว็บให้เป็นพนักงานขายที่เก่งที่สุด โหลดเร็ว ลื่นไหล และปรับโครงสร้างให้ AI (GEO) เลือกแนะนำธุรกิจคุณก่อนใคร ทุกอุตสาหกรรมขับเคลื่อนด้วยสถาปัตยกรรมเดียวกัน แต่สะท้อนตัวตนที่ต่างกัน",
    primaryAction: "ทักแชทปรึกษาฟรี",
  },

  // 4. Social & Connections
  links: {
    site: APP_URLS.web,
    me: APP_URLS.me,
    unlink: APP_URLS.unlink,
    line: "https://line.me/R/ti/p/@204uuzew",
    lineId: "@204uuzew",
    facebook: "https://www.facebook.com/share/18HFcziyn7/",
    messenger: "https://m.me/aemdevweb",
    github: "https://github.com/aemdevweb",
    linkedin: "https://th.linkedin.com/in/alongkorl-aemdevweb",
  },

  // 5. Ecosystem mapping
  ecosystem: {
    masterHub: APP_URLS.unlink,
    commercialUrl: APP_URLS.web,
    identityUrl: APP_URLS.me,
  },
} as const;
