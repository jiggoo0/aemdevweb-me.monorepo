/**
 * [TEMPLATE]: CATALOG_MASTER_ORCHESTRATOR (INDUSTRIAL_V2)
 * [STRATEGY]: Product-First Strategy | Engineering Aesthetic | B2B Conversion
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";
import { motion } from "framer-motion";

// --- 1. Modular Section Architecture (Premium Ready) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const InteractiveCatalog = dynamic(() => import("@/components/templates/InteractiveCatalog"));
const RevenueLeakageCalculator = dynamic(() => import("../sections/RevenueLeakageCalculator"));
const AuditReportGenerator = dynamic(() =>
  import("../sections/AuditReportGenerator").then((m) => m.AuditReportGenerator),
);
const PerformanceTrajectory = dynamic(() =>
  import("../sections/PerformanceTrajectory").then((m) => m.PerformanceTrajectory),
);
const LocalInsight = dynamic(() => import("../sections/LocalInsight").then((m) => m.LocalInsight));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((m) => m.DynamicFAQ));
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));

// [MASTER_MAP]: Strict Component Mapping for Catalog DNA
const CATALOG_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => <UniversalHero data={data} align="left" />,

  catalog: ({ data }) => (
    <section className="bg-[var(--surface-main)] py-24 md:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex items-center gap-8"
        >
          <h2 className="text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-6xl">
            Technical <span className="text-[var(--color-brand-primary)]">Catalog.</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-brand-primary)]/30 to-transparent" />
        </motion.div>
        <InteractiveCatalog items={data.items || []} features={data.coreFeatures || []} />
      </div>
    </section>
  ),

  analysis: ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
      <RevenueLeakageCalculator data={data} />
    </section>
  ),

  validation: () => (
    <section className="bg-[var(--surface-main)] py-24 md:py-40">
      <div className="container mx-auto px-6">
        <AuditReportGenerator />
      </div>
    </section>
  ),

  insight: ({ data }) => {
    if (!data.province) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketโอกาสเติบโต={data.marketโอกาสเติบโต}
        />
      </section>
    );
  },

  metrics: () => (
    <section className="space-y-24 bg-[var(--surface-main)] py-24 md:py-40">
      <PerformanceTrajectory />
      <div className="container mx-auto px-6">
        <TrustBadge />
      </div>
    </section>
  ),

  nodes: ({ data }) => <RegionalNodeHub data={data} />,

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-offset)]">
      <DynamicFAQ
        items={data.faqs || []}
        title="Industrial_Catalog_FAQ"
        description="Engineering standards and technical specifications for catalog implementation."
        className="py-24 md:py-40"
      />
    </section>
  ),

  portal: ({ data }) => <UniversalPortal data={data} />,
};

const CatalogTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : [
          "hero",
          "catalog",
          "analysis",
          "validation",
          "insight",
          "metrics",
          "nodes",
          "faq",
          "portal",
        ];

  return (
    <LayoutEngine data={data} theme={theme} className="template-catalog-orchestrator">
      <JsonLd data={schema} id={`schema-catalog-${data.slug}`} />

      <main className="relative flex flex-col antialiased">
        {renderSequence.map((key) => {
          const SectionComponent = CATALOG_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
            CATALOG_SYSTEM_PROTOCOL.v20.5.0_DYNAMIC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
});

CatalogTemplate.displayName = "CatalogTemplate";
export default CatalogTemplate;
