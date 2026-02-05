"use client";

import { useTranslations } from "next-intl";
import { Sun, Router, MessageSquare, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function TechDifferentiators() {
  const t = useTranslations("differentiators");

  const sections = [
    {
      icon: <Sun className="w-5 h-5" />,
      headline: t("section1.headline"),
      description: t("section1.description"),
      highlight: t("section1.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="aspect-square max-w-[200px] mx-auto relative">
            {/* Tag body */}
            <div className="absolute inset-0 bg-white rounded-lg border border-gray-200 flex flex-col items-center justify-center">
              {/* Solar cell pattern */}
              <div className="grid grid-cols-3 gap-0.5 mb-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-primary/30 rounded-sm"
                  />
                ))}
              </div>
              <div className="text-center">
                <div className="text-[10px] text-muted mb-0.5">Asset Tag</div>
                <div className="text-xs font-mono text-primary">MT-0042</div>
              </div>
            </div>
            {/* Energy indicator */}
            <div className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full p-1.5">
              <Zap className="w-3 h-3" />
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Router className="w-5 h-5" />,
      headline: t("section2.headline"),
      description: t("section2.description"),
      highlight: t("section2.highlight"),
      imagePosition: "left" as const,
      visual: (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="relative aspect-video bg-white rounded-lg border border-gray-200 p-4">
            {/* Building outline */}
            <div className="absolute inset-4 border border-dashed border-gray-300 rounded" />

            {/* Gateways with coverage circles */}
            <div className="absolute top-6 left-6">
              <div className="w-2.5 h-2.5 bg-primary rounded-full relative z-10" />
              <div className="absolute -inset-6 border border-primary/20 rounded-full" />
              <div className="absolute -inset-10 border border-primary/10 rounded-full" />
            </div>

            <div className="absolute bottom-6 right-6">
              <div className="w-2.5 h-2.5 bg-primary rounded-full relative z-10" />
              <div className="absolute -inset-6 border border-primary/20 rounded-full" />
              <div className="absolute -inset-10 border border-primary/10 rounded-full" />
            </div>

            {/* Label */}
            <div className="absolute bottom-2 left-2 bg-gray-50 rounded px-2 py-1">
              <span className="text-[10px] text-muted">Coverage: </span>
              <span className="text-[10px] font-medium text-primary">Full Floor</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      headline: t("section3.headline"),
      description: t("section3.description"),
      highlight: t("section3.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="bg-gray-50 rounded-lg p-6">
          {/* Mobile app mockup */}
          <div className="bg-gray-900 rounded-2xl p-1.5 max-w-[220px] mx-auto">
            <div className="bg-white rounded-xl p-3">
              {/* App header */}
              <div className="flex items-center justify-between mb-3">
                <div className="w-6 h-6 bg-primary rounded" />
                <div className="h-2 w-14 bg-gray-200 rounded" />
              </div>

              {/* Chat interface */}
              <div className="space-y-2">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-[10px] rounded-lg rounded-br-sm px-2.5 py-1.5 max-w-[85%]">
                    Where&apos;s the nearest IV pump?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-700 text-[10px] rounded-lg rounded-bl-sm px-2.5 py-1.5 max-w-[85%]">
                    <p className="mb-1.5">Found 3 available IV pumps:</p>
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span>Room 305 (12m)</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span>Supply Room B (18m)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="mt-3 bg-gray-100 rounded-full px-3 py-1.5 flex items-center">
                <div className="flex-1 h-2 bg-gray-200 rounded" />
                <div className="w-4 h-4 bg-primary rounded-full ml-2" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="space-y-16 lg:space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={cn(
                "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                section.imagePosition === "left" && "lg:grid-flow-dense"
              )}
            >
              {/* Content */}
              <div
                className={cn(
                  section.imagePosition === "left" && "lg:col-start-2"
                )}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg text-primary mb-4">
                  {section.icon}
                </div>

                <h3 className="text-xl md:text-2xl text-primary mb-3">
                  {section.headline}
                </h3>

                <p className="text-sm text-muted mb-4">
                  {section.description}
                </p>

                <span className="inline-block text-xs text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                  {section.highlight}
                </span>
              </div>

              {/* Visual */}
              <div
                className={cn(
                  section.imagePosition === "left" && "lg:col-start-1"
                )}
              >
                {section.visual}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
