// ── Global typography tokens — imported by CaseStudyHero.tsx and A11y.tsx ──
export const TOKENS = {
  subtitle:   { size: "2.5rem",  weight: "600", color: "#ffffff" },
  subtitle2:  { size: "1.8rem",  weight: "400", color: "#d4d4d8" },  // ← add this
  aboutLabel: { size: "0.75rem", weight: "600", color: "#737373" },
  aboutBody:  { size: "1.1rem",  weight: "400", color: "#ffffff" },
  aboutBold:  { size: "1.1rem",  weight: "600", color: "#ffffff" },
  metaLabel:  { size: "0.75rem", weight: "600", color: "#737373" },
  metaValue:  { size: "1rem",    weight: "400", color: "#ffffff" },
  toolChip:   { size: "0.875rem",weight: "400", color: "#d4d4d8" },
  ctaSize:    "1rem",
} as const;