/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v18.1.8 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Hardware Compositing | Zero-Framer
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState, memo, useCallback } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [HYDRATION_GUARD]: ป้องกัน Hydration Mismatch ระหว่าง Server/Client
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  // [MEMORY_STABILIZATION]: ล็อกฟังก์ชันไว้ใน Heap เพื่อประสิทธิภาพของ memo
  const handleToggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  if (!mounted) {
    return (
      <div
        className="border-border/10 bg-surface-card/50 h-10 w-10 rounded-xl border"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "สลับเป็นโหมดกลางวัน" : "สลับเป็นโหมดกลางคืน"}
      onClick={handleToggle}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl",
        "transform-gpu border transition-all duration-500 will-change-transform",
        "focus-visible:ring-brand-primary/50 outline-none focus-visible:ring-2 active:scale-90",
        // [COLOR_ENGINE]: ใช้ระบบสี OKLCH ผ่าน Tailwind Utility
        "border-amber-400/20 bg-amber-400/5 hover:border-amber-400/50",
        "dark:border-brand-primary/20 dark:bg-brand-primary/5 dark:hover:border-brand-primary/50",
      )}
    >
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div
          className={cn(
            "absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isDark
              ? "translate-y-12 scale-50 rotate-45 opacity-0"
              : "translate-y-0 scale-100 rotate-0 opacity-100",
          )}
        >
          <IconRenderer name="Sun" size={18} className="text-amber-500" />
        </div>
        <div
          className={cn(
            "absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            !isDark
              ? "translate-y-12 scale-50 rotate-45 opacity-0"
              : "translate-y-0 scale-100 rotate-0 opacity-100",
          )}
        >
          <IconRenderer name="Moon" size={18} className="text-brand-primary" />
        </div>
      </div>

      {/* [ATMOSPHERIC_GLOW]: แยก Layer ออกมาเพื่อทำ GPU Compositing */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          // Light Mode Glow (Amber OKLCH)
          "bg-amber-400/10 shadow-[0_0_20px_oklch(0.85_0.15_90/0.3)]",
          // Dark Mode Glow (Brand Primary OKLCH)
          "dark:bg-brand-primary/10 dark:shadow-[0_0_20px_oklch(var(--brand-primary-raw)/0.25)]",
        )}
        aria-hidden="true"
      />
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";

export default memo(ThemeToggle);
