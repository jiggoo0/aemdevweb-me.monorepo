/**
 * [ROUTE_PAGE]: LOCAL_HUB_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: Geographic Authority Hub | Priority-Based Sorting | Zero-CLS Infrastructure
 * [MAINTAINER]: AEMZA MACKS (Lead Technical SEO)
 */

import React from "react";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { AREA_NODES } from "@repo/core";
import { SITE_CONFIG } from "@/constants/site-config";
import { constructMetadata } from "@/lib/seo-utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import LayoutEngine from "@/components/templates/LayoutEngine";

// --- 2. SEO & Schema Protocols (Knowledge Graph) ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import AreaSearchHub from "@/components/features/areas/AreaSearchHub";

/** [VIEWPORT]: Mobile-First & Theme Color Engine */
export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** [SEO_METADATA]: LOCAL_INTENT_DOMINATION
 * สร้าง Metadata เชิงรุกเพื่อดักจับ High-Intent Keywords รายภูมิภาค
 */
export const metadata: Metadata = constructMetadata({
  title: "พื้นที่ให้บริการรับทำเว็บไซต์และ SEO ครอบคลุมทั่วไทย | AEMDEVWEB",
  description:
    "บริการรับทำเว็บไซต์โหลดเร็วพิเศษและวางแผน Local SEO เพื่อเพิ่มโอกาสในการค้นหาและสร้างยอดขายรายจังหวัด โดยผู้เชี่ยวชาญตัวจริง",
  path: "/areas",
  keywords: [
    "รับทำเว็บไซต์รายจังหวัด",
    "Local SEO Thailand",
    "บริษัทรับทำเว็บไซต์พรีเมียม",
    "เพิ่มยอดขายรายพื้นที่",
    ...AREA_NODES.map((area) => `รับทำเว็บไซต์ ${area.province}`),
  ],
});

/**
 * @component AreasPage
 * @description หน้า Hub กลางสำหรับการเชื่อมโยง Digital Nodes ทั่วประเทศ (Programmatic SEO Core)
 */
export default function AreasPage() {
  /* [A] DATA_ORCHESTRATION: จัดกลุ่มตามภูมิภาคและเรียงลำดับตาม Priority */
  const regions = ["Central", "North", "Northeast", "East", "South", "West"] as const;

  /* [B] SCHEMA_INJECTION */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-areas-hub-v18" />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:px-6 md:pt-48 md:pb-32">
        <h2 className="sr-only">National Geographic Authority & Regional Hubs</h2>
        {/* --- 01. STRATEGIC HUB HEADER --- */}
        <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
            <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_12px_var(--brand-primary)]" />
            <span>Regional_Authority_Network.v{SITE_CONFIG.project.version}</span>
          </div>

          <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Geographic <br />
            <span className="text-brand-primary">Authority.</span>
          </h1>

          <div className="border-brand-primary border-l-[6px] pl-8 md:pl-14">
            <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
              เราวางโครงสร้างระบบที่สอดรับกับบริบทธุรกิจเฉพาะพื้นที่ เพื่อสร้าง{" "}
              <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                Digital Node
              </span>{" "}
              ที่ทรงพลังที่สุดในภูมิภาคของคุณ
            </p>
          </div>
        </header>

        {/* --- 02. INTERACTIVE SEARCH HUB --- */}
        <AreaSearchHub allNodes={[...AREA_NODES]} regions={regions} />

        {/* --- 03. CTA: STRATEGIC GROWTH GATEWAY --- */}
        <section className="border-border mt-32 border-t pt-24 text-center">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-4">
              <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Beyond_The_Nodes.
              </h3>
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85 md:text-2xl">
                พร้อมขยายฐานที่มั่นสู่พื้นที่ยุทธศาสตร์ใหม่ทั่วประเทศ <br />
                วิเคราะห์แผนงานโดย Technical Web Architect วันนี้
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <Button
                asChild
                size="lg"
                variant="neo"
                className="group h-20 w-full px-12 transition-all duration-500 hover:scale-[1.02] md:w-auto"
              >
                <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-5 text-[12px] font-black tracking-[0.2em] uppercase">
                    <IconRenderer name="Zap" size={24} strokeWidth={2.5} />
                    วิเคราะห์แผนงานรายภูมิภาค
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </LayoutEngine>
  );
}
