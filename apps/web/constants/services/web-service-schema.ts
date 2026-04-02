/**
 * [SERVICE_SCHEMA]: Technical SEO & E-E-A-T Injection
 * สำหรับหน้าบริการสร้างเว็บไซต์ (v18.0.1)
 */
export const WEB_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development & Technical SEO",
  provider: {
    "@type": "LocalBusiness",
    name: "AEMDEVWEB",
    image: "/images/logo-main.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ตำบลในเมือง",
      addressLocality: "เมืองกำแพงเพชร",
      addressRegion: "กำแพงเพชร",
      postalCode: "62000",
      addressCountry: "TH",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "Thailand",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Infrastructure Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js 16 Edge Development",
          description: "High-performance web applications using Turso Edge Database.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Search Domination (GEO)",
          description: "Optimizing content for AI recommendation engines and Google Search.",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.aemdevweb.com/services/web-development",
  },
};
