"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Download, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';

const titles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Alex Chen</span>
        </h1>

        {/* Typewriter */}
        <div
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300">
            {displayed}
            <span className="inline-block w-0.5 h-8 bg-indigo-500 ml-1 animate-pulse" />
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          }}
        >
          I build exceptional digital experiences that live at the intersection of
          beautiful design and clean, performant code. Specializing in React, Next.js,
          and modern full-stack architectures.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
          }}
        >
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          <a
            href="https://github.com/alexdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-slate-400" />
          <a
            href="https://linkedin.com/in/alexdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-slate-400" />
          <span className="text-sm text-slate-500 dark:text-slate-400">
            5+ years experience
          </span>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          {[
            { value: "50+", label: "Projects Built" },
            { value: "5+", label: "Years Experience" },
            { value: "20+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
