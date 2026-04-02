/**
 * [TEMPLATE]: LOCAL_AUTHORITY_MASTER_ORCHESTRATOR (PSEO_V2)
 * [STRATEGY]: Hyper-Local Authority | Consistent Visual Rhythm | Identity Guard
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
const LocalMapNode = dynamic(() => import("../sections/LocalMapNode").then((m) => m.LocalMapNode));
const LocalInsight = dynamic(() => import("../sections/LocalInsight").then((m) => m.LocalInsight));
const MarketIntelligence = dynamic(() =>
  import("../sections/MarketIntelligence").then((m) => m.MarketIntelligence),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((m) => m.RegionalRoadmap),
);
const LocalSuccessNode = dynamic(() =>
  import("../sections/LocalSuccessNode").then((m) => m.LocalSuccessNode),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((m) => m.DirectTerminal),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((m) => m.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));

// [MASTER_MAP]: Strict Component Mapping for Local Authority DNA
const LOCAL_AUTHORITY_SECTIONS: Record<string, React.FC<{ data: UniversalTemplateProps }>> = {
  hero: ({ data }) => <UniversalHero data={data} align="center" />,

  map: ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-12 md:py-20">
      <LocalMapNode
        lat={data.coordinates?.lat || 13.7563}
        lng={data.coordinates?.lng || 100.5018}
        province={data.province || "Thailand"}
      />
    </section>
  ),

  intelligence: ({ data }) => (
    <div className="relative space-y-0 bg-[var(--surface-main)]">
      <LocalInsight
        insight={data.localContext?.marketInsight || ""}
        painPoints={(data.localContext?.painPoints as string[]) || []}
        marketโอกาสเติบโต={data.marketโอกาสเติบโต}
      />
      <MarketIntelligence
        level={data.localContext?.competitorLevel || "medium"}
        industries={(data.localContext?.nicheIndustries as string[]) || []}
      />
    </div>
  ),

  blueprint: ({ data }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-32 md:py-48">
      <RegionalRoadmap province={data.province || "Thailand"} steps={data.regionalRoadmap} />
      <div className="container mx-auto mt-24 max-w-2xl px-6">
        <DirectTerminal
          mode="health-check"
          province={data.province || "Thailand"}
          latency={data.regionalความเร็ว}
        />
      </div>
    </section>
  ),

  evidence: ({ data }) => (
    <section className="bg-[var(--surface-main)] py-24 md:py-40">
      <div className="container mx-auto mb-20 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-80"
        >
          VALIDATED_REGIONAL_EVIDENCE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-6xl"
        >
          Success <span className="text-[var(--color-brand-primary)]">Evidence.</span>
        </motion.h2>
      </div>

      {data.localSuccessStory && (
        <LocalSuccessNode
          title={data.localSuccessStory.title}
          result={data.localSuccessStory.result}
          province={data.province || "Thailand"}
        />
      )}

      <div className="mt-32 px-6">
        <TrustBadge />
      </div>
    </section>
  ),

  nodes: ({ data }) => <RegionalNodeHub data={data} />,

  faq: ({ data }) => (
    <section className="border-t border-[var(--border)] bg-[var(--surface-offset)]">
      <DynamicFAQ
        items={data.faqs || []}
        title={`Regional_FAQ: ${data.province || "Thailand"}`}
        description={`ตอบทุกข้อสงสัยเชิงเทคนิคและการให้บริการสำหรับพื้นที่ ${data.province || "Thailand"}`}
        className="py-24 md:py-40"
      />
    </section>
  ),

  portal: ({ data }) => <UniversalPortal data={data} />,
};

const LocalAuthorityTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schema = generateUniversalSchema(data);
  const { theme } = data;
  const provinceName = data.province || "Thailand";

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : ["hero", "map", "intelligence", "blueprint", "evidence", "nodes", "faq", "portal"];

  return (
    <LayoutEngine data={data} theme={theme} className="template-local-authority-orchestrator">
      <JsonLd data={schema} id={`schema-pseo-${data.slug}`} />

      <main className="relative flex flex-col antialiased">
        {renderSequence.map((key) => {
          const SectionComponent = LOCAL_AUTHORITY_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <div className="inline-flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
            <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
              PSEO_PROTOCOL.v20.5.0_DYNAMIC_{provinceName.toUpperCase()}
            </p>
          </div>
        </footer>
      </main>
    </LayoutEngine>
  );
});

LocalAuthorityTemplate.displayName = "LocalAuthorityTemplate";
export default LocalAuthorityTemplate;
