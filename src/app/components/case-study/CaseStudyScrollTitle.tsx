import { useEffect, useMemo, useState } from "react";

type CaseStudyScrollTitleProps = {
  title: string;
  color?: string;
};

export function CaseStudyScrollTitle({ title, color = "#0095FF" }: CaseStudyScrollTitleProps) {
  const [style, setStyle] = useState({ x: 0, opacity: 1 });

  const marqueeText = useMemo(() => {
    const segment = `${title}\u00a0\u00a0\u00a0\u00a0`;
    return Array.from({ length: 24 }, () => segment).join("");
  }, [title]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const fadeEnd = 480;
      const driftEnd = 640;
      setStyle({
        x: -Math.min(y * 0.9, driftEnd) + 64,
        opacity: Math.max(1 - y / fadeEnd, 0),
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="relative mb-8 w-screen max-w-none overflow-hidden sm:mb-10"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        zIndex: 0,
      }}
    >
      <div
        className="overflow-visible"
        style={{
          transform: `translateX(${style.x}px)`,
          opacity: style.opacity,
          willChange: "transform, opacity",
        }}
      >
        <p
          className="m-0 whitespace-nowrap text-[18vw] font-bold italic leading-[1.3] tracking-tight sm:text-[14vw] lg:text-[11vw]"
          style={{ color }}
          aria-label={title}
        >
          <span aria-hidden="true">{marqueeText}</span>
        </p>
      </div>
    </div>
  );
}
