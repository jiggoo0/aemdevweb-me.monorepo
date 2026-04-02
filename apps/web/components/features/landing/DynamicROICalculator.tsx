/**
 * [CONVERSION TOOL]: DYNAMIC_ROI_CALCULATOR v1.0.0
 * [STRATEGY]: Lead Generation | Real-time Value Projection | Animated Feedback
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useMemo } from "react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/ui/IconRenderer";

export const DynamicROICalculator = memo(() => {
  const [traffic, setTraffic] = useState(5000);
  const [conversion, setConversion] = useState(1);
  const [ticket, setTicket] = useState(1500);

  const results = useMemo(() => {
    const currentRev = traffic * (conversion / 100) * ticket;
    const optimizedRev = traffic * ((conversion * 2.5) / 100) * ticket;
    const difference = optimizedRev - currentRev;

    return {
      current: currentRev,
      optimized: optimizedRev,
      difference: difference,
      increase: 150, // 150% improvement
    };
  }, [traffic, conversion, ticket]);

  return (
    <div className="glass-card overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-3xl">
      <header className="mb-10">
        <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic">
          Revenue Growth Projection
        </h3>
        <p className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">
          Based on AEMZA Performance Benchmarks
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* --- INPUT_BLOCK --- */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between text-[11px] font-bold tracking-widest text-white/60 uppercase">
              <span>Monthly Traffic</span>
              <span className="text-white">{traffic.toLocaleString()} Visitors</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="accent-brand-primary h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-[11px] font-bold tracking-widest text-white/60 uppercase">
              <span>Current Conv. Rate</span>
              <span className="text-white">{conversion}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={conversion}
              onChange={(e) => setConversion(Number(e.target.value))}
              className="accent-brand-primary h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-[11px] font-bold tracking-widest text-white/60 uppercase">
              <span>Avg. Order Value</span>
              <span className="text-white">฿{ticket.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="accent-brand-primary h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10"
            />
          </div>
        </div>

        {/* --- RESULT_BLOCK --- */}
        <div className="flex flex-col justify-center rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center">
          <span className="mb-4 text-[10px] font-bold tracking-[0.3em] text-emerald-500 uppercase">
            Potential Monthly Revenue
          </span>
          <m.div
            key={results.optimized}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl font-black tracking-tighter text-white italic md:text-6xl"
          >
            ฿{Math.round(results.optimized).toLocaleString()}
          </m.div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-[12px] font-bold text-emerald-400">
              + ฿{Math.round(results.difference).toLocaleString()} Extra Profit
            </span>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-[12px] font-bold text-emerald-400">+{results.increase}%</span>
          </div>

          <Button
            size="lg"
            className="bg-brand-primary mt-10 w-full rounded-xl text-xs font-black tracking-widest uppercase italic"
          >
            Get High-Performance Strategy
            <IconRenderer name="Zap" size={16} className="ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
});

DynamicROICalculator.displayName = "DynamicROICalculator";
