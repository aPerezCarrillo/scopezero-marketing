"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Mail, Cloud, Globe, Clock } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── Agent live feed ───────────────────────────────────────────────────────────

function AgentLiveFeed() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const events = [
    { emoji: "📧", source: "Email Agent",    action: "Bill detected",    detail: "AGL Energy — Q3 2025 invoice found in inbox",           time: "now",    color: "text-blue-400",    delay: 0.15 },
    { emoji: "🤖", source: "AI Extractor",   action: "Processing PDF",   detail: "→ 2,340 kWh · $342.80 · Grid electricity · Scope 2",    time: "2s",     color: "text-indigo-400",  delay: 0.55 },
    { emoji: "✅", source: "Verified",        action: "Data committed",   detail: "1,842 kg CO₂e logged · dashboard updated",              time: "4s",     color: "text-emerald-400", delay: 0.95 },
    { emoji: "📁", source: "Drive Agent",    action: "New file synced",  detail: "Origin_Energy_Oct_2025.pdf queued for processing",       time: "8s",     color: "text-violet-400",  delay: 1.35 },
    { emoji: "🌐", source: "Portal Agent",   action: "Auto-downloaded",  detail: "Sydney Water — Invoice #3892 retrieved",                 time: "15s",    color: "text-cyan-400",    delay: 1.75 },
    { emoji: "📅", source: "Scheduler",      action: "Next collection",  detail: "Jemena Gas supplier portal scan — in 4h 22m",           time: "queued", color: "text-white/30",    delay: 2.15 },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-5 font-mono text-sm shadow-2xl">
      {/* macOS traffic lights */}
      <div className="flex items-center gap-1.5 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-white/30">scopezero — agent-activity</span>
        <div className="ml-auto flex items-center gap-1.5">
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400/80 font-semibold">LIVE</span>
        </div>
      </div>

      <div className="space-y-3.5">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: e.delay, duration: 0.35, ease: "easeOut" }}
            className="flex items-start gap-3"
          >
            <span className="text-base leading-none shrink-0 mt-0.5">{e.emoji}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className={`text-xs font-semibold ${e.color}`}>{e.source}</span>
                <span className="text-xs text-white/35">{e.action}</span>
              </div>
              <p className="text-xs text-white/55 truncate mt-0.5">{e.detail}</p>
            </div>
            <span className="text-[10px] text-white/25 shrink-0 mt-0.5 tabular-nums">{e.time}</span>
          </motion.div>
        ))}
      </div>

      <motion.span
        animate={inView ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ delay: 2.6, duration: 0.9, repeat: Infinity }}
        className="inline-block mt-3 w-2 h-4 bg-white/40 align-middle"
      />
    </div>
  );
}

// ── Connector card ────────────────────────────────────────────────────────────

function ConnectorCard({
  icon: Icon, title, description, sources, status, statusLabel, accentClass,
}: {
  icon:        React.ElementType;
  title:       string;
  description: string;
  sources:     string[];
  status:      "active" | "available";
  statusLabel: string;
  accentClass: string;
}) {
  const statusStyle = status === "active"
    ? "bg-emerald-500/20 text-emerald-300"
    : "bg-blue-500/20 text-blue-300";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 overflow-hidden"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${accentClass}`} />
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="inline-flex rounded-xl bg-white/10 p-2.5">
            <Icon className="h-5 w-5 text-white" />
          </div>
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyle}`}>
            {status === "active" && (
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block"
              />
            )}
            {statusLabel}
          </span>
        </div>
        <h3 className="font-semibold text-white text-sm mb-1.5">{title}</h3>
        <p className="text-xs text-white/50 leading-relaxed mb-3">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {sources.map((s) => (
            <span key={s} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[11px] text-white/45">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

interface AgentSectionProps {
  badge?:    string;
  title?:    string;
  subtitle?: string;
}

const CONNECTORS = [
  { icon: Mail,  title: "Email Inboxes",   description: "Detects and extracts utility bills arriving in connected inboxes — completely hands-free.",          sources: ["Gmail", "Outlook", "IMAP"],                  status: "active"    as const, statusLabel: "Active",    accentClass: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10" },
  { icon: Cloud, title: "Cloud Storage",   description: "Monitors shared folders for new bill uploads and queues them for AI processing instantly.",           sources: ["Google Drive", "Dropbox", "OneDrive"],       status: "active"    as const, statusLabel: "Active",    accentClass: "bg-gradient-to-br from-violet-500/10 to-purple-500/10" },
  { icon: Globe, title: "Supplier Portals",description: "Web agents log into energy, water and gas portals on your behalf to download invoices.",              sources: ["AGL", "Origin", "Sydney Water", "+40 more"], status: "available" as const, statusLabel: "Available", accentClass: "bg-gradient-to-br from-cyan-500/10 to-teal-500/10" },
  { icon: Clock, title: "Smart Scheduler", description: "Automate collections on a weekly, daily or custom cadence — or trigger on demand.",                  sources: ["Weekly", "Daily", "On-demand", "Triggers"],  status: "active"    as const, statusLabel: "Active",    accentClass: "bg-gradient-to-br from-amber-500/10 to-orange-500/10" },
];

export function AgentSection({
  badge    = "Autonomous AI Agents",
  title    = "Your AI workforce, collecting data 24/7",
  subtitle = "Not just bill processing — AI agents that autonomously scan your inbox, sync cloud storage, and log into supplier portals to collect every bill. Set it up once, never miss an emission.",
}: AgentSectionProps) {
  return (
    <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-indigo-950/15 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
              <Bot className="h-3 w-3" />
              {badge}
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold mb-4">
            {title.split("24/7")[0]}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">24/7</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/55 max-w-2xl mx-auto">{subtitle}</motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
            <div className="relative"><AgentLiveFeed /></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger} className="grid grid-cols-2 gap-3">
            {CONNECTORS.map((c) => <ConnectorCard key={c.title} {...c} />)}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { stat: "342",  label: "bills collected automatically last month", emoji: "📨" },
            { stat: "0",    label: "manual uploads needed",                    emoji: "✋" },
            { stat: "24/7", label: "autonomous monitoring across all sources", emoji: "🎯" },
          ].map(({ stat, label, emoji }) => (
            <motion.div key={stat} variants={fadeUp} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4">
              <span className="text-2xl">{emoji}</span>
              <div>
                <div className="text-2xl font-bold text-white">{stat}</div>
                <div className="text-xs text-white/40 mt-0.5">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
