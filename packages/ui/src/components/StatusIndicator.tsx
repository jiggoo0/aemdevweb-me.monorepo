"use client";

import React from "react";

export type SystemStatus = "OPERATIONAL" | "ACTIVE" | "SECURE" | "MAINTENANCE" | "INTERVENTION";

interface StatusIndicatorProps {
  status: SystemStatus;
  label?: string;
  className?: string;
}

/**
 * [UI COMPONENT]: STATUS_INDICATOR v1.0.0
 * [STRATEGY]: Cyber-Authority visual signal for system trust
 */
export function StatusIndicator({ status, label, className = "" }: StatusIndicatorProps) {
  const configs: Record<SystemStatus, { color: string; bg: string; dot: string }> = {
    OPERATIONAL: {
      color: "text-green-500",
      bg: "bg-green-500/10",
      dot: "bg-green-500",
    },
    ACTIVE: {
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      dot: "bg-blue-500",
    },
    SECURE: {
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      dot: "bg-purple-500",
    },
    MAINTENANCE: {
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      dot: "bg-yellow-500",
    },
    INTERVENTION: {
      color: "text-red-500",
      bg: "bg-red-500/10",
      dot: "bg-red-500",
    },
  };

  const current = configs[status] || configs.OPERATIONAL;

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 ${current.bg} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`}
        ></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`}></span>
      </span>
      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${current.color}`}>
        {label || status}
      </span>
    </div>
  );
}
