import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  TrustBar,
  ProblemStatement,
  SolutionOverview,
  HowItWorks,
  TechDifferentiators,
  ImpactMetrics,
  Testimonial,
  Compliance,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <SolutionOverview />
        <HowItWorks />
        <TechDifferentiators />
        <ImpactMetrics />
        <Testimonial />
        <Compliance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
