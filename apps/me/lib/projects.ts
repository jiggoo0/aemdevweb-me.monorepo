/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

// กำหนดตำแหน่งโฟลเดอร์สำหรับเก็บไฟล์เนื้อหาโปรเจกต์ (.mdx)
const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

/**
 * ดึงรายชื่อโปรเจกต์ทั้งหมด (Memoized)
 */
export const getAllProjects = cache(async (): Promise<any[]> => {
  try {
    if (!fs.existsSync(PROJECTS_DIR)) return [];

    const files = fs.readdirSync(PROJECTS_DIR);

    const projects = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(PROJECTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
          slug: file.replace(".mdx", ""),
          title: data.title || "Untitled Project",
          description: data.description || "",
          date: data.date ? String(data.date) : "",
          image: data.image || "/images/service/aemdevweb.webp",
          tags: Array.isArray(data.tags) ? data.tags : [],
          link: data.link || "",
          featured: data.featured === true,
          content,
        };
      });

    return projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
});

/**
 * ดึงข้อมูลโปรเจกต์รายชิ้นตาม Slug (Memoized)
 */
export const getProjectBySlug = cache(
  async (slug: string): Promise<any | null> => {
    try {
      const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
      if (!fs.existsSync(filePath)) return null;

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled Project",
        description: data.description || "",
        date: data.date ? String(data.date) : "",
        image: data.image || "/images/service/aemdevweb.webp",
        tags: Array.isArray(data.tags) ? data.tags : [],
        link: data.link || "",
        featured: data.featured === true,
        content,
      };
    } catch {
      return null;
    }
  }
);
