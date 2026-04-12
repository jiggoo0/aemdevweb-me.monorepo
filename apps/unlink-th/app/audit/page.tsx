"use client";

import { ProtectedRoute, UserMenu, StatusIndicator } from "@repo/ui";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  Activity, 
  Search, 
  FileText, 
  Terminal,
  Server,
  Fingerprint,
  Zap
} from "lucide-react";

export default function AuditPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Navigation Bar */}
        <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-zinc-950/40 backdrop-blur-3xl sticky top-0 z-50">
          <Link
            href="/"
            className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
              <ChevronLeft size={20} />
            </div>
            <span className="font-black uppercase tracking-[0.4em] text-[10px]">Back to Portal</span>
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-4">
              <StatusIndicator status="SECURE" label="ADMIN_SESSION_ACTIVE" />
            </div>
            <UserMenu />
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <header className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/5 border border-primary/10 rounded-full animate-in fade-in slide-in-from-left-4 duration-700">
                  <Terminal size={14} className="text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                    Strategic Control Center
                  </span>
                </div>
                <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
                  Audit <br /> <span className="text-white/20">Protocol.</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-white/40 uppercase tracking-[0.2em] max-w-2xl leading-relaxed">
                  ระบบบริหารจัดการความปลอดภัยและตรวจสอบความสมบูรณ์ของระบบนิเวศ <span className="text-primary/60">UNLINK-TH</span>
                </p>
              </div>

              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] flex items-center gap-8 backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">System_Health</span>
                  <span className="text-2xl font-black text-success">99.8%</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Active_Nodes</span>
                  <span className="text-2xl font-black text-white">077</span>
                </div>
              </div>
            </div>
          </header>

          {/* Functional Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {/* Status Card */}
            <div className="glass-registry p-10 rounded-[3rem] group hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/[0.02] group-hover:text-primary/5 transition-colors">
                <Server size={100} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Activity className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">System Status</h3>
              <p className="text-sm font-light text-white/30 leading-relaxed mb-10 uppercase tracking-tight">
                ตรวจสอบสถานะการเชื่อมต่อ ประสิทธิภาพของ API และความหน่วงของเครือข่ายทั่วประเทศ
              </p>
              <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500">
                Initialize Diagnostics
              </button>
            </div>

            {/* Scanner Card */}
            <div className="glass-registry p-10 rounded-[3rem] group hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/[0.02] group-hover:text-purple-500/5 transition-colors">
                <Fingerprint size={100} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <Search className="text-purple-500" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Entity Scanner</h3>
              <p className="text-sm font-light text-white/30 leading-relaxed mb-10 uppercase tracking-tight">
                วิเคราะห์ตัวตนดิจิทัลและรหัสยืนยันความปลอดภัยที่ถูกสร้างขึ้นในระบบนิเวศ
              </p>
              <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-500">
                Start Global Scan
              </button>
            </div>

            {/* Management Card */}
            <div className="glass-registry p-10 rounded-[3rem] group hover:border-success/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/[0.02] group-hover:text-success/5 transition-colors">
                <Zap size={100} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <FileText className="text-success" size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">Case Management</h3>
              <p className="text-sm font-light text-white/30 leading-relaxed mb-10 uppercase tracking-tight">
                จัดการเอกสารบันทึกเหตุการณ์ทางกฎหมายและรายงานการละเมิดความเป็นส่วนตัว
              </p>
              <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-success hover:text-success-foreground hover:border-success transition-all duration-500">
                Access Archives
              </button>
            </div>
          </div>

          <footer className="mt-20 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-primary/40" size={24} />
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
                Secure Administrator Access Only | Protocol 5.0.0
              </p>
            </div>
            <div className="flex gap-6">
              <StatusIndicator status="SECURE" label="ENCRYPTED_LINK" />
              <StatusIndicator status="OPERATIONAL" label="AEM_MONITOR_UP" />
            </div>
          </footer>
        </div>
      </main>
    </ProtectedRoute>
  );
}
