import React from "react";
import { GlassCard, Button } from "@repo/ui";
import { ShieldCheck, Brain, Code, ArrowUpRight, MapPin, Calendar, Activity } from "lucide-react";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/cards";
import { getProjects } from "@repo/db";
import type { Metadata } from "next";

/**
 * [METADATA]: Chief Architect Protocol Identity
 */
export const metadata: Metadata = {
  title: "AEMZA MACKS | Chief Digital Architect Protocol",
  description:
    "Senior Digital Infrastructure Strategist specializing in Technical SEO, Next.js 16, and Regional Authority Domination.",
};

/**
 * [PAGE]: ArchitectHub
 */
export default async function ArchitectHub() {
  const posts = await getAllBlogPosts();
  const { data } = await getProjects();
  const projects = data || [];

  const personalInsights = posts.slice(0, 2);
  const masterpieces = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32">
      {/* 🌌 [BACKGROUND_LAYER] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header: Identity Sync */}
        <header className="mb-32 flex flex-col md:flex-row items-center gap-16 md:items-start text-center md:text-left">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 blur-3xl group-hover:bg-primary/50 transition-all duration-1000 opacity-50 rounded-full" />
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/20 bg-black/40 p-1 relative z-10 overflow-hidden backdrop-blur-3xl shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                <Brain size={80} className="text-primary opacity-80" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white text-black px-6 py-2 rounded-2xl border border-black/5 shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest">
                Protocol Active
              </span>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Senior Digital Infrastructure Specialist
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
              Chief <br /> <span className="text-primary italic">Architect.</span>
            </h1>

            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-12 italic">
              "ผู้ออกแบบกลยุทธ์โครงสร้างพื้นฐานดิจิทัลที่เน้นความมั่นคง
              และการขยายตัวตนในระดับภูมิภาค 77 จังหวัด"
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
                <MapPin size={14} className="text-primary/50" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Lower North Regional Hub
                </span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
                <Calendar size={14} className="text-primary/50" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  12+ Years Intelligence
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 🏆 Architect Masterpieces (Portfolio Linkage) */}
        <section className="mb-48">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                Architectural <br /> <span className="text-primary italic">Masterpieces.</span>
              </h2>
              <p className="text-lg font-light text-white/40 italic">
                "คัดสรรโครงการที่สะท้อนถึงการผสมผสานระหว่างศิลปะและวิศวกรรมข้อมูลอย่างลงตัว"
              </p>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/10 transition-all"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Explore Registry
              </span>
              <ArrowUpRight size={16} className="text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masterpieces.map((project) => (
              <Link key={project.id} href="/portfolio">
                <GlassCard className="p-8 border-white/5 bg-white/[0.01] hover:border-primary/30 transition-all h-full flex flex-col group/card">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-8">
                    <ShieldCheck size={20} className="text-primary/50" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white leading-tight group-hover/card:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-white/30 line-clamp-3 mb-8 flex-grow">
                    {project.description}
                  </p>
                  <div className="text-[9px] font-black uppercase tracking-widest text-primary opacity-0 group-hover/card:opacity-100 transition-opacity">
                    Protocol Verified
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Bento: Engineering Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-48">
          <GlassCard className="md:col-span-8 p-12 border-white/5 bg-white/[0.01]">
            <div className="mb-10 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
              <Code className="text-primary" size={24} />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
              Engineering Philosophy.
            </h2>
            <p className="text-xl font-light text-white/50 leading-relaxed italic mb-12">
              "ความเรียบง่ายคือจุดสูงสุดของความซับซ้อน" ผมยึดถือแนวคิดการเขียนโค้ดที่สะอาด มั่นคง
              และมีโครงสร้างที่ AI สามารถประมวลผลได้แม่นยำที่สุด
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Next.js 16", "React 19", "Technical SEO", "Cloud Infra"].map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-2 border border-white/10 rounded-xl text-center text-[9px] font-black uppercase tracking-widest text-white/30 hover:border-primary transition-all"
                >
                  {tag}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-4 p-12 border-white/5 bg-primary/5 flex flex-col justify-center items-center text-center">
            <Activity className="text-primary mb-8" size={64} />
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
              Integrity <br /> Auditor.
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-8">
              System Compliance
            </p>
            <Button variant="neo" className="w-full">
              Initialize Audit
            </Button>
          </GlassCard>
        </section>

        {/* Architect Transmission (Personal Blog Section) */}
        <section className="mb-48">
          <div className="flex items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                Latest <br /> <span className="text-primary italic">Transmissions.</span>
              </h2>
              <p className="text-lg font-light text-white/40 italic">
                "เจาะลึกองค์ความรู้จากการวิจัยและพัฒนาในระดับลึก (Deep R&D)"
              </p>
            </div>
            <Link
              href="/blog"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-white transition-colors pb-2 border-b border-primary/30"
            >
              View All Signal
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {personalInsights.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Global Connection / Final Action */}
        <section className="py-32 bg-white text-black rounded-[5rem] text-center px-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              Sync <br /> Protocol.
            </h2>
            <p className="text-xl font-light text-black/60 mb-16 italic leading-relaxed max-w-xl mx-auto">
              "เชื่อมโยงวิสัยทัศน์ของคุณเข้ากับโครงสร้างพื้นฐานระดับสถาบันที่ผมและทีมงานออกแบบ"
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-16 py-6 bg-black text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all duration-500">
                Contact Architect
              </button>
              <button className="px-16 py-6 border border-black/10 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-black/5 transition-all duration-500">
                View Full Registry
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
