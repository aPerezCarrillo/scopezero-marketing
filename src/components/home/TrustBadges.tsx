"use client";

import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function TrustBadges() {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Security</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted &amp; Compliant</h2>
            <p className="text-white/55 max-w-lg mx-auto">
              Built with data privacy at its core — GDPR compliant and actively pursuing internationally
              recognised security certifications.
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {/* GDPR */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/[0.06] p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <Shield className="h-7 w-7" />
              </div>
              <div className="text-center">
                <div className="font-bold text-white">GDPR</div>
                <div className="text-sm text-emerald-400/80 mt-0.5">Data Protection Regulation</div>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Check className="h-3 w-3" /> Compliant
              </span>
            </motion.div>

            {/* ISO 27001 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white/40">
                <Shield className="h-7 w-7" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white/70">ISO 27001</div>
                <div className="text-sm text-white/35 mt-0.5">Information Security</div>
              </div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/45">In Progress</span>
            </motion.div>

            {/* SOC 2 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white/40">
                <Shield className="h-7 w-7" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white/70">SOC 2</div>
                <div className="text-sm text-white/35 mt-0.5">Security &amp; Availability</div>
              </div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/45">In Progress</span>
            </motion.div>
          </motion.div>

          {/* Security highlights */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: "🔒", label: "End-to-end TLS" },
              { icon: "🏢", label: "EU data residency" },
              { icon: "📋", label: "Consent audit trail" },
              { icon: "🔑", label: "Row-level security" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm text-white/45">
                <span className="text-base">{icon}</span>
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
