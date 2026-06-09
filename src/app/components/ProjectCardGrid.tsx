import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectCardGridProps = {
  projects: Project[];
};

export function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  return (
    <div className="group/container grid grid-cols-1 gap-15 sm:grid-cols-2 lg:grid-cols-3 pointer-events-none">
      {projects.map((project) => (
        <div
          key={project.slug}
          className="group/item relative transition-opacity duration-300 pointer-events-auto group-hover/container:opacity-20 hover:!opacity-100"
        >
          <div className="pointer-events-none fixed inset-0 z-40 bg-black opacity-0 transition-opacity duration-300 group-hover/item:opacity-[0.99]" />
          <div className="relative z-50">
            <ProjectCard project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}