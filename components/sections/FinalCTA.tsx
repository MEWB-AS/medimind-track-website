"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <div className="bg-[#0A1F17] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-6">
              {t("headline")}
            </h2>

            <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="bg-white text-[#0A1F17] hover:bg-white/90">
                {t("button")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="mt-8 text-base text-white/50">
              {t("alternative")}{" "}
              <a
                href="mailto:hello@medimindtrack.com"
                className="text-white font-medium hover:text-white/80 transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-1.5" />
                {t("contact")}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
