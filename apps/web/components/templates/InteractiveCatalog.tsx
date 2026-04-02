/**
 * [AEMZA_MACKS_SYSTEM_ARCHITECT]
 * [COMPONENT_ID]: InteractiveCatalog.tsx
 * [VERSION]: 1.0.0
 * [STATUS]: PRODUCTION_READY
 * [STRATEGY]: Client-Side Interactivity | Decoupled from Data Fetching
 */
"use client";

import React, { useMemo, useState } from "react";
import type { CatalogItem, ServiceFeature } from "@/types";
import ClientRegistry from "./sections/ClientRegistry";

interface InteractiveCatalogProps {
  readonly items: readonly CatalogItem[];
  readonly features: readonly ServiceFeature[];
}

/**
 * @component InteractiveCatalog
 * @description Handles client-side search and filtering for catalog items and features.
 */
const InteractiveCatalog = ({ items, features }: InteractiveCatalogProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    const lowerTerm = searchTerm.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerTerm) ||
        item.description.toLowerCase().includes(lowerTerm),
    );
  }, [items, searchTerm]);

  // The features are not filtered in this implementation, but passed through.
  const filteredFeatures = features;

  return (
    <>
      <div className="mb-12">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search services and features..."
          className="w-full rounded-xl border-2 border-[var(--border)] bg-[var(--surface-offset)] px-6 py-4 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/20 focus:outline-none"
        />
      </div>
      <ClientRegistry items={filteredItems} coreFeatures={filteredFeatures} />
    </>
  );
};

export default InteractiveCatalog;
