/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v18.5.0 (AI_OPTIMIZED)
 * [STRATEGY]: Zero-Jank Animation | Semantic Richness | Lazy Load Protection
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { TemplateMasterData } from "@/types";

interface ServiceCardProps {
  readonly data: TemplateMasterData;
  readonly index?: number;
  readonly className?: string;
  readonly isPopular?: boolean;
}

const ServiceCard = ({ data, index = 0, className, isPopular }: ServiceCardProps) => {
  const imageSource = data.image || "/images/services/default.webp";
  const priceDisplay = data.priceValue
    ? `฿${new Intl.NumberFormat("th-TH").format(data.priceValue)}`
    : "Price_Inquiry";

  return (
    <article
      className={cn(
        "group rounded-card-lg border-border bg-surface-card relative flex h-full w-full flex-col overflow-hidden border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "hover:shadow-pro-xl hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/40",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* 01. Visual Engine: 16:10 Ratio for Visual Balance */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-offset)] select-none">
        <Image
          src={imageSource}
          alt={`Solution Architecture: ${data.title}`}
          fill
          priority={index < 3}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        {/* Popular Badge Injection */}
        {(isPopular || data.isPopular) && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-3 py-1.5 text-white shadow-lg backdrop-blur-sm">
              <IconRenderer name="Star" size={10} className="fill-current text-white" />
              <span className="font-mono text-[8px] font-black tracking-widest uppercase">
                Expert_Choice
              </span>
            </div>
          </div>
        )}
        <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
      </div>

      {/* 02. Intelligence Node: Semantic Content */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <header className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-brand-primary)]" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-90">
              SERVICE_NODE: {data.templateSlug.replace(/-/g, "_").toUpperCase()}
            </span>
          </div>
          <h3 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic transition-colors duration-500 group-hover:text-[var(--color-brand-primary)] md:text-3xl">
            {data.title.split("|")[0].trim()}
          </h3>
        </header>

        <p className="text-text-secondary mb-8 line-clamp-2 min-h-[3rem] text-sm leading-relaxed font-medium italic opacity-80">
          “{data.description}”
        </p>

        {/* 03. Performance Metrics: Benefit Registry */}
        <ul className="mb-10 space-y-3">
          {(data.benefits || []).slice(0, 3).map((benefit, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="border-border flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-colors group-hover:border-[var(--color-brand-primary)]/20">
                <IconRenderer name="Check" size={10} strokeWidth={4} />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary text-xs font-bold transition-colors">
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* 04. Conversion Anchor: ROI Display */}
        <footer className="border-border mt-auto flex items-end justify-between border-t pt-8">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[10px] font-black tracking-widest uppercase opacity-90">
              Value_Investment
            </span>
            <div className="text-text-primary flex items-baseline font-black transition-colors group-hover:text-[var(--color-brand-primary)]">
              <span className="text-3xl tracking-tight uppercase italic tabular-nums md:text-4xl">
                {priceDisplay}
              </span>
              {data.unit && (
                <span className="ml-1 text-[10px] uppercase opacity-80">/{data.unit}</span>
              )}
            </div>
          </div>

          <Link
            href={`/services/${data.templateSlug}`}
            className="text-text-primary flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-offset)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white group-hover:shadow-lg"
            aria-label={`Execute Deep Dive into ${data.title}`}
          >
            <IconRenderer name="ArrowRight" size={24} />
          </Link>
        </footer>
      </div>

      {/* Atmospheric Aura: Hover State Only */}
      <div className="from-brand-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </article>
  );
};

export default memo(ServiceCard);
