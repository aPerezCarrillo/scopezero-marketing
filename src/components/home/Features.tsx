"use client";

import { motion } from "framer-motion";
import {
  Bot, BarChart3, Building2, Users, FileText, Shield
} from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  sectionTitle?:    string;
  sectionSubtitle?: string;
  features?:        Feature[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Bot, BarChart3, Building2, Users, FileText, Shield,
};

const ACCENT_CLASSES = [
  "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
  "bg-gradient-to-br from-emerald-500/10 to-green-500/10",
  "bg-gradient-to-br from-violet-500/10 to-purple-500/10",
  "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
  "bg-gradient-to-br from-sky-500/10 to-cyan-500/10",
  "bg-gradient-to-br from-green-500/10 to-teal-500/10",
];

const DEFAULT_FEATURES: Feature[] = [
  { icon: "Bot",       title: "AI Bill Extraction",        description: "Upload any utility PDF and our AI extracts usage, cost, period, and supplier data — in under 30 seconds." },
  { icon: "BarChart3", title: "Emissions Tracking",        description: "Automatic Scope 1, 2 & 3 calculations using official emission factors. Track progress toward net-zero targets." },
  { icon: "Building2", title: "Multi-Facility Management", description: "Track multiple sites across your portfolio. Spot high-emission locations and act on them instantly." },
  { icon: "Users",     title: "Consultancy Portal",        description: "Built for sustainability consultancies. Manage multiple clients with role-based access." },
  { icon: "BarChart3", title: "Real-Time Reporting",       description: "Exportable emissions reports, gap analysis, and compliance dashboards ready for stakeholder presentations." },
  { icon: "Shield",    title: "GDPR Compliant",            description: "EU data residency, end-to-end encryption, and full consent audit trail built for European data protection law." },
];

export function Features({
  sectionTitle    = "Everything you need to go net zero",
  sectionSubtitle = "From bill ingestion to board-level reporting, ScopeZero handles the full emissions data pipeline.",
  features        = DEFAULT_FEATURES,
}: FeaturesProps) {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">
            Platform
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
            {sectionTitle}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/55 max-w-xl mx-auto">
            {sectionSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f, i) => {
            const Icon = ICON_MAP[f.icon ?? ""] ?? Bot;
            const accent = ACCENT_CLASSES[i % ACCENT_CLASSES.length];
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${accent}`} />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2.5">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
