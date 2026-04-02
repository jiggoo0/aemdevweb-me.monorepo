/** @format */

import { siteConfig } from "@/constants/site-config";
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
  name: siteConfig.legalName,
  url: siteConfig.url,
});

export const getOrganizationSchema = (): Organization => ({
  "@type": "Organization",
  name: siteConfig.legalName,
  url: siteConfig.url,
});

export const getWebSiteSchema = (): WebSite => ({
  "@type": "WebSite",
  name: siteConfig.legalName,
  url: siteConfig.url,
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
