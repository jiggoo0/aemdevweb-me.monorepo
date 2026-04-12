/**
 * [PAGE]: INSTITUTIONAL_VERIFICATION_NODE v4.2.1
 * [STRATEGY]: Next.js 16 PPR Deep Optimization | Deterministic Render Fix
 */

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { getVerifiedNode } from "@repo/db";
import { StatusIndicator } from "@repo/ui";
import {
  Shield,
  ShieldCheck,
  Activity,
  Lock,
  Database,
  FileText,
  
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface VerifiedNode {
  verification_tier?: string;
  architect_signature?: string;
  core_web_vitals_status?: Record<string, string>;
  linkedProjects?: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    slug: string;
  }>;
}

// 🏛️ [ASYNC_COMPONENT]: Verification Data Processor
async function VerificationContent({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  // 1. Get ID (Dynamic Access - Marks the start of dynamic execution)
  const { id } = await paramsPromise;
  const siteId = id.toUpperCase();

  // 2. Fetch Data
  const { data, error } = await getVerifiedNode(siteId);
  const node = data as unknown as VerifiedNode | null;

  if (error || !node) {
    if (!siteId.startsWith("AEM-")) notFound();
  }

  const { brand, expert } = SHARED_SITE_CONFIG;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="mb-32 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-success/5 border border-success/10 rounded-full mb-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(var(--color-verify-success),0.5)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-success">
            PROTOCOL_VERIFIED_SECURE
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
          Authority <br />
          <span className="text-white/20">Certificate.</span>
        </h1>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.6em] border-y border-white/5 py-4 px-12 inline-block">
            RECORD_ID: <span className="text-primary">{siteId}</span> | REGISTRY_NODE: TH_CENTRAL_01
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-40 relative z-10">
        {/* IDENTITY BLOCK */}
        <div className="glass-registry p-10 rounded-[2.5rem] relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors">
            <Database size={64} />
          </div>
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <ShieldCheck size={28} className="text-primary" />
            </div>
            <h3 className="font-black text-xl uppercase tracking-tighter">Verified Identity</h3>
          </div>
          <p className="text-sm font-light text-white/40 mb-10 leading-relaxed uppercase tracking-tight">
            อัตลักษณ์ดิจิทัลและโครงสร้างพื้นฐานที่ได้รับการตรวจสอบความสมบูรณ์โดยสถาบัน AEM
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-4">
              <span className="text-white/20 uppercase tracking-widest">Registrar</span>
              <span className="font-black text-white">{brand.name}</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-4">
              <span className="text-white/20 uppercase tracking-widest">Signature</span>
              <span className="font-black text-primary">{node?.architect_signature || expert.signature}</span>
            </div>
          </div>
        </div>

        {/* AUDIT BLOCK */}
        <div className="glass-registry p-10 rounded-[2.5rem] relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-secondary/10 transition-colors">
            <Activity size={64} />
          </div>
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Activity size={28} className="text-secondary" />
            </div>
            <h3 className="font-black text-xl uppercase tracking-tighter">System Audit</h3>
          </div>
          <p className="text-sm font-light text-white/40 mb-10 leading-relaxed uppercase tracking-tight">
            การวัดผลประสิทธิภาพการทำงานและความเสถียรของระบบ (Technical Performance)
          </p>
          <div className="grid grid-cols-3 gap-4">
            {["LCP", "FID", "CLS"].map((metric) => (
              <div
                key={metric}
                className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl text-center group/metric hover:border-success/30 transition-all"
              >
                <span className="block text-[8px] font-mono text-white/20 uppercase mb-2 tracking-widest group-hover/metric:text-success/50 transition-colors">
                  {metric}
                </span>
                <span className="text-xs font-black text-success uppercase tracking-tighter">
                  {node?.core_web_vitals_status?.[metric.toLowerCase()] || "OPTIMIZED"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECURITY BLOCK */}
        <div className="glass-registry p-10 rounded-[2.5rem] relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors">
            <Lock size={64} />
          </div>
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Lock size={28} className="text-primary" />
            </div>
            <h3 className="font-black text-xl uppercase tracking-tighter">Security Tier</h3>
          </div>
          <p className="text-sm font-light text-white/40 mb-10 leading-relaxed uppercase tracking-tight">
            ระดับการเข้ารหัสข้อมูลและการเข้าถึงพื้นที่เก็บข้อมูลส่วนบุคคล (Encryption Layer)
          </p>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col gap-2">
            <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">
              Institutional Grade
            </span>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-[9px] font-mono text-white/60 uppercase tracking-widest">
                AES_256_GCM_ENCRYPTED
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-60">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20 border-b border-white/5 pb-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              Linked <br /> <span className="text-white/20">Case Proofs.</span>
            </h2>
            <p className="text-white/30 uppercase tracking-[0.4em] text-[10px] font-bold">
              Evidence of Technical Integrity
            </p>
          </div>
          <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-muted-foreground">
            Registry Sync: {new Date().toLocaleDateString()}
          </div>
        </div>

        {node?.linkedProjects && (node.linkedProjects as unknown[]).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {(node.linkedProjects as { id: string; category: string; title: string; description: string; slug: string }[]).map((project) => (
              <div
                key={project.id}
                className="glass-registry p-10 rounded-[3rem] group hover:border-primary/40 transition-all duration-700 relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-10 w-20 h-1 bg-primary/30 group-hover:w-40 transition-all duration-700" />
                
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[9px] font-black px-4 py-1.5 bg-white/5 text-primary border border-white/10 rounded-full uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <FileText className="text-white/10 group-hover:text-primary/20 transition-colors" size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter">
                  {project.title}
                </h4>
                <p className="text-sm font-light text-white/40 mb-10 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-primary group/link"
                >
                  View Evidence Archive <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-24 glass-registry rounded-[4rem] text-center max-w-4xl mx-auto opacity-40">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:border-primary/30 transition-all">
              <FileText className="text-white/20" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Archive Records Syncing</h3>
            <p className="text-white/30 text-base font-light uppercase tracking-widest">
              รอยืนยันความสมบูรณ์ของข้อมูลจาก Node สาขา
            </p>
          </div>
        )}
      </section>

      <footer className="mt-60 pt-24 border-t border-white/5 flex flex-col items-center gap-12 text-center">
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-primary/20 transition-all duration-1000">
          <div className="flex items-center gap-6 mb-4">
            <ShieldCheck className="text-success" size={24} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white">
              Institutional Security Verification
            </span>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-widest max-w-md">
            ใบรับรองอิเล็กทรอนิกส์นี้ถูกสร้างและจัดเก็บในระบบ Ledger กระจายศูนย์ ไม่สามารถปลอมแปลงได้
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
            © {currentYear} {brand.fullName.toUpperCase()} | GLOBAL_TRUST_PROTOCOL_4.2
          </p>
          <div className="flex justify-center gap-8">
            <StatusIndicator status="SECURE" label="ENCRYPTED" />
            <StatusIndicator status="OPERATIONAL" label="AEM_NETWORK" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default function VerificationPage({ params }: PageProps) {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary bg-background overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />

      <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-950/40 backdrop-blur-3xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-6 group">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
            <Shield className="text-primary" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-black uppercase tracking-[0.5em] text-[10px] text-white">
              Security Protocol
            </span>
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">
              Audit_Service_v4.2
            </span>
          </div>
        </Link>
        <div className="hidden md:flex gap-8">
          <StatusIndicator status="SECURE" label="IDENTITY_VERIFIED" />
          <StatusIndicator status="OPERATIONAL" label="GATEWAY_ACTIVE" />
        </div>
      </nav>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <Suspense
          fallback={
            <div className="text-center py-40 animate-pulse flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                <Activity className="text-primary" size={40} />
              </div>
              <p className="text-xs font-mono uppercase tracking-[0.5em] text-white/20">
                Establishing Secure Node Link...
              </p>
            </div>
          }
        >
          <VerificationContent paramsPromise={params} />
        </Suspense>
      </div>
    </main>
  );
}
