/**
 * [LIB]: CMS_ENGINE v18.0.9 (STRICT_TYPE_INTEGRATED)
 * [STRATEGY]: Full Vercel Blob Integration | Hybrid Cloud Data | SQL-First Authority
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";
import matter from "gray-matter";
import { cacheLife, cacheTag } from "next/cache";
import type { BlogPost, CaseStudy, AreaNode, TemplateMasterData } from "@/types";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@repo/core";
import { db } from "./db";
import { getAssetUrl } from "./utils";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_DIR = path.join(process.cwd(), "content/case-studies");

// --- [TYPE DEFINITIONS] ---
interface MDXAttributes {
  title?: string;
  date?: string | Date;
  category?: string;
  thumbnail?: string;
  coverImage?: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
  readingTime?: string;
  client?: string;
  result?: string;
  results?: string[];
  image?: string;
  [key: string]: unknown;
}

// --- [01] DATA ADAPTERS ---

const mapToBlogPost = (slug: string, content: string, data: MDXAttributes): BlogPost => {
  const thumbPath = data.thumbnail || data.coverImage || "/images/blog/default-thumb.webp";
  return {
    slug,
    content,
    title: data.title || "Untitled Post",
    date: data.date
      ? new Date(data.date as string | Date).toISOString()
      : "2026-01-01T00:00:00.000Z",
    category: data.category || "General",
    thumbnail: getAssetUrl(thumbPath),
    coverImage: getAssetUrl(thumbPath),
    description: data.description || data.excerpt || "",
    excerpt: data.excerpt || data.description || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: data.readingTime || "5 min read",
    author: {
      name: "นายเอ็มซ่ามากส์",
      role: "Technical SEO Specialist",
      image: getAssetUrl("/images/avatar.webp"),
    },
  };
};

const mapToCaseStudy = (slug: string, content: string, data: MDXAttributes): CaseStudy => {
  const imgPath = data.thumbnail || data.image || "/images/case-studies/preview.webp";
  return {
    slug,
    content,
    title: data.title || "Success Case",
    client: data.client || "Confidential Client",
    result: data.result || (Array.isArray(data.results) ? data.results[0] : "Growth Guaranteed"),
    thumbnail: getAssetUrl(imgPath),
    image: getAssetUrl(imgPath),
    description: data.description || "",
    date: data.date
      ? new Date(data.date as string | Date).toISOString()
      : "2026-01-01T00:00:00.000Z",
    results: Array.isArray(data.results) ? data.results : [],
    author: {
      name: "นายเอ็มซ่ามากส์",
      role: "Technical SEO Specialist",
      image: getAssetUrl("/images/avatar.webp"),
    },
  };
};

// --- [02] RETRIEVAL ENGINES ---

export async function getAllPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blog-posts");

  if (!fs.existsSync(BLOG_DIR)) return [];
  const fileNames = await fsp.readdir(BLOG_DIR);

  const posts = await Promise.all(
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(BLOG_DIR, fileName);
        const fileContent = await fsp.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContent);
        return mapToBlogPost(slug, content, data as MDXAttributes);
      }),
  );

  return posts.sort(
    (a: BlogPost, b: BlogPost) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("case-studies");

  if (!fs.existsSync(CASE_DIR)) return [];
  const fileNames = await fsp.readdir(CASE_DIR);

  const cases = await Promise.all(
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(CASE_DIR, fileName);
        const fileContent = await fsp.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContent);
        return mapToCaseStudy(slug, content, data as MDXAttributes);
      }),
  );

  return cases.sort(
    (a: CaseStudy, b: CaseStudy) =>
      new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  "use cache";
  cacheTag(`post-${slug}`);

  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const fileContent = await fsp.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    return mapToBlogPost(slug, content, data as MDXAttributes);
  } catch (e) {
    console.error(`[CMS_ERROR]: Failed to parse post ${slug}`, e);
    return undefined;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  "use cache";
  cacheTag(`case-${slug}`);

  const fullPath = path.join(CASE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const fileContent = await fsp.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    return mapToCaseStudy(slug, content, data as MDXAttributes);
  } catch (e) {
    console.error(`[CMS_ERROR]: Failed to parse case study ${slug}`, e);
    return undefined;
  }
}

// --- [04] TURSO CLOUD DYNAMIC LOOKUPS ---

export async function getLiveMetrics(): Promise<Record<string, number>> {
  "use cache";
  cacheTag("system-metrics");

  try {
    const result = await db.execute("SELECT metric_key, metric_value FROM system_metrics");
    const metrics: Record<string, number> = {};
    result.rows.forEach((row) => {
      metrics[String(row.metric_key)] = Number(row.metric_value);
    });
    return metrics;
  } catch (error) {
    console.error("[TURSO_ERROR]: Failed to fetch metrics", error);
    return { PERF_CORE: 99.9, ROI_VELOCITY: 350, UPTIME_SHIELD: 100, AI_AUTHORITY: 1.5 };
  }
}

export async function getAllServices(): Promise<TemplateMasterData[]> {
  "use cache";
  cacheTag("all-services");

  try {
    const result = await db.execute("SELECT * FROM services ORDER BY price_start ASC");
    if (result.rows.length === 0) return [...MASTER_REGISTRY];

    return result.rows.map((row) => {
      const blueprint = MASTER_REGISTRY.find((s) => s.templateSlug === row.slug);
      return {
        ...(blueprint || ({} as Record<string, unknown>)),
        title: String(row.title),
        description: String(row.description),
        image: getAssetUrl(blueprint?.image || `/images/services/${String(row.slug)}-node.webp`),
        priceValue: Number(row.price_start),
        price: Number(row.price_start).toLocaleString(),
        isFeatured: Boolean(row.is_featured),
        category: String(row.category) as TemplateMasterData["category"],
      };
    }) as TemplateMasterData[];
  } catch (error) {
    console.error("[TURSO_ERROR]: Failed to fetch all services", error);
    return [...MASTER_REGISTRY];
  }
}

export async function getServiceBySlug(slug: string): Promise<TemplateMasterData | undefined> {
  "use cache";
  cacheTag(`service-${slug}`);

  try {
    const result = await db.execute({
      sql: "SELECT * FROM services WHERE slug = ? LIMIT 1",
      args: [slug],
    });

    const blueprint = MASTER_REGISTRY.find((s) => s.templateSlug === slug);
    if (result.rows.length === 0) return blueprint;

    const row = result.rows[0];
    return {
      ...(blueprint || ({} as Record<string, unknown>)),
      title: String(row.title),
      description: String(row.description),
      image: getAssetUrl(blueprint?.image || `/images/services/${slug}-node.webp`),
      priceValue: Number(row.price_start),
      price: Number(row.price_start).toLocaleString(),
      isFeatured: Boolean(row.is_featured),
      category: String(row.category) as TemplateMasterData["category"],
    } as TemplateMasterData;
  } catch (error) {
    console.error(`[TURSO_ERROR]: Failed to fetch service ${slug}`, error);
    return MASTER_REGISTRY.find((s) => s.templateSlug === slug);
  }
}

// --- [05] AREA LOOKUPS (TURSO) ---

export async function getAreaBySlug(slug: string): Promise<AreaNode | undefined> {
  "use cache";
  cacheTag(`area-${slug}`);

  try {
    const result = await db.execute({
      sql: "SELECT * FROM provinces WHERE slug = ? LIMIT 1",
      args: [slug],
    });

    if (result.rows.length === 0) return AREA_NODES.find((a) => a.slug === slug);

    const row = result.rows[0];
    const staticNode = AREA_NODES.find((a) => a.slug === slug);

    return {
      ...(staticNode || ({} as Record<string, unknown>)),
      slug: String(row.slug),
      province: String(row.name_th),
      heroImage: getAssetUrl(
        staticNode?.heroImage || `/images/areas/${String(row.slug)}-node.webp`,
      ),
      title: staticNode?.title || String(row.name_th),
      description: String(row.seo_description || staticNode?.description),
      priority: Number(row.priority),
      region: String(row.region) as AreaNode["region"],
      seoTitle: String(row.seo_title),
      seoDescription: String(row.seo_description),
    } as AreaNode;
  } catch (error) {
    console.error(`[TURSO_ERROR]: Failed to fetch area ${slug}`, error);
    return AREA_NODES.find((a) => a.slug === slug);
  }
}

export async function getAllAreas(): Promise<AreaNode[]> {
  "use cache";
  cacheTag("all-areas");

  try {
    const result = await db.execute("SELECT * FROM provinces ORDER BY priority DESC");
    if (result.rows.length === 0) return AREA_NODES;

    return result.rows.map((row) => {
      const staticNode = AREA_NODES.find((a) => a.slug === row.slug);
      return {
        ...(staticNode || ({} as Record<string, unknown>)),
        slug: String(row.slug),
        province: String(row.name_th),
        heroImage: getAssetUrl(
          staticNode?.heroImage || `/images/areas/${String(row.slug)}-node.webp`,
        ),
        priority: Number(row.priority),
        region: String(row.region) as AreaNode["region"],
      };
    }) as AreaNode[];
  } catch (error) {
    console.error("[TURSO_ERROR]: Failed to fetch all areas", error);
    return AREA_NODES;
  }
}
