import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { PRICING_PAGE_QUERY } from "@/sanity/queries";
import { PricingPlaceholder } from "@/components/pricing/PricingPlaceholder";

export const metadata: Metadata = {
  title: "Pricing — ScopeZero",
  description: "Transparent, usage-based pricing for ScopeZero. Plans for consultancies, SMEs and enterprises.",
};

export const revalidate = 60;

export default async function PricingPage() {
  const page = await sanityFetch<{
    heroTitle?: string;
    heroSubtitle?: string;
    comingSoonText?: string;
    tiers?: Array<{
      name: string;
      tagline?: string;
      description: string;
      features: string[];
      ctaLabel: string;
      highlighted: boolean;
    }>;
  }>(PRICING_PAGE_QUERY);

  return (
    <PricingPlaceholder
      heroTitle={page?.heroTitle}
      heroSubtitle={page?.heroSubtitle}
      comingSoonText={page?.comingSoonText}
      tiers={page?.tiers}
    />
  );
}
