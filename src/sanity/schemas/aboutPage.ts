import { defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "heroTitle",
      title: "Page Title",
      type: "string",
      description: "Large heading at the top of the page (e.g. About ScopeZero)",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Page Subtitle",
      type: "text",
      rows: 2,
      description: "Short tagline shown below the title",
    }),
    defineField({
      name: "visionTitle",
      title: "Vision Section Title",
      type: "string",
      description: "Heading for the vision block (e.g. Our Vision)",
    }),
    defineField({
      name: "visionText",
      title: "Vision Text",
      type: "text",
      rows: 5,
      description: "A paragraph describing the company's long-term vision",
    }),
    defineField({
      name: "missionTitle",
      title: "Mission Section Title",
      type: "string",
      description: "Heading for the mission block (e.g. Our Mission)",
    }),
    defineField({
      name: "missionText",
      title: "Mission Text",
      type: "text",
      rows: 5,
      description: "A paragraph describing what ScopeZero is actively doing",
    }),
    defineField({
      name: "storyTitle",
      title: "Story Section Title",
      type: "string",
      description: "Heading for the origin story block (e.g. Our Story)",
    }),
    defineField({
      name: "storyText",
      title: "Story Text",
      type: "text",
      rows: 8,
      description: "How and why ScopeZero was founded",
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      description: "Add a card for each team member — leave empty to hide the team section",
      of: [
        {
          type: "object",
          icon: InfoOutlineIcon,
          fields: [
            defineField({ name: "name",     title: "Full Name",      type: "string" }),
            defineField({ name: "role",     title: "Role / Title",   type: "string" }),
            defineField({ name: "bio",      title: "Short Bio",      type: "text",  rows: 3 }),
            defineField({ name: "linkedin", title: "LinkedIn URL",   type: "url" }),
          ],
          preview: {
            select: { title: "name", subtitle: "role" },
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
});
