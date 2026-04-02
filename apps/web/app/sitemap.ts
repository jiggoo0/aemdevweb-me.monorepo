/**
 * [SEO_INFRA]: SITEMAP_ORCHESTRATOR v18.0.5 (PRODUCTION_READY)
 * [STRATEGY]: Parallel Node Discovery | SSOT Integration | Priority Calculation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";

// --- 1. Infrastructure Data (SSOT) ---
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@repo/core";
import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";

// --- 2. Content CMS Data (Markdown/MDX) ---
import { getAllPosts, getAllCaseStudies } from "@/lib/cms";

/**
 * @function sitemap
 * @description รวบรวมและแจกจ่ายพิกัด URL ทั้งหมดในระบบไปยัง Search Engine Bots
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = "2026-03-01T00:00:00.000Z";
  const baseUrl = SITE_CONFIG.siteUrl;

  /* [A] DATA_RESOLUTION: ดึงข้อมูลจาก CMS แบบขนานเพื่อ Performance สูงสุด */
  const [posts, caseStudies] = await Promise.all([
    getAllPosts().catch(() => []),
    getAllCaseStudies().catch(() => []),
  ]);

  /**
   * -------------------------------------------------------
   * GROUP 1: STATIC CORE NODES (System Pillars)
   * -------------------------------------------------------
   */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  /**
   * -------------------------------------------------------
   * GROUP 2: SERVICE NODES (Solution Blueprints)
   * -------------------------------------------------------
   */
  const serviceRoutes: MetadataRoute.Sitemap = MASTER_REGISTRY.map((service) => ({
    url: absoluteUrl(`/services/${service.templateSlug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  /**
   * -------------------------------------------------------
   * GROUP 3: AREA NODES (Local SEO Domination)
   * -------------------------------------------------------
   */
  const areaRoutes: MetadataRoute.Sitemap = AREA_NODES.map((area) => ({
    url: absoluteUrl(`/areas/${area.slug}`),
    lastModified,
    changeFrequency: "weekly",
    // [LOGIC]: แปลงคะแนน Priority 0-100 เป็นเกณฑ์ 0.0-1.0 สำหรับ Search Engine
    priority: Number(((area.priority || 50) / 100).toFixed(1)),
  }));

  /**
   * -------------------------------------------------------
   * GROUP 4: KNOWLEDGE GRAPH NODES (Blog & Proof of Concept)
   * -------------------------------------------------------
   */
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: absoluteUrl(`/case-studies/${study.slug}`),
    lastModified: study.date ? new Date(study.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /* [B] ORCHESTRATION: รวมทุก Node เข้าเป็นแผนผังเดียว */
  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...caseStudyRoutes, ...blogRoutes];
}
