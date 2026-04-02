/**
 * [SHARED COMPONENT]: IMPACT_STATS_SYSTEM v18.1.0 (STRATEGIC_AUTHORITY)
 * [STRATEGY]: Pure DOM Counter | Strategic Reputation | GEO-Authority
 * [MAINTAINER]: 9mza (Lead Architect)
 */

"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import { UI_STRINGS } from "@/constants/ui-strings";

interface MetricItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly decimals?: number;
  readonly unit: string;
  readonly icon: IconName;
  readonly prefix?: string;
  readonly description: string;
  readonly trend?: "up" | "stable";
}

/** * @engine High-Performance Counter (Non-Framer)
 * [OPTIMIZATION]: ใช้ requestAnimationFrame เพื่อ Zero-Jank Animation
 */
const Counter = ({
  value,
  decimals = 0,
  prefix = "",
}: {
  readonly value: number;
  readonly decimals?: number;
  readonly prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = easedProgress * value;

      if (ref.current) {
        ref.current.textContent = `${prefix}${current.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}`;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, decimals, prefix]);

  return (
    <span ref={ref} className="transform-gpu tabular-nums">
      0
    </span>
  );
};

const MetricCard = ({
  stat,
  index,
  visible,
}: {
  stat: MetricItem;
  index: number;
  visible: boolean;
}) => {
  return (
    <div
      className={cn(
        "group rounded-3xl relative flex min-h-[280px] flex-col overflow-hidden border p-10 transition-all duration-1000",
        "border-slate-800 bg-slate-950/50 shadow-2xl backdrop-blur-md",
        "hover:-translate-y-2 hover:border-amber-500/40 hover:bg-slate-900/80 hover:shadow-amber-500/5",
        "transform-gpu will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />

      <div className="relative z-10 mb-auto flex items-start justify-between">
        <div className="border-slate-800 group-hover:text-slate-950 group- flex h-14 w-14 items-center justify-center rounded-2xl border bg-slate-900 text-amber-500 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
          <IconRenderer name={stat.icon} size={24} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-slate-500 font-mono text-[10px] font-black tracking-widest uppercase opacity-90">
            METRIC_0{index + 1}
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
        </div>
      </div>

      <div className="relative z-10 mt-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <p className="text-white font-mono text-5xl font-black tracking-tighter italic md:text-6xl">
              <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
            </p>
            <div className="flex flex-col">
              {stat.trend === "up" && (
                <IconRenderer name="ArrowUpRight" size={12} className="mb-1 text-emerald-500" />
              )}
              <span className="text-lg leading-none font-black tracking-widest text-amber-500 uppercase opacity-100">
                {stat.unit}
              </span>
            </div>
          </div>
          <p className="text-white text-sm leading-relaxed font-black tracking-[0.1em] uppercase italic transition-colors group-hover:text-amber-500 md:text-base">
            {stat.label}
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-800 h-px w-full transition-all duration-700 group-hover:bg-amber-500/20" />
          <p className="text-slate-400 font-mono text-[10px] leading-relaxed tracking-wider uppercase opacity-100">
            {stat.description}
          </p>
        </div>
      </div>

      {/* Neural Progress Bar */}
      <div className="bg-slate-900 absolute bottom-0 left-0 h-1.5 w-full overflow-hidden">
        <div
          className={cn(
            "via-amber-500/50 to-amber-500 h-full bg-gradient-to-r from-transparent transition-all duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            visible ? "w-full" : "w-0",
          )}
          style={{ transitionDelay: `${500 + index * 100}ms` }}
        />
      </div>
    </div>
  );
};

interface ImpactStatsProps {
  readonly liveMetrics?: Record<string, number>;
  readonly className?: string;
}

const ImpactStats = ({ liveMetrics, className }: ImpactStatsProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // [DYNAMIC_DATA]: Strategic Metrics for 9mza Hub
  const metrics: MetricItem[] = [
    {
      id: "GEO_AUTHORITY",
      label: UI_STRINGS.reputation.coverage,
      value: 77,
      unit: "จังหวัด",
      icon: "MapPin",
      description: "วางโครงสร้างพื้นฐานดิจิทัลครอบคลุมทุกภูมิภาคทั่วไทย",
      trend: "stable",
    },
    {
      id: "EXPERIENCE",
      label: UI_STRINGS.reputation.yearsExp,
      value: 10,
      unit: "ปี+",
      icon: "Award",
      description: "เชี่ยวชาญด้านการพัฒนาเว็บไซต์และ Strategic SEO ระดับสากล",
      trend: "up",
    },
    {
      id: "TECH_STACK",
      label: UI_STRINGS.reputation.tech,
      value: 16,
      unit: "Core",
      icon: "Zap",
      description: "พัฒนาด้วยเทคโนโลยี Next.js 16 ล่าสุด เพื่อประสิทธิภาพสูงสุด",
      trend: "stable",
    },
    {
      id: "PERF_CORE",
      label: "ประสิทธิภาพสูงสุด",
      value: liveMetrics?.PERF_CORE || 99.9,
      decimals: 1,
      unit: "/100",
      icon: "Activity",
      description: "มาตรฐานความเร็วระดับโลก (Core Web Vitals) โหลดไวทันใจ",
      trend: "stable",
    },
  ];

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

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((stat, index) => (
          <MetricCard key={stat.id} stat={stat} index={index} visible={visible} />
        ))}
      </div>
    </div>
  );
};

export default memo(ImpactStats);
