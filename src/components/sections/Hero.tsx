import type { Profile } from "@/types";

export default function Hero({ profile }: { profile: Profile }) {
  return (
    <div id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-6 pb-8 pt-16 md:grid-cols-[1fr_auto]">
      <div>
        <p className="mb-3 font-mono text-sm text-accent">Hello, I am</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
          {profile.title} · Java &amp; Spring Boot
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-300">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
          >
            View projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-accent hover:text-accent"
          >
            {profile.email}
          </a>
        </div>
      </div>
      <div className="mx-auto md:mx-0">
        <div className="rounded-full bg-gradient-to-br from-accent to-accent-2 p-1">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-56 w-56 rounded-full object-cover object-top sm:h-64 sm:w-64"
          />
        </div>
      </div>
    </div>
  );
}
