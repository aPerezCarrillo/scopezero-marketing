import { createClient } from "next-sanity";
import { cache } from "react";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
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
