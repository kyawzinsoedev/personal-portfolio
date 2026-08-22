import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 max-w-2xl md:mb-16">
        <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-base leading-relaxed">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
