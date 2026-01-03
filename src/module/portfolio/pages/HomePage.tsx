import { Hero } from "../components/layout/Hero";
import ExperiencePage from "./ExperincePage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <section id="home" className=" scroll-mt-24">
        <Hero />
      </section>

      <section id="experience" className="scroll-mt-18">
        <ExperiencePage />
      </section>

      <section id="projects" className="scroll-mt-20">
        <ProjectsPage />
      </section>

      <section id="about" className="scroll-mt-8">
        <AboutPage />
      </section>
    </div>
  );
}
