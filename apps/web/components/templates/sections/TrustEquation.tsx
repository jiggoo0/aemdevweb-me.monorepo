/**
 * [FEATURE]: TRUST_EQUATION v18.4.0 (AUTHORITY_MAXIMIZED)
 * [STRATEGY]: Formula Visualization | Kinetic Reveal | Engineering Aesthetic
 */

"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

export const TrustEquation = memo(() => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const components = [
    {
      label: "EEAT_Identity",
      value: "Expertise",
      icon: "UserCheck",
      color: "text-[var(--color-brand-primary)]",
    },
    { label: "System_Health", value: "Performance", icon: "Zap", color: "text-amber-500" },
    { label: "Data_Safety", value: "Security", icon: "ShieldCheck", color: "text-emerald-500" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--surface-main)] py-32 text-[var(--text-primary)] md:py-48"
    >
      {/* 01. GRID LAYER */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 container mx-auto px-4 text-center md:px-8">
        <div className="mb-24 space-y-4">
          <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase">
            Authority_Calculus_v18.4
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-7xl">
            The <span className="text-[var(--color-brand-primary)]">Trust</span> Equation.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-8">
          {components.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div
                className={cn(
                  "group shadow-pro-sm relative w-full max-w-[280px] rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-8 transition-all duration-1000",
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div
                  className={cn(
                    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-offset)] transition-all group-hover:scale-105",
                    item.color,
                  )}
                >
                  <IconRenderer name={item.icon as IconName} size={32} />
                </div>
                <p className="mb-2 font-mono text-[8px] font-black tracking-widest text-[var(--text-muted)] uppercase opacity-100">
                  {item.label}
                </p>
                <h3 className="text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
                  {item.value}
                </h3>
              </div>

              {idx < 2 && (
                <div
                  className={cn(
                    "text-4xl font-black text-[var(--text-muted)] italic transition-all delay-500 duration-1000",
                    visible ? "scale-100 opacity-20" : "scale-0 opacity-0",
                  )}
                >
                  +
                </div>
              )}
            </React.Fragment>
          ))}

          <div
            className={cn(
              "text-4xl font-black text-[var(--text-muted)] italic transition-all delay-700 duration-1000",
              visible ? "scale-100 opacity-20" : "scale-0 opacity-0",
            )}
          >
            =
          </div>

          {/* Result Node */}
          <div
            className={cn(
              "group relative w-full max-w-[320px] rounded-2xl border border-[var(--color-brand-primary)]/40 bg-[var(--color-brand-primary)] p-10 shadow-md transition-all delay-1000 duration-1000",
              visible ? "scale-100 opacity-100" : "scale-90 opacity-0",
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="mb-4 block font-mono text-[10px] font-black tracking-widest text-white/60 uppercase">
              // Final_Result
            </span>
            <h4 className="text-5xl font-black tracking-tighter text-white uppercase italic drop-shadow-md md:text-6xl">
              AUTHORITY.
            </h4>
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TrustEquation.displayName = "TrustEquation";
