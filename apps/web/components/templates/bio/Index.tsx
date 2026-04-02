/**
 * [TEMPLATE]: BIO_IDENTITY_MASTER (SPECIALIST_V2)
 * [STRATEGY]: Sequence-First Layout | Specialist Personal Branding | Dynamic Identity
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
const UniversalRegistry = dynamic(
  () => import("@/components/templates/sections/UniversalRegistry"),
);
const UniversalLogoCloud = dynamic(
  () => import("@/components/templates/sections/UniversalLogoCloud"),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((mod) => mod.DirectTerminal),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));

// [MASTER_MAP]: Strict Component Mapping for Bio DNA
const BIO_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => <UniversalHero data={data} />,

  promotions: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="relative z-10 w-full px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] border border-dashed border-[var(--color-brand-primary)]/40 bg-[var(--color-brand-primary)]/5 p-10 text-center backdrop-blur-xl"
        >
          <div className="shadow-pro-sm mb-8 inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--surface-card)] px-6 py-2">
            <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
            <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
              EXCLUSIVE_ACCESS.INIT
            </span>
          </div>
          <h3 className="mb-4 text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-5xl">
            {data.promotions[0].title}
          </h3>
          <p className="mb-10 text-xl font-bold text-[var(--text-secondary)] italic opacity-80">
            “{data.promotions[0].description}”
          </p>
          {data.promotions[0].discount && (
            <div className="inline-block rounded-2xl bg-[var(--color-brand-primary)] px-12 py-5 shadow-2xl">
              <span className="text-4xl font-black tracking-tighter text-[var(--color-brand-primary-fg)] italic">
                {data.promotions[0].discount}
              </span>
            </div>
          )}
        </motion.div>
      </section>
    );
  },

  registry: ({ data }) => (
    <section className="mx-6 my-12 rounded-[3rem] border border-[var(--border)] bg-[var(--surface-offset)] p-10 shadow-inner md:p-16">
      <UniversalRegistry data={data} />
    </section>
  ),

  authority: ({ data }) => {
    if (!data.province) return null;
    return (
      <div className="space-y-32 py-24 md:py-40">
        <LocalInsight
          insight={data.localContext?.marketInsight || ""}
          painPoints={(data.localContext?.painPoints as string[]) || []}
          marketโอกาสเติบโต={data.marketโอกาสเติบโต}
        />
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
        <div className="container mx-auto max-w-3xl px-6">
          <DirectTerminal
            mode="health-check"
            province={data.province}
            latency={data.regionalความเร็ว}
          />
        </div>
      </div>
    );
  },

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-main)] py-24 md:py-40">
      <DynamicFAQ
        items={data.faqs}
        title="Identity_Protocol_FAQ"
        description="Core principles and operational standards for specialist collaboration."
      />
    </section>
  ),

  "trust-network": ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-12">
      <UniversalLogoCloud
        title={data.clientTrust || "Specialist Network Authority"}
        theme="minimal_bar"
      />
    </section>
  ),

  contact: () => (
    <section className="py-24 md:py-40">
      <div className="container mx-auto max-w-3xl px-6">
        <DirectTerminal mode="contact" />
      </div>
    </section>
  ),
};

const BioTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : ["hero", "promotions", "registry", "authority", "trust-network", "faq", "contact"];

  return (
    <LayoutEngine data={data} theme={theme} className="template-bio-orchestrator">
      <JsonLd data={schema} />

      <main className="relative flex flex-col items-center bg-[var(--surface-main)] antialiased">
        <div className="w-full max-w-4xl space-y-0">
          {renderSequence.map((key) => {
            const SectionComponent = BIO_SECTIONS[key];
            if (!SectionComponent) return null;
            return <SectionComponent key={key} data={data} />;
          })}

          <footer className="py-24 text-center opacity-20">
            <div className="inline-flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
              <p className="font-mono text-[9px] tracking-[0.6em] uppercase">
                IDENTITY_ENGINE.v20.5.0_DYNAMIC
              </p>
            </div>
          </footer>
        </div>
      </main>
    </LayoutEngine>
  );
});

BioTemplate.displayName = "BioTemplate";
export default BioTemplate;
