"use client";

import React, { useEffect, useState } from "react";
import { ProtectedRoute, UserMenu, LeadCard, LeadStatus } from "@repo/ui";
import { getLeads, updateLeadStatus } from "@repo/db";
import Link from "next/link";
import { ChevronLeft, Inbox, RefreshCw } from "lucide-react";

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
      <main className="min-h-screen bg-[#050505] text-white">
        {/* Nav Bar */}
        <nav className="sticky top-0 z-50 p-6 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ChevronLeft size={16} />
            Back to Portal
          </Link>
          <UserMenu />
        </nav>

        <div className="container mx-auto px-6 py-12">
          <header className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 text-blue-500 mb-4">
                <Inbox size={40} />
                <h1 className="text-4xl font-black uppercase tracking-tighter">Lead Management</h1>
              </div>
              <p className="text-gray-400 max-w-2xl">
                ศูนย์กลางการบริหารจัดการข้อมูลลูกค้าเป้าหมายจากทุกโดเมนในเครือ UNLINK-TH
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
                {["all", "new", "contacted", "completed"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                      filter === f ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <button
                onClick={fetchLeads}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-blue-500"
              >
                <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
              </button>
            </div>
          </header>

          {loading && leads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 opacity-20">
              <RefreshCw size={48} className="animate-spin mb-4" />
              <p className="font-bold uppercase tracking-widest">Synchronizing Leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/5 rounded-3xl">
              <Inbox size={48} className="text-gray-700 mb-4" />
              <p className="text-gray-500 font-bold uppercase tracking-widest">
                No leads found in this transmission
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLeads.map((lead) => (
                <LeadCard key={lead.id} lead={lead} onStatusUpdate={handleStatusUpdate} />
              ))}
            </div>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
