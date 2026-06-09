import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CaseStudyBackLink } from "../components/case-study/CaseStudyBackLink";
import { CaseStudySections } from "../components/case-study/CaseStudySections";
import { takCaseStudy } from "../data/caseStudies/tak";
import { S } from "../styles/tokens";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

const accent = "#00CA61";

const overviewParagraphs = [
  "There was no shared implementation layer connecting those standards to the products teams were actually building. Every plugin team interpreted the system differently, creating inconsistent experiences across the ecosystem and forcing designers and engineers to repeatedly solve the same problems.",
  "When operators rely on software in the field, inconsistency isn't just a UX issue.",
  "It's operational friction.",
];

export function TakPage() {
  const { hero, sections } = takCaseStudy;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-32 px-8 sm:px-12 lg:px-16">
        <CaseStudyBackLink />

        {/* Two-column hero */}
        <div className="max-w-[90rem] pt-8 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">

          {/* LEFT — title + about + tools */}
          <div>
            <h1
              className="leading-tight mb-4"
              style={{ ...S.heroTitle, color: accent }}
            >
              {hero.subtitle}
            </h1>

            {hero.subtitle2 && (
              <p className="leading-snug mb-8 font-semibold" style={{ ...S.aboutBold }}>
                {hero.subtitle2}
              </p>
            )}

            <div className="space-y-5 mb-10">
              {hero.aboutParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed" style={p.bold ? S.aboutBold : S.aboutBody}>
                  {p.text}
                </p>
              ))}
            </div>

            {/* Tools */}
            {hero.tools && (
              <div className="flex flex-wrap gap-2">
                {hero.tools.map((tool, ti) => {
                  const label = typeof tool === "string" ? tool : tool.text;
                  return (
                    <span
                      key={ti}
                      className="rounded-full border px-3 py-1.5"
                      style={{ ...S.toolChip, borderColor: accent, color: accent }}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT — overview + meta + CTAs */}
          <div className="flex flex-col justify-start lg:pt-4">
            {/* Overview label */}
            <p className="uppercase tracking-[0.15em] mb-5" style={S.metaLabel}>
              Overview
            </p>

            <div className="space-y-5 mb-12">
              {overviewParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed" style={{ ...S.aboutBody, color: "#d4d4d8" }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-16 gap-y-6 mb-10">
              {hero.meta.map((item) => (
                <div key={item.label}>
                  <h3 className="mb-1 uppercase tracking-[0.12em]" style={S.metaLabel}>
                    {item.label}
                  </h3>
                  <p className="whitespace-pre-line" style={S.metaValue}>{item.value}</p>
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
                        className="rounded-full border px-8 py-3 transition-colors"
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
                      className="rounded-full border px-8 py-3 transition-colors"
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
        </div>
      </main>

      <CaseStudySections sections={sections} />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}