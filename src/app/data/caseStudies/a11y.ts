import type { CaseStudyContent } from "../../types/caseStudy";
import section1 from "../../../portfolio-pages/a11y/section1.png";
import section2 from "../../../portfolio-pages/a11y/section2.png";
import section3 from "../../../portfolio-pages/a11y/section3.png";
import section3slack from "../../../portfolio-pages/a11y/section3slack.png";
import section4 from "../../../portfolio-pages/a11y/section4.png";
import audio1 from "../../../portfolio-pages/a11y/oliver-audio.m4a";

export const a11yCaseStudy: CaseStudyContent = {
  slug: "a11y",
  scrollTitle: "A11Y",
  scrollTitleColor: "#C584FF",
  hero: {
    subtitle: "Building Accessibility Culture\n Across VMware Tanzu Labs",
    subtitle2: "Accessibility started before design did.",
    aboutParagraphs: [
      { text: "Growing up alongside deaf students in grade school changed how I understood communication. Sign language, interpretation, and nonverbal interaction introduced me early to the realities of participation and exclusion long before accessibility became part of the technology industry's vocabulary.", bold: false },
      { text: "Years later, that perspective would evolve into organizational accessibility leadership across enterprise environments including USAA and VMware Tanzu Labs, where I helped establish accessibility as a visible and scalable design practice through education, advocacy, and cross-functional collaboration.", bold: false },
    ],
    meta: [
      { label: "Platform", value: "A11Y, WCAG Compliance" },
      { label: "Timeline", value: "April 21 – June 2023" },
    ],
    tools: ["Accessibility Leadership", "WCAG Training", "Leadership & Advocacy", "Org Adoption", "Cross Functional Collaboration"],
    ctas: [{ label: "View Case Study", scrollTo: "a11y-section-1", color: "#C584FF" }],
    heroImages: [],
  },
  sections: [
    {
      id: "a11y-section-1",
      type: "split",
      heading: "Accessibility had no center.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Accessibility work existed across the organization, but it lacked shared ownership, visibility, and operational consistency across teams.",
        "I helped establish accessibility as a more active design conversation within an org of 15 product designers and 60+ ICs through:",
      ],
      bullets: ["Building a small internal team & collaboration with accessibility specialists, designers, and engineers across the organization."],
      bulletStyle: { color: "#C584FF", size: "1rem" },
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section1, alt: "Accessibility org mapping", kind: "image" },
    },
    {
      id: "a11y-section-2",
      type: "textBlock",
      heading: "Making the Invisible, Visible.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "I focused on helping accessibility become more visible across the design organization through presentations, mentorship, training, and cross functional collaboration.",
        "In 2021, I gave a talk titled The Marriage of Accessibility + Design exploring dark mode, accessibility standards, design systems, and emerging product expectations.",
        "In 2023, I expanded the work through Good Design is Accessible Design, a broader accessibility initiative and case study developed alongside accessibility educators and junior designers across the organization.",
        "The conversations expanded beyond compliance into larger discussions around:",
        [{ kind: "bullets", color: "#C584FF", items: [
          "Dark mode",
          "Accessibility as organizational responsibility",
          "Security and legal ramifications",
          "WCAG checklist & dev tools like ESLint and React-axe",
        ]}],
        [
          { kind: "text", value: "The work became influential enough that conversations around dark mode later inspired additional internal and conference presentations at " },
          { kind: "link", value: "\n PUSH UX Conference in 2022", href: "https://www.pushconf.tv/dark-mode-is-wrong/", color: "#C584FF" },
          { kind: "text", value: " from other designers across VMware." },
        ],
      ],
      paragraphStyle: { color: "#d4d4d8" },
    },
    {
      id: "a11y-section-3",
      type: "fullBleed",
      media: { src: section2, alt: "Accessibility presentations and talks", kind: "image" },
    },
    {
      id: "a11y-section-4",
      type: "split",
      heading: "Building the practice.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Accessibility could not scale through presentations alone.",
        "I worked alongside accessibility educators, engineers, and designers across VMware to help connect accessibility education with practical product workflows through training sessions, mentorship, office hours, and collaborative guidance across teams.",
        "Some initiatives gained traction immediately. Others revealed how difficult organizational adoption can be without sustained visibility and shared ownership.",
        "Over time, the work helped establish stronger accessibility awareness, collaboration, and momentum across VMware's design practice.",
      ],
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section3, alt: "Building the practice checkpoint", kind: "image" },
      mediaSide: "left",
      audio: {
        src: audio1,
        label: "Audio Excerpt ft.",
        sublabel: "Oliver Luo Jr. Designer",
        accentColor: "#C584FF",
      },
    },
    
    {
      id: "a11y-section-5",
      type: "richText",
      background: "#0a0a0a",
      fontSize: "4rem",
      paddingY: "py-16",
      segments: [{ text: "RECOGNIZED LEADERSHIP", color: "#C584FF", bold: true }],
    },
    {
      id: "a11y-section-6",
      type: "split",
      heading: "Beyond VMware.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Why Accessible Product Design Makes Business Sense",
        "Following collaborative accessibility training initiatives across VMware, I was invited to participate in UCLA's 2024 AmeriTech panel discussion on Why Accessible Product Design Makes Business Sense.",
        "What began as internal advocacy expanded into broader conversations around inclusive systems, organizational responsibility, and design leadership.",
      ],
      paragraphStyle: { color: "#d4d4d8" },
      cta: { label: "View Event", href: "https://www.anderson.ucla.edu/news-and-events/why-accessible-product-design-makes-business-sense", color: "#C584FF" },
      media: { src: section4, alt: "Beyond VMware panel", kind: "image" },
    },
    {
      id: "a11y-section-7",
      type: "textBlock",
      heading: "Accessibility reveals the organization.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Accessibility exposed more than interface problems. It revealed how teams:",
      ],
      bullets: ["Communication", "Collaborate,", "Prioritize", "Building systems to streamline productivity."],
      bulletColor: "#C584FF",
      paragraphStyle: { color: "#d4d4d8" },
    },
    {
      id: "a11y-section-8",
      type: "richText",
      background: "#00000",
      fontSize: "2.8rem",
      paddingY: "py-16",
      segments: [
        { text: "The challenge was never only about compliance.", color: "#ffffff", bold: false },
        { text: "It was about culture, visibility, and organizational alignment.", color: "#ffffff", bold: true, break: true },
      ],
    },
  ],
};

