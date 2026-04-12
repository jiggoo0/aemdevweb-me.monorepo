import { SHARED_SITE_CONFIG } from "@repo/core";

export const BRAND_IDENTITY = {
  brand: SHARED_SITE_CONFIG.brand.name,
  founder: {
    th: SHARED_SITE_CONFIG.expert.legalNameThai,
    en: SHARED_SITE_CONFIG.expert.legalNameEnglish,
  },
  getSignatureKeywords: () =>
    `${BRAND_IDENTITY.brand}, ${BRAND_IDENTITY.founder.th}, ${BRAND_IDENTITY.founder.en}`,
};

export * from "./JsonLd";
export * from "./ReputationShield";
export * from "./schemas";
