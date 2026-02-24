"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WHO_OPTIONS = [
  "Sustainability Consultancy",
  "Business Owner / Operator",
  "Sustainability practitioner in large organisation",
  "Investor",
  "Potential partner",
  "Other",
];

interface ContactFormProps {
  heroTitle?:        string;
  heroSubtitle?:     string;
  formTitle?:        string;
  calendlyTitle?:    string;
  calendlySubtitle?: string;
  calendlyUrl?:      string;
}

export function ContactForm({
  heroTitle        = "Get in touch",
  heroSubtitle     = "Interested in finding out more? Fill out the form below or book a demo call directly.",
  formTitle        = "Send us a message",
  calendlyTitle    = "Or book a demo",
  calendlySubtitle = "Schedule a 30-minute call to see ScopeZero in action.",
  calendlyUrl      = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#",
}: ContactFormProps) {
  const [form, setForm]       = useState({ name: "", email: "", who: "", message: "" });
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/[0.06]">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-950/25 to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Contact</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-bold mb-5">{heroTitle}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/55">{heroSubtitle}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-10">

            {/* Form */}
            <motion.div variants={fadeUp}>
              <h2 className="text-xl font-bold text-white mb-6">{formTitle}</h2>

              {status === "sent" ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-8 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Message sent!</h3>
                  <p className="text-sm text-white/55">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Name <span className="text-white/30">*</span></label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Email <span className="text-white/30">*</span></label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Who */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Tell us who you are <span className="text-white/30">*</span></label>
                    <select
                      required
                      value={form.who}
                      onChange={(e) => setForm({ ...form, who: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors appearance-none"
                    >
                      <option value="" disabled className="bg-slate-900">Select an option…</option>
                      {WHO_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-slate-900">{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Message <span className="text-white/30 text-xs">(optional)</span></label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.07] transition-colors resize-none"
                      placeholder="Anything you'd like us to know…"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-rose-400">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full gap-2"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Calendly + info */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 mb-4">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white mb-2">{calendlyTitle}</h3>
                <p className="text-sm text-white/55 mb-5">{calendlySubtitle}</p>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-2">
                    <CalendarDays className="h-4 w-4" />
                    Schedule a Demo
                  </Button>
                </a>
              </div>

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 space-y-3">
                <p className="text-sm font-medium text-white/60">We typically respond within</p>
                <p className="text-2xl font-bold text-white">24 hours</p>
                <p className="text-xs text-white/35">Monday – Friday, AEST timezone</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
