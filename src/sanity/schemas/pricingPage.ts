import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const pricingPage = defineType({
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Page Title",
      type: "string",
      description: "Large heading at the top (e.g. Simple, transparent pricing)",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Page Subtitle",
      type: "text",
      rows: 2,
      description: "Tagline shown below the title",
    }),
    defineField({
      name: "comingSoonText",
      title: "Coming Soon Message",
      type: "text",
      rows: 3,
      description: "Optional message shown while pricing is being finalised — leave empty to hide",
    }),
    defineField({
      name: "tiers",
      title: "Pricing Tiers",
      type: "array",
      description: "Add one card per pricing plan. All currently show 'Contact us' as placeholder CTA.",
      of: [
        {
          type: "object",
          icon: TagIcon,
          fields: [
            defineField({ name: "name",        title: "Plan Name",             type: "string",  description: "e.g. Starter, Professional, Enterprise" }),
            defineField({ name: "tagline",     title: "Tagline",               type: "string",  description: "Short hook shown under the plan name" }),
            defineField({ name: "description", title: "Description",           type: "text",    rows: 2 }),
            defineField({
              name: "features",
              title: "Feature Bullets",
              type: "array",
              description: "Each item appears as a bullet point on the card",
              of: [{ type: "string" }],
            }),
            defineField({ name: "ctaLabel",    title: "Button Label",          type: "string",  description: "e.g. Contact us, Get started" }),
            defineField({ name: "highlighted", title: "Highlight this tier?",  type: "boolean", description: "Makes this card stand out visually as the recommended option" }),
          ],
          preview: {
            select: { title: "name", subtitle: "tagline" },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pricing Page" }) },
});
