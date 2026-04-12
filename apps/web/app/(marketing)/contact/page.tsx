import React from "react";
import { GlassCard } from "@repo/ui";
import { Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Transmission | Contact AEM",
  description: "ติดต่อ Chief Architect เพื่อเริ่มต้นการปรับโครงสร้างพื้นฐานดิจิทัลของคุณ",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <header className="mb-24 text-center">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
            Secure <br /> <span className="text-primary italic">Transmission.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            "เริ่มต้นการเชื่อมโยงข้อมูลและยกระดับอำนาจทางดิจิทัลของคุณ"
          </p>
        </header>

        <GlassCard className="p-12 md:p-20 border-white/10 bg-white/[0.01]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">
                  Direct Signal
                </h3>
                <p className="text-2xl font-bold text-white mb-2">architect@aem.dev</p>
                <p className="text-sm text-white/30 italic">Encrypted Connection Ready</p>
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">
                  Social Nodes
                </h3>
                <div className="flex gap-6">
                  {["Line", "Facebook", "LinkedIn"].map((node) => (
                    <span
                      key={node}
                      className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-10 border border-white/5 bg-white/5 rounded-3xl text-center">
              <Send size={48} className="text-primary mb-6 animate-pulse" />
              <p className="text-lg font-bold text-white mb-4">Ready to Initialize?</p>
              <button className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
                Establish Link
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </main>
  );
}
