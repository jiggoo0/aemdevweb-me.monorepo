/** @format */

import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

/**
 * AEMDEVWEB | Identity Hub Crawler Governance (2026)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Full Visibility for High-Performance Rendering"
 * จัดการพิกัดโดย: นายเอ็มซ่ามากส์
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/", // [CRITICAL]: ปลดล็อกเพื่อให้ Google โหลด CSS/JS ไปเรนเดอร์หน้าเว็บได้
          "/_next/image", // [CRITICAL]: ปลดล็อกเพื่อให้บอทเห็นรูปภาพที่จูนความซิ่งไว้
          "/api/og", // อนุญาตให้บอทเข้าถึงรูป OG สำหรับ Social Share
        ],
        disallow: [
          "/_next/", // ปิดพิกัดระบบหลัก (ยกเว้นส่วนที่ Allow ด้านบน)
          "/api/", // ปิดพิกัดรับส่งข้อมูลหลังบ้าน
          "/admin/", // พิกัดจัดการระบบ (ถ้ามี)
          "/*?*", // ป้องกัน Duplicate Content จาก URL Parameters
        ],
      },
      {
        /**
         * AI Agent Strategy: เปิดกว้างเพื่อให้ AI Search (Perplexity/SearchGPT)
         * นำข้อมูล Identity ของบอสไปแสดงผลได้อย่างถูกต้อง
         */
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Google-Extended",
        ],
        allow: ["/", "/about", "/projects", "/blog"],
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
