import { ApplicationCTA } from "@/components/ApplicationCTA";
import { ApplicationForm } from "@/components/ApplicationForm";
import { BuildMadridSection } from "@/components/BuildMadridSection";
import { CandidateProfileSection } from "@/components/CandidateProfileSection";
import { EarningsSection } from "@/components/EarningsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocalFaceSection } from "@/components/LocalFaceSection";
import { NetworkSection } from "@/components/NetworkSection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OpportunitySection />
        <ExperiencesSection />
        <NetworkSection />
        <LocalFaceSection />
        <EarningsSection />
        <SupportSection />
        <CandidateProfileSection />
        <BuildMadridSection />
        <ApplicationCTA />
        <ApplicationForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
