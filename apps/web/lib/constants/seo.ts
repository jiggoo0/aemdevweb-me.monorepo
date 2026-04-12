import { SHARED_SITE_CONFIG } from "@repo/core";

/**
 * [SEO]: Standard Metadata Constants
 * Centralized SEO templates and keywords for the entire application.
 */
export const SEO_CONSTANTS = {
  DEFAULT_TITLE_TEMPLATE: `%s | ${SHARED_SITE_CONFIG.brand.name}`,
  DEFAULT_DESCRIPTION:
    "บริการรับทำเว็บไซต์ Next.js และ SEO ทะยานสู่หน้าแรกด้วยระบบ Hyper-localization ครอบคลุมทั่วประเทศไทย",
  DEFAULT_OG_IMAGE: "/images/og-main.webp",

  KEYWORDS: {
    ENTERPRISE: [
      "รับทำเว็บ กรุงเทพ",
      "Enterprise Web Development Bangkok",
      "Next.js Agency Thailand",
    ],
    TOURISM: ["Professional Web Design", "Hotel SEO Phuket", "Resort Digital Marketing"],
    STANDARD: ["รับทำเว็บไซต์", "บริการดูแลเว็บครบวงจร", "AEMDEVWEB"],
  },

  LOCALE: "th_TH",
  THEME_COLOR: "#050505",
};
