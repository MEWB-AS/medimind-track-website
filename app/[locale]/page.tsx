import { Navigation, Footer } from "@/components/layout";
import {
  Hero,
  ProblemStatement,
  SolutionOverview,
  HowItWorks,
  TechDifferentiators,
  ImpactMetrics,
  Compliance,
  FinalCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
        <HowItWorks />
        <ImpactMetrics />
        <TechDifferentiators />
        <Compliance />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
