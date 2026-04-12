import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cacheLife, cacheTag } from "next/cache";

/**
 * [HELPER]: Resolve Blog Path
 * จัดการหาตำแหน่งโฟลเดอร์ content/blog ให้ถูกต้องใน Monorepo
 */
const getBlogPath = () => {
  const currentDir = process.cwd();
  const directPath = path.join(currentDir, "content/blog");
  const appPath = path.join(currentDir, "apps/web/content/blog");

  if (fs.existsSync(directPath)) return directPath;
  if (fs.existsSync(appPath)) return appPath;

  // Fallback สำหรับ Production/Vercel
  return path.join(currentDir, "apps/web/content/blog");
};

const BLOG_PATH = getBlogPath();

/**
 * [TYPE]: BlogPostMetadata
 * มาตรฐานข้อมูลบทความจาก MDX Frontmatter
 */
export interface BlogPostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
  coverImage?: string;
  readingTime?: string;
  author?: string;
}

/**
 * [HELPER]: getAllBlogPosts
 * ดึงรายการบทความทั้งหมดพร้อมคัดกรอง Metadata แบบ High-Performance (Async/Parallel)
 */
export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  "use cache";
  cacheTag("mdx-blog-posts");
  cacheLife("days");

  if (!fs.existsSync(BLOG_PATH)) return [];

  const files = fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith(".mdx"));

  // [OPTIMIZED]: ใช้ Promise.all และ fs.promises เพื่ออ่านไฟล์แบบ Parallel
  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(BLOG_PATH, file);
      const source = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(source);

      // [STANDARDIZATION]: เติมค่า Default หาก Metadata ไม่ครบถ้วน
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Transmission",
        date: data.date || new Date().toISOString(),
        category: data.category || "General",
        description: data.description || "",
        excerpt: data.excerpt || data.description || "",
        tags: data.tags || [],
        thumbnail: data.thumbnail || "/images/blog/default.webp",
        coverImage: data.coverImage || data.thumbnail || "/images/blog/default.webp",
        readingTime: data.readingTime || "5 min read",
        author: data.author || "AEM Architect",
        ...data,
      } as BlogPostMetadata;
    }),
  );

  // เรียงลำดับตามวันที่ (ล่าสุดขึ้นก่อน)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * [HELPER]: getPostMetadataBySlug
 * ดึง Metadata ของบทความเดียวแบบ Async
 */
export async function getPostMetadataBySlug(slug: string): Promise<BlogPostMetadata | null> {
  "use cache";
  cacheTag(`mdx-post-${slug}`);
  cacheLife("days");

  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = await fs.promises.readFile(filePath, "utf8");
  const { data } = matter(source);

  return {
    slug,
    title: data.title || "Untitled Transmission",
    date: data.date || new Date().toISOString(),
    category: data.category || "General",
    ...data,
  } as BlogPostMetadata;
}
