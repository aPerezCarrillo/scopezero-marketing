import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — ScopeZero",
  description: "Learn about ScopeZero — built by sustainability practitioners to make carbon accounting accessible for every organisation.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const page = await sanityFetch<{
    heroTitle?: string;
    heroSubtitle?: string;
    visionTitle?: string;
    visionText?: string;
    missionTitle?: string;
    missionText?: string;
    storyTitle?: string;
    storyText?: string;
    teamMembers?: Array<{ name: string; role: string; bio: string; linkedin?: string }>;
  }>(ABOUT_PAGE_QUERY);

  return (
    <AboutContent
      heroTitle={page?.heroTitle}
      heroSubtitle={page?.heroSubtitle}
      visionTitle={page?.visionTitle}
      visionText={page?.visionText}
      missionTitle={page?.missionTitle}
      missionText={page?.missionText}
      storyTitle={page?.storyTitle}
      storyText={page?.storyText}
      teamMembers={page?.teamMembers}
    />
  );
}
