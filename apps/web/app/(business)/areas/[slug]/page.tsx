/**
 * [PAGE_ENGINE]: AREA_DETAIL_SYSTEM v18.3.0 (TURSO_CLOUD_POWERED)
 * [STRATEGY]: Blueprint Inheritance | Unified Identity Shell | SQL-First Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { absoluteUrl } from "@/lib/utils";
import { mergeServiceData } from "@/lib/data-merger";
import { getAreaBySlug, getAllAreas } from "@/lib/cms";

// --- 2. SEO & Schema Protocols ---
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";

/** [TURSO_PREGENERATION]: ดึงข้อมูลจาก Cloud เพื่อทำ Static Page Generation */
export async function generateStaticParams() {
  const areas = await getAllAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

/** [VIEWPORT]: ปรับสี Browser ตามอัตลักษณ์พื้นที่ */
export async function generateViewport(props: PageProps): Promise<Viewport> {
  const { slug } = await props.params;
  const area = await getAreaBySlug(slug);

  return {
    themeColor: area?.theme?.primary || SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** [SEO_ENGINE]: Metadata Generation */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const area = await getAreaBySlug(slug);

  if (!area) {
    return {
      title: `ไม่พบข้อมูลพื้นที่ | ${SITE_CONFIG.brandName}`,
      robots: { index: false, follow: false },
    };
  }

  const masterService = getServiceBySlug(area.templateSlug);
  const templateData = masterService ? mergeServiceData(masterService, area) : null;
  const canonicalUrl = absoluteUrl(`/areas/${area.slug}`);
  const ogImage = absoluteUrl(area.heroImage || SITE_CONFIG.ogImage);

  // [AI_INTENT_SIGNALING]: ดึงข้อมูลสรุปสำหรับ AI Search (GEO/AEO)
  const aiDescription = templateData?.aiSignal?.summary || area.seoDescription;

  return {
    title: `${area.seoTitle} | บริการโดย ${SITE_CONFIG.expert.displayName}`,
    description: `${aiDescription}. ${area.seoDescription}`,
    keywords: [
      ...(area.keywords || []),
      ...(templateData?.keywords || []),
      SITE_CONFIG.expert.displayName,
      `บริการในพื้นที่ ${area.province}`,
    ],
    authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${area.seoTitle} - ${SITE_CONFIG.expert.displayName}`,
      description: aiDescription,
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
      locale: "th_TH",
    },
  };
}

export default async function AreaPage(props: PageProps) {
  const { slug } = await props.params;
  const area = await getAreaBySlug(slug);

  if (!area) notFound();

  const masterService = getServiceBySlug(area.templateSlug);
  if (!masterService) notFound();

  /* [MERGER]: ผสาน Master Blueprint กับ Area Context (ราคา, ธีม, เนื้อหา) */
  const templateData = mergeServiceData(masterService, area) as UniversalTemplateProps;

  /* [DYNAMIC_CROSS_LINKING]: ค้นหาพื้นที่อื่นๆ ที่ให้บริการแบบเดียวกัน (Nearby Nodes) */
  const allAreas = await getAllAreas();
  const nearbyAreas = allAreas
    .filter((a) => a.templateSlug === area.templateSlug && a.slug !== area.slug)
    .map((a) => a.slug)
    .slice(0, 12);

  /* [SCHEMA]: 100/100 Knowledge Graph (GEO Optimized) */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
      { name: area.province, item: `/areas/${area.slug}` },
    ]),
    generateLocalBusinessSchema({
      ...area,
      name: area.title,
      telephone: SITE_CONFIG.contact.phone,
      priceRange: area.price ? `THB ${area.price}` : SITE_CONFIG.business.priceRange,
    }),
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl(`/areas/${area.slug}/#service`),
      name: area.title,
      provider: { "@id": SITE_CONFIG.siteUrl + "/#organization" },
      author: { "@id": SITE_CONFIG.siteUrl + "/#expert" },
      description: templateData.aiSignal?.summary || area.seoDescription,
    },
  ]);

  return (
    <>
      <JsonLd data={fullSchema} id={`schema-graph-${area.slug}`} />

      <TemplateRenderer
        data={{
          ...templateData,
          servingAreas: nearbyAreas,
        }}
        contextMode="area"
      />

      <div className="pointer-events-none fixed top-24 left-0 z-[100] flex w-full justify-center select-none md:top-28">
        <div className="flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/10 bg-[var(--surface-main)]/80 px-5 py-2 shadow-sm">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
          <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-[var(--text-primary)] uppercase opacity-70">
            Node_Active: {area.province} | Node_{area.slug.replace(/-/g, "_")}
          </span>
        </div>
      </div>
    </>
  );
}
