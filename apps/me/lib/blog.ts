/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

// กำหนดตำแหน่งโฟลเดอร์สำหรับเก็บไฟล์เนื้อหาบล็อก (.mdx)
const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * ดึงรายชื่อบทความทั้งหมด (ใช้สำหรับหน้า Blog Listing และหน้า Home)
 * ยุทธศาสตร์: Memoized Fetching เพื่อลด I/O Overhead ในระดับ Request
 */
export const getAllPosts = cache(async (): Promise<any[]> => {
  try {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR);

    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
          slug: file.replace(".mdx", ""),
          title: data.title || "Untitled Post",
          description: data.description || "",
          date: data.date ? String(data.date) : "",
          image: data.image || "/images/blog/aemdevweb.webp",
          tags: Array.isArray(data.tags) ? data.tags : [],
          content,
        };
      });

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
});

/**
 * ดึงข้อมูลบทความรายชิ้น (Memoized เพื่อรองรับ generateMetadata และ Page content พร้อมกัน)
 */
export const getPostBySlug = cache(
  async (slug: string): Promise<any | null> => {
    try {
      const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
      if (!fs.existsSync(filePath)) return null;

      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "Untitled Post",
        description: data.description || "",
        date: data.date ? String(data.date) : "",
        image: data.image || "/images/blog/aemdevweb.webp",
        tags: Array.isArray(data.tags) ? data.tags : [],
        content,
      };
    } catch {
      return null;
    }
  }
);
