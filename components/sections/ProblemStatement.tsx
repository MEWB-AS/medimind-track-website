"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Zap, Radio, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ProblemStatement() {
  const t = useTranslations("problem");
  const [transforms, setTransforms] = useState<Record<number, string>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransforms((prev) => ({
      ...prev,
      [index]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    }));
  };

  const handleMouseLeave = (index: number) => {
    setTransforms((prev) => ({
      ...prev,
      [index]: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    }));
  };

  const features = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: t("feature1.title"),
      description: t("feature1.description"),
    },
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: t("feature2.title"),
      description: t("feature2.description"),
    },
    {
      icon: <Radio className="w-5 h-5 text-primary" />,
      title: t("feature3.title"),
      description: t("feature3.description"),
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-primary" />,
      title: t("feature4.title"),
      description: t("feature4.description"),
    },
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* 4-column row with styled cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-[#EBF7F3] rounded-lg shadow-sm transition-transform duration-200 ease-out min-h-[280px]"
              style={{ transform: transforms[index] || "none" }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="flex items-center gap-2 mb-3">
                {feature.icon}
                <h3 className="text-sm font-medium text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-2xl text-[#0A1F17] leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
