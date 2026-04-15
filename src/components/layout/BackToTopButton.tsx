import { useEffect, useState } from "react";
import { uiText } from "../../data/meta";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-rune/70 bg-zinc-900/90 p-3 text-rune shadow-glow transition hover:-translate-y-1"
      aria-label={uiText.backToTop}
      title={uiText.backToTop}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="m4 14 1.4 1.4L11 9.8V21h2V9.8l5.6 5.6L20 14l-8-8z" />
      </svg>
    </button>
  );
};
