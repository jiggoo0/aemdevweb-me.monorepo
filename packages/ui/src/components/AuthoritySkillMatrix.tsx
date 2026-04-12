"use client";

import React from "react";
import { Cpu, Globe, ShieldCheck } from "lucide-react";

interface SkillMatrixProps {
  skills: {
    technical: string[];
    seo: string[];
    governance: string[];
  };
}

/**
 * [UI COMPONENT]: AUTHORITY_SKILL_MATRIX v1.0.0
 * [STRATEGY]: Showcase professional expertise with institutional aesthetic
 */
export function AuthoritySkillMatrix({ skills }: SkillMatrixProps) {
  const categories = [
    {
      title: "Architecture & DevOps",
      icon: <Cpu className="text-blue-500" size={24} />,
      items: skills.technical,
      color: "border-blue-500/20 bg-blue-500/5",
    },
    {
      title: "SEO & Growth Strategy",
      icon: <Globe className="text-green-500" size={24} />,
      items: skills.seo,
      color: "border-green-500/20 bg-green-500/5",
    },
    {
      title: "Governance & Trust",
      icon: <ShieldCheck className="text-purple-500" size={24} />,
      items: skills.governance,
      color: "border-purple-500/20 bg-purple-500/5",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div
          key={cat.title}
          className={`p-8 rounded-[2rem] border ${cat.color} backdrop-blur-sm transition-all hover:scale-[1.02]`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/10 rounded-2xl">{cat.icon}</div>
            <h3 className="font-black uppercase tracking-tighter text-sm">{cat.title}</h3>
          </div>
          <ul className="space-y-4">
            {cat.items.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-500 leading-relaxed uppercase tracking-widest">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
