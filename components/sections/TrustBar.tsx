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
    <section className="py-12 bg-white border-y border-gray-100">
      <Container>
        <p className="text-center text-sm text-muted mb-8">
          {t("headline")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
          {placeholderLogos.map((name, index) => (
            <div
              key={index}
              className="h-8 px-4 flex items-center justify-center"
            >
              <span className="text-gray-400 font-medium text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
