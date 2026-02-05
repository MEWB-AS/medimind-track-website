"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="pt-28 pb-16 overflow-hidden">
      <Container>
        {/* Centered text content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-6 animate-fade-in text-xs font-medium">
            {t("badge")}
          </Badge>

          <h1 className="text-display-lg md:text-display-xl text-primary mb-4 animate-fade-in-up">
            {t("headline")}
          </h1>

          <p
            className="text-body-lg text-muted mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("subheadline")}
          </p>

          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="primary" size="lg">
              {t("cta")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Large video below - same width as content */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full object-cover"
              src="/header-video-placeholder.mp4"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
