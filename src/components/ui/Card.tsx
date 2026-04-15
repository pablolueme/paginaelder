import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => (
  <article
    className={`premium-card p-5 transition duration-300 hover:-translate-y-1 hover:border-rune/70 hover:shadow-glow ${className}`}
  >
    {children}
  </article>
);
