/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/**
 * Navbar Component - Professional Identity Edition
 * -------------------------------------------------------------------------
 * ระบบนำทางที่เน้นความโปร่งเบา ทันสมัย และเข้าถึงง่าย (Accessibility First)
 * สะท้อนตัวตนของ Alongkorn Yomkerd (9mza) ในฐานะผู้เชี่ยวชาญที่เข้าถึงได้
 * ออกแบบและดูแลระบบโดย: นายเอ็มซ่ามากส์
 */
export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "หน้าแรก", href: "/" },
    { label: "แนวคิด", href: "/about" },
    { label: "ผลงาน", href: "/projects" },
    { label: "บทความ", href: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-300",
        isScrolled
          ? "bg-white/70 py-3 shadow-sm backdrop-blur-md dark:bg-slate-950/70"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="กลับสู่หน้าหลัก"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-white shadow-lg transition-transform group-hover:scale-105">
             <span className="text-lg font-black">9</span>
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-lg font-bold tracking-tight dark:text-white">
              Alongkorn <span className="text-blue-600">Y.</span>
            </span>
            <span className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
              9mza Identity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200/50 bg-slate-50/50 p-1 dark:border-white/10 dark:bg-white/5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium transition-all",
                    isActive
                      ? "bg-white text-blue-600 shadow-sm dark:bg-slate-900 dark:text-blue-400"
                      : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              className="rounded-full bg-blue-600 px-6 font-bold text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              <Link href="/contact">
                <Rocket className="mr-2 h-4 w-4" /> ติดต่อ
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="text-foreground flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-300 dark:bg-slate-950/95",
          isMobileMenuOpen ? "max-h-screen border-b border-slate-100 dark:border-white/10" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-bold tracking-tight",
                pathname === link.href ? "text-blue-600" : "text-foreground dark:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 h-14 rounded-2xl bg-blue-600 text-lg font-bold"
          >
            <Link href="/contact">เริ่มโปรเจกต์กับนายเอ็ม</Link>
          </Button>
        </nav>
      </div>
    </nav>
  );
}

/**
 * พัฒนาและวางระบบโครงสร้างโดย: นายเอ็มซ่ามากส์
 */
