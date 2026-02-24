"use client";

import { motion } from "framer-motion";
import { FileText, Bot, Leaf } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Step { title: string; description: string; }

interface HowItWorksProps {
  title?:    string;
  subtitle?: string;
  steps?:    Step[];
}

const ICONS = [FileText, Bot, Leaf];

const DEFAULT_STEPS: Step[] = [
  { title: "Connect your sources",  description: "Link email inboxes, cloud drives or supplier portals. Or simply drag-and-drop PDFs. Batch upload ZIP files for dozens of bills at once." },
  { title: "AI processes the data", description: "Our AI model extracts dates, usage, costs, and supplier info automatically — no manual entry, no spreadsheets." },
  { title: "Track your emissions",  description: "Instant Scope 1 & 2 breakdowns, gap analysis, and exportable reports ready for stakeholders and regulators." },
];

export function HowItWorks({
  title    = "Up and running in minutes",
  subtitle = "No spreadsheets. No complex setup. Connect your sources and let AI do the heavy lifting.",
  steps    = DEFAULT_STEPS,
}: HowItWorksProps) {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">How it works</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-white/55 max-w-md mx-auto">{subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connector line */}
            <div aria-hidden className="hidden md:block absolute top-8 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />

            {steps.map((step, i) => {
              const Icon = ICONS[i] ?? FileText;
              const num  = String(i + 1).padStart(2, "0");
              return (
                <motion.div key={step.title} variants={fadeUp} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 mb-5 relative">
                    <Icon className="h-7 w-7 text-white/80" />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 text-[10px] font-bold text-blue-400">
                      {parseInt(num)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
