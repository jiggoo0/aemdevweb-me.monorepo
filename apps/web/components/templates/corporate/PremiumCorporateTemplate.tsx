"use client";

/**
 * [TEMPLATE COMPONENT]: PREMIUM_CORPORATE_TEMPLATE v1.0.0
 * [STRATEGY]: WOW-Factor Integration | High-End Corporate UI
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { motion } from "framer-motion";
import type { PremiumTemplateProps } from "@/lib/templates/premium-types";
import { LivePerformanceDashboard } from "@/components/features/wow-factor/interactive/LivePerformanceDashboard";
import { DynamicROICalculator } from "@/components/features/wow-factor/interactive/DynamicROICalculator";
import HolographicTerminal from "@/components/features/wow-factor/interactive/HolographicTerminal";
import { cn } from "@/lib/utils";

interface TemplateProps {
  data: PremiumTemplateProps;
}

const PremiumCorporateTemplate = ({ data }: TemplateProps) => {
  const { sections } = data;

  return (
    <div className="flex w-full flex-col">
      {/* --- HERO SECTION: High-Impact Entrance --- */}
      <section className="relative flex min-h-[90dvh] flex-col items-center justify-center pt-24 pb-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-4xl"
          >
            <span className="text-brand-primary mb-6 block text-sm font-black tracking-[0.4em] uppercase">
              Exclusive V2 Design
            </span>
            <h1 className="mb-8 text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl italic uppercase">
              {data.title || "Elite Corporate Presence"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl">
              Precision-engineered for maximum impact, speed, and conversion.
              Driven by AEMZA Design Engine.
            </p>
          </motion.div>
        </div>
        
        {/* Terminal Visual Background */}
        <div className="absolute inset-0 z-0 opacity-20 overflow-hidden pointer-events-none">
           <HolographicTerminal />
        </div>
      </section>

      {/* --- FEATURE SECTIONS --- */}
      <div className="relative z-10 w-full bg-slate-950/40 backdrop-blur-[2px]">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={cn(
              "premium-feature-section relative w-full py-24 md:py-48",
              index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
            )}
          >
            <div className="container mx-auto px-4">
               {/* --- DYNAMIC FEATURE MAPPING --- */}
               {section.type === "dashboard" && (
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-5xl"
                 >
                    <div className="mb-16 text-center md:text-left">
                       <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4">
                          {section.title || "Live Performance Tracking"}
                       </h2>
                       <p className="text-slate-400 max-w-xl">{section.description}</p>
                    </div>
                    <LivePerformanceDashboard />
                 </motion.div>
               )}

               {section.type === "calculator" && (
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-6xl"
                 >
                    <div className="mb-16 text-center">
                       <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-4">
                          {section.title || "Strategic ROI Analysis"}
                       </h2>
                       <p className="text-slate-400 mx-auto max-w-2xl">{section.description}</p>
                    </div>
                    <DynamicROICalculator />
                 </motion.div>
               )}
               
               {/* Standard Section Fallback */}
               {section.type === "standard" && (
                 <div className="mx-auto max-w-4xl text-center">
                    <h3 className="text-3xl font-black text-white italic mb-6">{section.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{section.description}</p>
                 </div>
               )}
            </div>
          </section>
        ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="relative py-32 border-t border-white/5 bg-slate-950">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter mb-12">
               Elevate Your Corporate Identity
            </h2>
            <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-primary transition-all duration-300 transform hover:scale-105">
               Deploy Premium Template
            </button>
         </div>
      </section>
    </div>
  );
};

export default PremiumCorporateTemplate;
