import { sanityFetch } from "@/sanity/fetch";
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { Hero }         from "@/components/home/Hero";
import { Products }     from "@/components/home/Products";
import { Features }     from "@/components/home/Features";
import { AgentSection } from "@/components/home/AgentSection";
import { HowItWorks }   from "@/components/home/HowItWorks";
import { TrustBadges }  from "@/components/home/TrustBadges";
import { HomeCTA }      from "@/components/home/HomeCTA";

export const revalidate = 60;

interface SiteSettings { appUrl?: string; calendlyUrl?: string; }
interface HomePage {
  heroBadge?: string;
  heroTitleLine1?: string;
  heroTitleGradient?: string;
  heroSubtitle?: string;
  heroCta1Label?: string;
  heroCta2Label?: string;
  productsSectionTitle?: string;
  productsSectionSubtitle?: string;
  products?: Array<{ title: string; description: string; ctaLabel?: string; ctaUrl?: string; badge?: string; highlight?: boolean }>;
  featuresSectionTitle?: string;
  featuresSectionSubtitle?: string;
  features?: Array<{ icon?: string; title: string; description: string }>;
  agentsBadge?: string;
  agentsTitle?: string;
  agentsSubtitle?: string;
  howTitle?: string;
  howSubtitle?: string;
  howSteps?: Array<{ title: string; description: string }>;
  ctaBadge?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
}

export default async function HomePage() {
  const [page, settings] = await Promise.all([
    sanityFetch<HomePage>(HOME_PAGE_QUERY),
    sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY),
  ]);

  return (
    <>
      <Hero
        badge={page?.heroBadge}
        titleLine1={page?.heroTitleLine1}
        titleGradient={page?.heroTitleGradient}
        subtitle={page?.heroSubtitle}
        cta1Label={page?.heroCta1Label}
        cta2Label={page?.heroCta2Label}
        appUrl={settings?.appUrl}
        calendlyUrl={settings?.calendlyUrl}
      />
      <Products
        sectionTitle={page?.productsSectionTitle}
        sectionSubtitle={page?.productsSectionSubtitle}
        products={page?.products}
      />
      <AgentSection
        badge={page?.agentsBadge}
        title={page?.agentsTitle}
        subtitle={page?.agentsSubtitle}
      />
      <Features
        sectionTitle={page?.featuresSectionTitle}
        sectionSubtitle={page?.featuresSectionSubtitle}
        features={page?.features}
      />
      <HowItWorks
        title={page?.howTitle}
        subtitle={page?.howSubtitle}
        steps={page?.howSteps}
      />
      <TrustBadges />
      <HomeCTA
        badge={page?.ctaBadge}
        title={page?.ctaTitle}
        subtitle={page?.ctaSubtitle}
        primaryLabel={page?.ctaPrimaryLabel}
        secondaryLabel={page?.ctaSecondaryLabel}
        appUrl={settings?.appUrl}
        calendlyUrl={settings?.calendlyUrl}
      />
    </>
  );
}
