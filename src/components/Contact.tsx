import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-zinc-200/70 bg-zinc-100/50 py-20 md:py-28 dark:border-zinc-800/70 dark:bg-zinc-900/30"
    >
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-zinc-900 md:text-5xl dark:text-zinc-50">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              great together.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed">
            I'm currently open to full-time roles and freelance projects.
            Whether you have a question, an opportunity or just want to talk
            Laravel — my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <Mail size={17} />
              Say Hello
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-5 py-3.5 font-mono text-sm text-zinc-600 transition-all hover:-translate-y-0.5 hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {copied ? (
                <Check size={16} className="text-emerald-500" />
              ) : (
                <Copy size={16} />
              )}
              {copied ? "Copied!" : profile.email}
            </button>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 flex items-center justify-center gap-2">
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
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-emerald-400/40 dark:hover:text-emerald-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="mt-8 inline-flex items-center gap-1 text-xs text-zinc-400">
            Open to remote & on-site opportunities
            <ArrowUpRight size={13} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// adding my git cofig commit
