"use client";

import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Filter } from "lucide-react";

interface ProjectGridProps {
  initialProjects?: unknown[];
  categories?: string[];
  basePath?: string;
  children?: React.ReactNode; // รองรับการส่ง children มาตรงๆ แบบใน apps/me
}

/**
 * [UI COMPONENT]: PROJECT_GRID v1.2.0 (SAFETY_ENFORCED)
 */
export function ProjectGrid({
  initialProjects = [],
  categories = [],
  basePath,
  children,
}: ProjectGridProps) {
  const [filter, setFilter] = useState("all");

  // Safety filter
  const filteredProjects =
    filter === "all"
      ? (initialProjects ?? [])
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (initialProjects ?? []).filter((p: any) => p?.category === filter);

  // หากมีการส่ง children มา (สไตล์ apps/me) ให้แสดงผล children แทน
  if (children) {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>;
  }

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      {(categories ?? []).length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
              filter === "all"
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "border-white/10 text-gray-500 hover:text-white"
            }`}
          >
            All Intel
          </button>
          {(categories ?? []).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                filter === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "border-white/10 text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {(filteredProjects ?? []).map((project: any) => (
          <ProjectCard key={project?.id || project?.title} project={project} basePath={basePath} />
        ))}
      </div>

      {(filteredProjects ?? []).length === 0 && (
        <div className="py-20 text-center opacity-40">
          <Filter size={48} className="mx-auto mb-4" />
          <p className="font-bold uppercase tracking-widest text-sm">No data in this category</p>
        </div>
      )}
    </div>
  );
}
