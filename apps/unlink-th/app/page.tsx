import React from "react";
import { ShieldCheck, Globe, Activity, Fingerprint, Network } from "lucide-react";
import { Button, GlassCard, StatusIndicator } from "@repo/ui";

/**
 * [INSTITUTIONAL_PORTAL]: UNLINK THAILAND GLOBAL GATEWAY
 * ออกแบบหน้าแรกให้มีความเป็น "Portal" ระดับโลกที่เน้นความปลอดภัยและอำนาจการตรวจสอบ
 */
export default function GlobalVerificationPortal() {
  return (
    <div className="flex-grow flex flex-col justify-center relative overflow-hidden">
      {/* [SCANNING_BEAM]: Cinematic Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-scan-line z-20" />

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
        {/* [TOP_AUTHORITY_BADGE]: Confirms Institutional Identity */}
        <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-4 px-6 py-2.5 bg-zinc-950 border border-white/5 rounded-full shadow-[0_0_30px_rgba(29,78,216,0.1)]">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-100/60">
              Authorized Institution Registry
            </span>
          </div>
        </div>

        {/* [HERO_TITLE]: Institutional Power Typography */}
        <div className="text-center max-w-5xl mb-20 space-y-6">
          <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
            Unlink <br /> <span className="text-white/20">Thailand.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/40 uppercase tracking-[0.2em] max-w-3xl mx-auto leading-relaxed">
            ระบบตรวจสอบความน่าเชื่อถือและยืนยันตัวตนอัตลักษณ์ดิจิทัล <br />
            <span className="text-[10px] font-black tracking-[0.4em] opacity-50">
              Global Integrity Framework v4.2
            </span>
          </p>
        </div>

        {/* [CORE_VERIFICATION_MODULE]: The Central Search Interface */}
        <div className="w-full max-w-4xl relative group">
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-1000" />

          <GlassCard className="p-2 border-white/10 bg-zinc-950/40 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex-grow w-full relative">
                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20">
                  <Fingerprint size={24} />
                </div>
                <input
                  type="text"
                  placeholder="ENTER SITE_ID OR DIGITAL IDENTITY_HASH"
                  className="w-full h-20 bg-transparent pl-20 pr-8 text-lg font-mono uppercase tracking-widest text-blue-400 placeholder:text-white/5 focus:outline-none transition-all"
                />
              </div>
              <Button
                size="lg"
                className="h-16 px-12 rounded-3xl bg-white text-black hover:bg-zinc-200 group-hover:scale-[1.02] transition-all"
              >
                <span className="flex items-center gap-3 font-black uppercase tracking-widest">
                  Execute Audit <ShieldCheck size={20} />
                </span>
              </Button>
            </div>
          </GlassCard>

          {/* Verification Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <StatusIndicator status="SECURE" label="256BIT_ENCRYPTED" />
            <StatusIndicator status="SECURE" label="GLOBAL_REGISTRY_SYNC" />
            <StatusIndicator status="SECURE" label="TRUST_PROTOCOL_4.2" />
          </div>
        </div>

        {/* [INSTITUTIONAL_PILLARS]: Strategic Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40 w-full max-w-6xl">
          <div className="p-8 space-y-6 border-l border-white/5 hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Globe className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest">Global Reach.</h3>
            <p className="text-sm font-light text-white/30 leading-relaxed uppercase tracking-tighter">
              ระบบฐานข้อมูลที่เชื่อมโยงกับเครือข่ายสากล เพื่อการตรวจสอบข้ามเขตแดนอย่างไร้รอยต่อ
            </p>
          </div>

          <div className="p-8 space-y-6 border-l border-white/5 hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-zinc-500/10 border border-white/10 flex items-center justify-center">
              <Network className="text-white/40" size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white/60">
              Registry Hub.
            </h3>
            <p className="text-sm font-light text-white/30 leading-relaxed uppercase tracking-tighter">
              ศูนย์รวมรายชื่อองค์กรที่ผ่านการรับรองความสมบูรณ์ของข้อมูลและอัตลักษณ์ดิจิทัล
            </p>
          </div>

          <div className="p-8 space-y-6 border-l border-white/5 hover:bg-white/[0.02] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-zinc-500/10 border border-white/10 flex items-center justify-center">
              <Activity className="text-white/40" size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white/60">
              Active Audit.
            </h3>
            <p className="text-sm font-light text-white/30 leading-relaxed uppercase tracking-tighter">
              การตรวจสอบความปลอดภัยเชิงรุกและรายงานความเสี่ยงแบบ Real-time ตลอด 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>

      {/* [ATMOSPHERIC_DECOR]: Background Elements */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
    </div>
  );
}
