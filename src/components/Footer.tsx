import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/70 py-8 dark:border-zinc-800/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Built with React, TypeScript & Tailwind CSS
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-emerald-400/40 dark:hover:text-emerald-400"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
