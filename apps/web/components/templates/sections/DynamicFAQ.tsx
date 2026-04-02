/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_V2 (MASTER_ARCHITECT)
 * [STRATEGY]: Framer Motion Transitions | Knowledge Hierarchy | Tactical Depth
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import JsonLd from "@/components/seo/JsonLd";
import type { ServiceFaq, UniversalTemplateProps } from "@/types";

interface DynamicFAQProps {
  readonly data?: UniversalTemplateProps;
  readonly items?: readonly ServiceFaq[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

export const DynamicFAQ = memo(
  ({
    data,
    items: directItems,
    description = "ข้อมูลเชิงลึกและคำแนะนำทางเทคนิคจากทีมผู้เชี่ยวชาญ เพื่อการตัดสินใจระดับ Enterprise",
    className,
  }: DynamicFAQProps) => {
    const items = directItems || data?.faqs || [];
    const faqSchema = useMemo(() => {
      if (!items || items.length === 0) return null;
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      };
    }, [items]);

    if (!items || items.length === 0) return null;

    return (
      <section
        id="intelligence-hub"
        className={cn(
          "relative overflow-hidden bg-[var(--surface-main)] py-32 md:py-48",
          className,
        )}
      >
        {faqSchema && <JsonLd data={faqSchema} id="schema-faq-dynamic" />}

        {/* --- LAYER 01: ATMOSPHERIC ENGINE --- */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay contrast-125">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <filter id="noiseFAQ">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.7"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFAQ)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-brand-primary)_0%,transparent_60%)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24">
            {/* --- HEADER NODE --- */}
            <div className="space-y-12 lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2 backdrop-blur-md"
              >
                <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--color-brand-primary)]" />
                <span className="font-sans text-[11px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase italic">
                  KNOWLEDGE_HUB.v20
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-8xl"
              >
                Expert <br /> <span className="text-[var(--color-brand-primary)]">Insights.</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-l-[8px] border-[var(--color-brand-primary)]/40 pl-8"
              >
                <p className="text-2xl leading-relaxed font-bold text-[var(--text-primary)] italic opacity-80 md:text-3xl">
                  “{description}”
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden pt-12 lg:block"
              >
                <a
                  href={SITE_CONFIG.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 opacity-50 transition-all hover:opacity-100"
                >
                  <div className="group-hover:shadow-glow-sm flex h-14 w-14 items-center justify-center rounded-2xl border-[var(--border)] bg-[var(--surface-card)] transition-all group-hover:border-[var(--color-brand-primary)]/40 group-hover:text-[var(--color-brand-primary)]">
                    <IconRenderer name="MessageCircle" size={24} />
                  </div>
                  <span className="font-mono text-[11px] font-black tracking-widest text-[var(--text-primary)] uppercase">
                    TECHNICAL_DIRECT_LINE
                  </span>
                </a>
              </motion.div>
            </div>

            {/* --- INTERACTION MATRIX --- */}
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="flex flex-col gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="group glass-card shadow-pro-xl overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface-card)] transition-all duration-500 hover:border-[var(--color-brand-primary)]/20 data-[state=open]:border-[var(--color-brand-primary)]/40"
                    >
                      <AccordionTrigger className="flex w-full items-center justify-between px-10 py-10 text-left hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
                        <div className="flex flex-col gap-3">
                          <span className="hidden font-mono text-[9px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase opacity-0 transition-all data-[state=open]:block data-[state=open]:opacity-60">
                            UPDATED_KNOWLEDGE_PROTOCOL
                          </span>
                          <span className="pr-8 text-2xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-4xl">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-10 pt-0 pb-12">
                        <div className="border-t border-[var(--border)] pt-10">
                          <p className="text-xl leading-relaxed font-bold text-[var(--text-secondary)] italic opacity-90 md:text-2xl">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

DynamicFAQ.displayName = "DynamicFAQ";
