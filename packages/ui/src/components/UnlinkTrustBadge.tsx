"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface UnlinkTrustBadgeProps {
  siteId?: string;
  status?: "verified" | "pending" | "alert";
  className?: string;
}

export function UnlinkTrustBadge({
  siteId = "AEM-HUB-001",
  status: _status = "verified",
  className = "",
}: UnlinkTrustBadgeProps) {
  return (
    <div className={`inline-flex flex-col items-start gap-1 ${className}`}>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/5 border border-blue-500/20 rounded-full backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300">
        <ShieldCheck className="w-4 h-4 text-blue-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400">
          Verified by UNLINK
        </span>
        <CheckCircle2 className="w-3 h-3 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
      </div>

      {/* Verification Ledger Trace */}
      <div className="flex items-center gap-1.5 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-1 h-1 bg-blue-500/30 rounded-full" />
        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">
          Ledger ID: {siteId}
        </span>
      </div>
    </div>
  );
}
