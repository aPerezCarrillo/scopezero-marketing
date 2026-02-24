import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — ScopeZero",
  description: "Get in touch with the ScopeZero team. Book a demo or send us a message.",
};

export const revalidate = 60;

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    sanityFetch<{
      heroTitle?: string;
      heroSubtitle?: string;
      formTitle?: string;
      calendlyTitle?: string;
      calendlySubtitle?: string;
    }>(CONTACT_PAGE_QUERY),
    sanityFetch<{ calendlyUrl?: string }>(SITE_SETTINGS_QUERY),
  ]);

  return (
    <ContactForm
      heroTitle={page?.heroTitle}
      heroSubtitle={page?.heroSubtitle}
      formTitle={page?.formTitle}
      calendlyTitle={page?.calendlyTitle}
      calendlySubtitle={page?.calendlySubtitle}
      calendlyUrl={settings?.calendlyUrl}
    />
  );
}
