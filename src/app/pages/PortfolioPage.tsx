import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectCardGrid } from "../components/ProjectCardGrid";
import { projects } from "../data/projects";

export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 lg:mb-16">
            <h1 className="text-[36px] font-bold leading-[60px] tracking-[-1.2363px] text-[#d4d4d8]">
              Featured Projects
            </h1>
          </div>

          <ProjectCardGrid projects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
