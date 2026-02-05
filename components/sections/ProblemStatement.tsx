"use client";

import { useTranslations } from "next-intl";
import { Clock, DollarSign, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";

export function ProblemStatement() {
  const t = useTranslations("problem");

  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: t("stat1.value"),
      label: t("stat1.label"),
      description: t("stat1.description"),
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: t("stat2.value"),
      label: t("stat2.label"),
      description: t("stat2.description"),
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      value: t("stat3.value"),
      label: t("stat3.label"),
      description: t("stat3.description"),
    },
  ];

  return (
    <section id="solution" className="section-padding bg-mint-light">
      <Container>
        <SectionHeader
          title={t("headline")}
          description={t("description")}
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        <p className="text-center text-lg text-muted max-w-3xl mx-auto">
          {t("conclusion")}
        </p>
      </Container>
    </section>
  );
}
