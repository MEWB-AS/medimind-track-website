"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Testimonial() {
  const t = useTranslations("testimonial");

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="relative p-10 md:p-16 bg-[#EBF7F3] rounded-2xl">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            <blockquote className="text-2xl md:text-3xl text-[#0A1F17] leading-relaxed mb-8 mt-8">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>

            <div className="flex items-center space-x-4">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-medium text-lg">
                CE
              </div>
              <div>
                <div className="font-medium text-base text-[#0A1F17]">
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
