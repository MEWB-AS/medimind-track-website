"use client";

import { useTranslations } from "next-intl";
import { Sun, Router, MessageSquare, Zap, Wifi, Battery } from "lucide-react";
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
        <div className="relative">
          {/* Main card - white background for contrast on mint */}
          <div className="bg-white rounded-3xl shadow-xl shadow-black/8 p-10 relative overflow-hidden">
            {/* Header row */}
            <div className="flex items-start justify-between mb-10">
              <div>
                <div className="text-xs font-semibold text-muted/70 uppercase tracking-widest mb-2">Smart Label</div>
                <div className="text-2xl font-mono text-[#0A1F17] font-bold tracking-tight">MT-0042</div>
              </div>
              {/* Energy status badge - white bg with border */}
              <div className="flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
                <div className="relative">
                  <Zap className="w-4 h-4" />
                  <div className="absolute inset-0 animate-ping opacity-75">
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <span className="text-sm font-semibold">Self-Powered</span>
              </div>
            </div>

            {/* Solar cell visualization - larger, more detailed */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8 border border-gray-100">
              {/* Solar panel grid with better detail */}
              <div className="grid grid-cols-6 gap-1.5 mb-4">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-[4/3] rounded-sm border",
                      "bg-gradient-to-br from-primary/40 via-primary/25 to-primary/15",
                      "border-primary/30"
                    )}
                    style={{
                      animationDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
              {/* Energy flow indicator */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
                </div>
                <Battery className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="text-center mt-4">
                <span className="text-sm text-primary font-semibold">Photovoltaic Energy Harvesting</span>
              </div>
            </div>

            {/* Status row */}
            <div className="flex items-center justify-between text-sm bg-gray-50 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-50" />
                </div>
                <span className="text-[#0A1F17] font-medium">Active</span>
              </div>
              <div className="text-muted">
                Battery: <span className="text-emerald-600 font-semibold">Forever</span>
              </div>
            </div>
          </div>

          {/* Ambient glow effects */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-2xl" />
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
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl shadow-black/8 p-8 relative overflow-hidden">
            {/* Floor plan visualization - larger and cleaner */}
            <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
              {/* Building outline with better detail */}
              <div className="absolute inset-6 border-2 border-gray-300 rounded-xl bg-white/50">
                {/* Rooms with labels */}
                <div className="absolute top-0 left-0 w-[35%] h-[45%] border-r-2 border-b-2 border-gray-200 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">ICU</span>
                </div>
                <div className="absolute top-0 right-0 w-[30%] h-[40%] border-l-2 border-b-2 border-gray-200 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">OR</span>
                </div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[35%] border-r-2 border-t-2 border-gray-200 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">Ward A</span>
                </div>
                <div className="absolute bottom-0 right-0 w-[35%] h-[40%] border-l-2 border-t-2 border-gray-200 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">Ward B</span>
                </div>
              </div>

              {/* Gateway 1 - top left */}
              <div className="absolute top-10 left-10">
                <div className="relative">
                  {/* Coverage rings */}
                  <div className="absolute -inset-8 border-2 border-primary/20 rounded-full" />
                  <div className="absolute -inset-16 border border-primary/10 rounded-full" />
                  <div className="absolute -inset-8 border-2 border-primary/30 rounded-full animate-ping opacity-50" style={{ animationDuration: '3s' }} />
                  {/* Gateway icon */}
                  <div className="w-6 h-6 bg-primary rounded-lg relative z-10 shadow-lg shadow-primary/30 flex items-center justify-center">
                    <Wifi className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Gateway 2 - bottom right */}
              <div className="absolute bottom-14 right-12">
                <div className="relative">
                  {/* Coverage rings */}
                  <div className="absolute -inset-8 border-2 border-primary/20 rounded-full" />
                  <div className="absolute -inset-16 border border-primary/10 rounded-full" />
                  <div className="absolute -inset-8 border-2 border-primary/30 rounded-full animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
                  {/* Gateway icon */}
                  <div className="w-6 h-6 bg-primary rounded-lg relative z-10 shadow-lg shadow-primary/30 flex items-center justify-center">
                    <Wifi className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Device dots with subtle pulse */}
              <div className="absolute top-14 right-20">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
              </div>
              <div className="absolute top-24 left-24">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
              </div>
              <div className="absolute bottom-20 left-28">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
              </div>
              <div className="absolute bottom-28 right-28">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
              </div>
              <div className="absolute top-[45%] left-[45%]">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm shadow-amber-500/50" />
              </div>
            </div>

            {/* Legend - improved styling */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
                    <Wifi className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-xs text-muted font-medium">Gateway (3-5 total)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                  <span className="text-xs text-muted font-medium">Assets</span>
                </div>
              </div>
              <div className="bg-white rounded-full px-4 py-1.5 border border-primary/20 shadow-sm">
                <span className="text-xs font-semibold text-primary">1-2 km Range</span>
              </div>
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
        <div className="relative flex justify-center">
          {/* Phone frame - more polished */}
          <div className="relative">
            {/* Phone outer shell with refined styling */}
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0A1F17] rounded-[2.75rem] p-3 shadow-2xl shadow-black/30">
              {/* Dynamic island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-gray-800 rounded-full" />
                <div className="w-3 h-3 bg-gray-800 rounded-full" />
              </div>

              {/* Screen with refined corners */}
              <div className="bg-white rounded-[2.25rem] w-[280px] h-[520px] overflow-hidden relative shadow-inner">
                {/* App header - cleaner design */}
                <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-primary via-primary to-emerald-600 rounded-2xl flex items-center justify-center shadow-md shadow-primary/20">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0A1F17]">MediMind Sense</div>
                      <div className="text-xs text-emerald-600 flex items-center gap-1.5 font-medium">
                        <div className="relative">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                          <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-50" />
                        </div>
                        AI Assistant
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat area - improved styling */}
                <div className="p-5 space-y-4 bg-gradient-to-b from-gray-50/80 to-gray-100/50 h-[340px]">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-white text-sm rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] shadow-md shadow-primary/20">
                      Where&apos;s the nearest IV pump?
                    </div>
                  </div>

                  {/* AI response - enhanced design */}
                  <div className="flex justify-start">
                    <div className="bg-white text-[#0A1F17] text-sm rounded-2xl rounded-bl-sm px-4 py-4 max-w-[92%] shadow-lg shadow-black/5 border border-gray-100">
                      <p className="font-semibold mb-3 text-[#0A1F17]">Found 3 available IV pumps:</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-emerald-50/50 rounded-xl px-4 py-2.5 border border-emerald-100">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
                            <span className="text-sm font-medium">Room 305</span>
                          </div>
                          <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">12m</span>
                        </div>
                        <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-emerald-50/50 rounded-xl px-4 py-2.5 border border-emerald-100">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
                            <span className="text-sm font-medium">Supply Room B</span>
                          </div>
                          <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">18m</span>
                        </div>
                        <div className="flex items-center justify-between bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-xl px-4 py-2.5 border border-amber-100">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm shadow-amber-500/50" />
                            <span className="text-sm font-medium">3rd Floor Storage</span>
                          </div>
                          <span className="text-xs text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded-full">45m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input area - refined */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-5 py-3">
                    <span className="text-sm text-gray-400 flex-1">Ask anything...</span>
                    <div className="w-9 h-9 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-primary/20">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient glow effects */}
            <div className="absolute -inset-6 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent rounded-[3.5rem] blur-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-2xl -z-10" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-28 bg-white">
      <Container>
        {/* Light green background box containing all content */}
        <div className="bg-[#EBF7F3] rounded-[2rem] p-8 md:p-12 lg:p-20">
          <div className="space-y-28 lg:space-y-36">
            {sections.map((section, index) => (
              <div
                key={index}
                className={cn(
                  "grid lg:grid-cols-2 gap-14 lg:gap-24 items-center",
                  section.imagePosition === "left" && "lg:grid-flow-dense"
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    section.imagePosition === "left" && "lg:col-start-2"
                  )}
                >
                  {/* Icon container - white with shadow for visibility */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-primary mb-8 bg-white shadow-lg shadow-black/5 border border-gray-100">
                    {section.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] text-[#0A1F17] mb-6 leading-tight font-medium">
                    {section.headline}
                  </h3>

                  <p className="text-base md:text-lg text-muted mb-10 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Highlight badge - darker green for visibility on mint background */}
                  <span className="inline-flex items-center text-sm text-primary px-5 py-2.5 rounded-full font-semibold bg-[#d4ede4]">
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
