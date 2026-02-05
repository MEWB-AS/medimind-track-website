"use client";

import { useTranslations } from "next-intl";
import { MapPin, Battery, Wifi, BarChart3, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SolutionOverview() {
  const t = useTranslations("solution");

  const features = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Battery className="w-5 h-5" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Dashboard Preview */}
          <div className="relative">
            <div className="bg-[#0A1F17] rounded-2xl overflow-hidden p-6">
              <div className="bg-[#0A1F17] rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Floor 3 - West Wing</div>
                      <div className="text-white/50 text-xs">24 devices active</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span className="text-emerald-400 text-xs font-medium">Live</span>
                  </div>
                </div>

                {/* Grid visualization */}
                <div className="grid grid-cols-8 grid-rows-5 gap-1.5">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-md transition-colors ${
                        [3, 12, 21, 30, 37].includes(i)
                          ? "bg-emerald-500/50 border border-emerald-500/70"
                          : [7, 15, 24, 33].includes(i)
                          ? "bg-primary/40 border border-primary/60"
                          : "bg-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0A1F17]">Ultrasound located</div>
                  <div className="text-xs text-muted">ICU Room 405</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF7F3] text-primary flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
