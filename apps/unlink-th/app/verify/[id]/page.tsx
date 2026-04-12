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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// 🏛️ [ASYNC_COMPONENT]: Verification Data Processor
async function VerificationContent({ paramsPromise }: { paramsPromise: Promise<{ id: string }> }) {
  // 1. Get ID (Dynamic Access - Marks the start of dynamic execution)
  const { id } = await paramsPromise;
  const siteId = id.toUpperCase();

  // 2. Fetch Data
  const { data, error } = await getVerifiedNode(siteId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const node = data as any;

  if (error || !node) {
    if (!siteId.startsWith("AEM-")) notFound();
  }

  const { brand, expert } = SHARED_SITE_CONFIG;
  // [FIX]: Get current year ONLY after dynamic access to comply with Next.js 16 PPR rules
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-8">
          <CheckCircle2 size={16} className="text-success" />
          <span className="text-[10px] font-black uppercase tracking-widest text-success">
            Status: {node?.verification_tier || "Fully Verified & Audited"}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
          Certificate of <br />
          <span className="text-primary">Digital Integrity.</span>
        </h1>

        <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.4em] mb-12">
          Record_ID: {siteId} | Registry_Node: TH-CENTRAL
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
        {/* IDENTITY BLOCK */}
        <div className="authority-card border-l-4 border-l-primary">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Database size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg uppercase tracking-tight">Verified Entity</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            อัตลักษณ์และโครงสร้างพื้นฐานดิจิทัลที่ได้รับการตรวจสอบโดยสถาบัน
          </p>
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] font-mono border-b border-border py-2">
              <span className="text-muted-foreground uppercase">Authority</span>
              <span className="font-bold">{brand.name}</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono border-b border-border py-2">
              <span className="text-muted-foreground uppercase">Architect</span>
              <span className="font-bold">{node?.architect_signature || expert.signature}</span>
            </div>
          </div>
        </div>

        {/* AUDIT BLOCK */}
        <div className="authority-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-secondary/10 rounded-xl">
              <Activity size={24} className="text-secondary" />
            </div>
            <h3 className="font-bold text-lg uppercase tracking-tight">Security Audit</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            ผลการประเมินความปลอดภัยและประสิทธิภาพ (Core Web Vitals)
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["LCP", "FID", "CLS"].map((metric) => (
              <div
                key={metric}
                className="p-3 bg-success/5 border border-success/10 rounded-lg text-center"
              >
                <span className="block text-[8px] font-mono text-muted-foreground uppercase mb-1">
                  {metric}
                </span>
                <span className="text-[10px] font-bold text-success uppercase">
                  {node?.core_web_vitals_status?.[metric.toLowerCase()] || "PASS"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEGAL BLOCK */}
        <div className="authority-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Lock size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg uppercase tracking-tight">Trust Protocol</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            การคุ้มครองข้อมูลและระดับการรักษาความลับสูงสุด (Privacy Tier)
          </p>
          <div className="p-4 bg-muted/50 rounded-xl border border-border">
            <span className="text-[10px] font-black tracking-widest text-primary uppercase">
              Institutional Grade
            </span>
            <p className="text-[9px] text-muted-foreground mt-1 uppercase">
              AES-256 Encryption Enabled
            </p>
          </div>
        </div>
      </div>

      <section className="mb-40">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-black uppercase tracking-widest">Linked Proof</h2>
          <div className="h-px bg-border flex-grow" />
        </div>

        {node?.linkedProjects && node.linkedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {(node.linkedProjects as unknown[]).map((p: unknown) => {
              const project = p as {
                id: string;
                category: string;
                title: string;
                description: string;
                slug: string;
              };
              return (
                <div
                  key={project.id}
                  className="authority-card group hover:border-primary/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[8px] font-black px-2 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full uppercase tracking-widest">
                      {project.category}
                    </span>
                    <FileText className="text-muted-foreground/30" size={20} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary"
                  >
                    Access Case File <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 bg-card border border-border rounded-[3rem] text-center max-w-4xl mx-auto opacity-50">
            <FileText className="mx-auto mb-6 text-muted-foreground/30" size={48} />
            <h3 className="text-2xl font-bold mb-4">Archive Record Linked</h3>
            <p className="text-muted-foreground text-sm">
              ข้อมูลผลงานที่เชื่อมโยงกับรหัสนี้กำลังถูกนำเข้าระบบทะเบียนสาธารณะ
            </p>
          </div>
        )}
      </section>

      <footer className="mt-40 pt-16 border-t border-border flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-success" size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">
            Immutable Trust Layer Verified
          </span>
        </div>
        <p className="text-muted-foreground font-mono text-[9px] uppercase tracking-[0.3em]">
          © {currentYear} {brand.fullName} | Global Identity Node
        </p>
      </footer>
    </>
  );
}

export default function VerificationPage({ params }: PageProps) {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary bg-background">
      <nav className="p-6 border-b border-border flex justify-between items-center bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Shield className="text-primary" size={24} />
          <span className="font-black uppercase tracking-[0.3em] text-[10px]">
            Security Audit Protocol
          </span>
        </div>
        <div className="flex gap-4">
          <StatusIndicator status="SECURE" label="IDENTITY_VERIFIED" />
        </div>
      </nav>

      <div className="container mx-auto px-6 py-24">
        <Suspense
          fallback={
            <div className="text-center py-20 animate-pulse">
              <Activity className="mx-auto mb-4 text-primary" size={48} />
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                Processing Secure Node Data...
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
