import { CaseStudyPage } from "../components/case-study/CaseStudyPage";
import { wavCaseStudy } from "../data/caseStudies/wav";

export function WavPage() {
  return <CaseStudyPage content={wavCaseStudy} />;
}