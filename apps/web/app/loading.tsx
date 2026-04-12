import React from "react";

/**
 * [UI]: LOADING SKELETON v2.0.0
 * [STRATEGY]: Cinematic Dark Skeleton
 */
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 py-32 flex flex-col items-center">
        {/* Hero Skeleton */}
        <div className="h-12 w-64 bg-white/5 border border-white/10 rounded-full mb-12 animate-pulse" />
        <div className="h-20 w-3/4 bg-white/5 rounded-3xl mb-8 animate-pulse" />
        <div className="h-6 w-1/2 bg-white/5 rounded-full mb-20 animate-pulse" />

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-80 bg-white/[0.02] border border-white/5 rounded-[2.5rem] animate-pulse"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
