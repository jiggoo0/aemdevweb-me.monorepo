/**
 * [REGIONAL COMPONENT]: LOCAL_INSIGHT_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Data Transparency | Professional Typography | Premium Analytics
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { UniversalTemplateProps } from "@/types";

interface LocalInsightProps {
  data?: UniversalTemplateProps;
  insight?: string;
  painPoints?: string[];
  marketโอกาสเติบโต?: number;
}

export const LocalInsight = memo(
  ({
    data,
    insight: directInsight,
    painPoints: directPainPoints,
    marketโอกาสเติบโต: directโอกาสเติบโต,
  }: LocalInsightProps) => {
    const insight = directInsight || data?.localContext?.marketInsight || data?.description || "";
    const painPoints = directPainPoints || (data?.localContext?.painPoints as string[]) || [];
    const saturation = directโอกาสเติบโต || data?.marketโอกาสเติบโต || 45;
    const competitorIndex = (saturation * 1.2).toFixed(1);
    const opportunityScore = (100 - saturation * 0.8).toFixed(1);

    const containerVariants = {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    };

    const itemVariants = {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
      <section className="relative overflow-hidden bg-[var(--surface-main)] py-32 md:py-48">
        {/* --- LAYER 01: ATMOSPHERIC ENGINE --- */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay contrast-125">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <filter id="noiseInsight">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseInsight)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-brand-primary)_0%,transparent_60%)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24"
          >
            {/* --- INTELLIGENCE_NODE --- */}
            <div className="space-y-16 lg:col-span-7">
              <motion.div variants={itemVariants} className="space-y-10">
                <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2 backdrop-blur-md">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
                  <span className="font-sans text-[11px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase italic">
                    MARKET_INTELLIGENCE.v20
                  </span>
                </div>

                <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-8xl">
                  Regional <br />{" "}
                  <span className="text-[var(--color-brand-primary)]">Insight.</span>
                </h2>

                <div className="border-l-[8px] border-[var(--color-brand-primary)]/40 pl-8 md:pl-12">
                  <p className="text-2xl leading-relaxed font-bold text-[var(--text-primary)] italic opacity-90 md:text-4xl">
                    {insight}
                  </p>
                </div>
              </motion.div>

              {/* Matrix Units */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
                {[
                  {
                    label: "Digital Growth",
                    val: `${saturation}%`,
                    color: "text-[var(--color-brand-primary)]",
                  },
                  {
                    label: "Comp Index",
                    val: competitorIndex,
                    color: "text-[var(--text-primary)]",
                  },
                  {
                    label: "Opp Score",
                    val: `${opportunityScore}`,
                    color: "text-[var(--color-brand-primary)]",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="glass-card shadow-pro-xl group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface-card)] p-8 transition-all hover:border-[var(--color-brand-primary)]/40"
                  >
                    <span className="mb-4 block font-mono text-[10px] font-black tracking-widest text-[var(--text-muted)] uppercase opacity-60">
                      {item.label}
                    </span>
                    <div className="relative z-10 flex items-end gap-2">
                      <span
                        className={cn(
                          "text-4xl font-black tracking-tighter italic md:text-5xl",
                          item.color,
                        )}
                      >
                        {item.val}
                      </span>
                      {i === 2 && (
                        <span className="mb-1 text-[12px] font-bold text-[var(--text-muted)] opacity-30">
                          /100
                        </span>
                      )}
                    </div>
                    <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-[var(--color-brand-primary)]/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- DIAGNOSTIC_NODE --- */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="glass-card shadow-pro-2xl relative overflow-hidden rounded-[3rem] border border-[var(--border)] bg-[var(--surface-card)] p-10 backdrop-blur-3xl md:p-16">
                <div className="absolute inset-0 -z-10 bg-[var(--color-brand-primary)]/5" />
                <span className="mb-12 block font-sans text-[11px] font-black tracking-[0.4em] text-[var(--text-muted)] uppercase opacity-60">
                  CRITICAL_MARKET_CHALLENGES
                </span>

                <div className="space-y-8 md:space-y-10">
                  {painPoints?.map((point, idx) => (
                    <div key={idx} className="group flex items-start gap-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)] transition-all group-hover:scale-110 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary-fg)]">
                        <IconRenderer name="Zap" size={20} />
                      </div>
                      <p className="text-lg leading-relaxed font-bold text-[var(--text-secondary)] italic transition-colors group-hover:text-[var(--text-primary)] md:text-xl">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 border-t border-[var(--border)] pt-10">
                  <p className="font-mono text-[10px] font-black tracking-[0.5em] text-[var(--text-muted)] uppercase opacity-40">
                    VERIFIED_REGIONAL_PROTOCOL.v20
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  },
);

LocalInsight.displayName = "LocalInsight";
