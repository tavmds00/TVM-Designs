import { CaseStudyPage } from "../components/case-study/CaseStudyPage";
import { usaaCaseStudy } from "../data/caseStudies/usaa";

export function UsaaPage() {
  return <CaseStudyPage content={usaaCaseStudy} />;
}