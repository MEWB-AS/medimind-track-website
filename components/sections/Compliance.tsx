"use client";

import { useTranslations } from "next-intl";
import { Award, Shield, FileText, Globe, Code } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Compliance() {
  const t = useTranslations("compliance");

  const securityItems = [
    { icon: <Shield className="w-5 h-5" />, label: t("security.items.encryption") },
    { icon: <FileText className="w-5 h-5" />, label: t("security.items.audit") },
    { icon: <Globe className="w-5 h-5" />, label: t("security.items.gdpr") },
    { icon: <Code className="w-5 h-5" />, label: t("security.items.api") },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader title={t("headline")} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Award */}
          <div className="bg-mint rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("award.title")}
                </h3>
                <p className="text-muted">
                  {t("award.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-mint rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6">
              {t("security.title")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {securityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-soft"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-medium text-primary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swiss badge */}
        <div className="mt-8 text-center">
          <p className="text-muted inline-flex items-center space-x-2">
            <span className="text-xl">🇨🇭</span>
            <span>{t("swiss")}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
