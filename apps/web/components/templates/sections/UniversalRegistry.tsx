/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [MISSION]: CONSOLIDATE_ALL_REGISTRY_VARIANTS (Elite Master Edition)
 * [COMPONENT_ID]: UniversalRegistry.tsx
 * [VERSION]: 3.0.0
 * [STRATEGY]: Perspective Motion | Technical Hierarchy | Tactical Depth
 */

"use client";

import React, { memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { BaseTemplateProps, ServiceFeature, CatalogItem } from "@/types";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";

// --- [01] PERSPECTIVE CARD (Elite Interaction) ---
const FeatureCard = memo(({ feature, idx }: { feature: ServiceFeature; idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface-card)] p-10 backdrop-blur-xl transition-colors duration-500 hover:border-[var(--color-brand-primary)]/40"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="group-hover:shadow-glow-sm mb-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary-fg)]">
          <IconRenderer name={feature.icon as IconName} size={40} strokeWidth={2} />
        </div>

        <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase italic opacity-40">
          CAPABILITY_NODE_{idx.toString().padStart(2, "0")}
        </span>
        <h3 className="mt-4 mb-6 text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
          {feature.title}
        </h3>
        <p className="text-lg leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-70">
          “{feature.description}”
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--color-brand-primary)] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-10" />
    </motion.div>
  );
});
FeatureCard.displayName = "FeatureCard";

// --- [02] ITEM CARD (Technical Unit) ---
const ItemCard = memo(({ item, idx }: { item: CatalogItem; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: idx * 0.05 }}
    className="group hover:shadow-pro-xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-card)] p-2 transition-all duration-500 hover:border-[var(--color-brand-primary)]/40"
  >
    <div className="flex h-52 items-center justify-center overflow-hidden rounded-[1.75rem] bg-[var(--surface-offset)] transition-colors duration-700 group-hover:bg-[var(--color-brand-primary)]/5">
      <IconRenderer
        name={item.icon as IconName}
        size={100}
        strokeWidth={1}
        className="text-[var(--color-brand-primary)] opacity-20 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
      />
    </div>

    <div className="flex flex-1 flex-col p-8">
      <div className="mb-8 space-y-2">
        <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--text-muted)] uppercase opacity-40">
          UNIT_ID_{idx.toString().padStart(2, "0")}
        </span>
        <h3 className="text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
          {item.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-60">
          {item.description}
        </p>
      </div>

      {item.price && (
        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-6">
          <div className="flex flex-col">
            <span className="text-[9px] font-black tracking-widest text-[var(--text-muted)] uppercase opacity-40">
              REFERENCE_RATE
            </span>
            <span className="text-2xl font-black text-[var(--color-brand-primary)] italic">
              {item.price} {item.unit && <span className="text-xs opacity-50">/ {item.unit}</span>}
            </span>
          </div>
          <div className="rounded-2xl bg-[var(--surface-offset)] p-4 text-[var(--text-muted)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary-fg)]">
            <IconRenderer name="Zap" size={20} />
          </div>
        </div>
      )}
    </div>
  </motion.div>
));
ItemCard.displayName = "ItemCard";

const UniversalRegistry = ({ data }: BaseTemplateProps) => {
  const { items, coreFeatures, title } = data;

  const hasItems = items && items.length > 0;
  const hasFeatures = coreFeatures && coreFeatures.length > 0;

  if (!hasItems && !hasFeatures) return null;

  return (
    <section className="relative overflow-hidden bg-[var(--surface-main)] py-32 md:py-48">
      {/* Visual Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <filter id="noiseRegistry">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseRegistry)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        {/* --- SECTION HEADER --- */}
        <header className="mb-24 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2.5 backdrop-blur-md"
          >
            <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
            <span className="font-sans text-[11px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase italic">
              ENGINEERING_REGISTRY.v20
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl leading-[0.85] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-9xl"
          >
            System <br /> <span className="text-[var(--color-brand-primary)]">Architecture.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-[8px] border-[var(--color-brand-primary)]/40 pl-8 md:pl-14"
          >
            <p className="max-w-4xl text-2xl leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-90 md:text-4xl">
              “โครงสร้างพื้นฐานดิจิทัลที่ขับเคลื่อน <br className="hidden md:block" />
              <span className="text-[var(--text-primary)] underline decoration-[var(--color-brand-primary)]/30 decoration-[12px] underline-offset-[12px]">
                {title.split("|")[0].trim()}
              </span>{" "}
              เพื่อผลลัพธ์ระดับสูงสุด”
            </p>
          </motion.div>
        </header>

        {/* --- CONTENT HUB --- */}
        <div className="space-y-40">
          {hasFeatures && (
            <div className="space-y-20">
              <div className="flex items-center gap-8">
                <h3 className="text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-5xl">
                  Technical <span className="text-[var(--color-brand-primary)]">Capabilities.</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-brand-primary)]/30 to-transparent" />
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {coreFeatures.map((feature, idx) => (
                  <FeatureCard key={idx} feature={feature} idx={idx} />
                ))}
              </div>
            </div>
          )}

          {hasItems && (
            <div className="space-y-20">
              <div className="flex items-center gap-8">
                <h3 className="text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-5xl">
                  Deployment <span className="text-[var(--color-brand-primary)]">Units.</span>
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-brand-primary)]/30 to-transparent" />
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item, idx) => (
                  <ItemCard key={idx} item={item} idx={idx} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(UniversalRegistry);
