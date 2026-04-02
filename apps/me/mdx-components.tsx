/** @format */

import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

/**
 * MDX Components Configuration
 * กำหนดการแสดงผลของ HTML Tags ภายในไฟล์ MDX
 * เน้นความสะอาด (Clean UI) และโครงสร้าง SEO ที่ถูกต้อง
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 🏷️ Typography: จัดลำดับความสำคัญของหัวข้อ
    h1: ({ children }) => (
      <h1 className="text-foreground mb-12 text-5xl font-black tracking-tighter md:text-5xl dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-foreground mt-24 mb-10 text-4xl font-black tracking-tight md:text-4xl dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-foreground mt-16 mb-8 text-3xl font-bold tracking-tight dark:text-slate-100">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-medium md:leading-[2.2] dark:text-slate-200">
        {children}
      </p>
    ),

    // 🔗 Links & Navigation
    a: ({ href, children, ...props }) => {
      const isInternal = href?.startsWith("/");
      if (isInternal) {
        return (
          <Link
            href={href as string}
            className="font-bold text-blue-600 underline decoration-blue-200/50 decoration-2 underline-offset-8 transition-all hover:text-blue-700 hover:decoration-blue-400 dark:text-blue-400 dark:decoration-blue-900/50 dark:hover:text-blue-300"
            {...props}
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel={`noopener noreferrer ${href?.includes("aemdevweb.com") || href?.includes("facebook.com") || href?.includes("linkedin.com") || href?.includes("x.com") || href?.includes("lin.ee") ? "me" : ""}`}
          className="font-bold text-blue-600 underline decoration-blue-200/50 decoration-2 underline-offset-8 transition-all hover:text-blue-700 hover:decoration-blue-400 dark:text-blue-400 dark:decoration-blue-900/50 dark:hover:text-blue-300"
          {...props}
        >
          {children}
        </a>
      );
    },

    // 🖼️ Media: จัดการรูปภาพให้เป็น Responsive
    img: (props) => (
      <div className="relative my-20 aspect-video w-full overflow-hidden rounded-[3.5rem] border-8 border-slate-50 shadow-2xl dark:border-white/5 dark:shadow-blue-900/10">
        <Image
          fill
          className="object-cover"
          {...(props as ImageProps)}
          alt={props.alt || "AEMDEVWEB Blog Content"}
        />
      </div>
    ),

    // 📋 Lists
    ul: ({ children }) => (
      <ul className="text-muted-foreground mb-12 ml-6 list-disc space-y-5 text-lg dark:text-slate-200">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-muted-foreground mb-12 ml-6 list-decimal space-y-5 text-lg dark:text-slate-200">
        {children}
      </ol>
    ),

    // 💻 Code Blocks & Inline Code
    code: ({ children, ...props }) => {
      // ตรวจสอบว่าเป็น Inline Code หรือ Code Block
      const isInline = !props["data-language" as keyof typeof props];

      if (isInline) {
        return (
          <code
            className="rounded-lg bg-slate-100 px-2 py-0.5 font-mono text-sm font-bold text-blue-600 dark:bg-white/5 dark:text-blue-400"
            {...props}
          >
            {children}
          </code>
        );
      }

      return <code {...props}>{children}</code>;
    },
    pre: ({ children, ...props }) => (
      <pre
        className="mt-4 mb-8 overflow-x-auto rounded-[2rem] font-mono text-sm leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    ),

    ...components,
  };
}
