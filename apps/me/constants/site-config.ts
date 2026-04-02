/** @format */

/**
 * AEMDEVWEB Core Identity System (2026)
 * -------------------------------------------------------------------------
 * แหล่งข้อมูลหลักสำหรับตัวตนและโครงสร้างพื้นฐานของเว็บไซต์
 * ยุทธศาสตร์: การสร้างความน่าเชื่อถือและการเชื่อมโยงข้อมูลเชิงกลยุทธ์
 * ควบคุมคุณภาพโดย: นายเอ็มซ่ามากส์
 */
import { SHARED_SITE_CONFIG } from "@repo/core";

export const siteConfig = {
  // 1. ข้อมูลยืนยันตัวตน (Identity Verification - Synced with Shared Hub)
  legalName: SHARED_SITE_CONFIG.expert.legalName,
  fullName: SHARED_SITE_CONFIG.expert.legalName,
  expertPersona: SHARED_SITE_CONFIG.expert.expertPersona,
  strategicAlias: SHARED_SITE_CONFIG.expert.strategicAlias,
  expertName: SHARED_SITE_CONFIG.expert.displayName,
  handle: SHARED_SITE_CONFIG.brand.name,
  role: SHARED_SITE_CONFIG.expert.role,
  expert: SHARED_SITE_CONFIG.expert.bio,

  // 2. กลยุทธ์เนื้อหา SEO (SEO Content Strategy)
  siteName: "AEMDEVWEB | Identity Hub",
  title: "อลงกรณ์ ยมเกิด | Verify Unlink thailand & Lead Architect",
  description:
    "ตรวจสอบสถานะ Verify Unlink thailand ของ อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) ผู้เชี่ยวชาญด้าน Technical SEO และสถาปัตยกรรมเว็บสมรรถนะสูง เพื่อความโปร่งใสและน่าเชื่อถือในระดับสากล",
  slogan: "High-Performance Infrastructure & Technical SEO Strategy",
  keywords: [
    "Verify Unlink thailand",
    "อลงกรณ์ ยมเกิด",
    "Alongkorl Yomkerd",
    "นายเอ็มซ่ามากส์",
    "9mza",
    "AEMDEVWEB",
    "Technical SEO",
    "Web Infrastructure Lead",
    "Next.js Developer",
    "Web Performance Specialist",
    "SEO Expert Thailand",
    "ที่ปรึกษา SEO",
    "รับทำ SEO สายขาว",
    "Technical Audit Specialist",
    "Expert Identity Verification",
    "Semantic SEO Strategy",
    "Next.js Performance Optimization",
    "Identity Hub Management",
    "AEMDEVWEB Precision Code",
    "Digital Identity Verification",
    "ความน่าเชื่อถือทางดิจิทัล",
    "UNLINK THAILAND",
  ],

  // 3. โดเมนและทรัพยากรหลัก (Domain & Assets)
  url: "https://me.aemdevweb.com",
  commercialUrl: "https://www.aemdevweb.com",
  ogImage: "/images/og-image.png",
  profilePhoto: "/images/profile-mysterious-1x1.webp",
  twitterHandle: "@xemwep91696",
  gaId: "G-VRLM7ZEH9X",
  language: "th",
  locale: "th_TH",

  // 4. โปรเจกต์ที่เชื่อมโยง (Integrated Projects)
  projects: [
    {
      name: "Unlink-th",
      description: "Reputation Management & Technical De-indexing",
      url: "https://www.unlink-th.com",
      image: "/images/service/Unlink-th.webp",
    },
    {
      name: "AEMDEVWEB",
      description: "Premium Web Development Infrastructure",
      url: "https://www.aemdevweb.com",
      image: "/images/service/aemdevweb.webp",
    },
  ],

  // 5. ข้อมูลติดต่อและเครือข่ายสังคม (Contact & Social Presence)
  companyName: "AEMDEVWEB",
  email: "me@aemdevweb.com",
  contact: {
    facebook: "https://facebook.com/aemdevweb",
    linkedin: "https://www.linkedin.com/in/alongkorl-aemdevweb",
    x: "https://x.com/xemwep91696",
    line: "https://line.me/R/ti/p/@204uuzew", // ช่องทางหลักสำหรับติดต่อประสานงาน (LINE ID: @204uuzew)
    linePersonal: "https://line.me/ti/p/PCE92r2xrB", // ช่องทางส่วนตัวสำหรับการเชื่อมโยงที่ปลอดภัย
    github: "https://github.com/aemdevweb",
  },
} as const;
