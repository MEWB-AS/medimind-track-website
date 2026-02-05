"use client";

import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import {
  MapPin,
  Battery,
  BarChart3,
  Search,
  Smartphone,
  Monitor,
  ArrowRight,
  Check,
  Zap,
  Wifi,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PlatformHero() {
  const t = useTranslations("platform");

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF7F3] rounded-full mb-8">
            <Monitor className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-display-lg md:text-display-xl text-[#0A1F17] mb-6">
            {t("hero.headline")}
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            {t("hero.subheadline")}
          </p>

          <Button variant="primary" size="lg">
            {t("hero.cta")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

function DashboardShowcase() {
  const t = useTranslations("platform");

  return (
    <section className="py-24 bg-[#0A1F17]">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Dashboard mockup */}
          <div className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-2 shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/10 rounded-lg px-4 py-1.5 text-white/40 text-sm max-w-md">
                  app.medimindsense.com/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid lg:grid-cols-4 gap-4 mb-6">
                {/* Stats cards */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    Total Assets
                  </div>
                  <div className="text-white text-3xl font-light">847</div>
                  <div className="text-emerald-400 text-sm mt-1">
                    All tracked
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    Available Now
                  </div>
                  <div className="text-emerald-400 text-3xl font-light">312</div>
                  <div className="text-white/50 text-sm mt-1">Ready to use</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    In Use
                  </div>
                  <div className="text-primary text-3xl font-light">489</div>
                  <div className="text-white/50 text-sm mt-1">Active</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                    Utilization
                  </div>
                  <div className="text-white text-3xl font-light">78%</div>
                  <div className="text-emerald-400 text-sm mt-1">+5% this week</div>
                </div>
              </div>

              {/* Floor plan visualization */}
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-medium">
                      Floor 3 - West Wing
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-emerald-400 text-xs">Live</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-8 grid-rows-6 gap-1 h-48">
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
                </div>

                {/* Recent activity */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-white font-medium mb-4">
                    Recent Activity
                  </div>
                  <div className="space-y-3">
                    {[
                      { device: "IV Pump #42", action: "moved to", location: "Room 305" },
                      { device: "Wheelchair #18", action: "returned to", location: "Storage A" },
                      { device: "Monitor #7", action: "assigned to", location: "ICU-3" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                        <div>
                          <span className="text-white">{item.device}</span>
                          <span className="text-white/50"> {item.action} </span>
                          <span className="text-primary">{item.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-white/50 text-sm mt-6">
            {t("dashboard.caption")}
          </p>
        </div>
      </Container>
    </section>
  );
}

function CoreFeatures() {
  const t = useTranslations("platform");

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("features.location.title"),
      description: t("features.location.description"),
      highlights: [
        t("features.location.highlight1"),
        t("features.location.highlight2"),
        t("features.location.highlight3"),
      ],
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: t("features.battery.title"),
      description: t("features.battery.description"),
      highlights: [
        t("features.battery.highlight1"),
        t("features.battery.highlight2"),
        t("features.battery.highlight3"),
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      highlights: [
        t("features.analytics.highlight1"),
        t("features.analytics.highlight2"),
        t("features.analytics.highlight3"),
      ],
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: t("features.search.title"),
      description: t("features.search.description"),
      highlights: [
        t("features.search.highlight1"),
        t("features.search.highlight2"),
        t("features.search.highlight3"),
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("features.headline")}
          </h2>
          <p className="text-lg text-muted">
            {t("features.description")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-[#EBF7F3] rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-[#0A1F17] mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#0A1F17]">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MobileApp() {
  const t = useTranslations("platform");

  return (
    <section className="py-24 bg-[#EBF7F3]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("mobile.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-6">
              {t("mobile.headline")}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {t("mobile.description")}
            </p>

            <div className="space-y-4">
              {[
                { icon: <MessageSquare className="w-5 h-5" />, text: t("mobile.feature1") },
                { icon: <MapPin className="w-5 h-5" />, text: t("mobile.feature2") },
                { icon: <Zap className="w-5 h-5" />, text: t("mobile.feature3") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[#0A1F17]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-72 bg-[#0A1F17] rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#0A1F17] px-6 py-3 flex items-center justify-between">
                    <span className="text-white text-sm">9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4 text-white" />
                      <Battery className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* App content */}
                  <div className="p-4 h-[500px] bg-gray-50">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs text-muted">Good morning</div>
                        <div className="text-lg font-medium text-[#0A1F17]">
                          Find Equipment
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-[#EBF7F3] rounded-full" />
                    </div>

                    {/* Search bar */}
                    <div className="bg-white rounded-xl px-4 py-3 shadow-sm mb-4 flex items-center gap-3">
                      <Search className="w-5 h-5 text-muted" />
                      <span className="text-muted text-sm">
                        &ldquo;Find IV pumps on floor 3&rdquo;
                      </span>
                    </div>

                    {/* AI response */}
                    <div className="bg-primary/10 rounded-xl p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-[#0A1F17] font-medium mb-1">
                            Found 4 available
                          </div>
                          <div className="text-xs text-muted">
                            Nearest: Room 312 (2 min walk)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-2">
                      {[
                        { room: "312", status: "Available", time: "2 min" },
                        { room: "318", status: "Available", time: "3 min" },
                        { room: "305", status: "Available", time: "4 min" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center justify-between"
                        >
                          <div>
                            <div className="text-sm font-medium text-[#0A1F17]">
                              Room {item.room}
                            </div>
                            <div className="text-xs text-emerald-600">
                              {item.status}
                            </div>
                          </div>
                          <div className="text-xs text-muted">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Integration() {
  const t = useTranslations("platform");

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-6">
            {t("integration.headline")}
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            {t("integration.description")}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: t("integration.item1.title"), desc: t("integration.item1.desc") },
              { title: t("integration.item2.title"), desc: t("integration.item2.desc") },
              { title: t("integration.item3.title"), desc: t("integration.item3.desc") },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-[#EBF7F3] rounded-2xl">
                <h3 className="font-medium text-[#0A1F17] mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlatformCTA() {
  const t = useTranslations("platform");

  return (
    <section className="py-24 bg-[#0A1F17]">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            {t("cta.headline")}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            {t("cta.description")}
          </p>
          <Button variant="primary" size="lg">
            {t("cta.button")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      <Navigation />
      <main>
        <PlatformHero />
        <DashboardShowcase />
        <CoreFeatures />
        <MobileApp />
        <Integration />
        <PlatformCTA />
      </main>
      <Footer />
    </>
  );
}
