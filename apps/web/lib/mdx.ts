import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cacheLife, cacheTag } from "next/cache";

/**
 * [RESOLVER]: Path Resolution Engine
 */
const getPath = (subPath: string) => {
  const currentDir = process.cwd();
  const directPath = path.join(currentDir, `content/${subPath}`);
  const appPath = path.join(currentDir, `apps/web/content/${subPath}`);

  if (fs.existsSync(directPath)) return directPath;
  if (fs.existsSync(appPath)) return appPath;

  return path.join(currentDir, `apps/web/content/${subPath}`);
};

const BLOG_PATH = getPath("blog");
const CASE_STUDIES_PATH = getPath("case-studies");

/**
 * [INTERFACES]: Standard Metadata Models
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

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  theme?: string;
  description: string;
  date: string;
  thumbnail: string;
  coverImage: string;
  tags: string[];
  stats: { label: string; value: string }[];
  content?: string;
}

/**
 * [BLOG ENGINE]: getAllBlogPosts
 */
export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  "use cache";
  cacheTag("mdx-blog-posts");
  cacheLife("days");

  if (!fs.existsSync(BLOG_PATH)) return [];

  const files = fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(BLOG_PATH, file);
      const source = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(source);

      // [STRICT MAPPING]: ป้องกันข้อมูลหลุดและค่าว่าง
      const postMetadata: BlogPostMetadata = {
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
        ...data, // กระจายข้อมูลที่เหลือ
      };

      return postMetadata;
    }),
  );

  return posts.sort((a, b) => {
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * [CASE STUDIES ENGINE]: getAllCaseStudies
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  "use cache";
  cacheTag("mdx-case-studies");
  cacheLife("days");

  if (!fs.existsSync(CASE_STUDIES_PATH)) return [];

  const files = fs.readdirSync(CASE_STUDIES_PATH).filter((f) => f.endsWith(".mdx"));

  const studies = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(CASE_STUDIES_PATH, file);
      const source = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(source);

      const study: CaseStudy = {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Case Study",
        client: data.client || "Confidential",
        industry: data.industry || "General",
        theme: data.theme || "",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        thumbnail: data.thumbnail || "/images/cases/default.webp",
        coverImage: data.coverImage || data.thumbnail || "/images/cases/default.webp",
        tags: data.tags || [],
        stats: data.stats || [],
        ...data,
      };

      return study;
    }),
  );

  return studies.sort((a, b) => {
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    return dateB - dateA;
  });
}

/**
 * [CASE STUDIES ENGINE]: getCaseStudyBySlug
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  "use cache";
  cacheTag(`case-study-${slug}`);
  cacheLife("days");

  const filePath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title || "Untitled Case Study",
    client: data.client || "Confidential",
    industry: data.industry || "General",
    theme: data.theme || "",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    thumbnail: data.thumbnail || "/images/cases/default.webp",
    coverImage: data.coverImage || data.thumbnail || "/images/cases/default.webp",
    tags: data.tags || [],
    stats: data.stats || [],
    content,
    ...data,
  } as CaseStudy;
}

/**
 * [BLOG ENGINE]: getPostMetadataBySlug
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
