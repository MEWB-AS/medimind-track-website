"use client";

import { useTranslations } from "next-intl";
import { Tag, Radio, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      icon: <Tag className="w-6 h-6" />,
      number: "01",
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: <Radio className="w-6 h-6" />,
      number: "02",
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      number: "03",
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* Steps - Horizontal layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-[#EBF7F3] rounded-xl group"
            >
              {/* Step number - large and muted */}
              <span className="absolute top-6 right-6 text-4xl font-light text-primary/20">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-base text-[#0A1F17] leading-relaxed">
                {step.description}
              </p>

              {/* Connector line on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>

        {/* Timeline badge */}
        <div className="mt-12 flex justify-center">
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-[#EBF7F3] text-primary text-base font-medium">
            {t("timeline")}
          </span>
        </div>
      </Container>
    </section>
  );
}
