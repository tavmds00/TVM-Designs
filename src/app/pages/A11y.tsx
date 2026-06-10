import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CaseStudyBackLink } from "../components/case-study/CaseStudyBackLink";
import { CaseStudySections } from "../components/case-study/CaseStudySections";
import { a11yCaseStudy } from "../data/caseStudies/a11y";
import { S } from "../styles/tokens";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

export function A11yPage() {
  const { hero, sections } = a11yCaseStudy;
  const accent = "#C584FF";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-32 px-8 sm:px-12 lg:px-16">
        <CaseStudyBackLink />

        <div className="max-w-[70rem] pt-8 pb-20">

          {/* Title */}
          <h1
            className="leading-tight whitespace-pre-line mb-4"
            style={{ ...S.heroTitle, color: accent }}
          >
            {hero.subtitle}
          </h1>

          {hero.subtitle2 && (
            <p className="leading-snug whitespace-pre-line mb-8" style={S.subtitle2}>
              {hero.subtitle2}
            </p>
          )}

          {/* About paragraphs */}
          <div className="space-y-5 mb-10">
            {hero.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="leading-relaxed"
                style={p.bold ? S.aboutBold : S.aboutBody}
              >
                {p.text}
              </p>
            ))}
          </div>

          {/* Tools */}
          {hero.tools && (
            <div className="mb-8">
              <h3 className="uppercase tracking-[0.12em] mb-3" style={S.metaLabel}>
                Tools &amp; Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {hero.tools.map((tool, ti) => {
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

          {/* Meta */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10">
            {hero.meta.map((item) => (
              <div key={item.label}>
                <h3 className="mb-1 uppercase tracking-[0.12em]" style={S.metaLabel}>
                  {item.label}
                </h3>
                <p style={S.metaValue}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          {hero.ctas && (
            <div className="flex flex-wrap gap-3">
              {hero.ctas.map((cta) => {
                const ctaColor = cta.color ?? accent;
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

        </div>
      </main>

      <CaseStudySections sections={sections} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}