import { MetadataRoute } from "next";

/**
 * [SEO]: ARCHITECT HUB ROBOTS CONFIGURATION v1.0.0
 * [STRATEGY]: 0% SEO Cannibalization | Authority-First Indexing
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://me.aemdevweb.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog", "/projects", "/_next/static/", "/_next/image/"],
      disallow: ["/api/", "/admin/", "/private/", "/temp/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
