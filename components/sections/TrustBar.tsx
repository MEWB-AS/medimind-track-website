"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  const t = useTranslations("trustBar");

  // Placeholder hospital logos - would be replaced with real logos
  const placeholderLogos = [
    "Regional Medical Center",
    "University Hospital",
    "City Healthcare",
    "Nordic Health System",
    "Alpine Medical Group",
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <Container>
        <p className="text-center text-xs text-muted mb-6">
          {t("headline")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-40">
          {placeholderLogos.map((name, index) => (
            <div
              key={index}
              className="h-6 px-3 flex items-center justify-center"
            >
              <span className="text-gray-400 font-medium text-xs whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
