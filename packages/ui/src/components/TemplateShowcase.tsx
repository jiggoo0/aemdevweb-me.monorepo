import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
          className="group relative block"
        >
          <div className="glass-liquid authority-card h-full p-0 overflow-hidden flex flex-col">
            {/* Thumbnail Placeholder with Overlay */}
            <div className="relative aspect-[16/10] bg-muted/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-primary/10 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20">
                  {template.industry}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                {template.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                {template.description}
              </p>
              <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
                <span>Next.js 16 PPR</span>
                <span>SEO Authority</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
