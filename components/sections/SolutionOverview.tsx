"use client";

import { useTranslations } from "next-intl";
import { MapPin, Battery, Wifi, BarChart3, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SolutionOverview() {
  const t = useTranslations("solution");

  const features = [
    {
      icon: <MapPin className="w-4 h-4" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Battery className="w-4 h-4" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Wifi className="w-4 h-4" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-large">
              {/* Dashboard preview */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                <div className="h-full bg-gray-800/50 rounded border border-gray-700/50 p-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Floor 3 - West Wing</div>
                        <div className="text-gray-400 text-xs">24 devices active</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span className="text-emerald-400 text-xs">Live</span>
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="flex-1 grid grid-cols-6 grid-rows-4 gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded ${
                          [2, 8, 14, 20].includes(i)
                            ? "bg-emerald-500/40 border border-emerald-500/60"
                            : [5, 11, 17].includes(i)
                            ? "bg-primary/30 border border-primary/50"
                            : "bg-gray-700/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-medium p-3 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-900">Ultrasound located</div>
                  <div className="text-[11px] text-gray-500">ICU Room 405</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-display-md text-primary mb-4">
              {t("headline")}
            </h2>
            <p className="text-body text-muted mb-8">
              {t("description")}
            </p>

            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-md bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="md">
              {t("cta")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
