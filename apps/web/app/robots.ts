import { MetadataRoute } from "next";
import { SHARED_SITE_CONFIG } from "@repo/core";

/**
 * [SEO]: ROBOTS.TXT CONFIGURATION
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/_next/static/", "/_next/image/"],
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${SHARED_SITE_CONFIG.links.site}/sitemap.xml`,
  };
}
