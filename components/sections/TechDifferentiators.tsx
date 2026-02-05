"use client";

import { useTranslations } from "next-intl";
import { Sun, Router, MessageSquare, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function TechDifferentiators() {
  const t = useTranslations("differentiators");

  const sections = [
    {
      icon: <Sun className="w-6 h-6" />,
      headline: t("section1.headline"),
      description: t("section1.description"),
      highlight: t("section1.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="bg-[#EBF7F3] rounded-2xl p-8">
          <div className="aspect-square max-w-[220px] mx-auto relative">
            {/* Tag body */}
            <div className="absolute inset-0 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center">
              {/* Solar cell pattern */}
              <div className="grid grid-cols-3 gap-1 mb-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-primary/20 rounded"
                  />
                ))}
              </div>
              <div className="text-center">
                <div className="text-xs text-muted mb-1">Asset Tag</div>
                <div className="text-sm font-mono text-primary font-medium">MT-0042</div>
              </div>
            </div>
            {/* Energy indicator */}
            <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-2 shadow-md">
              <Zap className="w-4 h-4" />
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Router className="w-6 h-6" />,
      headline: t("section2.headline"),
      description: t("section2.description"),
      highlight: t("section2.highlight"),
      imagePosition: "left" as const,
      visual: (
        <div className="bg-[#EBF7F3] rounded-2xl p-8">
          <div className="relative aspect-video bg-white rounded-xl shadow-sm p-6">
            {/* Building outline */}
            <div className="absolute inset-6 border-2 border-dashed border-gray-200 rounded-lg" />

            {/* Gateways with coverage circles */}
            <div className="absolute top-8 left-8">
              <div className="w-3 h-3 bg-primary rounded-full relative z-10 shadow-sm" />
              <div className="absolute -inset-8 border-2 border-primary/20 rounded-full" />
              <div className="absolute -inset-14 border border-primary/10 rounded-full" />
            </div>

            <div className="absolute bottom-8 right-8">
              <div className="w-3 h-3 bg-primary rounded-full relative z-10 shadow-sm" />
              <div className="absolute -inset-8 border-2 border-primary/20 rounded-full" />
              <div className="absolute -inset-14 border border-primary/10 rounded-full" />
            </div>

            {/* Label */}
            <div className="absolute bottom-3 left-3 bg-[#EBF7F3] rounded-lg px-3 py-1.5">
              <span className="text-xs text-muted">Coverage: </span>
              <span className="text-xs font-medium text-primary">Full Floor</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      headline: t("section3.headline"),
      description: t("section3.description"),
      highlight: t("section3.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="bg-[#EBF7F3] rounded-2xl p-8">
          {/* Mobile app mockup */}
          <div className="bg-[#0A1F17] rounded-3xl p-2 max-w-[240px] mx-auto shadow-lg">
            <div className="bg-white rounded-2xl p-4">
              {/* App header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg" />
                <div className="h-2 w-16 bg-gray-200 rounded-full" />
              </div>

              {/* Chat interface */}
              <div className="space-y-3">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-xs rounded-xl rounded-br-sm px-3 py-2 max-w-[85%]">
                    Where&apos;s the nearest IV pump?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-[#EBF7F3] text-[#0A1F17] text-xs rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]">
                    <p className="mb-2 font-medium">Found 3 available IV pumps:</p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Room 305 (12m)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>Supply Room B (18m)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="mt-4 bg-gray-100 rounded-full px-4 py-2 flex items-center">
                <div className="flex-1 h-2 bg-gray-200 rounded-full" />
                <div className="w-5 h-5 bg-primary rounded-full ml-3" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Light green background box containing all content */}
        <div className="bg-[#EBF7F3] rounded-2xl p-10 md:p-16">
          <div className="space-y-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className={cn(
                "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                section.imagePosition === "left" && "lg:grid-flow-dense"
              )}
            >
              {/* Content */}
              <div
                className={cn(
                  section.imagePosition === "left" && "lg:col-start-2"
                )}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EBF7F3] rounded-xl text-primary mb-6">
                  {section.icon}
                </div>

                <h3 className="text-2xl md:text-3xl text-[#0A1F17] mb-4">
                  {section.headline}
                </h3>

                <p className="text-base text-muted mb-6 leading-relaxed">
                  {section.description}
                </p>

                <span className="inline-block text-sm text-primary bg-[#EBF7F3] px-4 py-2 rounded-full font-medium">
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
        </div>
      </Container>
    </section>
  );
}
