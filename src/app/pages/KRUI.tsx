import { CaseStudyPage } from "../components/case-study/CaseStudyPage";
import { kruiCaseStudy } from "../data/caseStudies/KRUI";

export function KRUIPage() {
  return <CaseStudyPage content={kruiCaseStudy} />;
}