import type { TemplateMasterData } from "../../types";

/**
 * [SERVICE]: REPUTATION_FIX_INTERVENTION
 * [STRATEGY]: High-ticket Cyber-Authority Service
 */
export const reputationFixService: TemplateMasterData = {
  id: "AEM-SVC-RF-01",
  templateSlug: "reputation-fix",
  title: "Reputation Intervention & Blacklist Elimination | UNLINK THAILAND",
  description:
    "Extreme Google cleanup, counter-intelligence, and strategic elimination of digital blacklists. ระบบปฏิบัติการขั้นสูงเพื่อกู้คืนชื่อเสียงดิจิทัลและการลบชื่อออกจากรายการบัญชีดำ (Blacklist)",
  isFeatured: true,
  priority: 10,
  category: "authority",
  priceValue: 50000,
  price: "50,000",
  currency: "THB",
  unit: "case",
  benefits: [
    "Permanent removal of negative search results",
    "Strategic elimination from industry blacklists",
    "24/7 Digital Crisis Management",
    "Legal-backed identity protection",
  ],
  coreFeatures: [
    {
      title: "Google Search Audit",
      description: "Deep crawl and entity mapping to identify all negative signals.",
      icon: "search",
    },
    {
      title: "Blacklist Trace & Purge",
      description: "Strategic removal from industry-specific and public blacklists.",
      icon: "shield",
    },
    {
      title: "Identity Hardening",
      description: "Building a fortress of positive E-E-A-T signals to prevent future attacks.",
      icon: "lock",
    },
  ],
  faqs: [
    {
      question: "การลบข้อมูลทำได้ถาวรหรือไม่?",
      answer:
        "ใช่ครับ เราใช้เทคนิคการลบจากต้นทางและลำดับการจัดดัชนี (Indexing) เพื่อผลลัพธ์ที่ถาวร",
    },
  ],
  keywords: [
    "ลบ blacklist",
    "กู้คืนชื่อเสียง",
    "แก้ชื่อเสีย google",
    "reputation management thailand",
  ],
  theme: {
    primary: "oklch(45% 0.15 260)",
    secondary: "oklch(35% 0.12 260)",
    mode: "dark",
    background: "#09090b",
    foreground: "#fafafa",
    radius: "2rem",
  },
  clientTrust: "Accreditation Authority Verified",
  socialProof: {
    rating: 5.0,
    reviewCount: 150,
    localClient: "High-net-worth Individuals & Enterprises",
  },
};
