"use client";

import React from "react";
import { Calendar, User, ChevronLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

interface ArticleLayoutProps {
  post: {
    title: string;
    excerpt: string;
    content: string;
    thumbnail_url: string | null;
    category: string;
    published_at: string | null;
    author_id: string;
  };
  backPath?: string;
}

/**
 * [UI COMPONENT]: ARTICLE_LAYOUT v1.0.0
 * [STRATEGY]: High-E-E-A-T article presentation with institutional polish
 */
export function ArticleLayout({ post, backPath = "/blog" }: ArticleLayoutProps) {
  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="py-24 border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={backPath}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors mb-12"
          >
            <ChevronLeft size={14} />
            Back to Feed
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">
              {post.category}
            </span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar size={12} />{" "}
              {post.published_at ? new Date(post.published_at).toLocaleDateString() : "Draft"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[0.9]">
            {post.title}
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-blue-600 pl-8 mb-12">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between py-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-blue-600">
                <User size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                  Architect
                </p>
                <p className="font-bold text-sm text-gray-900">
                  {post.author_id.replace("_", " ")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                <Share2 size={18} />
              </button>
              <button className="p-3 rounded-xl bg-gray-50 text-gray-400 hover:bg-black hover:text-white transition-all">
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.thumbnail_url && (
        <div className="max-w-6xl mx-auto px-6 -mt-12 mb-24">
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src={post.thumbnail_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-xl prose-blue max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-gray-600 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl">
          {/* 
               Note: In a real app, we'd use a markdown parser here like 'react-markdown' or 'next-mdx-remote'.
               For now, we'll render as whitespace-preserved text.
            */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.replace(/\n/g, "<br/>"),
            }}
          />
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="py-32 bg-gray-50 border-t border-gray-100 mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">
            Interested in this Analysis?
          </h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            เราพร้อมนำกลยุทธ์ที่วิเคราะห์ไว้ไปปรับใช้กับธุรกิจของคุณ
            เพื่อสร้างความได้เปรียบที่ยั่งยืน
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
          >
            Establish Transmission
          </Link>
        </div>
      </footer>
    </article>
  );
}
