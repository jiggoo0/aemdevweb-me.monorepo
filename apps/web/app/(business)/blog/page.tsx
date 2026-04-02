/**
 * [ROUTE_PAGE]: BLOG_HUB_SYSTEM v18.1.0 (UPGRADED)
 * [STRATEGY]: Async searchParams | Server-side Filter | Pagination v2
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { getAllPosts } from "@/lib/cms";
import type { PageProps, BlogPost } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. SEO & Schema Protocols (Knowledge Graph) ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Render Engine ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import BlogCard from "@/components/features/blog/BlogCard";
import BlogFilters from "@/components/features/blog/BlogFilters";
import Pagination from "@/components/ui/Pagination";
import { Button } from "@/components/ui/button";

/** [VIEWPORT]: Mobile-First Theme Integration */
export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

/** [SEO_METADATA]: BLOG_AUTHORITY_PROTOCOL */
export const metadata: Metadata = constructMetadata({
  title: "Insights & Engineering Blog | AEMDEVWEB",
  description:
    "ถอดรหัสกลยุทธ์ Technical SEO และการพัฒนา Web Infrastructure ระดับวิศวกรรม โดยทีมงาน Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

const POSTS_PER_PAGE = 9;

/**
 * @component BlogListingPage
 * @description หน้าแสดงรายการบทความทั้งหมด พร้อมระบบจัดการลำดับการโหลดเพื่อคะแนน LCP
 */
export default async function BlogListingPage({ searchParams }: PageProps) {
  /* [A] DATA_RESOLUTION: ดึงข้อมูลจาก CMS (Markdown/MDX) */
  const allPosts: BlogPost[] = await getAllPosts().catch(() => []);
  const params = await searchParams;

  const query = (params.q as string) || "";
  const category = (params.category as string) || "all";
  const page = Number(params.page) || 1;

  /* [B] FILTER_LOGIC: กรองข้อมูลตาม Search และ Category */
  const filteredPosts = allPosts.filter((post) => {
    const matchesQuery =
      query === "" ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = category === "all" || post.category === category;

    return matchesQuery && matchesCategory;
  });

  /* [C] PAGINATION_LOGIC: แบ่งหน้าข้อมูล */
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  /* [D] CATEGORY_EXTRACTION: รวบรวมหมวดหมู่ที่มีอยู่จริง */
  const categories = Array.from(new Set(allPosts.map((p) => p.category))).sort();

  /* [E] SCHEMA_ORCHESTRATION: การสร้าง Hierarchy สำหรับ AI Crawlers */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความ", item: "/blog" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.siteUrl}/blog/#collection`,
      name: "Engineering Insights & Technical SEO Archive",
      description: "In-depth articles about high-performance web development.",
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-blog-hub" />

      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <section>
            {/* --- 01. STRATEGIC HUB HEADER --- */}
            <header className="mb-20 max-w-6xl space-y-10">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
                <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_12px_var(--brand-primary)]" />
                <span suppressHydrationWarning>
                  Technical_Archive.v{SITE_CONFIG.project.version}
                </span>
              </div>

              <h1 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
                Engineered <br />
                <span className="text-brand-primary ml-4 md:ml-8">Insights.</span>
              </h1>

              <div className="border-brand-primary border-l-[6px] pl-8 md:pl-14">
                <p className="text-text-secondary max-w-2xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  เจาะลึกกลยุทธ์การสร้างระบบที่รองรับการเติบโต และการปรับแต่ง SEO
                  ระดับโครงสร้างพื้นฐานที่วัดผลได้จริง
                </p>
              </div>
            </header>

            {/* --- 02. INTERACTIVE CONTROLS: Filter & Search --- */}
            <BlogFilters categories={categories} currentCategory={category} currentQuery={query} />

            {/* --- 03. BLOG GRID: Optimized Rendering Path --- */}
            <h2 className="sr-only">Technical Engineering Insights & SEO Archive</h2>
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
                  {paginatedPosts.map((post, index) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      index={index}
                      // [PERFORMANCE]: บังคับ Priority สำหรับ 3 ใบแรกเพื่อลดค่า LCP ต่ำกว่า 1.2s
                      priority={index < 3 && page === 1}
                    />
                  ))}
                </div>

                {/* --- 04. NAVIGATION HUB --- */}
                <Pagination totalPages={totalPages} currentPage={page} />
              </>
            ) : (
              /* [EMPTY_STATE]: Technical Terminal Style */
              <div className="border-border/40 bg-surface-card/20 rounded-card-xl flex flex-col items-center justify-center border border-dashed py-40 text-center backdrop-blur-md">
                <div className="bg-brand-primary/10 mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full">
                  <div className="bg-brand-primary h-3 w-3 rounded-full" />
                </div>
                <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Status: Query_Result_Null_Pointer...
                </p>
                <p className="text-text-secondary mt-4 max-w-sm text-sm">
                  ไม่พบผลลัพธ์ที่ตรงกับ "{query || (category !== "all" ? category : "")}" <br />
                  ลองปรับเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่ใหม่อีกครั้ง
                </p>
                <Button variant="outline" size="sm" className="mt-10" asChild>
                  <Link href="/blog">Reset All Filters</Link>
                </Button>
              </div>
            )}
          </section>
        </div>

        {/* Ambient Decorative Background: GPU Accelerated */}
        <div className="pointer-events-none absolute top-0 right-0 -z-10 h-full w-full overflow-hidden opacity-10">
          <div className="bg-brand-primary/20 absolute -top-[10%] -right-[5%] h-[600px] w-[600px] transform-gpu rounded-full blur-[140px]" />
        </div>
      </main>
    </LayoutEngine>
  );
}
