import { sectionText } from "../../data/meta";
import type { RankingBuild } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { CompareTable } from "../ui/CompareTable";

interface CompareSectionProps {
  builds: RankingBuild[];
  onOpenBuild: (build: RankingBuild) => void;
}

export const CompareSection = ({ builds, onOpenBuild }: CompareSectionProps) => (
  <SectionShell
    id="comparador"
    eyebrow={sectionText.comparador.eyebrow}
    title={sectionText.comparador.title}
    subtitle={sectionText.comparador.subtitle}
  >
    <CompareTable builds={builds} onSelectBuild={onOpenBuild} />
  </SectionShell>
);
