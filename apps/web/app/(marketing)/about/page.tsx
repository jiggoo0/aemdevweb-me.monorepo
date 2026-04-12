import React from "react";
import { GlassCard } from "@repo/ui";
import { Shield, Target, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AEM | Architectural Ecosystem Mastery",
  description: "ผู้นำด้านการสร้างโครงสร้างพื้นฐานดิจิทัลและระบบ SEO ระดับภูมิภาค 77 จังหวัด",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
            <Shield size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Institutional Authority & Digital Architecture
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
            Architectural <br /> <span className="text-primary italic">Ecosystem.</span>
          </h1>

          <p className="text-2xl text-muted-foreground font-light leading-relaxed italic">
            "เราไม่ได้แค่สร้างเว็บไซต์
            แต่เราสร้างโครงสร้างพื้นฐานที่ขับเคลื่อนความเชื่อมั่นในระดับสถาบัน"
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <GlassCard className="p-16 border-white/5 bg-white/[0.01]">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Our Mission.</h2>
            <p className="text-xl font-light text-white/50 leading-relaxed mb-10">
              ยกระดับมาตรฐานดิจิทัลของประเทศไทยผ่านการออกแบบเชิงสถาปัตยกรรม (Digital Architecture)
              ที่ผสานพลังของ Technical SEO, Data Integrity และ Ambient Design เข้าด้วยกัน
            </p>
            <div className="flex items-center gap-4 pt-10 border-t border-white/5">
              <Target className="text-primary" size={24} />
              <span className="text-xs font-black uppercase tracking-widest text-white/30">
                Target: National Dominance
              </span>
            </div>
          </GlassCard>

          <GlassCard className="p-16 border-white/5 bg-white/[0.01]">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Specialization.</h2>
            <p className="text-xl font-light text-white/50 leading-relaxed mb-10">
              เชี่ยวชาญด้าน P-SEO (Province-based SEO) ครอบคลุม 77 จังหวัด
              เพื่อสร้างการเข้าถึงกลุ่มเป้าหมายในระดับท้องถิ่นที่แม่นยำที่สุดในตลาด
            </p>
            <div className="flex items-center gap-4 pt-10 border-t border-white/5">
              <Globe className="text-primary" size={24} />
              <span className="text-xs font-black uppercase tracking-widest text-white/30">
                Scope: 77 Province Nodes
              </span>
            </div>
          </GlassCard>
        </section>

        <section className="bg-white text-black rounded-[4rem] p-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">
            Institutional Trust.
          </h2>
          <p className="text-xl font-light mb-16 max-w-2xl mx-auto italic leading-relaxed text-black/60">
            "ด้วยมาตรฐานความปลอดภัยและประสิทธิภาพระดับสูงสุด
            เราได้รับความไว้วางใจจากธุรกิจชั้นนำทั่วภูมิภาค"
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-6xl font-black tracking-tighter mb-2">99%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                Perf Score
              </p>
            </div>
            <div>
              <p className="text-6xl font-black tracking-tighter mb-2">77+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                Regional Nodes
              </p>
            </div>
            <div>
              <p className="text-6xl font-black tracking-tighter mb-2">A+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                Security Tier
              </p>
            </div>
            <div>
              <p className="text-6xl font-black tracking-tighter mb-2">24/7</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                Active Ops
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
