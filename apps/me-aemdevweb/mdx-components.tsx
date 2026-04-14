import React from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-none">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 mt-16 text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold uppercase tracking-wide mb-6 mt-12">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg md:text-xl font-light leading-relaxed mb-8 text-white/60">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-8 mb-8 space-y-4 text-white/40">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-8 mb-8 space-y-4 text-white/40">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg font-light leading-relaxed italic">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-8 py-4 italic text-white/80 bg-white/5 rounded-r-2xl my-12 text-xl font-light">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <span className="my-16 block overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
        <img
          {...props}
          alt={props.alt || ""}
          className="h-auto w-full transition-all duration-1000"
        />
      </span>
    ),
    hr: () => <hr className="my-20 border-white/5" />,
    ...components,
  };
}
