import { defineField, defineType } from "sanity";
import { HomeIcon, StarIcon, ThListIcon, BlockElementIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero",     title: "🚀 Hero",         default: true },
    { name: "products", title: "📦 Products" },
    { name: "features", title: "✨ Features" },
    { name: "agents",   title: "🤖 AI Agents" },
    { name: "how",      title: "📋 How It Works" },
    { name: "cta",      title: "🎯 Bottom CTA" },
  ],
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: "heroBadge",
      title: "Badge Text",
      type: "string",
      group: "hero",
      description: "Small pill label above the headline (e.g. AI-Powered Carbon Intelligence)",
    }),
    defineField({
      name: "heroTitleLine1",
      title: "Headline — Line 1",
      type: "string",
      group: "hero",
      description: "First line of the main headline (e.g. Carbon emissions,)",
    }),
    defineField({
      name: "heroTitleGradient",
      title: "Headline — Gradient Word",
      type: "string",
      group: "hero",
      description: "Second line shown with a colour gradient (e.g. made easy.)",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
      group: "hero",
      description: "Short paragraph below the headline",
    }),
    defineField({
      name: "heroCta1Label",
      title: "Primary Button Label",
      type: "string",
      group: "hero",
      description: "Main call-to-action button (e.g. Book a Demo)",
    }),
    defineField({
      name: "heroCta2Label",
      title: "Secondary Button Label",
      type: "string",
      group: "hero",
      description: "Secondary button (e.g. Explore the App)",
    }),

    // ── Products ──────────────────────────────────────────────────────────────
    defineField({
      name: "productsSectionTitle",
      title: "Section Title",
      type: "string",
      group: "products",
    }),
    defineField({
      name: "productsSectionSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      group: "products",
    }),
    defineField({
      name: "products",
      title: "Product Cards",
      type: "array",
      group: "products",
      description: "Each card represents one product. Drag to reorder.",
      of: [
        {
          type: "object",
          icon: BlockElementIcon,
          fields: [
            defineField({ name: "title",       title: "Product Name",         type: "string" }),
            defineField({ name: "description", title: "Description",          type: "text",    rows: 3 }),
            defineField({ name: "ctaLabel",    title: "Button Label",         type: "string",  description: "e.g. Try the Demo" }),
            defineField({ name: "ctaUrl",      title: "Button URL",           type: "url",     description: "Leave empty to disable the button" }),
            defineField({ name: "badge",       title: "Badge",                type: "string",  description: "Small label on the card corner (e.g. Coming Soon) — leave empty to hide" }),
            defineField({ name: "highlight",   title: "Highlight this card?", type: "boolean", description: "Makes this card visually prominent" }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // ── Features ─────────────────────────────────────────────────────────────
    defineField({
      name: "featuresSectionTitle",
      title: "Section Title",
      type: "string",
      group: "features",
    }),
    defineField({
      name: "featuresSectionSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      group: "features",
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      group: "features",
      description: "Platform features shown in the grid. Drag to reorder.",
      of: [
        {
          type: "object",
          icon: StarIcon,
          fields: [
            defineField({ name: "icon",        title: "Icon Name",   type: "string", description: "Lucide icon name (e.g. Zap, Shield, BarChart3) — see lucide.dev for options" }),
            defineField({ name: "title",       title: "Title",       type: "string" }),
            defineField({ name: "description", title: "Description", type: "text",  rows: 2 }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // ── AI Agents ─────────────────────────────────────────────────────────────
    defineField({
      name: "agentsBadge",
      title: "Badge Text",
      type: "string",
      group: "agents",
      description: "Small pill label (e.g. AI Data Agents)",
    }),
    defineField({
      name: "agentsTitle",
      title: "Section Title",
      type: "string",
      group: "agents",
    }),
    defineField({
      name: "agentsSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      group: "agents",
    }),

    // ── How It Works ─────────────────────────────────────────────────────────
    defineField({
      name: "howTitle",
      title: "Section Title",
      type: "string",
      group: "how",
    }),
    defineField({
      name: "howSubtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      group: "how",
    }),
    defineField({
      name: "howSteps",
      title: "Steps",
      type: "array",
      group: "how",
      description: "Steps shown in sequence. Drag to reorder.",
      of: [
        {
          type: "object",
          icon: ThListIcon,
          fields: [
            defineField({ name: "title",       title: "Step Title",  type: "string" }),
            defineField({ name: "description", title: "Description", type: "text",  rows: 2 }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),

    // ── Bottom CTA ────────────────────────────────────────────────────────────
    defineField({
      name: "ctaBadge",
      title: "Badge Text",
      type: "string",
      group: "cta",
      description: "Small pill label (e.g. Free demo available)",
    }),
    defineField({
      name: "ctaTitle",
      title: "Headline",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "Subtitle",
      type: "text",
      rows: 2,
      group: "cta",
    }),
    defineField({
      name: "ctaPrimaryLabel",
      title: "Primary Button Label",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaSecondaryLabel",
      title: "Secondary Button Label",
      type: "string",
      group: "cta",
    }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
