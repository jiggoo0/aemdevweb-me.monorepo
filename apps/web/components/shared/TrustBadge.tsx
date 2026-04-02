/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v18.0.0 (PROFESSIONAL_OVERHAUL)
 * [STRATEGY]: Reality-Based Authority | Clean Typography | Subdued Motion
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { UI_STRINGS } from "@/constants/ui-strings";

interface TrustNode {
  readonly label: string;
  readonly icon: IconName;
  readonly status: "active" | "standby";
}

const TRUST_NODES: readonly TrustNode[] = [
  { label: UI_STRINGS.trust.fastLoad, icon: "Zap", status: "active" },
  { label: UI_STRINGS.trust.seoStandard, icon: "SearchCheck", status: "active" },
  { label: UI_STRINGS.trust.highSecurity, icon: "ShieldCheck", status: "active" },
  { label: UI_STRINGS.trust.mobileFriendly, icon: "Layers", status: "active" },
  { label: UI_STRINGS.trust.modernTech, icon: "Cpu", status: "active" },
];

const TrustBadge = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, margin: "-50px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center"
      aria-label="Trust Signals"
    >
      {/* --- 01. STATUS HEADER: Blueprint Alignment --- */}
      <div
        className={cn(
          "mb-10 flex w-full max-w-2xl items-center justify-center gap-6 px-4 transition-all duration-[1500ms] ease-[0.23,1,0.32,1]",
          visible ? "scale-x-100 opacity-60" : "scale-x-75 opacity-0",
        )}
      >
        <div className="bg-border/20 h-px flex-1" />
        <span
          suppressHydrationWarning
          className="text-text-muted font-sans text-[12px] font-bold tracking-widest whitespace-nowrap uppercase opacity-100 md:text-[13px]"
        >
          {UI_STRINGS.trust.standardHeader}
        </span>
        <div className="bg-border/20 h-px flex-1" />
      </div>

      {/* --- 02. NODES GRID: Balanced Kinetic Chips --- */}
      <div className="flex flex-wrap justify-center gap-4 px-4 md:gap-5">
        {TRUST_NODES.map((node, index) => (
          <div
            key={node.label}
            className={cn(
              "group relative flex cursor-default items-center gap-4 overflow-hidden rounded-[1.8rem] md:rounded-[2.2rem]",
              "border-border bg-surface-card/30 shadow-pro border px-6 py-4 backdrop-blur-md md:px-8 md:py-5",
              "transition-all duration-500 hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-offset)]/60",
              "transform-gpu will-change-transform",
              "hover:-translate-y-1.5",
              "transition-all duration-700 ease-[0.23,1,0.32,1]",
              visible
                ? "blur-0 translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0 blur-[4px]",
            )}
            style={{
              transitionDelay: `${index * 80}ms`,
            }}
          >
            {/* Content Hub */}
            <div className="flex items-center gap-4">
              <div className="text-[var(--color-brand-primary)]/80 transition-all duration-500 group-hover:scale-105 group-hover:text-[var(--color-brand-primary)]">
                <IconRenderer name={node.icon} size={20} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-text-secondary group-hover:text-text-primary font-sans text-[11px] font-bold tracking-wider uppercase transition-colors duration-500 md:text-[12px]">
                  {node.label}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--color-brand-primary)]/80 uppercase transition-all duration-500 group-hover:text-[var(--color-brand-primary)]">
                  {UI_STRINGS.trust.verifiedStatus}
                </span>
              </div>
            </div>

            {/* Shine Sweep Effect */}
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-[2000ms] group-hover:translate-x-full"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

TrustBadge.displayName = "TrustBadge";

export default memo(TrustBadge);
