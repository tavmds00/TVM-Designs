import type { CaseStudyContent } from "../../types/caseStudy";
import hero1 from "../../../portfolio-pages/wav/hero1.png";
import hero2 from "../../../portfolio-pages/wav/hero2.png";
import section1 from "../../../portfolio-pages/wav/section1.png";
import section2 from "../../../portfolio-pages/wav/section2.png";
import section3 from "../../../portfolio-pages/wav/section3.png";
import section4 from "../../../portfolio-pages/wav/section4.mp4";

export const wavCaseStudy: CaseStudyContent = {
  slug: "wav",
  scrollTitle: "WAV",
  scrollTitleColor: "#02FEF6",
  hero: {
    subtitle: "WAV Media x NAVER",
    subtitle2: "Building a live streaming platform for music culture",
    aboutParagraphs: [
      {
        text: "Founded by NAVER in 2015, WAV Media was a live streaming music platform focused on artist driven content, real time interaction, and music discovery for Hip Hop and EDM audiences.",
        bold: false,
      },
      {
        text: "As Creative Director, I led product design across iOS and Android, managed distributed teams between the U.S. and South Korea, and helped launch the platform under aggressive timelines and rapid growth.",
        bold: false,
      },
      {
        text: "The platform gained visibility through partnerships with artists, festivals, and media organizations including Kanye West, Rolling Loud, and FADER, with streaming activity growing 54% after launch.",
        bold: false,
      },
    ],
    meta: [
      { label: "Role", value: "Director Product Design\nCreative Director" },
      { label: "Timeline", value: "2015–2017" },
    ],
    ctas: [
      { label: "View Case Study", scrollTo: "wav-section-1", color: "#02FEF6" },
      { label: "View Website", href: "https://wav.media/", color: "#02FEF6" },
    ],
    heroImages: [
      { src: hero1, alt: "WAV Media app overview", backgroundColor: "#02FEF6" },
      { src: hero2, alt: "WAV Media app detail", backgroundColor: "#FE02AE" },
    ],
  },
  sections: [
    {
      id: "wav-section-1",
      type: "fullBleed",
      media: { src: section1, alt: "WAV Media platform overview", kind: "image" },
    },
    {
      id: "wav-section-2",
      type: "textBlock",
      heading: "Building under pressure.",
      paragraphs: [
        "WAV required translating NAVER's live streaming ecosystem into a new experience tailored for western music audiences while simultaneously building a new brand, product language, and content strategy from the ground up.",
        "I led:",
        [{ kind: "bullets", color: "#02FEF6", items: [
          "Product and UX direction",
          "Branding and visual identity",
          "Cross functional collaboration",
          "Overseas development coordination",
          "QA and release cadence across iOS and Android",
        ]}],
      ],
      paragraphStyle: { color: "#d4d4d8" },
    },
    {
      id: "wav-section-2b",
      type: "fullBleed",
      media: { src: section2, alt: "WAV Media building under pressure", kind: "image" },
    },
    {
      id: "wav-section-3",
      type: "split",
      heading: "Scaling the platform.",
      paragraphs: [
        "As the platform evolved, the team redesigned core navigation, expanded content discovery, and improved artist channel management to support growing engagement and larger partnerships.",
        "The platform later supported high profile releases including Kanye West's Ye and Kids See Ghosts, generating traffic spikes large enough to overwhelm platform infrastructure during release windows.",
      ],
      ctas: [
        { label: "Pitchfork Article", href: "https://pitchfork.com/news/kanye-and-kid-cudi-to-live-stream-new-album-kids-see-ghosts-listening-party/", color: "#02FEF6" },
        { label: "Business Insider Article", href: "https://www.businessinsider.com/kanye-west-wav-music-app-ye-album-release-livestream-2018-6", color: "#02FEF6" },
      ],
      media: { src: section3, alt: "WAV Media scaling the platform", kind: "image" },
      mediaSide: "right",
    },
    {
      id: "wav-section-4",
      type: "split",
      heading: "Early lessons in systems and scale.",
      paragraphs: [
        "WAV was one of my earliest experiences leading product direction across distributed teams, fast moving timelines, and large scale entertainment partnerships.",
        "The project shaped how I think about product ecosystems, organizational alignment, and building digital experiences under real world operational pressure.",
      ],
      media: { src: section4, alt: "WAV early lessons", kind: "mp4" },
    },
  ],
};