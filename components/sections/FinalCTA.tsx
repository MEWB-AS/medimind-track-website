"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-mint to-mint-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <Container size="narrow" className="relative z-10 text-center">
        <h2 className="text-display-sm md:text-display-md lg:text-display-lg text-primary mb-6">
          {t("headline")}
        </h2>

        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            {t("button")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <p className="mt-8 text-muted">
          {t("alternative")}{" "}
          <a
            href="mailto:hello@medimindtrack.com"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            <Mail className="w-4 h-4 mr-1" />
            {t("contact")}
          </a>
        </p>
      </Container>
    </section>
  );
}
