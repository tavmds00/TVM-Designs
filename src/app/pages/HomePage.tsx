import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectCardGrid } from "../components/ProjectCardGrid";
import { Button } from "../components/ui/button";
import { getFeaturedProjects } from "../data/projects";
import greenIcon from "../../icons/green.svg";
import pinkIcon from "../../icons/pink.svg";
import purpleIcon from "../../icons/purple.svg";

export function HomePage() {
  const navigate = useNavigate();
  const [activeKeyword, setActiveKeyword] = useState<"built" | "teams" | "matters" | null>(null);
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="px-4 pb-2 pt-24 sm:px-6 sm:pb-3 sm:pt-28 lg:px-8 lg:pb-4 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-6xl">
            <h1
              className={`mb-0 text-[48px] font-bold leading-[1.02] tracking-[-1.2363px] transition-colors ${
                activeKeyword ? "text-neutral-500" : "text-neutral-100"
              }`}
              onMouseLeave={() => setActiveKeyword(null)}
            >
              <span>Tomás Moreno is a product </span>
              <span>design </span>
              <span>leader who defines </span>
              <span
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveKeyword("built")}
                onFocus={() => setActiveKeyword("built")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveKeyword("built");
                }}
                style={{ color: activeKeyword === null || activeKeyword === "built" ? "#05df72" : "#737373" }}
                className="align-baseline font-inherit italic leading-inherit transition-colors"
              >
                what gets built
              </span>
              <span>, </span>
              <span
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveKeyword("teams")}
                onFocus={() => setActiveKeyword("teams")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveKeyword("teams");
                }}
                style={{ color: activeKeyword === null || activeKeyword === "teams" ? "#ff00f6" : "#737373" }}
                className="align-baseline font-inherit italic leading-inherit transition-colors"
              >
                how teams work
              </span>
              <span>, and </span>
              <span
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActiveKeyword("matters")}
                onFocus={() => setActiveKeyword("matters")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveKeyword("matters");
                }}
                style={{
                  color: activeKeyword === null || activeKeyword === "matters" ? "#a085ff" : "#737373",
                }}
                className="align-baseline font-inherit italic leading-inherit transition-colors"
              >
                why it matters
              </span>
              <span>.</span>
              {activeKeyword === "built" && (
                <span
                  className="flex max-w-[30rem] items-start gap-2 whitespace-normal text-lg italic leading-relaxed mt-6"
                  style={{ color: "#05df72" }}
                >
                  <img src={greenIcon} className="mt-2 inline h-6 w-6" alt="" />
                  Roadmaps, 0→1 product definition, and prioritization across 7+ enterprise platforms.
                </span>
              )}
              {activeKeyword === "teams" && (
                <span
                  className="flex max-w-[30rem] items-start gap-2 whitespace-normal text-lg italic leading-relaxed mt-6"
                  style={{ color: "#ff00f6" }}
                >
                  <img src={pinkIcon} className="mt-2 inline h-7 w-7" alt="" />
                  Scaled design orgs, mentored ICs to seniors, and established cross-functional ways of working.
                </span>
              )}
              {activeKeyword === "matters" && (
                <span
                  className="flex max-w-[30rem] items-start gap-2 whitespace-normal text-lg italic leading-relaxed mt-6"
                  style={{ color: "#a085ff" }}
                >
                  <img src={purpleIcon} className="mt-2 inline h-7 w-7" alt="" />
                  $20M risk mitigation, 29% efficiency gains, and products used by 50,000+ people daily.
                </span>
              )}
            </h1>
          </div>
        </div>
      </section>

      <section className="relative bg-black px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-3 lg:px-8 lg:pb-20 lg:pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-[36px] font-bold leading-10 tracking-[0.3691px] text-[#d4d4d8]">
              Featured Projects
            </h2>
          </div>

          <div className="mb-8 sm:mb-12">
            <ProjectCardGrid projects={featuredProjects} />
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="h-[52px] rounded-full border-2 border-white/20 px-[34px] text-base font-medium tracking-[-0.3125px] text-white hover:border-white/60 sm:w-auto"
              onClick={() => navigate("/portfolio")}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <div>
              <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl lg:text-4xl">About</h2>
              <p className="mb-4 text-base leading-relaxed text-neutral-400 sm:mb-6 sm:text-lg">
                12+ years leading design for high-stakes, mission-critical products. I've built and mentored design
                teams, defined processes, and shipped under strict operational constraints from military bases to
                government infrastructure. I bridge strategy and execution, aligning cross-functional teams around user
                needs that matter.
              </p>
              <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
                Discovery never stops, users always come first, and every decision is backed by data.
                <br />
                Based in Austin, Texas.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">Expertise</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-green-400">→</span>
                  <span className="text-sm text-neutral-400 sm:text-base">Design Leadership & Menotorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-400">→</span>
                  <span className="text-sm text-neutral-400 sm:text-base">UX Research & Faciliation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-purple-400">→</span>
                  <span className="text-sm text-neutral-400 sm:text-base">
                    Accessibility & AI-Assisted Design Workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-orange-400">→</span>
                  <span className="text-sm text-neutral-400 sm:text-base">
                    Mission-Critical & Operational Systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}