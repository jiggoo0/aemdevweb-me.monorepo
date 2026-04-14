import React, { Suspense } from "react";
import { getAllContent } from "@/lib/mdx";
import { Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Intelligence Hub | AEMZA MACKS",
  description: "Knowledge Transmissions from the Chief Digital Architect",
};

async function BlogGrid() {
  const posts = await getAllContent("blog");

  if (posts.length === 0) {
    return (
      <div className="py-40 text-center opacity-30 uppercase tracking-[0.5em] text-xs font-black">
        No records found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {posts.map((post, index) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group relative block rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:border-primary/30 transition-all duration-700"
        >
          <div className="aspect-[16/10] relative overflow-hidden">
            <Image
              src={post.image || "/images/blog/default.webp"}
              alt={post.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
          </div>
          <div className="p-10 relative">
            <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">
              <span>{post.category}</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>{new Date(post.date).toLocaleDateString("en-GB")}</span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-white/40 font-light leading-relaxed line-clamp-2 italic mb-8">
              {post.description}
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
              Read Protocol{" "}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white pt-32 pb-48 px-6">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Terminal className="text-primary" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
              Intelligence Node
            </span>
          </div>

          <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
            Intelligence <br /> <span className="text-primary">Hub.</span>
          </h1>

          <p className="text-2xl font-light text-white/40 max-w-2xl italic border-l-2 border-primary/20 pl-8 leading-relaxed">
            "Knowledge is Infrastructure: บทความวิเคราะห์และเจาะลึกกลยุทธ์ดิจิทัลระดับสถาบัน"
          </p>
        </header>

        <section>
          <Suspense
            fallback={<div className="h-96 w-full bg-white/5 animate-pulse rounded-[3rem]" />}
          >
            <BlogGrid />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
