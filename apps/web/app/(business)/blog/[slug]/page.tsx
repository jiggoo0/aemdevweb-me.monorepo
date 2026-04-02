/**
 * [ROUTE PAGE]: BLOG_DETAIL_ENGINE v18.1.0 (UPGRADED)
 * [STRATEGY]: TOC Extraction | Sticky Sidebar | Reading Time v2
 */

import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllPosts } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";
import { formatDate } from "@/lib/utils";

import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/LayoutEngine";
import BlogCard from "@/components/features/blog/BlogCard";
import TableOfContents from "@/components/features/blog/TableOfContents";
import IconRenderer from "@/components/ui/IconRenderer";
import AuthorCard from "@/components/shared/AuthorCard";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  // [SEO_HYPER_LINKING]: เชื่อมโยง Tag บทความ เข้ากับ Global Keywords ยอดนิยม
  const strategicKeywords = Array.from(
    new Set([...(post.tags || []), ...SITE_CONFIG.keywords.slice(0, 5)]),
  );

  return constructMetadata({
    title: `${post.title} | ${SITE_CONFIG.brandName} Insights`,
    description:
      post.description ||
      `${post.title} โดย ${SITE_CONFIG.expert.displayName} - เจาะลึกเทคนิคและกลยุทธ์จากผู้เชี่ยวชาญ`,
    path: `/blog/${slug}`,
    image: post.thumbnail,
    keywords: strategicKeywords,
    // [CTR_LANGUAGE]: ใช้ภาษาที่แสดงถึงความเป็นเจ้าของงานที่ทรงพลัง
    authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
  });
}

/** [INTERNAL_HELPER]: ดึงหัวข้อจาก Markdown Content */
function extractHeadings(content: string) {
  const headingRegex = /^(#{2,4})\s+(.*)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .trim()
      .replace(/[^\u0E00-\u0E7F\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // [A] CONTENT_EXTRACTION: เตรียมข้อมูลเสริมสำหรับการนำทาง
  const headings = extractHeadings(post.content || "");
  const isoDate = post.date || "2026-03-01T00:00:00.000Z";
  const displayDate = post.date ? formatDate(post.date) : "Recently Published";

  // [B] SCHEMA_ORCHESTRATION: Article Authority Graph
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความ", item: "/blog" },
      { name: post.title, item: `/blog/${slug}` },
    ]),
    {
      "@type": "Article",
      headline: post.title,
      image: post.thumbnail,
      datePublished: isoDate,
      dateModified: isoDate,
      // [E-E-A-T_SYNC]: เชื่อมโยง Person Schema ตรงเข้าสู่บทความ
      author: {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#expert`,
        name: SITE_CONFIG.expert.displayName,
        jobTitle: SITE_CONFIG.expert.jobTitle,
        url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.expert.bioUrl}`,
      },
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.siteUrl}/blog/${slug}`,
      },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative pt-32 pb-24 md:pt-48 md:pb-32">
        <article className="container mx-auto px-4 md:px-6">
          {/* --- 01. ARTICLE HEADER: Authority Presentation --- */}
          <header className="mx-auto mb-16 max-w-5xl space-y-10 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 flex items-center gap-2 rounded-full border px-6 py-2 font-mono text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
                <div className="bg-brand-primary h-1.5 w-1.5 rounded-full" />
                {post.category}
              </span>
              <span className="bg-surface-card/60 text-text-muted border-border/40 flex items-center gap-2 rounded-full border px-6 py-2 font-mono text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
                <IconRenderer name="Timer" size={14} className="text-brand-primary" />
                {post.readingTime || "5 min read"}
              </span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.95] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              {post.title}
            </h1>

            <div className="text-text-secondary flex items-center justify-center gap-6 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-60">
              <div className="bg-text-muted/20 h-px w-12" />
              <time dateTime={isoDate} suppressHydrationWarning>
                Published: {displayDate}
              </time>
              <div className="bg-text-muted/20 h-px w-12" />
            </div>
          </header>

          {/* --- 02. HERO VISUAL: Optimized I/O --- */}
          <div className="shadow-glow-lg border-border bg-surface-card rounded-section md:rounded-card-xl relative mx-auto mb-24 aspect-video max-w-6xl overflow-hidden border">
            <Image
              src={post.thumbnail || "/images/blog/default-thumb.webp"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* --- 03. CONTENT HUB: Layout Engine v2 --- */}
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row xl:gap-24">
            {/* LEFT: MAIN ARTICLE CONTENT */}
            <div className="w-full lg:w-2/3">
              <div className="prose prose-invert prose-brand lg:prose-xl prose-headings:italic prose-headings:tracking-tighter max-w-none">
                <MDXRemote source={post.content || ""} components={useMDXComponents({})} />
              </div>

              {/* [AUTHOR_CARD]: 🚩 การแสดงตัวตนเจ้าของผลงาน (Identity Sovereignty) */}
              <AuthorCard />
            </div>

            {/* RIGHT: SMART STICKY SIDEBAR (TOC) */}
            <aside className="hidden lg:block lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <TableOfContents headings={headings} />

                {/* Authority Sidebar Widget */}
                <div className="border-border/40 bg-brand-primary/5 rounded-2xl border p-8 backdrop-blur-md">
                  <h4 className="text-text-primary mb-4 font-mono text-xs font-black tracking-widest uppercase italic">
                    Expert_Consultation
                  </h4>
                  <p className="text-text-secondary mb-8 text-sm leading-relaxed italic opacity-80">
                    มีข้อสงสัยเกี่ยวกับเทคโนโลยีหรือต้องการยกระดับธุรกิจของคุณ?
                    {SITE_CONFIG.expert.displayName} พร้อมให้คำปรึกษาเชิงลึกโดยตรง
                  </p>
                  <a
                    href={SITE_CONFIG.links.line}
                    className="bg-brand-primary text-surface-main shadow-glow-sm flex items-center justify-center gap-3 rounded-xl py-4 font-mono text-[10px] font-black tracking-widest uppercase transition-transform hover:scale-105 active:scale-95"
                  >
                    <IconRenderer name="MessageCircle" size={16} />
                    Consult_Specialist
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* --- 04. RELATED_POSTS_PROTOCOL --- */}
          <section className="border-border/40 mt-32 border-t pt-24">
            <header className="mb-16">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Related <span className="text-brand-primary">Insights.</span>
              </h2>
            </header>

            <Suspense
              fallback={
                <div className="bg-surface-card/20 h-96 w-full animate-pulse rounded-2xl" />
              }
            >
              <RelatedPosts currentSlug={slug} category={post.category} />
            </Suspense>
          </section>
        </article>

        {/* Decorative Background Accents */}
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden opacity-5">
          <div className="bg-brand-primary/20 absolute top-[20%] -left-[10%] h-[800px] w-[800px] transform-gpu rounded-full blur-[140px]" />
          <div className="bg-brand-secondary/10 absolute top-[60%] -right-[10%] h-[600px] w-[600px] transform-gpu rounded-full blur-[120px]" />
        </div>
      </main>
    </LayoutEngine>
  );
}

/** [SUB_COMPONENT]: RelatedPosts */
async function RelatedPosts({ currentSlug, category }: { currentSlug: string; category?: string }) {
  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => !category || p.category === category)
    .slice(0, 3);

  if (related.length < 3) {
    const additional = allPosts
      .filter((p) => p.slug !== currentSlug && !related.find((r) => r.slug === p.slug))
      .slice(0, 3 - related.length);
    related.push(...additional);
  }

  if (related.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {related.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
