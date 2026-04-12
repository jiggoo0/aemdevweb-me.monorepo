import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { Button } from "@repo/ui";
import { Shield, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { HeroAndShowcase } from "@/components/sections/hero-showcase";
import { RecentBlogSection } from "@/components/sections/recent-blog";

export default function FullyLoadedLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-hidden">
      {/* 🌌 [BACKGROUND_LAYER] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[180px] animate-aura-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/5 blur-[180px] animate-aura-2" />
      </div>

      <div className="relative z-10">
        <HeroAndShowcase />

        {/* 🛡️ [CORE_PILLARS]: The 3 Pillars of AEM Architecture */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  P-SEO Infrastructure.
                </h3>
                <p className="text-white/40 leading-relaxed font-light">
                  ระบบโครงสร้างพื้นฐาน SEO แบบเจาะจงพื้นที่ 77 จังหวัด (Province Nodes)
                  เพื่อยึดครองตลาดท้องถิ่นอย่างสมบูรณ์แบบ
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-500/20">
                  <Shield className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  Entity Linking Hub.
                </h3>
                <p className="text-white/40 leading-relaxed font-light">
                  การเชื่อมโยงอัตลักษณ์บุคคลและแบรนด์ผ่าน Schema.org ขั้นสูง
                  เพื่อสร้างความเชื่อมั่นสูงสุดในระดับ E-E-A-T
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                  <Zap className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  Ambient Experience.
                </h3>
                <p className="text-white/40 leading-relaxed font-light">
                  การออกแบบที่เน้นความรู้สึกและอารมณ์
                  ควบคู่กับประสิทธิภาพการโหลดที่เร็วระดับมิลลิวินาที (LCP {"<"} 1.0 s)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 📝 [BLOG_SECTION]: Latest Intelligence Transmissions */}
        <RecentBlogSection />

        {/* 🏆 [FINAL_CTA] */}
        <section className="bg-white text-black py-40 rounded-t-[5rem]">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              Ready to <br /> <span className="italic underline underline-offset-8">Manifest?</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 text-black/60">
              สัมผัสประสบการณ์เว็บไซต์ระดับสถาบันที่ออกแบบมาเพื่อธุรกิจของคุณโดยเฉพาะ
            </p>
            <Button
              size="lg"
              variant="neo"
              className="bg-black text-white hover:bg-zinc-800 px-20 py-6 text-lg"
              asChild
            >
              <Link href={SHARED_SITE_CONFIG.links.line}>Initialize Transmission</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
