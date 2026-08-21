import { MouseGlow } from "@/components/MouseGlow";
import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto selection:bg-indigo-500/30 selection:text-indigo-200">
      <MouseGlow />
      <Hero />
      <Summary />
      <Experience />
      <ProjectsSection />
      <TechnicalSkills />
      <Education />
      <Footer />
    </main>
  );
}
