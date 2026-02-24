import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/fetch";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SiteSettings {
  logoText?:    string;
  appUrl?:      string;
  calendlyUrl?: string;
  linkedinUrl?: string;
  footerCopy?:  string;
  ogImage?:     any;
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
  const ogImageUrl = settings?.ogImage
    ? urlFor(settings.ogImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title:       "ScopeZero — Carbon emission data made easy",
    description: "AI-powered carbon accounting for sustainability consultancies and businesses. Automate bill extraction, track Scope 1/2/3 emissions, and drive real climate action.",
    openGraph: {
      title:       "ScopeZero — Carbon emission data made easy",
      description: "AI-powered carbon accounting. Automate bill extraction, track emissions, drive climate action.",
      siteName:    "ScopeZero",
      type:        "website",
      ...(ogImageUrl && { images: [{ url: ogImageUrl, width: 1200, height: 630 }] }),
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Nav
          logoText={settings?.logoText}
          appUrl={settings?.appUrl}
          calendlyUrl={settings?.calendlyUrl}
        />
        <main>{children}</main>
        <Footer
          footerCopy={settings?.footerCopy}
          linkedinUrl={settings?.linkedinUrl}
        />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
