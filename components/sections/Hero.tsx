"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint via-mint-light to-white" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="default" className="animate-fade-in">
              {t("badge")}
            </Badge>

            <h1 className="text-display-lg md:text-display-xl text-primary animate-fade-in-up">
              {t("headline")}
            </h1>

            <p className="text-xl text-muted leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t("subheadline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="primary" size="lg">
                {t("cta")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="mr-2 w-5 h-5" />
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>

          {/* Visual - Dashboard Mockup Placeholder */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-large p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Browser chrome */}
              <div className="flex items-center space-x-2 px-4 py-3 border-b border-gray-100">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-100 rounded-lg px-4 py-1.5 text-xs text-gray-400 text-center">
                    app.medimindtrack.com
                  </div>
                </div>
              </div>

              {/* Dashboard content placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-mint-light to-white rounded-lg p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-primary/20 rounded" />
                    <div className="h-3 w-24 bg-primary/10 rounded" />
                  </div>
                  <div className="h-8 w-24 bg-primary rounded-lg" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-soft">
                      <div className="h-6 w-12 bg-success/20 rounded mb-2" />
                      <div className="h-3 w-16 bg-gray-100 rounded" />
                    </div>
                  ))}
                </div>

                {/* Floor plan placeholder */}
                <div className="bg-white rounded-lg p-4 shadow-soft">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-3 w-20 bg-primary/20 rounded" />
                    <div className="h-3 w-16 bg-primary/10 rounded" />
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-6 rounded ${
                          [3, 7, 11, 14].includes(i)
                            ? "bg-success/40"
                            : [5, 9].includes(i)
                            ? "bg-primary/30"
                            : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-medium p-4 animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-success rounded-full" />
                </div>
                <div>
                  <div className="text-xs text-muted">IV Pump Located</div>
                  <div className="text-sm font-semibold text-primary">Room 312</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-medium p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">24</span>
                </div>
                <div>
                  <div className="text-xs text-muted">Devices Tracked</div>
                  <div className="text-sm font-semibold text-primary">3rd Floor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
