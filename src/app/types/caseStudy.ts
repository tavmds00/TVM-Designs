export type CaseStudyMetaItem = {
  label: string;
  value: string;
};

export type CaseStudyHeroImage = {
  src: string;
  alt: string;
  backgroundColor?: string;
};

// ── Shared text style control ─────────────────────────────────────────────
export type TextStyle = {
  size?: string;
  color?: string;
  weight?: string;
};

// ── Inline paragraph segments (text + links) ──────────────────────────────
export type ParagraphSegment =
  | { kind: "text"; value: string }
  | { kind: "link"; value: string; href: string; color?: string }
  | { kind: "bullets"; items: (string | { text: string; bold?: boolean })[]; color?: string; size?: string };

export type CaseStudySplitMediaSection = CaseStudySectionBase & {
  type: "splitMedia";
  left: { src: string; alt: string; kind: "image" };
  right: { src: string; alt: string; kind: "video" | "image"; autoPlay?: boolean; loop?: boolean; objectFit?: "contain" | "cover" | "fill"; objectPosition?: string; scale?: number };
};

export type CaseStudySectionBase = {
  id: string;
};

export type CaseStudyFullBleedSection = CaseStudySectionBase & {
  type: "fullBleed";
  media: { src: string; alt: string; kind: "image" | "gif" | "mp4" };
};

export type CaseStudySplitSection = CaseStudySectionBase & {
  type: "split";
  heading: string;
  headingStyle?: TextStyle;
  paragraphs: (string | { text: string; bold?: boolean })[];
  paragraphStyle?: TextStyle;
  bullets?: (string | { text: string; bold?: boolean })[];
  bulletStyle?: TextStyle;
  /** Single CTA — kept for back-compat */
  cta?: { label: string; href?: string; scrollTo?: string; color?: string };
  /** Multiple CTAs — renders as a flex row of buttons */
  ctas?: { label: string; href?: string; scrollTo?: string; color?: string }[];
  media: { src: string; alt: string; kind: "image" | "gif" | "mp4" };
  mediaSide?: "left" | "right";
  audio?: { src: string; label?: string; sublabel?: string; accentColor?: string };
  videoRight?: { src: string; alt: string };
};

export type CaseStudyDualImageSection = CaseStudySectionBase & {
  type: "dualImage";
  images: { src: string; alt: string }[];
};

export type CaseStudyVideoSection = CaseStudySectionBase & {
  type: "video";
  coverSrc: string;
  videoSrc: string;
  alt: string;
  heading?: string;
  headingStyle?: TextStyle;
  paragraphs?: (string | { text: string; bold?: boolean })[];
  paragraphStyle?: TextStyle;
  bullets?: (string | { text: string; bold?: boolean })[];
  bulletStyle?: TextStyle;
};

export type CaseStudyTextBlockSection = CaseStudySectionBase & {
  type: "textBlock";
  heading: string;
  headingStyle?: TextStyle;
  paragraphs: (string | ParagraphSegment[])[];
  paragraphStyle?: TextStyle;
  bullets?: (string | { text: string; bold?: boolean })[];
  bulletColor?: string;
};

export type CaseStudyQuoteSection = CaseStudySectionBase & {
  type: "quote";
  quote: string;
  quoteStyle?: TextStyle;
  attribution: string;
  attributionStyle?: TextStyle;
  attributionIndent?: string;
  quoteLClass?: string;
  quoteRClass?: string;
  quoteColor?: string;
  paddingY?: string;
  align?: "left" | "center" | "right";
};

export type CaseStudyStatsGridSection = CaseStudySectionBase & {
  type: "statsGrid";
  valueStyle?: TextStyle;
  labelStyle?: TextStyle;
  highlightColor?: string;
  stats: {
    value: string;
    label: string;
    highlight?: string;
  }[];
};

export type CaseStudyStepFlowSection = CaseStudySectionBase & {
  type: "stepFlow";
  heading?: string;
  headingStyle?: TextStyle;
  subheading?: string;
  subheadingStyle?: TextStyle;
  accentColor?: string;
  arrowSize?: number;
  numberSize?: string;
  titleSize?: string;
  descriptionSize?: string;
  image?: string;
  imageAlt?: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
};

export type CaseStudyTwoColumnListSection = CaseStudySectionBase & {
  type: "twoColumnList";
  heading?: string;
  headingStyle?: TextStyle;
  accentColor?: string;
  variant?: "numbered" | "bullets";
  columnTitleStyle?: TextStyle;
  itemLabelStyle?: TextStyle;
  itemDescriptionStyle?: TextStyle;
  left: {
    title: string;
    items: { label: string; description?: string }[];
  };
  right: {
    title: string;
    items: { label: string; description?: string }[];
  };
};

export type CaseStudyResultCardsSection = CaseStudySectionBase & {
  type: "resultCards";
  heading?: string;
  headingStyle?: TextStyle;
  subheading?: string;
  subheadingStyle?: TextStyle;
  accentColor?: string;
  arrowSize?: number;
  categoryStyle?: TextStyle;
  metricStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  cards: {
    category: string;
    metric: string;
    description: string;
  }[];
  image: string;
  imageAlt?: string;
};

export type CaseStudyAudioSection = CaseStudySectionBase & {
  type: "audio";
  src: string;
  label?: string;
  sublabel?: string;
};

export type CaseStudyRichTextSection = CaseStudySectionBase & {
  type: "richText";
  segments: {
    text: string;
    color?: string;
    bold?: boolean;
    italic?: boolean;
    break?: boolean;
  }[];
  fontSize?: string;
  align?: "left" | "center" | "right";
  background?: string;
  paddingY?: string;
};

/** Full-bleed GIF with a copy block on the left and an SVG overlay on the left side of the gif */
export type CaseStudyGifOverlaySection = CaseStudySectionBase & {
  type: "gifOverlay";
  heading: string;
  headingStyle?: TextStyle;
  paragraphs: (string | { text: string; bold?: boolean })[];
  paragraphStyle?: TextStyle;
  gif: { src: string; alt: string };
  overlaySvg?: string;
};

export type CaseStudySection =
  | CaseStudyFullBleedSection
  | CaseStudySplitSection
  | CaseStudySplitMediaSection
  | CaseStudyDualImageSection
  | CaseStudyVideoSection
  | CaseStudyTextBlockSection
  | CaseStudyQuoteSection
  | CaseStudyStatsGridSection
  | CaseStudyStepFlowSection
  | CaseStudyTwoColumnListSection
  | CaseStudyResultCardsSection
  | CaseStudyAudioSection
  | CaseStudyRichTextSection
  | CaseStudyGifOverlaySection;

export type CaseStudyContent = {
  slug: string;
  scrollTitle: string;
  scrollTitleColor?: string;
  hero: {
    subtitle: string;
    subtitle2?: string;
    aboutHeading?: string;
    aboutParagraphs: { text: string; bold?: boolean }[];
    meta: CaseStudyMetaItem[];
    tools?: (string | { text: string; bold?: boolean })[];
    ctas?: { label: string; scrollTo?: string; href?: string; color?: string }[];
    heroImages: CaseStudyHeroImage[];
  };
  sections: CaseStudySection[];
};