/**
 * [PAGE]: SERVICE_DETAIL_ENGINE v18.0.1 (LAYOUT_INTEGRATED)
 * [STRATEGY]: Next.js 16 Async Params | Unified Identity Shell | SSG
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

import { notFound } from "next/navigation";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { MASTER_REGISTRY, getServiceBySlug } from "@/constants/master-registry";
import { SITE_CONFIG } from "@/constants/site-config";
import type { PageProps, UniversalTemplateProps } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO & Schema Protocols ---
import {
  generateUniversalSchema,
  generateBreadcrumbSchema,
  generateSchemaGraph,
} from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

// --- 3. UI Render Engine ---
import { TemplateRenderer } from "@/components/templates/TemplateRenderer";
import ServiceNavigationHUD from "@/components/features/services/ServiceNavigationHUD";

export async function generateStaticParams() {
  return MASTER_REGISTRY.map((service) => ({
    slug: service.templateSlug,
  }));
}

/** [VIEWPORT]: ปรับสี Browser UI ตามแบรนด์ของโหนดนั้นๆ */
export async function generateViewport(props: PageProps): Promise<Viewport> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  return {
    themeColor: service?.theme?.primary || SITE_CONFIG.themeColor,
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}

/** [SEO]: จัดการ Metadata แบบ Dynamic */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_CONFIG.brandName}`,
      robots: { index: false, follow: false },
    };
  }

  return constructMetadata({
    title: `${service.title} | ${SITE_CONFIG.brandName}`,
    description: service.description || SITE_CONFIG.description,
    path: `/services/${service.templateSlug}`,
    image: service.image || SITE_CONFIG.ogImage,
    // [SEO_OPTIMIZATION]: ฉีด Keyword เฉพาะทางของบริการนั้นๆ พร้อมตัวตนผู้เชี่ยวชาญ
    keywords: [
      ...(service.keywords || []),
      SITE_CONFIG.expert.displayName,
      `บริการโดย ${SITE_CONFIG.expert.legalNameThai}`,
      `${service.title} Next.js`,
      "Technical SEO Infrastructure",
    ],
    authors: [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
  });
}

export default async function ServicePage(props: PageProps) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug as string);

  if (!service) notFound();

  // รับประกันค่าธีมที่ผ่านการประมวลผลแล้ว
  const activeTheme = service.theme || {
    primary: SITE_CONFIG.themeColor,
    background: "#ffffff",
    mode: "light",
    foreground: "#0f172a",
  };

  // [SCHEMA]: สร้าง Knowledge Graph
  const jsonLd = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บริการ", item: "/services" },
      { name: service.title, item: `/services/${service.templateSlug}` },
    ]),
    generateUniversalSchema(service as UniversalTemplateProps),
  ]);

  return (
    <>
      <JsonLd data={jsonLd} id={`schema-service-${service.templateSlug}`} />

      {/* [ORCHESTRATION]: แสดงผลในโหมด service เพื่ออัตลักษณ์ที่เป็นอิสระ */}
      <TemplateRenderer
        data={
          {
            ...service,
            theme: activeTheme,
            servingAreas: service.activeAreas,
          } as unknown as UniversalTemplateProps
        }
        contextMode="service"
      />

      {/* [SYSTEM_UI]: Elite Navigation HUD (Interactive Operating Hub)
          [SYNC]: สร้างความต่อเนื่องของ UX ระหว่าง Node Area และ Node Service 
      */}
      <ServiceNavigationHUD currentService={service} allServices={MASTER_REGISTRY} />
    </>
  );
}
