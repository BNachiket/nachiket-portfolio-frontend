import Section from "@/components/layout/Section";
import type { SkillGroup } from "@/types";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <Section id="about" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl border border-line bg-panel p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md bg-ink px-2.5 py-1 text-xs text-slate-200 ring-1 ring-line">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
