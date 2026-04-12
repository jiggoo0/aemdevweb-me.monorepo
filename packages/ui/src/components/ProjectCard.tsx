"use client";

import React from "react";
import { ExternalLink, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  // Support both DB format and static format from apps/me
  project?: {
    slug?: string;
    title?: string;
    description?: string;
    thumbnail_url?: string | null;
    image?: string; // Fallback for static
    category?: string;
    tags?: string[];
    client_name?: string | null;
    href?: string; // Fallback for static
  };
  // Props for static usage (Legacy Support)
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  href?: string;
  basePath?: string;
}

/**
 * [UI COMPONENT]: PROJECT_CARD v1.5.0 (UNIFIED_FLEX_SCHEMA)
 */
export function ProjectCard({
  project,
  title,
  description,
  image,
  tags,
  href,
  basePath = "/portfolio",
}: ProjectCardProps) {
  // Resolve data from either prop style
  const _title = project?.title || title || "Untitled Project";
  const _desc = project?.description || description || "No description provided for this node.";
  const _img = project?.thumbnail_url || project?.image || image || null;
  const _tags = project?.tags || tags || [];
  const _category = project?.category || "Strategic Hub";
  const _href = project?.href || href || (project?.slug ? `${basePath}/${project.slug}` : "#");
  const _client = project?.client_name || "Classified Identity";

  const isExternal = _href.startsWith("http");

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500">
      {/* Thumbnail Layer */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-900 relative">
        {_img ? (
          <img
            src={_img}
            alt={_title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 italic text-[10px] uppercase tracking-widest font-black">
            Transmission Node Offline
          </div>
        )}
        <div className="absolute top-6 left-6">
          <span className="px-4 py-1 bg-blue-600/20 backdrop-blur-md text-blue-500 border border-blue-500/20 text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
            {_category}
          </span>
        </div>
      </div>

      {/* Content Engine */}
      <div className="p-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {(_tags ?? []).slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-white/5 rounded-full text-[8px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1"
            >
              <Tag size={8} /> {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-500 transition-colors leading-tight">
          {_title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-8 font-mono">{_desc}</p>

        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <span className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-black">
            Intel: {_client}
          </span>

          {isExternal ? (
            <a
              href={_href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/0 group-hover:shadow-blue-600/20"
            >
              <ExternalLink size={16} />
            </a>
          ) : (
            <Link
              href={_href}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/0 group-hover:shadow-blue-600/20"
            >
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
