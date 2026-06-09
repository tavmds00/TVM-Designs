import { CaseStudyPage } from "../components/case-study/CaseStudyPage";
import { mycareerCaseStudy } from "../data/caseStudies/mycareer";

export function MyCareerPage() {
  return <CaseStudyPage content={mycareerCaseStudy} />;
}