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
 * [SYNC]: ตรงกับ UI Components (PostCard, TemplateShowcase)
 */
export interface BlogPostMetadata {
  slug: string;
  title: string;
  published_at: string; // Sync with PostCard
  category: string;
  description: string;
  excerpt: string;
  tags: string[];
  thumbnail_url: string; // Sync with PostCard
  coverImage?: string;
  readingTime?: string;
  author_id: string; // Sync with PostCard
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

      // [STRICT SYNC]: แปลง Metadata ให้ตรงกับ UI Component 100%
      const postMetadata: BlogPostMetadata = {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Transmission",
        published_at: data.date || new Date().toISOString(),
        category: data.category || "General",
        description: data.description || "",
        excerpt: data.excerpt || data.description || "",
        tags: data.tags || [],
        thumbnail_url: data.thumbnail || "/images/blog/default.webp",
        author_id: data.author || "AEM_Architect",
        ...data,
      };

      return postMetadata;
    }),
  );

  return posts.sort((a, b) => {
    const dateB = new Date(a.published_at).getTime();
    const dateA = new Date(b.published_at).getTime();
    return dateA - dateB;
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
    const dateB = new Date(b.date).getTime();
    const dateA = new Date(a.date).getTime();
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
 * [BLOG ENGINE]: getBlogPostBySlug
 */
export async function getBlogPostBySlug(
  slug: string,
): Promise<{ metadata: BlogPostMetadata; content: string } | null> {
  "use cache";
  cacheTag(`mdx-post-${slug}`);
  cacheLife("days");

  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  const metadata: BlogPostMetadata = {
    slug,
    title: data.title || "Untitled Transmission",
    published_at: data.date || new Date().toISOString(),
    category: data.category || "General",
    description: data.description || "",
    excerpt: data.excerpt || data.description || "",
    tags: data.tags || [],
    thumbnail_url: data.thumbnail || "/images/blog/default.webp",
    author_id: data.author || "AEM_Architect",
    ...data,
  };

  return { metadata, content };
}
