import "server-only";
import { cache } from "react";
import { draftMode } from "next/headers";
import { client } from "./client";

/** Fetch Sanity content — serves draft previews when Next.js draft mode is enabled */
export const sanityFetch = cache(async <T = unknown>(query: string): Promise<T | null> => {
  try {
    const { isEnabled } = await draftMode();

    if (isEnabled) {
      // Draft mode: bypass CDN, use read token, return draft documents
      return await client
        .withConfig({ useCdn: false, token: process.env.SANITY_API_READ_TOKEN })
        .fetch<T>(query, {}, { perspective: "previewDrafts", stega: true } as object);
    }

    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch {
    // Return null if Sanity project isn't configured yet — fallback content renders instead
    return null;
  }
});
