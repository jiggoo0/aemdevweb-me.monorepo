import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import Link from "next/link";
import Image from "next/image";

/**
 * [COMPONENT]: Footer v4.1.0
 * [DESIGN]: Constitutional Glassmorphism | OKLCH Colors | High-Integrity Links
 */
export function Footer() {
  const { brand } = SHARED_SITE_CONFIG;

  return (
    <footer className="py-24 bg-[oklch(0.15_0.02_250)] text-white rounded-t-[5rem] mt-20 relative overflow-hidden border-t border-white/5">
      {/* 🌌 Design Layers */}
      <div className="absolute inset-0 tech-grid opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl flex items-center justify-center rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="/logo-icon.svg"
                  alt="AEM Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black uppercase tracking-[0.4em] text-sm text-white">
                  {brand.name}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Strategic Architect
                </span>
              </div>
            </div>
            <p className="text-xl font-light text-white/60 leading-relaxed max-w-sm">
              ออกแบบและสร้างโครงสร้างพื้นฐานดิจิทัลที่ขับเคลื่อนด้วยข้อมูลและความน่าเชื่อถือสูง
              เพื่อยกระดับธุรกิจของคุณสู่ระดับ Enterprise
            </p>
          </div>

          {/* Navigation Matrix */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-[10px] text-blue-400 border-l-2 border-blue-500 pl-3">
                Ecosystem
              </h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <li>
                  <Link href="/services" className="hover:text-white hover:pl-1 transition-all">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/area" className="hover:text-white hover:pl-1 transition-all">
                    Regional Hub
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white hover:pl-1 transition-all">
                    Registry
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black uppercase tracking-widest text-[10px] text-blue-400 border-l-2 border-blue-500 pl-3">
                Identity
              </h4>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                <li>
                  <Link href="/me" className="hover:text-white hover:pl-1 transition-all">
                    The Architect
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white hover:pl-1 transition-all">
                    Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white hover:pl-1 transition-all">
                    Inquiry
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6 hidden md:block">
              <h4 className="font-black uppercase tracking-widest text-[10px] text-blue-400 border-l-2 border-blue-500 pl-3">
                Integrity
              </h4>
              <div className="space-y-3">
                <p className="text-[9px] text-white/30 font-mono uppercase tracking-widest leading-loose">
                  RUNTIME: NODE_22_LTS
                  <br />
                  NEXT_16: PPR_READY
                  <br />
                  COLOR: OKLCH_GAMUT
                  <br />
                  STATUS: ENFORCED_BY_AI
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[8px] font-black text-blue-400 uppercase tracking-tighter">
                    Verified Verified Node
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Meta Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[9px] uppercase tracking-[0.5em] font-black text-white/30">
              © 2026 {brand.name} GROUP // STRATEGIC AUTHORITY
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] font-bold text-white/10">
              Enforced by Gemini CLI & AEMZA MACKS
            </p>
          </div>

          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
