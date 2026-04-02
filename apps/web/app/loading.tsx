/**
 * [SYSTEM MODULE]: GLOBAL_LOADING_UI v17.9.10 (ULTIMATE_STABLE)
 * [STRATEGY]: Skeleton Projection | Perceived Speed | Zero-Jank Animation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import SkeletonGrid from "@/components/ui/SkeletonGrid";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/**
 * @component Loading
 * @description หน้าจอเริ่มต้นระบบ (Loading State) ที่รักษาสมดุลระหว่าง UX และ Brand Identity
 */
export default function Loading() {
  // [SSOT]: ใช้ปีปัจจุบันตามระบบ 2026
  const currentYear = "2026";

  return (
    <div className="bg-surface-main relative min-h-screen w-full overflow-hidden">
      {/* --- 01. BACKGROUND INFRASTRUCTURE (Layer 0) --- */}
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div
          className="bg-infrastructure-grid absolute inset-0"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
      </div>

      {/* --- 02. SKELETON PROJECTION (Layer 1: Content Simulation) --- */}
      <div className="container mx-auto px-4 pt-48 pb-24 md:px-6">
        <div className="mb-12 space-y-4 opacity-10">
          <div className="bg-border h-4 w-32 rounded-full" />
          <div className="bg-border h-12 w-full max-w-xl rounded-2xl" />
        </div>

        {/* จำลอง Grid เนื้อหาเพื่อให้ผู้ใช้รู้สึกว่าระบบกำลังเตรียมพื้นที่แสดงผล */}
        <div className="pointer-events-none select-none">
          <SkeletonGrid count={3} aspectRatio="video" className="opacity-20" />
        </div>
      </div>

      {/* --- 03. SYSTEM OVERLAY (Layer 2: High-Priority UI) --- */}
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-md"
        role="status"
        aria-live="polite"
      >
        <div className="bg-surface-main/60 absolute inset-0 -z-10" />

        <div className="relative flex flex-col items-center gap-y-10">
          {/* Central Loader Node with Atmospheric Aura */}
          <div className="relative">
            <div className="bg-brand-primary/20 absolute inset-0 animate-pulse rounded-full blur-3xl" />
            <div
              className={cn(
                "border-border bg-surface-card rounded-section relative flex h-28 w-28 items-center justify-center border",
                "shadow-glow-lg backdrop-blur-xl transition-all duration-500",
              )}
            >
              <IconRenderer
                name="Cpu"
                size={48}
                className="text-brand-primary animate-[spin_4s_linear_infinite]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Status Intelligence Text Group */}
          <div className="flex flex-col items-center space-y-5 text-center">
            <div className="space-y-2">
              <h2 className="text-text-primary animate-pulse text-base font-black tracking-[0.5em] uppercase italic">
                System_Initializing
              </h2>
              <p className="text-text-muted font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                Projecting v{SITE_CONFIG.project.version} Data_Nodes...
              </p>
            </div>

            {/* Micro-interaction: Logic Loader Bar */}
            <div className="bg-surface-offset border-border/50 h-1 w-64 overflow-hidden rounded-full border">
              <div className="bg-brand-primary shadow-glow h-full w-full origin-left animate-[shimmer_1.5s_infinite_ease-in-out]" />
            </div>
          </div>
        </div>
      </div>

      {/* --- 04. FOOTER SIGNATURE --- */}
      <div className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-text-muted/40 font-mono text-[9px] font-black tracking-[0.5em] uppercase">
          {SITE_CONFIG.brandName} // Secured_Environment &copy; {currentYear}
        </p>
      </div>
    </div>
  );
}
