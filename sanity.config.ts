import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  CogIcon,
  HomeIcon,
  InfoOutlineIcon,
  EnvelopeIcon,
  TagIcon,
} from "@sanity/icons";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "scopezero-marketing",
  title: "ScopeZero Marketing",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "tfk0lw07",
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("ScopeZero Website")
          .items([
            // ── Global ──────────────────────────────────────────────────
            S.listItem()
              .title("Site Settings")
              .icon(CogIcon)
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings"),
              ),

            S.divider(),

            // ── Pages ────────────────────────────────────────────────────
            S.listItem()
              .title("Home Page")
              .icon(HomeIcon)
              .child(
                S.document()
                  .schemaType("homePage")
                  .documentId("homePage")
                  .title("Home Page"),
              ),
            S.listItem()
              .title("About Page")
              .icon(InfoOutlineIcon)
              .child(
                S.document()
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
                  .title("About Page"),
              ),
            S.listItem()
              .title("Contact Page")
              .icon(EnvelopeIcon)
              .child(
                S.document()
                  .schemaType("contactPage")
                  .documentId("contactPage")
                  .title("Contact Page"),
              ),
            S.listItem()
              .title("Pricing Page")
              .icon(TagIcon)
              .child(
                S.document()
                  .schemaType("pricingPage")
                  .documentId("pricingPage")
                  .title("Pricing Page"),
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
