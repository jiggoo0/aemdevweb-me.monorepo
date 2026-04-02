/**
 * [SPECIALIST COMPONENT]: LEAD_INTELLIGENCE_HUD v18.5.0 (PREDICTIVE_MAXIMIZED)
 * [STRATEGY]: Behavior Analysis Simulation | High-End Visualization | Tactical UI
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, memo, useCallback } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface Signal {
  id: string;
  label: string;
  value: string;
  status: "active" | "analyzing" | "locked";
}

export const LeadScoringHUD = memo(() => {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Awaiting_Traffic");
  const [signals, setSignals] = useState<Signal[]>([
    { id: "SRC", label: "Source_Context", value: "Unknown", status: "analyzing" },
    { id: "INT", label: "Intent_Mapping", status: "analyzing", value: "---" },
    { id: "VEL", label: "Engagement_Velocity", status: "analyzing", value: "0.0s" },
  ]);

  const runSimulation = useCallback(async () => {
    // Stage 1: Handshake
    await new Promise((r) => setTimeout(r, 800));
    setSignals((prev) =>
      prev.map((s) => (s.id === "SRC" ? { ...s, value: "Direct_Link", status: "active" } : s)),
    );
    setScore(24);

    // Stage 2: Intent Audit
    await new Promise((r) => setTimeout(r, 1500));
    setSignals((prev) =>
      prev.map((s) =>
        s.id === "INT" ? { ...s, value: "High_Purchase_Intent", status: "active" } : s,
      ),
    );
    setScore(68);
    setStatus("Analyzing_Decision_Sequence");

    // Stage 3: Velocity Locking
    await new Promise((r) => setTimeout(r, 1200));
    setSignals((prev) =>
      prev.map((s) => (s.id === "VEL" ? { ...s, value: "4.8x_Baseline", status: "active" } : s)),
    );
    setScore(98);
    setStatus("Lead_Qualified_Specialist_Grade");
  }, []);

  useEffect(() => {
    runSimulation();
  }, [runSimulation]);

  return (
    <div className="border-border/50 bg-surface-card rounded-section shadow-pro-xl relative overflow-hidden border p-8 md:p-12">
      {/* Dynamic Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* LEFT: Neural Readout */}
        <div className="space-y-10 lg:col-span-5">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[var(--color-brand-primary)]">
              <IconRenderer name="Activity" size={18} />
              <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                ประเมินศักยภาพลูกค้า
              </span>
            </div>
            <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic">
              Lead <span className="text-[var(--color-brand-primary)]">Intelligence.</span>
            </h3>
          </div>

          <div className="border-border/50 relative flex items-center justify-center rounded-3xl border bg-[var(--surface-offset)] p-10 shadow-inner">
            <div className="text-center">
              <span className="text-text-primary text-8xl font-black tracking-tighter italic tabular-nums transition-all duration-700">
                {score}
              </span>
              <span className="text-text-muted mt-2 block font-mono text-[10px] font-bold tracking-[0.5em] uppercase opacity-40">
                โอกาสปิดการขาย
              </span>
            </div>
            {/* Circular Progress (Minimalist) */}
            <svg className="absolute inset-0 h-full w-full -rotate-90 opacity-10">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-brand-primary fill-none"
                strokeWidth="2"
                strokeDasharray="283"
                style={{
                  strokeDashoffset: 283 - (283 * score) / 100,
                  transition: "stroke-dashoffset 1s ease-out",
                }}
              />
            </svg>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-4">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-[9px] leading-none font-black tracking-widest text-emerald-500 uppercase">
              Status: {status}
            </span>
          </div>
        </div>

        {/* RIGHT: Signal Matrix */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="grid grid-cols-1 gap-4">
            {signals.map((sig, i) => (
              <div
                key={sig.id}
                className={cn(
                  "group border-border/50 relative overflow-hidden rounded-2xl border p-6 transition-all duration-500",
                  sig.status === "analyzing"
                    ? "bg-[var(--surface-offset)]/50"
                    : "bg-surface-card hover:border-[var(--color-brand-primary)]/30",
                )}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-text-muted font-mono text-[8px] font-bold uppercase opacity-80">
                      ปัจจัยที่ 0{i + 1}
                    </span>
                    <h4 className="text-text-primary text-sm font-black tracking-wide uppercase italic">
                      {sig.label}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold tracking-tight",
                        sig.status === "analyzing"
                          ? "text-text-muted opacity-80"
                          : "text-[var(--color-brand-primary)]",
                      )}
                    >
                      {sig.value}
                    </span>
                  </div>
                </div>
                {/* Micro-Interaction Background */}
                <div className="from-brand-primary/5 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <div className="border-border/50 mt-8 rounded-2xl border border-dashed bg-[var(--surface-offset)] p-6">
            <p className="text-text-muted text-[10px] leading-relaxed font-medium italic opacity-100">
              "AI Agent is currently orchestrating decision paths based on 142 historical success
              nodes. Expected ROI trajectory verified."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

LeadScoringHUD.displayName = "LeadScoringHUD";
