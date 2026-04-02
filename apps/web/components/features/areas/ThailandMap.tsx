"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { AreaNode } from "@/types";

interface ThailandMapProps {
  readonly allNodes: AreaNode[];
  readonly activeRegion: string;
  readonly onRegionChange: (region: string) => void;
}

/**
 * @component ThailandMap
 * @description ระบบจำลองแผนภูมิภูมิศาสตร์ประเทศไทย (Technical Geo-Visualizer)
 * [STRATEGY]: Styled SVG Map | Hover Interaction | Region Sync
 */
export default function ThailandMap({ allNodes, activeRegion, onRegionChange }: ThailandMapProps) {
  // [DATA_MAPPING]: นับจำนวน Node ในแต่ละภาคเพื่อแสดงความหนาแน่น (Density)
  const regionCounts = allNodes.reduce(
    (acc, n) => {
      acc[n.region] = (acc[n.region] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const regions = [
    {
      id: "North",
      label: "ภาคเหนือ",
      color: "oklch(65% 0.15 150)",
      path: "M40,20 L60,20 L70,40 L50,60 L30,40 Z",
    },
    {
      id: "Northeast",
      label: "ภาคอีสาน",
      color: "oklch(65% 0.15 30)",
      path: "M65,30 L90,30 L95,60 L75,70 L60,50 Z",
    },
    {
      id: "Central",
      label: "ภาคกลาง",
      color: "oklch(65% 0.15 200)",
      path: "M45,55 L65,55 L70,75 L55,85 L40,75 Z",
    },
    {
      id: "East",
      label: "ภาคตะวันออก",
      color: "oklch(65% 0.15 250)",
      path: "M65,70 L80,75 L75,90 L60,85 Z",
    },
    {
      id: "West",
      label: "ภาคตะวันตก",
      color: "oklch(65% 0.15 100)",
      path: "M30,45 L45,60 L40,85 L25,75 Z",
    },
    {
      id: "South",
      label: "ภาคใต้",
      color: "oklch(65% 0.15 280)",
      path: "M40,90 L55,95 L50,130 L35,125 Z",
    },
  ];

  return (
    <div className="group border-border/40 bg-surface-card/30 shadow-pro-lg relative flex aspect-square flex-col items-center justify-center rounded-3xl border p-8 md:aspect-video lg:p-12">
      {/* Decorative Grid Backdrop */}
      <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.02] select-none" />

      <div className="relative z-10 grid h-full w-full grid-cols-1 gap-12 lg:grid-cols-2">
        {/* --- LEFT: MAP VISUALIZER --- */}
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 120 160" className="h-full w-full max-w-[320px] drop-shadow-2xl">
            {regions.map((region) => {
              const isActive = activeRegion === region.id || activeRegion === "All";
              const isSelected = activeRegion === region.id;
              const count = regionCounts[region.id] || 0;

              return (
                <path
                  key={region.id}
                  d={region.path}
                  role="button"
                  tabIndex={0}
                  aria-label={`เลือก ${region.label} (${count} จังหวัด)`}
                  onKeyDown={(e) => e.key === "Enter" && onRegionChange(region.id)}
                  onClick={() => onRegionChange(region.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-700 ease-[0.16,1,0.3,1] outline-none",
                    isSelected
                      ? "stroke-brand-primary stroke-[2px] opacity-100"
                      : "stroke-border/30 opacity-40 hover:opacity-80 focus:opacity-100",
                    !isActive && !isSelected && "opacity-20 grayscale",
                  )}
                  style={{
                    fill: isSelected ? "var(--brand-primary)" : region.color,
                  }}
                >
                  <title>{`${region.label} (${count} Nodes)`}</title>
                </path>
              );
            })}
          </svg>

          {/* Scanline Effect overlay on Map */}
          <div className="pointer-events-none absolute inset-0 animate-[scanline_4s_linear_infinite] bg-gradient-to-b from-transparent via-[var(--brand-primary)]/5 to-transparent" />
        </div>

        {/* --- RIGHT: REGION HUD --- */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-[9px] font-black tracking-[0.5em] text-[var(--color-brand-primary)] uppercase">
              โครงข่ายพื้นที่ให้บริการ
            </span>
            <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-5xl lg:text-6xl">
              National_<span className="text-[var(--color-brand-primary)]">Graph</span>
            </h3>
            <p className="text-text-muted text-sm font-medium italic opacity-60">
              วิเคราะห์ความหนาแน่นและศักยภาพของ Digital Infrastructure ในแต่ละภูมิภาครายจังหวัด
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => onRegionChange(region.id)}
                className={cn(
                  "border-border flex flex-col gap-2 rounded-xl border bg-[var(--surface-offset)]/50 p-4 text-left transition-all hover:border-[var(--color-brand-primary)]/40",
                  activeRegion === region.id
                    ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]/10 shadow-sm"
                    : "opacity-60",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-text-primary text-[10px] font-black tracking-widest uppercase">
                    {region.id}
                  </span>
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: region.color }} />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-text-primary text-2xl font-black italic">
                    {regionCounts[region.id] || 0}
                  </span>
                  <span className="text-text-muted text-[8px] font-bold uppercase opacity-40">
                    Nodes
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => onRegionChange("All")}
            className="hover:text-surface-main group flex w-full items-center justify-center gap-3 rounded-xl border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 py-4 font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase transition-all hover:bg-[var(--color-brand-primary)]"
          >
            Reset_National_View
          </button>
        </div>
      </div>
    </div>
  );
}
