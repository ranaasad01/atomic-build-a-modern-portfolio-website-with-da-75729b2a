"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/data";

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "nav-blur shadow-sm shadow-slate-900/5"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => handleNavClick("/#home")}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
              AC
            </div>
            <span className="font-semibold text-slate-900 dark:text-white hidden sm:block">
              Alex Chen
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-4 py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
