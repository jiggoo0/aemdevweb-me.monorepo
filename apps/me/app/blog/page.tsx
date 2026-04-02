/** @format */

import Container from "@/components/layout/Container";
import BlogCard from "@/components/shared/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "คลังความรู้เชิงเทคนิคและการวางระบบ SEO | AEMDEVWEB",
  description:
    "ถอดบทเรียนจากประสบการณ์จริงในการทำ Technical SEO และการออกแบบโครงสร้างเว็บไซต์เพื่อสร้างความได้เปรียบทางธุรกิจอย่างยั่งยืน",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

/**
 * Blog Listing Page
 * รวบรวมองค์ความรู้เชิงลึกในรูปแบบ Static Content เพื่อประสิทธิภาพสูงสุด
 */
export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-32 transition-colors duration-500 dark:bg-slate-950">
      {/* Background Decoration: สลับสีตามธีม */}
      <div className="absolute top-0 left-0 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px] dark:bg-blue-600/5" />
      <div className="absolute right-0 bottom-0 h-[30vw] w-[30vw] translate-x-1/4 translate-y-1/4 rounded-full bg-slate-100 blur-[100px] dark:bg-slate-800/10" />

      <Container className="relative z-10 pt-32">
        {/* Section Header: เน้นความหนักแน่นและ Specialist Identity */}
        <header className="mb-32 space-y-10">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-16 bg-blue-600 shadow-lg shadow-blue-600/20" />
            <span className="text-[11px] font-black tracking-[0.5em] text-blue-600 uppercase dark:text-blue-500">
              Technical Knowledge Base
            </span>
          </div>

          <div className="max-w-4xl space-y-8">
            <h1 className="text-foreground text-6xl leading-[0.9] font-black tracking-tighter md:text-9xl dark:text-white">
              Identity <br />
              <span className="text-blue-600 italic underline decoration-blue-500/10 decoration-8 underline-offset-8 dark:decoration-blue-500/20">
                Insights.
              </span>
            </h1>
            <p className="text-muted-foreground dark:text-muted-foreground/70 max-w-2xl text-xl leading-relaxed font-medium md:text-3xl">
              การตกผลึกทางความคิดเกี่ยวกับการวางโครงสร้างระบบ (Web Structure)
              และกลยุทธ์การทำ SEO
              ที่เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่มีมูลค่าจริง
            </p>
          </div>
        </header>

        {/* Blog Grid Content */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                image={post.image}
                tags={post.tags}
              />
            ))}
          </div>
        ) : (
          /* Professional Empty State */
          <div className="flex flex-col items-center justify-center rounded-[5rem] border border-slate-100 bg-slate-50 py-40 text-center dark:border-white/5 dark:bg-white/[0.02] dark:backdrop-blur-3xl">
            <div className="relative mb-10 h-1.5 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-white/5">
              <div className="absolute inset-0 h-full w-1/2 animate-[shimmer_2s_infinite] bg-blue-600" />
            </div>
            <p className="text-muted-foreground/70 dark:text-muted-foreground mb-4 text-[11px] font-black tracking-[0.5em] uppercase">
              Content Pipeline
            </p>
            <h3 className="text-foreground text-3xl font-black dark:text-white">
              กำลังจัดลำดับเนื้อหาใหม่...
            </h3>
          </div>
        )}
      </Container>
    </main>
  );
}
