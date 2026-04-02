/**
 * [TEMPLATE]: HOSPITALITY_MASTER_ORCHESTRATOR (DYNAMIC_V2)
 * [STRATEGY]: Composition-First Layout | Province Identity Guard | Performance Optimized
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
const WeatherTracker = dynamic(() =>
  import("../sections/WeatherTracker").then((mod) => mod.WeatherTracker),
);
const ExperienceNodes = dynamic(() =>
  import("../sections/ExperienceNodes").then((mod) => mod.ExperienceNodes),
);
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
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
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));

// --- 2. Shared High-Performance Components ---
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [MASTER_MAP]: Strict Component Mapping for Hospitality DNA
const HOSPITALITY_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card shadow-pro-xl relative overflow-hidden rounded-[var(--radius-section,2.5rem)] border-l-[8px] border-[var(--color-brand-primary)] p-10 backdrop-blur-3xl md:p-20"
          >
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
                  <span className="font-sans text-[12px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
                    HOSPITALITY_SPECIAL_OFFER
                  </span>
                </div>
                <h3 className="text-4xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-7xl">
                  {data.promotions[0].title}
                </h3>
                <p className="max-w-xl text-xl font-bold text-[var(--text-secondary)] italic opacity-90">
                  “{data.promotions[0].description}”
                </p>
              </div>
              {data.promotions[0].discount && (
                <div className="min-w-[240px] rounded-[2rem] border-2 border-dashed border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/5 px-12 py-10 text-center shadow-inner">
                  <p className="mb-2 text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase opacity-60">
                    EXCLUSIVE_SAVING
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

  "weather-facilities": ({ data }) => (
    <section className="space-y-24 bg-[var(--surface-main)] py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="ml-auto max-w-md">
          <WeatherTracker location={data.province || "Thailand"} />
        </div>
      </div>
      <UniversalRegistry data={data} />
    </section>
  ),

  experience: ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
      <ExperienceNodes isTourismHeavy={data.isTourismHeavy} />
    </section>
  ),

  "roadmap-gallery": ({ data }) => (
    <div className="space-y-32 bg-[var(--surface-main)] py-24 md:py-40">
      {data.province && data.regionalRoadmap && (
        <RegionalRoadmap province={data.province} steps={data.regionalRoadmap} />
      )}
      {data.regionalVisuals?.gallery && <RegionalGallery images={data.regionalVisuals.gallery} />}
    </div>
  ),

  success: ({ data }) => {
    if (!data.localSuccessStory) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
        <LocalSuccessNode
          title={data.localSuccessStory.title}
          result={data.localSuccessStory.result}
          province={data.province || "Thailand"}
        />
      </section>
    );
  },

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-main)] py-24 md:py-40">
      <DynamicFAQ
        items={data.faqs}
        title="Essential_Hospitality_FAQ"
        description={`Critical operational intelligence for your stay at ${data.title}.`}
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

const HotelResortTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : [
          "hero",
          "insight",
          "promotions",
          "weather-facilities",
          "experience",
          "roadmap-gallery",
          "success",
          "faq",
          "portal",
        ];

  return (
    <LayoutEngine data={data} theme={theme} className="template-hospitality-orchestrator">
      <JsonLd data={schema} />

      <main className="relative flex flex-col antialiased">
        {renderSequence.map((key) => {
          const SectionComponent = HOSPITALITY_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
            HOSPITALITY_PROTOCOL.v20.5.0_DYNAMIC
          </p>
        </footer>
      </main>
    </LayoutEngine>
  );
});

HotelResortTemplate.displayName = "HotelResortTemplate";
export default HotelResortTemplate;
