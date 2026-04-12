/**
 * [UI COMPONENT]: SKILL_MATRIX v1.0.0 (NAMED_EXPORT)
 */

import React, { memo } from "react";
import { cn } from "../lib/utils";

export interface SkillItem {
  name: string;
  level: number;
  category: "CORE" | "SEO" | "UI" | "ARCH";
  icon?: React.ReactNode;
}

interface SkillMatrixProps {
  skills: SkillItem[];
  className?: string;
  title?: string;
}

const SkillMatrixComponent = ({ skills, className, title = "Expertise Hub" }: SkillMatrixProps) => {
  return (
    <div className={cn("relative z-10 w-full max-w-4xl mx-auto p-8", className)}>
      <header className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
          {title.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-blue-500" : ""}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="h-1 w-24 bg-blue-500 rounded-full mb-6 mx-auto md:mx-0" />
      </header>

      <div className="grid grid-cols-1 md:md:grid-cols-2 gap-6">
        {(skills ?? []).map((skill) => (
          <div
            key={skill.name}
            className={cn(
              "group relative p-6 bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500",
              "hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1",
            )}
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-all" />

            <div className="flex justify-between items-end mb-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                  {skill.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <span className="text-2xl font-black text-white/20 group-hover:text-blue-500/40 font-mono transition-all">
                {skill.level}%
              </span>
            </div>

            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative z-10">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2 relative z-10">
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full animate-pulse",
                  skill.level > 80 ? "bg-green-500" : "bg-blue-500",
                )}
              />
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">
                {skill.level > 90 ? "Authority Master" : "Active Specialist"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillMatrix = memo(SkillMatrixComponent);
