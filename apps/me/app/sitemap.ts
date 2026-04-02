/** @format */

import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { getAllProjects } from "@/lib/projects";
import fs from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // ตรวจสอบพิกัด Directory ให้ตรงกับ Tech Stack (MDX Content)
  const blogDir = path.join(process.cwd(), "content/blog");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`, // ยืนยัน Root Domain Consistency
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const getBlogRoutes = (
    dir: string,
    routePath: string,
    priority: number
  ): MetadataRoute.Sitemap => {
    if (!fs.existsSync(dir)) return [];

    const items = fs.readdirSync(dir);

    return items
      .map((item) => {
        if (!item.endsWith(".mdx")) return null;

        const filePath = path.join(dir, item);
        const slug = item.replace(".mdx", "");

        const stats = fs.statSync(filePath);
        return {
          url: `${baseUrl}/${routePath}/${slug}`,
          lastModified: stats.mtime,
          changeFrequency: "weekly" as const,
          priority: priority,
        };
      })
      .filter(Boolean) as MetadataRoute.Sitemap;
  };

  const blogRoutes = getBlogRoutes(blogDir, "blog", 0.7);

  // ดึงข้อมูลโปรเจกต์จากระบบ MDX ที่ปรับปรุงใหม่
  const projects = await getAllProjects();
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
    const filePath = path.join(
      process.cwd(),
      "content/projects",
      `${project.slug}.mdx`
    );
    const lastMod = fs.existsSync(filePath)
      ? fs.statSync(filePath).mtime
      : new Date();

    return {
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...blogRoutes, ...projectRoutes];
}
