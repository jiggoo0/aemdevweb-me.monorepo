import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cacheLife, cacheTag } from "next/cache";

/**
 * [RESOLVER]: Content Path Resolution
 */
const getPath = (subPath: string) => {
  return path.join(process.cwd(), `content/${subPath}`);
};

const BLOG_PATH = getPath("blog");
const PROJECTS_PATH = getPath("projects");

/**
 * [INTERFACES]: Standard Metadata Models
 */
export interface ContentMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  tags?: string[];
  category?: string;
  author?: string;
}

/**
 * [ENGINE]: getAllContent
 */
export async function getAllContent(type: "blog" | "projects"): Promise<ContentMetadata[]> {
  "use cache";
  const contentPath = type === "blog" ? BLOG_PATH : PROJECTS_PATH;
  cacheTag(`${type}-content-all`);
  cacheLife("days");

  if (!fs.existsSync(contentPath)) return [];

  const files = fs.readdirSync(contentPath).filter((f) => f.endsWith(".mdx"));

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(contentPath, file);
      const source = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(source);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        image: data.image || data.thumbnail || "/images/blog/default.webp",
        tags: data.tags || [],
        category: data.category || "General",
        ...data,
      } as ContentMetadata;
    }),
  );

  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * [ENGINE]: getContentBySlug
 */
export async function getContentBySlug(type: "blog" | "projects", slug: string) {
  "use cache";
  const contentPath = type === "blog" ? BLOG_PATH : PROJECTS_PATH;
  cacheTag(`${type}-content-${slug}`);
  cacheLife("days");

  const filePath = path.join(contentPath, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    metadata: {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      image: data.image || data.thumbnail || "/images/blog/default.webp",
      tags: data.tags || [],
      ...data,
    } as ContentMetadata,
    content,
  };
}
