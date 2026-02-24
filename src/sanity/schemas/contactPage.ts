import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Page Title",
      type: "string",
      description: "Large heading at the top (e.g. Get in touch)",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Page Subtitle",
      type: "text",
      rows: 2,
      description: "Short description shown below the title",
    }),
    defineField({
      name: "formTitle",
      title: "Form Section Title",
      type: "string",
      description: "Heading above the contact form (e.g. Send us a message)",
    }),
    defineField({
      name: "calendlyTitle",
      title: "Calendly Section Title",
      type: "string",
      description: "Heading above the Calendly booking card (e.g. Book a demo call)",
    }),
    defineField({
      name: "calendlySubtitle",
      title: "Calendly Section Subtitle",
      type: "text",
      rows: 2,
      description: "Short text encouraging visitors to book a call",
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
