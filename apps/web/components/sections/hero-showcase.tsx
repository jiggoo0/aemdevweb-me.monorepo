"use client";

import React, { useState } from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { Button, GlassCard, StatusIndicator } from "@repo/ui";
import {
  ArrowRight,
  Lock,
  Zap,
  Building2,
  Palmtree,
  Factory,
  Gavel,
  MousePointer2,
} from "lucide-react";
import Link from "next/link";

/**
 * [COMPONENT]: IndustryShowcase
 * แสดงตัวอย่างเว็บไซต์ของแต่ละกลุ่มธุรกิจตามมาตรฐาน AEM
 */
const INDUSTRIES = [
  {
    id: "corporate",
    name: "Corporate",
    icon: Building2,
    color: "blue",
    oklch: "oklch(0.546 0.245 262.881)", // Trust Blue
    title: "Global Enterprise Architecture.",
    description:
      "สถาปัตยกรรมดิจิทัลสำหรับองค์กรขนาดใหญ่ที่เน้นความมั่นคง และการประมวลผลข้อมูลระดับวินาที",
    previewColor: "bg-blue-600/10",
    features: ["Entity Identity Verified", "Multi-Region SSR", "Governance Ready"],
    metrics: { label: "Performance_Score", value: "99/100" },
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Palmtree,
    color: "emerald",
    oklch: "oklch(0.627 0.194 149.214)", // Success Emerald
    title: "Ambient Guest Experience.",
    description:
      "สร้างความประทับใจตั้งแต่แรกเห็นด้วยดีไซน์ที่เน้นอารมณ์ ควบคู่กับระบบจองที่รวดเร็วไร้รอยต่อ",
    previewColor: "bg-emerald-600/10",
    features: ["Cinematic Narrative", "Fluid Booking Engine", "Visual Storytelling"],
    metrics: { label: "Conversion_Lift", value: "+42%" },
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: Factory,
    color: "orange",
    oklch: "oklch(0.6 0.2 45)", // Industrial Orange
    title: "Supply Chain Authority.",
    description:
      "ระบบบริหารจัดการข้อมูลสินค้าและ SEO รายพื้นที่ เพื่อยึดครองส่วนแบ่งการตลาดในภูมิภาค",
    previewColor: "bg-orange-600/10",
    features: ["P-SEO Local Dominance", "Inventory Intelligence", "B2B Lead Engine"],
    metrics: { label: "Local_Visibility", value: "Top 3" },
  },
  {
    id: "governance",
    name: "Governance",
    icon: Gavel,
    color: "purple",
    oklch: "oklch(0.5 0.2 300)", // Royal Purple
    title: "Institutional Transparency.",
    description:
      "แพลตฟอร์มสารสนเทศระดับท้องถิ่นที่เน้นความโปร่งใส การเข้าถึงข้อมูลที่ง่าย และความปลอดภัยสูงสุด",
    previewColor: "bg-purple-600/10",
    features: ["Public Data Integrity", "Accessibility AA Standard", "Secure Public Ledger"],
    metrics: { label: "Trust_Index", value: "A+ Verified" },
  },
];

export function HeroAndShowcase() {
  const { hero } = SHARED_SITE_CONFIG;
  const [activeTab, setActiveTab] = useState("corporate");

  const activeIndustry = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0]!;

  return (
    <>
      {/* 🚀 [HERO_SECTION] */}
      <section className="container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <StatusIndicator status="SECURE" label="AEM_ENCRYPTED" />
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
            <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">
              Verified by
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest text-primary">
              UNLINK
            </span>
          </div>
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="text-[8px] font-mono uppercase tracking-widest text-white/30">
              Ledger ID: AEM-GLOBAL-ENTRY
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-card border border-border rounded-full mb-12 shadow-xl">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
            {hero.tagline}
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-foreground">
          {hero.title.split(" ")[0]} <br />{" "}
          <span className="text-primary italic">{hero.title.split(" ")[1]}</span>
        </h1>

        <p className="max-w-3xl text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-16">
          {hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            size="lg"
            variant="neo"
            asChild
            aria-label="Book a consultation with our architect"
          >
            <Link href={SHARED_SITE_CONFIG.links.line} className="flex items-center gap-3 px-12">
              Deploy Consultation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="specialist"
            className="px-12"
            asChild
            aria-label="View our project registry"
          >
            <Link href="/portfolio">Explore Registry</Link>
          </Button>
        </div>
      </section>

      {/* 🖼️ [DYNAMIC_SHOWCASE]: The Real Infrastructure Feel */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Ecosystem Showcases.
            </h2>
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold">
              Experience the Architecture of Every Industry
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-8 py-4 rounded-2xl flex items-center gap-3 transition-all ${
                  activeTab === ind.id
                    ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-105"
                    : "bg-white/5 text-white/40 hover:bg-white/10"
                }`}
              >
                <ind.icon size={18} />
                <span className="text-xs font-black uppercase tracking-widest">{ind.name}</span>
              </button>
            ))}
          </div>

          {/* Showcase Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">
            <div className="lg:col-span-5 space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="space-y-4">
                <span
                  className="text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-primary"
                  style={{ color: activeIndustry.oklch }}
                >
                  Industry Targeted Solution
                </span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground">
                  {activeIndustry.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  {activeIndustry.description}
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-4">
                {activeIndustry.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 group/feat"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover/feat:border-primary/50 transition-all">
                      <Zap size={14} style={{ color: activeIndustry.oklch }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant="neo"
                className="w-full sm:w-fit px-12 py-6 text-xs tracking-widest"
              >
                Deploy {activeIndustry.name} Logic
              </Button>
            </div>

            {/* Realistic Mockup Window */}
            <div className="lg:col-span-7 relative group/mockup">
              <div
                className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-1000"
                style={{ backgroundColor: `${activeIndustry.oklch}20` }}
              />

              <GlassCard className="p-0 overflow-hidden border-white/10 shadow-2xl rounded-[3rem] bg-black/60 backdrop-blur-3xl relative z-10">
                {/* Browser Header */}
                <div className="bg-zinc-900/80 p-5 flex items-center gap-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                  </div>
                  <div className="flex-grow bg-black/40 rounded-full py-1.5 px-6 flex items-center justify-between border border-white/5">
                    <span className="text-[9px] font-mono text-white/30 truncate uppercase tracking-widest">
                      https://protocol.aem.{activeIndustry.id}.network
                    </span>
                    <Lock size={10} className="text-white/20" />
                  </div>
                </div>

                {/* Website Content Preview - Dynamic Bento Tiles */}
                <div
                  className={`aspect-[16/10] ${activeIndustry.previewColor} p-8 transition-all duration-1000 overflow-hidden relative`}
                >
                  <div className="grid grid-cols-6 grid-rows-6 gap-4 h-full">
                    <div className="col-span-4 row-span-3 bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col justify-end">
                      <div
                        className="w-12 h-1 bg-primary mb-4"
                        style={{ backgroundColor: activeIndustry.oklch }}
                      />
                      <div className="h-6 w-3/4 bg-white/10 rounded-md mb-2" />
                      <div className="h-3 w-1/2 bg-white/5 rounded-md" />
                    </div>
                    <div className="col-span-2 row-span-4 bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center gap-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <activeIndustry.icon size={32} style={{ color: activeIndustry.oklch }} />
                      </div>
                      <div className="h-2 w-12 bg-white/10 rounded-full" />
                    </div>
                    <div className="col-span-2 row-span-3 bg-white/5 rounded-3xl border border-white/10" />
                    <div className="col-span-2 row-span-2 bg-white/5 rounded-3xl border border-white/10" />
                    <div
                      className="col-span-2 row-span-2 bg-primary/10 rounded-3xl border border-primary/20 flex items-center justify-center"
                      style={{ borderColor: `${activeIndustry.oklch}40` }}
                    >
                      <MousePointer2 className="text-white/40" size={24} />
                    </div>
                  </div>

                  {/* Ambient Glows inside Mockup */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-[100px] pointer-events-none"
                    style={{ background: `${activeIndustry.oklch}15` }}
                  />
                </div>
              </GlassCard>

              {/* Floating Metric Card */}
              <div className="absolute -bottom-8 -left-8 animate-in zoom-in duration-1000 delay-300">
                <GlassCard className="px-8 py-6 border-white/10 bg-black/80 backdrop-blur-3xl shadow-2xl rounded-3xl">
                  <p
                    className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2"
                    style={{ color: activeIndustry.oklch }}
                  >
                    {activeIndustry.metrics.label}
                  </p>
                  <div className="flex items-end gap-3">
                    <p className="text-4xl font-black tabular-nums tracking-tighter text-white">
                      {activeIndustry.metrics.value}
                    </p>
                    <StatusIndicator status="SECURE" label="ACTIVE" />
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
