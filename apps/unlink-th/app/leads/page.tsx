"use client";

import React, { useEffect, useState } from "react";
import { ProtectedRoute, UserMenu, LeadCard, LeadStatus, StatusIndicator } from "@repo/ui";
import { getLeads, updateLeadStatus } from "@repo/db";
import Link from "next/link";
import { ChevronLeft, Inbox, RefreshCw, Terminal, Layers } from "lucide-react";

interface Lead {
  id: string;
  site_origin: string;
  name: string;
  contact: string;
  message: string;
  status: string;
  created_at: string;
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error: _error } = await getLeads();
    if (data) setLeads(data as Lead[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusUpdate = async (id: string, status: LeadStatus) => {
    const { error: _error } = await updateLeadStatus(id, status);
    if (!_error) {
      setLeads((prev) => prev.map((lead) => (lead.id === id ? { ...lead, status } : lead)));
    }
  };

  const filteredLeads = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Nav Bar */}
        <nav className="sticky top-0 z-50 p-8 bg-zinc-950/40 backdrop-blur-3xl border-b border-white/5 flex justify-between items-center">
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
            <div className="hidden md:flex gap-6">
              <StatusIndicator status="SECURE" label="REGISTRY_SYNC_OK" />
              <StatusIndicator status="OPERATIONAL" label="LEAD_ENGINE_ACTIVE" />
            </div>
            <UserMenu />
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 mb-32">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/5 border border-primary/10 rounded-full animate-in fade-in slide-in-from-left-4 duration-700">
                <Terminal size={14} className="text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  Data Acquisition Hub
                </span>
              </div>
              <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
                Inbound <br /> <span className="text-white/20">Leads.</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/40 uppercase tracking-[0.2em] max-w-2xl leading-relaxed">
                ศูนย์กลางการบริหารจัดการข้อมูลลูกค้าเป้าหมาย <br />
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.4em] uppercase">Multi-Domain Entry Protocol</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full xl:w-auto">
              <div className="flex flex-wrap bg-white/5 border border-white/10 rounded-[2rem] p-2 backdrop-blur-xl">
                {["all", "new", "contacted", "completed"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-8 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                      filter === f 
                        ? "bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.1)] scale-[1.05]" 
                        : "text-white/30 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <button
                onClick={fetchLeads}
                className="h-16 w-16 bg-white/5 border border-white/10 rounded-[1.5rem] flex items-center justify-center hover:bg-white/10 hover:border-primary/30 transition-all duration-500 text-primary"
              >
                <RefreshCw size={24} className={loading ? "animate-spin" : ""} />
              </button>
            </div>
          </header>

          {loading && leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-40 animate-pulse">
              <div className="w-24 h-24 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-10" />
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/20">Synchronizing Encrypted Data...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-40 glass-registry rounded-[4rem] flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10">
                <Layers className="text-white/20" size={48} />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">No Transmission Records</h3>
              <p className="text-white/30 text-base font-light uppercase tracking-widest max-w-md">
                ยังไม่มีข้อมูลการติดต่อใหม่ที่ถูกส่งเข้ามาในระบบทะเบียนกลาง ณ ขณะนี้
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40">
              {filteredLeads.map((lead) => (
                <div key={lead.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <LeadCard lead={lead} onStatusUpdate={handleStatusUpdate} />
                </div>
              ))}
            </div>
          )}

          <footer className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-6">
              <Inbox className="text-primary/40" size={28} />
              <div className="flex flex-col">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  Institutional Lead Registry
                </p>
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                  Secure Database Node: TH-CENTRAL-LEAD
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <StatusIndicator status="SECURE" label="AES_256_ACTIVE" />
              <StatusIndicator status="OPERATIONAL" label="AEM_GATEWAY_UP" />
            </div>
          </footer>
        </div>
      </main>
    </ProtectedRoute>
  );
}
