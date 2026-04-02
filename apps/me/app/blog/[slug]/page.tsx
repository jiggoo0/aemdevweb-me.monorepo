/** @format */

import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const fullOgImage = `https://me.aemdevweb.com${post.image}`;

  return {
    title: `${post.title} | Blog by Alongkorl`,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Blog by Alongkorl`,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url: fullOgImage,
          secureUrl: fullOgImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.fullName],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blog by Alongkorl`,
      description: post.description,
      images: [fullOgImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white pb-32 transition-colors duration-500 selection:bg-blue-600/10 dark:bg-slate-950">
      <header className="relative overflow-hidden bg-slate-50 py-24 md:py-40 dark:bg-slate-900/50">
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-slate-100 blur-[100px] dark:bg-slate-800/20" />

        <Container className="relative z-10">
          <Link
            href="/blog"
            className="group text-muted-foreground/70 dark:text-muted-foreground mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-500"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>

          <div className="max-w-4xl space-y-10">
            <h1 className="text-foreground text-4xl leading-[0.95] font-black tracking-tighter md:text-8xl dark:text-white">
              {post.title}
            </h1>

            <div className="text-muted-foreground dark:text-muted-foreground/70 flex flex-wrap items-center gap-8 text-[11px] font-black tracking-[0.2em] uppercase">
              <div className="flex items-center gap-2.5">
                <Calendar
                  size={14}
                  className="text-blue-600 dark:text-blue-500"
                />
                {post.date}
              </div>
              <div className="flex items-center gap-2.5">
                <Tag size={14} className="text-blue-600 dark:text-blue-500" />
                {post.tags.join(", ")}
              </div>
            </div>
          </div>
        </Container>
      </header>

      <Container className="relative z-10 pt-24">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <main className="lg:col-span-8">
            <div className="relative mb-20 aspect-[16/9] overflow-hidden rounded-[3.5rem] bg-slate-100 shadow-2xl transition-all dark:bg-slate-900 dark:ring-1 dark:ring-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-90 transition-opacity hover:opacity-100"
                priority
              />
            </div>

            <div className="prose-aem dark:prose-invert max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </main>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              <div className="rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-2xl transition-colors dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
                  <Share2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-foreground mb-6 text-3xl leading-tight font-black tracking-tight dark:text-white">
                  Technical SEO <br /> Consulting
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground/70 mb-10 text-base leading-relaxed font-medium">
                  หากคุณต้องการเปลี่ยนเว็บไซต์ให้กลายเป็นสินทรัพย์ดิจิทัลที่สร้างผลลัพธ์จริง
                  ปรึกษาผมเพื่อวางโครงสร้างที่ถูกต้องได้ทันที
                </p>
                <Link
                  href="/contact"
                  className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.98] dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  เริ่มโปรเจกต์ของคุณ
                </Link>
              </div>

              <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-10 text-center transition-colors dark:border-white/5 dark:bg-white/[0.02]">
                <p className="text-muted-foreground/70 text-[10px] font-black tracking-[0.4em] uppercase">
                  Specialist Identity Hub
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
