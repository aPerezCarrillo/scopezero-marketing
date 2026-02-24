import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // Hero
    defineField({ name: "heroBadge", title: "Hero Badge Text", type: "string" }),
    defineField({ name: "heroTitleLine1", title: "Hero Title — Line 1", type: "string" }),
    defineField({ name: "heroTitleGradient", title: "Hero Title — Gradient Word", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 3 }),
    defineField({ name: "heroCta1Label", title: "CTA 1 Label (primary)", type: "string" }),
    defineField({ name: "heroCta2Label", title: "CTA 2 Label (secondary)", type: "string" }),

    // Products section
    defineField({ name: "productsSectionTitle", title: "Products Section Title", type: "string" }),
    defineField({ name: "productsSectionSubtitle", title: "Products Section Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Product Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
            defineField({ name: "ctaUrl", title: "CTA URL", type: "url" }),
            defineField({ name: "badge", title: "Badge (e.g. Coming Soon)", type: "string" }),
            defineField({ name: "highlight", title: "Highlight this card?", type: "boolean" }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // Features section
    defineField({ name: "featuresSectionTitle", title: "Features Section Title", type: "string" }),
    defineField({ name: "featuresSectionSubtitle", title: "Features Section Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon name (lucide-react)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // AI Agents section
    defineField({ name: "agentsBadge", title: "AI Agents Badge", type: "string" }),
    defineField({ name: "agentsTitle", title: "AI Agents Title", type: "string" }),
    defineField({ name: "agentsSubtitle", title: "AI Agents Subtitle", type: "text", rows: 2 }),

    // How it works section
    defineField({ name: "howTitle", title: "How It Works Title", type: "string" }),
    defineField({ name: "howSubtitle", title: "How It Works Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "howSteps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // CTA section
    defineField({ name: "ctaBadge", title: "CTA Section Badge", type: "string" }),
    defineField({ name: "ctaTitle", title: "CTA Section Title", type: "string" }),
    defineField({ name: "ctaSubtitle", title: "CTA Section Subtitle", type: "text", rows: 2 }),
    defineField({ name: "ctaPrimaryLabel", title: "CTA Primary Button Label", type: "string" }),
    defineField({ name: "ctaSecondaryLabel", title: "CTA Secondary Button Label", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
});
