import { ArrowUpRight, Check, Folder, QrCode } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { featuredProject, projects } from "../data/portfolio";

const flow = ["Scan QR", "Browse Menu", "Order", "Track Live"];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Featured <span className="text-emerald-600 dark:text-emerald-400">work</span>
            </>
          }
          subtitle="Real systems built end-to-end — from database schema to deployed interface."
        />

        <Reveal>
          <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/40">
            <div className="grid lg:grid-cols-5">
              <div className="p-7 md:p-10 lg:col-span-3">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Featured Project
                  </span>
                  <span className="text-xs text-zinc-400">Full-Stack · In Development</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {featuredProject.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {featuredProject.highlights?.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span className="text-zinc-600 dark:text-zinc-400">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700/70 dark:bg-zinc-800/60 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center border-t border-zinc-200 bg-gradient-to-br from-emerald-500/5 via-transparent to-sky-500/5 p-10 lg:col-span-2 lg:border-t-0 lg:border-l dark:border-zinc-800">
                <div className="flex flex-col items-center gap-8">
                  <div className="rounded-2xl border-2 border-dashed border-zinc-300 p-8 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 dark:border-zinc-700">
                    <QrCode size={120} strokeWidth={1.1} className="text-zinc-800 dark:text-zinc-200" />
                  </div>
                  <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
                    {flow.map((step, i) => (
                      <li key={step} className="flex items-center gap-2">
                        {i > 0 && (
                          <span aria-hidden className="h-px w-4 bg-zinc-300 dark:bg-zinc-600" />
                        )}
                        <span className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700/70 dark:bg-zinc-800 dark:text-zinc-300">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i + 1) * 100}>
              <a
                href={project.link ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-400/40 dark:hover:shadow-black/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Folder size={26} className="text-emerald-600 dark:text-emerald-400" />
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-emerald-700 dark:text-zinc-100 dark:group-hover:text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
