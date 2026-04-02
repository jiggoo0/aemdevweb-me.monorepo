"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { usePremiumTemplate } from "@/components/providers/PremiumTemplateBuilderProvider";
import AnimatedCounter from "@/components/features/wow-factor/shared/AnimatedCounter";

/**
 * [WOW-FACTOR]: LIVE_PERFORMANCE_DASHBOARD v1.0.0
 * [STRATEGY]: Interactive GPU-Based Visualization | Context-Aware
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

export const LivePerformanceDashboard = () => {
  const { state } = usePremiumTemplate();

  // Simulated metrics based on state or random for demo
  const metrics = useMemo(() => [
    { label: "PSI Speed Score", value: 98, suffix: "/100", color: "var(--color-brand-primary)" },
    { label: "CLS (Visual Stability)", value: 0.01, decimals: 2, suffix: "", color: "var(--color-brand-secondary)" },
    { label: "Server Response", value: 45, suffix: "ms", color: "var(--color-brand-accent)" },
  ], []);

  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-6 md:p-8">
      {/* Dynamic Background Aura */}
      <div 
        className="animate-aura pointer-events-none absolute -right-1/4 -top-1/4 h-[150%] w-[150%] opacity-20"
        style={{ 
          background: `radial-gradient(circle, oklch(var(--brand-primary-raw)) 0%, transparent 60%)`,
          transform: `translate(${state.cursorPosition.x * 0.02}px, ${state.cursorPosition.y * 0.02}px)`
        }}
      />

      <div className="relative z-10 grid gap-8 md:grid-cols-3">
        {metrics.map((metric, idx) => (
          <div key={metric.label} className="flex flex-col space-y-2">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-xs font-bold uppercase tracking-widest text-text-muted"
            >
              {metric.label}
            </motion.span>
            
            <div className="flex items-baseline gap-1">
              <AnimatedCounter 
                value={metric.value} 
                decimals={metric.decimals}
                suffix={metric.suffix}
                className="text-3xl font-black md:text-4xl"
                style={{ color: metric.color }}
              />
            </div>

            {/* Simulated mini sparkline */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-border/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(metric.value / (metric.value > 1 ? 100 : 1)) * 100}%` }}
                transition={{ duration: 1.5, delay: 0.5 + idx * 0.2, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Futuristic Network Visualization Grid */}
      <div className="mt-8 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-surface-offset/50 border border-border/50">
        <svg viewBox="0 0 400 150" className="w-full h-full opacity-40">
          <motion.path
            d="M0 75 Q100 25 200 75 T400 75"
            fill="none"
            stroke="oklch(var(--brand-primary-raw))"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0 75 Q100 125 200 75 T400 75"
            fill="none"
            stroke="oklch(var(--brand-secondary-raw))"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          {/* Animated data points */}
          {[100, 200, 300].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy="75"
              r="3"
              fill="oklch(var(--brand-accent-raw))"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LivePerformanceDashboard;
