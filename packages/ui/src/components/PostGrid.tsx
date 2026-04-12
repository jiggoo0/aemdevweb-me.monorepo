"use client";

import React, { useState } from "react";
import { PostCard } from "./PostCard";

interface PostGridProps {
  initialPosts: unknown[];
  categories: string[];
  basePath?: string;
}

export function PostGrid({ initialPosts, categories, basePath }: PostGridProps) {
  const [filter, setFilter] = useState("all");

  const filteredPosts =
    filter === "all"
      ? initialPosts
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initialPosts.filter((p: any) => p.category === filter);

  return (
    <div className="space-y-16">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all ${
            filter === "all"
              ? "bg-black border-black text-white shadow-xl"
              : "border-gray-100 text-gray-400 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          Full Feed
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all ${
              filter === cat
                ? "bg-black border-black text-white shadow-xl"
                : "border-gray-100 text-gray-400 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {filteredPosts.map((post: any) => (
          <PostCard key={post.id} post={post} basePath={basePath} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="py-32 text-center">
          <p className="font-black uppercase tracking-[0.4em] text-gray-200 text-xs text-center">
            No Analysis Dispatched
          </p>
        </div>
      )}
    </div>
  );
}
