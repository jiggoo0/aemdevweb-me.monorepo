"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Search, Loader2, Database, FileText, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { VerificationBadge } from "@/components/verification-badge";

interface IPRecord {
  id: string;
  registration_number: string;
  owner_name: string;
  ip_type: string;
  status: string;
  verified_at: string;
  expiry_date: string;
}

export default function RegistryPage() {
  const [records, setRecords] = useState<IPRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchRecords() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("ip_records")
          .select("*")
          .order("verified_at", { ascending: false });

        if (error) {
          console.error("Error fetching IP records:", error);
        } else {
          setRecords(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecords();
  }, []);

  const filteredRecords = records.filter(record => 
    record.registration_number?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.owner_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
      {/* 🏛️ Institutional Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white group-hover:bg-slate-800 transition-colors">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold uppercase tracking-wider">UNLINK Registry</span>
              <span className="text-[10px] text-slate-500 font-mono uppercase">Intellectual Property Ledger</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search records..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 w-64 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold font-mono text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Ledger
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* 📜 Page Title & Description */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to Authority Node
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Public IP Registry
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
            The authoritative decentralized ledger for verified intellectual property registrations. 
            Providing cryptographically-secure validation for trademarks, patents, and copyrights within the UNLINK global infrastructure.
          </p>
        </div>

        {/* 🔍 Mobile Search */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search records..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-slate-200 animate-ping" />
              <Loader2 className="animate-spin text-slate-900 relative z-10" size={40} />
            </div>
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-[0.4em] animate-pulse">
              Synchronizing Authority Ledger...
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecords.map((record, index) => (
              <motion.div 
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <FileText size={24} />
                  </div>
                  <VerificationBadge registrationNumber={record.registration_number} />
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Registration Number</div>
                    <div className="font-mono font-bold text-xl text-slate-900 tracking-tight">{record.registration_number}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Owner / Entity</div>
                    <div className="flex items-center gap-2.5 font-semibold text-slate-700">
                      <User size={16} className="text-slate-400" />
                      {record.owner_name}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Type</div>
                      <div className="text-sm font-medium text-slate-600">{record.ip_type}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Verified At</div>
                      <div className="text-sm font-medium text-slate-600 flex items-center gap-2">
                        <Calendar size={14} className="text-slate-400" />
                        {record.verified_at ? new Date(record.verified_at).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredRecords.length === 0 && (
          <div className="text-center py-32 bg-white border-2 border-dashed border-slate-200 rounded-3xl">
            <Database className="mx-auto text-slate-200 mb-6" size={64} />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No records found</h3>
            <p className="text-slate-500 max-w-xs mx-auto">
              The query returned no results from the authority ledger. Please verify the registration number.
            </p>
          </div>
        )}
      </div>

      {/* 🏛️ Footer Branding */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.3em]">
              UNLINK GLOBAL TRUST NETWORK
            </span>
          </div>
          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">
            © 2026 AUTHORITATIVE NODE ALPHA • SECURED BY AI-E-E-A-T
          </div>
        </div>
      </footer>
    </main>
  );
}
