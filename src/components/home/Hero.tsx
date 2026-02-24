"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Check, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function GradientOrb({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-3xl pointer-events-none select-none ${className}`}
    />
  );
}

interface HeroProps {
  badge?: string;
  titleLine1?: string;
  titleGradient?: string;
  subtitle?: string;
  cta1Label?: string;
  cta2Label?: string;
  appUrl?: string;
  calendlyUrl?: string;
}

export function Hero({
  badge       = "AI-Powered Carbon Intelligence",
  titleLine1  = "Carbon emissions,",
  titleGradient = "made easy.",
  subtitle    = "Revolutionise the way organisations extract, manage and make sense of carbon emission data — buried in PDFs, spreadsheets and supplier systems.",
  cta1Label   = "Book a Demo",
  cta2Label   = "Explore the App",
  appUrl      = process.env.NEXT_PUBLIC_APP_URL ?? "https://carbon-accounting.scopezer0.com",
  calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#",
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated gradient orbs */}
      <GradientOrb className="w-[700px] h-[700px] bg-blue-600/20  -top-40 -left-40  animate-blob" />
      <GradientOrb className="w-[550px] h-[550px] bg-indigo-600/20 top-1/3 -right-32  animate-blob animation-delay-2000" />
      <GradientOrb className="w-[400px] h-[400px] bg-emerald-600/15 -bottom-20 left-1/3 animate-blob animation-delay-4000" />

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
              <Sparkles className="h-3 w-3" />
              {badge}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            {titleLine1}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              {titleGradient}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-lg lg:text-xl text-white/55 mb-10 leading-relaxed max-w-2xl">
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="primary" className="gap-2">
                <CalendarDays className="h-4 w-4" />
                {cta1Label}
              </Button>
            </a>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                {cta2Label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/40">
            {["GDPR compliant", "EU data residency", "Free demo available"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
