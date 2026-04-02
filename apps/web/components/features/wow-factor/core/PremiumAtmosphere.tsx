"use client";

/**
 * [ATMOSPHERIC ENGINE]: PREMIUM_ATMOSPHERE v1.0.0
 * [STRATEGY]: Cursor Tracking | Framer Motion (Lazy) | High-Performance Aura
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { usePremiumTemplate } from "@/components/providers/PremiumTemplateBuilderProvider";
import { cn } from "@/lib/utils";

interface PremiumAtmosphereProps {
  mode: "light" | "dark";
  opacity?: number;
}

/**
 * @component PremiumAtmosphere
 * @description หน่วยประมวลผลบรรยากาศ (Atmosphere) สำหรับเทมเพลตระดับพรีเมียม
 * มีการติดตามเมาส์ (Cursor Tracking) และสร้างออร่าที่นุ่มนวล
 */
const PremiumAtmosphere = ({ mode, opacity = 0.1 }: PremiumAtmosphereProps) => {
  const { state } = usePremiumTemplate();

  // [PERFORMANCE]: ใช้ Motion Values และ Spring เพื่อลดความหน่วง (Jank)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // อัปเดต Motion Values เมื่อ Cursor Position ใน Context เปลี่ยนแปลง
  React.useEffect(() => {
    mouseX.set(state.cursorPosition.x);
    mouseY.set(state.cursorPosition.y);
  }, [state.cursorPosition, mouseX, mouseY]);

  if (!state.isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* --- LAYER 01: DYNAMIC MOUSE AURA --- */}
      <motion.div
        className={cn(
          "absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]",
          mode === "dark" ? "opacity-[0.07]" : "opacity-[0.03]",
        )}
        style={{
          x,
          y,
          backgroundColor: "oklch(var(--brand-primary-raw))",
        }}
      />

      {/* --- LAYER 02: STATIC AMBIENT GRADIENTS --- */}
      <div
        className={cn(
          "absolute -top-[10%] -left-[5%] h-[70vw] w-[70vw] rounded-full blur-[100px] md:blur-[180px]",
          mode === "dark" ? "bg-brand-primary/10" : "bg-brand-primary/5",
          "animate-aura",
        )}
      />

      <div
        className={cn(
          "absolute -right-[5%] -bottom-[10%] h-[60vw] w-[60vw] rounded-full blur-[80px] md:blur-[150px]",
          mode === "dark" ? "bg-brand-secondary/8" : "bg-brand-secondary/4",
          "animate-aura",
        )}
      />

      {/* --- LAYER 03: NOISE & TEXTURE --- */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 04: GRID INFRASTRUCTURE --- */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(var(--brand-primary-raw) / 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, oklch(var(--brand-primary-raw) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* --- LAYER 05: GLOBAL OVERLAY (Adjusting Intensity) --- */}
      <div
        className={cn(
          "absolute inset-0",
          mode === "dark" ? "bg-slate-950/20" : "bg-white/10",
        )}
        style={{ opacity }}
      />
    </div>
  );
};

export default memo(PremiumAtmosphere);
