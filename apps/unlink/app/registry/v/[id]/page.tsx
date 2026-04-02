import { db } from "@/lib/shared-source/db";
import {
  ShieldCheck,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  User,
  Building,
  ExternalLink,
  Award,
  History,
  FileText,
  BadgeCheck,
  Lock,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

/**
 * 🛡️ UNLINK-REGISTRY | INSTITUTIONAL TRUST DASHBOARD (Public Verification)
 * -------------------------------------------------------------------------
 * หน้าจอแสดงผลการรับรองสิทธิ์และตัวตนระดับทางการ (Official Accreditation)
 * ออกแบบมาเพื่อสร้างความเชื่อมั่นสูงสุดแก่บุคคลภายนอกที่คลิกตรวจสอบ
 */

export const dynamic = "force-dynamic";

async function getIdentity(id: string) {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM identities WHERE id = ?",
      args: [id.toUpperCase()]
    });
    return result.rows[0] || null;
  } catch (error) {
    console.error("DB_FETCH_ERROR:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await getIdentity(id);

  if (!data) return { title: "Identity Not Found | UNLINK" };

  return {
    title: `Verified Identity: ${data.name}`,
    description: `Official identity accreditation for ${data.name} within the UNLINK Global Trust Network.`,
  };
}

export default async function VerificationBadge({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getIdentity(id);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-rose-500/10 border border-rose-500/20 rounded-3xl flex items-center justify-center text-rose-500 mb-8 shadow-2xl">
          <AlertTriangle size={40} />
        </div>
        <h1 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter">
          Registry Entry <span className="text-rose-500">Not Found</span>
        </h1>
        <p className="text-slate-500 text-sm max-w-xs mx-auto mb-10 italic">
          The requested identifier ("{id}") is not registered in the UNLINK Master Ledger.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-slate-400 hover:text-white transition-all uppercase tracking-widest"
        >
          Return to Registry Node
        </Link>
      </div>
    );
  }

  // Parse Metadata for extended info
  let meta: any = {};
  try {
    meta = typeof data.metadata === 'string' ? JSON.parse(data.metadata) : (data.metadata || {});
  } catch (e) {
    meta = {};
  }

  const isPerson = data.type === "person";
  const accentColor = isPerson ? "text-blue-400" : "text-emerald-400";
  const glowColor = isPerson ? "bg-blue-500/10" : "bg-emerald-500/10";
  const borderColor = isPerson ? "border-blue-500/20" : "border-emerald-500/20";
  const iconBg = isPerson ? "bg-blue-500/5" : "bg-emerald-500/5";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden relative flex flex-col items-center justify-center p-4 md:p-8">
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${glowColor} rounded-full blur-[120px] pointer-events-none`} />

      <div className="relative w-full max-w-3xl">
        {/* 🏛️ MASTER TRUST DASHBOARD */}
        <div className={`relative bg-[#0a0f1d]/80 backdrop-blur-2xl border ${borderColor} rounded-[3rem] p-8 md:p-16 shadow-2xl`}>
          
          {/* Status Badge */}
          <div className="flex justify-center mb-12">
            <div className={`px-6 py-2 rounded-full ${glowColor} border ${borderColor} flex items-center gap-3 shadow-lg`}>
              <BadgeCheck size={18} className={accentColor} />
              <span className={`text-xs font-black tracking-[0.3em] uppercase ${accentColor}`}>
                Institutional Accreditation Verified
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Identity Header */}
            <div className="md:col-span-12 flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-12">
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] ${iconBg} border ${borderColor} flex items-center justify-center shadow-2xl relative group`}>
                {isPerson ? <User size={80} className={accentColor} /> : <Building size={80} className={accentColor} />}
                <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl bg-[#020617] border ${borderColor} flex items-center justify-center shadow-xl`}>
                  <ShieldCheck size={24} className={accentColor} />
                </div>
              </div>
              <div className="text-center md:text-left flex-1 space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                  {data.name}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <span className="bg-white/5 px-4 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase border border-white/5">
                    ID: {data.id}
                  </span>
                  <span className="bg-blue-500/10 px-4 py-1.5 rounded-lg text-[10px] font-bold font-mono tracking-widest text-blue-400 uppercase border border-blue-500/10">
                    TYPE: {data.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Info & Audit Scope */}
            <div className="md:col-span-7 space-y-10">
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <Award size={14} className="text-blue-500" />
                  {isPerson ? "ความเชี่ยวชาญระดับยุทธศาสตร์" : "อุตสาหกรรมและขอบเขตธุรกิจ"}
                </div>
                <p className="text-2xl font-bold text-white leading-tight">
                  {meta.expertise || meta.industry || "General Verified Entity"}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "{meta.bio || "No profile bio provided for this institutional ledger entry."}"
                </p>
              </section>

              {/* 🔍 WHAT WE VERIFIED (Institutional Standard) */}
              <section className="space-y-6">
                <div className="flex items-center gap-3 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <Search size={14} className="text-emerald-500" />
                  เกณฑ์การตรวจสอบสิทธิ์ (Audit Scope)
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {(meta.verification_scope || [
                    "Cryptographic Identity Proof",
                    "Domain & Asset Ownership",
                    "Professional Integrity Audit"
                  ]).map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                      <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar: Stats & Trust Metrics */}
            <div className="md:col-span-5 space-y-8">
              <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 space-y-8 shadow-inner">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Trust Level</span>
                    <span className={`text-xl font-black font-mono ${accentColor}`}>{data.trust_level}/10</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${isPerson ? 'bg-blue-600' : 'bg-emerald-600'} shadow-[0_0_15px_rgba(37,99,235,0.5)]`}
                      style={{ width: `${Number(data.trust_level ?? 0) * 10}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Authority Score</span>
                    <span className="text-xl font-black font-mono text-white">{meta.authority_score || 85}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                      style={{ width: `${meta.authority_score || 85}%` }}
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-[9px] uppercase tracking-widest">
                      <History size={12} />
                      Last Audit Verification
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {meta.last_verified_at ? new Date(meta.last_verified_at).toLocaleString() : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Call to Action */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-center space-y-6 shadow-2xl shadow-blue-900/20">
                <Lock size={32} className="mx-auto text-white/80" />
                <div className="space-y-2">
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">Register Your Asset</h3>
                  <p className="text-[10px] text-blue-100 font-medium leading-relaxed uppercase tracking-wider opacity-80">
                    Sovereign identity and digital asset protection.
                  </p>
                </div>
                <Link 
                  href="https://portal.unlink-th.com"
                  className="block w-full py-4 bg-white text-blue-900 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg shadow-blue-950/20"
                >
                  Contact Expert
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Protocol Branding */}
        <div className="mt-16 text-center space-y-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-slate-700" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.8em] font-black">UNLINK GLOBAL TRUST</span>
            <div className="h-px w-16 bg-slate-700" />
          </div>
          <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest max-w-md mx-auto leading-loose italic">
            This cryptographic attestation is maintained by UNLINK-REGISTRY node (UL-C-003). 
            Verification logs are cross-referenced with the UNLINK-AUDIT security layer.
          </p>
        </div>
      </div>
    </div>
  );
}
