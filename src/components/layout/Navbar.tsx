const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-lg font-bold text-white">
          <span className="text-accent">{initials}</span>
          <span className="text-slate-500">.</span>
        </a>
        <ul className="hidden gap-6 text-sm text-slate-300 sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
