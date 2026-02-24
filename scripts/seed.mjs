/**
 * Sanity seed script — populates the dataset with the site's default content.
 *
 * Usage:
 *   1. Get a write token: sanity.io/manage → project tfk0lw07 → API → Tokens → Add token (Editor)
 *   2. Add to .env.local:  SANITY_WRITE_TOKEN=skXXXXXX...
 *   3. Run:  node --env-file=.env.local scripts/seed.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("❌  SANITY_WRITE_TOKEN is not set.");
  console.error("    Get one at: sanity.io/manage → project tfk0lw07 → API → Tokens → Add token (Editor role)");
  console.error("    Then add to .env.local: SANITY_WRITE_TOKEN=skXXX...");
  process.exit(1);
}

const client = createClient({
  projectId: "tfk0lw07",
  dataset:   "production",
  apiVersion: "2026-02-23",
  token,
  useCdn: false,
});

// ─── Documents ──────────────────────────────────────────────────────────────

const siteSettings = {
  _id:  "siteSettings",
  _type: "siteSettings",
  logoText:     "ScopeZero",
  appUrl:       "https://carbon-accounting.scopezer0.com",
  demoUrl:      "https://scopezero-consultant.base44.app",
  calendlyUrl:  "https://calendly.com/candacengok/scopezer0demo",
  linkedinUrl:  "https://linkedin.com/company/scopezer0",
  footerCopy:   `© ${new Date().getFullYear()} ScopeZero. Carbon emission data made easy.`,
};

const homePage = {
  _id:  "homePage",
  _type: "homePage",

  // Hero
  heroBadge:        "AI-Powered Carbon Intelligence",
  heroTitleLine1:   "Carbon emissions,",
  heroTitleGradient:"made easy.",
  heroSubtitle:     "Revolutionise the way organisations extract, manage and make sense of carbon emission data — buried in PDFs, spreadsheets and supplier systems.",
  heroCta1Label:    "Book a Demo",
  heroCta2Label:    "Explore the App",

  // Products
  productsSectionTitle:    "Our Products",
  productsSectionSubtitle: "Purpose-built tools for every stage of the sustainability journey.",
  products: [
    {
      _key: "product-1",
      title:       "Consultant Toolbox",
      description: "The easiest to use tool yet made for sustainability consultants, by consultants. Upload PDFs, extract emissions data automatically, and deliver polished reports to clients — in a fraction of the time.",
      ctaLabel:    "Try the Demo",
      ctaUrl:      "https://scopezero-consultant.base44.app",
      badge:       null,
      highlight:   true,
    },
    {
      _key: "product-2",
      title:       "SME Self-Reporting Agent",
      description: "For organisations beginning their sustainability journey. Our AI agent collects bills from email and cloud drives, calculates your footprint, and generates audit-ready reports automatically.",
      ctaLabel:    "Coming Soon",
      ctaUrl:      null,
      badge:       "Coming Soon",
      highlight:   false,
    },
  ],

  // Features
  featuresSectionTitle:    "Everything you need to go net zero",
  featuresSectionSubtitle: "From bill ingestion to board-level reporting, ScopeZero handles the full emissions data pipeline.",
  features: [
    { _key: "f1", icon: "Zap",       title: "AI Bill Extraction",        description: "Upload any utility PDF and our AI extracts usage, cost, period, and supplier data — in under 30 seconds." },
    { _key: "f2", icon: "BarChart3", title: "Emissions Tracking",         description: "Automatic Scope 1, 2 & 3 calculations using official emission factors. Track progress toward net-zero targets." },
    { _key: "f3", icon: "Building2", title: "Multi-Facility Management",  description: "Track multiple sites across your portfolio. Spot high-emission locations and act on them instantly." },
    { _key: "f4", icon: "Users",     title: "Consultancy Portal",         description: "Built for sustainability consultancies. Manage multiple clients with role-based access." },
    { _key: "f5", icon: "FileText",  title: "Real-Time Reporting",        description: "Exportable emissions reports, gap analysis, and compliance dashboards ready for stakeholder presentations." },
    { _key: "f6", icon: "Shield",    title: "GDPR Compliant",             description: "EU data residency, end-to-end encryption, and full consent audit trail built for European data protection law." },
  ],

  // AI Agents
  agentsBadge:    "AI Data Agents",
  agentsTitle:    "Autonomous bill collection",
  agentsSubtitle: "Our AI agents go beyond extraction — they actively collect your bills from email inboxes, cloud drives, and supplier portals on your behalf.",

  // How it works
  howTitle:    "Up and running in minutes",
  howSubtitle: "No spreadsheets. No complex setup. Connect your sources and let AI do the heavy lifting.",
  howSteps: [
    { _key: "s1", title: "Connect your sources",  description: "Link email inboxes, cloud drives or supplier portals. Or simply drag-and-drop PDFs. Batch upload ZIP files for dozens of bills at once." },
    { _key: "s2", title: "AI processes the data", description: "Our AI model extracts dates, usage, costs, and supplier info automatically — no manual entry, no spreadsheets." },
    { _key: "s3", title: "Track your emissions",  description: "Instant Scope 1 & 2 breakdowns, gap analysis, and exportable reports ready for stakeholders and regulators." },
  ],

  // CTA
  ctaBadge:          "Free demo available",
  ctaTitle:          "See ScopeZero in action",
  ctaSubtitle:       "Book a 30-minute demo and see how AI can automate your entire emissions data pipeline.",
  ctaPrimaryLabel:   "Book a Demo",
  ctaSecondaryLabel: "Explore the App",
};

const aboutPage = {
  _id:  "aboutPage",
  _type: "aboutPage",
  heroTitle:    "About ScopeZero",
  heroSubtitle: "Built by sustainability practitioners, for sustainability practitioners.",
  visionTitle:  "Our Vision",
  visionText:   "At ScopeZero, we believe that every business, regardless of their size and industry, should be empowered to understand their carbon footprint and be able to share that information easily. We're democratising access to carbon accounting — turning complex emission data into clear, actionable intelligence.",
  missionTitle: "Our Mission",
  missionText:  "We're replacing manual, error-prone carbon accounting with AI-powered automation. From reading utility bills to logging into supplier portals, ScopeZero handles the data collection so sustainability teams can focus on what matters: driving real emission reductions.",
  storyTitle:   "Our Story",
  storyText:    "ScopeZero was founded by sustainability consultants who were tired of spending hours extracting data from PDFs and spreadsheets. We built the tool we always wished we had — and now we're sharing it with the world.",
  teamMembers:  [],
};

const contactPage = {
  _id:  "contactPage",
  _type: "contactPage",
  heroTitle:        "Get in touch",
  heroSubtitle:     "Have a question or want to see a demo? We'd love to hear from you.",
  formTitle:        "Send us a message",
  calendlyTitle:    "Book a demo call",
  calendlySubtitle: "Prefer to talk? Pick a time that works for you and we'll walk you through the platform.",
};

const pricingPage = {
  _id:  "pricingPage",
  _type: "pricingPage",
  heroTitle:      "Simple, transparent pricing",
  heroSubtitle:   "Start for free. Scale as you grow. No hidden fees.",
  comingSoonText: "We're finalising our pricing plans. In the meantime, get in touch to discuss options that fit your organisation.",
  tiers: [
    {
      _key: "tier-starter",
      name:        "Starter",
      tagline:     "Perfect for small teams",
      description: "Everything you need to get started with carbon accounting.",
      features:    ["Up to 3 facilities", "AI bill extraction", "Scope 1 & 2 tracking", "PDF exports"],
      ctaLabel:    "Contact us",
      highlighted: false,
    },
    {
      _key: "tier-professional",
      name:        "Professional",
      tagline:     "For growing sustainability teams",
      description: "Advanced features for organisations serious about net zero.",
      features:    ["Unlimited facilities", "AI data agents", "Scope 3 tracking", "API access", "Priority support"],
      ctaLabel:    "Contact us",
      highlighted: true,
    },
    {
      _key: "tier-enterprise",
      name:        "Enterprise",
      tagline:     "Custom solutions at scale",
      description: "Tailored onboarding, SLAs, and dedicated account management.",
      features:    ["Custom integrations", "Dedicated CSM", "SSO / SAML", "SLA guarantee", "On-premise option"],
      ctaLabel:    "Contact us",
      highlighted: false,
    },
  ],
};

// ─── Seed ───────────────────────────────────────────────────────────────────

async function seed() {
  const docs = [siteSettings, homePage, aboutPage, contactPage, pricingPage];
  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`✅  ${doc._type} (${doc._id})`);
  }
  console.log("\n🎉  All documents seeded! Visit /studio to review and edit them.");
}

seed().catch((err) => {
  console.error("❌  Seed failed:", err.message);
  process.exit(1);
});
