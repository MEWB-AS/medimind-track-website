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
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.svg"
                  alt="MediMind Track"
                  width={140}
                  height={32}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/70 text-sm mb-4">
                {t("description")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">{t("product.title")}</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">{t("company.title")}</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">{t("legal.title")}</h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
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
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              {t("copyright")}
            </p>
            <p className="text-white/40 text-sm italic">
              {t("tagline")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
