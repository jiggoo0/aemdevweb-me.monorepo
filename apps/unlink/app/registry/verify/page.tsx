/** @format */

import { supabase } from "@/lib/supabase";
import { Identity } from "@/lib/shared-source/types";
import { ShieldCheck, User, Briefcase, Globe } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vifily Trust Registry | Official Node",
  description:
    "Official public database for verified identities and organizations.",
};

export default async function VerifyRegistryPage() {
  const { data: identities, error } = await supabase
    .from("identities")
    .select("id, type, name, expertise, industry, trust_level")
    .order("id", { ascending: true });

  if (error) {
    console.error("[REGISTRY_ERROR]", error);
  }

  const persons = identities?.filter((i) => i.type === "person") || [];
  const companies = identities?.filter((i) => i.type === "organization") || [];

  return (
    <div className="min-h-screen py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Authority Header */}
        <header className="mb-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[10px] tracking-[0.3em] uppercase">
            <Globe className="w-3.5 h-3.5" />
            <span>Vifily Global Trust Node • Online</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900">
            Identity <span className="text-blue-600">Registry</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            ฐานข้อมูลกลางสำหรับการรับรองตัวตนและสถานะนิติบุคคลภายใต้มาตรฐานสูงสุด
            เพื่อความโปร่งใสในระบบนิเวศดิจิทัล
          </p>
        </header>

        <div className="space-y-24">
          {/* Organizations */}
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200">
              <Briefcase className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Accredited Organizations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <Link
                  key={company.id}
                  href={`/verify/c/${company.id.toLowerCase()}`}
                  className="group"
                >
                  <div className="lab-card p-8 h-full flex flex-col relative overflow-hidden bg-white border-slate-200 shadow-sm hover:shadow-xl transition-all">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <ShieldCheck className="w-20 h-20 text-amber-600" />
                    </div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
                        {company.id}
                      </span>
                      <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                        Level {company.trust_level}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 relative z-10 group-hover:text-blue-600 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium relative z-10">
                      {company.industry}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Professionals */}
          <section>
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200">
              <User className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Verified Professionals
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {persons.map((person) => (
                <Link
                  key={person.id}
                  href={`/verify/p/${person.id.toLowerCase()}`}
                  className="group"
                >
                  <div className="lab-card p-8 h-full flex flex-col relative overflow-hidden bg-white border-slate-200 shadow-sm hover:shadow-xl transition-all">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <User className="w-24 h-24 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg">
                        {person.id}
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">
                          Verified
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 relative z-10 group-hover:text-blue-600 transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium relative z-10 italic">
                      {person.expertise}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-40 pt-10 border-t border-slate-200 text-center">
          <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em]">
            Authorized by UNLINK-GLOBAL Strategic Intelligence Unit
          </p>
        </footer>
      </div>
    </div>
  );
}
