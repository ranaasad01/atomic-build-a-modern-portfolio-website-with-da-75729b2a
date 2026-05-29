"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, ExternalLink, Code2 as Github } from 'lucide-react';
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const categories = ["All", "Full Stack", "Frontend", "Backend", "Web3"];
const statuses = ["All", "Completed", "In Progress", "Archived"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesStatus =
      activeStatus === "All" ||
      (activeStatus === "Completed" && p.status === "completed") ||
      (activeStatus === "In Progress" && p.status === "in-progress") ||
      (activeStatus === "Archived" && p.status === "archived");
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getCatBtnClass = (cat: string) => {
    if (activeCategory === cat) {
      return "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25";
    }
    return "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500";
  };

  const getStatusBtnClass = (status: string) => {
    if (activeStatus === status) {
      return "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-500/25";
    }
    return "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500";
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
            A comprehensive collection of everything I&apos;ve built — from production SaaS platforms
            to open-source tools and experimental side projects.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: "Total Projects", value: projects.length },
              { label: "Completed", value: projects.filter((p) => p.status === "completed").length },
              { label: "In Progress", value: projects.filter((p) => p.status === "in-progress").length },
              { label: "Tech Stacks", value: "15+" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl px-5 py-3">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-5 mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm"
            />
          </div>

          {/* Category filter */}
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Category
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={getCatBtnClass(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Status filter */}
          <div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Status
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button key={status} onClick={() => setActiveStatus(status)} className={getStatusBtnClass(status)}>
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filtered.length}</span> of{" "}
            <span className="font-semibold text-slate-900 dark:text-white">{projects.length}</span> projects
          </p>
          {(activeCategory !== "All" || activeStatus !== "All" || searchQuery) && (
            <button
              onClick={() => { setActiveCategory("All"); setActiveStatus("All"); setSearchQuery(""); }}
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} visible={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setActiveStatus("All"); setSearchQuery(""); }}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center bg-gradient-to-br from-indigo-500/5 to-violet-500/5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
            I&apos;m always excited to work on new challenges. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              Get In Touch
            </Link>
            <a
              href="https://github.com/alexdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 font-semibold transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
