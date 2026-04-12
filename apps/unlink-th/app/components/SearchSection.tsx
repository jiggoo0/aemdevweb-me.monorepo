"use client";

import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-2 bg-card border border-border rounded-full flex items-center gap-4 group hover:border-primary/30 transition-all shadow-sm">
      <div className="pl-4">
        <Search
          className="text-muted-foreground group-hover:text-primary transition-colors"
          size={20}
        />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Public Registry (Site ID / Case ID)..."
        className="bg-transparent border-none outline-none w-full text-foreground font-mono text-xs placeholder:text-muted-foreground/50"
      />
      <button className="p-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all">
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
