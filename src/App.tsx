import { useEffect, useState } from "react";
import { fetchPortfolio } from "@/services/api";
import type { Portfolio } from "@/types";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function App() {
  const [data, setData] = useState<Portfolio | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [slow, setSlow] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setError(null);
    setSlow(false);
    // Free hosts put the backend to sleep; tell the visitor why the first load is slow.
    const slowTimer = setTimeout(() => setSlow(true), 4000);

    fetchPortfolio(controller.signal)
      .then(setData)
      .catch((e: unknown) => {
        if (controller.signal.aborted) return;
        setError(e instanceof Error ? e.message : "Could not reach the server.");
      })
      .finally(() => clearTimeout(slowTimer));

    return () => {
      controller.abort();
      clearTimeout(slowTimer);
    };
  }, [attempt]);

  if (error) {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-xl font-semibold text-white">Could not load the portfolio</h1>
          <p className="text-sm text-slate-400">{error}</p>
          <button
            onClick={() => setAttempt((a) => a + 1)}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center text-slate-400">
        <div className="space-y-2">
          <p>Loading…</p>
          {slow && <p className="text-xs text-slate-500">Waking up the server, this can take up to a minute.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar name={data.profile.name} />
      <main>
        <Hero profile={data.profile} />
        <Skills skills={data.skills} />
        <Experience items={data.experience} />
        <Projects items={data.projects} />
        <Education
          education={data.education}
          certifications={data.certifications}
          publications={data.publications}
        />
        <Contact profile={data.profile} />
      </main>
      <footer className="border-t border-line py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {data.profile.name}. Built with React &amp; Spring Boot.
      </footer>
    </div>
  );
}
