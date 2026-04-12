/**
 * [PAGE]: PUBLIC_REGISTRY_HUB v4.1.1
 * [STRATEGY]: Next.js 16 PPR Optimized | Complete Suspense Wrapper
 */

import React, { Suspense } from "react";
import { AREA_NODES } from "@repo/core";
import { SectionHeader, StatusIndicator, UnlinkTrustBadge } from "@repo/ui";
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
    <div className="authority-card overflow-hidden p-0 border-none shadow-2xl bg-card">
      <div className="p-8 border-b border-border bg-muted/30 flex justify-between items-center">
        <h3 className="font-black uppercase tracking-widest text-xs flex items-center gap-2">
          <Globe size={14} className="text-primary" /> Active Nodes Registry
        </h3>
        <span className="text-[10px] font-mono text-muted-foreground">
          Entries: {provinces.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/10">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Node ID
              </th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Location
              </th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Status
              </th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((p) => (
              <tr
                key={p.slug}
                className="border-b border-border hover:bg-primary/5 transition-colors group"
              >
                <td className="p-6 font-mono text-[10px] font-bold text-primary group-hover:text-primary">
                  AEM-{p.slug.toUpperCase().slice(0, 8)}
                </td>
                <td className="p-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">{p.name_th}</span>
                    <span className="text-[9px] text-muted-foreground font-mono uppercase tracking-tighter">
                      {p.name_en}
                    </span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-success">
                      Verified
                    </span>
                  </div>
                </td>
                <td className="p-6">
                  <Link
                    href={`/verify/AEM-${p.slug.toUpperCase()}`}
                    className="p-2 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all inline-block"
                  >
                    <ArrowRight size={14} />
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
    <footer className="mt-40 pt-16 border-t border-border flex flex-col items-center gap-8 opacity-50">
      <UnlinkTrustBadge siteId="UNLINK-REGISTRY-NODE" />
      <p className="text-[9px] uppercase tracking-widest font-black text-primary">
        © {currentYear} Immutable Institutional Ledger v4.1.1
      </p>
    </footer>
  );
}

export default function RegistryPage() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary bg-background">
      <nav className="p-6 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <Database className="text-primary" size={24} />
          <span className="font-black uppercase tracking-[0.3em] text-[10px]">
            Unlink Public Registry
          </span>
        </Link>
        <div className="flex gap-4">
          <StatusIndicator status="OPERATIONAL" label="LEDGER_ACTIVE" />
        </div>
      </nav>

      <div className="container-authority section-spacing">
        <header className="mb-24 max-w-4xl">
          <SectionHeader
            badge="Institutional Data Hub"
            title="Digital Authority Ledger."
            description="ฐานข้อมูลกลางที่รวบรวมบันทึกอัตลักษณ์ สินทรัพย์ดิจิทัล และผลลัพธ์การตรวจสอบความถูกต้องทั่วประเทศไทย ภายใต้มาตรฐาน UNLINK-GLOBAL"
          />

          <div className="max-w-2xl p-2 bg-card border border-border rounded-full flex items-center gap-4 group hover:border-primary/30 transition-all shadow-sm">
            <div className="pl-4">
              <Search
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </div>
            <input
              type="text"
              placeholder="Filter by Site ID, Province or Case Name..."
              className="bg-transparent border-none outline-none w-full text-foreground font-mono text-xs placeholder:text-muted-foreground/50"
            />
          </div>
        </header>

        <section className="mb-40">
          <Suspense
            fallback={<div className="h-96 w-full bg-muted/10 animate-pulse rounded-[2rem]" />}
          >
            <RegistryContent />
          </Suspense>
        </section>

        <Suspense fallback={<div className="h-20" />}>
          <DynamicFooter />
        </Suspense>
      </div>
    </main>
  );
}
