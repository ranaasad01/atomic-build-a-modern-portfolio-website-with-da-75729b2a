"use client";

import { useRef, useEffect, useState } from "react";
import { Mail, MapPin, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: "Email", value: "alex@alexdev.io", href: "mailto:alex@alexdev.io" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/alexdev" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alexdev" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/alexdev" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm";
  const errorInputClass = "w-full px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-300 dark:border-red-500/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-sm";

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="container-max" ref={ref}>
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Have a project in mind or want to chat? I&apos;m always open to new opportunities and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div
            className="lg:col-span-2 space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-slate-900 dark:text-white">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white transition-all duration-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-600"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border-indigo-200 dark:border-indigo-500/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Available for Work</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Open to full-time roles, freelance projects, and consulting engagements.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? errorInputClass : inputClass}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? errorInputClass : inputClass}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration, etc."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      className={errors.message ? errorInputClass : inputClass}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                  >
                    {formState === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
