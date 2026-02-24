"use client";
/**
 * Sanity Studio — embedded at /studio
 * The CEO visits this route, logs in with their sanity.io account, and edits content.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
