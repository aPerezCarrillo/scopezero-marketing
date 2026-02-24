import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  name: "scopezero-marketing",
  title: "ScopeZero Marketing",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "tfk0lw07",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
