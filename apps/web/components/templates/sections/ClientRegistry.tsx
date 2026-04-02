/**
 * [SYSTEM SECTION]: SUCCESS_NODE_MATRIX v18.1.0 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Technical Grid | Kinetic Reveal | GPU-Accelerated UI
 */
"use client";

import React, { memo } from "react";
import type { ServiceFeature, CatalogItem } from "@/types";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

// Sub-component for rendering Core Capabilities (Features)
const FeatureGrid = memo(({ features }: { features: readonly ServiceFeature[] }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {features.map((feature, idx) => (
      <div
        key={feature.title}
        className={cn(
          "group border-border bg-surface-card rounded-card relative overflow-hidden border p-8 transition-all duration-500",
          "hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-offset)] hover:shadow-md",
          "animate-in fade-in slide-in-from-bottom-2 fill-mode-both",
        )}
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <div className="border-border mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--color-brand-primary)] group-hover:text-[var(--surface-main)]">
          <IconRenderer name={feature.icon as IconName} size={28} />
        </div>
        <h3 className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
          {feature.title}
        </h3>
        <p className="text-text-secondary mt-3 text-sm leading-relaxed font-medium italic opacity-70">
          {feature.description}
        </p>

        {/* Decorative ID */}
        <span className="text-text-muted absolute top-6 right-8 font-mono text-[8px] font-black uppercase opacity-20">
          CAP_{idx.toString().padStart(2, "0")}
        </span>
      </div>
    ))}
  </div>
));
FeatureGrid.displayName = "FeatureGrid";

// Sub-component for rendering Specialized Units (Items)
const ItemGrid = memo(({ items }: { items: readonly CatalogItem[] }) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((item, _idx) => (
      <div
        key={item.name}
        className={cn(
          "group border-border bg-surface-card rounded-card relative flex flex-col overflow-hidden border p-1 text-center transition-all duration-500",
          "hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-offset)] hover:shadow-md",
        )}
      >
        <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-[var(--surface-offset)] transition-colors group-hover:bg-[var(--color-brand-primary)]/5">
          <IconRenderer
            name={item.icon as IconName}
            size={64}
            strokeWidth={1}
            className="text-[var(--color-brand-primary)]/20 transition-all duration-700 group-hover:scale-105 group-hover:text-[var(--color-brand-primary)] group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-text-primary text-lg font-black tracking-tighter uppercase italic">
            {item.name}
          </h3>
          <p className="text-text-muted mt-2 flex-1 text-xs font-medium italic opacity-60">
            {item.description}
          </p>
          {item.price && (
            <div className="mt-6 flex justify-center">
              <span className="rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-4 py-1.5 font-mono text-[9px] font-black tracking-widest text-[var(--color-brand-primary)] uppercase">
                {item.price} {item.unit && `/ ${item.unit}`}
              </span>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
));
ItemGrid.displayName = "ItemGrid";

interface ClientRegistryProps {
  readonly items?: readonly CatalogItem[];
  readonly coreFeatures?: readonly ServiceFeature[];
}

const ClientRegistry = ({ items, coreFeatures }: ClientRegistryProps) => {
  const hasItems = items && items.length > 0;
  const hasFeatures = coreFeatures && coreFeatures.length > 0;

  if (!hasItems && !hasFeatures) return null;

  return (
    <div className="space-y-24 py-12">
      {hasFeatures && (
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
              Success <span className="text-[var(--color-brand-primary)]">Capabilities.</span>
            </h2>
            <div className="from-brand-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-30">
              Nodes: {coreFeatures!.length}
            </span>
          </div>
          <FeatureGrid features={coreFeatures!} />
        </section>
      )}

      {hasItems && (
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
              Specialized <span className="text-[var(--color-brand-primary)]">Units.</span>
            </h2>
            <div className="from-brand-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-30">
              Total: {items!.length}
            </span>
          </div>
          <ItemGrid items={items!} />
        </section>
      )}
    </div>
  );
};

export default memo(ClientRegistry);
