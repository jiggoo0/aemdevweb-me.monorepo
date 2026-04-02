import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-REGISTRY | Search Engine Accessibility Protocol
 * -------------------------------------------------------------------------
 * หน้าที่: ควบคุมการเข้าถึงของ Search Engine Bot ให้เน้นเฉพาะเนื้อหาคุณภาพ
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/registry/", "/verify/", "/v/"],
        disallow: [
          "/api/", // ป้องกันการเข้าถึง Endpoint ภายใน
          "/admin/", // ป้องกันการเข้าถึงหน้าแอดมิน
        ],
      },
      {
        userAgent: "GPTBot",
        allow: ["/registry/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
