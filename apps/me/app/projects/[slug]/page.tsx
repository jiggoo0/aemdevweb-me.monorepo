/** @format */

import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Search, Code2 } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return {};

  const fullOgImage = `https://me.aemdevweb.com${project.image}`;

  return {
    title: `${project.title} | Case Study by Alongkorl`,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.url}/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study by Alongkorl`,
      description: project.description,
      url: `${siteConfig.url}/projects/${slug}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: fullOgImage,
          secureUrl: fullOgImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study by Alongkorl`,
      description: project.description,
      images: [fullOgImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  const getProjectMetrics = () => {
    return [
      {
        label: "Architecture",
        value: "Next.js 16",
        icon: <Cpu className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        label: "Logic",
        value: "TypeScript",
        icon: <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        label: "Data Model",
        value: "JSON-LD",
        icon: <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
    ];
  };

  const metrics = getProjectMetrics();

  return (
    <main className="min-h-screen bg-white pb-32 transition-colors duration-500 selection:bg-blue-600/10 dark:bg-slate-950">
      <Container className="pt-24">
        {/* Navigation */}
        <Link
          href="/projects"
          className="group text-muted-foreground/70 mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          กลับไปที่หน้าผลงาน
        </Link>

        {/* Hero Section */}
        <header className="mb-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-6 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span className="font-heading text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase italic dark:text-blue-400">
              Project Insight
            </span>
          </div>
          <h1 className="font-heading text-foreground text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl dark:text-white">
            {project.title.split(" ")[0]} <br />
            <span className="text-blue-600 italic underline decoration-blue-500/10 decoration-8 underline-offset-8 dark:decoration-blue-500/20">
              {project.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="font-body text-muted-foreground dark:text-muted-foreground max-w-3xl text-xl leading-relaxed font-bold md:text-2xl">
            {project.description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl shadow-blue-900/5 transition-transform duration-700 hover:scale-[1.01] dark:border dark:border-white/10 dark:bg-slate-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose-aem dark:prose-invert max-w-none">
              <MDXRemote source={project.content} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl">
                <h3 className="font-heading text-muted-foreground/70 mb-10 text-[10px] font-black tracking-[0.4em] uppercase italic">
                  Project Stats
                </h3>
                <div className="space-y-10">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-colors hover:bg-blue-50 dark:bg-white/5 dark:hover:bg-white/10">
                          {item.icon}
                        </div>
                        <span className="font-heading text-muted-foreground/70 dark:text-muted-foreground text-[11px] font-black tracking-widest uppercase italic">
                          {item.label}
                        </span>
                      </div>
                      <span className="font-heading text-foreground text-xl font-black dark:text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="rounded-[3.5rem] bg-slate-950 p-12 text-white shadow-2xl shadow-blue-900/10 dark:border dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl">
                  <h3 className="font-heading mb-4 text-2xl font-black tracking-tight text-blue-500 uppercase italic dark:text-blue-400">
                    Project Live
                  </h3>
                  <p className="font-body text-muted-foreground dark:text-muted-foreground/70 mb-10 text-sm leading-relaxed font-bold">
                    ตรวจสอบประสิทธิภาพและผลลัพธ์การทำงานจริงบนสภาพแวดล้อม
                    Production
                  </p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="flex h-18 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98] dark:bg-blue-600 dark:hover:bg-blue-500"
                  >
                    Visit Website <ExternalLink size={14} />
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
