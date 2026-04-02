/**
 * [SECTION COMPONENT]: VALUE_BLUEPRINT_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Framer Motion Orchestration | Blueprint Aesthetic | Tactical Data
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

export const ValueBlueprint = memo(() => {
  const stats = [
    { label: "AI_Entity_Trust", value: "98%", desc: "Generative Search Visibility" },
    { label: "Core_Vitals_Pass", value: "100%", desc: "Standardized Engineering" },
    { label: "Average_ROI_Gain", value: "x3.8", desc: "Conversion Infrastructure" },
  ];

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
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface-offset)] py-24 md:py-40 lg:py-48">
      {/* --- LAYER 01: BLUEPRINT INFRASTRUCTURE --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Grainy Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay brightness-100 contrast-150">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilterValue">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterValue)" />
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

        {/* Dynamic Glow Accents */}
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Header Node */}
          <motion.div variants={itemVariants} className="mb-24 space-y-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[var(--color-brand-primary)]" />
              <span className="font-sans text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase italic">
                SUCCESS_BLUEPRINT.ARCHITECTURE
              </span>
              <div className="h-px w-12 bg-[var(--color-brand-primary)]" />
            </div>
            <h2 className="text-4xl leading-none font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-7xl lg:text-8xl">
              Success <span className="text-[var(--color-brand-primary)]">Hardened.</span>
            </h2>
          </motion.div>

          {/* Stats Matrix */}
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 md:gap-16 lg:gap-32">
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group relative space-y-6">
                <div className="relative space-y-2">
                  <motion.p
                    className="font-mono text-7xl font-black tracking-tighter text-[var(--color-brand-primary)] italic md:text-8xl lg:text-9xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.2, duration: 1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-mono text-[11px] font-black tracking-[0.3em] text-[var(--text-primary)] uppercase opacity-80">
                    // {stat.label}
                  </p>
                </div>

                <p className="max-w-[280px] text-sm leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-60 transition-opacity group-hover:opacity-100">
                  {stat.desc}
                </p>

                {/* Tactical Progress Bar */}
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[var(--color-brand-primary)]/10">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 1 + idx * 0.2, duration: 2, ease: "circOut" }}
                    style={{ transformOrigin: "left" }}
                    className="absolute inset-0 h-full w-full bg-[var(--color-brand-primary)]"
                  />
                  <div className="animate-shimmer absolute inset-0 h-full w-1/3 bg-white/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ValueBlueprint.displayName = "ValueBlueprint";
