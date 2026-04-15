import { sectionText } from "../../data/meta";
import { SectionShell } from "../layout/SectionShell";
import { Card } from "../ui/Card";

export const WeaponsIntroSection = () => (
  <SectionShell
    id="armas"
    eyebrow={sectionText.weaponsAnchor.eyebrow}
    title={sectionText.weaponsAnchor.title}
    subtitle={sectionText.weaponsAnchor.subtitle}
  >
    <Card>
      <p className="text-sm leading-relaxed text-zinc-200">{sectionText.weaponsAnchor.body}</p>
    </Card>
  </SectionShell>
);
