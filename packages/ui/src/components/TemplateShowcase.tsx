import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

interface TemplateItem {
  slug: string;
  title: string;
  industry: string;
  description: string;
  thumbnail: string;
}

interface TemplateShowcaseProps {
  templates: TemplateItem[];
  className?: string;
}

/**
 * [COMPONENT]: TemplateShowcase
 * แสดงรายการเทมเพลตธุรกิจด้วยดีไซน์ระดับโลก (Glass Liquid Effect)
 */
export const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({ templates, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {templates.map((template) => (
        <Link
          key={template.slug}
          href={`/portfolio/${template.slug}`}
          className="group relative block h-full"
        >
          <div className="glass-liquid authority-card h-full p-0 overflow-hidden flex flex-col transition-all duration-500 hover:scale-[1.02]">
            {/* 🖼️ Thumbnail with Dynamic Image */}
            <div className="relative aspect-[16/10] bg-muted/20 overflow-hidden">
              <Image
                src={template.thumbnail}
                alt={template.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-xl text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/30">
                  {template.industry}
                </span>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>

            {/* 📝 Content */}
            <div className="p-8 flex flex-col flex-grow relative z-20">
              <h3 className="text-2xl font-black mb-3 group-hover:text-secondary transition-colors line-clamp-1 uppercase tracking-tighter">
                {template.title}
              </h3>
              <p className="text-sm text-muted-foreground/80 line-clamp-2 mb-6 flex-grow font-light leading-relaxed">
                {template.description}
              </p>
              <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                  Next.js 16 PPR
                </span>
                <span>SEO Authority</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
