/**
 * [WOW FACTOR COMPONENT]: LIVE_PERFORMANCE_DASHBOARD v1.0.0
 * [STRATEGY]: Framer Motion Analytics | SVG Precision | Real-time Simulation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import { m } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";

interface PerformanceStat {
  label: string;
  value: number;
  unit: string;
  color: string;
  trend: "up" | "down" | "stable";
}

export const LivePerformanceDashboard = memo(() => {
  const [stats, setStats] = useState<PerformanceStat[]>([
    { label: "LCP", value: 0.8, unit: "s", color: "text-emerald-400", trend: "down" },
    { label: "INP", value: 45, unit: "ms", color: "text-emerald-400", trend: "down" },
    { label: "CLS", value: 0.01, unit: "", color: "text-emerald-400", trend: "stable" },
    { label: "PSI", value: 99, unit: "/100", color: "text-brand-primary", trend: "up" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value:
            stat.label === "PSI"
              ? 98 + Math.random() * 2
              : Math.max(0.1, stat.value + (Math.random() - 0.5) * 0.05),
        })),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-brand-primary/10 text-brand-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <IconRenderer name="Activity" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tighter text-white uppercase italic">
              Real-time Performance
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
              Infrastructure Node: TH-BKK-01
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[9px] font-black text-emerald-500 uppercase">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Live Monitoring
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05]"
          >
            <span className="mb-2 text-[10px] font-bold tracking-widest text-white/40 uppercase">
              {stat.label}
            </span>
            <div className="flex items-baseline gap-1">
              <m.span
                key={stat.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl font-black italic tabular-nums ${stat.color}`}
              >
                {stat.label === "PSI" ? Math.round(stat.value) : stat.value.toFixed(2)}
              </m.span>
              <span className="text-[10px] font-bold text-white/30">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 h-32 w-full overflow-hidden rounded-xl bg-white/[0.02] p-4">
        <svg viewBox="0 0 400 100" className="h-full w-full overflow-visible">
          <m.path
            d="M 0 50 Q 50 20 100 50 T 200 50 T 300 50 T 400 50"
            fill="none"
            stroke="var(--color-brand-primary)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <m.path
            d="M 0 60 Q 50 30 100 60 T 200 60 T 300 60 T 400 60"
            fill="none"
            stroke="var(--color-brand-primary)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </svg>
      </div>
    </div>
  );
});

LivePerformanceDashboard.displayName = "LivePerformanceDashboard";
