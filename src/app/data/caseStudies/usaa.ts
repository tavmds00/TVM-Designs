import type { CaseStudyContent } from "../../types/caseStudy";
import hero1 from "../../../portfolio-pages/usaa/hero1.png";
import hero2 from "../../../portfolio-pages/usaa/hero2.png";
import section1 from "../../../portfolio-pages/usaa/section1.png";
import section2 from "../../../portfolio-pages/usaa/section2.png";
import section3 from "../../../portfolio-pages/usaa/section3.png";
import section4cover from "../../../portfolio-pages/usaa/section4cover.png";
import section5cover from "../../../portfolio-pages/usaa/section5cover.png";
import section6 from "../../../portfolio-pages/usaa/section6.png";
import section7before from "../../../portfolio-pages/usaa/section7before.png";
import section8 from "../../../portfolio-pages/usaa/section8.png";
import section9 from "../../../portfolio-pages/usaa/section9.png";
import visitorRequestMp4 from "../../../portfolio-pages/usaa/visitor-request.mp4";
import waiAriaMp4 from "../../../portfolio-pages/usaa/wai-aria.mp4";
import section7afterMov from "../../../portfolio-pages/usaa/Section7after.mov";

export const usaaCaseStudy: CaseStudyContent = {
  slug: "usaa",
  scrollTitle: "EVIMS",
  scrollTitleColor: "#FAC705",
  hero: {
    subtitle: "USAA's Visitor & Security Suite",
    subtitle2: "Securing access across USAA's seven campuses",
    aboutParagraphs: [
      {
        text: "(EVIMS), Employee/Visitor Information Management System is a suite of three connected applications that manages employee access and badges, while enforcing security protocols, and tracking visitor volume.",
        bold: false,
      },
      {
        text: "1. An employee pre-registers a visitor.\n 2. A security officer checks them in at the gate.\n 3. The visitor signs in at the lobby kiosk which notifies the USAA employee/host their guest is here to escort.",
        bold: true,
      },
      {
        text: "Every step feeds the next.",
        bold: false,
      },
      {
        text: "Over 250,000 people moved through this system in 2018.",
        bold: false,
      },
      {
        text: "Employees, contractors, interviewees, delivery drivers, C-suite executives, and everyone in between used EVIMS everyday.",
        bold: true,
      },
    ],
    meta: [
      { label: "My Role", value: "Director of UX & Product Design\nRe-Design" },
      { label: "Timeline", value: "Aug '18 – April '19" },
    ],
    tools: ["Sketch", "Prototyping", "UX Research", "Q/A", "WCAG Compliance"],
    ctas: [
      { label: "View Case Study", scrollTo: "usaa-section-1", color: "#FAC705" },
    ],
    heroImages: [
      { src: hero1, alt: "EVIMS visitor request app screens", backgroundColor: "#FAC705" },
      { src: hero2, alt: "EVIMS security check-in screens", backgroundColor: "#0073E5" },
    ],
  },
  sections: [
    // ── 1. Split — Securing access ────────────────────────────────────────
    {
      id: "usaa-section-1",
      type: "split",
      heading: "This update didn't fix the actual problems",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "When I joined USAA, the Employee Mobile Apps team had just finished an update adding new back end validation, input-field features and new UI to the lobby kiosk.",
        { text: "The only problem was the update didn't fix the actual problems.", bold: true },
      ],
      
      bullets: [
        "Users didn't understand the categories.",
        "Field labels asked for information they didn't have. So they guessed, skipped, and worked around it.",
        "Registering deliveries as guests to avoid extra fields, entering fake data just to get through the flow.",
        "Employees were entering fake data because the system asked for information they did not have in wrong categories.",
      ],
      bulletStyle: { color: "#FAC705" },
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section1, alt: "EVIMS app screens overview", kind: "image" },
    },

    // ── 2. Split — Then I met Suzy ────────────────────────────────────────
    {
      id: "usaa-section-2",
      type: "split",
      heading: "Then I met Suzy.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "A legally blind software engineer working at the Accessibility Lab who used the app every day by voice commands.",
        "She had a workaround for every single flow. What I'd observed, Suzy was living personally every day, on every screen.",
        "That evidence gave me what I needed to present findings directly to the Head of Security and EMA leadership.",
        "That meeting funded the project and surfaced a compliance fine USAA had been kicking down the road.\nContractors and maintenance workers were walking unescorted through campuses.\nIt was a security liability nobody had formally named yet.",
      ],
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section2, alt: "Suzy, accessibility lab engineer", kind: "image" },
      mediaSide: "right",
    },

    // ── 3. textBlock — People were making things up ───────────────────────
    {
      id: "usaa-section-3",
      type: "textBlock",
      heading: "People were making things up.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "The old system treated every visitor the same.",
        "Executives registering guests by their assistants, contractors extending multi-day access, and delivery drivers all moved through identical flows with identical requirements.",
        "I rebuilt the registration experience around actual employee behavior instead of security assumptions.",
        [{ kind: "bullets", color: "#FAC705", items: [
          "New registration categories simplified conditional logic.",
          "Introduced guided preparation screens before form entry.",
          "Added escort acknowledgment requirement, implementing security compliance to fulfill government audit.",
        ]}],
        "Employees no longer had to invent information just to complete a request.",
        "Post-launch accessibility testing with Suzy and Marcus uncovered additional compliance gaps.",
        "Those findings led security leadership to revise their own requirements before final rollout.",
      ],
      paragraphStyle: { color: "#d4d4d8" },
      
    },

    // ── 4. fullBleed — before/after mobile screens ────────────────────────
    {
      id: "usaa-section-4",
      type: "fullBleed",
      media: { src: section3, alt: "Before and after EVIMS mobile screens", kind: "image" },
    },

    // ── 5. Video — Visitor Request prototype ─────────────────────────────
    {
      id: "usaa-section-5",
      type: "video",
      coverSrc: section4cover,
      videoSrc: visitorRequestMp4,
      alt: "Visitor Request prototype walkthrough",
    },

    // ── 6. Video — WAI-ARIA Accessibility ────────────────────────────────
    {
      id: "usaa-section-6",
      type: "video",
      coverSrc: section5cover,
      videoSrc: waiAriaMp4,
      alt: "WAI-ARIA Accessibility walkthrough",
    },

    // ── 7. Quote ──────────────────────────────────────────────────────────
   
    {
      id: "usaa-section-7",
      type: "quote",
      quoteLClass: "mt-2",
      quoteRClass: "self-end mb-2",
      paddingY: "pt-16 pb-16",
      quoteColor: "#FAC705",
      quote: "I am so grateful for this new implementation. I never understood how someone could request a visitor under my name without my consent.",
      attribution: "USAA employee, post-launch feedback",
    },
    // ── 8. Split — Security inherited the mess ───────────────────────────
    {
      id: "usaa-section-8",
      type: "split",
      heading: "Security inherited the mess.",
      headingStyle: { size: "2.5rem", color: "#ffffff", weight: "700" },
      paragraphs: [
        "Security officers were processing visitors in gloves with various hand sizes, under time pressure, while switching between multiple screens just to verify a single person.",
        "Employees no longer had to invent information just to complete a request.The result was faster registration, cleaner data, and fewer downstream security failures.",
      ],
      bullets: [
        "Landscape orientation increased touch points and keyboard efficiency due to constraints of using a mini iPad,",
        "Search logic and back end queries reduced false matches,",
        "Critical visitor information was consolidated into a single view.",
      ],
      bulletStyle: { color: "#FAC705" },
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section6, alt: "Security officer at gate", kind: "image" },
      mediaSide: "right",
    },

    // ── 9. Split — Before PNG left, after .mov right ─────────────────────
    {
      id: "usaa-section-9",
      type: "splitMedia",
      left: { src: section7before, alt: "Before EVIMS redesign screens", kind: "image" },
      right: { src: section7afterMov, alt: "After EVIMS redesign prototype", kind: "video", autoPlay: true, loop: true, scale: 1.2,
        objectPosition: "center",
      },
    },

    // ── 10. fullBleed ─────────────────────────────────────────────────────
    {
      id: "usaa-section-10",
      type: "fullBleed",
      media: { src: section8, alt: "EVIMS flow diagram", kind: "image" },
    },

    // ── 11. Quote ─────────────────────────────────────────────────────────
    {
      id: "usaa-section-11",
      type: "quote",
      quoteLClass: "mt-2",
      quoteRClass: "self-start mt-2",
      paddingY: "pt-16 pb-16",
      quoteColor: "#FAC705",
      quote: "Great example of how process improvement can ease frustrations.",
      attribution: "USAA employee, post-launch feedback",
    },

    // ── 12. Split — The system finally matched reality ────────────────────
    {
      id: "usaa-section-12",
      type: "split",
      heading: "The system finally \n matched reality.",
      headingStyle: { size: "3rem", color: "#FAC705", weight: "700" },
      paragraphs: [
        "The redesign launched across seven USAA campuses supporting more than 250,000 annual visitors.",
        "Post-launch testing with the Accessibility Lab uncovered additional compliance gaps, leading security leadership to change their own business rules.",
      ],
      bullets: [
        "Landscape orientation increased touch points and keyboard efficiency due to constraints of using a mini iPad,",
        "Ride pickup flows no longer required license plate information users didn't realistically have before arrival.",
        "ARIA testing changed screen-reader focus behavior, swipe interactions, and field requirements for accessibility users.",
        "Security verification tools were rewritten to reduce false matches and speed gate processing.",
      ],
      bulletStyle: { color: "#FAC705" },
      paragraphStyle: { color: "#d4d4d8" },
      media: { src: section9, alt: "EVIMS results and metrics", kind: "image" },
      mediaSide: "right",
    },
  ],
};