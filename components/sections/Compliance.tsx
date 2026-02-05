"use client";

import { useTranslations } from "next-intl";
import { Award, Shield, FileText, Globe, Code } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Compliance() {
  const t = useTranslations("compliance");

  const securityItems = [
    { icon: <Shield className="w-4 h-4" />, label: t("security.items.encryption") },
    { icon: <FileText className="w-4 h-4" />, label: t("security.items.audit") },
    { icon: <Globe className="w-4 h-4" />, label: t("security.items.gdpr") },
    { icon: <Code className="w-4 h-4" />, label: t("security.items.api") },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <h2 className="text-xl md:text-2xl text-primary text-center mb-10">
          {t("headline")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Award */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-medium text-primary mb-1">
                  {t("award.title")}
                </h3>
                <p className="text-sm text-muted">
                  {t("award.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-base font-medium text-primary mb-4">
              {t("security.title")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {securityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white rounded-lg p-3 border border-gray-100"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-xs font-medium text-primary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swiss badge */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted inline-flex items-center space-x-1.5">
            <span>🇨🇭</span>
            <span>{t("swiss")}</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
