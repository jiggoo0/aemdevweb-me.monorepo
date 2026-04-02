/**
 * [ROUTE_PAGE]: CASE_STUDIES_HUB_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: ISR Revalidation | Collection Schema Hardening | LCP Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { getAllCaseStudies } from "@/lib/cms";
import type { CaseStudy } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. SEO & Schema Protocols (Knowledge Graph) ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Render Engine ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import IconRenderer from "@/components/ui/IconRenderer";

/** [VIEWPORT]: Mobile-First Theme Integration */
export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

/** [SEO_METADATA]: CASE_STUDY_AUTHORITY_PROTOCOL
 * เน้นการแสดงผลงานเพื่อยืนยันความเป็นมืออาชีพเชิงเทคนิค
 */
export const metadata: Metadata = constructMetadata({
  title: "Case Studies | ผลงานวิศวกรรมเว็บและกลยุทธ์ SEO ระดับสูง",
  description:
    "รวบรวมโปรเจกต์ที่ผ่านการ Optimize ขั้นสูงสุด ตั้งแต่ระดับโครงสร้างพื้นฐานจนถึงอัตราการปิดการขาย (Conversion Rate)",
  path: "/case-studies",
  image: "/images/og-case-studies.webp",
});

/**
 * @component CaseStudiesPage
 * @description หน้าแสดงรายการผลงานความสำเร็จ (Success Archive) พร้อมระบบเร่งคะแนน LCP
 */
export default async function CaseStudiesPage() {
  /* [A] DATA_RESOLUTION: ดึงข้อมูลผลงานจาก CMS (Markdown/MDX) */
  const cases: CaseStudy[] = await getAllCaseStudies().catch(() => []);

  /* [B] SCHEMA_ORCHESTRATION: การสร้างหลักฐานทางดิจิทัลผ่าน Knowledge Graph */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงานทั้งหมด", item: "/case-studies" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.siteUrl}/case-studies/#collection`,
      name: "AEMDEVWEB Success Archive",
      description: "Professional Web Development and Technical SEO Case Studies",
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-case-studies-hub" />

      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <section>
            {/* --- 01. STRATEGIC HEADER: Visual Hierarchy & Trust Signal --- */}
            <header className="mb-24 max-w-5xl space-y-10 md:mb-32">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
                <IconRenderer name="Briefcase" size={14} />
                <span suppressHydrationWarning>
                  Project_Success_Ref.v{SITE_CONFIG.project.version}
                </span>
              </div>

              <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
                Proven <br /> <span className="text-brand-primary">Success.</span>
              </h1>

              <div className="border-brand-primary border-l-[6px] pl-8 md:pl-14">
                <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  เราเปลี่ยนความต้องการทางธุรกิจให้เป็นผลลัพธ์ผ่านกระบวนการ <br />
                  <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                    Technical Audit
                  </span>{" "}
                  ที่เน้นตัวเลขความสำเร็จเป็นหัวใจหลักครับ
                </p>
              </div>
            </header>

            {/* --- 02. CASE STUDY GRID: High-Performance Rendering --- */}
            <h2 className="sr-only">Industrial Project Success Archive</h2>
            {cases.length > 0 ? (
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                {cases.map((item, index) => (
                  <div key={item.slug} className="h-full">
                    <CaseStudyCard
                      data={item}
                      index={index}
                      // [PERFORMANCE]: Priority สำหรับ 2 ใบแรก เพื่อรักษาสถิติ LCP < 1.0s
                      priority={index < 2}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* [EMPTY_STATE]: Technical Terminal Style */
              <div className="border-border/40 bg-surface-card/20 rounded-card-xl flex flex-col items-center justify-center border border-dashed py-40 text-center backdrop-blur-md">
                <div className="bg-brand-primary/10 mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full">
                  <div className="bg-brand-primary h-3 w-3 rounded-full" />
                </div>
                <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Status: Success_Logs_Not_Found...
                </p>
              </div>
            )}
          </section>
        </div>

        {/* --- 03. ARCHIVE FOOTER --- */}
        <footer className="border-border/50 mt-32 border-t pt-16 text-center">
          <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-30">
            AEMDEVWEB_SUCCESS_LOG // End_of_Archive
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
}
