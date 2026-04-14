import { MetadataRoute } from "next";
import { getAllContent } from "@/lib/mdx";

/**
 * [SEO]: ARCHITECT HUB SITEMAP GENERATOR v1.0.0
 * [STRATEGY]: 0% SEO Cannibalization | High Authority Personal Hub
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://me.aemdevweb.com";

  // 1. Core Pages
  const corePages = ["", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Blog Posts
  const posts = await getAllContent("blog");
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Projects
  const projects = await getAllContent("projects");
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...blogPages, ...projectPages] as MetadataRoute.Sitemap;
}
