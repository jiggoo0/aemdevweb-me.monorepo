/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_ENGINE v18.0.3 (SEMANTIC_HARDENED)
 * [STRATEGY]: ISR Strategy | Portfolio Schema | Conversion Optimized
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";
import { formatDate } from "@/lib/utils";

import { SITE_CONFIG } from "@/constants/site-config";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/LayoutEngine";
import AuthorCard from "@/components/shared/AuthorCard";

export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);
  if (!data) return { title: "Case Study Not Found" };

  // [SEO_STRATEGY]: เชื่อมโยงผลงานเข้ากับคีย์เวิร์ดยอดนิยมและตัวตนผู้เชี่ยวชาญ
  const strategicKeywords = Array.from(
    new Set([
      ...(data.results || []),
      "ผลงาน Success Case",
      SITE_CONFIG.expert.displayName,
      ...SITE_CONFIG.keywords.slice(0, 5),
    ]),
  );

  return constructMetadata({
    title: `${data.title} | ผลงาน AEMDEVWEB โดย ${SITE_CONFIG.expert.displayName}`,
    description:
      data.description ||
      `เจาะลึกความสำเร็จโครงการ ${data.title} - ${data.client} พัฒนาโดย ${SITE_CONFIG.expert.displayName} Technical SEO Specialist`,
    path: `/case-studies/${slug}`,
    image: data.thumbnail,
    keywords: strategicKeywords,
    authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);

  if (!data) notFound();

  // [SEMANTIC DATA]: เตรียมข้อมูลวันที่และ Schema
  const projectDate = data.date ? new Date(data.date) : new Date("2026-03-01");
  const isoDate = projectDate.toISOString();
  const displayDate = formatDate(projectDate);

  // [SCHEMA]: CreativeWork / Article Graph สำหรับ Portfolio
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงาน", item: "/case-studies" },
      { name: data.title, item: `/case-studies/${slug}` },
    ]),
    {
      "@type": "CreativeWork",
      headline: data.title,
      image: data.image,
      datePublished: isoDate,
      dateModified: isoDate,
      provider: {
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      },
      // [E-E-A-T_SYNC]: ระบุตัวตนผู้เชี่ยวชาญเป็นผู้สร้างสรรค์ผลงานนี้
      author: {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#expert`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.siteUrl}/case-studies/${slug}`,
      },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />
      <article className="container mx-auto px-4 pt-32 pb-24 md:px-6 md:pt-48 md:pb-32">
        <header className="mx-auto mb-16 max-w-5xl space-y-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 rounded-full border px-6 py-1 font-mono text-[10px] font-black tracking-[0.3em] uppercase">
              Case_ID: {data.slug.toUpperCase()}
            </span>
            <p className="text-text-primary text-lg font-black tracking-widest uppercase italic opacity-80">
              Client: {data.client}
            </p>
          </div>

          <h1 className="text-text-primary text-5xl leading-none font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            {data.title}
          </h1>

          <div className="flex items-center justify-center gap-6">
            <div className="bg-text-muted/20 h-px w-12" />
            <time
              dateTime={isoDate}
              className="text-text-secondary font-mono text-[10px] font-black tracking-widest uppercase opacity-60"
            >
              {displayDate}
            </time>
            <div className="bg-text-muted/20 h-px w-12" />
          </div>

          {data.result && (
            <div className="shadow-glow-sm border-brand-primary/20 bg-surface-card mt-8 inline-block rounded-2xl border px-10 py-4">
              <span className="text-brand-primary font-mono text-2xl font-black tracking-tighter italic md:text-3xl">
                {data.result}
              </span>
            </div>
          )}
        </header>

        {/* Hero Image with LCP Optimization */}
        <div className="shadow-glow-lg border-border bg-surface-card rounded-section md:rounded-card-xl relative mx-auto mb-24 aspect-video max-w-6xl overflow-hidden border">
          <Image
            src={data.image || "/images/case-studies/preview.webp"}
            alt={`ผลงานเว็บไซต์ ${data.title} - โดย ${SITE_CONFIG.expert.displayName}`}
            fill
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-brand lg:prose-xl prose-img:rounded-3xl prose-img:border prose-img:border-border mb-24 max-w-none">
            <MDXRemote source={data.content || ""} components={useMDXComponents({})} />
          </div>

          {/* [AUTHOR_CARD]: การยืนยันตัวตนเจ้าของผลงาน */}
          <AuthorCard />
        </div>
      </article>
    </LayoutEngine>
  );
}
