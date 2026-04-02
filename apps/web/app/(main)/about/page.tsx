/**
 * [ROUTE PAGE]: ABOUT_US v21.0.0 (IDENTITY_AUTHORITY_MAXIMIZED)
 * [STRATEGY]: High-Authority Positioning | Digital Strategist | E-E-A-T Optimized
 */

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

// --- 1. Infrastructure & Engines ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { CapabilityGraph } from "@/components/templates/sections/CapabilityGraph";
import { TrustEquation } from "@/components/templates/sections/TrustEquation";

import { SITE_CONFIG } from "@/constants/site-config";
import { ABOUT_CONTENT } from "@/constants/about";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/schema";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";

export const metadata: Metadata = {
  title: `สถาปนิกเว็บ ${ABOUT_CONTENT.founder.name} | Founder of ${SITE_CONFIG.brandName}`,
  description: `รู้จักกับ ${ABOUT_CONTENT.founder.name} (${ABOUT_CONTENT.founder.alias}) ผู้เชี่ยวชาญด้าน Modern Web Stack และ Technical SEO ผู้อยู่เบื้องหลังความสำเร็จของธุรกิจในยุค AI-First`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: วางตำแหน่งเป็นคู่คิดทางธุรกิจ */}
      <UniversalHero
        title={ABOUT_CONTENT.hero.title}
        subtitle={ABOUT_CONTENT.hero.subtitle}
        primaryActionLabel={ABOUT_CONTENT.cta.primaryLabel}
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel={ABOUT_CONTENT.cta.secondaryLabel}
        secondaryHref="/services"
        align="left"
      />

      {/* 02. FOUNDER IDENTITY: ตอกย้ำตัวตนและประวัติที่สะอาด (E-E-A-T) */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            {/* Visual Identity Profile Card */}
            <div className="mx-auto w-full max-w-[450px] lg:sticky lg:top-32 lg:mx-0">
              <div className="bg-surface-card border-border shadow-pro-xl rounded-card-lg relative flex flex-col overflow-hidden border backdrop-blur-3xl">
                {/* Profile Image Container */}
                <div className="bg-surface-offset relative aspect-square w-full overflow-hidden">
                  <Image
                    src={SITE_CONFIG.expert.avatar}
                    alt={ABOUT_CONTENT.founder.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Overlay info */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <p className="font-mono text-[9px] font-black tracking-[0.3em] text-white/60 uppercase">
                      Verified.Identity
                    </p>
                    <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic">
                      {ABOUT_CONTENT.founder.name}
                    </h3>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-6 p-6">
                  <div className="space-y-1">
                    <p className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
                      Current_Role
                    </p>
                    <p className="text-text-primary text-sm font-bold">
                      {ABOUT_CONTENT.founder.role}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
                      Experience
                    </p>
                    <p className="text-text-primary text-sm font-bold">
                      {ABOUT_CONTENT.founder.experience}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
                      Verified_Credentials
                    </p>
                    <ul className="space-y-2">
                      {ABOUT_CONTENT.founder.credentials.map((cred, i) => (
                        <li
                          key={i}
                          className="text-text-secondary flex items-start gap-2 text-xs font-medium italic"
                        >
                          <IconRenderer
                            name="CheckCircle2"
                            size={14}
                            className="shrink-0 text-green-500"
                          />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Verification Hub */}
                  <div className="border-border border-t pt-4">
                    <p className="text-text-muted mb-4 font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-60">
                      Digital_Signature
                    </p>
                    <div className="flex gap-4">
                      {ABOUT_CONTENT.socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-brand-primary transition-colors duration-300"
                          title={link.label}
                        >
                          <IconRenderer name={link.icon as IconName} size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Narrative & Vision */}
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5">
                  <IconRenderer name="Fingerprint" size={16} />
                  <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                    Core_Values_&_Integrity
                  </span>
                </div>
                <h2 className="text-text-primary text-5xl leading-tight font-black tracking-tighter uppercase italic md:text-7xl">
                  {ABOUT_CONTENT.vision.title.split(" ").slice(0, -1).join(" ")} <br />
                  <span className="from-brand-primary to-brand-secondary bg-gradient-to-r bg-clip-text text-transparent">
                    {ABOUT_CONTENT.vision.title.split(" ").slice(-1)}
                  </span>
                </h2>
                <div className="text-text-secondary max-w-2xl text-xl leading-relaxed font-medium italic opacity-90">
                  “{ABOUT_CONTENT.founder.bio}”
                </div>
              </div>

              <div className="border-border grid grid-cols-1 gap-6 border-t pt-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-brand-primary font-black tracking-widest uppercase italic">
                    Transparency.
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed italic">
                    ผมยึดมั่นในความโปร่งใส 100% ชื่อเสียงและการยอมรับในวงการคืองานของผม
                    ข้อมูลทุกอย่างที่ระบุที่นี่คือความจริงที่ตรวจสอบได้จาก Digital Footprint ทั่วโลก
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-brand-primary font-black tracking-widest uppercase italic">
                    Security.
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed italic">
                    ในฐานะ Specialist ผมให้ความสำคัญกับความปลอดภัยทางข้อมูลสูงสุด
                    ไม่มีการประนีประนอมในเรื่องมาตรฐานความปลอดภัยของระบบที่คุณไว้วางใจ
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {ABOUT_CONTENT.vision.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border-border bg-surface-card text-text-muted flex items-center gap-2 rounded-lg border px-4 py-2"
                  >
                    <IconRenderer name="Hash" size={12} className="text-brand-primary opacity-50" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CAPABILITY NODES: Visualize the Expertise */}
      <section className="bg-surface-offset/50 border-border border-y py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Technical <br /> <span className="text-brand-primary">Authority.</span>
              </h2>
              <p className="text-text-secondary max-w-xl text-lg leading-relaxed font-medium italic opacity-80">
                เราใช้ทักษะทางวิศวกรรมซอฟต์แวร์ระดับลึก เพื่อสร้างระบบที่ไม่ใช่แค่สวยงาม
                แต่คือโครงสร้างพื้นฐานที่แข็งแกร่งที่สุดสำหรับธุรกิจคุณ
              </p>
            </div>
            <CapabilityGraph
              skills={[
                { title: "Software Architecture", description: "", icon: "Layers" },
                { title: "SEO Engineering (GEO)", description: "", icon: "SearchCheck" },
                { title: "AI Agent Integration", description: "", icon: "BrainCircuit" },
                { title: "Zero-Jank UI/UX", description: "", icon: "Zap" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 04. CORE VALUES: มอบคุณค่าที่หาไม่ได้จากที่อื่น */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-20 text-center">
            <p className="text-brand-primary mb-4 font-mono text-[10px] font-black tracking-[0.5em] uppercase">
              Engineering_Standards
            </p>
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Why <span className="text-brand-primary">Work With Me?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_CONTENT.coreValues.map((feature, idx) => (
              <div
                key={feature.title}
                className="group hover:shadow-pro relative flex flex-col overflow-hidden rounded-[1.25rem] border border-[var(--border)] bg-[var(--surface-card)] p-10 transition-all duration-700 hover:-translate-y-2 hover:border-[var(--color-brand-primary)]/40"
              >
                <div className="group-hover:shadow-glow mb-10 flex h-16 w-16 items-center justify-center rounded-[1rem] border border-[var(--border)] bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary-fg)]">
                  <IconRenderer name={feature.icon as IconName} size={32} strokeWidth={2.5} />
                </div>
                <div className="relative z-10 space-y-4">
                  <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-40">
                    Standard_{idx.toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic">
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed font-medium text-[var(--text-secondary)] italic opacity-70">
                    “{feature.description}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. TRUST INFRASTRUCTURE */}
      <section className="border-border bg-surface-offset/30 border-y py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="sr-only">Professional Trust and Performance Metrics</h2>
          <p className="text-text-muted mb-12 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
            Industrial Standards & Excellence
          </p>
          <div className="flex flex-col items-center gap-y-16">
            <TrustBadge />
            <div className="w-full max-w-5xl">
              <TrustEquation />
            </div>
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 06. CALL TO ACTION */}
      <ConversionCTA
        title={ABOUT_CONTENT.cta.title}
        description={ABOUT_CONTENT.cta.description}
        buttonLabel={ABOUT_CONTENT.cta.primaryLabel}
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel={ABOUT_CONTENT.cta.secondaryLabel}
        secondaryHref="/case-studies"
      />
    </LayoutEngine>
  );
}
