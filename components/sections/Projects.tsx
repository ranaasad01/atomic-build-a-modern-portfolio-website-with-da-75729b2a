"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const categories = ["All", "Full Stack", "Frontend", "Backend", "Web3"];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max" ref={ref}>
        <div
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from AI platforms to design systems and Web3 apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  isActive
                    ? "px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25"
                    : "px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500"
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} visible={visible} />
          ))}
        </div>

        {/* View all CTA */}
        <div
          className="mt-12 text-center"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.6s" }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
