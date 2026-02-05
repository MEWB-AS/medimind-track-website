"use client";

import { useTranslations } from "next-intl";
import { Sun, Router, MessageSquare, Leaf, Zap, Brain } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function TechDifferentiators() {
  const t = useTranslations("differentiators");

  const sections = [
    {
      icon: <Sun className="w-10 h-10" />,
      secondaryIcon: <Leaf className="w-5 h-5" />,
      headline: t("section1.headline"),
      description: t("section1.description"),
      highlight: t("section1.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="relative">
          {/* Tag visualization */}
          <div className="bg-white rounded-2xl shadow-large p-8">
            <div className="aspect-square max-w-xs mx-auto relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/10 rounded-full animate-pulse" />

              {/* Tag body */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-soft flex flex-col items-center justify-center">
                {/* Solar cell pattern */}
                <div className="grid grid-cols-3 gap-1 mb-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-br from-primary/40 to-primary/60 rounded"
                    />
                  ))}
                </div>

                {/* Label */}
                <div className="text-center">
                  <div className="text-xs text-muted mb-1">Asset Tag</div>
                  <div className="text-sm font-mono text-primary">MT-0042</div>
                </div>
              </div>

              {/* Energy indicator */}
              <div className="absolute -top-2 -right-2 bg-success text-white rounded-full p-2">
                <Zap className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Light rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
            <Sun className="w-12 h-12 text-yellow-400" />
          </div>
        </div>
      ),
    },
    {
      icon: <Router className="w-10 h-10" />,
      headline: t("section2.headline"),
      description: t("section2.description"),
      highlight: t("section2.highlight"),
      imagePosition: "left" as const,
      visual: (
        <div className="bg-white rounded-2xl shadow-large p-8">
          {/* Floor plan with gateway coverage */}
          <div className="relative aspect-video bg-mint-light rounded-xl p-4">
            {/* Building outline */}
            <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-lg" />

            {/* Gateways */}
            <div className="absolute top-8 left-8">
              <div className="w-4 h-4 bg-primary rounded-full" />
              <div className="absolute inset-0 w-32 h-32 -translate-x-14 -translate-y-14 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-0 w-48 h-48 -translate-x-22 -translate-y-22 border border-primary/10 rounded-full" />
            </div>

            <div className="absolute bottom-8 right-8">
              <div className="w-4 h-4 bg-primary rounded-full" />
              <div className="absolute inset-0 w-32 h-32 -translate-x-14 -translate-y-14 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-0 w-48 h-48 -translate-x-22 -translate-y-22 border border-primary/10 rounded-full" />
            </div>

            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-soft">
              <span className="text-xs text-muted">Coverage: </span>
              <span className="text-xs font-semibold text-primary">Full Floor</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      secondaryIcon: <Brain className="w-5 h-5" />,
      headline: t("section3.headline"),
      description: t("section3.description"),
      highlight: t("section3.highlight"),
      imagePosition: "right" as const,
      visual: (
        <div className="bg-white rounded-2xl shadow-large p-4">
          {/* Mobile app mockup */}
          <div className="bg-gray-900 rounded-3xl p-2 max-w-xs mx-auto">
            <div className="bg-mint-light rounded-2xl p-4">
              {/* App header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg" />
                <div className="h-3 w-20 bg-primary/20 rounded" />
              </div>

              {/* Chat interface */}
              <div className="space-y-3">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-xs rounded-2xl rounded-br-sm px-3 py-2 max-w-[80%]">
                    Where&apos;s the nearest IV pump?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-white text-primary text-xs rounded-2xl rounded-bl-sm px-3 py-2 max-w-[80%] shadow-soft">
                    <p className="mb-2">Found 3 available IV pumps nearby:</p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full" />
                        <span>Room 305 (12m)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full" />
                        <span>Supply Room B (18m)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="mt-4 bg-white rounded-full px-4 py-2 flex items-center space-x-2 shadow-soft">
                <div className="flex-1 h-3 bg-gray-100 rounded" />
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="space-y-24 lg:space-y-32">
          {sections.map((section, index) => (
            <div
              key={index}
              className={cn(
                "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                section.imagePosition === "left" && "lg:grid-flow-dense"
              )}
            >
              {/* Content */}
              <div
                className={cn(
                  section.imagePosition === "left" && "lg:col-start-2"
                )}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-2xl text-primary mb-6">
                  {section.icon}
                </div>

                <h3 className="text-display-sm md:text-display-md text-primary mb-4">
                  {section.headline}
                </h3>

                <p className="text-lg text-muted mb-6">
                  {section.description}
                </p>

                <Badge variant="outline" className="inline-flex items-center space-x-2">
                  {section.secondaryIcon}
                  <span>{section.highlight}</span>
                </Badge>
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
