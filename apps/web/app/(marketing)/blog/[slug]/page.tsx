import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { GlassCard } from "@repo/ui";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { getPostMetadataBySlug, getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/cards";
import type { Metadata } from "next";
import { cacheLife, cacheTag } from "next/cache";

/**
 * [TYPE]: PostProps
 */
interface PostProps {
  params: Promise<{ slug: string }>;
}

/**
 * [METADATA_GENERATOR]: generateMetadata
 */
export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostMetadataBySlug(slug);

  if (!post) {
    return { title: "Protocol Not Found | Intelligence Hub" };
  }

  return {
    title: `${post.title} | Intelligence Hub`,
    description: post.excerpt,
  };
}

/**
 * [CACHED_FETCH]: getCachedPost
 */
async function getCachedPost(slug: string) {
  "use cache";
  cacheTag(`blog-post-${slug}`);
  cacheLife("days");
  const post = await getPostMetadataBySlug(slug);
  return { data: post };
}

/**
 * [STATIC_PARAMS]: generateStaticParams
 */
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * [CONTENT_RENDERER]: MDXContent
 */
async function MDXContent({ slug }: { slug: string }) {
  try {
    const { default: PostContent } = await import(`@/content/blog/${slug}.mdx`);
    return <PostContent />;
  } catch {
    return null;
  }
}

/**
 * [PAGE]: BlogPostPage
 */
export default async function BlogPostPage({ params }: PostProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">
            Back to Intelligence Hub
          </span>
        </Link>

        <Suspense fallback={<div className="animate-pulse h-96 bg-white/5 rounded-2xl" />}>
          <PostContentWrapper slug={slug} />
        </Suspense>
      </div>
    </main>
  );
}

async function PostContentWrapper({ slug }: { slug: string }) {
  const { data: post } = await getCachedPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={12} />
            <span className="text-[10px] font-mono uppercase">
              {new Date(post.published_at).toLocaleDateString("th-TH")}
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <User size={14} className="text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                AEM ARCHITECT
              </span>
              <span className="text-[9px] text-muted-foreground uppercase tracking-widest">
                Protocol Lead
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock size={12} />
            <span className="text-[10px] font-mono uppercase tracking-widest">
              {post.readingTime || "12 min"} read
            </span>
          </div>
        </div>
      </header>

      <GlassCard className="p-8 md:p-16 border-white/5 bg-white/[0.01] prose prose-invert prose-zinc max-w-none mb-24">
        <MDXContent slug={slug} />
      </GlassCard>

      {/* Related Posts */}
      <section className="mb-24">
        <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Related Intel.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
