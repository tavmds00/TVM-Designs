// ── Single source of truth for ALL typography across every page ──────────
// Change a value here → it updates everywhere. Never hardcode sizes in TSX.

export const TOKENS = {
  // Hero titles
  heroTitle:  { size: "clamp(2.5rem, 5vw, 4.5rem)", weight: "700", color: "#ffffff" },
  subtitle:   { size: "3rem",    weight: "600", color: "#ffffff" },
  subtitle2:  { size: "1.8rem",    weight: "400", color: "#d4d4d8" },

  // Hero body copy
  aboutLabel: { size: "0.75rem",   weight: "600", color: "#737373" },
  aboutBody:  { size: "1.4rem",    weight: "400", color: "#ffffff" },
  aboutBold:  { size: "1.4rem",    weight: "600", color: "#ffffff" },

  // Meta / chips
  metaLabel:  { size: "0.75rem",   weight: "600", color: "#737373" },
  metaValue:  { size: "1rem",      weight: "400", color: "#ffffff" },
  toolChip:   { size: "0.875rem",  weight: "400", color: "#d4d4d8" },
  ctaSize:    "1rem",

  // ── Section tokens — these control ALL sections on ALL pages ────────────
  heading:    { size: "2.5rem",    weight: "700", color: "#ffffff" },
  body:       { size: "1.3rem", weight: "400", color: "#ffffff" },
  bullet:     { size: "1.3rem", weight: "500", color: "#ffffff" },
} as const;

// Convenience style objects — spread directly onto style={{}}
export const S = {
  heroTitle:  { fontSize: TOKENS.heroTitle.size,  fontWeight: TOKENS.heroTitle.weight,  color: TOKENS.heroTitle.color  },
  subtitle:   { fontSize: TOKENS.subtitle.size,   fontWeight: TOKENS.subtitle.weight,   color: TOKENS.subtitle.color   },
  subtitle2:  { fontSize: TOKENS.subtitle2.size,  fontWeight: TOKENS.subtitle2.weight,  color: TOKENS.subtitle2.color  },
  aboutLabel: { fontSize: TOKENS.aboutLabel.size, fontWeight: TOKENS.aboutLabel.weight, color: TOKENS.aboutLabel.color },
  aboutBody:  { fontSize: TOKENS.aboutBody.size,  fontWeight: TOKENS.aboutBody.weight,  color: TOKENS.aboutBody.color  },
  aboutBold:  { fontSize: TOKENS.aboutBold.size,  fontWeight: TOKENS.aboutBold.weight,  color: TOKENS.aboutBold.color  },
  metaLabel:  { fontSize: TOKENS.metaLabel.size,  fontWeight: TOKENS.metaLabel.weight,  color: TOKENS.metaLabel.color  },
  metaValue:  { fontSize: TOKENS.metaValue.size,  fontWeight: TOKENS.metaValue.weight,  color: TOKENS.metaValue.color  },
  toolChip:   { fontSize: TOKENS.toolChip.size,   fontWeight: TOKENS.toolChip.weight,   color: TOKENS.toolChip.color   },
  cta:        { fontSize: TOKENS.ctaSize },
  heading:    { fontSize: TOKENS.heading.size,    fontWeight: TOKENS.heading.weight,    color: TOKENS.heading.color    },
  body:       { fontSize: TOKENS.body.size,       fontWeight: TOKENS.body.weight,       color: TOKENS.body.color       },
  bullet:     { fontSize: TOKENS.bullet.size,     fontWeight: TOKENS.bullet.weight,     color: TOKENS.bullet.color     },
} as const;