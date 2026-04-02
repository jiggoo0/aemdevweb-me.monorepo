"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Globe,
  Lock,
  CheckCircle,
  Loader2,
  AlertCircle,
  Building2,
  Fingerprint,
  FileSearch,
  Network,
  Database,
  Users,
  Zap,
  FileSignature,
  Gavel,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Identity } from "@/lib/shared-source/types";
import { IdentityCard, IdentityNotFound } from "@/components/identity-card";
import { serviceCategories } from "@/constants/navigation";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<
    Identity | null | "not_found"
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL === undefined ||
      !process.env.NEXT_PUBLIC_SUPABASE_URL
    ) {
      setError(
        "Registry authority node is currently offline. (System Configuration Error)",
      );
      return;
    }

    setIsSearching(true);
    setError(null);
    setSearchResult(null);

    try {
      const { data, error } = await supabase
        .from("identities")
        .select("*")
        .eq("id", searchQuery.trim().toUpperCase())
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          setSearchResult("not_found");
        } else {
          throw error;
        }
      } else {
        setSearchResult(data as Identity);
      }
    } catch (err: any) {
      console.error("Search error:", err);
      setError(
        "A technical validation error occurred. Please refresh or try again later.",
      );
    } finally {
      setIsSearching(false);
    }
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600/20" size={32} />
      </main>
    );
  }

  const getJsonLd = () => {
    const base = {
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      name: "UNLINK Registry Authority",
      alternateName: "Identity Verification & Trust Registry",
      description:
        "Authoritative digital identity ledger for the UNLINK global infrastructure.",
      url: "https://registry.unlink-th.com",
      sameAs: ["https://www.aemdevweb.com", "https://me.aemdevweb.com"],
    };

    if (searchResult && searchResult !== "not_found") {
      const isPerson = searchResult.type === "person";
      return {
        ...base,
        mainEntity: {
          "@type": isPerson ? "Person" : "Organization",
          name: searchResult.name,
          identifier: searchResult.id,
          sameAs: ["https://www.aemdevweb.com", "https://me.aemdevweb.com"],
        },
      };
    }
    return base;
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
      {/* 🏛️ Institutional Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* 🎭 Sophisticated Institutional Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
      />

      {/* 🏛️ Top Navigation Bar (Institutional Style) */}
      <nav className="fixed top-0 w-full z-50 glass-clean px-6 md:px-12 py-4 flex justify-between items-center border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded flex items-center justify-center text-primary-foreground shadow-sm">
            <ShieldCheck size={22} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-foreground">
              UNLINK Registry
            </span>
            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
              Authority Node Alpha
            </span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold font-mono tracking-widest uppercase text-muted-foreground">
          <a href="/verify" className="hover:text-primary transition-colors">
            Public Ledger
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Documentation
          </a>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2 text-success">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Operational
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-40 pb-24 px-6 max-w-6xl mx-auto flex flex-col items-center">
        {/* 📜 Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-muted-foreground text-[10px] font-mono tracking-widest uppercase shadow-sm">
            <Fingerprint size={14} className="text-primary" />
            Identity Verification Protocol v4.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            ระบบทะเบียน <span className="text-primary">อัตลักษณ์ดิจิทัล</span> ระดับสากล
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            ฐานข้อมูลกลางเพื่อการรับรองตัวตนดิจิทัลที่น่าเชื่อถือที่สุด พร้อมระบบตรวจสอบความถูกต้องด้วยเทคโนโลยีเข้ารหัสขั้นสูง สำหรับโครงสร้างพื้นฐานระดับโลกของ UNLINK
          </p>
        </motion.div>

        {/* 🔍 Search Engine Interface */}
        <div className="w-full max-w-3xl space-y-16">
          <form onSubmit={handleVerify} className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-focus-within:opacity-100 transition duration-1000"></div>
            <div className="relative flex items-center bg-card border border-border rounded-xl p-2 shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
              <div className="pl-5 text-muted-foreground">
                <Search size={22} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ระบุรหัสทะเบียน (เช่น UL-P-001)..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-foreground px-5 py-4 placeholder:text-muted-foreground font-medium text-base md:text-lg"
              />
              <button
                type="submit"
                disabled={isSearching || !searchQuery.trim()}
                className="bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-2 text-sm shadow-sm active:scale-[0.98]"
              >
                {isSearching ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  "ตรวจสอบข้อมูล"
                )}
              </button>
            </div>

            {/* Quick Badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={14} className="text-success" />{" "}
                Authoritative Truth
              </div>
              <div className="flex items-center gap-2.5">
                <Lock size={14} className="text-primary" /> Secure Encryption
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={14} className="text-primary" /> Global Standards
              </div>
            </div>
          </form>

          {/* 📊 Results Rendering Area */}
          <div className="min-h-[400px] flex items-center justify-center py-12">
            <AnimatePresence mode="wait">
              {isSearching ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-8 text-muted-foreground"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full border-2 border-primary/10 animate-ping" />
                    <div className="w-14 h-14 rounded-full border-2 border-primary border-t-transparent animate-spin relative z-10" />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground animate-pulse">
                    กำลังเข้าถึงฐานข้อมูลนิรภัย...
                  </div>
                </motion.div>
              ) : searchResult === "not_found" ? (
                <IdentityNotFound key="not_found" />
              ) : searchResult ? (
                <motion.div
                  key="found"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <IdentityCard identity={searchResult} />
                </motion.div>
              ) : error ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 px-8 py-5 bg-destructive/5 border border-destructive/10 rounded-xl text-destructive text-sm font-medium shadow-sm"
                >
                  <AlertCircle size={20} />
                  {error}
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-6 opacity-40"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 border border-border rounded-xl bg-card flex flex-col items-center gap-4">
                      <Building2 size={32} className="text-muted-foreground/50" />
                      <div className="w-20 h-1.5 bg-muted rounded-full" />
                    </div>
                    <div className="p-6 border border-border rounded-xl bg-card flex flex-col items-center gap-4">
                      <FileSearch size={32} className="text-muted-foreground/50" />
                      <div className="w-20 h-1.5 bg-muted rounded-full" />
                    </div>
                  </div>
                  <div className="text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-muted-foreground">
                    รอการระบุรหัสเพื่อตรวจสอบสิทธิ์
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 🏛️ Institutional Service Pillars */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-border/50">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">เสาหลักแห่งการบริการระดับสถาบัน</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">ขอบข่ายการดำเนินงานหลักเพื่อการบริหารจัดการตัวตนและเกียรติภูมิในระดับสากลของท่าน</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((cat, idx) => {
            const icons = [Zap, ShieldCheck, FileSignature, Gavel];
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div key={idx} className="authority-card">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-8 bg-primary/5 text-primary rounded-lg border border-primary/10">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trust Signals Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-12">พันธมิตรระดับสถาบันและมาตรฐานการกำกับดูแล</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale">
          <div className="text-foreground font-bold text-xl tracking-tighter">AEMDEVWEB</div>
          <div className="text-foreground font-bold text-xl tracking-tighter">UNLINK GLOBAL</div>
          <div className="text-foreground font-bold text-xl tracking-tighter">ISO 27001</div>
          <div className="text-foreground font-bold text-xl tracking-tighter">GDPR COMPLIANT</div>
          <div className="text-foreground font-bold text-xl tracking-tighter">SOC2 TYPE II</div>
        </div>
      </div>

      {/* 🏛️ Elite Footer Branding */}
      <footer className="relative z-10 bg-card border-t border-border pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground rounded flex items-center justify-center text-background">
                <ShieldCheck size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold uppercase tracking-widest text-foreground">
                  UNLINK GLOBAL
                </span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                  Trust Registry Authority
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6 text-[10px] font-bold font-mono tracking-[0.2em] uppercase text-muted-foreground">
              <div className="flex flex-col gap-4">
                <span className="text-foreground">Resources</span>
                <a href="#" className="hover:text-primary transition-colors">Public Ledger</a>
                <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-foreground">Authority</span>
                <a href="https://www.aemdevweb.com" target="_blank" className="hover:text-primary transition-colors">AEMDEVWEB</a>
                <a href="https://me.aemdevweb.com" target="_blank" className="hover:text-primary transition-colors">Governance</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-foreground">Legal</span>
                <a href="#" className="hover:text-primary transition-colors">Compliance</a>
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-border/50" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
            <span>
              © 2026 UNLINK GLOBAL TRUST NETWORK • AUTHORITATIVE NODE ALPHA
            </span>
            <div className="flex gap-8">
              <span>SECURED BY AI-E-E-A-T PROTOCOL</span>
              <span className="text-primary font-bold">BY 9MZA</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
