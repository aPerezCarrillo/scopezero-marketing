import Link from "next/link";
import { Linkedin } from "lucide-react";

interface FooterProps {
  footerCopy?: string;
  linkedinUrl?: string;
}

export function Footer({ footerCopy, linkedinUrl }: FooterProps) {
  const year = new Date().getFullYear();
  const copy = footerCopy ?? `© ${year} ScopeZero. Carbon emission data made easy.`;

  return (
    <footer className="border-t border-white/[0.06] py-10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copy */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Link href="/" className="text-base font-bold text-white">ScopeZero</Link>
            <p className="text-xs text-white/30">{copy}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/35">
            {[
              { href: "/",        label: "Home" },
              { href: "/about",   label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white/70 transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
