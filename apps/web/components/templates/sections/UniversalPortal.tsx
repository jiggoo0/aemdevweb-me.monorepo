/**
 * [SECTION COMPONENT]: UNIVERSAL_PORTAL_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Framer Motion Orchestration | Narrative Conversion | Tactical Depth
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { BaseTemplateProps } from "@/types";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { Magnetic } from "@/components/ui/Magnetic";

const UniversalPortal = ({ data }: BaseTemplateProps) => {
  const { primaryAction, secondaryAction } = data;

  const portalTitle = data.category
    ? `พร้อมยกระดับธุรกิจ ${data.category} ของคุณหรือยัง?`
    : "พร้อมยกระดับธุรกิจของคุณสู่มาตรฐานสากลหรือยัง?";

  const portalDescription =
    "ก้าวไปอีกขั้นกับโซลูชันที่ออกแบบมาเพื่อผลลัพธ์ที่จับต้องได้ ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและสนับสนุนคุณในทุกขั้นตอน";

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0, filter: "blur(10px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="universal-portal"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface-main)] py-24 md:py-40 lg:py-48"
    >
      {/* --- LAYER 01: VISUAL INFRASTRUCTURE --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Grainy Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay brightness-100 contrast-125">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <filter id="noiseFilterPortal">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.6"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterPortal)" />
          </svg>
        </div>

        {/* Tactical Grid */}
        <div
          className="absolute inset-0 opacity-[var(--dna-grid,0.03)]"
          style={{
            backgroundImage: "radial-gradient(var(--color-brand-primary) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Dynamic Glow */}
        <div className="absolute bottom-0 left-1/2 h-[600px] w-full -translate-x-1/2 rounded-full bg-[var(--color-brand-primary)]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Authority Marker */}
          <motion.div variants={itemVariants} className="mb-12 flex flex-col items-center gap-6">
            <div className="shadow-pro flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface-card)] text-[var(--color-brand-primary)] ring-1 ring-[var(--color-brand-primary)]/10 backdrop-blur-xl md:h-24 md:w-24">
              <IconRenderer name="Target" size={40} className="md:size-12" />
            </div>
            <span className="font-sans text-[11px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-80">
              STRATEGIC_NEXT_STEP
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-10 text-4xl leading-[1.1] font-black tracking-tighter text-[var(--text-primary)] uppercase italic sm:text-6xl lg:text-8xl"
          >
            {portalTitle.split(" ").map((word, i) => (
              <span key={i} className={i === 2 ? "text-[var(--color-brand-primary)]" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-20 max-w-3xl text-xl leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-90 md:text-3xl"
          >
            “{portalDescription}”
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <Magnetic distance={0.3}>
              <Button
                asChild
                size="lg"
                className="group relative h-20 min-w-[320px] overflow-hidden rounded-2xl bg-[var(--color-brand-primary)] px-12 text-[12px] font-black tracking-[0.4em] text-[var(--color-brand-primary-fg)] uppercase italic shadow-2xl transition-all duration-700 hover:scale-[1.02]"
              >
                <Link href={primaryAction?.href || SITE_CONFIG.links.line}>
                  <span className="relative z-10 mr-6">
                    {primaryAction?.label || "ปรึกษาผู้เชี่ยวชาญ"}
                  </span>
                  <IconRenderer
                    name={primaryAction?.icon || "Zap"}
                    size={20}
                    className="relative z-10 transition-transform group-hover:scale-125 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>
            </Magnetic>

            {(secondaryAction || data.category) && (
              <Magnetic distance={0.15}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-20 min-w-[320px] rounded-2xl border-[var(--color-brand-primary)]/30 bg-[var(--surface-card)]/20 px-12 text-[11px] font-black tracking-[0.4em] text-[var(--text-primary)] uppercase italic backdrop-blur-xl transition-all duration-700 hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5"
                >
                  <Link href={secondaryAction?.href || "#"}>
                    <IconRenderer
                      name={secondaryAction?.icon || "ArrowRight"}
                      size={18}
                      className="mr-4 text-[var(--color-brand-primary)]"
                    />
                    {secondaryAction?.label || "ดูรายละเอียดบริการ"}
                  </Link>
                </Button>
              </Magnetic>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(UniversalPortal);
