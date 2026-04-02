/**
 * [AREA COMPONENT]: AREA_CARD_SYSTEM v18.0.0 (PROFESSIONAL_READY)
 * [STRATEGY]: Cinematic Reveal | Regional Identity | Technical SEO Nodes
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { AreaNode } from "@/types";
import { getAssetUrl } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface AreaCardProps {
  readonly data: AreaNode;
  readonly index?: number;
}

const AreaCard = ({ data, index = 0 }: AreaCardProps) => {
  // [OPTIMIZED]: ดึงรูปภาพจาก Vercel Blob หรือใช้ Universal Node เป็นพื้นฐาน
  // ปัจจุบันระบบใช้ภาพกลางไปก่อนจนกว่าจะมีภาพเฉพาะจังหวัดครบ 77 จังหวัด
  const imagePath = getAssetUrl(data.heroImage || "/images/areas/universal-node.webp");

  return (
    <Link href={`/areas/${data.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="glass-card rounded-section relative h-[400px] w-full overflow-hidden border transition-all duration-700 hover:border-[var(--color-brand-primary)]/40 hover:shadow-2xl"
      >
        {/* Background Visual Engine */}
        <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
          <Image
            src={imagePath}
            alt={data.province}
            fill
            className="object-cover brightness-[0.6] transition-all duration-700 group-hover:brightness-[0.4]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex h-full flex-col justify-end p-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="bg-brand-primary/20 text-brand-primary rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              {data.region}
            </span>
            <div className="bg-border/20 h-px flex-1" />
          </div>

          <h3 className="text-text-primary mb-2 text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
            {data.province}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-[11px] leading-relaxed font-medium opacity-95">
            {data.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-[var(--color-brand-primary)] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
            <span className="text-[10px] font-bold tracking-widest uppercase">Explore Node</span>
            <IconRenderer name="ArrowRight" size={14} />
          </div>
        </div>

        {/* Dynamic Scan Line (Cyber Aesthetic) */}
        <div className="bg-brand-primary/20 pointer-events-none absolute top-0 left-0 h-px w-full -translate-y-full transition-transform duration-1000 group-hover:translate-y-[400px]" />
      </motion.div>
    </Link>
  );
};

export default memo(AreaCard);
