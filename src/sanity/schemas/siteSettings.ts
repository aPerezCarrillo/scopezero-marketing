import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      description: "Brand name shown in the nav bar (e.g. ScopeZero)",
    }),
    defineField({
      name: "appUrl",
      title: "App URL",
      type: "url",
      description: "Link to the main carbon accounting app — used by 'Launch App' buttons",
    }),
    defineField({
      name: "demoUrl",
      title: "Demo URL",
      type: "url",
      description: "Link to the live consultant toolbox demo",
    }),
    defineField({
      name: "calendlyUrl",
      title: "Calendly Booking URL",
      type: "url",
      description: "Your Calendly link — used by all 'Book a Demo' buttons across the site",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      description: "Company LinkedIn page — shown in the footer",
    }),
    defineField({
      name: "footerCopy",
      title: "Footer Copyright Text",
      type: "string",
      description: "Shown at the bottom of every page (e.g. © 2025 ScopeZero. Carbon emission data made easy.)",
    }),
  ],
  preview: { select: { title: "logoText" } },
});
