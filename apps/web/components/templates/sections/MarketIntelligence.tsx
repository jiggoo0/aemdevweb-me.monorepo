/**
 * [SECTION COMPONENT]: MARKET_INTELLIGENCE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MarketIntelligenceProps {
  level: string; // "low" | "medium" | "high"
  industries: string[];
}

export const MarketIntelligence = ({
  level = "medium",
  industries = [],
}: MarketIntelligenceProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getWidth = () => {
    switch (level.toLowerCase()) {
      case "high":
      case "extreme":
        return "95%";
      case "low":
        return "35%";
      default:
        return "65%";
    }
  };

  return (
    <section
      ref={ref}
      className="border-border/10 relative overflow-hidden border-y bg-[var(--surface-offset)] py-24 md:py-48"
    >
      {/* 01. ANALYTIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="absolute top-0 left-0 h-full w-1/2 -translate-x-1/2 skew-x-12 bg-[var(--color-brand-primary)]/5" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12 lg:gap-32">
          {/* --- COMPETITIVE_ANALYSIS: Strategic Dashboard --- */}
          <div
            className={cn(
              "space-y-12 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:col-span-6",
              visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
                <span className="font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                  วิเคราะห์การแข่งขันในพื้นที่
                </span>
              </div>

              <h3 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
                วิเคราะห์ <br /> <span className="text-[var(--color-brand-primary)]">คู่แข่ง.</span>
              </h3>
            </div>

            <div className="border-l-[6px] border-[var(--color-brand-primary)]/40 pl-8">
              <p className="text-text-primary text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
                เราไม่ได้แค่สร้างเว็บ แต่เรา "ชิงพื้นที่"
                การตลาดออนไลน์ด้วยสถาปัตยกรรมที่เหนือกว่าค่าเฉลี่ยของกลุ่มอุตสาหกรรมในระดับ {level}{" "}
                competition
              </p>
            </div>

            {/* Performance HUD */}
            <div className="bg-surface-card border-border/10 rounded-card shadow-pro-xl relative overflow-hidden border p-8">
              <div className="mb-6 flex items-end justify-between">
                <span className="text-text-muted font-sans text-[11px] font-bold tracking-widest uppercase opacity-80">
                  ระดับการแข่งขันในตลาด
                </span>
                <div className="text-right">
                  <p className="text-4xl leading-none font-black tracking-tighter text-[var(--color-brand-primary)] uppercase italic">
                    {level}
                  </p>
                </div>
              </div>

              <div className="bg-border/5 h-2 w-full overflow-hidden rounded-full">
                <div
                  className="h-full bg-[var(--color-brand-primary)] shadow-md transition-all delay-500 duration-[2000ms] ease-out"
                  style={{ width: visible ? getWidth() : "0%" }}
                />
              </div>

              <div className="text-text-primary/40 mt-6 flex justify-between font-sans text-[10px] font-bold tracking-widest uppercase">
                <span>เริ่มต้น</span>
                <span>เกณฑ์เฉลี่ย</span>
                <span>เป้าหมาย</span>
              </div>
            </div>
          </div>

          {/* --- NICHE_MATRIX: Focus Areas --- */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4">
              <p
                className={cn(
                  "mb-4 font-sans text-[11px] font-bold tracking-widest uppercase opacity-80 transition-all duration-1000",
                  visible ? "translate-y-0 opacity-80" : "translate-y-4 opacity-0",
                )}
              >
                อุตสาหกรรมที่น่าจับตามอง
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "group border-border/10 bg-surface-card relative overflow-hidden rounded-2xl border p-6 transition-all duration-500",
                      "hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-main)] hover:shadow-sm",
                      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                    style={{ transitionDelay: `${idx * 150 + 500}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-brand-primary)]/10 font-mono text-xs font-black text-[var(--color-brand-primary)] transition-all group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
                        {idx + 1}
                      </div>
                      <span className="text-text-primary text-sm leading-tight font-bold italic opacity-80 group-hover:opacity-100">
                        {industry}
                      </span>
                    </div>

                    {/* Diagnostic Bar */}
                    <div className="bg-border/5 mt-6 h-0.5 w-full overflow-hidden rounded-full">
                      <div className="h-full w-1/2 bg-[var(--color-brand-primary)]/20 transition-all duration-1000 group-hover:w-full group-hover:bg-[var(--color-brand-primary)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
