import type { CaseStudyContent } from "../../types/caseStudy";
import { S } from "../../styles/tokens";

type CaseStudyHeroProps = {
  hero: CaseStudyContent["hero"];
};

export function CaseStudyHero({ hero }: CaseStudyHeroProps) {
  const { subtitle, subtitle2, aboutHeading, aboutParagraphs, meta, tools, ctas, heroImages } = hero;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">

        {/* ── Left sticky column ── */}
        <div className="px-8 sm:px-12 lg:px-16 lg:sticky lg:top-0 pb-16" style={{ height: "891px" }}>
          <div className="space-y-8">

            {/* Title */}
            <div className="space-y-3">
              <p className="leading-snug whitespace-pre-line" style={S.subtitle}>
                {subtitle}
              </p>
              {subtitle2 && (
                <p className="leading-relaxed" style={S.subtitle2}>
                  {subtitle2}
                </p>
              )}
            </div>

            {/* About */}
            <div className="space-y-3">
              <h2 className="uppercase tracking-[0.12em]" style={S.aboutLabel}>
                {aboutHeading ?? "About"}
              </h2>
              <div className="space-y-3">
                {aboutParagraphs.map((p) => (
                  <p
                    key={p.text.slice(0, 32)}
                    className="leading-relaxed whitespace-pre-line"
                    style={p.bold ? S.aboutBold : S.aboutBody}
                  >
                    {p.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {meta.map((item) => (
                <div key={item.label}>
                  <h3 className="mb-1 uppercase tracking-[0.12em]" style={S.metaLabel}>
                    {item.label}
                  </h3>
                  <p className="whitespace-pre-line leading-snug" style={S.metaValue}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            {ctas && ctas.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => {
                  const ctaColor = cta.color ?? "#0073E5";
                  const ctaStyle = { ...S.cta, borderColor: ctaColor, color: ctaColor };
                  if (cta.href) {
                    return (
                      <a
                        key={cta.label}
                        href={cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border px-6 py-2 transition-colors"
                        style={ctaStyle}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ctaColor; e.currentTarget.style.color = "#000"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = ctaColor; }}
                      >
                        {cta.label}
                      </a>
                    );
                  }
                  return (
                    <button
                      key={cta.label}
                      onClick={() => {
                      const el = document.getElementById(cta.scrollTo!);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 96;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                      className="rounded-full border px-6 py-2 transition-colors"
                      style={ctaStyle}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ctaColor; e.currentTarget.style.color = "#000"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = ctaColor; }}
                    >
                      {cta.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tools */}
            {tools && tools.length > 0 && (
              <div>
                <h3 className="mb-3 uppercase tracking-[0.12em]" style={S.metaLabel}>
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, ti) => {
                    const label = typeof tool === "string" ? tool : tool.text;
                    return (
                      <span
                        key={ti}
                        className="rounded-full bg-[#171717] px-3 py-1.5 ring-1 ring-neutral-800"
                        style={S.toolChip}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ── Right image column ── */}
        <div className="flex flex-col bg-black">
          {heroImages.map((image: CaseStudyContent["hero"]["heroImages"][number], index: number) => (
            <div
              key={image.src}
              className="w-full overflow-hidden flex-shrink-0 aspect-[4/3]"
              style={image.backgroundColor ? { backgroundColor: image.backgroundColor } : undefined}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={index === 2 ? "h-full w-full object-cover" : "h-auto w-full object-contain p-10"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}