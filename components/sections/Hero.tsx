"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/30 via-white to-white" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge variant="outline" className="animate-fade-in text-xs font-medium">
              {t("badge")}
            </Badge>

            <h1 className="text-display-lg md:text-display-xl text-primary animate-fade-in-up text-balance">
              {t("headline")}
            </h1>

            <p className="text-body-lg text-muted max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t("subheadline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="primary" size="md">
                {t("cta")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="ghost" size="md">
                <Play className="mr-2 w-4 h-4" />
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>

          {/* Video/Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-xl overflow-hidden shadow-large bg-gray-900">
              {/* Video container - replace src with actual video */}
              <div className="aspect-video relative">
                {/* Placeholder for video - shows dashboard mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  {/* Dashboard preview overlay */}
                  <div className="w-[90%] h-[85%] bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
                    {/* Mini dashboard UI */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-white/20" />
                        <div className="h-2 w-20 bg-white/20 rounded" />
                      </div>
                      <div className="flex space-x-2">
                        <div className="h-6 w-16 bg-white/10 rounded text-[10px] text-white/60 flex items-center justify-center">Live</div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["247", "3", "98%", "12"].map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded p-2 text-center">
                          <div className="text-white text-sm font-medium">{stat}</div>
                          <div className="text-white/40 text-[9px]">
                            {["Devices", "Floors", "Online", "Alerts"][i]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Floor map */}
                    <div className="flex-1 bg-white/5 rounded p-3">
                      <div className="grid grid-cols-8 grid-rows-4 gap-1 h-full">
                        {Array.from({ length: 32 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-sm ${
                              [5, 12, 19, 26].includes(i)
                                ? "bg-emerald-400/60"
                                : [8, 15, 22].includes(i)
                                ? "bg-primary-400/40"
                                : "bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating notification - cleaner */}
            <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-medium px-4 py-3 flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <div>
                <div className="text-xs font-medium text-primary">IV Pump located</div>
                <div className="text-[11px] text-muted">Room 312, 3rd Floor</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
