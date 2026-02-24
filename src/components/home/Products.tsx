"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Product {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaUrl?: string;
  badge?: string;
  highlight?: boolean;
}

interface ProductsProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  products?: Product[];
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    title: "Consultant Toolbox",
    description:
      "The easiest to use tool yet made for sustainability consultants, by consultants. Powered by AI, our one-click data ingestion and accurate data extraction help you map carbon emission inventories efficiently for your client projects.",
    ctaLabel: "Explore the Tool",
    ctaUrl: process.env.NEXT_PUBLIC_DEMO_URL ?? "https://scopezero-consultant.base44.app",
    highlight: true,
  },
  {
    title: "SME Self-Reporting Agent",
    description:
      "For organisations beginning their sustainability journey. Easily work out your carbon emission footprint — and share it with stakeholders — without the need of expensive consultants.",
    badge: "Coming Soon",
    highlight: false,
  },
];

const ICONS = [Briefcase, Building2];

export function Products({
  sectionTitle    = "Our Products",
  sectionSubtitle = "Purpose-built tools for every stage of the sustainability journey.",
  products        = DEFAULT_PRODUCTS,
}: ProductsProps) {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Products</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{sectionTitle}</h2>
            <p className="text-white/55 max-w-xl mx-auto">{sectionSubtitle}</p>
          </motion.div>

          {/* Product cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {products.map((product, i) => {
              const Icon = ICONS[i] ?? Briefcase;
              return (
                <motion.div
                  key={product.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  className={`group relative rounded-2xl border p-8 overflow-hidden cursor-default ${
                    product.highlight
                      ? "border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-indigo-950/30"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    product.highlight
                      ? "bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
                      : "bg-white/[0.02]"
                  }`} />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`inline-flex rounded-xl p-2.5 ${product.highlight ? "bg-blue-500/20" : "bg-white/10"}`}>
                        <Icon className={`h-6 w-6 ${product.highlight ? "text-blue-400" : "text-white/60"}`} />
                      </div>
                      {product.badge && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/40">
                          <Sparkles className="h-3 w-3" />
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                    <p className="text-white/55 leading-relaxed mb-6">{product.description}</p>

                    {product.ctaUrl ? (
                      <a href={product.ctaUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={product.highlight ? "primary" : "outline"}
                          className="gap-2"
                        >
                          {product.ctaLabel ?? "Learn More"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" disabled className="gap-2 opacity-40 cursor-not-allowed">
                        {product.ctaLabel ?? "Coming Soon"}
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
