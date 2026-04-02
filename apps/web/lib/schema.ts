/**
 * [SEO ENGINE]: MASTER_SCHEMA_ORCHESTRATOR v18.1.6 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Schema-DTS Strict | E-E-A-T Knowledge Graph | Zero-Crash Execution
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import type { AreaNode, UniversalTemplateProps, TemplateMasterData } from "@/types";
import type {
  Graph,
  Organization,
  Person,
  WebSite,
  ProfessionalService,
  Product,
  BreadcrumbList,
  PostalAddress,
  Thing,
  GeoCoordinates,
  Offer,
  ImageObject,
} from "schema-dts";

// =========================================
// [01] INFRASTRUCTURE HELPERS (SSOT)
// =========================================

const absoluteUrl = (path: string | undefined): string => {
  if (!path) return `${SITE_CONFIG.siteUrl}/images/og-main.webp`;
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${SITE_CONFIG.siteUrl}/${cleanPath}`;
};

// =========================================
// [02] CORE SHARED NODES (BLUEPRINT)
// =========================================

const sharedAddress: PostalAddress = {
  "@type": "PostalAddress",
  "@id": absoluteUrl("/#address"),
  streetAddress: SITE_CONFIG.contact.streetAddress || SITE_CONFIG.contact.address,
  addressLocality: SITE_CONFIG.business.location,
  addressRegion: SITE_CONFIG.business.region,
  postalCode: SITE_CONFIG.contact.postalCode,
  addressCountry: "TH",
};

const organizationNode: Organization = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE_CONFIG.brandName,
  url: SITE_CONFIG.siteUrl,
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl(SITE_CONFIG.logo),
    width: "112",
    height: "112",
  } as ImageObject,
  address: sharedAddress,
  /** [DEEP_LINKING]: เชื่อมโยงตัวตนบนโซเชียลเพื่อ E-E-A-T */
  sameAs: [
    SITE_CONFIG.links.facebook,
    SITE_CONFIG.links.github,
    SITE_CONFIG.links.linkedin,
    SITE_CONFIG.links.twitter,
    SITE_CONFIG.links.youtube,
  ].filter(Boolean) as string[],
};

// ... (openingHours logic)
const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
];

const personNode: Person = {
  "@id": absoluteUrl("/#expert"),
  "@type": "Person",
  name: SITE_CONFIG.expert.legalNameThai,
  jobTitle: SITE_CONFIG.expert.jobTitle,
  image: absoluteUrl(SITE_CONFIG.expert.avatar),
  url: absoluteUrl("/about"), // หรือตาม bioUrl
  worksFor: { "@id": absoluteUrl("/#organization") },
  description: SITE_CONFIG.expert.bio,
  sameAs: [
    ...(SITE_CONFIG.expert.sameAs || []),
    SITE_CONFIG.links.linkedin,
    SITE_CONFIG.links.twitter,
    SITE_CONFIG.links.github,
    SITE_CONFIG.links.facebook,
  ].filter((v, i, a) => v && a.indexOf(v) === i) as string[],
  knowsAbout: [
    "AI Agent Integration",
    "Next.js 16 Performance Architecture",
    "Technical SEO Engineering",
    "Generative Engine Optimization (GEO)",
    "B2B Digital Transformation",
  ],
  knowsLanguage: ["Thai", "English"],
};

// =========================================
// [03] SCHEMA GENERATORS
// =========================================

export const generatePersonSchema = (): Person => personNode;

export const generateOrganizationSchema = (): Organization => organizationNode;

export const generateBreadcrumbSchema = (
  items: { name: string; item: string }[],
): BreadcrumbList => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: absoluteUrl(it.item),
  })),
});

export const generateSchemaGraph = (schemas: Thing[]): Graph => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationNode as Thing,
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brandName,
      publisher: { "@id": absoluteUrl("/#organization") },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_CONFIG.siteUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    } as WebSite,
    personNode as Thing,
    ...schemas,
  ],
});

export function generateUniversalSchema(
  data: UniversalTemplateProps | TemplateMasterData,
): ProfessionalService | Product {
  const isProduct = ["salepage", "catalog"].includes(data.templateSlug || "");
  const idValue = "id" in data ? (data.id as string) : "";
  const slug = data.templateSlug || idValue;
  const canonicalUrl = absoluteUrl(`/services/${slug}`);

  // [DATA_SYNC]: Extract regional contexts if available
  const price =
    "regionalPricing" in data && data.regionalPricing
      ? data.regionalPricing.startPrice.replace(/[^0-9]/g, "")
      : data.priceValue?.toString();

  const promotions = "promotions" in data ? data.promotions : undefined;

  const base = {
    name: data.title || SITE_CONFIG.brandName,
    description: data.description,
    image: absoluteUrl(data.image || SITE_CONFIG.ogImage),
    url: canonicalUrl,
  };

  const offerNode: Offer = {
    "@type": "Offer",
    price: price || "0",
    priceCurrency: "THB",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    url: canonicalUrl,
    seller: { "@id": absoluteUrl("/#organization") },
    ...(promotions &&
      promotions.length > 0 && {
        name: promotions[0].title,
        description: promotions[0].description,
      }),
  } as Offer;

  const ratingNode = {
    "@type": "AggregateRating",
    ratingValue: data.socialProof?.rating?.toString() || "4.9",
    reviewCount: data.socialProof?.reviewCount?.toString() || "12",
    bestRating: "5",
    worstRating: "1",
  };

  const reviewNode = [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Client Partner" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: "High-performance digital infrastructure delivered with precision.",
    },
  ];

  if (isProduct) {
    return {
      "@type": "Product",
      "@id": `${canonicalUrl}/#product`,
      ...base,
      sku: `AEM-${slug.toUpperCase()}`,
      brand: {
        "@type": "Brand",
        name: SITE_CONFIG.brandName,
      },
      offers: offerNode,
      aggregateRating: ratingNode,
      review: reviewNode,
    } as Product;
  }

  return {
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}/#service`,
    ...base,
    address: sharedAddress,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: price ? `THB ${price}` : SITE_CONFIG.business.priceRange,
    provider: { "@id": absoluteUrl("/#organization") },
    // [E-E-A-T]: ระบุตัวตนผู้เชี่ยวชาญ (Expert) เป็นผู้ดูแลหลักของบริการนี้
    author: { "@id": absoluteUrl("/#expert") },
    award: "Technical SEO Excellence 2026",
    knowsAbout: [
      "ระบบทำเว็บโหลดเร็วพิเศษด้วย Next.js",
      "การปรับแต่ง Technical SEO เพื่อปิดการขาย",
      "เทคนิคทำให้ AI แนะนำธุรกิจ (GEO)",
      "สถาปัตยกรรมเว็บไซต์ความเร็วสูงระดับ Enterprise",
    ],
    offers: offerNode,
    aggregateRating: ratingNode,
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Client Partner" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "ระบบโหลดเร็วกว่าที่คิดมากครับ ตั้งแต่ทำเว็บมาเพิ่งเคยเห็นความเร็วระดับนี้ ช่วยให้ลูกค้าไม่หนีและเพิ่มยอดขายได้จริง",
      },
    ],
    openingHoursSpecification: openingHours,
  } as ProfessionalService;
}

export function generateLocalBusinessSchema(data?: Partial<AreaNode>): ProfessionalService {
  const url = data?.slug ? absoluteUrl(`/areas/${data.slug}`) : absoluteUrl("/contact");

  const ratingNode = {
    "@type": "AggregateRating",
    ratingValue: data?.socialProof?.rating?.toString() || "4.9",
    reviewCount: data?.socialProof?.reviewCount?.toString() || "12",
    bestRating: "5",
    worstRating: "1",
  };

  return {
    "@type": "ProfessionalService",
    "@id": `${url}/#localbusiness`,
    name: data?.title || `${SITE_CONFIG.brandName} - ${SITE_CONFIG.business.location}`,
    telephone: SITE_CONFIG.contact.phone,
    priceRange: SITE_CONFIG.business.priceRange,
    url: url,
    image: absoluteUrl(data?.heroImage || SITE_CONFIG.ogImage),
    description: data?.description || SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      "@id": `${url}/#localaddress`,
      streetAddress: SITE_CONFIG.contact.streetAddress || SITE_CONFIG.contact.address,
      addressLocality: data?.province || SITE_CONFIG.business.location,
      addressRegion: data?.province || SITE_CONFIG.business.region,
      addressCountry: "TH",
      postalCode: SITE_CONFIG.contact.postalCode,
    } as PostalAddress,
    parentOrganization: { "@id": absoluteUrl("/#organization") },
    aggregateRating: ratingNode,
    openingHoursSpecification: openingHours,
    ...(data?.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lng,
      } as GeoCoordinates,
    }),
  } as ProfessionalService;
}
