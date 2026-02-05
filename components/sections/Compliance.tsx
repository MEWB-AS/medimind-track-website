"use client";

import { useTranslations } from "next-intl";
import {
  Shield,
  Lock,
  FileCheck,
  Server,
  Eye,
  Building2,
  CheckCircle2
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Compliance() {
  const t = useTranslations("compliance");

  const complianceItems = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("items.hipaa.title"),
      description: t("items.hipaa.description"),
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: t("items.encryption.title"),
      description: t("items.encryption.description"),
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: t("items.audit.title"),
      description: t("items.audit.description"),
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t("items.soc2.title"),
      description: t("items.soc2.description"),
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t("items.gdpr.title"),
      description: t("items.gdpr.description"),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("items.enterprise.title"),
      description: t("items.enterprise.description"),
    },
  ];

  const certifications = [
    t("certifications.item1"),
    t("certifications.item2"),
    t("certifications.item3"),
    t("certifications.item4"),
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF7F3] rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("badge")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-[#EBF7F3] hover:border-[#d4ede4] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#EBF7F3] rounded-xl flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-medium text-[#0A1F17] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom certifications bar */}
        <div className="bg-[#EBF7F3] rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-[#0A1F17] mb-1">
                {t("certifications.title")}
              </h3>
              <p className="text-sm text-muted">
                {t("certifications.subtitle")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4ede4] rounded-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-[#0A1F17]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
