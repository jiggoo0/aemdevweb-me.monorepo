import React from "react";
import { notFound } from "next/navigation";
import { GlassCard } from "@repo/ui";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { cn } from "@repo/ui";
import { JsonLd, getProjectSchema, getGraphSchema } from "@repo/seo";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Registry Not Found" };
  return {
    title: `${study.title} | Project Registry`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: [study.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study || !study.content) {
    notFound();
  }

  const formattedDate = study.date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(new Date(study.date))
    : "";

  const components = useMDXComponents({});

  return (
    <main
      className={cn(
        "min-h-screen bg-background text-foreground relative overflow-hidden py-24",
        study.theme,
      )}
    >
      <JsonLd
        data={getGraphSchema([
          getProjectSchema({
            title: study.title,
            description: study.description,
            url: `https://www.aemdevweb.com/portfolio/${slug}`,
            image: study.coverImage,
          }),
        ])}
      />
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Project Registry</span>
        </Link>
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full">
              {study.industry}
            </span>
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">{study.title}</h1>
          <p className="text-lg text-muted-foreground">{study.description}</p>
        </header>
        {study.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {study.stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </GlassCard>
            ))}
          </div>
        )}
        <GlassCard className="prose prose-invert max-w-none p-8">
          <MDXRemote source={study.content} components={components} />
        </GlassCard>
      </div>
    </main>
  );
}
