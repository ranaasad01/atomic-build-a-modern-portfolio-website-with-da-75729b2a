"use client";

import Link from "next/link";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { href: "https://github.com/alexdev", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/alexdev", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/alexdev", icon: Twitter, label: "Twitter" },
  { href: "mailto:alex@alexdev.io", icon: Mail, label: "Email" },
];

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                AC
              </div>
              <span className="font-semibold text-white">Alex Chen</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Full-stack developer crafting beautiful, performant digital experiences. Open to exciting opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Available for freelance &amp; full-time roles
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
