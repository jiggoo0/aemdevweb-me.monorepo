/**
 * [SEO COMPONENT]: REPUTATION_SHIELD v2.1.0 (IDENTITY_AUTHORITY)
 * [STRATEGY]: Verified Specialist Badge | E-E-A-T Authority | Strategic Tone
 * [MAINTAINER]: 9mza (Lead Architect)
 */

import React from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { UI_STRINGS } from "@/constants/ui-strings";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface ReputationShieldProps {
  readonly className?: string;
  readonly showSchema?: boolean;
  readonly showVisual?: boolean;
}

export default function ReputationShield({
  className,
  showSchema = true,
  showVisual = true,
}: ReputationShieldProps) {
  const { expert, ecosystem, siteUrl } = SITE_CONFIG;

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#expert`,
      name: expert.legalNameThai,
      alternateName: expert.alias,
      jobTitle: expert.jobTitle,
      url: siteUrl,
      image: `${siteUrl}${expert.avatar}`,
      description: expert.bio,
      sameAs: expert.sameAs,
      worksFor: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: SITE_CONFIG.brandName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${SITE_CONFIG.logo}`,
      },
      description: SITE_CONFIG.description,
      founder: { "@id": `${siteUrl}/#expert` },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: expert.email,
        url: siteUrl,
      },
      knowsAbout: [
        "Strategic Digital Infrastructure",
        "Technical SEO",
        "UNLINK-GLOBAL Ecosystem",
        "Next.js Architecture",
        "AI Integration",
      ],
    },
  ];

  return (
    <>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {showVisual && (
        <div
          className={cn(
            "group relative flex items-center gap-5 overflow-hidden rounded-2xl border p-5 transition-all duration-500",
            "border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-xl",
            "hover:border-amber-500/30 hover:bg-slate-900/95 hover:shadow-amber-500/10",
            className,
          )}
        >
          {/* Trust Badge Seal (Gold) */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 shadow-lg transition-transform duration-500 group-hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-amber-500">
              <IconRenderer name="ShieldCheck" size={28} strokeWidth={2.5} />
            </div>
            <div className="absolute inset-0 animate-pulse rounded-full bg-amber-500/20" />
          </div>

          {/* Identity Info */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-black tracking-[0.2em] text-amber-500 uppercase italic">
                {UI_STRINGS.reputation.trustBadge}
              </span>
              <div className="h-1 w-1 rounded-full bg-amber-500" />
              <span className="text-slate-400 font-mono text-[9px] font-bold tracking-widest uppercase">
                ID: {SITE_CONFIG.business.ids.unlinkRegistryId}
              </span>
            </div>
            <h4 className="text-white text-base font-black tracking-tight uppercase italic">
              {UI_STRINGS.reputation.certifiedExpert}
            </h4>
            <p className="text-slate-400 text-xs font-bold leading-tight tracking-wide opacity-90">
              {expert.displayName} — {expert.role}
            </p>
          </div>

          {/* Ecosystem Link */}
          <div className="ml-auto hidden items-center gap-4 md:flex">
            <div className="h-10 w-px bg-slate-800" />
            <a
              href={ecosystem.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-end gap-1 transition-opacity hover:opacity-70"
            >
              <span className="text-slate-500 font-mono text-[9px] font-black tracking-widest uppercase">
                Ecosystem_Node
              </span>
              <span className="text-amber-500 text-[10px] font-black tracking-tighter uppercase italic">
                UNLINK-GLOBAL
              </span>
            </a>
          </div>

          {/* Decorative Background Grid */}
          <div
            className="bg-infrastructure-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
            style={{ backgroundImage: "url(/grid-pattern.svg)" }}
          />
        </div>
      )}
    </>
  );
}
