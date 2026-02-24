import { createClient } from "next-sanity";
import { cache } from "react";

// Guard against empty / missing env vars — Sanity throws if projectId is falsy or invalid chars
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const sanityDataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || "production";

export const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2026-02-23",
  useCdn: true,
});

/** Cache + revalidate every 60 seconds */
export const sanityFetch = cache(async <T = unknown>(query: string): Promise<T | null> => {
  try {
    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch {
    // Return null if Sanity project isn't configured yet — fallback content renders instead
    return null;
  }
});
