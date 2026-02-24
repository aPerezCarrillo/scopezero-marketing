import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Page Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Page Subtitle", type: "text", rows: 2 }),
    defineField({ name: "formTitle", title: "Form Section Title", type: "string" }),
    defineField({ name: "calendlyTitle", title: "Calendly Section Title", type: "string" }),
    defineField({ name: "calendlySubtitle", title: "Calendly Section Subtitle", type: "text", rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
});
