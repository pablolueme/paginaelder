import { useState, type ReactNode } from "react";

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2" role="tablist" aria-label="Detalles de la ficha">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              activeTab === tab.id
                ? "border-rune bg-rune/20 text-rune"
                : "border-zinc-600 bg-zinc-800/55 text-zinc-100 hover:border-zinc-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="rounded-xl border border-zinc-700/80 bg-zinc-900/60 p-4 text-sm text-zinc-200">
        {active?.content}
      </div>
    </div>
  );
};
