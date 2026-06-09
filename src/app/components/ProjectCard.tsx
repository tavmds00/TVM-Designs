import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { getProjectHref, projectMediaFontStyle } from "../data/projects";
import { cardLayouts, type ProjectSlug } from "../data/projectCardLayouts";

type ProjectCardProps = {
  project: Project;
};

function MediaArea({ project }: { project: Project }) {
  const layout = cardLayouts[project.slug as ProjectSlug];
  const { mediaBgSrc, mediaTopLabel, mediaStat, logoSrc, screenSrc, mockupSrc } = project;

  return (
    <div className="relative h-[244px] shrink-0 overflow-hidden bg-[#262626] shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="relative size-full">
        <img
          src={mediaBgSrc}
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />

        {logoSrc && layout.logo ? (
          <div className={layout.logo.className}>
            <img src={logoSrc} alt="" className="size-full object-contain object-left" />
          </div>
        ) : null}

        <p
          className={layout.topLabel.className}
          style={{ ...projectMediaFontStyle, color: layout.topLabel.color }}
        >
          {mediaTopLabel}
        </p>

        <p
          className={layout.stat.className}
          style={{ ...projectMediaFontStyle, color: layout.stat.color }}
        >
          {mediaStat}
        </p>

        {screenSrc && layout.screen ? (
          <img src={screenSrc} alt="" className={layout.screen.className} />
        ) : null}

        {mockupSrc && layout.mockup ? (
          <img src={mockupSrc} alt="" className={layout.mockup.className} />
        ) : null}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = getProjectHref(project);
  const descriptionColor = project.slug === "itemeyes" ? "text-white" : "text-[#d4d4d8]";

  const card = (
    <div className="group/card relative h-full w-full">
      <article className="flex h-full w-full max-w-[391px] flex-col overflow-hidden bg-[#171717]">
        <MediaArea project={project} />

        <div className="flex flex-col gap-2 px-6 pb-6 pt-6">
          <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.4492px] text-white">
            {project.title}
          </h3>
          <p
            className={`text-[14px] font-normal leading-[22.75px] tracking-[-0.1504px] ${descriptionColor}`}
          >
            {project.description}
          </p>
        </div>
      </article>

      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center 
        bg-black/0 pt-16 opacity-0 transition-all duration-300 group-hover/card:bg-black/85 group-hover/card:opacity-100"
        aria-hidden
      >
        <div className="flex max-w-[90%] flex-col items-center gap-3 text-center">
          <p className="text-[36px] font-bold leading-tight text-white">{project.title}</p>
          <p className="text-[22px] font-normal leading-snug text-white">{project.hoverTitle}</p>
        </div>
      </div>
    </div>
  );

  if (!href) {
    return <div className="block h-full cursor-default">{card}</div>;
  }

  return (
    <Link
      to={href}
      className="block h-full"
      onClick={() => window.scrollTo(0, 0)}
    >
      {card}
    </Link>
  );
}