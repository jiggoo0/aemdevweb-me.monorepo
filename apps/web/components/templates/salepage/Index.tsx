/**
 * [TEMPLATE]: SALEPAGE_MASTER_ORCHESTRATOR (CONVERSION_V2)
 * [STRATEGY]: Sequence-First Layout | Identity Guard | Tactical Flow
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
const SaleNavbar = dynamic(() => import("../sections/SaleNavbar").then((mod) => mod.SaleNavbar));
const FlashSaleTimer = dynamic(() =>
  import("../sections/FlashSaleTimer").then((mod) => mod.FlashSaleTimer),
);
const ThaiTrustBadge = dynamic(() =>
  import("../sections/ThaiTrustBadge").then((mod) => mod.ThaiTrustBadge),
);
const DirectOrderForm = dynamic(() =>
  import("../sections/DirectOrderForm").then((mod) => mod.DirectOrderForm),
);
const StickyBuyButton = dynamic(() => import("../sections/StickyBuyButton"));
const IconRenderer = dynamic(() => import("@/components/ui/IconRenderer"));

// --- 2. Shared High-Performance Components ---
const LocalInsight = dynamic(() =>
  import("../sections/LocalInsight").then((mod) => mod.LocalInsight),
);
const RegionalRoadmap = dynamic(() =>
  import("../sections/RegionalRoadmap").then((mod) => mod.RegionalRoadmap),
);
const LocalSuccessNode = dynamic(() =>
  import("../sections/LocalSuccessNode").then((mod) => mod.LocalSuccessNode),
);
const RegionalGallery = dynamic(() =>
  import("../sections/RegionalGallery").then((mod) => mod.RegionalGallery),
);
const DirectTerminal = dynamic(() =>
  import("../sections/DirectTerminal").then((mod) => mod.DirectTerminal),
);
const DynamicFAQ = dynamic(() => import("../sections/DynamicFAQ").then((mod) => mod.DynamicFAQ));
const RegionalNodeHub = dynamic(() => import("../sections/RegionalNodeHub"));
const UniversalPortal = dynamic(() => import("@/components/templates/sections/UniversalPortal"));
const TrustBadge = dynamic(() => import("@/components/shared/TrustBadge"));
const WorkProcess = dynamic(() => import("@/components/features/landing/WorkProcess"));
const PricingSection = dynamic(() => import("@/components/features/landing/PricingSection"));
const ConversionCTA = dynamic(() => import("@/components/shared/ConversionCTA"));

// [MASTER_MAP]: Strict Component Mapping for SalePage DNA
const SALEPAGE_SECTIONS: Record<
  string,
  React.FC<{ data: UniversalTemplateProps; isDarkMode?: boolean }>
> = {
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

  deal: ({ data }) => {
    if (!data.promotions || data.promotions.length === 0) return null;
    return (
      <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card shadow-pro-xl relative overflow-hidden rounded-[var(--radius-section,2.5rem)] border-l-[8px] border-[var(--color-brand-primary)] p-10 backdrop-blur-3xl md:p-16"
          >
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="flex items-center gap-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]">
                  <IconRenderer name="Sparkles" size={40} />
                </div>
                <div className="space-y-2">
                  <span className="font-sans text-[11px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
                    LIMITED_TIME_OFFER.INIT
                  </span>
                  <h4 className="text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-5xl">
                    {data.promotions[0].title}
                  </h4>
                  <p className="text-lg font-bold text-[var(--text-secondary)] italic opacity-90">
                    “{data.promotions[0].description}”
                  </p>
                </div>
              </div>
              {data.promotions[0].discount && (
                <div className="min-w-[220px] rounded-[2rem] border border-[var(--border)] bg-[var(--surface-offset)] px-10 py-6 text-center shadow-inner">
                  <p className="mb-1 text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase opacity-80">
                    PROMOTION_VALUE
                  </p>
                  <p className="text-5xl font-black tracking-tighter text-[var(--color-brand-primary)] italic">
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

  scarcity: ({ data }) => (
    <section className="bg-[var(--surface-main)] py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <FlashSaleTimer color="var(--color-brand-primary)" />
        {data.socialProof && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex text-amber-400 drop-shadow-md">
              {[...Array(5)].map((_, i) => (
                <IconRenderer key={i} name="Star" size={24} className="fill-current" />
              ))}
            </div>
            <span className="font-sans text-[10px] font-black tracking-[0.2em] text-[var(--text-muted)] uppercase">
              CONFIRMED_BY_{data.socialProof.reviewCount?.toLocaleString()}_CLIENTS
            </span>
          </motion.div>
        )}
      </div>
    </section>
  ),

  registry: ({ data }) => <UniversalRegistry data={data} />,

  matrix: ({ data }) => {
    if (!data.regionalVisuals?.gallery && !data.province) return null;
    return (
      <div className="space-y-32 py-24 md:py-40">
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

  "trust-signals": ({ data, isDarkMode }) => (
    <section className="border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40">
      <ThaiTrustBadge
        clientTrust={data.clientTrust}
        isDark={isDarkMode || false}
        accentColor="var(--color-brand-primary)"
      />
    </section>
  ),

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
        title="Conversion_Standard_FAQ"
        description="Strategic technical objections resolved with operational transparency."
        className="py-24 md:py-40"
      />
    </section>
  ),

  order: ({ data }) => (
    <section id="order" className="relative bg-[var(--surface-main)] py-24 md:py-40">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="shadow-pro-xl overflow-hidden rounded-[var(--radius-section,2.5rem)] border border-[var(--border)] bg-[var(--surface-card)]">
          <div className="relative overflow-hidden bg-[var(--text-primary)] p-12 text-center text-white md:p-24">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--color-brand-primary)] opacity-20 blur-[120px]" />
            <h3 className="relative z-10 text-5xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">
              Initialize <br /> <span className="text-[var(--color-brand-primary)]">Growth.</span>
            </h3>
            <div className="relative z-10 mt-12 inline-flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-10 py-5 backdrop-blur-md">
              <span className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
                SPECIAL_PROJECT_RATE
              </span>
              <span className="text-3xl font-black text-[var(--color-brand-primary)] italic">
                {data.regionalPricing?.startPrice || data.price || "Contact for Price"}
              </span>
            </div>
          </div>
          <div className="p-10 md:p-24">
            <DirectOrderForm
              price={data.price}
              unit={data.unit}
              accentColor="var(--color-brand-primary)"
            />
          </div>
        </div>
      </div>
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

const SalePageTemplate = memo(({ data }: { data: UniversalTemplateProps }) => {
  const schemas = generateUniversalSchema(data);
  const { theme } = data;
  const isDarkMode = theme?.mode === "dark";

  const renderSequence =
    data.layoutOrder && data.layoutOrder.length > 0
      ? data.layoutOrder
      : [
          "hero",
          "insight",
          "deal",
          "scarcity",
          "registry",
          "matrix",
          "trust-signals",
          "success",
          "nodes",
          "faq",
          "order",
        ];

  return (
    <LayoutEngine data={data} theme={theme} className="template-salepage-orchestrator">
      <JsonLd data={schemas} id={`schema-salepage-${data.templateSlug}`} />

      {/* [CONVERSION_AURAS]: แสง Spotlight ประจำเทมเพลต */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-[1000px] w-full bg-[radial-gradient(ellipse_at_top_left,var(--color-brand-primary)_0%,transparent_60%)] opacity-10" />

      <SaleNavbar
        title={data.title}
        action={{ label: "Initialize Order", href: "#order" }}
        theme={theme}
      />

      <main className="relative flex flex-col antialiased">
        {renderSequence.map((key) => {
          const SectionComponent = SALEPAGE_SECTIONS[key];
          if (!SectionComponent) return null;
          return <SectionComponent key={key} data={data} isDarkMode={isDarkMode} />;
        })}

        <footer className="border-t border-[var(--border)] bg-[var(--surface-main)] py-12 text-center opacity-20">
          <p className="font-mono text-[9px] tracking-[0.5em] uppercase">
            SALEPAGE_ACTIVE_PROTOCOL.v20.5.0_DYNAMIC
          </p>
        </footer>
      </main>

      <StickyBuyButton
        href="#order"
        label={`Secure Your Slot Now ${data.price ? `(${data.price})` : ""}`}
        theme={theme}
      />
    </LayoutEngine>
  );
});

SalePageTemplate.displayName = "SalePageTemplate";
export default SalePageTemplate;
