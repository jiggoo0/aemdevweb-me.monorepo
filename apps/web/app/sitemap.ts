import { MetadataRoute } from "next";
import { AREA_NODES, SHARED_SITE_CONFIG } from "@repo/core";
import { getProjects, getPosts } from "@repo/db";

/**
 * [SEO]: DYNAMIC SITEMAP GENERATOR v1.2.0
 * [STRATEGY]: Full 77 Province Coverage + Portfolio + Blog + Core Marketing Pages
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SHARED_SITE_CONFIG.links.site;
  const { data: projects } = await getProjects();
  const { data: posts } = await getPosts();

  // 1. Core Pages
  const corePages = ["", "/services", "/portfolio", "/about", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-04-12T00:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Dynamic Province Pages (The 77 Engine)
  const provincePages = AREA_NODES.map((node) => ({
    url: `${baseUrl}/${node.slug}`,
    lastModified: "2026-04-12T00:00:00.000Z",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Portfolio Project Pages
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectPages = ((projects as unknown[] | null) || []).map((project: any) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Blog Analysis Pages
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogPages = ((posts as unknown[] | null) || []).map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...provincePages, ...projectPages, ...blogPages] as MetadataRoute.Sitemap;
}
