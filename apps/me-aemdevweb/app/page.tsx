import React, { Suspense } from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { JsonLd, getGraphSchema } from "@repo/seo";
import { Brain, Terminal, Zap, ArrowUpRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllContent } from "@/lib/mdx";

/**
 * [METADATA]: ARCHITECT IDENTITY PROTOCOL v1.1.0
 * [DNA]: Optimized for Liquid Glass & Tactile Depth
 */
export const metadata: Metadata = {
  title: `${SHARED_SITE_CONFIG.expert.displayName} | Chief Digital Architect`,
  description: SHARED_SITE_CONFIG.expert.bio,
};

/**
 * [ASYNC_COMPONENT]: LatestTransmissions
 * ดึงข้อมูลบทความล่าสุดมาแสดงผลแบบ Streaming เพื่อสนับสนุน PPR
 */
async function LatestTransmissions() {
  const posts = await getAllContent("blog");
  const recentPosts = posts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {recentPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-primary/20 transition-all flex flex-col h-full"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary">
            <Activity size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">
            {post.category}
          </span>
          <h3 className="text-lg font-bold uppercase tracking-tight mb-8 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/20 group-hover:text-primary transition-colors">
            Read Record <ArrowUpRight size={12} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function IdentityHome() {
  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-primary/30 selection:text-primary overflow-hidden">
      {/* 🚀 [SEO_INJECTION] */}
      <JsonLd data={getGraphSchema()} />

      {/* 🌌 [DNA_LAYER]: Circuit Background & Ambient Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      {/* 🏛️ [HERO_SECTION]: Mastermind Reveal */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 z-10">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            {/* Visual: Mastermind Identity */}
            <div className="relative group w-full md:w-auto flex justify-center">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
              <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                <Image
                  src="/images/profile-mastermind-4x3.webp"
                  alt="AEMZA MACKS"
                  fill
                  className="object-cover transition-all duration-1000 opacity-90 group-hover:opacity-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white text-black px-8 py-4 rounded-2xl shadow-2xl z-20 border border-black/5 rotate-3 group-hover:rotate-0 transition-transform">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 leading-none">
                  Status
                </p>
                <p className="text-sm font-bold leading-none italic">Protocol_Active</p>
              </div>
            </div>

            {/* Content: Authority Identity */}
            <div className="flex-grow text-center md:text-left pt-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-10">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
                  Chief Architect V5.3
                </span>
              </div>

              <h1 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter mb-8 leading-[0.8] mix-blend-difference">
                AEMZA <br /> <span className="text-primary">MACKS.</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-12 max-w-2xl italic border-l-2 border-primary/20 pl-8">
                "Infrastructure is Destiny:
                ผู้ออกแบบความสำเร็จผ่านโครงสร้างพื้นฐานดิจิทัลระดับสถาบัน"
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start font-mono">
                <Link
                  href="/projects"
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-xl font-black text-[10px] tracking-[0.2em] uppercase hover:scale-105 transition-all"
                >
                  View Systems <Terminal size={14} />
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
                >
                  Intelligence Hub <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 [LATEST_INTELLIGENCE]: Preview of Blog */}
      <section className="relative py-32 px-6 z-10 border-t border-white/5">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                Recent Transmissions.
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Latest <br /> <span className="text-white/20">Protocol.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors pb-4"
            >
              Access Full Hub <ArrowUpRight size={16} />
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-20">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-64 rounded-[2rem] bg-white/5 animate-pulse" />
                ))}
              </div>
            }
          >
            <LatestTransmissions />
          </Suspense>
        </div>
      </section>

      {/* 🛠️ [SYSTEM_CORE]: Technical Mindset */}
      <section className="relative py-48 bg-white text-black z-10 rounded-[5rem] md:rounded-[8rem]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 leading-none">
                Core <br /> <span className="italic">Intelligence.</span>
              </h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Brain className="text-primary" size={24} /> Neural SEO Architecture
                  </h4>
                  <p className="text-black/60 leading-relaxed font-light italic pl-9 border-l border-black/10">
                    การทำ SEO ไม่ใช่แค่การหา Keyword แต่คือการสร้าง Knowledge Graph ที่ AI สามารถ
                    "เข้าใจ" และ "เชื่อถือ" ในตัวตนของคุณอย่างสมบูรณ์
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Zap className="text-primary" size={24} /> High-Octane Performance
                  </h4>
                  <p className="text-black/60 leading-relaxed font-light italic pl-9 border-l border-black/10">
                    ความเร็วระดับ 0.25s ไม่ใช่ทางเลือก แต่คือมาตรฐานขั้นต่ำ
                    โครงสร้างที่ผมออกแบบเน้นประสิทธิภาพสูงสุดในทุกระดับชั้น (Layer)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[3rem] overflow-hidden border-[12px] border-black/5 shadow-2xl">
                <Image
                  src="/images/infrastructure-core-4x3.webp"
                  alt="Infrastructure Mindset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 [FINAL_TRANSMISSION]: Call to Action */}
      <section className="relative py-48 px-6 z-10">
        <div className="container max-w-4xl mx-auto text-center">
          <Activity size={64} className="mx-auto text-primary mb-12 opacity-40 animate-pulse" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            Signal <br /> Synchronized.
          </h2>
          <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-20 italic">
            "เมื่อโครงสร้างพื้นฐานแข็งแกร่ง... ความสำเร็จจะเป็นผลพลอยได้ที่หลีกเลี่ยงไม่ได้"
          </p>

          <Link
            href={SHARED_SITE_CONFIG.links.site}
            className="inline-flex items-center gap-6 px-16 py-8 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            Enter Business Hub <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* DNA Footer Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />
    </main>
  );
}
