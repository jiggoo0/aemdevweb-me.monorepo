/** @format */

import { SHARED_SITE_CONFIG } from "../constants/site-config";
import {
  WithContext,
  Thing,
  Person,
  Organization,
  WebSite,
} from "schema-dts";

/**
 * 🌐 Unified Graph Schema (SEO Authority Bridge)
 */
export const getPersonSchema = (): Person => ({
  "@type": "Person",
  name: SHARED_SITE_CONFIG.expert.legalName,
  url: SHARED_SITE_CONFIG.ecosystem.identityUrl,
});

export const getOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  name: SHARED_SITE_CONFIG.expert.legalName,
  url: SHARED_SITE_CONFIG.ecosystem.commercialUrl,
});

export const getWebSiteSchema = (): WebSite => ({
  "@type": "WebSite",
  name: SHARED_SITE_CONFIG.expert.legalName,
  url: SHARED_SITE_CONFIG.ecosystem.commercialUrl,
});

export const getGraphSchema = (): WithContext<Thing> => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getOrganizationSchema(),
      getWebSiteSchema(),
    ],
  } as unknown as WithContext<Thing>;
};
