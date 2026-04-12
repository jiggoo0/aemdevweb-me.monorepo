"use client";

import React from "react";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    thumbnail_url: string | null;
    category: string;
    published_at: string | null;
    author_id: string;
  };
  basePath?: string;
}

export function PostCard({ post, basePath = "/blog" }: PostCardProps) {
  return (
    <article className="group relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
      <Link href={`${basePath}/${post.slug}`} className="block">
        {/* Thumbnail */}
        <div className="aspect-[16/9] overflow-hidden bg-gray-50 relative">
          {post.thumbnail_url ? (
            <img
              src={post.thumbnail_url}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-200 uppercase font-black tracking-tighter text-4xl">
              Analysis
            </div>
          )}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-1 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg border border-gray-100">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />{" "}
              {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
            </span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="flex items-center gap-1.5 text-blue-600">
              <User size={12} /> {post.author_id.replace("_", " ")}
            </span>
          </div>

          <h3 className="text-2xl font-black text-gray-900 tracking-tighter mb-4 leading-tight group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 group-hover:gap-4 transition-all">
            Establish Uplink
            <ArrowUpRight size={14} className="text-blue-600" />
          </div>
        </div>
      </Link>
    </article>
  );
}
