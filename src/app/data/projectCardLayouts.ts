import type { Project } from "./projects";

export type ProjectSlug = Project["slug"];

type TextLayer = {
  className: string;
  color: string;
  fontSize?: "20" | "16";
};

type ImageLayer = {
  className: string;
};

export type CardLayout = {
  topLabel: TextLayer;
  stat: TextLayer;
  logo?: ImageLayer;
  screen?: ImageLayer;
  mockup?: ImageLayer;
};

// Font sizes use vw-relative clamp so they scale with the card instead of
// staying fixed px when the card is wider/narrower than the original 391px design.
const dmSansTop = "absolute font-semibold leading-normal text-[clamp(0.875rem,4.2cqw,1.25rem)]";
const dmSansStat = "absolute font-semibold leading-normal text-[clamp(0.75rem,3.4cqw,1rem)]";

/**
 * Figma node 3780:2823 — per-card media layer positions.
 * All positions are percentage-based (inset / %) so they scale fluidly with
 * the card's actual rendered width instead of breaking at fixed px offsets.
 * The MediaArea container uses `aspect-[391/244]` so % positions always match
 * the original Figma proportions regardless of card width.
 */
export const cardLayouts: Record<ProjectSlug, CardLayout> = {
  itemeyes: {
    logo: { className: "absolute inset-[10.66%_48.59%_74.18%_8.44%]" },
    topLabel: {
      className: `${dmSansTop} inset-[29.51%_49.87%_38.52%_8.7%]`,
      color: "#ffffff",
    },
    stat: {
      className: `${dmSansStat} inset-[66.8%_44.25%_1.23%_8.7%]`,
      color: "#ffc700",
    },
    mockup: {
      className: "absolute top-[4.5%] left-[57.5%] h-[108.6%] w-[38.6%] object-contain object-top",
    },
  },
  mycareer: {
    topLabel: {
      className: `${dmSansTop} inset-[6.56%_12.28%_84.02%_9.72%] whitespace-pre-wrap`,
      color: "#ffffff",
    },
    stat: {
      className: `${dmSansStat} inset-[19.67%_31.2%_48.36%_9.72%]`,
      color: "#ffd84e",
    },
    logo: { className: "absolute inset-[19.67%_17.9%_65.16%_69.57%] overflow-hidden" },
    screen: {
      className: "absolute left-[9.72%] top-[43%] h-[59.4%] w-[74.2%] object-contain object-left",
    },
  },
  krui: {
    topLabel: {
      className: `${dmSansTop} left-[7.9%] top-[8.6%] max-w-[68.3%]`,
      color: "#ffffff",
    },
    stat: {
      className: `${dmSansStat} left-[7.9%] top-[23.4%] max-w-[77.7%]`,
      color: "#00ff1e",
    },
    logo: {
      className: "absolute left-[78%] top-[1.6%] h-[29.9%] w-[17.4%] object-contain object-right",
    },
    screen: {
      className:
        "absolute left-[7.4%] top-[39.8%] h-[60.2%] w-[84.9%] rounded-[5px] object-cover object-top",
    },
  },
  usaa: {
    topLabel: {
      className: `${dmSansTop} inset-[37.22%_50.38%_41.47%_6.14%] leading-normal`,
      color: "#ffffff",
    },
    stat: {
      className: `${dmSansStat} inset-[61.4%_53.71%_6.63%_6.14%]`,
      color: "#ffd84e",
    },
    logo: {
      className: "absolute left-[6.1%] top-[13.9%] h-[18.4%] w-[41.4%] object-contain object-left",
    },
    screen: {
      className:
        "absolute left-[53.7%] top-[13.1%] h-[77.9%] w-[38.1%] rounded-[7px] border border-[rgba(26,54,93,0.37)] object-cover object-top",
    },
  },
  tak: {
    topLabel: {
      className: `${dmSansTop} left-[8.2%] top-[9.8%] max-w-[89%]`,
      color: "#ffffff",
    },
    stat: {
      className: `${dmSansStat} left-[8.2%] top-[24.6%] max-w-[93.9%]`,
      color: "#00ca61",
    },
    logo: {
      className: "absolute left-[7.4%] top-[41.4%] h-[44.3%] w-[26.3%] object-contain",
    },
    screen: {
      className: "absolute left-[37.6%] top-[38.5%] h-[52.5%] w-[57.5%] object-contain object-left",
    },
  },
  a11y: {
    topLabel: {
      className: `${dmSansTop} inset-[13.11%_33.15%_65.57%_6.14%]`,
      color: "#000000",
    },
    stat: {
      className: `${dmSansStat} inset-[36.48%_45.48%_31.56%_6.14%]`,
      color: "#660aa4",
    },
    logo: {
      className: "absolute right-[6%] top-[8%] h-[33.6%] w-[21.7%] object-contain object-right",
    },
    screen: {
      className:
        "absolute left-[6.1%] top-[58.2%] h-[41.8%] w-[57.8%] border border-[#dadada] object-cover object-top",
    },
  },
  wav: {
    topLabel: {
      className: `${dmSansTop} left-[39.4%] top-[9%] max-w-[53.7%]`,
      color: "#09090b",
    },
    stat: {
      className: `${dmSansStat} left-[10.2%] top-[34.4%] max-w-[83.1%]`,
      color: "#fe02ae",
    },
    logo: {
      className: "absolute left-[10.2%] top-[9.4%] h-[20.9%] w-[24.8%] object-contain",
    },
    screen: {
      className:
        "absolute left-[10.2%] top-[50%] h-[46.7%] w-[76.2%] rounded-[5px] object-cover object-top",
    },
  },
};