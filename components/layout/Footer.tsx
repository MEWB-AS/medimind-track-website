"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");

  const productLinks = [
    { label: t("product.features"), href: "#features" },
    { label: t("product.howItWorks"), href: "#how-it-works" },
    { label: t("product.pilot"), href: "#contact" },
  ];

  const companyLinks = [
    { label: t("company.about"), href: "#" },
    { label: t("company.contact"), href: "#contact" },
  ];

  const legalLinks = [
    { label: t("legal.privacy"), href: "#" },
    { label: t("legal.terms"), href: "#" },
    { label: t("legal.imprint"), href: "#" },
  ];

  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/logo.svg"
                  alt="MediMind Track"
                  width={120}
                  height={28}
                  className="h-7 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/70 text-xs mb-3 leading-relaxed">
                {t("description")}
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-medium text-sm mb-3">{t("product.title")}</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium text-sm mb-3">{t("company.title")}</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium text-sm mb-3">{t("legal.title")}</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-white/50 text-xs">
              {t("copyright")}
            </p>
            <p className="text-white/40 text-xs italic">
              {t("tagline")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
