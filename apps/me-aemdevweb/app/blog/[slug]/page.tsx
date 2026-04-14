import React from "react";
import { getContentBySlug, getAllContent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = await getAllContent("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getContentBySlug("blog", slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} | Chief Digital Architect`,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getContentBySlug("blog", slug);

  if (!post) notFound();

  const components = useMDXComponents({});

  return (
    <article className="min-h-screen bg-[#020202] text-white selection:bg-primary/30 pb-32">
      {/* 🏛️ [HERO]: Contextual Reveal */}
      <header className="relative h-[60vh] md:h-[80vh] flex items-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.metadata.image || "/images/blog/default.webp"}
            alt={post.metadata.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Hub
          </Link>

          <div className="flex flex-wrap gap-4 mb-8">
            {post.metadata.tags?.map((tag: string) => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary/80">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            {post.metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 italic">
            <span className="flex items-center gap-2">
              <Clock size={12} /> Protocol_Updated: {new Date(post.metadata.date).toLocaleDateString('en-GB')}
            </span>
            <span className="flex items-center gap-2">
              <Tag size={12} /> Status: Verified_Intelligence
            </span>
          </div>
        </div>
      </header>

      {/* 📖 [CONTENT]: Intelligence Stream */}
      <section className="container max-w-4xl mx-auto px-6 pt-24">
        <div className="prose prose-invert prose-primary max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>

        {/* 🚀 [FOOTER_CTA] */}
        <footer className="mt-32 pt-20 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">
                Transmission Concluded.
            </p>
            <Link
                href="/blog"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all"
            >
                Return to Hub
            </Link>
        </footer>
      </section>
    </article>
  );
}
