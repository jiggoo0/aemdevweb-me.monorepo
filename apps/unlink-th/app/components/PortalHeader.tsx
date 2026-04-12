"use client";

import React from "react";
import { UserMenu } from "@repo/ui";
import { Wifi, WifiOff } from "lucide-react";
import Link from "next/link";
import { SHARED_SITE_CONFIG } from "@repo/core";

interface PortalHeaderProps {
  isConnected: boolean;
}

export function PortalHeader({ isConnected }: PortalHeaderProps) {
  const { brand } = SHARED_SITE_CONFIG;

  return (
    <header className="text-center mb-20 relative">
      <div className="absolute top-0 right-0">
        <UserMenu />
      </div>

      <div className="flex justify-center items-center gap-2 mb-6">
        <div
          className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono ${isConnected ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}
        >
          {isConnected ? <Wifi size={12} /> : <WifiOff size={12} />}
          {isConnected ? "DB CONNECTED" : "DB DISCONNECTED"}
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-500 border border-blue-500/20">
          {brand.name} ECOSYSTEM v1.0
        </div>
        <Link
          href="/login"
          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
        >
          IDENTITY LOGIN
        </Link>
      </div>

      <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-tighter">
        UNLINK-TH
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
        Strategic Identity & Authority Ecosystem.
        สถาปัตยกรรมดิจิทัลเพื่อการเชื่อมโยงตัวตนและระบบนิเวศแห่งความน่าเชื่อถือ
      </p>
    </header>
  );
}
