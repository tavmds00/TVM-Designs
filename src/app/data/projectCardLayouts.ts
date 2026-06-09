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

const dmSansTop = "text-[20px] font-semibold leading-normal";
const dmSansStat = "text-[16px] font-semibold leading-normal";

/** Figma node 3780:2823 — per-card media layer positions */
export const cardLayouts: Record<ProjectSlug, CardLayout> = {
  itemeyes: {
    logo: { className: "absolute inset-[10.66%_48.59%_74.18%_8.44%]" },
    topLabel: {
      className: `absolute inset-[29.51%_49.87%_38.52%_8.7%] ${dmSansTop}`,
      color: "#ffffff",
    },
    stat: {
      className: `absolute inset-[66.8%_44.25%_1.23%_8.7%] ${dmSansStat}`,
      color: "#ffc700",
    },
    mockup: { className: "absolute top-[11px] left-[225px] h-[265px] w-[151px] object-contain object-top" },
  },
  mycareer: {
    topLabel: {
      className: `absolute inset-[6.56%_12.28%_84.02%_9.72%] ${dmSansTop} whitespace-pre-wrap`,
      color: "#ffffff",
    },
    stat: {
      className: `absolute inset-[19.67%_31.2%_48.36%_9.72%] ${dmSansStat}`,
      color: "#ffd84e",
    },
    logo: { className: "absolute inset-[19.67%_17.9%_65.16%_69.57%] overflow-hidden" },
    screen: { className: "absolute left-[38px] top-[105px] h-[145px] w-[290px] object-contain object-left" },
  },
  krui: {
    topLabel: {
      className: `absolute left-[31px] top-[21px] max-w-[267px] ${dmSansTop}`,
      color: "#ffffff",
    },
    stat: {
      className: `absolute left-[31px] top-[57px] max-w-[304px] ${dmSansStat}`,
      color: "#00ff1e",
    },
    logo: { className: "absolute left-[305px] top-[4px] h-[73px] w-[68px] object-contain object-right" },
    screen: {
      className: "absolute left-[29px] top-[97px] h-[147px] w-[332px] rounded-[5px] object-cover object-top",
    },
  },
  usaa: {
    topLabel: {
      className: `absolute inset-[37.22%_50.38%_41.47%_6.14%] ${dmSansTop} leading-normal`,
      color: "#ffffff",
    },
    stat: {
      className: `absolute inset-[61.4%_53.71%_6.63%_6.14%] ${dmSansStat}`,
      color: "#ffd84e",
    },
    logo: { className: "absolute left-[24px] top-[34px] h-[45px] w-[162px] object-contain object-left" },
    screen: {
      className:
        "absolute left-[210px] top-[32px] h-[190px] w-[149px] rounded-[7px] border border-[rgba(26,54,93,0.37)] object-cover object-top",
    },
  },
  tak: {
    topLabel: {
      className: `absolute left-[32px] top-[24px] max-w-[348px] ${dmSansTop}`,
      color: "#ffffff",
    },
    stat: {
      className: `absolute left-[32px] top-[60px] max-w-[367px] ${dmSansStat}`,
      color: "#00ca61",
    },
    logo: { className: "absolute left-[29px] top-[101px] h-[108px] w-[103px] object-contain" },
    screen: { className: "absolute left-[147px] top-[94px] h-[128px] w-[225px] object-contain object-left" },
  },
  a11y: {
    topLabel: {
      className: `absolute inset-[13.11%_33.15%_65.57%_6.14%] ${dmSansTop}`,
      color: "#000000",
    },
    stat: {
      className: `absolute inset-[36.48%_45.48%_31.56%_6.14%] ${dmSansStat}`,
      color: "#660aa4",
    },
    logo: { className: "absolute right-[6%] top-[8%] h-[82px] w-[85px] object-contain object-right" },
    screen: {
      className:
        "absolute left-[24px] top-[142px] h-[102px] w-[226px] border border-[#dadada] object-cover object-top",
    },
  },
  wav: {
    topLabel: {
      className: `absolute left-[154px] top-[22px] max-w-[210px] ${dmSansTop}`,
      color: "#09090b",
    },
    stat: {
      className: `absolute left-[40px] top-[84px] max-w-[325px] text-[20px] font-semibold leading-normal`,
      color: "#fe02ae",
    },
    logo: { className: "absolute left-[40px] top-[23px] h-[51px] w-[97px] object-contain" },
    screen: {
      className: "absolute left-[40px] top-[122px] h-[114px] w-[298px] rounded-[5px] object-cover object-top",
    },
  },
};
