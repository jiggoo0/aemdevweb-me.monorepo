import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import Link from "next/link";

export function Footer() {
  const { brand } = SHARED_SITE_CONFIG;

  return (
    <footer className="py-24 bg-foreground text-background rounded-t-[5rem] mt-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-[0.02]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-background flex items-center justify-center rounded-2xl">
                <span className="text-foreground font-black text-2xl tracking-tighter">A</span>
              </div>
              <span className="font-black uppercase tracking-[0.4em] text-sm">{brand.name}</span>
            </div>
            <p className="text-xl font-light opacity-60 leading-relaxed max-w-sm">
              เราสร้างโครงสร้างพื้นฐานดิจิทัลที่ขับเคลื่อนด้วยข้อมูลและความน่าเชื่อถือ
              เพื่อยกระดับธุรกิจของคุณสู่ระดับสากล
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-background">
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-[10px] opacity-40 border-l-2 border-primary pl-3">
                Ecosystem
              </h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/area" className="hover:text-primary transition-colors">
                    Network
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-primary transition-colors">
                    Registry
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-[10px] opacity-40 border-l-2 border-primary pl-3">
                Identity
              </h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li>
                  <Link href="/me" className="hover:text-primary transition-colors">
                    The Architect
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6 hidden md:block">
              <h4 className="font-black uppercase tracking-widest text-[10px] opacity-40 border-l-2 border-primary pl-3">
                Technical
              </h4>
              <div className="space-y-2">
                <p className="text-[9px] opacity-40 font-mono uppercase tracking-widest leading-loose">
                  NODE_24_RUNTIME: ACTIVE
                  <br />
                  NEXT_16_PPR: ENABLED
                  <br />
                  OKLCH_GAMUT: P3_VERIFIED
                  <br />
                  SECURE_LEDGER: AES_256
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] font-black opacity-30 text-center md:text-left">
            © 2026 {brand.name} GROUP // STRATEGIC AUTHORITY
          </p>
          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-20">
            <span>Identity Hub</span>
            <span className="text-background">•</span>
            <span>Data Core</span>
            <span className="text-background">•</span>
            <span>Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
