import React from "react";
import Link from "next/link";
import { Terminal, Cpu, Globe, Share2 } from "lucide-react";
import { SHARED_SITE_CONFIG } from "@repo/core";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-6 py-8 pointer-events-none">
      <div className="container max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
            <Terminal size={20} className="text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-tighter leading-none text-white">
              AEMZA MACKS
            </span>
            <span className="text-[9px] font-bold text-primary tracking-[0.2em] uppercase leading-none mt-1">
              Chief Architect
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 px-8 py-3 rounded-2xl shadow-2xl">
          {[
            { label: "Systems", href: "/projects" },
            { label: "Intelligence", href: "/blog" },
            { label: "Business Hub", href: SHARED_SITE_CONFIG.links.site },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={SHARED_SITE_CONFIG.links.line}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
        >
          Initialize Sync <Share2 size={12} />
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/5 bg-[#020202]">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-white">
              Infrastructure is <span className="text-primary italic">Destiny.</span>
            </h3>
            <p className="text-sm font-light text-white/30 max-w-md leading-relaxed mb-8">
              ผู้ออกแบบและวางรากฐานโครงสร้างพื้นฐานดิจิทัลระดับสถาบัน เน้นความน่าเชื่อถือ
              ประสิทธิภาพ และความล้ำสมัยของเทคโนโลยีปี 2026
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
                <Cpu size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-8">
              Directives
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/projects"
                  className="text-xs text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  Architected Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-xs text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  Intelligence Hub
                </Link>
              </li>
              <li>
                <Link
                  href={SHARED_SITE_CONFIG.links.site}
                  className="text-xs text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  Business Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-8">
              Status
            </h4>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                  Protocol: Active
                </span>
              </div>
              <div className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">
                Syncing with AEM-GLOBAL-ENTRY v5.3
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5 opacity-20">
          <p className="text-[9px] font-mono uppercase tracking-[0.4em]">
            © 2026 AEMZA MACKS // STRATEGIC AUTHORITY
          </p>
          <div className="flex gap-8 text-[9px] font-mono uppercase tracking-[0.4em]">
            <span>Verified by UNLINK</span>
            <span>Enforced by Gemini CLI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
