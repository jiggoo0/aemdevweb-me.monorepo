/** @format */

import { supabase } from "@/lib/supabase";
import { Identity } from "@/lib/shared-source/types";
import {
  Building2,
  CheckCircle2,
  Globe,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  ArrowLeft,
  Users,
} from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getIdentity(id: string) {
  const { data, error } = await supabase
    .from("identities")
    .select(
      `
      *,
      key_person:identities!key_person_id(name)
    `,
    )
    .eq("id", id.toUpperCase())
    .eq("type", "organization")
    .single();

  if (error || !data) return null;
  return data;
}

export default async function VerifyCompanyPage({ params }: PageProps) {
  const { id } = await params;
  const data = await getIdentity(id);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <AlertTriangle className="w-12 h-12 text-slate-700 mb-4" />
        <h1 className="text-xl font-bold uppercase tracking-tight">
          Corporate Entry Not Found
        </h1>
        <p className="text-slate-500 mt-2 max-w-xs text-xs">
          The identifier {id.toUpperCase()} is not registered in this node.
        </p>
        <Link
          href="/verify"
          className="mt-8 text-amber-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
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
      <div className="max-w-5xl mx-auto space-y-12">
        <Link
          href="/verify"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Registry
        </Link>

        {/* 🏢 CORPORATE ACCREDITATION RECORD */}
        <div className="lab-card overflow-hidden border-white/5 bg-white/2">
          {/* Header Banner */}
          <div className="h-40 bg-slate-900 relative border-b border-white/5">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_50%,rgba(197,160,89,0.4),transparent)]" />
            <div className="absolute -bottom-12 left-12 w-24 h-24 lab-card flex items-center justify-center border-amber-500/20">
              <Building2 className="w-12 h-12 text-amber-500/50" />
            </div>
            <div className="absolute bottom-6 right-10 flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-5 py-2.5 rounded-xl backdrop-blur-xl">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em]">
                Institutional Accredited
              </span>
            </div>
          </div>

          <div className="pt-24 px-12 pb-16">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* CORE DATA */}
              <div className="flex-1 space-y-16">
                <div className="space-y-6">
                  <p className="text-[11px] text-amber-500 font-black uppercase tracking-[0.4em]">
                    Authorized Corporate Entity
                  </p>
                  <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                    {data.name}
                  </h2>
                  <p className="text-slate-400 text-lg font-light tracking-wide uppercase">
                    {data.industry}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
                    <h4 className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                      Executive Summary
                    </h4>
                    <p className="text-slate-300 text-base leading-relaxed font-medium italic">
                      {data.assets_summary}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {[
                      {
                        label: "Trust Indicator",
                        value: `Tier-${data.trust_level} Authority`,
                        icon: BarChart3,
                        color: "text-amber-500",
                      },
                      {
                        label: "Global Status",
                        value: "Fully Accredited",
                        icon: Globe,
                        color: "text-white",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-6 bg-white/2 border border-white/5 rounded-2xl"
                      >
                        <div className="flex items-center gap-4">
                          <item.icon className="w-4 h-4 text-slate-500" />
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                            {item.label}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-black uppercase ${item.color}`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* KEY PERSON LINK */}
                {data.key_person_id && (
                  <div className="lab-card p-10 group border-white/10 hover:border-amber-500/30">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/20 transition-all shadow-inner">
                          <Users className="w-7 h-7 text-slate-500 group-hover:text-amber-500" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">
                            Authenticated Principal
                          </p>
                          <p className="text-2xl font-black text-white tracking-tight">
                            {(data.key_person as any)?.name}
                          </p>
                        </div>
                      </div>
                      <Link
                        href={`/verify/p/${data.key_person_id.toLowerCase()}`}
                        className="px-8 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
                      >
                        Inspect Principal Profile
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* AUDIT PANEL */}
              <div className="lg:w-80 space-y-8">
                <div className="lab-card p-10 border-white/10 space-y-10 shadow-2xl">
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-3 text-white">
                      <ShieldCheck className="w-5 h-5 text-amber-500" />
                      Registry Protocol
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono tracking-widest">
                      ID: REG-CORP-{data.id}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">
                        Audit Stability
                      </p>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-amber-500 w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase font-mono">
                      <span className="text-slate-500">Last Checked</span>
                      <span className="text-white">{lastChecked}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                    This organization has undergone comprehensive due diligence
                    and institutional verification within the Vifily Global
                    Registry Network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5 flex justify-center">
          <p className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.3em]">
            Vifily Authority Node • Security Level Alpha
          </p>
        </footer>
      </div>
    </div>
  );
}
