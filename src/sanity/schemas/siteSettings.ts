import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "logoText", title: "Logo Text", type: "string" }),
    defineField({ name: "appUrl", title: "App URL", type: "url" }),
    defineField({ name: "demoUrl", title: "Demo URL", type: "url" }),
    defineField({ name: "calendlyUrl", title: "Calendly URL", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "footerCopy", title: "Footer Copyright Text", type: "string" }),
  ],
  preview: { select: { title: "logoText" } },
});
