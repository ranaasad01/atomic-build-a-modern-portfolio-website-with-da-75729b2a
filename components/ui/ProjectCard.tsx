"use client";

import Link from "next/link";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
  visible?: boolean;
}

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
  "in-progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30",
  archived: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/30",
};

const statusLabels: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};

export default function ProjectCard({ project, index = 0, visible = true }: ProjectCardProps) {
  const delay = 0.1 + index * 0.08;
  const cardStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.6s ease " + delay + "s, transform 0.6s ease " + delay + "s",
  };

  return (
    <div
      className="group glass-card rounded-2xl overflow-hidden hover-lift flex flex-col"
      style={cardStyle}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-slate-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={"text-xs px-2 py-1 rounded-full border font-medium " + (statusColors[project.status] || "")}>
            {statusLabels[project.status] || project.status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs px-2 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-700/50 font-medium">
            {project.category}
          </span>
        </div>
        {/* Hover overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg border border-slate-700"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-slate-400 dark:text-slate-500 flex-shrink-0 mt-1">{project.year}</span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <Link
          href={"/projects/" + project.slug}
          className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
