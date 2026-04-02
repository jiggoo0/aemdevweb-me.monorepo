/** @format */

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  className?: string;
}

/**
 * BlogCard Component - Specialist Content Version
 * -------------------------------------------------------------------------
 * ออกแบบมาเพื่อเน้นการอ่านข้อมูลที่ง่ายและส่งเสริมลำดับความสำคัญของเนื้อหา
 * พัฒนาและควบคุมมาตรฐานความเรียบร้อยโดย: นายเอ็มซ่ามากส์
 */
export default function BlogCard({
  title,
  description,
  image,
  date,
  author = "อลงกรณ์ ยมเกิด",
  tags = [],
  slug,
  className,
}: BlogCardProps) {
  // ตรวจสอบรูปภาพสำรองหากบทความไม่มีรูปภาพประกอบ
  const blogImage = image || "/images/blog/aemdevweb.webp";

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[3rem] border border-slate-100 bg-white transition-all duration-500",
        "hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/10",
        "dark:border-white/5 dark:bg-white/[0.03] dark:backdrop-blur-3xl dark:hover:bg-white/[0.05] dark:hover:shadow-blue-900/20",
        className
      )}
    >
      {/* ส่วนแสดงผลภาพ (Visual Node) */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-50 dark:bg-slate-900">
        <Image
          src={blogImage}
          alt={`บทความ: ${title}`}
          fill
          className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* ป้ายแสดงวันที่ในรูปแบบโปร่งแสง (Glassmorphism) */}
        <div className="absolute top-5 left-5 z-10">
          <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/40">
            <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-500" />
            <span className="text-foreground text-[10px] font-black tracking-widest uppercase dark:text-white">
              {date}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* ส่วนเนื้อหาหลัก (Content Hub) */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-blue-400">
              <User size={14} />
            </div>
            <span className="text-muted-foreground/70 dark:text-muted-foreground text-[10px] font-black tracking-[0.2em] uppercase">
              {author}
            </span>
          </div>

          {tags.length > 0 && (
            <div className="flex items-center gap-1.5 text-[9px] font-black tracking-widest text-blue-600 uppercase dark:text-blue-400">
              <Hash size={11} />
              <span>{tags[0]}</span>
            </div>
          )}
        </div>

        <h3 className="text-foreground mb-5 line-clamp-2 text-xl leading-snug font-black transition-colors group-hover:text-blue-600 lg:text-3xl dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h3>

        <p className="text-muted-foreground dark:text-muted-foreground/70 mb-10 line-clamp-3 text-sm leading-relaxed font-bold transition-colors group-hover:text-slate-700 md:text-base dark:group-hover:text-slate-300">
          {description}
        </p>

        {/* ส่วนปุ่มดำเนินการ (Navigation Action) */}
        <div className="mt-auto flex items-center gap-3 text-[10px] font-black tracking-[0.25em] text-blue-600 uppercase dark:text-blue-400">
          <span className="transition-all group-hover:tracking-[0.35em]">
            เข้าสู่เนื้อหาบทความ
          </span>
          <div className="h-[2px] w-8 bg-blue-100 transition-all duration-500 group-hover:w-14 group-hover:bg-blue-600 dark:bg-white/10 dark:group-hover:bg-blue-500" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition-all group-hover:bg-blue-600 group-hover:text-white dark:bg-white/5 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
