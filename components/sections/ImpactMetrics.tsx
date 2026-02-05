"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Search, Clock, Calendar, TrendingDown } from "lucide-react";

export function ImpactMetrics() {
  const t = useTranslations("impact");
  const sectionRef = useRef<HTMLElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGradientPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setGradientPosition({ x: 50, y: 50 });
  };

  const metrics = [
    {
      icon: <Search className="w-6 h-6" />,
      value: t("stat1.value"),
      label: t("stat1.label"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: t("stat2.value"),
      label: t("stat2.label"),
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: t("stat3.value"),
      label: t("stat3.label"),
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      value: t("stat4.value"),
      label: t("stat4.label"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 md:py-40 bg-[#0A1F17] relative overflow-hidden"
    >
      {/* Interactive gradient background */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 90% 70% at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(27, 77, 62, 0.6) 0%, transparent 60%)`
        }}
      />

      {/* Static gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F17] via-[#0A1F17] to-[#1B4D3E]/20 pointer-events-none" />

      {/* Ambient glow effects */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-[#1B4D3E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#1B4D3E]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-20 pointer-events-none">
          {/* Section Header - Centered */}
          <h2 className="text-display-lg md:text-display-xl text-white mb-6 max-w-4xl">
            {t("headline")}
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Metrics Grid - Consistent card layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 md:p-10 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white/60 mb-6">
                {metric.icon}
              </div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-light text-white mb-3">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-white/50 text-sm md:text-base mt-auto">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Source attribution - builds trust */}
        <div className="mt-16 flex flex-col items-center text-center pointer-events-none">
          <p className="text-white/40 text-sm max-w-xl leading-relaxed">
            {t("source")}
          </p>
        </div>
      </Container>
    </section>
  );
}
