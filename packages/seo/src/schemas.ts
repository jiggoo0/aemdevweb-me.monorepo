/** @format */

import { SHARED_SITE_CONFIG } from "@repo/core";
import { WithContext, Thing, Person, Organization, WebSite } from "schema-dts";

/**
 * 🌐 Unified Graph Schema (SEO Authority Bridge)
 */
/**
 * [SEO]: Strategic Entity Intelligence Network (JSON-LD Graph) v5.0.0
 * ---------------------------------------------------------
 * This protocol links the Person, the Agency, and the Institutional Authority
 * to establish maximum E-E-A-T for AI Search Engines (GEO).
 */

const ECOSYSTEM = {
  identityUrl: SHARED_SITE_CONFIG.ecosystem?.identityUrl ?? SHARED_SITE_CONFIG.links.me,
  commercialUrl: SHARED_SITE_CONFIG.ecosystem?.commercialUrl ?? SHARED_SITE_CONFIG.links.site,
  masterHub: SHARED_SITE_CONFIG.ecosystem?.masterHub ?? SHARED_SITE_CONFIG.links.unlink,
};

export const getPersonSchema = (): Person => ({
  "@type": "Person",
  "@id": `${ECOSYSTEM.identityUrl}/#expert`,
  name: SHARED_SITE_CONFIG.expert.legalNameThai,
  alternateName: [
    SHARED_SITE_CONFIG.expert.displayName,
    SHARED_SITE_CONFIG.expert.alternateName,
    SHARED_SITE_CONFIG.expert.strategicAlias,
    SHARED_SITE_CONFIG.expert.legalNameEnglish,
  ].filter((v): v is string => !!v),
  url: ECOSYSTEM.identityUrl,
  image: SHARED_SITE_CONFIG.expert.avatar,
  jobTitle: SHARED_SITE_CONFIG.expert.jobTitle,
  description: SHARED_SITE_CONFIG.expert.bio,
  email: SHARED_SITE_CONFIG.expert.email,
  telephone: SHARED_SITE_CONFIG.contact.phone,
  sameAs: [
    SHARED_SITE_CONFIG.links.github,
    SHARED_SITE_CONFIG.links.linkedin,
    SHARED_SITE_CONFIG.links.facebook,
    SHARED_SITE_CONFIG.links.twitter,
    SHARED_SITE_CONFIG.links.youtube,
  ].filter((v): v is string => !!v),
  knowsAbout: SHARED_SITE_CONFIG.expert.skills
    ? [
        ...SHARED_SITE_CONFIG.expert.skills.technical,
        ...SHARED_SITE_CONFIG.expert.skills.seo,
        ...SHARED_SITE_CONFIG.expert.skills.governance,
      ]
    : [],
});

export const getOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  "@id": `${ECOSYSTEM.commercialUrl}/#organization`,
  name: SHARED_SITE_CONFIG.brand.name,
  legalName: SHARED_SITE_CONFIG.brand.legalName,
  url: ECOSYSTEM.commercialUrl,
  logo: {
    "@type": "ImageObject",
    url: `${ECOSYSTEM.commercialUrl}${SHARED_SITE_CONFIG.brand.logo}`,
  },
  description: SHARED_SITE_CONFIG.brand.description,
  foundingDate: SHARED_SITE_CONFIG.brand.foundingDate,
  founder: { "@id": `${ECOSYSTEM.identityUrl}/#expert` },
  address: {
    "@type": "PostalAddress",
    streetAddress: SHARED_SITE_CONFIG.contact.streetAddress,
    addressLocality: SHARED_SITE_CONFIG.business.location,
    addressRegion: SHARED_SITE_CONFIG.business.region,
    postalCode: SHARED_SITE_CONFIG.contact.postalCode,
    addressCountry: "TH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SHARED_SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai", "English"],
    },
  ],
  areaServed: SHARED_SITE_CONFIG.brand.areaServed?.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  sameAs: [
    SHARED_SITE_CONFIG.links.facebook,
    SHARED_SITE_CONFIG.links.linkedin,
    SHARED_SITE_CONFIG.links.twitter,
    SHARED_SITE_CONFIG.links.youtube,
    SHARED_SITE_CONFIG.links.googleMaps,
  ].filter((v): v is string => !!v),
  memberOf: {
    "@type": "Organization",
    name: "UNLINK-GLOBAL Institutional Network",
    url: ECOSYSTEM.masterHub,
  },
});

export const getWebSiteSchema = (): WebSite => ({
  "@type": "WebSite",
  "@id": `${ECOSYSTEM.commercialUrl}/#website`,
  url: ECOSYSTEM.commercialUrl,
  name: SHARED_SITE_CONFIG.brand.fullName,
  publisher: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
});

export const getServiceSchema = (industry: string, location?: string): Thing => ({
  "@type": "Service",
  name: `Professional Web Design & SEO for ${industry}`,
  provider: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
  areaServed: location ? { "@type": "City", name: location } : undefined,
  description: `Advanced Next.js 16 solutions tailored for the ${industry} sector.`,
});

export const getProjectSchema = (study: {
  title: string;
  description: string;
  url: string;
  image: string;
}): Thing => ({
  "@type": "CreativeWork",
  name: study.title,
  description: study.description,
  url: study.url,
  image: study.image,
  author: { "@id": `${ECOSYSTEM.identityUrl}/#expert` },
  publisher: { "@id": `${ECOSYSTEM.commercialUrl}/#organization` },
});

export const getGraphSchema = (additionalNodes: Thing[] = []): WithContext<Thing> => {
  return {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), getOrganizationSchema(), getWebSiteSchema(), ...additionalNodes],
  } as unknown as WithContext<Thing>;
};
