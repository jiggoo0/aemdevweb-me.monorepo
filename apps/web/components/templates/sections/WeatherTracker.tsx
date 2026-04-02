/**
 * [SECTION COMPONENT]: WEATHER_TRACKER v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Real-time Simulation | Zero-Framer
 */

"use client";

import React, { useState, useEffect } from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface PerformanceStats {
  latency: number;
  uptime: number;
  requestRate: number;
  indexingStatus: string;
}

/**
 * @component PerformanceMonitor
 * @description ระบบจำลองการตรวจวัดประสิทธิภาพของโหนดรายพื้นที่แบบ Real-time
 */
export const WeatherTracker = ({ location = "Bangkok" }: { location?: string }) => {
  const [stats, setStats] = useState<PerformanceStats>({
    latency: 12,
    uptime: 99.99,
    requestRate: 45,
    indexingStatus: "Active",
  });
  const [syncId, setSyncId] = useState<string>("0.0000");

  // [LOGIC]: จำลองการผันผวนของประสิทธิภาพโหนด
  useEffect(() => {
    setSyncId(`0.${Math.floor(Date.now() / 1000000)}`);
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        latency: +(prev.latency + (Math.random() * 2 - 1)).toFixed(0),
        requestRate: Math.floor(prev.requestRate + (Math.random() * 10 - 5)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        "bg-[var(--surface-card)]/80 backdrop-blur-sm",
        "border-[var(--border-width)] border-[var(--foreground)]/10 shadow-2xl hover:border-[var(--brand-primary)]/30",
        "group rounded-[var(--radius)]",
      )}
    >
      {/* --- 1. Technical Header: Live Status --- */}
      <div className="flex items-center justify-between border-b border-[var(--foreground)]/5 bg-[var(--brand-primary)]/5 p-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </div>
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
            Regional_Performance: Live
          </span>
        </div>
        <IconRenderer name="Activity" size={14} className="opacity-30" />
      </div>

      {/* --- 2. Main Readout: Primary Data --- */}
      <div className="space-y-8 p-8">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="font-mono text-[10px] tracking-widest uppercase italic opacity-40">
              // ระบุพื้นที่
            </p>
            <h4 className="font-[family-name:var(--font-primary)] text-2xl leading-none font-black uppercase italic">
              {location}.node
            </h4>
          </div>
          <div className="text-right">
            <p
              key={stats.latency}
              className={cn(
                "font-[family-name:var(--font-primary)] text-5xl font-black tracking-tighter text-[var(--brand-primary)] italic",
                "transition-all duration-500",
                "animate-in fade-in slide-in-from-top-1 fill-mode-both",
              )}
            >
              {stats.latency}ms
            </p>
          </div>
        </div>

        {/* --- 3. Grid Metrics: Infrastructure Array --- */}
        <div className="grid grid-cols-2 gap-[var(--border-width)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10">
          {[
            { label: "Uptime", val: `${stats.uptime}%`, icon: "ShieldCheck" },
            { label: "Request_Vol", val: `${stats.requestRate} req/s`, icon: "Activity" },
            { label: "Index_Status", val: stats.indexingStatus, icon: "SearchCheck" },
            { label: "Protocol", val: "v18.2", icon: "Cpu" },
          ].map((item, i) => (
            <div
              key={i}
              className="group/item flex flex-col space-y-2 bg-[var(--surface-card)] p-4"
            >
              <div className="flex items-center gap-2 opacity-30 transition-opacity group-hover/item:opacity-100">
                <IconRenderer
                  name={item.icon as IconName}
                  size={12}
                  className="text-[var(--brand-primary)]"
                />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  {item.label}
                </span>
              </div>
              <p className="font-[family-name:var(--font-primary)] text-lg font-black uppercase italic">
                {item.val}
              </p>
            </div>
          ))}
        </div>

        {/* --- 4. Technical Footer: Metadata --- */}
        <div className="flex items-center justify-between pt-4 font-mono text-[8px] tracking-widest uppercase opacity-30">
          <p>Registry_Sync: {syncId}s</p>
          <p>เซิร์ฟเวอร์เสถียร</p>
        </div>
      </div>

      {/* [DECOR]: Blueprint Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};
