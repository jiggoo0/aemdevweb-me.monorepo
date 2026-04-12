"use client";

import React from "react";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { StatusIndicator, UnlinkTrustBadge } from "@repo/ui";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export function Navbar() {
  const { brand } = SHARED_SITE_CONFIG;
  const pathname = usePathname();

  const navLinks = [
    { name: "Network", href: ROUTES.AREA },
    { name: "Solutions", href: ROUTES.SERVICES },
    { name: "Registry", href: ROUTES.PORTFOLIO },
    { name: "Intelligence", href: ROUTES.BLOG.ROOT },
    { name: "Identity", href: ROUTES.ME },
  ];

  return (
    <nav
      className="p-6 flex justify-between items-center bg-background/40 backdrop-blur-2xl border-b border-border sticky top-0 z-50"
      aria-label="Main Infrastructure Navigation"
    >
      <Link
        href={ROUTES.HOME}
        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        aria-label="AEM Home Hub"
      >
        <div
          className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
          aria-hidden="true"
        >
          <Image
            src="/logo-icon.svg"
            alt="AEM Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div className="hidden md:block">
          <p className="font-black uppercase tracking-[0.3em] text-[10px] leading-none text-foreground">
            {brand.name}
          </p>
          <p className="text-[8px] text-primary font-bold uppercase tracking-widest mt-1">
            Infrastructure Hub
          </p>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 hover:text-primary ${
              pathname === link.href ? "text-primary" : "text-foreground/40"
            }`}
          >
            {link.name}
            {pathname === link.href && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in duration-500" />
            )}
          </Link>
        ))}
      </div>

      <div className="flex gap-6 items-center">
        <StatusIndicator status="SECURE" label="AEM_ENCRYPTED" />
        <div className="hidden sm:block">
          <UnlinkTrustBadge siteId="AEM-GLOBAL-ENTRY" />
        </div>
      </div>
    </nav>
  );
}
