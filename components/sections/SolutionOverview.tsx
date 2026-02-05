"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Battery, MapPin, Wifi, BarChart3, ArrowRight, Zap, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function SolutionOverview() {
  const t = useTranslations("solution");
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "battery",
      title: t("feature2.title"),
      description: t("feature2.description"),
      visual: (
        <div className="relative h-full bg-[#0A1F17] rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-500/10" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Header stats */}
            <div className="mb-auto">
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Energy Status</div>
              <div className="text-emerald-400 text-4xl font-light mb-1">100%</div>
              <div className="text-white/60 text-sm">Powered by ambient light</div>
            </div>

            {/* Tag visualization */}
            <div className="flex justify-center my-8">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  {/* Solar cells grid */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-primary/40 to-primary/20 rounded border border-primary/30"
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-white/40 text-xs uppercase tracking-wider">Asset Tag</div>
                    <div className="text-white font-mono text-lg">MT-0042</div>
                  </div>
                </div>
                {/* Energy indicator */}
                <div className="absolute -top-3 -right-3 bg-emerald-500 rounded-full p-2 shadow-lg shadow-emerald-500/30">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom indicator */}
            <div className="mt-auto flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">No battery replacement needed</span>
              </div>
              <span className="text-emerald-400 text-sm font-medium">Forever</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "location",
      title: t("feature1.title"),
      description: t("feature1.description"),
      visual: (
        <div className="relative h-full bg-[#0A1F17] rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-primary/10" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Floor 3 - West Wing</div>
                <div className="text-white text-2xl font-light">24 devices</div>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-medium">Live</span>
              </div>
            </div>

            {/* Floor plan grid */}
            <div className="flex-1 relative bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="grid grid-cols-8 grid-rows-6 gap-1 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "rounded transition-colors",
                      [5, 14, 23, 32, 41].includes(i)
                        ? "bg-emerald-500/60 border border-emerald-400/50"
                        : [8, 19, 28, 37].includes(i)
                        ? "bg-primary/50 border border-primary/40"
                        : "bg-white/5"
                    )}
                  />
                ))}
              </div>

              {/* Device tooltip */}
              <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg px-3 py-2">
                <div className="text-xs font-medium text-[#0A1F17]">IV Pump #12</div>
                <div className="text-xs text-muted">Room 305</div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500/60 rounded" />
                <span className="text-white/50 text-xs">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary/50 rounded" />
                <span className="text-white/50 text-xs">In use</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "infrastructure",
      title: t("feature3.title"),
      description: t("feature3.description"),
      visual: (
        <div className="relative h-full bg-[#0A1F17] rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-emerald-500/10" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Header comparison */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Traditional RTLS</div>
                <div className="text-red-400 text-3xl font-light">20+</div>
                <div className="text-white/50 text-sm">access points/floor</div>
              </div>
              <div className="bg-primary/20 rounded-xl p-4 border border-primary/30">
                <div className="text-primary/60 text-xs uppercase tracking-wider mb-2">MediMind Sense</div>
                <div className="text-emerald-400 text-3xl font-light">1-2</div>
                <div className="text-white/50 text-sm">gateways/floor</div>
              </div>
            </div>

            {/* Floor visualization */}
            <div className="flex-1 relative bg-white/5 rounded-xl p-6 border border-white/10">
              {/* Building outline */}
              <div className="absolute inset-6 border-2 border-dashed border-white/20 rounded-lg" />

              {/* Gateway 1 */}
              <div className="absolute top-10 left-10">
                <div className="relative">
                  <div className="absolute -inset-8 border-2 border-primary/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-16 border border-primary/15 rounded-full" />
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <Wifi className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Gateway 2 */}
              <div className="absolute bottom-12 right-12">
                <div className="relative">
                  <div className="absolute -inset-8 border-2 border-primary/30 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                  <div className="absolute -inset-16 border border-primary/15 rounded-full" />
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <Wifi className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Coverage label */}
              <div className="absolute bottom-4 left-4 bg-emerald-500/20 rounded-full px-3 py-1.5">
                <span className="text-emerald-400 text-xs font-medium">Full Coverage</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "utilization",
      title: t("feature4.title"),
      description: t("feature4.description"),
      visual: (
        <div className="relative h-full bg-[#0A1F17] rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-primary/10" />

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <div className="text-white/50 text-xs uppercase tracking-wider mb-1">Utilization Report</div>
              <div className="text-white text-2xl font-light">This Week</div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-emerald-400 text-2xl font-light mb-1">78%</div>
                <div className="text-white/50 text-xs">Avg. Utilization</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-amber-400 text-2xl font-light mb-1">12</div>
                <div className="text-white/50 text-xs">Underutilized</div>
              </div>
            </div>

            {/* Bar chart visualization */}
            <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-end justify-around h-full gap-2 pb-4">
                {[65, 82, 45, 90, 72, 58, 88].map((value, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={cn(
                        "w-full rounded-t transition-all",
                        value > 70 ? "bg-emerald-500/60" : value > 50 ? "bg-primary/50" : "bg-amber-500/50"
                      )}
                      style={{ height: `${value}%` }}
                    />
                    <span className="text-white/30 text-xs">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insight */}
            <div className="mt-4 flex items-center gap-3 bg-amber-500/10 rounded-xl px-4 py-3 border border-amber-500/20">
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="text-white text-sm">Hoarding detected</div>
                <div className="text-white/50 text-xs">3 pumps idle in 2N storage</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const activeFeature = features[activeTab];

  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* Top: Horizontal Tab List */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-100 pb-4">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-5 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
                activeTab === index
                  ? "bg-[#EBF7F3] text-primary"
                  : "text-muted hover:text-[#0A1F17] hover:bg-gray-50"
              )}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Content: Text Left, Visual Right */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left: Description */}
          <div className="lg:pt-4">
            <h3 className="text-xl font-medium text-[#0A1F17] mb-4">
              {activeFeature.title}
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              {activeFeature.description}
            </p>
            <button className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Visual - fixed height container */}
          <div className="h-[450px] transition-all duration-300">
            {activeFeature.visual}
          </div>
        </div>
      </Container>
    </section>
  );
}
