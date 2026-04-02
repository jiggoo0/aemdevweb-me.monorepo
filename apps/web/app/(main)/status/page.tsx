/**
 * [ROUTE PAGE]: SYSTEM_STATUS_TERMINAL v18.0.0 (SERVER_OPTIMIZED)
 * [STRATEGY]: Kinetic Grid Architecture | Pure CSS Transitions | Zero-Framer
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Metadata } from "next";

// --- Infrastructure ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";

import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import type { IconName } from "@/components/ui/IconRenderer";

export const metadata: Metadata = {
  title: `System_Integrity_Report | ${SITE_CONFIG.brandName}`,
  description: "Advanced diagnostic report for multi-node architecture in v18 environment.",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/status` },
};

// --- [TYPES]: นิยามพิกัดข้อมูล Node Matrix ---
interface StatusNode {
  readonly id: string;
  readonly label: string;
  readonly latency: string;
  readonly load: string;
  readonly status: "OPTIMIZED" | "STABLE" | "INDEXING" | "FAST_PATH" | "LOCKED" | "OPERATIONAL";
  readonly health: number;
  readonly icon: IconName;
}

const ARCHITECTURE_NODES: readonly StatusNode[] = [
  {
    id: "NODE_01",
    label: "Core_Render_Engine",
    latency: "14ms",
    load: "12%",
    status: "OPTIMIZED",
    health: 100,
    icon: "Cpu",
  },
  {
    id: "NODE_02",
    label: "Dynamic_CMS_Protocol",
    latency: "28ms",
    load: "08%",
    status: "STABLE",
    health: 100,
    icon: "Database",
  },
  {
    id: "NODE_03",
    label: "SEO_Authority_Nodes",
    latency: "N/A",
    load: "LOW",
    status: "INDEXING",
    health: 99.9,
    icon: "Search",
  },
  {
    id: "NODE_04",
    label: "Global_Edge_CDN",
    latency: "08ms",
    load: "15%",
    status: "FAST_PATH",
    health: 100,
    icon: "Globe",
  },
  {
    id: "NODE_05",
    label: "Security_Firewall_v18",
    latency: "02ms",
    load: "04%",
    status: "LOCKED",
    health: 100,
    icon: "ShieldCheck",
  },
  {
    id: "NODE_06",
    label: "Asset_Cloud_Distro",
    latency: "42ms",
    load: "22%",
    status: "OPERATIONAL",
    health: 100,
    icon: "Layers",
  },
];

/**
 * @page StatusPage
 * @description หน้าจอแสดงสถานะความสมบูรณ์ของระบบแบบ Real-time (Diagnostic Terminal)
 * [OPTIMIZATION]: เปลี่ยนเป็น Pure Server Component โดยใช้ CSS animations เพื่อประหยัด JS
 */
export default function StatusPage() {
  const systemRefId = `AEM-${SITE_CONFIG.project.version}-NODE`;

  return (
    <LayoutEngine spacing="none">
      {/* 01. TERMINAL HEADER: Kinetic Visual Infrastructure */}
      <section className="border-border relative overflow-hidden border-b pt-32 pb-16 transition-colors duration-500 md:pt-48 md:pb-24">
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
          <div className="bg-brand-primary/10 absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 opacity-40 blur-[140px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-4xl space-y-8">
              <h2 className="sr-only">Diagnostic Overview & Metrics</h2>
              <div className="animate-in fade-in slide-in-from-top-2 flex items-center gap-4 duration-700">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary shadow-glow flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                    <span className="bg-brand-primary shadow-glow relative inline-flex h-2 w-2 rounded-full"></span>
                  </span>
                  <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                    Diagnostic_Mode_v{SITE_CONFIG.project.version}
                  </span>
                </div>
                <span className="text-text-muted hidden font-mono text-[10px] font-bold tracking-widest uppercase opacity-40 sm:block">
                  Ref_ID: {systemRefId}
                </span>
              </div>

              <h1 className="text-text-primary animate-in fade-in slide-in-from-left-4 fill-mode-both text-6xl leading-[0.85] font-black tracking-tighter uppercase italic delay-150 duration-1000 sm:text-7xl md:text-8xl lg:text-9xl">
                System <br className="hidden sm:block" />{" "}
                <span className="text-brand-primary">Integrity.</span>
              </h1>
            </div>

            <div className="border-border bg-surface-card/80 shadow-glow group rounded-card animate-in fade-in zoom-in-95 fill-mode-both w-full border p-8 backdrop-blur-md transition-all delay-300 duration-500 duration-1000 lg:w-96">
              <div className="mb-6 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-text-muted font-mono text-[9px] font-black uppercase opacity-60">
                    Master_System_Uptime
                  </span>
                  <p className="text-brand-primary font-mono text-4xl leading-none font-black italic">
                    99.99
                    <span className="text-text-muted ml-1 text-sm font-bold not-italic">%</span>
                  </p>
                </div>
                <IconRenderer
                  name="Activity"
                  size={32}
                  className="text-brand-primary animate-pulse opacity-40"
                />
              </div>
              <div className="bg-surface-offset border-border h-1.5 w-full overflow-hidden rounded-full border">
                <div className="bg-brand-primary shadow-glow animate-in slide-in-from-left h-full w-[99.99%] duration-[2000ms] ease-out" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. NODE MATRIX: Golden Proportions Layout */}
      <section className="bg-surface-main relative min-h-[70vh] py-20 transition-colors duration-500 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-border mb-12 flex items-center justify-between border-b pb-6">
            <h2 className="text-text-primary font-mono text-xs font-black tracking-[0.5em] uppercase italic">
              Node_Infrastructure_Matrix
            </h2>
            <span className="text-text-muted font-mono text-[9px] font-bold uppercase opacity-40">
              Total_Active_Nodes: {ARCHITECTURE_NODES.length}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE_NODES.map((node, index) => (
              <div
                key={node.id}
                className={cn(
                  "group border-border bg-surface-card rounded-section relative overflow-hidden border p-8 transition-all duration-700 ease-out",
                  "hover:border-brand-primary/40 hover:bg-surface-offset hover:shadow-glow hover:-translate-y-2",
                  "will-change-transform",
                  "animate-in fade-in slide-in-from-bottom-4 fill-mode-both",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Node Identity Interface */}
                <div className="mb-14 flex items-start justify-between">
                  <div className="text-brand-primary border-border bg-surface-offset group-hover:border-brand-primary/30 group-hover:bg-brand-primary/10 group-hover:shadow-glow rounded-2xl border p-4 transition-all duration-500 group-hover:rotate-6">
                    <IconRenderer name={node.icon} size={24} />
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="text-brand-primary block font-mono text-[10px] leading-none font-black tracking-widest uppercase">
                      {node.status}
                    </span>
                    <div className="flex items-center justify-end gap-2">
                      <div className="border-border bg-surface-offset h-1 w-12 overflow-hidden rounded-full border">
                        <div
                          className="bg-brand-primary shadow-glow animate-in slide-in-from-left h-full delay-500 duration-[1500ms] ease-out"
                          style={{ width: `${node.health}%` }}
                        />
                      </div>
                      <span className="text-text-muted font-mono text-[8px] font-bold uppercase opacity-40">
                        {node.health}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Node Labels */}
                <div className="relative z-10 space-y-2">
                  <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.2em] opacity-40">
                    {node.id}
                  </span>
                  <h4 className="text-text-primary group-hover:text-brand-primary text-2xl leading-none font-black tracking-tight uppercase italic transition-colors">
                    {node.label}
                  </h4>
                </div>

                {/* Data Points Layer */}
                <div className="border-border relative z-10 mt-10 grid grid-cols-2 gap-10 border-t pt-8">
                  <div className="space-y-2">
                    <span className="text-text-muted text-[9px] font-black tracking-[0.2em] uppercase opacity-40">
                      Latency
                    </span>
                    <div className="flex items-baseline gap-1">
                      <p className="text-text-primary font-mono text-base font-black italic">
                        {node.latency}
                      </p>
                      {node.latency !== "N/A" && (
                        <span className="text-brand-primary animate-pulse text-[8px] font-black">
                          ▲
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-text-muted text-[9px] font-black tracking-[0.2em] uppercase opacity-40">
                      Load_Factor
                    </span>
                    <p className="text-text-primary font-mono text-base font-black italic">
                      {node.load}
                    </p>
                  </div>
                </div>

                {/* Interaction Aura */}
                <div className="bg-brand-primary/10 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* End Signature Log */}
          <div className="mt-40 flex flex-col items-center justify-center space-y-8 pb-20">
            <div className="border-border h-px w-32 border-t opacity-30" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.8em] uppercase opacity-40">
                End_of_Integrity_Log
              </span>
              <span className="text-text-muted font-mono text-[7px] font-bold tracking-widest uppercase opacity-10">
                Nodes_Verified_Secure_v{SITE_CONFIG.project.version}
              </span>
            </div>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
