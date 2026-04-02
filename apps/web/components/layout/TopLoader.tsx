/**
 * [SYSTEM COMPONENT]: SYSTEM_TOP_LOADER v17.9.76 (NAMED_EXPORT_STABILIZED)
 * [STRATEGY]: Adaptive Easing | Named Export | Physics-Based Feedback
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import NextTopLoader from "nextjs-toploader";

interface TopLoaderProps {
  readonly color?: string;
  readonly showSpinner?: boolean;
  readonly height?: number;
  readonly shadow?: string | boolean;
  readonly zIndex?: number;
}

/**
 * @component TopLoader
 * @description แถบสถานะการโหลดที่ปรับแต่งฟิสิกส์ (Named Export เพื่อความแม่นยำของ Type)
 */
export const TopLoader = memo(
  ({
    color = "#ef4444", // ปรับค่า Default ให้เป็น HEX ตามมาตรฐาน SITE_CONFIG
    showSpinner = false,
    height = 3,
    shadow = true,
    zIndex = 9999,
  }: TopLoaderProps) => {
    // [OPTIMIZATION]: Type-Safe Shadow Resolver
    const boxShadow = useMemo(() => {
      if (shadow === false) return false;
      if (typeof shadow === "string") return shadow;
      return `0 0 10px ${color}, 0 0 5px ${color}`;
    }, [shadow, color]);

    return (
      <NextTopLoader
        color={color}
        initialPosition={0.08}
        crawlSpeed={200}
        height={height}
        crawl={true}
        showSpinner={showSpinner}
        /* [PHYSICS]: 'Fast Start - Slow End' Curve 
         ใช้ Bezier เพื่อความลื่นไหลระดับ Native App */
        easing="cubic-bezier(0.23, 1, 0.32, 1)"
        speed={350}
        shadow={boxShadow}
        zIndex={zIndex}
        showAtBottom={false}
      />
    );
  },
);

// [IMPORTANT]: กำหนดชื่อให้คอมโพเนนต์เพื่อใช้กับ memo
TopLoader.displayName = "TopLoader";
