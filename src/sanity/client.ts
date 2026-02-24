import { createClient } from "next-sanity";

// Guard against empty / missing env vars — Sanity throws if projectId is falsy or invalid chars
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const sanityDataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || "production";

export const client = createClient({
  projectId: sanityProjectId,
  dataset:   sanityDataset,
  apiVersion: "2026-02-23",
  useCdn: true,
});
