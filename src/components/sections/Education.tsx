import Section from "@/components/layout/Section";
import type { Education as Edu } from "@/types";

export default function Education({
  education,
  certifications,
  publications,
}: {
  education: Edu[];
  certifications: string[];
  publications: string[];
}) {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.degree} className="rounded-xl border border-line bg-panel p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-white">{e.degree}</h3>
                <span className="font-mono text-xs text-slate-400">{e.year}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{e.institution}</p>
              <p className="mt-1 text-sm text-accent">{e.score}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Certifications</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {certifications.map((c) => (
                <li key={c}>✔ {c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Publications</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {publications.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
