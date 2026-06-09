import type { CaseStudyContent } from "../../types/caseStudy";
import hero1 from "../../../portfolio-pages/mycareer/hero1.png";
import hero2 from "../../../portfolio-pages/mycareer/hero2.png";
import hero3 from "../../../portfolio-pages/mycareer/hero3.png";
import section1Gif from "../../../portfolio-pages/mycareer/section2.gif";
import section2Image from "../../../portfolio-pages/mycareer/section1.png";
import section3Image from "../../../portfolio-pages/mycareer/section3.png";
import section4Gif from "../../../portfolio-pages/mycareer/section4.gif";
import section5Image from "../../../portfolio-pages/mycareer/section5.png";
import section6Phone from "../../../portfolio-pages/mycareer/section6-phone.png";
import section6Photo from "../../../portfolio-pages/mycareer/section6-photo.png";
import section7Cover from "../../../portfolio-pages/mycareer/section7cover.png";
import section7Video from "../../../portfolio-pages/mycareer/section7.mp4";
import section8Image from "../../../portfolio-pages/mycareer/section8.png";


/** MyCareer case study — Figma node 3768:5211 */
export const mycareerCaseStudy: CaseStudyContent = {
  slug: "mycareer",
  scrollTitle: "MyCareer",
  hero: {
    subtitle: "MyCareer",
    aboutHeading: "About",
    aboutParagraphs: [
      { text: "I transformed a chaotic, high-volume, wait-in-line career event into a scheduled, data-informed experience.The outcomes created more meaningful conversations for marines and their career advisors. This system now supports thousands of people across multiple sites and at least 12,000+ interviews completed across 15+ events to date.", bold: false },
      { text: "64 days from kickoff to software in production. 178 days to full user adoption.  75% increase in turnout across West Coast events (3,205 vs 1,832) \n81% increase in interviews completed (2,385 vs 1,316).", bold: false },
    ],
    meta: [
      { label: "My Role", value: "Founding Product Designer\n0-1 Application" },
      { label: "Timeline", value: "July '23 - March '24" },
    ],
    ctas: [{ label: "View Case Study", scrollTo: "section-1a" }],
    tools: ["Figma", "Miro", "UserTesting", "React", "Design System"],
    heroImages: [
      { src: hero1, alt: "MyCareer app overview on mobile devices", backgroundColor: "#E5008F" },
      { src: hero2, alt: "MyCareer queue and monitor workflow screens", backgroundColor: "#0073E5" },
      { src: hero3, alt: "Marines using MyCareer at a career fair event" },
    ],
  },
  sections: [
    {
      id: "section-1a",
      type: "textBlock",
      heading: "Everyone loves the DMV... right?",
      paragraphs: [
        "Imagine the DMV circa 2001. No ticket numbers. Paper forms everywhere. Long lines with no end in sight. People cutting. Names being shouted across a crowded room. And the person behind the desk having absolutely no idea why you're there or how long you'll take. That was the reality of Marine Corps career events, where thousands of attendees made life-changing career decisions while standing in line with a clipboard.",
        "Nobody knew who was coming.\nNobody knew how long they'd wait.\nAnd nobody was measuring any of it.",
      ],
    },
    {
      id: "section-1b",
      type: "fullBleed",
      media: { src: section2Image, alt: "photos of marine waiting", kind: "image" },
    },
    {
      id: "section-2",
      type: "split",
      heading: "From the ground floor.",
      paragraphs: [
        "Three groups. Three different problems. One broken process.",
        "So I traveled to bases across the country, ran every interview myself, and watched it all fall apart in real time. What nobody had documented yet: Attendees were hesitant to approach higher-ranking Career Advisors and ask for information. The app had to do that work for them.",
      ],
      bulletStyle: { color: "#0073E5" },
      bullets: [
        "Attendees needed clearer guidance on their options so they could make informed career decisions, not just show up and hope for the best.",
        "Career Advisors needed context before each conversation so they could spend less time figuring out who someone was and more time actually helping them.",
        "Event Coordinators needed a way to run the whole operation without juggling paper, people, and chaos all at once.",
      ],
      media: { src: section1Gif, alt: "MyCareer onboarding and queue flow animation", kind: "gif" },
    },
    {
      id: "section-3",
      type: "textBlock",
      heading: "What if your phone just told you when to show up?",
      paragraphs: [
        "Attendees scan a QR code, register in under 3 minutes on their phone, and get texted when it's their turn. Every detail they submit becomes a Warm Start for their Career Advisor. No formalities. Straight into the conversation that matters. Career Advisors see everything they need before the conversation even starts. Event Coordinators run the whole show from one dashboard.",
        "No clipboards. No shouting. No guessing.",
      ],
    },
    {
      id: "section-3b",
      type: "fullBleed",
      media: { src: section3Image, alt: "MyCareer interface layouts for event day", kind: "image" },
    },
    {
      id: "section-4",
      type: "split",
      heading: "What worked & what didnt.",
      paragraphs: [
        "In the field, everything breaks. Here's what we fixed.",
        "I hadn't designed for Event Coordinators. This event showed us they need to see Advisors waitlist and manage event information. I built their user persona into the entire workflow.",
      ],
      bulletStyle: { color: "#0073E5" },
      bullets: [
        "Single scrolling waitlist from lofi prototype failed on testing. Redesigned it into a dual pane view, active queue on one side, late arrivals on the other.",
        "Career Advisors had no way to skip late arrivals so they marked them as completed. That broke everything. I designed and built a waitlist function to solve this queue problem.",
        "QR codes weren't visible enough. Got them on every venue TV screen.",
      ],
      media: { src: section4Gif, alt: "MyCareer interaction prototype animation", kind: "gif" },
    },
    {
      id: "section-4b",
      type: "quote",
      quoteColor: "#0073E5",
      quoteLClass: "mt-2",
      quoteRClass: "self-start mt-2",
      quote: "This should have been around 2 years ago.",
      attribution: "Attendee",
    },
    {
      id: "section-crashed",
      type: "split",
      heading: "We crashed the server. That's a win?",
      paragraphs: [
        "From a single pilot at Camp Pendleton with 254 attendees and two live fixes shipped mid-event, to Camp Lejeune, Fort Sill, MCAS Yuma, MCAS Miramar, and overseas. Five locations across the country in under six months. Then leadership made it mandatory nationwide.",
        "The first East Coast event at Camp Lejeune end with...",
        "Then the server went down. Demand was so high the system couldn't keep up. Everyone fell back to pen and paper to finish the day. Even with the outage the data held.",
      ],
      bulletStyle: { color: "#0073E5" },
      bullets: [
        "2,280 attendees showed up versus 1,594 the year before. Thats a 30% increase.",
        "2,006 out of 2,280 got to meet their Career Advisor, an 88% completion rate.",
      ],
      media: { src: section5Image, alt: "MyCareer crash event data", kind: "image" },
    },
    {
      id: "section-5",
      type: "textBlock",
      heading: "The missing piece.",
      paragraphs: [
        "Event Coordinators were always in the room. We just hadn't designed for them yet. After watching their workflow in person and interviewing them on site it was clear they were the connective tissue between Marines and Monitors. So I built their entire workflow without touching what already existed. Real time waitlist access, Marine profiles on demand, and Google Maps editing for when venues changed at the last minute. On a military base, last minute is the default.",
      ],
    },
    {
      id: "section-5b",
      type: "dualImage",
      images: [
        { src: section6Phone, alt: "MyCareer mobile app on device" },
        { src: section6Photo, alt: "Marines at a career fair event" },
      ],
    },
    {
      id: "section-5c",
      type: "quote",
      quoteColor: "#0073E5",
      quoteLClass: "mt-3",
      quoteRClass: "self-start mt-18",
      quote: "Last year they waited hours.\nNow they wait as little as 10 minutes.",
      attribution: "Event Coordinator",
    },
    {
      id: "section-6",
      type: "video",
      coverSrc: section7Cover,
      videoSrc: section7Video,
      alt: "MyCareer product walkthrough",
      heading: "The West Coast had already told the same story.",
      bulletStyle: { color: "#0073E5" },
      bullets: [
        "2,684 attendees versus 1,832 the year before, a 47% increase.",
        "1,825 out of 2,684 interviews completed, a 68% completion rate.",
        "Median wait time 49 minutes. Median interview time 6 minutes.",
      ],
      paragraphs: [
        "From a single pilot at Camp Pendleton with 254 attendees and two live fixes shipped mid-event, to a nationally mandated platform running coast to coast and overseas.",
        "MyCareer was able to have immediate impact on retention, give leadership valuable metrics to track events, and provide attendees and advisors meaningful conversations for career guidance.",
      ],
    },
    {
      id: "section-7",
      type: "split",
      heading: "If I had more time...",
      paragraphs: [
        "The data is already there. The infrastructure already exists. The one thing missing is a scheduling feature that lets attendees see when their Career Advisor is available before they ever walk through the door. Shorter interviews. Less crowding. More prepared advisors on both sides of the table. The product solved the chaos of the day. This would solve problems proactively the day before.",
        "Special Thanks to MyCareer Team:",
        "Engineers: SSGgt Alex Waldron, SSgt Max Laswell, MSgt Justin McLinn, Ian Bautista, Michael Lavrisha, and Emily Davis",
        "PM: Wesely Chiu",
        "Stakeholders: MSgt Darrick Proffit, and all of MMEA.",
      ],
      media: { src: section8Image, alt: "MyCareer scheduling feature concept", kind: "image" },
    },
  ],
};