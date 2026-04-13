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
  alternateName: SHARED_SITE_CONFIG.expert.alternateName,
  url: ECOSYSTEM.identityUrl,
  image: SHARED_SITE_CONFIG.expert.avatar,
  jobTitle: SHARED_SITE_CONFIG.expert.jobTitle,
  description: SHARED_SITE_CONFIG.expert.bio,
  sameAs: [
    SHARED_SITE_CONFIG.links.github,
    SHARED_SITE_CONFIG.links.linkedin,
    SHARED_SITE_CONFIG.links.facebook,
  ],
});

export const getOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  "@id": `${ECOSYSTEM.commercialUrl}/#organization`,
  name: SHARED_SITE_CONFIG.brand.name,
  url: ECOSYSTEM.commercialUrl,
  founder: { "@id": `${ECOSYSTEM.identityUrl}/#expert` },
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
