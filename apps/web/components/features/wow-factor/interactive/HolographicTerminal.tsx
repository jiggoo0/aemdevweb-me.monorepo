"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePremiumTemplate } from "@/components/providers/PremiumTemplateBuilderProvider";

/**
 * [WOW-FACTOR]: HOLOGRAPHIC_TERMINAL v1.0.0
 * [STRATEGY]: Kinetic Typography | Real-time Stream Emulation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

const LOG_MESSAGES = [
  "Initializing AEM-Ultimate Design Engine...",
  "Loading premium OKLCH color matrix...",
  "Injecting GPU-accelerated animation frames...",
  "Synchronizing with Turso edge database...",
  "Optimizing PSI Core Web Vitals (99+)...",
  "Hydrating interactive DOM nodes...",
  "Authenticating secure infrastructure layers...",
  "Compiling server-side components...",
  "Establishing WebSocket handshake...",
  "System Ready. Premium Template Activated.",
];

export const HolographicTerminal = () => {
  const { state } = usePremiumTemplate();
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < LOG_MESSAGES.length) {
        setLogs((prev) => [...prev, LOG_MESSAGES[currentIdx]].slice(-6));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="relative group overflow-hidden rounded-xl border border-brand-primary/20 bg-[#020617] p-1 font-mono text-[10px] md:text-xs text-brand-primary/80 shadow-2xl">
      {/* Scanline Effect */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-brand-primary/10 bg-brand-primary/5 px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
          <div className="h-2 w-2 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] uppercase tracking-tighter opacity-50">AEMZA_CORE_TERMINAL_v5.0</span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="relative h-48 overflow-y-auto bg-black/40 p-4 scrollbar-hide"
      >
        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => (
            <motion.div
              key={`${log}-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-1.5 flex gap-2"
            >
              <span className="shrink-0 opacity-40">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
              <span className="shrink-0 text-brand-secondary">{">"}</span>
              <span className="break-all tracking-tight">{log}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Blinking Cursor */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block h-3 w-1.5 bg-brand-primary/80"
        />
      </div>

      {/* Holographic Glow */}
      <div 
        className="pointer-events-none absolute -bottom-1/2 -left-1/4 h-full w-[150%] opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: `radial-gradient(circle at center, oklch(var(--brand-primary-raw)) 0%, transparent 70%)`,
          transform: `translate(${state.cursorPosition.x * 0.01}px, ${state.cursorPosition.y * 0.01}px)`
        }}
      />
    </div>
  );
};

export default HolographicTerminal;
