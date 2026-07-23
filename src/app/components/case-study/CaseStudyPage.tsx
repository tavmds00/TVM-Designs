import { Header } from "../Header";
import { Footer } from "../Footer";
import type { CaseStudyContent } from "../../types/caseStudy";
import { CaseStudyBackLink } from "./CaseStudyBackLink";
import { CaseStudyScrollTitle } from "./CaseStudyScrollTitle";
import { CaseStudyHero } from "./CaseStudyHero";
import { CaseStudySections } from "./CaseStudySections";
import { ScrollToTopButton } from "../ScrollToTopButton";

type CaseStudyPageProps = {
  content: CaseStudyContent;
};

export function CaseStudyPage({ content }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 sm:pt-28 lg:pt-32">
        <div className="px-8 sm:px-12 lg:px-16">
          <CaseStudyBackLink />
        </div>
        <div className="sticky top-24 z-0">
          <CaseStudyScrollTitle title={content.scrollTitle} color={content.scrollTitleColor} />
        </div>

        <div className="relative z-10 pb-16 mt-[-1px]" style={{ backgroundColor: "rgba(0,0,0,0.20)" }}>
          <CaseStudyHero hero={content.hero} />
        </div>
        <div className="relative z-10 bg-black">
          <CaseStudySections sections={content.sections} />
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}