import React from "react";
import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/cards";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * [SECTION]: RecentBlogSection
 * แสดงบทความล่าสุดในหน้าแรกเพื่อเพิ่ม SEO Internal Linking และ Engagement
 */
export async function RecentBlogSection() {
  const allPosts = await getAllBlogPosts();
  const recentPosts = allPosts.slice(0, 3);

  if (recentPosts.length === 0) return null;

  return (
    <section className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              Intelligence <br /> <span className="text-primary italic">Transmission.</span>
            </h2>
            <p className="text-xl font-light text-white/40 leading-relaxed italic">
              "เจาะลึกกลยุทธ์โครงสร้างพื้นฐานดิจิทัลและ SEO 2026
              ที่เราใช้ขับเคลื่อนธุรกิจระดับภูมิภาค"
            </p>
          </div>

          <Link
            href="/blog"
            className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/10 hover:border-primary/30 transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Explore Full Hub
            </span>
            <ArrowRight
              size={16}
              className="text-primary group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
