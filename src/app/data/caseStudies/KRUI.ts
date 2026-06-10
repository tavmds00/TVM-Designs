import type { CaseStudyContent } from "../../types/caseStudy";
import hero1 from "../../../portfolio-pages/krui/hero1.png";
import hero2 from "../../../portfolio-pages/krui/hero2.png";
import hero3 from "../../../portfolio-pages/krui/hero3.png";
import hero4 from "../../../portfolio-pages/krui/hero4.png";
import section1b from "../../../portfolio-pages/krui/section1.png";
import section2 from "../../../portfolio-pages/krui/section2.png";
import section7 from "../../../portfolio-pages/krui/section3.png";
import section9 from "../../../portfolio-pages/krui/section4.png";
import section10 from "../../../portfolio-pages/krui/section5.png";
import section11 from "../../../portfolio-pages/krui/section6.png";
import section13 from "../../../portfolio-pages/krui/section7.png";

export const kruiCaseStudy: CaseStudyContent = {
  slug: "krui",
  scrollTitle: "KRUI",
  scrollTitleColor: "#00C9DD",
  hero: {
    subtitle: "Kessel Run Design System",
    subtitle2: "Creating Alignment Across a Fragmented Portfolio",
    aboutParagraphs: [
      {
        text: "Seven enterprise applications.\nSiloed teams.\nNo shared design language.\nShared user personas.\nFragmented experiences.",
        bold: true,
      },
      {
        text: "I mapped the dysfunction, built the evidence, and got the org to act with design system adoption as the vehicle.",
        bold: false,
      },
      {
        text: "I led a portfolio-wide initiative to improve design consistency and organizational alignment at Kessel Run through the adoption of their KRUI design system. The work established new operational workflows across 50+ contributors for the KRADOS Portfolio.",
        bold: false,
      },
      {
        text: "From fragmented products to a shared operational language.",
        bold: true,
      },
    ],
    meta: [
      { label: "My Role", value: "Design Practice Lead \nDesign Operations" },
      { label: "Timeline", value: "Sept 22-Feb 23" },
    ],
    tools: ["Figma", "Git", "Enterprise UX", "Parabol", "C Suite Alignment"],
    ctas: [
      { label: "View Case Study", scrollTo: "krui-section-1", color: "#00C9DD" },
      { label: "Read Article", href: "https://blogs.vmware.com/tanzu/operations-of-a-design-system/", color: "#00C9DD" },
    ],
    heroImages: [
      { src: hero1, alt: "KRUI redesign overview", backgroundColor: "#00C9DD" },
      { src: hero2, alt: "KRUI redesign overview", backgroundColor: "#00C9DD" },
      { src: hero3, alt: "KRUI interface screens", backgroundColor: "#7F65BC" },
      { src: hero4, alt: "KRUI interface screens", backgroundColor: "#217C85" },
    ],
  },
  sections: [
    {
      id: "krui-section-1",
      type: "quote",
      quoteLClass: "mt-2",
      quoteRClass: "self-start mt-2",
      quote: "KRUI isn't a design system. It's just a library.",
      paddingY: "pt-16 pb-16",
      quoteColor: "#00B4D8",
      attribution: "Engineer, interview",
    },
    {
      id: "krui-section-1a",
      type: "textBlock",
      heading: "Nobody was using the design system. \n And nobody owned that problem.",
      paragraphs: [
        "Kessel Run had a design system called 'KRUI', that their enterprise applications were supposed to use. In practice, designers were detaching components and building their own. Engineers were going straight to the underlying MUI library. Design consistency work sat in backlogs for months, which became everyone's responsibility and no one's priority.",
        "A staff designer had been trying to move this forward for over a year. I was brought in as Design Practice Lead to take over, leading two staff designers, owning the strategy and roadmap, and presenting directly to the director, CTO, and CEO.",
      ],
    },
    {
      id: "krui-section-1b",
      type: "fullBleed",
      media: { src: section1b, alt: "KRUI brand exploration", kind: "image" },
    },
    {
      id: "krui-section-2",
      type: "split",
      heading: "I ran a structured discovery across the KRADOS portfolio.",
      paragraphs: [
        "Every IC. Every manager. Every discipline. Engineering survey. Team retrospective. Component audit across all nine apps.",
        "I also ran team health workshops across the organization when I noticed it was more than just a bad design system process.",
        "The goal was to find design problems.",
        { text: "The outcome showed organizational ones.", bold: true },
      ],
      media: { src: section2, alt: "KRUI retro", kind: "image" },
    },
    {
      id: "krui-section-3",
      type: "statsGrid",
      stats: [
        {
          value: "0-2 Stories",
          label: "Shipped per sprint across most teams for design consistency updates.",
          highlight: "Shipped per sprint ",
        },
        {
          value: "10 Engineers",
          label: "50% of engineers had zero design consistency stories in their backlog at time of survey.",
          highlight: "zero design consistency stories",
        },
        {
          value: "0 PM's",
          label: "Is the number who received clear direction on what compliant actually meant.",
          highlight: "compliant",
        },
        {
          value: "9 Apps",
          label: "Each implementing the same components in completely different ways.",
          highlight: "completely different ways",
        },
      ],
    },
    {
      id: "leadership-quote",
      type: "richText",
      background: "#0a0a0a",
      fontSize: "3.5rem",
      paddingY: "pt-24 pb-16",
      segments: [
        { text: "This wasn't a component problem.", color: "#00B4D8", bold: true },
        { text: "It was a leadership vacuum.", color: "#ffffff", bold: true, break: true },
      ],
    },
    {
      id: "krui-section-5",
      type: "stepFlow",
      numberSize: "1.5rem",
      titleSize: "1.2rem",
      arrowSize: 60,
      descriptionSize: "1rem",
      heading: "Then I got to work",
      subheading: "I created a five-step Design Consistency process and presented it to the CEO, CTO, and directors alongside the data. Then I executed on it while leading my team day to day.",
      steps: [
        { number: "STEP 1", title: "Pattern selection", description: "Designers+ Design Managers" },
        { number: "STEP 2", title: "Component audit", description: "Designers+ Engineers" },
        { number: "STEP 3", title: "Standardization", description: "ICs + Managers" },
        { number: "STEP 4", title: "Guidance definition", description: "Designers + Product Managers" },
        { number: "STEP 5", title: "Track backlogs", description: "Managers + Deadlines" },
      ],
    },
    {
      id: "krui-section-7",
      type: "fullBleed",
      media: { src: section7, alt: "photos of marine waiting", kind: "image" },
    },
    {
      id: "krui-section-8",
      type: "twoColumnList",
      accentColor: "#00C9DD",
      left: {
        title: "We changed how work got done.",
        items: [
          { label: "Figma Fridays", description: "Weekly skill sessions that upskilled junior designers on component building, auto layout, and UX principles" },
          { label: "Keeping Track", description: "Bi-weekly consistency meetings across the organization" },
          { label: "Front End Release", description: "DC sign-off added to the front-end release process, permanently" },
        ],
      },
      right: {
        title: "Nine apps. Finally.",
        items: [
          { label: "Buttons", description: "Primary, secondary, tertiary with full guidance." },
          { label: "Global header and footer", description: "Standardized the global component for all user personas." },
          { label: "Date & Time Calendar Picker", description: "9 app teams involved in design, handed off to engineering" },
        ],
      },
    },
    {
      id: "krui-section-9",
      type: "fullBleed",
      media: { src: section9, alt: "Wireframe explorations", kind: "image" },
    },
    {
      id: "krui-section-10",
      type: "fullBleed",
      media: { src: section10, alt: "Wireframe explorations", kind: "image" },
    },
    {
      id: "krui-section-11",
      type: "fullBleed",
      media: { src: section11, alt: "Final design showcase", kind: "image" },
    },
    {
      id: "krui-section-12",
      type: "quote",
      quoteLClass: "mt-2",
      quoteRClass: "self-start mt-20",
      paddingY: "pt-12 pb-12",
      quoteColor: "#00B4D8",
      quote: "It would be helpful if we had a way to see the \n decisions and research behind the guidance.",
      attribution: "Designer, KRADOS interview",
    },
    {
      id: "krui-section-13",
      type: "resultCards",
      heading: "Design consistency stopped being \n something that fell through the cracks.",
      subheading: "Design system adoption hit every team roadmap for the first time. The DC approval step became part of how KRADOS ships front-end work. That change outlasts any individual component.",
      subheadingStyle: { size: "1.2rem", color: "#ffffff", weight: "200" },
      accentColor: "#00C9DD",
      image: section13,
      imageAlt: "Kessel Run aircraft",
      arrowSize: 35,
      categoryStyle: { size: "1.8rem", color: "#FFFFFF", weight: "600" },
      metricStyle: { size: "2rem", color: "#ffffff", weight: "500" },
      descriptionStyle: { size: "1.4rem", color: "#FFFFFF", weight: "200" },
      cards: [
        { category: "Portfolio-wide", metric: "25% increase in design consistency", description: "Measured across all KRADOS apps after first cycle" },
        { category: "Org alignment", metric: "3 managers + 50+ ICs aligned", description: "Design system adoption added to team roadmaps." },
        { category: "Engineering", metric: "30% improvement in development efficiency", description: "Standardized components reduced rebuild time per sprint" },
        { category: "Ripple effect", metric: "DC Team approval added to release process", description: "Changed how KRADOS ships front-end work org-wide" },
      ],
    },
  ],
};