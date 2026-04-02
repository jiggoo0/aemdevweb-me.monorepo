/** @format */

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  slug: string; // คีย์หลักสำหรับทำ Internal Link ภายในระบบ
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string; // ลิงก์ตรงไปยังเว็บไซต์จริงที่ออนไลน์อยู่
  className?: string;
  isFeatured?: boolean;
}

/**
 * ProjectCard - ส่วนแสดงเคสความสำเร็จที่คัดสรรมาแล้ว
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: นำเสนอความสำเร็จของระบบผ่านภาพลักษณ์ที่ดูพรีเมียมและน่าเชื่อถือ
 * ออกแบบและดูแลมาตรฐานโดย: นายเอ็มซ่ามากส์
 */
export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tags = [],
  link,
  className,
  isFeatured = false,
}: ProjectCardProps) {
  const displayImage = image || "/images/service/aemdevweb.webp";

  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden transition-all duration-700",
        "border-slate-100 bg-white shadow-sm hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.12)]",
        "dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl dark:hover:bg-white/10 dark:hover:shadow-blue-900/20",
        isFeatured &&
          "border-blue-100 ring-1 shadow-blue-50/50 ring-blue-600/10 dark:border-blue-500/30 dark:ring-blue-500/20",
        className
      )}
    >
      {/* 1. Visual Node: ส่วนแสดงภาพตัวอย่างโครงการ */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={displayImage}
          alt={`ผลงาน: ${title}`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={isFeatured}
        />

        {/* Layer ตกแต่งเพื่อความนุ่มนวลของภาพตอนแสดงผล */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {isFeatured && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-xl">
              <Star className="h-3 w-3 fill-white" /> ผลงานเด่น
            </span>
          )}
        </div>
      </div>

      {/* 2. Identity Hub: ส่วนแสดงชื่อและหมวดหมู่ของงาน */}
      <CardHeader className="space-y-4 p-6 lg:p-8">
        <CardTitle className="text-foreground text-xl leading-tight font-black transition-colors group-hover:text-blue-600 lg:text-2xl dark:text-white dark:group-hover:text-blue-400">
          {title}
        </CardTitle>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-muted-foreground dark:text-muted-foreground/70 rounded-lg border border-slate-100 bg-slate-50/80 px-3 py-1 text-[9px] font-black tracking-wider uppercase transition-all group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-blue-600/20 dark:group-hover:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      {/* 3. Logic Detail: คำอธิบายแนวคิดและการแก้ปัญหาในโปรเจกต์ */}
      <CardContent className="flex-grow px-6 pb-6 lg:px-8">
        <p className="text-muted-foreground dark:text-muted-foreground/70 line-clamp-3 text-sm leading-relaxed font-bold transition-colors group-hover:text-slate-700 dark:group-hover:text-slate-300">
          {description}
        </p>
      </CardContent>

      {/* 4. Connection Hub: จุดเชื่อมต่อเพื่อดูข้อมูลเชิงลึก */}
      <CardFooter className="grid grid-cols-2 gap-3 border-t border-slate-50 bg-slate-50/20 px-6 py-5 lg:px-8 dark:border-white/5 dark:bg-white/[0.02]">
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-xl border-slate-200 text-[11px] font-black tracking-widest uppercase transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-blue-400"
        >
          <Link href={`/projects/${slug}`}>
            <Eye className="mr-2 h-3.5 w-3.5" />
            ดูรายละเอียด
          </Link>
        </Button>

        {link ? (
          <Button
            asChild
            className="h-11 rounded-xl bg-slate-950 text-[11px] font-black tracking-widest uppercase shadow-lg shadow-slate-950/10 transition-all hover:bg-blue-600 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            <a
              href={link}
              target="_blank"
              rel={`noopener noreferrer ${link.includes("aemdevweb.com") || link.includes("unlink-th.com") ? "me" : ""}`}
            >
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              เยี่ยมชมเว็บ
            </a>
          </Button>
        ) : (
          <div className="text-muted-foreground/70 flex items-center justify-center text-[9px] font-black tracking-[0.2em] uppercase">
            System Setup
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
