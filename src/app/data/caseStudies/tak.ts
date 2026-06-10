import type { CaseStudyContent } from "../../types/caseStudy";
import section1 from "../../../portfolio-pages/tak/section1.mp4";
import section2 from "../../../portfolio-pages/tak/section2.mp4";
import section3 from "../../../portfolio-pages/tak/section3.mp4";
import section4 from "../../../portfolio-pages/tak/section4.png";
import section5 from "../../../portfolio-pages/tak/section5.png";
import takLogo from "../../../portfolio-pages/tak/TAK Logo.svg";

const accent = "#00CA61";

export const takCaseStudy: CaseStudyContent = {
  slug: "tak",
  scrollTitle: "TAK",
  scrollTitleColor: accent,
  hero: {
    subtitle: "TAK Design System",
    subtitle2: "Hundreds of teams. One platform. Zero shared design language.",
    aboutParagraphs: [
      { text: "TAK is a geospatial platform originally developed by the Air Force. Think Google Maps for 250,000+ users who need to track locations, share live video, message securely, and coordinate in real time across Windows and Android.", bold: false },
      { text: "Military. First responders. Emergency management.", bold: false },
      { text: "High stakes. No margin for error.", bold: false },
      { text: "Hundreds of teams build plugins on top of the platform, each solving different operational problems. The challenge wasn't a lack of standards. TAK already had design tokens defining color, typography, and spacing.", bold: false },
      { text: "The challenge was everything that came after.", bold: false },
    ],
    meta: [
      { label: "My Role", value: "Design Lead\nShared Component Framework" },
      { label: "Timeline", value: "April – June 2024" },
    ],
    tools: ["Design System", "Governance", "Figma"],
    ctas: [
      { label: "View WinTAK", href: "https://www.figma.com/community/file/1573375430276099247/wintak-design-system-windows-tactical-assault-kit-team-awareness-kit", color: accent },
      { label: "View ATAK", href: "https://www.figma.com/community/file/1571370238280853168/atak-design-system-tactical-assault-kit-team-awareness-kit", color: accent },
    ],
    heroImages: [],
  },
  sections: [
    // Full bleed – section1.gif
    {
      id: "tak-section-1",
      type: "fullBleed",
      media: { src: section1, alt: "TAK design system overview", kind: "mp4" },
    },

    // Split – standards existed, infrastructure didn't
    {
      id: "tak-section-2",
      type: "split",
      heading: "The standards existed.\nThe infrastructure didn't.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "TAK's design language already existed on paper.\n\nWhat didn't exist was a practical way for teams to use it.",
        "Every new plugin required designers and engineers to rebuild patterns, redefine interactions, and make implementation decisions that had already been solved elsewhere. Valuable time was spent recreating foundations instead of building mission capabilities.",
        "While supporting development of RAIDER, a WinTAK plugin for Marine Special Operations Command, I recognized the problem was larger than a single application.",
        { text: "The ecosystem wasn't missing guidance. It was missing shared infrastructure.", bold: true },
      ],
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section2, alt: "TAK component library exploration", kind: "mp4" },
      mediaSide: "right",
    },

    // Quote
    {
      id: "tak-quote-1",
      type: "quote",
      quote: "The rules existed.\nNobody had made them usable.",
      quoteColor: accent,
      quoteLClass: "mt-2",
      quoteRClass: "self-start mt-18",
      paddingY: "pt-16 pb-16",
      attribution: "Army Software Factory, Product Designer",
    },

    // textBlock – ecosystem mapping
    {
      id: "tak-section-3",
      type: "textBlock",
      heading: "Before designing components, I mapped the ecosystem.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Working alongside engineer Patrick Sherland, I audited existing WinTAK implementations, reviewed ATAK's Material Design patterns, and traced how design decisions moved from tokens into production software.\n\nThe goal wasn't to create another design system.\n\nThe goal was to eliminate repeated work.",
        [
          { kind: "bullets", color: accent, items: [
            "Using Atomic Design principles, I built a component library and implementation framework that translated TAK standards into reusable building blocks for both Windows and Android teams.",
            "Using Atomic Design principles, I built a component library and implementation framework that translated TAK standards into reusable building blocks for both Windows and Android teams.",
          ]},
        ],
      ],
      paragraphStyle: { color: "#d4d4d8" },
    },

    // Rich text – RAIDER statement
    {
      id: "tak-richtext-1",
      type: "richText",
      fontSize: "3.5rem",
      paddingY: "pt-16 pb-8",
      segments: [
        { text: "RAIDER shipped.", color: accent, bold: true },
        { text: " MARSOC used it.", color: "#ffffff", bold: true, break: true },
        { text: "The framework held up.", color: "#ffffff", bold: true, break: true },
      ],
    },

    // Rich text – smaller follow-on line
    {
      id: "tak-richtext-2",
      type: "richText",
      fontSize: "1.5rem",
      paddingY: "pb-16 pt-0",
      segments: [
        { text: "The question was no longer whether it worked. The question was who else could use it.", color: "#d4d4d8", bold: false },
      ],
    },

    // Full bleed – Section 3.gif (constrained height)
    {
      id: "tak-section-4",
      type: "fullBleed",
      media: { src: section3, alt: "TAK system in use", kind: "mp4" },
    },

    // stepFlow – adoption
    {
      id: "tak-section-5",
      type: "stepFlow",
      heading: "Then other teams adopted our library!",
      headingStyle: { size: "2.5rem", color: accent, weight: "700" },
      subheading: "No mandate. No rollout plan. No executive directive.",
      subheadingStyle: { size: "1.2rem", color: "#d4d4d8", weight: "400" },
      accentColor: accent,
      arrowSize: 0,
      numberSize: "2rem",
      titleSize: "1.8rem",
      descriptionSize: "1rem",
      image: takLogo,
      imageAlt: "TAK Logo",
      steps: [
        {
          number: "1",
          title: "Army applications",
          description: "3 Army Software Factory teams adopted TAK design system with results.",
        },
        {
          number: "2",
          title: "Conference 2025",
          description: "Patrick was invited to present at the TAK Product Center conference. The system was becoming infrastructure.",
        },
        {
          number: "3",
          title: "TAKX",
          description: "TAK Product Center is now exploring it as the design backbone of TAKX, the next TAK framework.",
        },
      ],
    },

    // Full bleed – section4.png
    {
      id: "tak-section-6",
      type: "fullBleed",
      media: { src: section4, alt: "TAK conference presentation", kind: "image" },
    },

    // Result cards – outcomes
    {
      id: "tak-section-7",
      type: "resultCards",
      heading: "Built by two people.\nAdopted across an ecosystem.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      accentColor: accent,
      image: section5,
      imageAlt: "TAK ecosystem",
      arrowSize: 35,
      categoryStyle: { size: "1.4rem", color: "#ffffff", weight: "600" },
      metricStyle: { size: "1.8rem", color: "#ffffff", weight: "500" },
      descriptionStyle: { size: "1.1rem", color: "#d4d4d8", weight: "200" },
      cards: [
        {
          category: "Shared Infrastructure",
          metric: "A common foundation for WinTAK and ATAK teams.",
          description: "",
        },
        {
          category: "Reduced Rework",
          metric: "Solved once. Used repeatedly.",
          description: "",
        },
        {
          category: "Ecosystem Adoption",
          metric: "Picked up by teams we never worked with directly.",
          description: "",
        },
        {
          category: "Future Direction",
          metric: "Contributing to conversations shaping TAKX.",
          description: "",
        },
      ],
    },
  ],
};