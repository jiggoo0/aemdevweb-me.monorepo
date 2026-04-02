export const BRAND_IDENTITY = {
  brand: "AEMDEVWEB",
  founder: {
    th: "ชื่อจริง นามสกุล", // TODO: Replace with actual
    en: "Firstname Lastname" // TODO: Replace with actual
  },
  getSignatureKeywords: () => 
    `${BRAND_IDENTITY.brand}, ${BRAND_IDENTITY.founder.th}, ${BRAND_IDENTITY.founder.en}`
};
