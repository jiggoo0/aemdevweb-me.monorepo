"use client";

import { LoginForm, StatusIndicator } from "@repo/ui";
import { ShieldCheck, Lock, Terminal, Fingerprint } from "lucide-react";
import Link from "next/link";

/**
 * [PAGE]: UNLINK TERMINAL LOGIN v5.0.0
 * [STRATEGY]: Cyber-Authority Identity Access | Cinematic Entry
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 selection:bg-primary/30 relative overflow-hidden">
      {/* 🌌 [ATMOSPHERIC_DECOR]: Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Animated Scan Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line z-20" />

      <div className="w-full max-w-xl relative z-10 flex flex-col items-center">
        {/* Institutional Header */}
        <header className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 mb-8 group hover:border-primary/50 transition-all duration-700 shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShieldCheck
              size={48}
              className="text-primary group-hover:scale-110 transition-transform relative z-10"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              Identity <br /> <span className="text-white/20">Uplink.</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] font-mono">
                Terminal_Access
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
              <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] font-mono">
                v5.0.0_STABLE
              </span>
            </div>
          </div>
        </header>

        {/* Secure Entry Module */}
        <div className="w-full glass-registry p-12 rounded-[3.5rem] relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/10">
          {/* Decorative Security Indicators */}
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
            <Fingerprint size={80} />
          </div>
          <div className="absolute bottom-0 left-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity rotate-180">
            <Terminal size={80} />
          </div>

          <div className="relative z-10">
            <LoginForm />

            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Lock size={12} className="text-primary/40" />
                <p className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-black">
                  Institutional Cryptography Active
                </p>
              </div>
              <div className="flex gap-4">
                <StatusIndicator status="SECURE" label="AES_256" />
                <StatusIndicator status="OPERATIONAL" label="AEM_NETWORK" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Actions */}
        <footer className="mt-16 text-center animate-in fade-in duration-1000 delay-500">
          <Link
            href="/"
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/30 hover:text-white transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
              <Terminal size={14} />
            </div>
            Abort Access / Return to Registry
          </Link>
        </footer>
      </div>
    </main>
  );
}
