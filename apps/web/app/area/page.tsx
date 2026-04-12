/**
 * [PAGE]: AREA_HUB_CENTRAL v8.0.0
 * [STRATEGY]: Local SEO Silo Structure | Global Coverage Network
 */

import React from "react";
import { AREA_NODES } from "@repo/core";
import { GlassCard } from "@repo/ui";
import { Search, Globe, Navigation, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Hub",
  description:
    "โครงข่ายโหนดบริการดิจิทัลครอบคลุม 77 จังหวัดทั่วไทย เพื่อการเข้าถึงกลุ่มเป้าหมายในระดับท้องถิ่นที่แม่นยำที่สุด",
};

export default function AreaHubPage() {
  const provinces = AREA_NODES;

  const regions = [
    { id: "central", name: "Central & Bangkok", nodes: provinces.slice(0, 20) },
    { id: "north", name: "Northern Thailand", nodes: provinces.slice(20, 40) },
    { id: "isan", name: "Northeastern (Isan)", nodes: provinces.slice(40, 60) },
    { id: "south", name: "Southern & Eastern", nodes: provinces.slice(60) },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/20 relative overflow-hidden">
      {/* 🌌 [BACKGROUND_LAYER] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-card border border-border rounded-full mb-10">
            <Globe size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Coverage Network Control
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
            Strategic <br /> <span className="text-primary italic">Nodes.</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {regions.map((r) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-background transition-all"
              >
                {r.name}
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-2 bg-card border border-border rounded-full flex items-center gap-4 group focus-within:border-primary/50 transition-all shadow-2xl">
            <div className="pl-4">
              <Search
                className="text-white/20 group-focus-within:text-primary transition-colors"
                size={20}
              />
            </div>
            <input
              type="text"
              placeholder="Search Area Node Protocol..."
              className="bg-transparent border-none outline-none w-full text-white font-mono text-xs placeholder:text-white/20"
            />
          </div>
        </header>

        {/* 🗺️ REGIONAL SILO STRUCTURE */}
        <div className="space-y-32 max-w-6xl mx-auto">
          {regions.map((region) => (
            <section key={region.id} id={region.id} className="scroll-mt-32 space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Navigation size={18} className="text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                  {region.name}
                </h3>
                <div className="h-px bg-white/5 flex-grow" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {region.nodes.map((province) => (
                  <Link key={province.slug} href={`/${province.slug}`} className="group">
                    <GlassCard className="p-6 border-white/5 bg-white/[0.02] group-hover:border-primary/30 group-hover:bg-primary/5 transition-all text-center h-full flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={12} className="text-primary" />
                      </div>
                      <h4 className="text-sm font-black group-hover:text-primary transition-colors mb-1 uppercase tracking-tight">
                        {province.name_th}
                      </h4>
                      <p className="text-[8px] text-white/30 font-mono uppercase tracking-[0.2em]">
                        {province.name_en}
                      </p>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
