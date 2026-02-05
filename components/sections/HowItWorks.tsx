"use client";

import { useTranslations } from "next-intl";
import { Tag, Radio, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      icon: <Tag className="w-8 h-8" />,
      number: "01",
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: <Radio className="w-8 h-8" />,
      number: "02",
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      number: "03",
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-mint-light">
      <Container>
        <SectionHeader
          title={t("headline")}
          description={t("description")}
        />

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-medium mb-6 relative z-10">
                  <div className="text-primary">{step.icon}</div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-6 lg:-right-10 text-primary/30">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline badge */}
        <div className="text-center mt-12">
          <Badge variant="success" className="text-base px-6 py-2">
            {t("timeline")}
          </Badge>
        </div>
      </Container>
    </section>
  );
}
