import { defineField, defineType } from "sanity";

export const pricingPage = defineType({
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Page Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Page Subtitle", type: "text", rows: 2 }),
    defineField({ name: "comingSoonText", title: "Coming Soon Message", type: "text", rows: 3 }),
    defineField({
      name: "tiers",
      title: "Pricing Tiers (placeholder)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Tier Name", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "features",
              title: "Feature Bullets",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "highlighted", title: "Highlight this tier?", type: "boolean" }),
          ],
          preview: { select: { title: "name" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Pricing Page" }) },
});
