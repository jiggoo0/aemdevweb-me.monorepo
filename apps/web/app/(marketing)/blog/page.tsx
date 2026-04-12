import React, { Suspense } from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/cards";
import { Terminal, Search } from "lucide-react";
import { cacheLife, cacheTag } from "next/cache";

/**
 * [METADATA]: Page Metadata
 */
export const metadata = {
  title: "Intelligence Hub | AEM Monorepo",
  description: "ศูนย์รวมข้อมูลเชิงลึกด้านวิศวกรรมเว็บ กลยุทธ์ SEO และนวัตกรรม AI",
};

/**
 * [CACHED_FETCH]: getCachedPosts
 * มาตรฐาน Next.js 16 PPR Optimized Fetching
 */
async function getCachedPosts() {
  "use cache";
  cacheTag("blog-posts-all");
  cacheLife("days");
  const posts = await getAllBlogPosts();
  return { data: posts };
}

/**
 * [ASYNC_COMPONENT]: BlogGrid
 * แยกส่วนการดึงข้อมูลเพื่อให้สามารถรัน Suspense ได้
 */
async function BlogGrid() {
  const { data: posts } = await getCachedPosts();

  if (posts.length === 0) {
    return (
      <div className="py-40 text-center opacity-30 uppercase tracking-[0.5em] text-xs font-black">
        No intelligence records found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

/**
 * [PAGE]: BlogListingPage
 * ศูนย์กลางการรวบรวม Intelligence ของระบบ
 */
export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32 md:py-48">
      {/* 🌌 [ATMOSPHERIC_DECOR] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-32 max-w-5xl">
          <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Terminal className="text-primary" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">
              Intelligence Node
            </span>
          </div>

          <h1 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-white">
            Knowledge <br /> <span className="text-white/20">Protocol.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <p className="text-xl md:text-2xl font-light text-white/40 uppercase tracking-[0.2em] max-w-2xl leading-relaxed">
              แหล่งรวมบทความเชิงเทคนิคและกลยุทธ์การเติบโต <br />
              <span className="text-primary/60 font-mono text-[10px] tracking-[0.4em] uppercase underline underline-offset-8">
                Updated Real-time from Ledger
              </span>
            </p>

            {/* Filter Search Placeholder (Visual only for now) */}
            <div className="flex-grow max-w-md">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group focus-within:border-primary/30 transition-all duration-500">
                <Search size={18} className="text-white/20 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="SEARCH_PROTOCOL..." 
                  className="bg-transparent border-none outline-none w-full text-[10px] font-black uppercase tracking-widest text-white placeholder:text-white/10"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="mb-40">
          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-pulse py-20">
            {[1, 2, 3].map(i => <div key={i} className="h-96 bg-white/5 rounded-3xl" />)}
          </div>}>
            <BlogGrid />
          </Suspense>
        </section>

        <footer className="pt-20 border-t border-white/5 flex flex-col items-center gap-6 opacity-30">
          <p className="text-[9px] font-mono uppercase tracking-[0.5em]">
            End of Intelligence Registry | Secure Access Enabled
          </p>
        </footer>
      </div>
    </main>
  );
}
