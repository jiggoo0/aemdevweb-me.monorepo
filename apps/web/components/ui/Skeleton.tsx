/**
 * [UI PRIMITIVE]: SKELETON_CORE v17.9.9 (STABILIZED)
 * [STRATEGY]: Subtle Neural Pulse | Semantic Token Mapping | Layout Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        /* [PHYSICS]: ระบบ Pulse ที่ปรับตามพื้นหลังของแต่ละธีมอัตโนมัติ */
        "bg-surface-offset/60 rounded-md",
        /* [PERFORMANCE]: ผลักภาระการคำนวณแอนิเมชันไปที่ GPU Layer */
        "will-change-opacity",
        className,
      )}
      {...props}
    />
  );
}

export default memo(Skeleton);
