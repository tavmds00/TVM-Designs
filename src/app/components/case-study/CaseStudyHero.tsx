import { useLayoutEffect, useRef, useState } from "react";
import type { CaseStudyContent } from "../../types/caseStudy";
import { S } from "../../styles/tokens";

type CaseStudyHeroProps = { hero: CaseStudyContent["hero"] };

function getPinTop(): number {
  if (window.matchMedia("(min-width: 1024px)").matches) return 128;
  if (window.matchMedia("(min-width: 640px)").matches) return 112;
  return 96;
}

export function CaseStudyHero({ hero }: CaseStudyHeroProps) {
  const { subtitle, subtitle2, aboutHeading, aboutParagraphs, meta, tools, ctas, heroImages } = hero;
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [pinStyle, setPinStyle] = useState<React.CSSProperties>({});

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const left = leftRef.current;
    if (!wrap || !left) return;

    const update = () => {
      if (window.innerWidth < 1024) {
        setPinStyle({});
        return;
      }

      const pinTop = getPinTop();
      const leftHeight = left.offsetHeight;
      const { top, bottom, left: x, width } = wrap.getBoundingClientRect();

      if (top > pinTop) {
        setPinStyle({});
      } else if (bottom - pinTop <= leftHeight) {
        setPinStyle({ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 });
      } else {
        setPinStyle({ position: "fixed", top: pinTop, left: x, width, zIndex: 10 });
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(update);
    ro.observe(wrap);
    ro.observe(left);
    const rightCol = wrap.parentElement?.lastElementChild;
    if (rightCol instanceof HTMLElement) ro.observe(rightCol);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const ctaEls = (ctas ?? []).map((cta) => {
    const ctaColor = cta.color ?? "#0073E5";
    const ctaStyle = { ...S.cta, borderColor: ctaColor, color: ctaColor };
    const enter = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.backgroundColor = ctaColor; e.currentTarget.style.color = "#000"; };
    const leave = (e: React.MouseEvent<HTMLElement>) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = ctaColor; };
    if (cta.href) {
      return <a key={cta.label} href={cta.href} target="_blank" rel="noopener noreferrer" className="rounded-full border px-6 py-2 transition-colors" style={ctaStyle} onMouseEnter={enter} onMouseLeave={leave}>{cta.label}</a>;
    }
    const click = () => { const el = document.getElementById(cta.scrollTo!); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" }); };
    return <button key={cta.label} onClick={click} className="rounded-full border px-6 py-2 transition-colors" style={ctaStyle} onMouseEnter={enter} onMouseLeave={leave}>{cta.label}</button>;
  });

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start">
        <div ref={wrapRef} className="lg:self-stretch lg:relative">
          <div ref={leftRef} className="px-8 sm:px-12 lg:px-16 pb-16" style={pinStyle}>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="leading-snug whitespace-pre-line" style={S.subtitle}>{subtitle}</p>
                {subtitle2 && <p className="leading-relaxed" style={S.subtitle2}>{subtitle2}</p>}
              </div>
              <div className="space-y-3">
                <h2 className="uppercase tracking-[0.12em]" style={S.aboutLabel}>{aboutHeading ?? "About"}</h2>
                <div className="space-y-3">
                  {aboutParagraphs.map((p) => <p key={p.text.slice(0, 32)} className="leading-relaxed whitespace-pre-line" style={p.bold ? S.aboutBold : S.aboutBody}>{p.text}</p>)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {meta.map((item) => (
                  <div key={item.label}>
                    <h3 className="mb-1 uppercase tracking-[0.12em]" style={S.metaLabel}>{item.label}</h3>
                    <p className="whitespace-pre-line leading-snug" style={S.metaValue}>{item.value}</p>
                  </div>
                ))}
              </div>
              {ctaEls.length > 0 && <div className="flex flex-wrap gap-3">{ctaEls}</div>}
              {tools && tools.length > 0 && (
                <div>
                  <h3 className="mb-3 uppercase tracking-[0.12em]" style={S.metaLabel}>Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, ti) => {
                      const label = typeof tool === "string" ? tool : tool.text;
                      return <span key={ti} className="rounded-full bg-[#171717] px-3 py-1.5 ring-1 ring-neutral-800" style={S.toolChip}>{label}</span>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-black">
          {heroImages.map((image, index) => (
            <div key={image.src} className="w-full overflow-hidden flex-shrink-0 aspect-[4/3]" style={image.backgroundColor ? { backgroundColor: image.backgroundColor } : undefined}>
              <img src={image.src} alt={image.alt} className={index === 2 ? "h-full w-full object-cover" : "h-auto w-full object-contain p-10"} loading={index === 0 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
