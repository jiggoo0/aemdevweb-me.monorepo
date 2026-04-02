/**
 * [SECTION COMPONENT]: EXPERIENCE_NODES v18.0.4 (SERVER_OPTIMIZED)
 * [STRATEGY]: Narrative Visuals | IntersectionObserver Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExperienceNodesProps {
  readonly isTourismHeavy?: boolean;
}

export const ExperienceNodes = ({ isTourismHeavy }: ExperienceNodesProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--surface-offset)] py-24 md:py-48"
    >
      {/* 01. MATRIX INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.02]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid h-full grid-cols-1 gap-8 lg:h-[750px] lg:grid-cols-12">
          {/* Main Specialist Node */}
          <div
            className={cn(
              "group rounded-section border-border/10 bg-surface-card relative flex flex-col justify-end overflow-hidden border p-12 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-brand-primary)]/40 lg:col-span-7",
              visible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0",
            )}
          >
            <div className="absolute inset-0 z-0 opacity-40 transition-all duration-[2s] ease-out group-hover:scale-105 group-hover:opacity-60">
              <Image
                src={
                  isTourismHeavy
                    ? "/images/areas/chiang-mai-node.webp"
                    : "/images/case-studies/industrial-catalog.webp"
                }
                alt="Specialist Experience Visual"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute top-8 right-8 flex items-center gap-4 opacity-30 transition-opacity group-hover:opacity-100">
              <span className="font-mono text-[10px] font-black tracking-[0.4em] text-white uppercase">
                MASTER_NODE_V18
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
            </div>

            <div className="relative z-10 space-y-6 text-white">
              {isTourismHeavy && (
                <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-[9px] font-black tracking-widest text-emerald-400 uppercase">
                    GEO_Performance_Optimal
                  </span>
                </div>
              )}
              <h3 className="text-5xl leading-[0.85] font-black uppercase italic md:text-7xl">
                {isTourismHeavy ? "Global <br/> Reach." : "Digital <br/> Hardened."}
              </h3>
              <p className="max-w-md text-lg leading-relaxed font-medium italic opacity-80 md:text-xl">
                {isTourismHeavy
                  ? "วางโครงสร้างเพื่อดักจับ Traffic จากทั่วโลกด้วยสถาปัตยกรรม Edge Computing ที่เร็วที่สุดในภูมิภาค"
                  : "ออกแบบระบบพื้นฐานที่ทนทานต่อการโจมตีและพร้อมสำหรับการขยายตัวสู่ระดับ Enterprise Grade"}
              </p>
            </div>
          </div>

          {/* Tactical Matrix Nodes */}
          <div className="grid grid-rows-2 gap-8 lg:col-span-5">
            <div
              className={cn(
                "group rounded-section shadow-pro-xl relative flex flex-col justify-center bg-[var(--color-brand-primary)] p-12 text-[var(--surface-main)] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-md",
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="absolute top-8 right-8 font-mono text-[10px] font-black opacity-20">
                REF_ID: ROI_01
              </span>
              <h4 className="mb-4 text-3xl font-black uppercase italic">
                {isTourismHeavy ? "Direct_Booking" : "ROI_Optimization"}
              </h4>
              <p className="text-lg leading-relaxed font-medium italic opacity-90">
                {isTourismHeavy
                  ? "เพิ่มกำไรสุทธิด้วยระบบจองตรงที่ไม่ผ่านเอเย่นต์ ลดค่าคอมมิชชั่นทันที 100%"
                  : "เปลี่ยนทุกคลิกให้เป็นรายได้ด้วยการออกแบบ UX ที่ผ่านการคำนวณจิตวิทยาการซื้อ"}
              </p>
            </div>

            <div
              className={cn(
                "group rounded-section bg-surface-card relative flex flex-col justify-center border border-[var(--color-brand-primary)]/30 p-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-brand-primary)]",
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
              )}
              style={{ transitionDelay: "500ms" }}
            >
              <span className="absolute top-8 right-8 font-mono text-[10px] font-black text-[var(--color-brand-primary)] opacity-20">
                REF_ID: SEC_02
              </span>
              <h4 className="mb-4 text-3xl font-black text-[var(--color-brand-primary)] uppercase italic">
                {isTourismHeavy ? "Edge_Network" : "Security_Ledger"}
              </h4>
              <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-80">
                {isTourismHeavy
                  ? "เข้าถึงลูกค้ายุโรปและอเมริกาด้วยความเร็วระดับมิลลิวินาทีผ่าน Global Nodes"
                  : "ปกป้องข้อมูลธุรกิจและลูกค้าด้วยระบบเข้ารหัสขั้นสูงและมาตรฐาน PDPA ล่าสุด"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
