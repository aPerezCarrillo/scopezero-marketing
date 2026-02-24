"use client";

import { motion } from "framer-motion";
import { Sparkles, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface HomeCTAProps {
  badge?:          string;
  title?:          string;
  subtitle?:       string;
  primaryLabel?:   string;
  secondaryLabel?: string;
  calendlyUrl?:    string;
  appUrl?:         string;
}

export function HomeCTA({
  badge          = "Free demo available",
  title          = "See ScopeZero in action",
  subtitle       = "Book a 30-minute demo and see how AI can automate your entire emissions data pipeline.",
  primaryLabel   = "Book a Demo",
  secondaryLabel = "Explore the App",
  calendlyUrl    = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#",
  appUrl         = process.env.NEXT_PUBLIC_APP_URL      ?? "https://carbon-accounting.scopezer0.com",
}: HomeCTAProps) {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/70 via-indigo-950/50 to-slate-950 p-12 text-center overflow-hidden"
          >
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.07] via-indigo-500/[0.07] to-emerald-500/[0.07]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 mb-6">
                <Sparkles className="h-3 w-3" />
                {badge}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
              <p className="text-white/55 mb-8 max-w-md mx-auto">{subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="primary" className="gap-2 w-full sm:w-auto">
                    <CalendarDays className="h-4 w-4" />
                    {primaryLabel}
                  </Button>
                </a>
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    {secondaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
