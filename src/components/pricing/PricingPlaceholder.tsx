"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Tier {
  name:        string;
  tagline?:    string;
  description: string;
  features:    string[];
  ctaLabel:    string;
  highlighted: boolean;
}

interface PricingPlaceholderProps {
  heroTitle?:     string;
  heroSubtitle?:  string;
  comingSoonText?: string;
  tiers?:          Tier[];
}

const DEFAULT_TIERS: Tier[] = [
  {
    name:        "Business Starter",
    tagline:     "For SMEs starting their sustainability journey",
    description: "Self-service carbon footprint tool for organisations beginning their emissions reporting.",
    features:    ["AI bill extraction", "Scope 1 & 2 tracking", "Basic reporting", "Email support"],
    ctaLabel:    "Get Early Access",
    highlighted: false,
  },
  {
    name:        "Consultancy Pro",
    tagline:     "For sustainability consultancies",
    description: "Full-featured platform for consultancies managing multiple client portfolios.",
    features:    ["Everything in Starter", "Multi-client portal", "AI data agents", "Role-based access", "White-label reports", "Priority support"],
    ctaLabel:    "Get Early Access",
    highlighted: true,
  },
  {
    name:        "Enterprise",
    tagline:     "Custom for large organisations",
    description: "Custom deployment with dedicated support, SSO, and enterprise-grade SLAs.",
    features:    ["Everything in Pro", "Custom integrations", "SSO / SAML", "Dedicated CSM", "Custom SLA"],
    ctaLabel:    "Contact Sales",
    highlighted: false,
  },
];

export function PricingPlaceholder({
  heroTitle      = "Transparent pricing",
  heroSubtitle   = "Simple, usage-based pricing aligned with your sustainability goals.",
  comingSoonText = "We're finalising our pricing plans. Reach out for early-access pricing or to discuss your specific needs.",
  tiers          = DEFAULT_TIERS,
}: PricingPlaceholderProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-white/[0.06]">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
                <Sparkles className="h-3 w-3" />
                Coming soon
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-bold mb-5">{heroTitle}</motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/55 mb-8">{heroSubtitle}</motion.p>
            <motion.p variants={fadeUp} className="text-sm text-white/40 max-w-lg mx-auto">{comingSoonText}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tier cards (placeholder) */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  tier.highlighted
                    ? "border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-indigo-950/30"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">Popular</span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  {tier.tagline && <p className="text-xs text-white/45 mb-3">{tier.tagline}</p>}
                  <p className="text-sm text-white/55">{tier.description}</p>
                </div>

                {/* Pricing placeholder */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white/30">— —</div>
                  <div className="text-xs text-white/25 mt-1">Pricing coming soon</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/55">
                      <Check className="h-4 w-4 text-emerald-400/60 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    variant={tier.highlighted ? "primary" : "outline"}
                    className="w-full gap-2"
                  >
                    {tier.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ teaser */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-12 text-center">
            <p className="text-white/40 text-sm">
              Have questions?{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Get in touch
              </Link>{" "}
              — we&apos;re happy to discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
