import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Page Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Page Subtitle", type: "text", rows: 2 }),
    defineField({ name: "visionTitle", title: "Vision Section Title", type: "string" }),
    defineField({ name: "visionText", title: "Vision Text", type: "text", rows: 5 }),
    defineField({ name: "missionTitle", title: "Mission Section Title", type: "string" }),
    defineField({ name: "missionText", title: "Mission Text", type: "text", rows: 5 }),
    defineField({ name: "storyTitle", title: "Story Section Title", type: "string" }),
    defineField({ name: "storyText", title: "Story Text", type: "text", rows: 8 }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Role / Title", type: "string" }),
            defineField({ name: "bio", title: "Bio", type: "text", rows: 3 }),
            defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
