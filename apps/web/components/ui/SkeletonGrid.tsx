/**
 * [UI COMPONENT]: SKELETON_GRID_ORCHESTRATOR v17.9.10 (STABILIZED_FINAL)
 * [STRATEGY]: Staggered Neural Pulse | GPU Accelerated | Zero-CLS Hub
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { cn } from "@/lib/utils";

interface SkeletonGridProps {
  readonly count?: number;
  readonly aspectRatio?: "video" | "square" | "portrait";
  readonly className?: string;
}

/**
 * @component SkeletonGrid
 * @description ระบบควบคุมการแสดงผล Skeleton แบบกลุ่ม พร้อมกลไกการหน่วงเวลา (Staggering)
 */
function SkeletonGrid({ count = 6, aspectRatio = "video", className }: SkeletonGridProps) {
  return (
    <div
      className={cn("grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12", className)}
      role="status"
      aria-label="Loading content grid"
    >
      {Array.from({ length: count }).map((_, index) => {
        /** * [PHYSICS ENGINE]: ระบบหน่วงเวลาแบบ Stagger เพื่อความนุ่มนวล
         * ช่วยให้เกิดลำดับการปรากฏตัวที่สอดคล้องกับธรรมชาติการมองเห็น (Visual Flow)
         */
        const nodeStyle: React.CSSProperties = {
          animationDelay: `${index * 120}ms`, // [Tuning]: 120ms คือจังหวะที่นุ่มที่สุด
          opacity: 0,
          animationFillMode: "forwards",
        };

        return (
          <SkeletonCard
            key={`skeleton-node-${index}`}
            aspectRatio={aspectRatio}
            style={nodeStyle}
            // ใช้ Tailwind-Animate เพื่อเพิ่มประสิทธิภาพการประมวลผลผ่าน Hardware
            className="animate-in fade-in slide-in-from-bottom-12 duration-700 ease-[0.16,1,0.3,1]"
          />
        );
      })}
    </div>
  );
}

SkeletonGrid.displayName = "SkeletonGrid";

export default memo(SkeletonGrid);
