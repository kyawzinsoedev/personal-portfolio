import { useState } from "react";
import { ArrowRight, Code2, Mail, MapPin, ServerCog } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";

const chips = ["Laravel", "PHP", "React", "TypeScript", "MySQL", "PostgreSQL", "Tailwind CSS"];

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute -top-48 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-sky-500/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(0 0 0 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-14 px-6 py-16 lg:flex-row lg:justify-between lg:py-0">
        <div className="max-w-2xl animate-fade-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/25 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <p className="mb-3 font-mono text-sm text-emerald-600 dark:text-emerald-400">
            Hi, my name is
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-50">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-500 sm:text-3xl dark:text-zinc-400">
            {profile.role}.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-pretty lg:mx-0">
            {profile.headline}
          </p>

          <div className="mt-7 inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            <MapPin size={15} className="text-emerald-600 dark:text-emerald-400" />
            {profile.location}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition-all hover:-translate-y-0.5 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
            >
              Get In Touch
            </a>
            <div className="ml-1 flex items-center gap-1">
            {[
              { icon: GithubIcon, href: profile.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-400"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 w-full max-w-xs shrink-0 sm:max-w-sm lg:mt-0 lg:w-auto lg:max-w-md">
          <div className="animate-fade-up relative [animation-delay:250ms]">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/25 via-transparent to-sky-500/20 blur-2xl" />

            <figure className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
              {!imgError ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  onError={() => setImgError(true)}
                  className="aspect-square w-full bg-zinc-950 object-contain"
                />
              ) : (
                <div className="flex aspect-square w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10">
                  <span className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-500/15 text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {profile.initials}
                  </span>
                  <p className="px-8 text-center font-mono text-xs leading-relaxed text-zinc-400 dark:text-zinc-500">
                    Drop your photo at
                    <br />
                    public/profile.jpg
                  </p>
                </div>
              )}

              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12">
                <div>
                  <p className="font-semibold text-white">{profile.name}</p>
                  <p className="text-sm text-zinc-300">{profile.role}</p>
                </div>
              </figcaption>
            </figure>

            <div className="animate-fade-up absolute -left-6 top-10 [animation-delay:600ms] hidden items-center gap-2.5 rounded-xl border border-zinc-200 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur sm:flex dark:border-zinc-700 dark:bg-zinc-900/90">
              <ServerCog size={18} className="text-red-500" />
              <span className="font-mono text-xs font-semibold">Laravel API</span>
            </div>
            <div className="animate-fade-up absolute -right-6 bottom-24 [animation-delay:750ms] hidden items-center gap-2.5 rounded-xl border border-zinc-200 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur sm:flex dark:border-zinc-700 dark:bg-zinc-900/90">
              <Code2 size={18} className="text-sky-500" />
              <span className="font-mono text-xs font-semibold">React + TS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
