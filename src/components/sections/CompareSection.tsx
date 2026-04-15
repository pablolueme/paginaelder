import type { BuildEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { CompareTable } from "../ui/CompareTable";

interface CompareSectionProps {
  builds: BuildEntry[];
  onOpenBuild: (build: BuildEntry) => void;
}

export const CompareSection = ({ builds, onOpenBuild }: CompareSectionProps) => (
  <SectionShell
    id="comparador"
    title="Comparador"
    subtitle="Ordena la tabla por cada métrica para decidir qué configuración rinde mejor según tu objetivo."
  >
    <CompareTable builds={builds} onSelectBuild={onOpenBuild} />
  </SectionShell>
);
