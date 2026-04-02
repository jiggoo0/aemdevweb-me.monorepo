/**
 * [SYSTEM COMPONENT]: NAV_BAR v20.0.0 (REACT_19_STANDARDIZED)
 * [STRATEGY]: Compound Components | Hierarchical Support | High-Accessibility (WCAG)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, type NavItem } from "@/constants/navigation";
import { UI_STRINGS } from "@/constants/ui-strings";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import IconRenderer from "@/components/ui/IconRenderer";

// =========================================
// [SUB-COMPONENT]: NAV_LOGO
// =========================================
const NavLogo = memo(({ onClick }: { onClick?: () => void }) => (
  <div className="flex items-center gap-4">
    <Link
      href="/"
      className="group focus-visible:ring-brand-primary relative z-[710] flex items-center gap-2 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
      onClick={onClick}
      aria-label="Home - AEMDEVWEB"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-primary)] text-[10px] font-black text-white uppercase shadow-md transition-transform group-hover:rotate-6">
        AEM
      </div>
      <span className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
        DEVWEB
      </span>
    </Link>

    <div className="hidden items-center gap-2 border-l border-white/10 pl-4 md:flex">
      <div className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_var(--brand-primary)]"></span>
      </div>
      <span className="font-sans text-[9px] font-bold tracking-widest text-emerald-500 uppercase">
        {UI_STRINGS.cta.systemActiveStatus}
      </span>
    </div>
  </div>
));
NavLogo.displayName = "NavLogo";

// =========================================
// [SUB-COMPONENT]: DESKTOP_MENU
// =========================================
const DesktopMenu = memo(
  ({ navigationItems, pathname }: { navigationItems: readonly NavItem[]; pathname: string }) => {
    return (
      <nav
        className="hidden items-center gap-2 lg:flex"
        role="navigation"
        aria-label="Main Navigation"
      >
        <ul className="bg-border/20 flex items-center gap-1 rounded-full p-1 pr-6 backdrop-blur-sm">
          {navigationItems.map((link) => {
            const isActive =
              pathname === link.href || link.children?.some((child) => pathname === child.href);
            const hasChildren = link.children && link.children.length > 0;

            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex items-center gap-1 px-5 py-2 text-[10px] leading-relaxed font-black tracking-[0.2em] uppercase transition-all outline-none focus-visible:text-[var(--color-brand-primary)]",
                    isActive ? "text-white" : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 z-[-1] rounded-full bg-[var(--color-brand-primary)] shadow-sm transition-all duration-300" />
                  )}
                  {link.label}
                  {hasChildren && (
                    <IconRenderer
                      name="ChevronDown"
                      size={10}
                      className="ml-1 opacity-50 transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Sub-menu Dropdown */}
                {hasChildren && (
                  <div className="invisible absolute top-full left-1/2 z-[800] mt-2 w-64 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <ul className="bg-surface-card border-border shadow-pro-xl rounded-card-lg overflow-hidden border p-2 backdrop-blur-xl">
                      {link.children?.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block rounded-lg px-4 py-3 text-[10px] font-bold tracking-widest uppercase transition-colors hover:bg-[var(--color-brand-primary)]/10 hover:text-[var(--color-brand-primary)]",
                              pathname === child.href
                                ? "bg-[var(--color-brand-primary)]/5 text-[var(--color-brand-primary)]"
                                : "text-text-secondary",
                            )}
                          >
                            {child.label}
                            {child.description && (
                              <span className="mt-1 block text-[10px] font-medium normal-case italic opacity-90">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
          <li className="bg-border/20 mx-2 h-4 w-px" aria-hidden="true" />
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    );
  },
);
DesktopMenu.displayName = "DesktopMenu";

// =========================================
// [MAIN COMPONENT]: NAVBAR
// =========================================
const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      if (currentScrollY > 150 && diff > 50 && !isOpen) {
        setIsHidden(true);
      } else if (diff < -20 || currentScrollY < 20) {
        setIsHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    if (!mounted) return;
    setIsOpen((prev) => !prev);
  }, [mounted]);

  return (
    <>
      <header
        className={cn(
          "z-nav fixed top-0 left-0 w-full px-4 py-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-6",
          isHidden ? "-translate-y-[120%]" : "translate-y-0",
        )}
      >
        <div className="border-border/40 pointer-events-auto mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border bg-[var(--surface-main)]/80 px-5 shadow-lg backdrop-blur-md md:h-16 md:px-8">
          <NavLogo onClick={() => setIsOpen(false)} />

          <DesktopMenu navigationItems={MAIN_NAV} pathname={pathname} />

          {/* Mobile UI Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className={cn(
                "group border-border/40 bg-surface-card/50 focus-visible:ring-brand-primary relative z-[720] flex h-10 w-10 items-center justify-center rounded-full border transition-all outline-none focus-visible:ring-2 active:scale-90",
                isOpen &&
                  "border-[var(--color-brand-primary)]/50 bg-[var(--color-brand-primary)]/10",
              )}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="relative flex h-3.5 w-4 flex-col justify-between">
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY - Client Only to prevent Error #418 */}
      {mounted && (
        <div
          className={cn(
            "z-overlay fixed inset-0 flex flex-col items-center justify-start px-4 pt-28 transition-all duration-500",
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <nav
            className={cn(
              "rounded-section border-border/40 relative w-full max-w-sm overflow-hidden border bg-[var(--surface-main)]/95 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500",
              isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-95 opacity-0",
            )}
          >
            <ul className="flex flex-col gap-2">
              {MAIN_NAV.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    className={cn(
                      "transition-all duration-500",
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0",
                    )}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-4 text-3xl leading-relaxed font-black tracking-tighter uppercase italic transition-all",
                        isActive
                          ? "bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]"
                          : "text-text-primary hover:bg-white/5",
                      )}
                    >
                      {link.label}
                    </Link>

                    {/* Mobile Sub-menu Indicator */}
                    {link.children && (
                      <ul className="border-border mt-2 ml-6 space-y-1 border-l-2 pl-4">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block py-2 text-sm font-bold tracking-widest uppercase transition-colors",
                                pathname === child.href
                                  ? "text-[var(--color-brand-primary)]"
                                  : "text-text-secondary",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default memo(Navbar);
