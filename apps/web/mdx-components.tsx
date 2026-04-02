/**
 * [SYSTEM CORE]: MDX_COMPONENT_MAPPER v18.0.0 (TYPE_SAFE_HARDENED)
 * [STRATEGY]: Strict Typing | Prop Omission | Callout Integration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
// [INTERNAL INFRASTRUCTURE]
import { Callout } from "@/components/ui/Callout";
import { slugify } from "@/lib/utils";

/** [INTERNAL_HELPER]: Extract Text from Children */
function extractText(children: React.ReactNode): string {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") return child.toString();
      if (React.isValidElement(child) && child.props.children)
        return extractText(child.props.children);
      return "";
    })
    .join("");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- [01. TYPOGRAPHY] ---
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={cn(
          "text-text-primary mt-12 mb-8 text-4xl font-black italic md:text-6xl",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, children, ...props }: ComponentPropsWithoutRef<"h2">) => {
      const id = slugify(extractText(children));
      return (
        <h2
          id={id}
          className={cn(
            "text-text-primary border-brand-primary mt-12 mb-6 border-l-4 pl-4 text-2xl font-black italic md:text-4xl",
            "scroll-mt-32", // Offset for sticky navbar
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ className, children, ...props }: ComponentPropsWithoutRef<"h3">) => {
      const id = slugify(extractText(children));
      return (
        <h3
          id={id}
          className={cn(
            "text-text-primary mt-10 mb-4 text-xl font-black italic md:text-2xl",
            "scroll-mt-32",
            className,
          )}
          {...props}
        >
          {children}
        </h3>
      );
    },

    // --- [02. NAVIGATION: TS2783 RESOLVED] ---
    a: ({ href, className, children, ...props }: ComponentPropsWithoutRef<"a">) => {
      const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
      const style = cn("text-brand-primary font-bold underline transition-colors", className);

      if (isInternal) {
        return (
          <Link
            href={href as string}
            className={style}
            {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}
          >
            {children}
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={style} {...props}>
          {children}
        </a>
      );
    },

    // --- [03. VISUALS: STRICT PROPS] ---
    img: ({ src, alt, className, ...props }: ComponentPropsWithoutRef<"img">) => (
      <span className="border-border bg-surface-card shadow-pro-sm rounded-section my-10 block overflow-hidden border">
        <Image
          src={src || "/images/og-main.webp"}
          alt={alt || "AEMDEVWEB Content"}
          width={1200}
          height={675}
          className={cn(
            "h-auto w-full transition-transform duration-700 hover:scale-105",
            className,
          )}
          sizes="(max-width: 1280px) 100vw, 1280px"
          {...(props as Omit<ComponentPropsWithoutRef<typeof Image>, "src" | "alt">)}
        />
      </span>
    ),

    // --- [04. CUSTOM COMPONENTS] ---
    Callout,
    ...components,
  };
}
