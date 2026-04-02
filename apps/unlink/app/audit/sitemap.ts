import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const today = new Date();

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Add other relevant routes here if they exist and are crawlable
    // Example:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: today,
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
  ];
}
