import React from "react";
import { getContentBySlug, getAllContent } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";
import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const projects = await getAllContent("projects");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getContentBySlug("projects", slug);
  if (!project) return {};

  return {
    title: `${project.metadata.title} | Architected System`,
    description: project.metadata.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getContentBySlug("projects", slug);

  if (!project) notFound();

  const components = useMDXComponents({});

  return (
    <article className="min-h-screen bg-[#020202] text-white selection:bg-primary/30 pb-32">
      {/* 🏛️ [HERO]: Contextual Reveal */}
      <header className="relative h-[60vh] md:h-[80vh] flex items-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.metadata.image || "/images/cases/default.webp"}
            alt={project.metadata.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent" />
        </div>

        <div className="container max-w-4xl mx-auto relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Systems
          </Link>

          <div className="flex flex-wrap gap-4 mb-8">
             <span className="px-4 py-1.5 bg-primary text-black rounded-full text-[9px] font-black uppercase tracking-widest">
                System_Deployed
             </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            {project.metadata.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 italic">
            <span className="flex items-center gap-2">
              <Code2 size={12} /> Version: 5.3.0
            </span>
            <span className="flex items-center gap-2">
               Type: {project.metadata.category || 'Architecture'}
            </span>
          </div>
        </div>
      </header>

      {/* 📖 [CONTENT]: Intelligence Stream */}
      <section className="container max-w-4xl mx-auto px-6 pt-24">
        <div className="prose prose-invert prose-primary max-w-none">
          <MDXRemote source={project.content} components={components} />
        </div>

        {/* 🚀 [FOOTER_CTA] */}
        <footer className="mt-32 pt-20 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-12">
                System Audit Complete.
            </p>
            <Link
                href="/projects"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all"
            >
                Return to Systems
            </Link>
        </footer>
      </section>
    </article>
  );
}
