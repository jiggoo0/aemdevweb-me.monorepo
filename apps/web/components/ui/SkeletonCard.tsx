/**
 * [UI COMPONENT]: SKELETON_CARD_HUB v17.9.10 (PSI_HARDENED)
 * [STRATEGY]: Blueprint Projection | Aspect Ratio Preservation | GPU Acceleration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo, type CSSProperties } from "react";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

/**
 * [INTERFACE]: SkeletonCardProps
 */
interface SkeletonCardProps {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly aspectRatio?: "video" | "portrait" | "square" | "hero";
}

/**
 * @component SkeletonCard
 * @description ตัวจองพื้นที่อัจฉริยะที่จำลองโครงสร้าง Card จริง 1:1 เพื่อป้องกัน Layout Shift
 */
const SkeletonCard = ({ className, style, aspectRatio = "video" }: SkeletonCardProps) => {
  // [CLS_MITIGATION]: รักษาอัตราส่วนที่แน่นอนเพื่อป้องกันหน้าเว็บกระโดด
  const ratioMap = {
    video: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    hero: "aspect-[21/9]",
  };

  return (
    <div
      style={style}
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "border-border bg-surface-card/40 shadow-pro-sm rounded-section space-y-8 border p-8 md:p-10",
        "transform-gpu transition-all duration-500 will-change-transform",
        className,
      )}
    >
      {/* --- 01. IMAGE_PROJECTION (LCP Target) --- */}
      <Skeleton
        className={cn("bg-brand-primary/5 rounded-card w-full opacity-50", ratioMap[aspectRatio])}
      />

      <div className="space-y-5">
        {/* --- 02. IDENTITY_PROJECTION (Meta Info) --- */}
        <div className="flex items-center gap-3">
          <Skeleton className="bg-brand-primary/10 h-2.5 w-14 rounded-full" />
          <Skeleton className="h-2 w-28 rounded-full opacity-30" />
        </div>

        {/* Title Placeholder */}
        <Skeleton className="h-10 w-full rounded-2xl opacity-80" />

        {/* --- 03. CONTENT_NARRATIVE_PROJECTION --- */}
        <div className="space-y-3 pt-2">
          <Skeleton className="h-4 w-full rounded-lg opacity-40" />
          <Skeleton className="h-4 w-5/6 rounded-lg opacity-40" />
        </div>
      </div>

      {/* --- 04. ACTION_NODE_PROJECTION (Conversion Area) --- */}
      <div className="border-border/50 flex items-center justify-between border-t pt-8">
        <div className="space-y-3">
          <Skeleton className="h-2 w-20 rounded-full opacity-20" />
          <Skeleton className="h-8 w-32 rounded-xl opacity-50" />
        </div>
        <Skeleton className="h-14 w-14 rounded-2xl opacity-30" />
      </div>
    </div>
  );
};

SkeletonCard.displayName = "SkeletonCard";

export default memo(SkeletonCard);
