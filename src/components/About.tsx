import { Database, MonitorSmartphone, ServerCog, Workflow } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs } from "../data/portfolio";

const pillars = [
  {
    icon: ServerCog,
    title: "Backend Architecture",
    text: "Laravel APIs with clean separation — Controllers, Services, Form Requests, Jobs and queues that scale with the product.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Relational schemas in MySQL & PostgreSQL with proper constraints, migrations, seeders and Eloquent relationships.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Frontend",
    text: "React + TypeScript interfaces styled with Tailwind CSS and shadcn/ui, wired to real Laravel APIs.",
  },
  {
    icon: Workflow,
    title: "Auth & Security",
    text: "Sanctum token authentication, Spatie roles & permissions, validation-first thinking and activity logging.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Backend depth, <span className="text-emerald-600 dark:text-emerald-400">frontend craft</span>
            </>
          }
          subtitle="A developer who cares about why things work — not just making them work."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {aboutParagraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-zinc-950/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-400/40 dark:hover:shadow-black/30">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500/20 dark:text-emerald-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
