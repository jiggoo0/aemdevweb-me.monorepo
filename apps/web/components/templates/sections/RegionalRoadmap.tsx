/**
 * [SECTION COMPONENT]: REGIONAL_ROADMAP_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Framer Motion Orchestration | Blueprint Aesthetic | Tactical Steps
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";

interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

interface RegionalRoadmapProps {
  province: string;
  steps?: readonly RoadmapStep[];
}

const DEFAULT_STEPS: RoadmapStep[] = [
  {
    step: "01",
    title: "Regional Market Intelligence",
    description:
      "วิเคราะห์ความต้องการเชิงลึกและโครงสร้างคู่แข่งในพื้นที่ของคุณ เพื่อวางรากฐานกลยุทธ์ที่แม่นยำที่สุด",
  },
  {
    step: "02",
    title: "High-Performance Deployment",
    description:
      "ติดตั้งโครงสร้างพื้นฐานดิจิทัลที่โหลดไวระดับ Milliseconds เพื่อประสบการณ์การใช้งานที่ลื่นไหลไร้รอยต่อ",
  },
  {
    step: "03",
    title: "Dominant Search Authority",
    description:
      "ยึดครองพื้นที่บน Google Maps และ Search Engine เพื่อเปลี่ยนการค้นหาท้องถิ่นให้เป็นยอดขายจริง",
  },
];

export const RegionalRoadmap = memo(({ province, steps = DEFAULT_STEPS }: RegionalRoadmapProps) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0, filter: "blur(8px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[var(--surface-offset)] py-32 md:py-48">
      {/* --- LAYER 01: BLUEPRINT ATMOSPHERE --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Grainy Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay brightness-100 contrast-150">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilterRoadmap">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterRoadmap)" />
          </svg>
        </div>

        {/* Tactical Grid */}
        <div
          className="absolute inset-0 opacity-[var(--dna-grid,0.04)]"
          style={{
            backgroundImage: `linear-gradient(var(--color-brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Header Architecture */}
          <motion.div variants={itemVariants} className="mb-24 space-y-6 text-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
              <span className="font-sans text-[11px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase italic">
                DEPLOYMENT_FRAMEWORK.v20
              </span>
            </div>

            <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-8xl lg:text-9xl">
              {province} <br />{" "}
              <span className="text-[var(--color-brand-primary)]">Blueprint.</span>
            </h2>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed font-bold italic opacity-80 md:text-3xl">
              “ยุทธศาสตร์ 3 ขั้นตอนสู่การครองความเหนือกว่าด้านเทคนิคในระดับภูมิภาค”
            </p>
          </motion.div>

          {/* Roadmap Matrix */}
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {steps.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group relative">
                <div className="glass-card hover:shadow-pro-xl relative overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface-card)] p-12 transition-all duration-700 hover:border-[var(--color-brand-primary)]/40">
                  {/* Step ID Marker */}
                  <span className="absolute top-10 right-12 font-mono text-[12px] font-black tracking-widest text-[var(--color-brand-primary)]/10 uppercase">
                    PHASE_{item.step}
                  </span>

                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-[var(--color-brand-primary)] text-4xl font-black text-[var(--color-brand-primary-fg)] italic shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    {item.step}
                  </div>

                  <h4 className="mb-6 text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-3xl">
                    {item.title}
                  </h4>

                  <p className="text-lg leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-70">
                    “{item.description}”
                  </p>

                  {idx < 2 && (
                    <div className="absolute top-1/2 -right-10 z-10 hidden -translate-y-1/2 text-[var(--color-brand-primary)]/10 lg:block">
                      <IconRenderer name="ArrowRight" size={48} strokeWidth={3} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

RegionalRoadmap.displayName = "RegionalRoadmap";
