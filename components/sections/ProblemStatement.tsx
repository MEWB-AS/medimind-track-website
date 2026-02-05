"use client";

import { useTranslations } from "next-intl";
import { Clock, TrendingDown, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ProblemStatement() {
  const t = useTranslations("problem");

  const stats = [
    {
      icon: <Clock className="w-5 h-5" />,
      value: t("stat1.value"),
      label: t("stat1.label"),
      description: t("stat1.description"),
    },
    {
      icon: <TrendingDown className="w-5 h-5" />,
      value: t("stat2.value"),
      label: t("stat2.label"),
      description: t("stat2.description"),
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      value: t("stat3.value"),
      label: t("stat3.label"),
      description: t("stat3.description"),
    },
  ];

  return (
    <section id="solution" className="section-padding bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-display-md text-primary mb-4">
            {t("headline")}
          </h2>
          <p className="text-body text-muted">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-semibold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-body text-muted max-w-2xl mx-auto">
          {t("conclusion")}
        </p>
      </Container>
    </section>
  );
}
