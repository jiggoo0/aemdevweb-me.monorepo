/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v18.0.5 (CSS_ACCELERATED)
 * [STRATEGY]: CSS Keyframes | Compositor Orchestration | Zero-JS Hydration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly color?: string;
  readonly opacity?: number;
}

/**
 * @component AmbientBackground
 * @description หน่วยประมวลผลพื้นหลังแบบไดนามิกที่ใช้ CSS Animation (60fps)
 * [OPTIMIZATION]: ย้าย Logic การทำแอนิเมชันจาก JS ไปยัง CSS Engine ของเบราว์เซอร์
 * เพื่อลด Total Blocking Time (TBT) และประหยัดแบตเตอรี่บน Mobile
 */
const AmbientBackground = ({ className, color, opacity = 1 }: AmbientBackgroundProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "h-[100dvh] w-full",
        !color && "bg-surface-main",
        className,
      )}
      style={{
        backgroundColor: color,
        opacity: opacity,
      }}
      aria-hidden="true"
    >
      {/* --- LAYER 01: ADAPTIVE AURA NODES (CSS Accelerated) --- */}
      <div
        className={cn(
          "absolute -top-[15%] -left-[10%] h-[80vw] w-[80vw] transform-gpu rounded-full opacity-[0.10]",
          "blur-[60px] md:blur-[120px]",
          "md:animate-aura-1", // รันแอนิเมชันเฉพาะบน Desktop เพื่อถนอม CPU ของ Mobile
        )}
        style={{ backgroundColor: "var(--brand-primary)" }}
      />

      <div
        className={cn(
          "absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] transform-gpu rounded-full opacity-[0.06]",
          "blur-[50px] md:blur-[100px]",
          "md:animate-aura-2",
        )}
        style={{ backgroundColor: "var(--brand-secondary, var(--brand-primary))" }}
      />

      {/* --- LAYER 02: NOISE TEXTURE (High-End Polish) --- */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 03: REFINED INFRASTRUCTURE GRID --- */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* --- LAYER 04: DEPTH VIGNETTE --- */}
      <div className="from-surface-main/40 to-surface-main/60 absolute inset-0 bg-gradient-to-tr via-transparent" />
    </div>
  );
};

export default memo(AmbientBackground);
