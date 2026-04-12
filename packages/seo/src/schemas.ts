/** @format */

import { SHARED_SITE_CONFIG } from "@repo/core";
import { WithContext, Thing, Person, Organization, WebSite } from "schema-dts";

/**
 * 🌐 Unified Graph Schema (SEO Authority Bridge)
 */
/**
 * 🌐 Strategic Entity Intelligence Network (JSON-LD Graph)
 * ---------------------------------------------------------
 * This protocol links the Person, the Agency, and the Institutional Authority
 * to establish maximum E-E-A-T for AI Search Engines (GEO).
 */

export const getPersonSchema = (): Person => ({
  "@type": "Person",
  "@id": `${SHARED_SITE_CONFIG.ecosystem.identityUrl}/#expert`,
  name: SHARED_SITE_CONFIG.expert.legalNameThai,
  alternateName: SHARED_SITE_CONFIG.expert.alternateName,
  url: SHARED_SITE_CONFIG.ecosystem.identityUrl,
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
  "@id": `${SHARED_SITE_CONFIG.ecosystem.commercialUrl}/#organization`,
  name: SHARED_SITE_CONFIG.brand.name,
  url: SHARED_SITE_CONFIG.ecosystem.commercialUrl,
  founder: { "@id": `${SHARED_SITE_CONFIG.ecosystem.identityUrl}/#expert` },
  memberOf: {
    "@type": "Organization",
    name: "UNLINK-GLOBAL Institutional Network",
    url: SHARED_SITE_CONFIG.ecosystem.masterHub,
  },
});

export const getWebSiteSchema = (): WebSite => ({
  "@type": "WebSite",
  "@id": `${SHARED_SITE_CONFIG.ecosystem.commercialUrl}/#website`,
  url: SHARED_SITE_CONFIG.ecosystem.commercialUrl,
  name: SHARED_SITE_CONFIG.brand.fullName,
  publisher: { "@id": `${SHARED_SITE_CONFIG.ecosystem.commercialUrl}/#organization` },
});

export const getGraphSchema = (): WithContext<Thing> => {
  return {
    "@context": "https://schema.org",
    "@graph": [getPersonSchema(), getOrganizationSchema(), getWebSiteSchema()],
  } as unknown as WithContext<Thing>;
};
