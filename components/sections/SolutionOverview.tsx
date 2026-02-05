"use client";

import { useTranslations } from "next-intl";
import { MapPin, Battery, Wifi, BarChart3, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function SolutionOverview() {
  const t = useTranslations("solution");

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video/Visual placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-mint to-mint-light rounded-2xl shadow-large overflow-hidden">
              {/* Dashboard visualization placeholder */}
              <div className="w-full h-full p-6 flex flex-col">
                {/* Map header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-primary/30 rounded" />
                      <div className="h-2 w-16 bg-primary/20 rounded mt-1" />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-6 w-16 bg-primary/20 rounded" />
                    <div className="h-6 w-16 bg-primary/10 rounded" />
                  </div>
                </div>

                {/* Floor plan */}
                <div className="flex-1 bg-white rounded-xl p-4 shadow-soft">
                  <div className="grid grid-cols-8 grid-rows-6 gap-1 h-full">
                    {/* Simulated rooms */}
                    {Array.from({ length: 48 }).map((_, i) => {
                      const isHighlighted = [5, 12, 23, 34, 41].includes(i);
                      const isActive = [8, 19, 28, 37].includes(i);
                      return (
                        <div
                          key={i}
                          className={cn(
                            "rounded transition-colors",
                            isHighlighted
                              ? "bg-success/50"
                              : isActive
                              ? "bg-primary/30"
                              : "bg-gray-100"
                          )}
                        >
                          {isHighlighted && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-medium p-4 max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">Portable Ultrasound found</p>
                  <p className="text-xs text-muted">ICU - Room 405, 2nd shelf</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display-sm md:text-display-md text-primary mb-4">
                {t("headline")}
              </h2>
              <p className="text-lg text-muted">
                {t("description")}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted text-sm">
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
