import "server-only";
import { cache } from "react";
import { draftMode } from "next/headers";
import { client } from "./client";

// Stega encodes studio URLs into fetched strings so the Presentation tool
// can map clicked elements back to the correct document + field in the Studio
const previewClient = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: true,
    studioUrl: "https://scopezero.sanity.studio",
  },
});

/** Fetch Sanity content — serves stega-encoded draft previews when draft mode is enabled */
export const sanityFetch = cache(async <T = unknown>(query: string): Promise<T | null> => {
  try {
    const { isEnabled } = await draftMode();

    if (isEnabled) {
      return await previewClient.fetch<T>(
        query,
        {},
        { perspective: "previewDrafts", next: { revalidate: 0 } },
      );
    }

    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch {
    // Return null if Sanity project isn't configured yet — fallback content renders instead
    return null;
  }
});
