/**
 * [PAGE]: UNLINK-TH | INSTITUTIONAL PORTAL v4.1.0
 * [STRATEGY]: High-Trust | Verification-Centric | Next.js 16 PPR Optimized
 */

import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { StatusIndicator, ServiceCard } from "@repo/ui";
import { Shield, Activity, Database, ShieldCheck, Lock } from "lucide-react";
import { SearchSection } from "./components/SearchSection";
import { cacheLife } from "next/cache";

// 🚀 [CACHED_COMPONENT]: Institutional Shell
async function InstitutionalShell() {
  "use cache";
  cacheLife("days"); // ข้อมูลสถาบันเปลี่ยนไม่บ่อย ให้ Cache ไว้นานระดับวัน

  const { brand, expert } = SHARED_SITE_CONFIG;

  const institutionalServices = [
    {
      title: "Public Registry",
      desc: "ฐานข้อมูลสถาบันสำหรับการตรวจสอบสิทธิ์และสินทรัพย์ดิจิทัลที่ได้รับการยืนยันแล้ว",
      icon: <Database className="text-primary" />,
      href: "/registry",
    },
    {
      title: "Reputation Audit",
      desc: "ระบบวิเคราะห์ร่องรอยดิจิทัลและการประเมินความเสี่ยงอัตลักษณ์ระดับสูง",
      icon: <ShieldCheck className="text-primary" />,
      href: "/audit",
    },
    {
      title: "Compliance Node",
      desc: "การตรวจสอบความสอดคล้องตามมาตรฐาน PDPA และระเบียบปฏิบัติสากล",
      icon: <Lock className="text-primary" />,
      href: "/compliance",
    },
  ];

  return (
    <>
      <header className="mb-32 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-8">
          <Activity size={12} className="text-primary" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
            Accreditation Authority v4.1.0 (PPR Enabled)
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
          Synchronizing <br />
          <span className="text-primary italic">Intelligence.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          สถาบันจัดการสิทธิ์และตัวตนดิจิทัลระดับโครงสร้างพื้นฐาน
          มอบอำนาจการยืนยันและความโปร่งใสสูงสุดผ่านระบบนิเวศ UNLINK
        </p>

        {/* 🔍 Client-side Search Section */}
        <SearchSection />
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border mb-32">
        {[
          { label: "Data Encryption", value: "AES-256 SECURE" },
          { label: "Privacy Protocol", value: "PDPA COMPLIANT" },
          { label: "Case Handling", value: "NON-DISCLOSURE" },
          { label: "Operation", value: "24/7 ACTIVE" },
        ].map((signal) => (
          <div
            key={signal.label}
            className="flex flex-col gap-1 items-center md:items-start text-center md:text-left"
          >
            <span className="text-[8px] font-mono tracking-widest text-muted-foreground uppercase">
              {signal.label}
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">
              {signal.value}
            </span>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-40">
        {institutionalServices.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            description={s.desc}
            icon={s.icon}
            href={s.href}
          />
        ))}
      </section>

      <footer className="mt-40 pt-16 border-t border-border text-center">
        <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
          © {brand.established} {brand.fullName} | Architecture by {expert.displayName}
        </p>
        <div className="flex justify-center gap-10 text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground/30">
          <span>Secure Protocol</span>
          <span className="text-primary">•</span>
          <span>Identity Hub</span>
          <span className="text-primary">•</span>
          <span>AES-256 Verified</span>
        </div>
      </footer>
    </>
  );
}

export default function UnlinkPortalHome() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <nav className="p-6 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Shield className="text-primary" size={24} />
          <span className="font-black uppercase tracking-[0.3em] text-[10px]">
            Unlink Thailand Authority
          </span>
        </div>
        <div className="flex gap-4">
          <StatusIndicator status="OPERATIONAL" label="SECURE PROTOCOL" />
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24">
        <InstitutionalShell />
      </div>
    </main>
  );
}
