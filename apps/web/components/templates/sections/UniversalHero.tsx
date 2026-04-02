/**
 * [SYSTEM COMPONENT]: UNIVERSAL_HERO_V3 (MASTER_ARCHITECT_EDITION)
 * [STRATEGY]: Framer Motion Orchestration | DNA-Aware Design | Tactical Depth
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import type { BaseTemplateProps } from "@/types";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Magnetic } from "@/components/ui/Magnetic";

interface UniversalHeroProps extends Partial<BaseTemplateProps> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  primaryActionLabel?: string;
  primaryHref?: string;
  secondaryActionLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
}

const UniversalHero = ({
  data,
  title: directTitle,
  subtitle: directSubtitle,
  description: directDescription,
  primaryActionLabel,
  primaryHref,
  secondaryActionLabel,
  secondaryHref,
  align = "center",
}: UniversalHeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // --- 01. DATA RESOLUTION ---
  const title = directTitle || data?.title || SITE_CONFIG.hero.title;
  const description =
    directDescription || directSubtitle || data?.description || SITE_CONFIG.hero.description;

  // --- 02. COORDINATE TRACKING (Zero-Jank) ---
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 1,
      height: 1,
    };
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  // --- 03. ATMOSPHERIC PARALLAX ---
  const glowX = useTransform(smoothMouseX, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(smoothMouseY, [0, 1], ["20%", "80%"]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  // --- 04. ANIMATION VARIANTS (Luxury Orchestration) ---
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0, filter: "blur(6px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex min-h-[90dvh] w-full flex-col justify-center overflow-hidden bg-[var(--surface-main)] px-6 py-24 md:py-32",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {/* --- LAYER 01: ATMOSPHERIC ENGINE (DNA-Aware) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Grainy Noise Texture (High-End Depth) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay brightness-100 contrast-125">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        {/* Tactical Interaction Glow */}
        <motion.div
          style={{
            x: glowX,
            y: glowY,
            opacity: opacityParallax,
            backgroundColor: "var(--color-brand-primary)",
          }}
          className="absolute h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[var(--dna-opacity,0.1)] blur-[140px]"
        />

        {/* Template DNA Grid */}
        <div
          className="absolute inset-0 opacity-[var(--dna-grid,0.05)]"
          style={{
            backgroundImage: `radial-gradient(var(--color-brand-primary) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* --- LAYER 02: CONTENT HUB --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center">
          {/* Section Marker */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex items-center gap-3 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-4 py-2 backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[var(--color-brand-primary)] uppercase">
              {data?.sections?.hero?.badge || SITE_CONFIG.brandName} Specialist
            </span>
          </motion.div>

          {/* Main Title: Narrative Dominance */}
          <motion.h1
            variants={itemVariants}
            className="mb-12 max-w-6xl text-6xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic drop-shadow-sm md:text-8xl lg:text-[10rem]"
          >
            {typeof title === "string"
              ? title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      i % 2 === 1
                        ? "text-[var(--color-brand-primary)] saturate-150 filter"
                        : "text-[var(--text-primary)]"
                    }
                  >
                    {word}{" "}
                  </span>
                ))
              : title}
          </motion.h1>

          {/* Core Vision: Executive Narrative */}
          <motion.div
            variants={itemVariants}
            className="mb-20 flex max-w-4xl flex-col items-center"
          >
            <p className="max-w-3xl text-xl leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-90 md:text-3xl">
              {description}
            </p>
            <div className="mt-12 h-[2px] w-32 overflow-hidden rounded-full bg-[var(--color-brand-primary)]/20">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-[var(--color-brand-primary)]"
              />
            </div>
          </motion.div>

          {/* Conversion Actions: Strategic Funnel */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-8 sm:flex-row"
          >
            <Magnetic distance={0.3}>
              <a
                href={primaryHref || SITE_CONFIG.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-20 min-w-[320px] items-center justify-center overflow-hidden rounded-[var(--radius-button,1rem)] bg-[var(--color-brand-primary)] px-12 text-[12px] font-black tracking-[0.4em] text-[var(--color-brand-primary-fg)] uppercase italic shadow-2xl transition-all duration-700 hover:scale-[1.02]"
              >
                <span className="relative z-10 mr-6">
                  {primaryActionLabel || "Consult Specialist"}
                </span>
                <IconRenderer
                  name="Zap"
                  size={20}
                  className="relative z-10 transition-transform group-hover:scale-125 group-hover:rotate-12"
                />
                <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-1000 group-hover:translate-x-full" />
              </a>
            </Magnetic>

            {(secondaryActionLabel || data?.secondaryAction) && (
              <Magnetic distance={0.15}>
                <a
                  href={secondaryHref || "#"}
                  className="flex h-20 min-w-[320px] items-center justify-center rounded-[var(--radius-button,1rem)] border-[var(--color-brand-primary)]/30 bg-[var(--surface-card)]/20 px-12 text-[11px] font-black tracking-[0.4em] text-[var(--text-primary)] uppercase italic backdrop-blur-xl transition-all duration-700 hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5"
                >
                  <IconRenderer
                    name="ArrowRight"
                    size={18}
                    className="mr-4 text-[var(--color-brand-primary)]"
                  />
                  {secondaryActionLabel || data?.secondaryAction?.label || "Explore Solutions"}
                </a>
              </Magnetic>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(UniversalHero);
