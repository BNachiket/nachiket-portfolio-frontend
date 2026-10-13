import Section from "@/components/layout/Section";
import type { Project } from "@/types";

export default function Projects({ items }: { items: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-accent/60"
          >
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <p className="mb-4 text-sm text-accent">{p.subtitle}</p>
            <ul className="mb-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-600">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-ink px-2.5 py-1 font-mono text-[11px] text-slate-300 ring-1 ring-line">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
