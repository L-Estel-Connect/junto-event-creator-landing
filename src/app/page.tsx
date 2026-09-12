import { ApplicationForm } from "@/components/ApplicationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JobOverview } from "@/components/JobOverview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <JobOverview />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
