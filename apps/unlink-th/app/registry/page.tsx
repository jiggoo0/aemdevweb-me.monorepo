/**
 * [PAGE]: PUBLIC_REGISTRY_HUB v4.1.1
 * [STRATEGY]: Next.js 16 PPR Optimized | Complete Suspense Wrapper
 */

import React, { Suspense } from "react";
import { AREA_NODES } from "@repo/core";
import { StatusIndicator, UnlinkTrustBadge } from "@repo/ui";
import { Database, Search, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { connection } from "next/server";
import { cacheLife } from "next/cache";

// 🏛️ [ASYNC_COMPONENT]: Registry Content with Caching
async function RegistryContent() {
  "use cache";
  cacheLife("days");
  const provinces = AREA_NODES;

  return (
    <div className="glass-registry overflow-hidden p-0 rounded-[3rem] shadow-2xl relative group">
      {/* Glow Effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000" />

      <div className="p-10 border-b border-white/5 bg-white/[0.02] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div>
          <h3 className="font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3 text-primary mb-2">
            <Globe size={14} /> Active Network Nodes
          </h3>
          <p className="text-2xl font-black uppercase tracking-tighter text-white">
            Institutional Registry <span className="text-white/20">Explorer.</span>
          </p>
        </div>
        <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">
              Total_Entries
            </span>
            <span className="text-xl font-mono font-black text-white">
              {provinces.length.toString().padStart(3, "0")}
            </span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <StatusIndicator status="OPERATIONAL" label="SYNC_ACTIVE" />
        </div>
      </div>

      <div className="overflow-x-auto relative z-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                Protocol_ID
              </th>
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                Geographic_Node
              </th>
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                Security_Status
              </th>
              <th className="p-8 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 text-right">
                Access
              </th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((p) => (
              <tr
                key={p.slug}
                className="border-b border-white/5 hover:bg-white/[0.03] transition-all duration-300 group/row"
              >
                <td className="p-8">
                  <span className="font-mono text-[10px] font-bold text-primary/60 group-hover/row:text-primary transition-colors">
                    AEM_NODE_{p.slug.toUpperCase().slice(0, 8)}
                  </span>
                </td>
                <td className="p-8">
                  <div className="flex flex-col gap-1">
                    <span className="font-black text-lg text-white group-hover/row:translate-x-1 transition-transform duration-500">
                      {p.name_th}
                    </span>
                    <span className="text-[9px] text-muted-foreground/40 font-mono uppercase tracking-widest">
                      TH.{p.name_en.toUpperCase().replace(" ", "_")}
                    </span>
                  </div>
                </td>
                <td className="p-8">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-success/5 border border-success/10 rounded-full">
                    <div className="h-1.5 w-1.5 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(var(--color-verify-success),0.5)]" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-success">
                      Verified
                    </span>
                  </div>
                </td>
                <td className="p-8 text-right">
                  <Link
                    href={`/verify/AEM-${p.slug.toUpperCase()}`}
                    className="w-12 h-12 inline-flex items-center justify-center bg-white/5 hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-500 group/btn border border-white/5"
                  >
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 🏛️ [ASYNC_COMPONENT]: Dynamic Footer to comply with PPR rules
async function DynamicFooter() {
  await connection();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-48 pt-20 border-t border-white/5 flex flex-col items-center gap-10">
      <div className="opacity-40 hover:opacity-100 transition-opacity duration-1000">
        <UnlinkTrustBadge siteId="UNLINK-TH-REGISTRY-V5" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black text-primary/40">
          Immutable Institutional Ledger <span className="text-primary">v5.0.0</span>
        </p>
        <p className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-widest">
          © {currentYear} UNLINK THAILAND | ENCRYPTED PROTOCOL ACTIVE
        </p>
      </div>
    </footer>
  );
}

export default function RegistryPage() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary bg-background overflow-hidden relative">
      {/* Atmospheric Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-950/40 backdrop-blur-2xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-6 group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-all">
            <Database className="text-primary" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-black uppercase tracking-[0.4em] text-[10px] text-white">
              Unlink Registry
            </span>
            <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">
              Central_Database
            </span>
          </div>
        </Link>
        <div className="hidden md:flex gap-6">
          <StatusIndicator status="OPERATIONAL" label="LEDGER_CONSENSUS_OK" />
          <StatusIndicator status="SECURE" label="ENCRYPTION_V2" />
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <header className="mb-32 max-w-5xl">
          <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-primary">
              Digital Infrastructure Registry
            </span>
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Institutional <br /> <span className="text-white/20">Data Ledger.</span>
          </h1>
          
          <div className="max-w-3xl p-1.5 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-4 group focus-within:border-primary/30 focus-within:bg-white/[0.08] transition-all duration-500">
            <div className="pl-6 text-muted-foreground/40 group-focus-within:text-primary transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="FILTER_BY_NODE_ID, PROVINCE_NAME OR ENTITY_HASH..."
              className="bg-transparent border-none outline-none w-full h-16 text-white font-mono text-xs placeholder:text-muted-foreground/20 uppercase tracking-[0.2em]"
            />
          </div>
        </header>

        <section className="mb-60">
          <Suspense
            fallback={
              <div className="h-[600px] w-full bg-white/5 animate-pulse rounded-[3rem] border border-white/5" />
            }
          >
            <RegistryContent />
          </Suspense>
        </section>

        <Suspense fallback={<div className="h-40" />}>
          <DynamicFooter />
        </Suspense>
      </div>
    </main>
  );
}
