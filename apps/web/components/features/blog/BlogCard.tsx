/**
 * [BLOG COMPONENT]: BLOG_CARD_SYSTEM v18.0.0 (PROFESSIONAL_READY)
 * [STRATEGY]: Blueprint Semantic Structure | Read-Time Signaling | Authority Visuals
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import { getAssetUrl, formatDate } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface BlogCardProps {
  readonly post: BlogPost;
  readonly index?: number;
  readonly priority?: boolean;
}

const BlogCard = ({ post, index = 0, priority = false }: BlogCardProps) => {
  // [OPTIMIZED]: ดึงรูปภาพจาก Vercel Blob
  const imageSource = getAssetUrl(post.coverImage || "/images/blog/default-thumb.webp");

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="glass-card rounded-section flex h-full flex-col overflow-hidden border transition-all duration-500 hover:border-[var(--color-brand-primary)]/40"
      >
        {/* Visual Engine */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={imageSource}
            alt={post.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="bg-brand-primary/10 absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute top-4 left-4">
            <span className="bg-surface-main/80 text-text-primary rounded-full px-3 py-1 text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Meta Content */}
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="mb-4 flex items-center gap-4 text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">
            <div className="flex items-center gap-1.5">
              <IconRenderer name="Calendar" size={12} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="bg-border h-1 w-1 rounded-full" />
            <div className="flex items-center gap-1.5">
              <IconRenderer name="Clock" size={12} />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h3 className="text-text-primary mb-4 line-clamp-2 text-xl font-black tracking-tighter uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-2xl">
            {post.title}
          </h3>

          <p className="text-text-secondary mb-8 line-clamp-3 flex-1 text-[12px] leading-relaxed font-medium opacity-80">
            {post.excerpt}
          </p>

          <div className="border-border/40 mt-auto flex items-center justify-between border-t pt-6">
            <div className="flex items-center gap-3">
              <div className="border-border relative h-6 w-6 overflow-hidden rounded-full border">
                <Image
                  src={getAssetUrl(post.author?.image || "/images/avatar.webp")}
                  alt={post.author?.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                {post.author?.name}
              </span>
            </div>
            <IconRenderer
              name="ArrowRight"
              size={16}
              className="text-[var(--color-brand-primary)] transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default memo(BlogCard);
