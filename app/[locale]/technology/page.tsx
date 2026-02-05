"use client";

import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import {
  Cpu,
  Radio,
  Zap,
  Shield,
  Leaf,
  ArrowRight,
  Wifi,
  Battery,
  Sun,
  Server,
  Check,
  Thermometer,
  Activity,
  Globe,
  Lock,
  Clock,
  Gauge,
  Building2,
  CircuitBoard,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function TechnologyHero() {
  const t = useTranslations("technology");

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF7F3] rounded-full mb-8">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-display-lg md:text-display-xl text-[#0A1F17] mb-6">
            {t("hero.headline")}
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            {t("hero.subheadline")}
          </p>
        </div>
      </Container>
    </section>
  );
}

function CoreTechPillars() {
  const t = useTranslations("technology");

  const pillars = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: t("pillars.energy.title"),
      description: t("pillars.energy.description"),
      highlights: [
        t("pillars.energy.highlight1"),
        t("pillars.energy.highlight2"),
        t("pillars.energy.highlight3"),
        t("pillars.energy.highlight4"),
        t("pillars.energy.highlight5"),
      ],
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: t("pillars.range.title"),
      description: t("pillars.range.description"),
      highlights: [
        t("pillars.range.highlight1"),
        t("pillars.range.highlight2"),
        t("pillars.range.highlight3"),
        t("pillars.range.highlight4"),
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("pillars.hybrid.title"),
      description: t("pillars.hybrid.description"),
      highlights: [
        t("pillars.hybrid.highlight1"),
        t("pillars.hybrid.highlight2"),
        t("pillars.hybrid.highlight3"),
        t("pillars.hybrid.highlight4"),
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-[#FAFAFA] rounded-2xl p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#0A1F17]">
                    <span className="text-muted mt-1">•</span>
                    {highlight}
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

function ComparisonTable() {
  const t = useTranslations("technology");

  const features = [
    { key: "precision", pal: "1-3m", rfid: "3-5m", ble: "1-3m", uwb: "0.1-0.5m", wifi: "3-5m" },
    { key: "coverage", pal: "1-2 km", rfid: "100m", ble: "20-50m", uwb: "20-50m", wifi: "50-100m" },
    { key: "energy", pal: t("comparison.unlimited"), rfid: "3-5 yrs", ble: "2-5 yrs", uwb: "1 yr", wifi: "—" },
    { key: "gateways", pal: "3-5", rfid: "20-40", ble: "50-100", uwb: "100-200", wifi: "20-30" },
    { key: "facility", pal: "2-4", rfid: "80-120", ble: "60-90", uwb: "90-110", wifi: "20-25" },
    { key: "installation", pal: "2-4 wks", rfid: "2-3 mo", ble: "4-8 wks", uwb: "3-6 mo", wifi: "1-3 mo" },
    { key: "payback", pal: "12-18 mo*", rfid: "18-36 mo", ble: "24-48 mo", uwb: "36+ mo", wifi: "18-36 mo" },
  ];

  const featureLabels: Record<string, string> = {
    precision: t("comparison.features.precision"),
    coverage: t("comparison.features.coverage"),
    energy: t("comparison.features.energy"),
    gateways: t("comparison.features.gateways"),
    facility: t("comparison.features.facility"),
    installation: t("comparison.features.installation"),
    payback: t("comparison.features.payback"),
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("comparison.headline")}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">
                  {t("comparison.feature")}
                </th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-primary bg-primary/5 rounded-t-lg">
                  MediMind Sense
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">RFID</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">BLE</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">UWB</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted">Wi-Fi</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm text-[#0A1F17]">
                    {featureLabels[feature.key]}
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-primary bg-primary/5">
                    {feature.pal}
                  </td>
                  <td className="py-4 px-4 text-sm text-muted">{feature.rfid}</td>
                  <td className="py-4 px-4 text-sm text-muted">{feature.ble}</td>
                  <td className="py-4 px-4 text-sm text-muted">{feature.uwb}</td>
                  <td className="py-4 px-4 text-sm text-muted">{feature.wifi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted text-center mt-6">
          {t("comparison.disclaimer")}
        </p>
      </Container>
    </section>
  );
}

function SmartLabels() {
  const t = useTranslations("technology");

  const specs = [
    { label: t("specs.label.dimensions"), value: t("specs.label.dimensionsValue") },
    { label: t("specs.label.power"), value: t("specs.label.powerValue") },
    { label: t("specs.label.sensors"), value: t("specs.label.sensorsValue") },
    { label: t("specs.label.communication"), value: t("specs.label.communicationValue") },
    { label: t("specs.label.gnss"), value: t("specs.label.gnssValue") },
    { label: t("specs.label.durability"), value: t("specs.label.durabilityValue") },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="bg-[#FAFAFA] rounded-3xl p-8 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/smart-label.png"
                  alt="Smart Label on medical equipment"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold mb-6">
              01
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
              {t("specs.label.title")}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {t("specs.label.description")}
            </p>

            <div className="space-y-3">
              {specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0A1F17] font-medium">{spec.label}:</span>{" "}
                    <span className="text-muted">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function GatewaySection() {
  const t = useTranslations("technology");

  const specs = [
    { label: t("specs.gateway.range"), value: t("specs.gateway.rangeValue") },
    { label: t("specs.gateway.capacity"), value: t("specs.gateway.capacityValue") },
    { label: t("specs.gateway.connectivity"), value: t("specs.gateway.connectivityValue") },
    { label: t("specs.gateway.edge"), value: t("specs.gateway.edgeValue") },
    { label: t("specs.gateway.sync"), value: t("specs.gateway.syncValue") },
    { label: t("specs.gateway.power"), value: t("specs.gateway.powerValue") },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold mb-6">
              02
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
              {t("specs.gateway.title")}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {t("specs.gateway.description")}
            </p>

            <div className="space-y-3">
              {specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0A1F17] font-medium">{spec.label}:</span>{" "}
                    <span className="text-muted">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src="/gaetway.png"
                  alt="Long-range gateway hardware"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CloudPlatform() {
  const t = useTranslations("technology");

  const features = [
    { icon: <Server className="w-5 h-5" />, label: t("specs.cloud.architecture"), value: t("specs.cloud.architectureValue") },
    { icon: <CircuitBoard className="w-5 h-5" />, label: t("specs.cloud.storage"), value: t("specs.cloud.storageValue") },
    { icon: <Activity className="w-5 h-5" />, label: t("specs.cloud.aiml"), value: t("specs.cloud.aimlValue") },
    { icon: <Clock className="w-5 h-5" />, label: t("specs.cloud.audit"), value: t("specs.cloud.auditValue") },
    { icon: <Globe className="w-5 h-5" />, label: t("specs.cloud.api"), value: t("specs.cloud.apiValue") },
    { icon: <Lock className="w-5 h-5" />, label: t("specs.cloud.security"), value: t("specs.cloud.securityValue") },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-semibold mb-6">
              03
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
              {t("specs.cloud.title")}
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              {t("specs.cloud.description")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-[#FAFAFA] rounded-2xl p-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-[#0A1F17] mb-2">{feature.label}</h3>
                <p className="text-sm text-muted">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DetailedSpecs() {
  const t = useTranslations("technology");

  const labelSpecs = [
    { label: t("detailedSpecs.label.dimensions"), value: t("detailedSpecs.label.dimensionsValue") },
    { label: t("detailedSpecs.label.power"), value: t("detailedSpecs.label.powerValue") },
    { label: t("detailedSpecs.label.sensors"), value: t("detailedSpecs.label.sensorsValue") },
    { label: t("detailedSpecs.label.communication"), value: t("detailedSpecs.label.communicationValue") },
    { label: t("detailedSpecs.label.gnss"), value: t("detailedSpecs.label.gnssValue") },
    { label: t("detailedSpecs.label.durability"), value: t("detailedSpecs.label.durabilityValue") },
  ];

  const gatewaySpecs = [
    { label: t("detailedSpecs.gateway.range"), value: t("detailedSpecs.gateway.rangeValue") },
    { label: t("detailedSpecs.gateway.capacity"), value: t("detailedSpecs.gateway.capacityValue") },
    { label: t("detailedSpecs.gateway.connectivity"), value: t("detailedSpecs.gateway.connectivityValue") },
    { label: t("detailedSpecs.gateway.edge"), value: t("detailedSpecs.gateway.edgeValue") },
    { label: t("detailedSpecs.gateway.sync"), value: t("detailedSpecs.gateway.syncValue") },
    { label: t("detailedSpecs.gateway.power"), value: t("detailedSpecs.gateway.powerValue") },
  ];

  const cloudSpecs = [
    { label: t("detailedSpecs.cloud.architecture"), value: t("detailedSpecs.cloud.architectureValue") },
    { label: t("detailedSpecs.cloud.storage"), value: t("detailedSpecs.cloud.storageValue") },
    { label: t("detailedSpecs.cloud.aiml"), value: t("detailedSpecs.cloud.aimlValue") },
    { label: t("detailedSpecs.cloud.audit"), value: t("detailedSpecs.cloud.auditValue") },
    { label: t("detailedSpecs.cloud.api"), value: t("detailedSpecs.cloud.apiValue") },
    { label: t("detailedSpecs.cloud.security"), value: t("detailedSpecs.cloud.securityValue") },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
            {t("detailedSpecs.headline")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* PAL Label */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-6 pb-4 border-b border-gray-100">
              {t("detailedSpecs.label.title")}
            </h3>
            <div className="space-y-4">
              {labelSpecs.map((spec, i) => (
                <div key={i}>
                  <div className="text-sm font-medium text-[#0A1F17]">{spec.label}</div>
                  <div className="text-sm text-muted">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gateway */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-6 pb-4 border-b border-gray-100">
              {t("detailedSpecs.gateway.title")}
            </h3>
            <div className="space-y-4">
              {gatewaySpecs.map((spec, i) => (
                <div key={i}>
                  <div className="text-sm font-medium text-[#0A1F17]">{spec.label}</div>
                  <div className="text-sm text-muted">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Platform */}
          <div className="bg-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-primary mb-6 pb-4 border-b border-gray-100">
              {t("detailedSpecs.cloud.title")}
            </h3>
            <div className="space-y-4">
              {cloudSpecs.map((spec, i) => (
                <div key={i}>
                  <div className="text-sm font-medium text-[#0A1F17]">{spec.label}</div>
                  <div className="text-sm text-muted">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Security() {
  const t = useTranslations("technology");

  const securityItems = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("security.item1.title"),
      desc: t("security.item1.desc"),
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t("security.item2.title"),
      desc: t("security.item2.desc"),
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: t("security.item3.title"),
      desc: t("security.item3.desc"),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF7F3] rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("security.badge")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0A1F17] mb-4">
              {t("security.headline")}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t("security.description")}
            </p>
          </div>

          {/* Security items */}
          <div className="grid md:grid-cols-3 gap-6">
            {securityItems.map((item, i) => (
              <div key={i} className="p-6 bg-[#FAFAFA] rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-medium text-[#0A1F17] mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["HIPAA", "SOC 2", "GDPR", "ISO 27001"].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm"
              >
                <span className="text-sm font-medium text-[#0A1F17]">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TechnologyCTA() {
  const t = useTranslations("technology");

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

export default function TechnologyPage() {
  return (
    <>
      <Navigation />
      <main>
        <TechnologyHero />
        <CoreTechPillars />
        <ComparisonTable />
        <SmartLabels />
        <GatewaySection />
        <CloudPlatform />
        <DetailedSpecs />
        <Security />
        <TechnologyCTA />
      </main>
      <Footer />
    </>
  );
}
