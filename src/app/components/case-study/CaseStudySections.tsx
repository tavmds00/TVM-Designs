import { S } from "../../styles/tokens";
import type {
  CaseStudySection,
  CaseStudyStatsGridSection,
  CaseStudyStepFlowSection,
  CaseStudyTwoColumnListSection,
  CaseStudyResultCardsSection,
  TextStyle,
} from "../../types/caseStudy";
import { CaseStudyVideoBlock } from "./CaseStudyVideoBlock";

type CaseStudySectionsProps = {
  sections: CaseStudySection[];
};

function ts(style?: TextStyle, defaults?: { fontSize?: string; color?: string; fontWeight?: string }) {
  return {
    fontSize:   style?.size ?? defaults?.fontSize,
    color:      style?.color ?? defaults?.color,
    fontWeight: style?.weight ?? defaults?.fontWeight,
  };
}

function FullBleedMedia({ src, alt, constrained }: { src: string; alt: string; constrained?: boolean }) {
  if (constrained) {
    return (
      <div className="w-full flex justify-center items-center overflow-hidden" style={{ maxHeight: "70vh" }}>
        <img src={src} alt={alt} className="w-full h-full object-contain" style={{ maxHeight: "70vh" }} loading="lazy" />
      </div>
    );
  }
  return <img src={src} alt={alt} className="block h-auto w-full object-contain" loading="lazy" />;
}

function CtaButton({ label, href, scrollTo, color }: { label: string; href?: string; scrollTo?: string; color?: string }) {
  const c = color ?? "#ffffff";
  const base = "inline-block rounded-full border px-6 py-2 text-base transition-colors mt-2";
  const style = { borderColor: c, color: c };
  const enter = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = c;
    (e.currentTarget as HTMLElement).style.color = "#000";
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
    (e.currentTarget as HTMLElement).style.color = c;
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style} onMouseEnter={enter} onMouseLeave={leave}>
        {label}
      </a>
    );
  }
  return (
    <button
      className={base}
      style={style}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => {
        if (!scrollTo) return;
        const el = document.getElementById(scrollTo);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
      }}
    >
      {label}
    </button>
  );
}

function StatsGrid({ section }: { section: CaseStudyStatsGridSection }) {
  return (
    <section className="bg-[#070707] py-24 px-6">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-2">
        {section.stats.map((stat, i) => {
          const highlight = stat.highlight?.trim();
          const hasHighlight = !!highlight && stat.label.includes(highlight);
          let before = stat.label;
          let after = "";
          if (hasHighlight && highlight) {
            const parts = stat.label.split(highlight);
            before = parts[0];
            after = parts.slice(1).join(highlight);
          }
          return (
            <div key={i} className="min-h-[220px] rounded-[28px] bg-[#171717] px-10 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] md:px-12 md:py-11">
              <div className="mb-5 leading-none tracking-tight" style={ts(section.valueStyle, { fontSize: "3rem", color: "#00cfe8", fontWeight: "600" })}>
                {stat.value}
              </div>
              <p className="max-w-[34rem] leading-[1.45]" style={ts(section.labelStyle, { ...S.body, color: "#ffffff" })}>
                {hasHighlight && highlight ? (
                  <>{before}<span style={{ color: section.highlightColor ?? "#00cfe8" }}>{highlight}</span>{after}</>
                ) : stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function StepFlow({ section }: { section: CaseStudyStepFlowSection }) {
  const accent = section.accentColor ?? "#00C9DD";
  return (
    <section className="w-full bg-black px-6 py-16 sm:px-10 lg:px-14">
      {section.heading && (
        <div className="mb-10 max-w-[64rem]">
          <h2 className="leading-tight" style={ts(section.headingStyle, S.heading)}>
            {section.heading}
          </h2>
          {section.subheading && (
            <p className="mt-4 max-w-3xl" style={ts(section.subheadingStyle, S.body)}>
              {section.subheading}
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-3 max-w-[120rem]">
        {section.steps.map((step, i) => {
          const isLast = i === section.steps.length - 1;
          return (
            <>
              <div key={step.number} className="flex-1 rounded-2xl bg-[#1a1a1a] p-9 min-h-[220px] min-w-0">
                <div
                  className="mb-4 flex items-center justify-center rounded-full"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#0d2e1a",
                    color: accent,
                    fontSize: section.numberSize ?? "1.2rem",
                    fontWeight: "700",
                  }}
                >
                  {step.number}
                </div>
                <p className="mb-2" style={{ fontSize: section.titleSize ?? S.heading.fontSize, fontWeight: S.heading.fontWeight, color: S.heading.color }}>
                  {step.title}
                </p>
                <p style={{ fontSize: section.descriptionSize ?? S.body.fontSize, color: S.body.color, fontWeight: S.body.fontWeight }}>
                  {step.description}
                </p>
              </div>
              {!isLast && (
                <div key={`arrow-${i}`} className="flex items-center justify-center shrink-0 sm:self-center" style={{ width: `${(section.arrowSize ?? 20) + 24}px` }}>
                  <svg width={section.arrowSize ?? 20} height={section.arrowSize ?? 20} viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </>
          );
        })}
        {section.image && (
          <div className="flex items-center justify-center shrink-0 pl-6">
            <img src={section.image} alt={section.imageAlt ?? ""} className="h-auto w-40 object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}

function TwoColumnList({ section }: { section: CaseStudyTwoColumnListSection }) {
  const accent = section.accentColor ?? "#00e5ff";
  return (
    <div className="bg-[#000000] py-20 px-6 sm:px-10 lg:px-14">
      {section.heading && (
        <h2 className="mb-14 leading-tight" style={ts(section.headingStyle, S.heading)}>
          {section.heading}
        </h2>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {[section.left, section.right].map((col, ci) => (
          <div key={ci}>
            <h3 className="mb-8 leading-tight" style={ts(section.columnTitleStyle, S.heading)}>
              {col.title}
            </h3>
            <ol className="flex flex-col gap-6">
              {col.items.map((item, ii) => (
                <li key={ii} className="flex gap-4 items-start">
                  {section.variant === "bullets" ? (
                    <span className="mt-2 text-lg leading-none shrink-0" style={{ color: accent }}>•</span>
                  ) : (
                    <span className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center mt-0.5" style={{ borderColor: accent, color: accent, fontSize: "1.2rem", fontWeight: "600" }}>
                      {ii + 1}
                    </span>
                  )}
                  <div>
                    <p style={ts(section.itemLabelStyle, { ...S.body, color: "#ffffff", fontWeight: "700" })}>{item.label}</p>
                    {item.description && (
                      <p className="mt-1" style={ts(section.itemDescriptionStyle, S.body)}>{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultCards({ section }: { section: CaseStudyResultCardsSection }) {
  const accent = section.accentColor ?? "#00e5ff";
  return (
    <div className="flex min-h-[600px] bg-[#0a0a0a]">
      <div className="flex flex-1 flex-col justify-center gap-5 px-8 py-20 sm:px-12 lg:px-16">
        {section.heading && (
          <h2 className="max-w-full leading-tight whitespace-pre-line" style={ts(section.headingStyle, S.heading)}>
            {section.heading}
          </h2>
        )}
        {section.subheading && (
          <p className="mb-2 max-w-l leading-relaxed whitespace-pre-line" style={ts(section.subheadingStyle, S.body)}>
            {section.subheading}
          </p>
        )}
        {section.cards.map((card, i) => (
          <div key={i} className="rounded-2xl bg-[#161616] p-10 w-full">
            <div className="mb-2 flex items-center gap-2">
              <svg width={section.arrowSize ?? 14} height={section.arrowSize ?? 14} viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={ts(section.categoryStyle, { fontSize: "0.75rem", color: "#a3a3a3", fontWeight: "600" })}>{card.category}</span>
            </div>
            <p className="mb-1" style={ts(section.metricStyle, { fontSize: "1.25rem", color: "#ffffff", fontWeight: "700" })}>{card.metric}</p>
            <p style={ts(section.descriptionStyle, S.body)}>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="w-[45%] shrink-0">
        <img src={section.image} alt={section.imageAlt ?? ""} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}


export function CaseStudySections({ sections }: CaseStudySectionsProps) {
  return (
    <div className="flex w-full flex-col">
      {sections.map((section, i) => {
        switch (section.type) {

          case "fullBleed":
            return (
              <section key={section.id} id={section.id} className="w-full">
                <FullBleedMedia
                  src={section.media.src}
                  alt={section.media.alt}
                  constrained={section.id === "tak-section-4"}
                />
              </section>
            );

          case "split": {
            const bulletDotColor = section.bulletStyle?.color ?? "#ffffff";
            const allCtas = section.ctas ?? (section.cta ? [section.cta] : []);
            return (
              <section key={section.id} id={section.id} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`${section.mediaSide === "left" ? "order-2" : "order-first"} flex items-center px-8 sm:px-12 lg:px-16 py-10 lg:py-16`}>
                    <div className="space-y-6">
                      <h2 className="leading-[1.15] tracking-[-0.02em]" style={ts(section.headingStyle, S.heading)}>
                        {section.heading}
                      </h2>
                      <div className="space-y-4">
                        {section.paragraphs.map((p, idx) => {
                          const text = typeof p === "string" ? p : p.text;
                          const bold = typeof p === "object" && p.bold;
                          return (
                            <p key={idx} className="whitespace-pre-line" style={bold ? S.aboutBold : ts(section.paragraphStyle, S.body)}>
                              {text}
                            </p>
                          );
                        })}
                        {section.bullets && (
                          <ul className="space-y-3">
                            {section.bullets.map((b, bi) => {
                              const text = typeof b === "string" ? b : b.text;
                              const bold = typeof b === "object" && b.bold;
                              return (
                                <li key={bi} className="flex gap-2">
                                  <span className="mt-1 text-xl shrink-0" style={{ color: bulletDotColor }}>•</span>
                                  <span style={bold ? S.aboutBold : S.bullet}>{text}</span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                      {allCtas.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {allCtas.map((cta) => (
                            <CtaButton key={cta.label} {...cta} />
                          ))}
                        </div>
                      )}
                      {section.audio && (
                        <div className="pt-4">
                          {section.audio.label && <p style={{ ...S.body, fontWeight: "600", color: "#ffffff" }} className="mb-1">{section.audio.label}</p>}
                          {section.audio.sublabel && <p style={{ ...S.body, color: "#a3a3a3" }} className="mb-3">{section.audio.sublabel}</p>}
                          <audio controls className="w-full" style={{ accentColor: section.audio.accentColor ?? "#C584FF" }}>
                            <source src={section.audio.src} type="audio/mp4" />
                          </audio>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`${section.mediaSide === "left" ? "order-first" : "order-2"} overflow-hidden`}>
                    {section.videoRight ? (
                      <video src={section.videoRight.src} autoPlay loop muted playsInline className="block h-full w-full object-contain" />
                    ) : (
                      <img src={section.media.src} alt={section.media.alt} className={`block h-full w-full object-contain ${section.id === "wav-section-4" ? "scale-[.8] origin-center" : ""}`} loading="lazy" />
                    )}
                  </div>
                </div>
              </section>
            );
          }

          case "dualImage":
            return (
              <section key={section.id} id={section.id} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                  {section.images.map((image: { src: string; alt: string }, index: number) => (
                    <img key={image.src} src={image.src} alt={image.alt} className={`block h-auto w-full max-w-none object-cover ${index === 0 ? "order-1" : "order-2"}`} loading="lazy" />
                  ))}
                </div>
              </section>
            );

          case "video": {
            const bulletDotColor = section.bulletStyle?.color ?? "#ffffff";
            return (
              <section key={section.id} className="w-full overflow-hidden">
                {section.heading ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="order-1 overflow-hidden" style={{ marginTop: "-80px" }}>
                      <CaseStudyVideoBlock coverSrc={section.coverSrc} videoSrc={section.videoSrc} alt={section.alt} />
                    </div>
                    <div className="order-2 flex items-center px-6 py-0 lg:px-8 lg:py-0">
                      <div className="space-y-6">
                        <h2 className="leading-[1.15] tracking-[-0.02em]" style={ts(section.headingStyle, S.heading)}>
                          {section.heading}
                        </h2>
                        <div className="space-y-4">
                          {section.bullets && (
                            <ul className="space-y-3">
                              {section.bullets.map((b, bi) => {
                                const text = typeof b === "string" ? b : b.text;
                                const bold = typeof b === "object" && b.bold;
                                return (
                                  <li key={bi} className="flex gap-2">
                                    <span className="mt-1 text-xl shrink-0" style={{ color: bulletDotColor }}>•</span>
                                    <span style={bold ? S.aboutBold : S.bullet}>{text}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {section.paragraphs?.map((p, pi) => {
                            const text = typeof p === "string" ? p : p.text;
                            const bold = typeof p === "object" && p.bold;
                            return (
                              <p key={pi} className="whitespace-pre-line" style={bold ? S.aboutBold : ts(section.paragraphStyle, S.body)}>{text}</p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <CaseStudyVideoBlock coverSrc={section.coverSrc} videoSrc={section.videoSrc} alt={section.alt} />
                )}
              </section>
            );
          }

          case "textBlock": {
            const bulletDotColor = section.bulletColor ?? "#ffffff";
            return (
              <section key={section.id} id={section.id} className="w-full px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-28">
                <div className="max-w-[90rem]">
                  <h2 className="mb-6 leading-[1.15] tracking-[-0.02em]" style={ts(section.headingStyle, S.heading)}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, idx: number) => {
                      if (Array.isArray(p) && p.length > 0 && p[0].kind === "bullets") {
                        const seg = p[0];
                        return (
                          <ul key={idx} className="space-y-2 mt-2">
                            {seg.items.map((b, bi) => {
                              const text = typeof b === "string" ? b : b.text;
                              const bold = typeof b === "object" && b.bold;
                              return (
                                <li key={bi} className="flex gap-3 items-start">
                                  <span className="mt-1 text-lg leading-none shrink-0" style={{ color: seg.color ?? bulletDotColor }}>•</span>
                                  <span style={bold ? S.aboutBold : S.bullet}>{text}</span>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      if (Array.isArray(p)) {
                        return (
                          <p key={idx} className="whitespace-pre-line" style={ts(section.paragraphStyle, S.body)}>
                            {p.map((seg, si: number) =>
                              seg.kind === "link" ? (
                                <a key={si} href={seg.href} target="_blank" rel="noopener noreferrer" style={{ color: seg.color ?? "#C584FF", textDecoration: "underline" }}>{seg.value}</a>
                              ) : seg.kind === "text" ? (
                                <span key={si} style={{ whiteSpace: "pre-line" }}>{seg.value}</span>
                              ) : null
                            )}
                          </p>
                        );
                      }
                      const text = typeof p === "string" ? p : (p as { text: string }).text;
                      const bold = typeof p === "object" && !Array.isArray(p) && (p as { bold?: boolean }).bold;
                      return (
                        <p key={idx} className="whitespace-pre-line" style={bold ? S.aboutBold : ts(section.paragraphStyle, S.body)}>
                          {text}
                        </p>
                      );
                    })}
                    {section.bullets && (
                      <ul className="space-y-2 mt-2">
                        {section.bullets.map((b, bi) => {
                          const text = typeof b === "string" ? b : b.text;
                          const bold = typeof b === "object" && b.bold;
                          return (
                            <li key={bi} className="flex gap-3 items-start">
                              <span className="mt-1 text-lg leading-none shrink-0" style={{ color: bulletDotColor }}>•</span>
                              <span style={bold ? S.aboutBold : S.bullet}>{text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            );
          }

          case "quote":
            return (
              <section key={section.id} id={section.id} className={`w-full bg-[#161616] px-6 sm:px-10 lg:px-14 ${section.paddingY ?? "py-16"}`}>
                <div className={`max-w-[80rem] ${section.align === "center" ? "mx-auto" : section.align === "right" ? "ml-auto" : ""}`}>
                  <div className="flex items-start gap-2">
                    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 w-8 mt-1 ${section.quoteLClass ?? ""}`}>
                      <path opacity={0.5} d="M12.528 0C5.184 5.184 0 13.68 0 23.04C0 30.672 4.608 35.136 9.936 35.136C14.976 35.136 18.72 31.104 18.72 26.352C18.72 21.6 15.408 18.144 11.088 18.144C10.224 18.144 9.072 18.288 8.784 18.432C9.504 13.536 14.112 7.776 18.72 4.896L12.528 0ZM37.296 0C30.096 5.184 24.912 13.68 24.912 23.04C24.912 30.672 29.52 35.136 34.848 35.136C39.744 35.136 43.632 31.104 43.632 26.352C43.632 21.6 40.176 18.144 35.856 18.144C34.992 18.144 33.984 18.288 33.696 18.432C34.416 13.536 38.88 7.776 43.488 4.896L37.296 0Z" fill={section.quoteColor ?? "#ffffff"} />
                    </svg>
                    <p className="whitespace-pre-line italic" style={ts(section.quoteStyle, { fontSize: "2.4rem", color: "#ffffff", fontWeight: "300" })}>
                      {section.quote}
                    </p>
                    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={`shrink-0 w-8 self-end mb-2 ${section.quoteRClass ?? ""}`}>
                      <path opacity={0.5} d="M31.1041 35.1367C38.4481 29.9527 43.6321 21.4567 43.6321 12.0967C43.6321 4.46472 39.0241 0.00071676 33.6961 0.000716294C28.6561 0.000715854 24.9121 4.03271 24.9121 8.78471C24.9121 13.5367 28.2241 16.9927 32.5441 16.9927C33.4081 16.9927 34.5601 16.8487 34.8481 16.7047C34.1281 21.6007 29.5201 27.3607 24.9121 30.2407L31.1041 35.1367ZM6.33608 35.1367C13.5361 29.9527 18.7201 21.4567 18.7201 12.0967C18.7201 4.46471 14.1121 0.000714582 8.78408 0.000714117C3.88808 0.000713689 8.28278e-05 4.03271 8.24124e-05 8.78471C8.1997e-05 13.5367 3.45608 16.9927 7.77608 16.9927C8.64008 16.9927 9.64808 16.8487 9.93608 16.7047C9.21608 21.6007 4.75208 27.3607 0.144082 30.2407L6.33608 35.1367Z" fill={section.quoteColor ?? "#ffffff"} />
                    </svg>
                  </div>
                  <p className={`italic ${section.attributionIndent ?? "pl-10"}`} style={ts(section.attributionStyle, { fontSize: "1.5rem", color: "#a3a3a3", fontWeight: "400" })}>
                    — {section.attribution}
                  </p>
                </div>
              </section>
            );

          case "statsGrid":
            return <StatsGrid key={i} section={section} />;

          case "stepFlow":
            return <StepFlow key={i} section={section} />;

          case "twoColumnList":
            return <TwoColumnList key={i} section={section} />;

          case "resultCards":
            return <ResultCards key={i} section={section} />;

          case "richText": {
            const alignClass =
              section.align === "center" ? "text-center" :
              section.align === "right" ? "text-right" : "text-left";
            const paddingClass = section.paddingY ?? "py-24";
            return (
              <section key={section.id} className={`w-full ${paddingClass} px-6 sm:px-10 lg:px-14`} style={{ background: section.background ?? "transparent" }}>
                <p className={`max-w-[64rem] leading-tight ${alignClass}`} style={{ fontSize: section.fontSize ?? "3rem" }}>
                  {section.segments.map((seg, si: number) => (
                    <span key={si}>
                      {seg.break && <br />}
                      <span style={{ color: seg.color ?? "#ffffff" }} className={[seg.bold ? "font-bold" : "", seg.italic ? "italic" : ""].filter(Boolean).join(" ")}>
                        {seg.text}
                      </span>
                    </span>
                  ))}
                </p>
              </section>
            );
          }

          case "audio":
            return (
              <section key={section.id} className="w-full px-8 sm:px-12 lg:px-16 py-8">
                <div className="max-w-[48rem]">
                  {section.label && <p style={S.body} className="font-semibold mb-1">{section.label}</p>}
                  {section.sublabel && <p style={{ ...S.body, color: "#a3a3a3" }} className="mb-3">{section.sublabel}</p>}
                  <audio controls className="w-full" style={{ accentColor: "#C584FF" }}>
                    <source src={section.src} type="audio/mp4" />
                  </audio>
                </div>
              </section>
            );

          case "splitMedia": {
            const right = section.right;
            return (
              <section key={section.id} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start relative">
                  <div style={{ isolation: "isolate", position: "relative", zIndex: 2 }}>
                    <img src={section.left.src} alt={section.left.alt} className="block w-full h-auto object-contain" loading="lazy" />
                  </div>
                  <div style={{ isolation: "isolate", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100%", alignSelf: "stretch" }}>
                    {right.kind === "video" ? (
                      <div style={{ width: "100%", overflow: "visible", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <video
                          src={right.src}
                          autoPlay={right.autoPlay ?? true}
                          loop={right.loop ?? true}
                          muted
                          playsInline
                          style={{
                            display: "block",
                            width: "100%",
                            height: "auto",
                            transform: right.scale ? `scale(${right.scale})` : undefined,
                            transformOrigin: right.objectPosition ?? "center center",
                            margin: "0 auto",
                          }}
                        />
                      </div>
                    ) : (
                      <img src={right.src} alt={right.alt} className="block h-full w-full object-contain" loading="lazy" />
                    )}
                  </div>
                </div>
              </section>
            );
          }

          case "gifOverlay": {
            return (
              <section key={section.id} id={section.id} className="w-full">
                <div className="px-8 sm:px-12 lg:px-16 py-10 lg:py-16 bg-black">
                  <div className="space-y-6 max-w-[52rem]">
                    {section.overlaySvg && (
                      <img src={section.overlaySvg} alt="" aria-hidden="true" className="mb-2 w-28 opacity-20" />
                    )}
                    <h2 className="leading-[1.15] tracking-[-0.02em]" style={ts(section.headingStyle, S.heading)}>
                      {section.heading}
                    </h2>
                    <div className="space-y-4">
                      {section.paragraphs.map((p, idx) => {
                        const text = typeof p === "string" ? p : p.text;
                        const bold = typeof p === "object" && p.bold;
                        return (
                          <p key={idx} className="whitespace-pre-line" style={bold ? S.aboutBold : ts(section.paragraphStyle, S.body)}>
                            {text}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-hidden" style={{ height: "550px" }}>
                  <img
                    src={section.gif.src}
                    alt={section.gif.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </section>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}