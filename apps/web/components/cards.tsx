"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * [UTILS]: cn
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * [TYPE]: Card Metadata Interfaces
 */
interface BlogPostMetadata {
  slug: string;
  category?: string;
  published_at: string; // Sync with MDX Engine
  readingTime?: string;
  title: string;
  description?: string;
  excerpt?: string;
  thumbnail_url?: string; // Sync with MDX Engine
}

interface ServiceMetadata {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
}

/**
 * [UI]: GlassWrapper
 */
const GlassWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-700 hover:border-primary/30",
      className,
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

/**
 * 📝 [COMPONENT]: BlogCard
 * [UPGRADE]: Added Image rendering & Data Sync v5.1.0
 */
export const BlogCard = ({
  post,
  priority = false,
}: {
  post: BlogPostMetadata;
  priority?: boolean;
}) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <GlassWrapper className="flex flex-col h-full">
          {/* 🖼️ Thumbnail Header */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-[2.5rem]">
            <Image
              src={post.thumbnail_url || "/images/blog/default.webp"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black uppercase tracking-[0.2em] rounded-full">
                {post.category || "Engineering"}
              </span>
            </div>
          </div>

          <div className="p-10 pt-8 flex flex-col flex-grow">
            {/* Metadata Line */}
            <div className="flex items-center gap-4 text-white/20 mb-8">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} />
                <span className="text-[9px] font-mono uppercase tracking-widest">
                  {new Date(post.published_at).toLocaleDateString("th-TH")}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
                <span className="text-[9px] font-mono uppercase tracking-widest">
                  {post.readingTime || "8 min read"}
                </span>
              </div>
            </div>

            {/* Title & Excerpt */}
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 leading-[1.1] text-white group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm font-light text-white/40 leading-relaxed mb-8 line-clamp-3 flex-grow">
              {post.description || post.excerpt}
            </p>

            {/* Bottom Layer */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black">
                  <User size={14} className="text-primary" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                  AEM ARCHITECT
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <ArrowUpRight
                  size={18}
                  className="text-white group-hover:rotate-45 transition-transform"
                />
              </div>
            </div>
          </div>
        </GlassWrapper>
      </motion.div>
    </Link>
  );
};

/**
 * 🛠️ [COMPONENT]: ServiceCard
 */
export const ServiceCard = ({ service }: { service: ServiceMetadata }) => (
  <GlassWrapper className="p-12 hover:bg-primary/[0.03]">
    <div className="mb-10 w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
      {service.icon || <ShieldCheck className="text-primary" size={32} />}
    </div>
    <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 text-white leading-none">
      {service.title}
    </h3>
    <p className="text-xl font-light text-white/40 mb-10 leading-relaxed italic">
      "{service.description}"
    </p>
    <ul className="space-y-4 mb-12">
      {service.features?.map((f: string, i: number) => (
        <li
          key={i}
          className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/60"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          {f}
        </li>
      ))}
    </ul>
    <button className="w-full py-5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
      Authorize Integration
    </button>
  </GlassWrapper>
);
