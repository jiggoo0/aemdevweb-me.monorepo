/**
 * [SHARED COMPONENT]: AUTHOR_CARD v2.1.0 (IDENTITY_SOVEREIGNTY)
 * [STRATEGY]: E-E-A-T Presentation | Strategic Tone | GEO-Authority Integration
 * [MAINTAINER]: 9mza (Lead Architect)
 */

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site-config";
import { UI_STRINGS } from "@/constants/ui-strings";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

export default function AuthorCard() {
  const { expert, links } = SITE_CONFIG;

  return (
    <div className="group relative mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-xl transition-all duration-700 hover:border-amber-500/30 hover:shadow-amber-500/5 md:p-12">
      {/* Decorative Background Grid */}
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.05]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
        {/* Profile Image with Strategic Glow */}
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-slate-900 p-1 md:h-44 md:w-44">
          <Image
            src={expert.avatar}
            alt={expert.displayName}
            fill
            className="rounded-xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 animate-pulse rounded-xl bg-amber-500/10" />
          
          {/* GEO-Authority Badge */}
          <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/90 text-amber-500 shadow-xl backdrop-blur-md border border-slate-800">
            <IconRenderer name="MapPin" size={18} strokeWidth={3} />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] font-black tracking-[0.3em] text-amber-500 uppercase italic">
                {UI_STRINGS.reputation.businessPartner}
              </span>
              <div className="h-px w-10 bg-slate-800" />
              <span className="text-slate-400 font-mono text-[9px] font-bold tracking-widest uppercase">
                {UI_STRINGS.reputation.coverage}
              </span>
            </div>
            
            <h3 className="text-white text-4xl font-black tracking-tight uppercase italic md:text-5xl">
              {expert.displayName}
            </h3>
            
            <p className="mb-4 font-mono text-xs font-bold tracking-widest text-amber-500/90 uppercase italic">
              {expert.role} | {UI_STRINGS.reputation.yearsExp}
            </p>
          </div>

          <p className="text-slate-300 text-base leading-relaxed italic opacity-95 md:max-w-2xl">
            {expert.bio} {UI_STRINGS.reputation.friendlyConsultant} ยินดีให้คำปรึกษาทุกโปรเจกต์ครับ
          </p>

          {/* Strategic Connectors */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:justify-start">
            {[
              { icon: "Linkedin", href: links.linkedin, label: "LinkedIn" },
              { icon: "Github", href: links.github, label: "GitHub" },
              { icon: "Twitter", href: links.twitter, label: "Twitter" },
              { icon: "Facebook", href: links.facebook, label: "Facebook" },
              { icon: "Globe", href: expert.bioUrl, label: "Portfolio" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group/link text-slate-400 flex items-center gap-3 transition-all hover:-translate-y-1 hover:text-amber-500"
                aria-label={link.label}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 transition-all group-hover/link:border-amber-500/40 group-hover/link:bg-amber-500/5">
                  <IconRenderer name={link.icon as IconName} size={20} />
                </div>
                <span className="font-mono text-[10px] font-black tracking-tighter uppercase opacity-0 transition-all group-hover/link:opacity-100">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Overlay */}
      <div className="pointer-events-none absolute right-10 bottom-6 hidden select-none font-mono text-5xl font-black tracking-tighter text-amber-500 uppercase italic opacity-[0.05] md:block">
        {expert.signature}
      </div>
    </div>
  );
}
