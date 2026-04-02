"use client";

import React, { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import AreaCard from "./AreaCard";
import AreaInfrastructureHUD from "./AreaInfrastructureHUD";
import ThailandMap from "./ThailandMap";
import type { AreaNode } from "@/types";

interface AreaSearchHubProps {
  readonly allNodes: AreaNode[];
  readonly regions: readonly string[];
}

/**
 * @component AreaSearchHub
 * @description ระบบจัดการการค้นหาและกรองภูมิภาคแบบ Interactive (Industrial Node Search)
 */
export default function AreaSearchHub({ allNodes, regions }: AreaSearchHubProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<string>("All");
  const [nearMeNode, setNearMeNode] = useState<string | null>(null);

  // [NEAR_ME_LOGIC]: ตรวจจับพิกัดผู้ใช้เพื่อหาจังหวัดที่ใกล้ที่สุด
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // หาจังหวัดที่พิกัดใกล้เคียงที่สุด
          let minDistance = Infinity;
          let closestNode: string | null = null;

          allNodes.forEach((node) => {
            if (node.coordinates) {
              const d = Math.sqrt(
                Math.pow(node.coordinates.lat - latitude, 2) +
                  Math.pow(node.coordinates.lng - longitude, 2),
              );
              if (d < minDistance) {
                minDistance = d;
                closestNode = node.province;
              }
            }
          });

          if (closestNode) setNearMeNode(closestNode);
        },
        () => console.log("Geolocation_Access_Denied"),
        { timeout: 10000 },
      );
    }
  }, [allNodes]);

  // [SEARCH_LOGIC]: ค้นหาจากชื่อจังหวัดและสลัก
  const filteredNodes = useMemo(() => {
    return allNodes.filter((node) => {
      const matchesSearch =
        node.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.slug.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = activeRegion === "All" || node.region === activeRegion;
      return matchesSearch && matchesRegion;
    });
  }, [allNodes, searchQuery, activeRegion]);

  // [AUTO_SCROLL]: เลื่อนไปที่ภูมิภาคเมื่อกดเลือก (ถ้าเลือกภาคเฉพาะ)
  const handleRegionChange = (region: string) => {
    setActiveRegion(region);
    setSearchQuery(""); // ล้างคำค้นหาเมื่อเลือกภาคใหม่
    if (region !== "All") {
      const element = document.getElementById(`region-${region}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="space-y-24">
      {/* --- 01. NATIONAL INFRASTRUCTURE HUD --- */}
      <AreaInfrastructureHUD allNodes={allNodes} />

      {/* --- 02. GEOSPATIAL VISUALIZER (MAP) --- */}
      <ThailandMap
        allNodes={allNodes}
        activeRegion={activeRegion}
        onRegionChange={handleRegionChange}
      />

      {/* --- 03. CONTROL CENTER (Search & Filter) --- */}
      <section className="sticky top-20 z-40 -mx-4 px-4 py-6 backdrop-blur-md md:top-24">
        <div className="container mx-auto max-w-6xl">
          <div className="border-border/40 bg-surface-card/80 shadow-pro-lg flex flex-col gap-6 rounded-3xl border p-2 md:flex-row md:items-center">
            {/* SEARCH INPUT */}
            <div className="relative flex-grow">
              <div className="absolute top-1/2 left-5 -translate-y-1/2 text-[var(--color-brand-primary)] opacity-40">
                <IconRenderer name="Search" size={18} />
              </div>
              <input
                type="text"
                placeholder="ค้นหาจังหวัด หรือพื้นที่ให้บริการ (Search Nodes...)"
                className="text-text-primary w-full rounded-2xl border-none bg-[var(--surface-offset)]/50 py-4 pr-6 pl-14 font-bold outline-none placeholder:opacity-30 focus:ring-2 focus:ring-[var(--brand-primary)]/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* REGION SELECTOR */}
            <div className="flex flex-wrap gap-2 p-2">
              {["All", ...regions].map((region) => (
                <button
                  key={region}
                  onClick={() => handleRegionChange(region)}
                  className={cn(
                    "rounded-xl px-5 py-2.5 text-[10px] font-black tracking-widest uppercase transition-all",
                    activeRegion === region
                      ? "text-surface-main bg-[var(--color-brand-primary)] shadow-sm"
                      : "text-text-muted border-border/20 border bg-[var(--surface-offset)]/50 hover:bg-[var(--surface-offset)]",
                  )}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* NEAR ME NOTIFICATION */}
          {nearMeNode && !searchQuery && activeRegion === "All" && (
            <div className="mt-4 flex animate-bounce items-center justify-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
              <span className="font-mono text-[9px] font-black tracking-widest text-[var(--color-brand-primary)] uppercase opacity-80">
                Near_Me_Detected: {nearMeNode} | Node_Recommendation_Active
              </span>
            </div>
          )}
        </div>
      </section>

      {/* --- 04. RESULTS GRID --- */}
      <div className="space-y-32">
        {searchQuery ? (
          /* SEARCH RESULTS MODE */
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                Search_<span className="text-[var(--color-brand-primary)]">Results</span>
              </h2>
              <div className="from-brand-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />
              <span className="font-mono text-[10px] font-bold opacity-30">
                พบเนื้อหา: {filteredNodes.length.toString().padStart(2, "0")}
              </span>
            </div>

            {filteredNodes.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                {filteredNodes.map((node, index) => (
                  <AreaCard key={node.slug} data={node} index={index} />
                ))}
              </div>
            ) : (
              <div className="border-border/40 bg-surface-card/20 flex flex-col items-center justify-center rounded-3xl border border-dashed py-32 text-center">
                <p className="text-text-muted font-mono text-sm tracking-[0.2em] uppercase opacity-40">
                  No Node Matches Your Query.
                </p>
              </div>
            )}
          </section>
        ) : (
          /* REGIONAL HUB MODE */
          regions.map((region) => {
            const nodes = filteredNodes.filter((n) => n.region === region);
            if (nodes.length === 0) return null;

            return (
              <section key={region} id={`region-${region}`} className="scroll-mt-48 space-y-12">
                <div className="flex items-center gap-6">
                  <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                    {region}_<span className="text-[var(--color-brand-primary)]">Region</span>
                  </h2>
                  <div className="from-brand-primary/30 h-px flex-1 bg-gradient-to-r to-transparent" />
                  <span className="font-mono text-[10px] font-bold opacity-30">
                    จำนวน: {nodes.length.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                  {nodes.map((node, index) => (
                    <AreaCard key={node.slug} data={node} index={index} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}
