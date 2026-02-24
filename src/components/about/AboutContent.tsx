"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface TeamMember { name: string; role: string; bio: string; linkedin?: string; }

interface AboutContentProps {
  heroTitle?:    string;
  heroSubtitle?: string;
  visionTitle?:  string;
  visionText?:   string;
  missionTitle?: string;
  missionText?:  string;
  storyTitle?:   string;
  storyText?:    string;
  teamMembers?:  TeamMember[];
}

export function AboutContent({
  heroTitle    = "About ScopeZero",
  heroSubtitle = "Built by sustainability practitioners, for sustainability practitioners.",
  visionTitle  = "Our Vision",
  visionText   = "At ScopeZero, we believe that every business, regardless of their size and industry, should be empowered to understand their carbon footprint and be able to share that information easily. We're democratising access to carbon accounting — turning complex emission data into clear, actionable intelligence.",
  missionTitle = "Our Mission",
  missionText  = "We're replacing manual, error-prone carbon accounting with AI-powered automation. From reading utility bills to logging into supplier portals, ScopeZero handles the data collection so sustainability teams can focus on what matters: driving real emission reductions.",
  storyTitle   = "Our Story",
  storyText    = "ScopeZero was founded by sustainability consultants who were tired of spending hours extracting data from PDFs and spreadsheets. We built the tool we always wished we had — and now we're sharing it with the world.",
  teamMembers  = [],
}: AboutContentProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Company</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-bold mb-5">{heroTitle}</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/55 leading-relaxed">{heroSubtitle}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {[
              { title: visionTitle, text: visionText, accent: "from-blue-500/10 to-indigo-500/5" },
              { title: missionTitle, text: missionText, accent: "from-emerald-500/10 to-teal-500/5" },
            ].map(({ title, text, accent }) => (
              <motion.div key={title} variants={fadeUp} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-8`}>
                <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
                <p className="text-white/60 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 border-t border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-5">{storyTitle}</motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 leading-relaxed text-lg">{storyText}</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      {teamMembers.length > 0 && (
        <section className="py-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-10 text-center">The Team</motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {teamMembers.map((member) => (
                  <motion.div key={member.name} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-white">{member.name}</div>
                        <div className="text-sm text-white/45 mt-0.5">{member.role}</div>
                      </div>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
