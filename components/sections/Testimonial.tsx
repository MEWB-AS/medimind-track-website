"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Testimonial() {
  const t = useTranslations("testimonial");

  return (
    <section className="section-padding bg-mint-light">
      <Container size="narrow">
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          <div className="bg-white rounded-2xl shadow-large p-8 md:p-12 relative">
            <blockquote className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>

            <div className="flex items-center space-x-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold text-lg">
                CE
              </div>
              <div>
                <div className="font-semibold text-primary">
                  {t("author")}
                </div>
                <div className="text-muted text-sm">
                  {t("company")}
                </div>
              </div>
            </div>

            <p className="text-xs text-muted mt-6 italic">
              {t("note")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
