import { Code2, Database, ServerCog, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const icons = [ServerCog, Code2, Database, Wrench];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-zinc-200/70 bg-zinc-100/50 py-20 md:py-28 dark:border-zinc-800/70 dark:bg-zinc-900/30"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Tools I build{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                with
              </span>
            </>
          }
          subtitle="A practical stack centered on Laravel on the backend and React + TypeScript on the frontend."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[i] ?? Wrench;
            return (
              <Reveal key={group.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30">
                  <div className="mb-5 flex items-center gap-3.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {group.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {group.blurb}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-zinc-700/70 dark:bg-zinc-800/60 dark:text-zinc-300 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// adding my git cofig commit
