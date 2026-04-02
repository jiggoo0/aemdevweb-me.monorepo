/** @format */

import { supabase } from "@/lib/supabase";
import { Identity } from "@/lib/shared-source/types";
import {
  CheckCircle2,
  Globe,
  Fingerprint,
  Activity,
  ShieldCheck,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getIdentity(id: string): Promise<Identity | null> {
  const { data, error } = await supabase
    .from("identities")
    .select("*")
    .eq("id", id.toUpperCase())
    .single();

  if (error || !data) return null;
  return data as unknown as Identity;
}

export default async function VerifyPersonPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getIdentity(id);

  if (!data || data.type !== "person") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <AlertTriangle className="w-12 h-12 text-slate-700 mb-4" />
        <h1 className="text-xl font-bold uppercase tracking-tight">
          Registry Entry Not Found
        </h1>
        <p className="text-slate-500 mt-2 max-w-xs text-xs">
          The identifier {id.toUpperCase()} is not registered in this node.
        </p>
        <Link
          href="/verify"
          className="mt-8 text-emerald-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Registry
        </Link>
      </div>
    );
  }

  const lastChecked = new Date(data.last_checked).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link
          href="/verify"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Registry
        </Link>

        {/* 📑 OFFICIAL ACCREDITATION RECORD */}
        <div className="lab-card overflow-hidden border-white/5">
          {/* Header */}
          <div className="bg-white/5 px-10 py-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
                Accreditation ID
              </p>
              <h2 className="text-2xl font-black text-white font-mono uppercase tracking-tighter">
                REG-IDN-{data.id}
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span className="text-emerald-500 font-black text-sm uppercase tracking-widest">
                Certified & Active
              </span>
            </div>
          </div>

          <div className="p-10 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-emerald-500">
                    <Fingerprint className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      Institutional Profile
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                    {data.name}
                  </h3>
                  <div className="inline-flex px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-xl text-xs font-bold uppercase tracking-tight italic">
                    {data.expertise}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                    Record Biography
                  </h4>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    {data.bio}
                  </p>
                </div>

                {/* Audit Matrix */}
                <div className="pt-10">
                  <h4 className="text-[10px] text-white font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    Registry Audit Matrix
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Data Source", value: "Vifily Trust Node" },
                      { label: "Validation", value: "Verified Identity" },
                      {
                        label: "Trust Level",
                        value: `Tier-${data.trust_level} Authority`,
                        highlight: true,
                      },
                      { label: "Last Sync", value: lastChecked },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="p-5 rounded-2xl bg-white/5 border border-white/5"
                      >
                        <p className="text-[9px] text-slate-500 uppercase font-black tracking-tighter mb-1">
                          {item.label}
                        </p>
                        <p
                          className={`text-[11px] font-bold ${item.highlight ? "text-emerald-500" : "text-slate-300"}`}
                        >
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Compliance */}
              <div className="lg:col-span-5">
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 space-y-8 sticky top-32">
                  <div className="space-y-2 text-center">
                    <ShieldCheck className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h4 className="text-xs font-black uppercase tracking-widest text-white">
                      Compliance Standard
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-center font-medium">
                    This identity has been verified through multi-layer document
                    audit and biometric confirmation within the UNLINK-GLOBAL
                    ecosystem.
                  </p>
                  <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      <span>Authority</span>
                      <span className="text-emerald-500">Validated</span>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      <span>Node Status</span>
                      <span className="text-emerald-500">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4 grayscale opacity-30">
            <div className="w-8 h-8 rounded-lg bg-slate-200" />
            <div className="w-8 h-8 rounded-lg bg-slate-200" />
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
              Vifily Network Partner
            </span>
          </div>
          <p className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.2em]">
            Official Public Record • All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}
