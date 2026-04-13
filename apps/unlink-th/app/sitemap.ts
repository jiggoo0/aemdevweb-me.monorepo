import { MetadataRoute } from "next";

/**
 * [SEO]: UNLINK THAILAND SITEMAP GENERATOR v1.0.0
 * [STRATEGY]: Institutional Registry + Verification Infrastructure SEO
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unlink-th.com";
  const currentDate = new Date().toISOString();

  // 1. Core Institutional Pages
  const corePages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/registry`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leads`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return corePages as MetadataRoute.Sitemap;
}
