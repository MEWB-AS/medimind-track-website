"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ImpactMetrics() {
  const t = useTranslations("impact");

  const metrics = [
    {
      value: t("stat1.value"),
      label: t("stat1.label"),
    },
    {
      value: t("stat2.value"),
      label: t("stat2.label"),
    },
    {
      value: t("stat3.value"),
      label: t("stat3.label"),
    },
    {
      value: t("stat4.value"),
      label: t("stat4.label"),
    },
  ];

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <Container className="relative z-10">
        <SectionHeader
          title={t("headline")}
          description={t("description")}
          variant="light"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
