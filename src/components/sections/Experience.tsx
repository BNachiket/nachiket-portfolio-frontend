import Section from "@/components/layout/Section";
import type { Experience as Exp } from "@/types";

export default function Experience({ items }: { items: Exp[] }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-8 border-l border-line pl-6">
        {items.map((e) => (
          <li key={e.role + e.company} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold text-white">
                {e.role} <span className="text-accent">· {e.company}</span>
              </h3>
              <span className="font-mono text-xs text-slate-400">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-slate-600">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
