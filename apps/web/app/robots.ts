/**
 * [SEO_INFRASTRUCTURE]: ROBOTS_ORCHESTRATOR v18.0.5 (STABILIZED)
 * [STRATEGY]: Rendering Optimization | Crawl Budget Management
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image", "/images/"],
        disallow: ["/api/", "/admin/", "/status", "/private/", "/*?*"],
      },
      {
        userAgent: ["GPTBot", "CCBot", "Google-Extended"],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
