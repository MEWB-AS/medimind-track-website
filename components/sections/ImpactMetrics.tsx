"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

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
    <section className="py-16 bg-primary">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-display-sm text-white mb-2">
            {t("headline")}
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-white/60 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
