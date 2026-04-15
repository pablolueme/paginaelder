interface FooterProps {
  title: string;
  description: string;
  note: string;
}

export const Footer = ({ title, description, note }: FooterProps) => (
  <footer className="mt-16 border-t border-zinc-800 bg-zinc-950/50">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-zinc-200 lg:px-6">
      <p className="title-font text-rune">{title}</p>
      <p>{description}</p>
      <p className="text-zinc-400">{note}</p>
    </div>
  </footer>
);
