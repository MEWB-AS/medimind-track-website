"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");

  const productLinks = [
    { label: t("product.features"), href: "/platform" },
    { label: t("product.howItWorks"), href: "/technology" },
    { label: t("product.pilot"), href: "/" },
  ];

  const companyLinks = [
    { label: t("company.about"), href: "/about" },
    { label: t("company.contact"), href: "/" },
  ];

  const legalLinks = [
    { label: t("legal.privacy"), href: "#" },
    { label: t("legal.terms"), href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <Container>
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column - larger */}
            <div className="lg:col-span-5">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-semibold tracking-tight text-[#0A1F17]">
                  MediMind<span className="text-primary">Sense</span>
                </span>
              </Link>
              <p className="text-muted text-base leading-relaxed max-w-sm mb-8">
                {t("description")}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#EBF7F3] hover:bg-[#d4ede4] flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#EBF7F3] hover:bg-[#d4ede4] flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* Product */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted/60 mb-5">
                    {t("product.title")}
                  </h4>
                  <ul className="space-y-3">
                    {productLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-[#0A1F17] transition-colors text-sm inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted/60 mb-5">
                    {t("company.title")}
                  </h4>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-[#0A1F17] transition-colors text-sm inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted/60 mb-5">
                    {t("legal.title")}
                  </h4>
                  <ul className="space-y-3">
                    {legalLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-[#0A1F17] transition-colors text-sm inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted/60 text-sm">
              {t("copyright")}
            </p>
            <p className="text-muted/40 text-sm">
              {t("tagline")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
