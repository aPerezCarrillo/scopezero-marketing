import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:       "ScopeZero — Carbon emission data made easy",
  description: "AI-powered carbon accounting for sustainability consultancies and businesses. Automate bill extraction, track Scope 1/2/3 emissions, and drive real climate action.",
  openGraph: {
    title:       "ScopeZero — Carbon emission data made easy",
    description: "AI-powered carbon accounting. Automate bill extraction, track emissions, drive climate action.",
    siteName:    "ScopeZero",
    type:        "website",
  },
};

interface SiteSettings {
  logoText?:    string;
  appUrl?:      string;
  calendlyUrl?: string;
  linkedinUrl?: string;
  footerCopy?:  string;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);

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
      </body>
    </html>
  );
}
