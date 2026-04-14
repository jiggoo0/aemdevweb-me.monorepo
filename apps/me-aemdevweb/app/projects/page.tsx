import React, { Suspense } from "react";
import { getAllContent } from "@/lib/mdx";
import { Terminal, ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Systems & Architecture | AEMZA MACKS",
  description: "Bespoke Digital Infrastructures and Platforms by AEMZA MACKS",
};

async function ProjectsGrid() {
  const projects = await getAllContent("projects");

  if (projects.length === 0) {
    return (
      <div className="py-40 text-center opacity-30 uppercase tracking-[0.5em] text-xs font-black">
        No projects deployed.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project) => (
        <Link 
          key={project.slug} 
          href={`/projects/${project.slug}`}
          className="group relative block rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:border-primary/30 transition-all duration-700"
        >
          <div className="aspect-video relative overflow-hidden">
             <Image 
               src={project.image || "/images/cases/default.webp"} 
               alt={project.title} 
               fill 
               className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
          </div>
          <div className="p-12 relative">
             <div className="flex items-center gap-4 mb-6">
                <Code2 className="text-primary/60" size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                  System_Build_v1.0
                </span>
             </div>
             <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors leading-none">
                {project.title}
             </h3>
             <p className="text-white/40 font-light leading-relaxed italic mb-8 max-w-sm line-clamp-2">
                {project.description}
             </p>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                Inspect System <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white pt-32 pb-48 px-6">
      <div className="container max-w-6xl mx-auto">
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Code2 className="text-primary" size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
              Infrastructure Showcase
            </span>
          </div>

          <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-12">
             Architected <br /> <span className="text-primary">Systems.</span>
          </h1>
          
          <p className="text-2xl font-light text-white/40 max-w-2xl italic border-l-2 border-primary/20 pl-8 leading-relaxed">
            "Infrastructure is Destiny: การออกแบบสถาปัตยกรรมดิจิทัลเพื่อผลลัพธ์ระดับสูงสุด"
          </p>
        </header>

        <section>
          <Suspense fallback={<div className="h-96 w-full bg-white/5 animate-pulse rounded-[3rem]" />}>
            <ProjectsGrid />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
