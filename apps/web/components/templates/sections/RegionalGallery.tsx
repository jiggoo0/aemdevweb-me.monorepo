/**
 * [SECTION COMPONENT]: REGIONAL_GALLERY v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";

import type { UniversalTemplateProps } from "@/types";

interface RegionalGalleryProps {
  data?: UniversalTemplateProps;
  images?: readonly string[];
}

export const RegionalGallery = ({ data, images: directImages }: RegionalGalleryProps) => {
  const images = directImages || data?.regionalVisuals?.gallery || [];
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <section ref={ref} className="container mx-auto overflow-hidden px-4 py-24">
      <div
        className={cn(
          "mb-12 space-y-4 transition-all duration-1000",
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <p className="font-mono text-xs font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
          ภาพบรรยากาศ
        </p>
        <h2 className="font-[family-name:var(--font-primary)] text-4xl font-black uppercase italic md:text-6xl">
          Visual <span className="text-[var(--brand-primary)]">Context.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((img, idx) => {
          const imgData = IMAGE_BLUR_DATA[img as keyof typeof IMAGE_BLUR_DATA] || null;
          return (
            <div
              key={idx}
              className={cn(
                "group relative aspect-video overflow-hidden rounded-[var(--radius)] border border-[var(--foreground)]/5 transition-all duration-1000",
                visible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-12 scale-95 opacity-0",
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Image
                src={img}
                alt={`Regional Visual ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder={imgData?.blurDataURL ? "blur" : "empty"}
                blurDataURL={imgData?.blurDataURL}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
