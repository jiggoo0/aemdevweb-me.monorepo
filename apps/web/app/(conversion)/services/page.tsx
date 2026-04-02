/**
 * [PAGE]: SERVICES_HUB_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: Emotional Hook | Benefit-Driven Architecture | ROI Focus
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { Suspense } from "react";
import type { Metadata, Viewport } from "next";

// --- UI Components & Layout ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import ServiceListingHub from "@/components/features/services/ServiceListingHub";
import WorkProcess from "@/components/features/landing/WorkProcess";
import ImpactStats from "@/components/shared/ImpactStats";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import SkeletonGrid from "@/components/ui/SkeletonGrid";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = constructMetadata({
  title: "บริการรับทำเว็บไซต์โหลดเร็วพิเศษและระบบ SEO | เพิ่มยอดขายให้ธุรกิจคุณ",
  description:
    "โซลูชันเว็บไซต์ที่ออกแบบมาเพื่อธุรกิจ B2B และ SME โดยเฉพาะ เน้นโหลดไว ลื่นไหลไม่ค้าง ติดหน้าแรก Google และปิดการขายได้จริง โดยผู้เชี่ยวชาญ",
  path: "/services",
  image: "/images/services/corporate-node.webp",
});

/**
 * @component ServicesPage
 * @description หน้า Hub กลางสำหรับบริการทั้งหมด (Conversion Optimized)
 */
export default function ServicesPage() {
  /* [SCHEMA_ORCHESTRATION]: สร้าง Hierarchy สำหรับ AI Crawlers */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บริการ", item: "/services" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.siteUrl}/services/#collection`,
      name: "High-Performance Digital Service Registry",
      description: "Comprehensive suite of web infrastructure and SEO solutions.",
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-services-hub-v18" />

      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* 01. STRATEGIC HEADER */}
          <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_12px_var(--brand-primary)]" />
              <span suppressHydrationWarning>Service_Registry.v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Built for <br /> <span className="text-brand-primary">Your Business.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เบื่อไหมครับ? กับเว็บที่โหลดช้าจนลูกค้าหนี... ที่นี่เราไม่ได้รับจ้างทำหน้ากระดาษ
                แต่เราสร้าง{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  Digital Infrastructure
                </span>{" "}
                ที่ทำให้ทั้ง AI และลูกค้าตัวจริง ต้องเลือกคุณเป็นอันดับแรก
              </p>
            </div>
          </header>

          {/* 02. SERVICE GRID */}
          <section id="service-nodes" className="min-h-[600px] w-full">
            <h2 className="sr-only">Expertise & Specialized Services Hub</h2>
            <Suspense fallback={<SkeletonGrid count={6} aspectRatio="video" />}>
              <ServiceListingHub className="gap-8 md:gap-14" />
            </Suspense>
          </section>

          {/* 03. ROI IMPACT HUB: Integrated Evidence */}
          <section className="border-border/40 mt-32 border-t pt-24">
            <header className="mb-16">
              <span className="text-brand-primary font-sans text-[12px] font-bold tracking-widest uppercase">
                หลักฐานความสำเร็จทางวิศวกรรม
              </span>
              <h2 className="text-text-primary mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                ROI <span className="text-brand-primary">Impact.</span>
              </h2>
            </header>
            <Suspense
              fallback={
                <div className="bg-surface-card/20 h-64 w-full animate-pulse rounded-2xl" />
              }
            >
              <ImpactStats className="mb-24" />
            </Suspense>
          </section>

          {/* 04. WORK PROCESS: Integrated for Conversion Domination */}
          {/* [INJECTED]: แสดงขั้นตอนการทำงานเพื่อสร้างความมั่นใจก่อนปิดการขาย */}
          <WorkProcess />

          {/* 04. TRUST PILLARS (E-E-A-T) */}
          <div className="border-border mt-32 border-t pt-24 md:mt-48">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: "Expertise That Matters",
                  desc: "ใช้เทคโนโลยี Next.js 16 ระดับสากล ปรับแต่งให้รองรับพฤติกรรมผู้ใช้ในไทยโดยเฉพาะ",
                  icon: "ShieldCheck" as IconName,
                },
                {
                  title: "Sales-First Design",
                  desc: "โครงสร้างทุกพิกเซลถูกคำนวณตามจิตวิทยาการซื้อ เพื่อผลตอบแทน ROI ที่วัดผลได้จริง",
                  icon: "TrendingUp" as IconName,
                },
                {
                  title: "High-Performance Core",
                  desc: "ระบบเสถียรและโหลดไวกว่ามาตรฐานทั่วไป พร้อมโครงสร้าง Semantic HTML เพื่อ SEO",
                  icon: "Zap" as IconName,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group border-border bg-surface-card hover:border-brand-primary/40 rounded-card-xl relative overflow-hidden border p-10 transition-all duration-700 hover:-translate-y-2 md:p-14"
                >
                  <div className="text-brand-primary border-border bg-surface-main group-hover:bg-brand-primary group-hover:text-surface-main rounded-card mb-10 flex h-20 w-20 items-center justify-center border transition-all duration-500 group-hover:rotate-6">
                    <IconRenderer name={feature.icon} size={36} />
                  </div>
                  <h3 className="text-text-primary group-hover:text-brand-primary text-3xl font-black tracking-tighter uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary mt-6 text-lg leading-relaxed font-medium italic opacity-85">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </LayoutEngine>
  );
}
