"use client";

/**
 * [FEATURE]: PERFORMANCE_TRAJECTORY v18.0.8 (SERVER_OPTIMIZED)
 * [STRATEGY]: Growth Visualization | Pure CSS SVG Animation | Zero-Framer
 */

import React, { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// Sub-component: Atomic Counter
const DynamicCounter = ({ value, suffix = "%" }: { value: number; suffix?: string }) => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let count = 0;
    const timer = setInterval(() => {
      count += increment;
      if (count >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(count));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  );
};

export const PerformanceTrajectory = memo(() => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="growth-trajectory"
      className="border-border/10 relative overflow-hidden border-y bg-[var(--surface-main)] py-24 md:py-48"
    >
      {/* 01. KINETIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-32">
          {/* --- CONTENT_HUB: Strategic Narrative --- */}
          <div
            className={cn(
              "space-y-10 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
          >
            <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2.5 backdrop-blur-md">
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
              <span className="font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                ความสำเร็จที่ยั่งยืน
              </span>
            </div>

            <h3 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              การเติบโต <br />
              <span className="text-[var(--color-brand-primary)]">ของธุรกิจ.</span>
            </h3>

            <div className="border-l-[6px] border-[var(--color-brand-primary)] pl-8">
              <p className="text-text-secondary max-w-xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                เราเปลี่ยน "กราฟพุ่ง" ให้เป็น "ผลกำไรที่ยั่งยืน" ผ่านสถาปัตยกรรมที่{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                  AI Agents
                </span>{" "}
                ให้การรับรอง
              </p>
            </div>

            <div className="flex flex-wrap gap-12 pt-6">
              <div className="space-y-2">
                <span className="text-5xl font-black tracking-tighter text-[var(--color-brand-primary)] italic md:text-6xl">
                  +<DynamicCounter value={450} />
                </span>
                <p className="font-sans text-[11px] font-bold tracking-widest uppercase opacity-80">
                  โอกาสเติบโต
                </p>
              </div>
              <div className="border-border/20 space-y-2 border-l pl-12">
                <span className="text-text-primary text-5xl font-black tracking-tighter italic md:text-6xl">
                  <DynamicCounter value={100} suffix="/100" />
                </span>
                <p className="font-sans text-[11px] font-bold tracking-widest uppercase opacity-80">
                  คะแนนประสิทธิภาพ
                </p>
              </div>
            </div>
          </div>

          {/* --- CHART_MATRIX: Technical Visualization --- */}
          <div
            className={cn(
              "group relative transition-all delay-500 duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
              visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
            )}
          >
            <div className="border-border/10 bg-surface-card/80 shadow-pro-xl rounded-section relative h-[350px] w-full overflow-hidden border p-12 backdrop-blur-md md:h-[450px]">
              {/* Engineering Grid */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative h-full w-full">
                <svg
                  viewBox="0 0 400 200"
                  className="absolute inset-0 h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Dynamic Path */}
                  <path
                    d="M 0 190 Q 50 185 100 160 T 200 110 T 300 60 T 400 10"
                    fill="none"
                    stroke="var(--brand-primary)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset={visible ? "0" : "1000"}
                    className="transform-gpu drop-shadow-[0_0_20px_var(--brand-primary)] transition-all delay-700 duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />

                  <path
                    d="M 0 190 Q 50 185 100 160 T 200 110 T 300 60 T 400 10 V 200 H 0 Z"
                    fill="url(#chartGlow)"
                    className={cn(
                      "transition-opacity delay-1000 duration-[2000ms]",
                      visible ? "opacity-100" : "opacity-0",
                    )}
                  />
                </svg>

                {/* Status Indicator HUD */}
                <div
                  className={cn(
                    "absolute -top-4 right-0 flex items-center gap-4 transition-all delay-[3000ms] duration-1000",
                    visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  )}
                >
                  <div className="text-right">
                    <span className="block font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                      เป้าหมายระยะยาว
                    </span>
                    <span className="text-text-muted text-[9px] font-bold uppercase opacity-80">
                      ความเสถียร 100%
                    </span>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[var(--color-brand-primary)] shadow-md" />
                </div>
              </div>

              {/* Legend Matrix */}
              <div className="text-text-primary/40 absolute right-12 bottom-8 left-12 flex justify-between font-sans text-[10px] font-bold tracking-widest uppercase">
                <span>เริ่มต้น</span>
                <span>ปรับปรุง</span>
                <span>ครองตลาด</span>
              </div>
            </div>

            {/* Ambient Shadow */}
            <div className="absolute -inset-10 -z-10 rounded-full bg-[var(--color-brand-primary)]/10 opacity-0 blur-[120px] transition-opacity duration-[3000ms] group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
});

PerformanceTrajectory.displayName = "PerformanceTrajectory";
