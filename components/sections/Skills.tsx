"use client";

import { useRef, useEffect, useState } from "react";
import { skills, skillCategories } from "@/lib/data";

const categoryGradients: Record<string, string> = {
  Frontend: "from-blue-500 to-indigo-500",
  Backend: "from-emerald-500 to-teal-500",
  DevOps: "from-orange-500 to-amber-500",
  Web3: "from-violet-500 to-purple-500",
};

const categoryBadges: Record<string, string> = {
  Frontend: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30",
  Backend: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30",
  DevOps: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/30",
  Web3: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/30",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimated(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
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
            Skills &amp; Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
        >
          {skillCategories.map((cat) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((skill, i) => {
            const gradient = categoryGradients[skill.category] || "from-indigo-500 to-violet-500";
            const badge = categoryBadges[skill.category] || "bg-slate-100 text-slate-600 border-slate-200";
            const barStyle = { width: animated ? skill.level + "%" : "0%" };
            const itemStyle = {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease " + (0.1 + i * 0.05) + "s, transform 0.5s ease " + (0.1 + i * 0.05) + "s",
            };
            return (
              <div key={skill.name} className="glass-card rounded-xl p-5 hover-lift" style={itemStyle}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{skill.name}</div>
                      <span className={"text-xs px-2 py-0.5 rounded-full border " + badge}>{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className={"h-full rounded-full bg-gradient-to-r skill-bar-fill " + gradient} style={barStyle} />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-16 text-center"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-lg">
              🚀
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900 dark:text-white text-sm">Always Learning</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Currently exploring: Rust, WebAssembly, and LLM fine-tuning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
