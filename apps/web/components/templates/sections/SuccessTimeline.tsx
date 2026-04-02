/**
 * [SECTION COMPONENT]: SUCCESS_TIMELINE_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Scroll-Linked Pathing | Motion Orchestration | Tactical Depth
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineNode {
  year: string;
  title: string;
  description: string;
  status?: "completed" | "active";
}

interface SuccessTimelineProps {
  items?: TimelineNode[];
}

export const SuccessTimeline = memo(({ items }: SuccessTimelineProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const defaultItems: TimelineNode[] = [
    {
      year: "2023",
      title: "Foundational_Registry",
      description: "เริ่มต้นวางรากฐานระบบสถาปัตยกรรมเว็บไซต์เพื่ออุตสาหกรรมยุคใหม่",
      status: "completed",
    },
    {
      year: "2024",
      title: "Regional_Expansion",
      description: "ขยายเครือข่ายความน่าเชื่อถือครอบคลุมพื้นที่ยุทธศาสตร์สำคัญทั่วประเทศ",
      status: "completed",
    },
    {
      year: "2025",
      title: "Neural_Infrastructure",
      description:
        "อัปเกรดระบบการประมวลผลและ Identity Overriding เพื่อความเป็นเอกลักษณ์ระดับสูงสุด",
      status: "completed",
    },
    {
      year: "2026",
      title: "Ultimate_Engine_v20",
      description:
        "ประกาศใช้ Next.js 16 + React 19 พร้อมระบบ Master Architect เพื่อการครองอันดับอย่างยั่งยืน",
      status: "active",
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--surface-main)] py-32 md:py-48"
    >
      {/* --- LAYER 01: ATMOSPHERIC LINE --- */}
      <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-[var(--border)] md:left-1/2 md:-translate-x-1/2">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute inset-0 w-full bg-gradient-to-b from-[var(--color-brand-primary)] via-[var(--color-brand-primary)] to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="relative flex flex-col space-y-32">
          {displayItems.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex w-full flex-col items-start md:flex-row md:items-center",
                  isEven ? "md:flex-row-reverse" : "",
                )}
              >
                {/* 1. Content Architecture */}
                <div
                  className={cn("w-full pl-12 md:w-1/2 md:pl-0", isEven ? "md:pl-20" : "md:pr-20")}
                >
                  <div className="glass-card group hover:shadow-pro-xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-card)] p-10 backdrop-blur-xl transition-all duration-500 hover:border-[var(--color-brand-primary)]/40">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase italic opacity-60">
                        NODE_{idx.toString().padStart(2, "0")}
                      </span>
                      {item.status === "active" && (
                        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          <span className="font-mono text-[8px] font-black text-emerald-500 uppercase">
                            LIVE_NOW
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="mb-4 text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-80">
                      “{item.description}”
                    </p>
                  </div>
                </div>

                {/* 2. Central Pulse Node */}
                <div className="absolute top-10 left-6 z-10 flex h-1 w-1 -translate-x-1/2 items-center justify-center md:top-auto md:left-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className={cn(
                      "z-20 h-5 w-5 rotate-45 border-2 transition-all duration-700",
                      item.status === "active"
                        ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] shadow-[0_0_15px_var(--color-brand-primary)]"
                        : "border-[var(--color-brand-primary)] bg-[var(--surface-main)]",
                    )}
                  />
                  <div className="absolute h-12 w-12 animate-pulse rounded-full bg-[var(--color-brand-primary)] opacity-5 blur-xl" />
                </div>

                {/* 3. Aesthetic Year Marker */}
                <div
                  className={cn(
                    "hidden w-1/2 md:block",
                    isEven ? "pr-20 text-right" : "pl-20 text-left",
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 0.05, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-8xl font-black tracking-tighter text-[var(--text-primary)] italic lg:text-[12rem]"
                  >
                    {item.year}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

SuccessTimeline.displayName = "SuccessTimeline";
