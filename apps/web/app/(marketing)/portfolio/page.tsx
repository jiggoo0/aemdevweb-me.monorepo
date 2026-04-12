import React from "react";
import { GlassCard } from "@repo/ui";
import { getProjects } from "@repo/db";
import { Activity, ArrowUpRight, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Registry | Architectural Portfolio",
  description:
    "บันทึกโครงการสถาปัตยกรรมดิจิทัลและระบบ SEO ที่ประสบความสำเร็จ ภายใต้การควบคุมโดย Chief Architect",
};

export default async function PortfolioPage() {
  const { data } = await getProjects();
  const projects = data || [];

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32">
      {/* 🌌 [BACKGROUND_LAYER] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-32 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Institutional Proof of Work
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
            Project <br /> <span className="text-primary italic">Registry.</span>
          </h1>

          <p className="text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto italic mb-16">
            "บันทึกความสำเร็จในการปรับโครงสร้างพื้นฐานดิจิทัลให้เป็นทรัพย์สินที่มีมูลค่าสูงสุดขององค์กร"
          </p>

          {/* 🏛️ Architect Supervision Signal */}
          <Link
            href="/me"
            className="inline-flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-[2rem] hover:bg-primary/10 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <User size={20} className="text-primary" />
            </div>
            <div className="text-left pr-6">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                Architectural Supervision
              </p>
              <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                By Chief Architect AEMZA
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </header>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <GlassCard className="p-10 h-full border-white/5 bg-white/[0.02] group-hover:border-primary/40 group-hover:bg-primary/5 transition-all flex flex-col">
                  <div className="flex justify-between items-start mb-12">
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                      {project.category}
                    </span>
                    <ShieldCheck size={16} className="text-white/20" />
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors leading-none">
                    {project.title}
                  </h3>

                  <p className="text-lg font-light text-white/40 mb-10 flex-grow line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-widest text-white/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          <GlassCard className="p-32 text-center border-white/5 bg-white/[0.01]">
            <Activity size={48} className="mx-auto mb-8 text-primary/40" />
            <p className="text-white/20 uppercase tracking-[0.5em] font-black text-sm italic">
              Synchronizing Portfolio Nodes...
            </p>
          </GlassCard>
        )}
      </div>
    </main>
  );
}
