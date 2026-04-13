import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { Button, TemplateShowcase } from "@repo/ui";
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

        {/* 💎 [BUSINESS_SOLUTIONS]: World-Class Template Showcase */}
        <section className="py-32 relative bg-background/50 backdrop-blur-3xl">
          <div className="container mx-auto px-6 mb-20">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="text-secondary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  Design Systems.
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                  Industry <br /> <span className="text-primary/40 italic">Standards.</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm font-light leading-relaxed pb-4">
                เลือกใช้เทมเพลตที่ออกแบบมาเพื่อธุรกิจเฉพาะทางของคุณ ยกระดับ UI/UX
                สู่มาตรฐานสากลด้วยเทคโนโลยี Next.js 16
              </p>
            </div>

            <TemplateShowcase
              templates={[
                {
                  slug: "hospitality-luxury-resort",
                  title: "Hospitality Elite",
                  industry: "Hospitality",
                  description: "Cinematic Visuals & Seamless Booking Engine for 5-star Hotels.",
                  thumbnail: "/images/cases/hospitality-thumb.webp",
                },
                {
                  slug: "ecommerce-lifestyle-brand",
                  title: "Elite Retail",
                  industry: "E-commerce",
                  description: "Liquid Glass UI & High-Performance Headless Checkout.",
                  thumbnail: "/images/cases/ecommerce-thumb.webp",
                },
                {
                  slug: "professional-legal-consulting",
                  title: "Legal Authority",
                  industry: "Professional",
                  description: "Institutional Minimalism for Law Firms & Consultants.",
                  thumbnail: "/images/cases/professional-thumb.webp",
                },
                {
                  slug: "industrial-b2b-catalog",
                  title: "Industrial Core",
                  industry: "Industrial",
                  description: "B2B Smart Catalog & Technical Specification Hub.",
                  thumbnail: "/images/cases/industrial-thumb.webp",
                },
                {
                  slug: "health-wellness-clinic",
                  title: "Serenity Wellness",
                  industry: "Health",
                  description: "Serene Appointment Flows for Clinics & Wellness Centers.",
                  thumbnail: "/images/cases/wellness-thumb.webp",
                },
              ]}
            />
          </div>
        </section>

        {/* 🏛️ [PRICING_PLANS]: Strategic Investment */}
        <section className="py-32 border-y border-border/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                Strategic <span className="italic text-primary/40">Investment.</span>
              </h2>
              <p className="text-muted-foreground font-light">
                ราคากลางมาตรฐานปี 2026 สำหรับการยกระดับโครงสร้างพื้นฐานดิจิทัล
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="authority-card border-border/40 bg-muted/5 p-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 block">
                  Phase 1.
                </span>
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tighter">
                  Startup Node.
                </h3>
                <div className="text-5xl font-black mb-8">
                  25k<span className="text-sm font-normal text-muted-foreground ml-2">THB+</span>
                </div>
                <ul className="space-y-4 mb-12 text-sm text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Landing Page Optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Next.js 16 Performance
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Basic Schema SEO
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={SHARED_SITE_CONFIG.links.line}>Start Building</Link>
                </Button>
              </div>

              <div className="authority-card border-secondary/50 bg-secondary/5 p-12 relative scale-105 z-20">
                <div className="absolute top-0 right-12 translate-y-[-50%] px-4 py-1 bg-secondary text-secondary-foreground text-[10px] font-black uppercase tracking-widest rounded-full">
                  Recommended.
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-6 block">
                  Phase 2.
                </span>
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tighter">
                  Corporate Hub.
                </h3>
                <div className="text-5xl font-black mb-8">
                  65k<span className="text-sm font-normal text-muted-foreground ml-2">THB+</span>
                </div>
                <ul className="space-y-4 mb-12 text-sm text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Multi-Page Architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> P-SEO (77 Province Nodes)
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Advanced Entity Linking
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Custom UI/UX Templates
                  </li>
                </ul>
                <Button
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  asChild
                >
                  <Link href={SHARED_SITE_CONFIG.links.line}>Scale Authority</Link>
                </Button>
              </div>

              <div className="authority-card border-border/40 bg-muted/5 p-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 block">
                  Phase 3.
                </span>
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tighter">E-com Elite.</h3>
                <div className="text-5xl font-black mb-8">
                  120k<span className="text-sm font-normal text-muted-foreground ml-2">THB+</span>
                </div>
                <ul className="space-y-4 mb-12 text-sm text-muted-foreground font-light">
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Headless Commerce Engine
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Liquid Glass Product UI
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap size={14} className="text-secondary" /> Advanced Analytics Integration
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href={SHARED_SITE_CONFIG.links.line}>Dominant Market</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 📝 [BLOG_SECTION]: Latest Intelligence Transmissions */}
        <React.Suspense
          fallback={
            <div className="py-32 container mx-auto px-6 opacity-20 animate-pulse">
              Loading Intelligence...
            </div>
          }
        >
          <RecentBlogSection />
        </React.Suspense>

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
