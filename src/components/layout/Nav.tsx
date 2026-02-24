"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about",   label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

interface NavProps {
  appUrl?: string;
  calendlyUrl?: string;
  logoText?: string;
}

export function Nav({ appUrl, calendlyUrl, logoText }: NavProps) {
  const pathname = usePathname();

  const app      = appUrl      ?? process.env.NEXT_PUBLIC_APP_URL      ?? "https://carbon-accounting.scopezer0.com";
  const calendly = calendlyUrl ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? "#";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-white/80 transition-colors shrink-0">
          {logoText ?? "ScopeZero"}
        </Link>

        {/* Centre nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm transition-colors",
                pathname === href
                  ? "text-white bg-white/10"
                  : "text-white/55 hover:text-white hover:bg-white/5"
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <a href={calendly} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              Book Demo
            </Button>
          </a>
          <a href={app} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm" className="gap-1.5">
              Launch App
              <ExternalLink className="h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
