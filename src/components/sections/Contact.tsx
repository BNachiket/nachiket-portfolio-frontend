import { useState, type FormEvent } from "react";
import Section from "@/components/layout/Section";
import { sendContact } from "@/services/api";
import type { Profile } from "@/types";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; msg: string };

export default function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ kind: "sending" });
    try {
      await sendContact(form);
      setForm({ name: "", email: "", message: "" });
      setStatus({ kind: "ok" });
    } catch (err) {
      setStatus({ kind: "error", msg: err instanceof Error ? err.message : "Something went wrong." });
    }
  };

  const field =
    "w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-accent";

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-3 text-sm text-slate-300">
          <p>Interested in working together or have a question? Send me a message.</p>
          <p>
            <span className="text-slate-500">Email · </span>
            <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <p>
            <span className="text-slate-500">Phone · </span>
            <a className="text-accent hover:underline" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </p>
          {profile.linkedin && (
            <p>
              <span className="text-slate-500">LinkedIn · </span>
              <a className="text-accent hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">
                Profile
              </a>
            </p>
          )}
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className={field}
            placeholder="Your name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className={field}
            type="email"
            placeholder="Your email"
            required
            maxLength={150}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            className={field + " min-h-36 resize-y"}
            placeholder="Your message (at least 10 characters)"
            required
            minLength={10}
            maxLength={2000}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110 disabled:opacity-60"
          >
            {status.kind === "sending" ? "Sending…" : "Send message"}
          </button>
          {status.kind === "ok" && <p className="text-sm text-emerald-400">Thanks! Your message was sent.</p>}
          {status.kind === "error" && <p className="text-sm text-rose-400">{status.msg}</p>}
        </form>
      </div>
    </Section>
  );
}
