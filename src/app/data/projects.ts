import mycareerBg from "../../home cards/mycareer/media-bg.svg";
import mycareerLogo from "../../home cards/mycareer/mclogo.svg";
import mycareerScreen from "../../home cards/mycareer/screen.svg";
import kruiBg from "../../home cards/krui/media-bg.svg";
import kruiLogo from "../../home cards/krui/krlogo.svg";
import kruiScreen from "../../home cards/krui/screen.svg";
import usaaBg from "../../home cards/usaa/media-bg.svg";
import usaaLogo from "../../home cards/usaa/usaalogo.svg";
import usaaScreen from "../../home cards/usaa/screen.svg";
import itemeyesBg from "../../home cards/itemeyes/screen.svg";
import itemeyesLogo from "../../home cards/itemeyes/logo.svg";
import itemeyesMockup from "../../home cards/itemeyes/1.svg";
import takBg from "../../home cards/tak/media-bg.svg";
import takLogo from "../../home cards/tak/TAK_logo.svg";
import takScreen from "../../home cards/tak/screen.svg";
import wavBg from "../../home cards/wav/media-bg.svg";
import wavLogo from "../../home cards/wav/wavlogo.svg";
import wavScreen from "../../home cards/wav/screen.svg";
import a11yBg from "../../home cards/a11y/media-bg.svg";
import a11yLogo from "../../home cards/a11y/vmwlogo.svg";
import a11yScreen from "../../home cards/a11y/screen.svg";

export type Project = {
  slug: string;
  title: string;
  description: string;
  hoverTitle: string;
  mediaBgSrc: string;
  mediaTopLabel: string;
  mediaStat: string;
  logoSrc?: string;
  screenSrc?: string;
  mockupSrc?: string;
  comingSoon?: boolean;
};

export const projectMediaFontStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontVariationSettings: '"opsz" 14',
} as const;

export const projects: Project[] = [
  {
    slug: "itemeyes",
    title: "ItemEyes",
    description:
      "Digitizing USMC inventory management from a 3-hour paper process to a fully digital workflow. Currently in beta.",
    hoverTitle: "Coming Soon..",
    mediaBgSrc: itemeyesBg,
    mediaTopLabel: "Every Marine. Every Item. Accounted For.",
    mediaStat: "Saving Marines 3 Hours Per Inventory. Per Unit.",
    logoSrc: itemeyesLogo,
    mockupSrc: itemeyesMockup,
    comingSoon: true,
  },
  {
    slug: "mycareer",
    title: "MyCareer",
    description:
      "United States Marine Corps annual career event app, cutting wait times by 55%. From 118 to 52 minutes, for thousands of Marines",
    hoverTitle: "Modernizing Event Operations",
    mediaBgSrc: mycareerBg,
    mediaTopLabel: "Modernizing Event Operations",
    mediaStat: "Reduced wait times by 55%! 118 min → 52 min.",
    logoSrc: mycareerLogo,
    screenSrc: mycareerScreen,
  },
  {
    slug: "tak",
    title: "TAK Design System",
    description:
      "Design system used by military and first responders worldwide. 3 hours → 30 minutes mission reporting time on WinTAK",
    hoverTitle: "Tactical App Design System",
    mediaBgSrc: takBg,
    mediaTopLabel: "Design Where Decisions Save Lives",
    mediaStat: "TAK Conference & 20+ DoD Requests.",
    logoSrc: takLogo,
    screenSrc: takScreen,
  },
  {
    slug: "krui",
    title: "KRUI Design System",
    description:
      "Led design system adoption across 7 enterprise apps, improving consistency by 25% and dev efficiency by 30%.",
    hoverTitle: "Design System Leadership",
    mediaBgSrc: kruiBg,
    mediaTopLabel: "Design System Leadership",
    mediaStat: "Scaling Consistency Across 7 Apps",
    logoSrc: kruiLogo,
    screenSrc: kruiScreen,
  },
  {
    slug: "a11y",
    title: "VMWare + WCAG",
    description:
      "Created a team and built accessibility visibility through advocacy, training, and organizational collaboration.",
    hoverTitle: "Accessibility as Organizational Practice",
    mediaBgSrc: a11yBg,
    mediaTopLabel: "Accessibility as Organizational Practice",
    mediaStat: "Leadership across VMware Tanzu Labs",
    logoSrc: a11yLogo,
    screenSrc: a11yScreen,
  },
  {
    slug: "usaa",
    title: "USAA",
    description:
      "Redesigned USAA's 3-app visitor security suite across 7 campuses, cutting check-in times by 35% and saving $20M in government fines.",
    hoverTitle: "Securing USAA's 7 Campuses",
    mediaBgSrc: usaaBg,
    mediaTopLabel: "Securing USAA's 7 Campuses",
    mediaStat: "35% faster check‑in\nacross 7 campuses.",
    logoSrc: usaaLogo,
    screenSrc: usaaScreen,
  },
  {
    slug: "wav",
    title: "WAV Media",
    description:
      "Secured the exclusive debut of Kanye West's Ye, growing WAV Media to 400K monthly users post-launch.",
    hoverTitle: "Live Streaming Music",
    mediaBgSrc: wavBg,
    mediaTopLabel: "Designed & Launched WAV Media",
    mediaStat: "400K monthly users post launch!",
    logoSrc: wavLogo,
    screenSrc: wavScreen,
  },
];

export const featuredProjectSlugs = ["mycareer", "krui", "usaa"] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}

export function getProjectHref(project: Project): string | undefined {
  if (project.comingSoon) return undefined;
  return `/project/${project.slug}`;
}
