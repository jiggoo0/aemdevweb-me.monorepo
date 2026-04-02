"use client";

import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { AreaNode } from "@/types";

interface AreaInfrastructureHUDProps {
  readonly allNodes: AreaNode[];
}

/**
 * @component AreaInfrastructureHUD
 * @description แผงควบคุมสถิติโครงสร้างพื้นฐานดิจิทัลระดับประเทศ (National Digital Hub HUD)
 */
export default function AreaInfrastructureHUD({ allNodes }: AreaInfrastructureHUDProps) {
  // [OPTIMIZATION]: คำนวณสถิติเฉพาะเมื่อ allNodes เปลี่ยนแปลงเท่านั้น
  const stats = React.useMemo(() => {
    const totalNodes = allNodes.length;
    if (totalNodes === 0) return [];

    const avgความเร็ว = (
      allNodes.reduce((acc, n) => acc + (n.regionalความเร็ว || 25), 0) / totalNodes
    ).toFixed(1);
    const totalDistricts = allNodes.reduce((acc, n) => acc + (n.districts?.length || 0), 0);
    const highPriorityNodes = allNodes.filter((n) => (n.priority || 0) >= 90).length;

    return [
      {
        label: "สาขาที่ให้บริการ",
        value: totalNodes,
        unit: "Provinces",
        icon: "Globe" as const,
        description: "ครอบคลุมทั่วประเทศ",
      },
      {
        label: "ความเร็วเฉลี่ย",
        value: avgความเร็ว,
        unit: "ms",
        icon: "Zap" as const,
        description: "ระบบเซิร์ฟเวอร์ความเร็วสูง",
        color: "text-emerald-500",
      },
      {
        label: "เขตพื้นที่บริการ",
        value: totalDistricts,
        unit: "Districts",
        icon: "MapPin" as const,
        description: "เข้าถึงระดับชุมชน",
      },
      {
        label: "พื้นที่สำคัญ",
        value: highPriorityNodes,
        unit: "Zones",
        icon: "ShieldCheck" as const,
        description: "ระดับมาตรฐานสากล",
      },
    ];
  }, [allNodes]);

  if (stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn(
            "group border-border/40 bg-surface-card/30 relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500",
            "hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-offset)]/50 hover:shadow-sm",
          )}
        >
          {/* Decorative Grid */}
          <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.03] select-none" />

          <div className="relative z-10 mb-4 flex items-start justify-between">
            <div className="group-hover:text-surface-main border-border/50 flex h-10 w-10 items-center justify-center rounded-xl border bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:bg-[var(--color-brand-primary)] group-hover:shadow-md">
              <IconRenderer name={stat.icon} size={18} />
            </div>
            <span className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase opacity-100">
              สถิติที่ 0{i + 1}
            </span>
          </div>

          <div className="relative z-10 space-y-1">
            <div className="flex items-baseline gap-2">
              <span
                className={cn(
                  "text-3xl font-black tracking-tighter italic md:text-4xl",
                  stat.color || "text-text-primary",
                )}
              >
                {stat.value}
              </span>
              <span className="text-[10px] font-black tracking-widest text-[var(--color-brand-primary)] uppercase opacity-80">
                {stat.unit}
              </span>
            </div>
            <p className="text-text-muted font-mono text-[9px] font-bold tracking-[0.2em] uppercase opacity-100">
              {stat.label}
            </p>
          </div>

          <div className="bg-border/20 relative z-10 mt-4 h-px w-full overflow-hidden">
            <div className="absolute h-full w-1/3 bg-[var(--color-brand-primary)]" />
          </div>
          <p className="text-text-muted mt-2 text-[8px] font-medium italic opacity-100">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
