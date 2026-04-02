/**
 * [SPECIALIST COMPONENT]: AEM_SPECIALIST_HERO v20.0.0 (MASTER_ARCHITECT)
 * [STRATEGY]: Framer Motion Orchestration | Magnetic Physics | Depth & Texture
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useRef } from "react";
import { m, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/ui/IconRenderer";
import { Magnetic } from "@/components/ui/Magnetic";

export const AEMSpecialistHero = memo(() => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // --- 01. COORDINATE TRACKING (Zero-Jank Performance) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // Skip for touch devices
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

  // --- 02. PARALLAX & ATMOSPHERIC EFFECTS ---
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleParallax = useTransform(scrollY, [0, 400], [1, 1.1]);

  const glowX = useTransform(smoothMouseX, [0, 1], ["20%", "80%"]);
  const glowY = useTransform(smoothMouseY, [0, 1], ["20%", "80%"]);

  // --- 03. ANIMATION VARIANTS (LCP-Maximized Orchestration) ---
  const containerVariants = {
    initial: { opacity: 1 }, // Visible by default for SSR/LCP
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02, // Dramatically faster stagger for 95+ PSI
        delayChildren: 0, // Zero delay for critical paint
      },
    },
  };

  const itemVariants = {
    initial: { y: 0, opacity: 1, filter: "blur(0px)" }, // Static by default to pass LCP check
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const statusNodes = [
    { label: "Infrastructure", value: "Enterprise Grade", icon: "ShieldCheck" },
    { label: "Performance", value: "99+ Mobile PSI", icon: "Zap" },
    { label: "Expertise", value: "Senior Architect", icon: "Crown" },
    { label: "Availability", value: "Ready for Q2 2026", icon: "Calendar" },
  ];

  return (
    <m.section
      ref={containerRef}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[var(--surface-main)] px-4 py-20 selection:bg-[var(--color-brand-primary)]/30"
    >
      {/* --- LAYER 01: TEXTURE & ATMOSPHERE (High-End Depth) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Optimized Grainy Noise Texture (Pure CSS Strategy) - Restricted to MD+ for LCP */}
        <div
          className="absolute inset-0 hidden opacity-[0.02] mix-blend-overlay brightness-100 contrast-150 md:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Dynamic Glow Mesh - Optimized for Mobile Performance */}
        <m.div
          style={{ x: glowX, y: glowY, opacity: opacityParallax }}
          className="absolute hidden h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-primary)]/15 blur-[160px] md:block"
        />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-brand-primary)]/5 blur-[120px] md:hidden" />

        {/* Floating Accents */}
        <m.div style={{ y: yParallax, scale: scaleParallax }} className="absolute inset-0 z-0">
          <div className="bg-brand-secondary/5 absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full blur-[120px]" />
          <div className="bg-brand-accent/5 absolute bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full blur-[100px]" />
        </m.div>

        {/* Tactical Grid (Sub-pixel Precision) */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* --- LAYER 02: CONTENT ARCHITECTURE --- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Status Nodes: Credibility HUD */}
          <m.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-6"
          >
            {statusNodes.map((node, i) => (
              <div
                key={i}
                className="glass-card flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-2xl transition-all duration-500 hover:scale-105 hover:border-[var(--color-brand-primary)]/40"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                </div>
                <span className="text-text-muted font-sans text-[10px] font-bold tracking-[0.1em] uppercase">
                  {node.label}: <span className="text-text-primary ml-1">{node.value}</span>
                </span>
              </div>
            ))}
          </m.div>

          {/* Main Title: Narrative Dominance (Static for LCP Optimization) */}
          <div className="relative mb-12 flex flex-col items-center">
            <h1 className="text-text-primary relative max-w-[14ch] text-7xl leading-[0.85] font-black tracking-tighter uppercase italic opacity-100 drop-shadow-sm transition-none md:text-9xl lg:text-[12rem]">
              Maximize <br />
              <span className="relative">
                <span className="from-brand-primary via-brand-primary/80 to-brand-accent bg-gradient-to-r bg-clip-text text-transparent">
                  Performance.
                </span>
                {/* Decorative underline */}
                <div className="absolute -bottom-4 left-0 h-2 w-full bg-[var(--color-brand-primary)] opacity-30 md:h-4" />
              </span>
            </h1>
          </div>

          {/* Executive Vision & Sub-Copy */}
          <div className="mb-20 flex max-w-4xl flex-col items-center">
            <p className="text-text-secondary max-w-2xl text-xl leading-relaxed font-bold italic opacity-95 md:text-3xl">
              “บอกลาเว็บไซต์ที่โหลดช้าจนลูกค้าหนี และระบบ SEO ที่ AI ไม่เคยค้นเจอ... เราสร้าง
              <span className="text-text-primary"> โครงสร้างดิจิทัลระดับ Enterprise</span>{" "}
              ที่เร็วทะลุขีดจำกัด และออกแบบมาเพื่อปิดการขายให้คุณโดยเฉพาะ”
            </p>
            <div className="mt-12 h-[2px] w-32 overflow-hidden rounded-full bg-[var(--color-brand-primary)]/20">
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-[var(--color-brand-primary)]"
              />
            </div>
          </div>

          {/* Conversion Actions: Strategic Call-to-Action */}
          <m.div variants={itemVariants} className="flex flex-col items-center gap-8 sm:flex-row">
            <Magnetic distance={0.3}>
              <Button
                size="lg"
                variant="default"
                href={SITE_CONFIG.links.line}
                className="group glow-primary relative h-20 min-w-[320px] overflow-hidden rounded-2xl px-12 text-[12px] font-black tracking-[0.4em] uppercase italic shadow-2xl transition-all duration-700"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 mr-6">คุยกับสถาปนิกเว็บ</span>
                <IconRenderer
                  name="Zap"
                  size={20}
                  className="relative z-10 transition-transform group-hover:scale-125 group-hover:rotate-12"
                />
              </Button>
            </Magnetic>

            <Magnetic distance={0.15}>
              <Button
                size="lg"
                variant="outline"
                href="/services"
                className="bg-surface-card/20 h-20 min-w-[320px] rounded-2xl border-[var(--color-brand-primary)]/30 px-12 text-[11px] font-black tracking-[0.4em] uppercase italic backdrop-blur-xl transition-all duration-700 hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)]/5"
              >
                <IconRenderer
                  name="ArrowRight"
                  size={18}
                  className="mr-4 text-[var(--color-brand-primary)]"
                />
                สำรวจโซลูชันทั้งหมด
              </Button>
            </Magnetic>
          </m.div>
        </div>
      </div>

      {/* --- LAYER 03: SCROLL INDICATOR (Tactical Feedback) --- */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: opacityParallax }}
        className="absolute bottom-10 flex flex-col items-center gap-4"
      >
        <span className="text-text-muted font-sans text-[9px] font-bold tracking-[0.3em] uppercase opacity-90">
          SYSTEM SCANNING BELOW
        </span>
        <div className="border-border/40 flex h-12 w-7 items-start justify-center rounded-full border p-2 backdrop-blur-sm">
          <m.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]"
          />
        </div>
      </m.div>
    </m.section>
  );
});

AEMSpecialistHero.displayName = "AEMSpecialistHero";
