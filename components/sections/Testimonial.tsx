"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Testimonial() {
  const t = useTranslations("testimonial");

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <Container size="narrow">
        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Quote className="w-5 h-5 text-primary" />
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-6 md:p-8 relative">
            <blockquote className="text-lg md:text-xl text-primary leading-relaxed mb-6">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>

            <div className="flex items-center space-x-3">
              {/* Avatar placeholder */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-medium text-sm">
                CE
              </div>
              <div>
                <div className="font-medium text-sm text-primary">
                  {t("author")}
                </div>
                <div className="text-muted text-xs">
                  {t("company")}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-muted mt-4 italic">
              {t("note")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
