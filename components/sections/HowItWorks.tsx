"use client";

import { useTranslations } from "next-intl";
import { Tag, Radio, MonitorSmartphone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      icon: <Tag className="w-5 h-5" />,
      number: "1",
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: <Radio className="w-5 h-5" />,
      number: "2",
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      number: "3",
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-display-md text-primary mb-4">
            {t("headline")}
          </h2>
          <p className="text-body text-muted">
            {t("description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}

                <div className="text-center">
                  {/* Step number + icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-gray-200 mb-4 relative">
                    <div className="text-primary">{step.icon}</div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-medium rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline badge */}
        <div className="text-center mt-10">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
            {t("timeline")}
          </span>
        </div>
      </Container>
    </section>
  );
}
