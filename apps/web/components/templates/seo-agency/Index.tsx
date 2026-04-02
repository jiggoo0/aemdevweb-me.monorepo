/**
 * [TEMPLATE]: SEO_AGENCY_MASTER_ORCHESTRATOR (LAB_V2)
 * [STRATEGY]: Sequence-First Layout | Data Visualization | Identity Guard
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

// --- 1. Modular Component Registry (Premium Ready) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const UniversalRegistry = dynamic(
  () => import("@/components/templates/sections/UniversalRegistry"),
);
const AuditReportGenerator = dynamic(() =>
  import("../sections/AuditReportGenerator").then((mod) => mod.AuditReportGenerator),
);
const PerformanceTrajectory = dynamic(() =>
  import("../sections/PerformanceTrajectory").then((mod) => mod.PerformanceTrajectory),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const RevenueLeakageCalculator = dynamic(() => import("../sections/RevenueLeakageCalculator"));
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalSuccessNode = dynamic(() =>
  import("../sections/LocalSuccessNode").then((mod) => mod.LocalSuccessNode),
);
const RegionalGallery = dynamic(() =>
  import("../sections/RegionalGallery").then((mod) => mod.RegionalGallery),
);
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((mod) => mod.DirectTerminal),
);
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));

// --- 2. Shared High-Performance Components ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [MASTER_MAP]: Strict Component Mapping for SEO Agency DNA
const SEO_AGENCY_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => <UniversalHero data={data} />,

  insight: ({ data }) => {
    if (!data.province) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-main)] py-24 md:py-40">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketโอกาสเติบโต={data.marketโอกาสเติบโต}
        />
      </section>
    );
  },

  promotions: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card shadow-pro-xl relative overflow-hidden rounded-[var(--radius-section,2.5rem)] border-l-[8px] border-[var(--color-brand-primary)] p-10 backdrop-blur-3xl md:p-20"
          >
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
                  <span className="font-sans text-[12px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
                    LAB_EXCLUSIVE_BENEFIT
                  </span>
                </div>
                <h3 className="text-4xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-7xl">
                  {data.promotions[0].title}
                </h3>
                <p className="max-w-2xl text-xl font-bold text-[var(--text-secondary)] italic opacity-90">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="min-w-[240px] rounded-[2rem] border-2 border-dashed border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/5 px-12 py-10 text-center shadow-inner">
                  <p className="mb-2 text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase opacity-80">
                    BENEFIT_VALUE
                  </p>
                  <p className="text-6xl font-black tracking-tighter text-[var(--color-brand-primary)] italic">
                    {data.promotions[0].discount}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  },

  audit: () => (
    <section className="bg-[var(--surface-main)] py-24 md:py-40">
      <AuditReportGenerator />
    </section>
  ),

  revenue: ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
      <RevenueLeakageCalculator data={data} />
    </section>
  ),

  trajectory: ({ data }) => (
    <div className="space-y-0">
      <section className="border-b border-[var(--border)] bg-[var(--surface-main)] py-24 md:py-40">
        <PerformanceTrajectory />
      </section>
      <UniversalRegistry data={data} />
    </div>
  ),

  visuals: ({ data }) => {
    if (!data.regionalVisuals?.gallery && !data.province) return null;
    return (
      <div className="space-y-32 border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
        {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}
        {data.province && (
          <div className="space-y-40">
            <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
            <div className="container mx-auto px-6">
              <div className="mx-auto max-w-3xl">
                <DirectTerminal
                  mode="health-check"
                  province={data.province}
                  latency={data.regionalความเร็ว}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },

  success: ({ data }) => {
    if (!data.localSuccessStory || !data.province) return null;
    return (
      <section className="bg-[var(--surface-main)] py-24 md:py-32">
        <LocalSuccessNode
          title={data.localSuccessStory.title}
          result={data.localSuccessStory.result}
          province={data.province}
        />
      </section>
    );
  },

  nodes: ({ data }) => <RegionalNodeHub data={data} />,

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-offset)]">
      <DynamicFAQ
        items={data.faqs}
        title="SEO_Intelligence_FAQ"
        description="Comprehensive technical database ensuring operational transparency and ranking excellence."
        className="py-24 md:py-40"
      />
    </section>
  ),

  portal: ({ data }) => <UniversalPortal data={data} />,

  // --- Infrastructure Sections ---
  trust: () => (
    <section className="py-24">
      <TrustBadge />
    </section>
  ),
  process: () => (
    <section className="bg-[var(--surface-offset)] py-24">
      <WorkProcess />
    </section>
  ),
  pricing: () => (
    <section className="py-24">
      <PricingSection />
    </section>
  ),
  cta: () => <ConversionCTA />,
};

const SeoAgencyTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : [
          "hero",
          "insight",
          "promotions",
          "audit",
          "revenue",
          "trajectory",
          "visuals",
          "success",
          "nodes",
          "faq",
          "portal",
        ];

  return (
    <LayoutEngine data={data} theme={theme} className="template-seo-agency-orchestrator">
      <JsonLd data={schema} id={`schema-seo-agency-${data.templateSlug}`} />

      {/* [LAB_GRID_OVERLAY]: ตารางพื้นหลังประจำ SEO Lab */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--color-brand-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative flex flex-col antialiased">
        {renderSequence.map((key) => {
          const SectionComponent = SEO_AGENCY_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
            SEO_LAB_PROTOCOL.v20.5.0_DYNAMIC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
});

SeoAgencyTemplate.displayName = "SeoAgencyTemplate";
export default SeoAgencyTemplate;
