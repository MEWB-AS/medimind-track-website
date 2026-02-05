"use client";

import { Navigation, Footer } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

function AboutHero() {
  const t = useTranslations("about");

  return (
    <section className="pt-32 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EBF7F3] rounded-full mb-8">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Doctor-Founded Company</span>
          </div>

          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mx-auto">
            {t("hero.subheadline")}
          </p>
        </div>
      </Container>
    </section>
  );
}

function AboutMediMind() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <h2 className="text-2xl md:text-3xl text-[#0A1F17] mb-6">
              {t("medimind.headline")}
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>{t("medimind.paragraph1")}</p>
              <p>{t("medimind.paragraph2")}</p>
              <p>{t("medimind.paragraph3")}</p>
            </div>
          </div>

          {/* Right: Visual element */}
          <div className="relative">
            <div className="bg-[#EBF7F3] rounded-3xl p-8 lg:p-12">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-light text-primary mb-2">13</div>
                  <div className="text-sm text-muted">Doctor advisors</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-light text-primary mb-2">5+</div>
                  <div className="text-sm text-muted">Specialties represented</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-light text-primary mb-2">100%</div>
                  <div className="text-sm text-muted">Clinician-informed</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl font-light text-primary mb-2">0</div>
                  <div className="text-sm text-muted">Assumptions made</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BuiltWithClinicians() {
  const t = useTranslations("about");

  // The 13 doctor co-owners and advisors with professional placeholder photos
  const doctors = [
    {
      name: "Dr. Sarah Chen",
      title: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Marcus Okonkwo",
      title: "Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Elena Vasquez",
      title: "Surgery",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. James Thornton",
      title: "Internal Medicine",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Anesthesiology",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Erik Lindqvist",
      title: "Orthopedics",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Amara Diallo",
      title: "Pediatrics",
      image: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Thomas Brennan",
      title: "Intensive Care",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Yuki Tanaka",
      title: "Radiology",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Henrik Solberg",
      title: "Neurology",
      image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Maria Santos",
      title: "Oncology",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Alexander Petrov",
      title: "Pulmonology",
      image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Ingrid Haugen",
      title: "General Practice",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face&sat=-100",
    },
  ];

  return (
    <section className="py-24 bg-[#EBF7F3]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl text-[#0A1F17] mb-6">
            {t("clinicians.headline")}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{t("clinicians.paragraph1")}</p>
            <p>{t("clinicians.paragraph2")}</p>
          </div>
        </div>

        {/* Doctor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                {/* Photo */}
                <div className="aspect-square relative rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover grayscale"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                {/* Info */}
                <h3 className="font-medium text-[#0A1F17] text-sm mb-1">
                  {doctor.name}
                </h3>
                <p className="text-xs text-primary">{doctor.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-[#0A1F17] font-medium text-lg">
            {t("clinicians.paragraph3")}
          </p>
        </div>
      </Container>
    </section>
  );
}

function Closing() {
  const t = useTranslations("about");

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-[#0A1F17] mb-6">
              {t("closing.headline")}
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {t("closing.paragraph")}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Learn about MediMind Sense
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <AboutMediMind />
        <BuiltWithClinicians />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
