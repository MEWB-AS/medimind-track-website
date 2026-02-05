"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

      <Container size="narrow" className="relative z-10 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl text-primary mb-4">
          {t("headline")}
        </h2>

        <p className="text-sm text-muted mb-8 max-w-xl mx-auto">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" size="md">
            {t("button")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted">
          {t("alternative")}{" "}
          <a
            href="mailto:hello@medimindtrack.com"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            <Mail className="w-3.5 h-3.5 mr-1" />
            {t("contact")}
          </a>
        </p>
      </Container>
    </section>
  );
}
