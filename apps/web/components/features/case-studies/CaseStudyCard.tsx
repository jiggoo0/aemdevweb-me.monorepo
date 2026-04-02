/**
 * [CASE STUDY COMPONENT]: CASE_STUDY_CARD v18.0.0 (PROFESSIONAL_READY)
 * [STRATEGY]: Blueprint Architecture | Visual Authority | Conversion Anchoring
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/types";
import { getAssetUrl } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface CaseStudyCardProps {
  readonly data: CaseStudy;
  readonly index?: number;
}

const CaseStudyCard = ({ data, index = 0 }: CaseStudyCardProps) => {
  // [OPTIMIZED]: ดึงรูปภาพจาก Vercel Blob
  const imageSource = getAssetUrl(data.image || "/images/case-studies/default.webp");

  return (
    <Link href={`/case-studies/${data.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card rounded-section relative flex h-[500px] w-full flex-col overflow-hidden border transition-all duration-700 hover:border-[var(--color-brand-primary)]/40"
      >
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
          <Image
            src={imageSource}
            alt={data.title}
            fill
            className="object-cover brightness-[0.5] transition-all duration-700 group-hover:brightness-[0.3]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content Node */}
        <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="bg-brand-primary/20 text-brand-primary rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
              Success Story
            </span>
            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
              Client: {data.client}
            </span>
          </div>

          <h3 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase italic md:text-4xl">
            {data.title}
          </h3>

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 backdrop-blur-md">
              <IconRenderer name="TrendingUp" size={18} className="text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white italic">{data.result}</span>
              <span className="text-[9px] font-bold tracking-widest text-white/40 uppercase">
                Verified Outcome
              </span>
            </div>
          </div>

          <div className="group-hover:text-brand-primary flex items-center gap-3 text-white/60 transition-colors">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase">
              View Full Report
            </span>
            <IconRenderer
              name="ArrowRight"
              size={16}
              className="transition-transform group-hover:translate-x-2"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default memo(CaseStudyCard);
