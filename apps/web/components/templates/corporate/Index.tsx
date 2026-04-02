/**
 * [TEMPLATE]: CORPORATE_MASTER_ORCHESTRATOR (EXECUTIVE_V2)
 * [STRATEGY]: Master Design Tokens | Motion Orchestration | DNA-Aware Logic
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import dynamic from "next/dynamic";
import LayoutEngine from "@/components/templates/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { generateUniversalSchema } from "@/lib/schema";
import type { UniversalTemplateProps } from "@/types";

// --- 1. Modular Section Architecture (Premium Ready) ---
const UniversalHero = dynamic(() => import("@/components/templates/sections/UniversalHero"));
const UniversalRegistry = dynamic(
  () => import("@/components/templates/sections/UniversalRegistry"),
);
const ValueBlueprint = dynamic(() =>
  import("../sections/ValueBlueprint").then((mod) => mod.ValueBlueprint),
);
const UniversalLogoCloud = dynamic(
  () => import("@/components/templates/sections/UniversalLogoCloud"),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const SuccessTimeline = dynamic(() =>
  import("../sections/SuccessTimeline").then((mod) => mod.SuccessTimeline),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));

// --- 2. Shared High-Performance Components ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [MASTER_MAP]: Strict Component Mapping for Corporate DNA
const CORPORATE_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
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
          <div className="glass-card shadow-pro-xl relative overflow-hidden rounded-[var(--radius-section,2.5rem)] border-l-[8px] border-[var(--color-brand-primary)] p-10 backdrop-blur-3xl md:p-20">
            <div className="relative z-10 flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
              <div className="space-y-6">
                <span className="font-sans text-[12px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
                  EXCLUSIVE_PROMOTION.INIT
                </span>
                <h3 className="text-4xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-7xl">
                  {data.promotions[0].title}
                </h3>
                <p className="max-w-2xl text-xl font-bold text-[var(--text-secondary)] italic opacity-90">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-offset)] px-12 py-8 text-center shadow-inner">
                  <p className="mb-2 text-[11px] font-bold tracking-widest text-[var(--text-muted)] uppercase opacity-80">
                    MAXIMUM_VALUE
                  </p>
                  <p className="text-6xl font-black tracking-tighter text-[var(--color-brand-primary)] italic">
                    {data.promotions[0].discount}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },

  "value-timeline": () => (
    <div className="space-y-0">
      <ValueBlueprint />
      <SuccessTimeline />
    </div>
  ),

  roadmap: ({ data }) => {
    if (!data.province || !data.regionalRoadmap) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
      </section>
    );
  },

  registry: ({ data }) => <UniversalRegistry data={data} />,

  "trust-network": ({ data }) => (
    <section className="bg-[var(--surface-main)] py-24 md:py-40">
      <UniversalLogoCloud
        title={data.clientTrust || "Strategic Partnership Network"}
        theme="full_section"
      />
    </section>
  ),

  nodes: ({ data }) => <RegionalNodeHub data={data} />,

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-offset)]">
      <DynamicFAQ
        items={data.faqs}
        title="Executive_Standard_FAQ"
        description="Comprehensive technical database ensuring operational transparency and engineering excellence."
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

const CorporateTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : [
          "hero",
          "insight",
          "promotions",
          "value-timeline",
          "roadmap",
          "registry",
          "trust-network",
          "nodes",
          "faq",
          "portal",
        ];

  return (
    <LayoutEngine data={data} theme={theme} className="template-corporate-orchestrator">
      <JsonLd data={schema} />

      <div className="relative flex flex-col">
        {renderSequence.map((key) => {
          const SectionComponent = CORPORATE_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
            MASTER_ARCHITECT_SYSTEM.v20.5.0_DYNAMIC
          </p>
        </footer>
      </div>
    </LayoutEngine>
  );
});

CorporateTemplate.displayName = "CorporateTemplate";
export default CorporateTemplate;
