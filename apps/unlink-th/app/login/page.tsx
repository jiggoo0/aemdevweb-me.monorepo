"use client";

import { LoginForm } from "@repo/ui";
import { ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

/**
 * [PAGE]: UNLINK TERMINAL LOGIN v2.0.0
 * [STRATEGY]: Cyber-Authority Identity Access
 */
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-blue-500/30">
      {/* Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 mb-6 group hover:border-blue-500/50 transition-all">
            <ShieldCheck
              size={40}
              className="text-blue-500 group-hover:scale-110 transition-transform"
            />
          </div>
          <h1 className="text-3xl font-black uppercase tracking-[0.2em] mb-2 leading-none">
            Unlink Terminal
          </h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-mono">
            Establish Secure Uplink
          </p>
        </header>

        <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Lock size={16} />
          </div>

          <LoginForm />

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              Institutional Access Only
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            Return to Public Registry
          </Link>
        </footer>
      </div>
    </main>
  );
}
