"use client";

import { useRef, useEffect, useState } from "react";
import { Download, MapPin, Briefcase, GraduationCap, Coffee } from 'lucide-react';

const highlights = [
  { icon: Briefcase, label: "Experience", value: "5+ Years" },
  { icon: GraduationCap, label: "Education", value: "CS @ MIT" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Coffee, label: "Coffee/day", value: "3 Cups ☕" },
];

const timeline = [
  {
    year: "2022 – Present",
    role: "Senior Full Stack Engineer",
    company: "Vercel",
    description: "Leading frontend infrastructure for Next.js ecosystem tools, improving DX for 1M+ developers.",
  },
  {
    year: "2020 – 2022",
    role: "Full Stack Developer",
    company: "Stripe",
    description: "Built and maintained payment dashboard components used by 500K+ merchants worldwide.",
  },
  {
    year: "2019 – 2020",
    role: "Frontend Engineer",
    company: "Figma",
    description: "Contributed to the real-time collaboration engine and plugin API used by 4M+ designers.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max" ref={ref}>
        {/* Section header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            About Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photo + highlights */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="relative mb-8">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl rotate-3 opacity-20" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/4/4e/AlexChenLiS.png"
                  alt="Alex Chen"
                  className="relative w-full aspect-square object-cover rounded-2xl shadow-2xl shadow-indigo-500/20"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Years of Code</div>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 hover-lift"
                >
                  <Icon className="w-5 h-5 text-indigo-500 mb-2" />
                  <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio + timeline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              <p className="text-lg">
                I&apos;m a passionate full-stack developer with over 5 years of experience building
                scalable web applications that users love. My journey started with a Computer Science
                degree from MIT, where I fell in love with the intersection of design and engineering.
              </p>
              <p>
                I specialize in the React/Next.js ecosystem, but I&apos;m equally comfortable diving
                into backend systems, databases, and DevOps pipelines. I believe great software is
                built at the intersection of clean code, thoughtful UX, and robust infrastructure.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing
                technical articles, mentoring junior developers, or exploring the latest in AI/ML.
                I&apos;m currently open to exciting full-time roles and interesting freelance projects.
              </p>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 mb-10"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                Work Experience
              </h3>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      {i < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                        {item.year}
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.role}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">@ {item.company}</div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
