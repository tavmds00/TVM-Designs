import { Link } from "react-router-dom";

export function CaseStudyBackLink() {
  return (
    <Link
      to="/portfolio"
      className="mb-2 inline-flex items-center gap-2 text-lg text-[var(--portfolio-text-muted)] transition-colors hover:text-white"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700">
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="shrink-0"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Back to Portfolio
    </Link>
  );
}