"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/features/wow-factor/shared/AnimatedCounter";

/**
 * [WOW-FACTOR]: DYNAMIC_ROI_CALCULATOR v1.0.0
 * [STRATEGY]: Formula-Driven Interaction | Thematic Reactivity
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

export const DynamicROICalculator = () => {
  const [budget, setBudget] = useState(50000);
  const [conversionRate, setConversionRate] = useState(2.5);

  const estimatedRevenue = useMemo(() => {
    // Simplified formula: Budget * (ConversionRate / 100) * (Average Ticket Size, say 25000)
    return budget * (conversionRate / 100) * 5; 
  }, [budget, conversionRate]);

  const roi = useMemo(() => {
    if (budget === 0) return 0;
    return ((estimatedRevenue - budget) / budget) * 100;
  }, [estimatedRevenue, budget]);

  return (
    <div className="glass-card relative rounded-3xl p-8 md:p-12 overflow-hidden">
      <div className="relative z-10 grid gap-12 lg:grid-cols-2">
        {/* Input Controls */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-black tracking-tight mb-2">ROI Strategy Builder</h3>
            <p className="text-text-secondary text-sm">Fine-tune your growth metrics to see the AEM-Ultimate impact.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Ad Spend / Budget</label>
                <span className="font-mono font-bold text-brand-primary">฿{budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-border appearance-none cursor-pointer accent-brand-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Target Conversion Rate</label>
                <span className="font-mono font-bold text-brand-secondary">{conversionRate}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 rounded-full bg-border appearance-none cursor-pointer accent-brand-secondary"
              />
            </div>
          </div>
        </div>

        {/* Output Visualization */}
        <div className="flex flex-col justify-center items-center text-center space-y-6 lg:border-l lg:border-border/50 lg:pl-12">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-text-muted">Estimated Annual Revenue</span>
            <div className="flex items-center justify-center gap-2">
               <span className="text-4xl md:text-5xl font-black">฿</span>
               <AnimatedCounter 
                 value={estimatedRevenue} 
                 className="text-4xl md:text-5xl font-black text-brand-primary"
               />
            </div>
          </div>

          <motion.div 
            layout
            className="rounded-2xl bg-surface-offset p-6 w-full border border-border"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted block mb-2">Return on Investment</span>
            <div className="flex flex-col items-center">
              <AnimatedCounter 
                value={roi} 
                suffix="%" 
                className="text-6xl font-black leading-none"
                style={{ color: roi > 0 ? "oklch(var(--brand-primary-raw))" : "oklch(var(--brand-secondary-raw))" }}
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] font-bold uppercase text-brand-accent mt-2"
              >
                Efficiency Multiplier: {(roi / 100).toFixed(1)}x
              </motion.span>
            </div>
          </motion.div>
          
          <p className="text-[10px] text-text-muted italic max-w-xs">
            *Simulated results based on average premium conversion benchmarks within the AEMZA ecosystem.
          </p>
        </div>
      </div>

      {/* Background Interactive Element */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 w-full"
        style={{ 
           background: `linear-gradient(90deg, oklch(var(--brand-primary-raw)), oklch(var(--brand-secondary-raw)))`,
           scaleX: Math.min(roi / 500, 1),
           transformOrigin: "left"
        }}
      />
    </div>
  );
};

export default DynamicROICalculator;
