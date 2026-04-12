import type { MDXComponents } from "mdx/types";

/**
 * [COMPONENTS]: MDX RENDERER CONFIGURATION
 * ปรับแต่งคอมโพเนนต์ที่ใช้ในการเรนเดอร์ MDX เพื่อให้เข้ากับ Design System
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // กำหนดคอมโพเนนต์มาตรฐานที่นี่ (h1, p, pre, etc.)
    h1: ({ children }) => (
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold uppercase tracking-tight mb-6 mt-12">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-lg font-light leading-relaxed mb-6 text-white/70">{children}</p>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="text-lg font-light text-white/70">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-white/50 my-8">
        {children}
      </blockquote>
    ),
    // 📢 Custom Callout Component
    Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: string }) => (
      <div
        className={`p-6 rounded-3xl border my-8 ${
          type === "warning"
            ? "bg-orange-500/10 border-orange-500/20 text-orange-200"
            : type === "error"
              ? "bg-red-500/10 border-red-500/20 text-red-200"
              : "bg-primary/10 border-primary/20 text-primary-foreground"
        }`}
      >
        {children}
      </div>
    ),
    code: ({ children }) => (
      <code className="bg-white/10 rounded px-1.5 py-0.5 font-mono text-sm">{children}</code>
    ),
    ...components,
  };
}
