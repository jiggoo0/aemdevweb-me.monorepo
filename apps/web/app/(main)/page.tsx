/**
 * [CORE PAGE]: HOMEPAGE v18.3.0 (LIVE_METRICS_ENABLED)
 * [STRATEGY]: Static-First Rendering | Real-time Authority Dashboards | Hybrid CMS
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

// --- 1. Infrastructure & Core Constants ---
import { AREA_NODES } from "@repo/core";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. Data Access Layer ---
import { getAllPosts, getAllCaseStudies, getAllServices, getLiveMetrics } from "@/lib/cms";
import type { BlogPost, CaseStudy } from "@/types";

// --- 3. SEO & Technical Schema ---
import { generateSchemaGraph } from "@/lib/schema";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

// --- 4. Critical UI ---
import { AEMSpecialistHero } from "@/components/features/landing/AEMSpecialistHero";
import ServiceCard from "@/components/features/services/ServiceCard";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import BlogCard from "@/components/features/blog/BlogCard";
import AreaCard from "@/components/features/areas/AreaCard";
import { DeferredHomeWidgets } from "@/components/features/landing/DeferredHomeWidgets";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: `Web Architect & Technical SEO Specialist | ${SITE_CONFIG.expert.displayName}`,
    description: SITE_CONFIG.hero.description,
    path: "/",
    image: SITE_CONFIG.ogImage,
  });
}

export default async function HomePage() {
  /** [PERFORMANCE]: Parallel Prefetching with Fail-Safe Fallbacks */
  const [caseStudies, blogPosts, allServices, liveMetrics] = await Promise.all([
    getAllCaseStudies().catch(() => [] as CaseStudy[]),
    getAllPosts().catch(() => [] as BlogPost[]),
    getAllServices().catch(() => []),
    getLiveMetrics().catch(() => ({})),
  ]);

  const featuredServices = allServices.filter((s) => s.isFeatured).slice(0, 3);
  const recentCases = caseStudies.slice(0, 2);
  const recentPosts = blogPosts.slice(0, 3);
  const featuredAreas = AREA_NODES.filter((n) => (n.priority ?? 0) >= 95).slice(0, 4);

  const homeSchema = generateSchemaGraph([
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brandName,
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
    {
      "@type": "ItemList",
      itemListElement: featuredServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${SITE_CONFIG.siteUrl}/services/${s.slug}`,
      })),
    },
  ]);

  return (
    <main className="bg-surface-main flex w-full flex-col overflow-hidden">
      <JsonLd data={homeSchema} id="schema-homepage" />

      <header className="relative w-full">
        <AEMSpecialistHero />
        <section
          className="relative z-20 -mt-20 px-4 md:-mt-28 lg:-mt-36"
          aria-label="Authority Metrics"
        >
          <h2 className="sr-only">สถิติความสำเร็จและความน่าเชื่อถือ</h2>
          <div className="mx-auto max-w-7xl">
            <div className="glass-card shadow-pro-xl rounded-section border-border/50 bg-surface-card/80 relative overflow-hidden border p-10 backdrop-blur-3xl md:p-20">
              <div className="relative z-10 flex flex-col items-center gap-16 md:gap-24">
                <DeferredHomeWidgets section="trust-metrics" liveMetrics={liveMetrics} />
              </div>
              <div className="bg-brand-primary/5 pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[120px]" />
            </div>
          </div>
        </section>
      </header>

      <section id="services" className="py-24 md:py-32" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 md:px-8">
          <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="space-y-2">
              <span className="text-brand-primary block font-sans text-[12px] font-bold tracking-widest uppercase">
                บริการหลักของเรา
              </span>
              <h2
                id="services-heading"
                className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl"
              >
                Core <span className="text-brand-primary">Services.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary text-text-primary hover:text-surface-main flex items-center gap-3 rounded-full border px-6 py-4 text-[12px] font-bold tracking-widest uppercase transition-all duration-500"
            >
              ดูบริการทั้งหมด
              <IconRenderer
                name="ArrowRight"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} data={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-surface-offset border-border/40 border-y py-24 md:py-32"
        aria-labelledby="audit-heading"
      >
        <div className="container mx-auto px-4 md:px-8">
          <header className="mb-16 text-center">
            <span className="text-brand-primary font-sans text-[12px] font-bold tracking-widest uppercase">
              ตรวจสุขภาพเว็บไซต์ของคุณ
            </span>
            <h2
              id="audit-heading"
              className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl"
            >
              Website <br /> <span className="text-brand-primary">Health Check.</span>
            </h2>
          </header>
          <div className="space-y-24">
            <DeferredHomeWidgets section="audit-generator" />
            <div className="mx-auto max-w-5xl">
              <DeferredHomeWidgets section="lead-scoring" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <DeferredHomeWidgets section="trust-equation" />
      </section>

      <section className="bg-surface-main py-24" aria-label="Working Process">
        <DeferredHomeWidgets section="work-process" />
      </section>

      <div className="bg-surface-offset border-border/40 border-y">
        <section id="success" className="py-24 md:py-32" aria-labelledby="success-heading">
          <div className="container mx-auto px-4 md:px-8">
            <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-2">
                <span className="text-text-muted block font-sans text-[12px] font-bold tracking-widest uppercase">
                  ผลงานที่ผ่านมา
                </span>
                <h2
                  id="success-heading"
                  className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl"
                >
                  Success <span className="text-text-secondary/50">Stories.</span>
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="group border-border bg-surface-card text-text-primary hover:border-brand-primary/40 hover:text-brand-primary flex items-center gap-3 rounded-full border px-6 py-4 text-[12px] font-bold tracking-widest uppercase transition-all duration-500"
              >
                ดูผลงานทั้งหมด
                <IconRenderer
                  name="ArrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </header>
            <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
              {recentCases.map((item, i) => (
                <CaseStudyCard key={item.slug} data={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-border/40 border-t py-24 md:py-32"
          aria-labelledby="insights-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <header className="mb-16 flex items-center justify-between">
              <h2
                id="insights-heading"
                className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl"
              >
                Technical <span className="text-brand-primary">Insights.</span>
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} priority={false} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="bg-surface-main">
        <section className="pb-24">
          <DeferredHomeWidgets section="pricing" />
        </section>

        <section
          className="bg-surface-offset border-border/60 border-t py-24"
          aria-labelledby="coverage-heading"
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-20 flex flex-col items-center justify-center gap-12">
              <div className="text-center">
                <span className="text-text-muted font-sans text-[12px] font-bold tracking-widest uppercase opacity-80">
                  พื้นที่ให้บริการ
                </span>
                <h2
                  id="coverage-heading"
                  className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-5xl"
                >
                  ครอบคลุม <span className="text-brand-primary">ทุกภูมิภาค.</span>
                </h2>
              </div>
              <div className="w-full max-w-2xl">
                <DeferredHomeWidgets section="terminal-health" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {featuredAreas.map((area, i) => (
                <AreaCard key={area.slug} data={area} index={i} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/areas"
                className="text-text-muted hover:text-brand-primary inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase transition-colors"
              >
                ดูพื้นที่ให้บริการทั้งหมด
                <IconRenderer name="ArrowRight" size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
