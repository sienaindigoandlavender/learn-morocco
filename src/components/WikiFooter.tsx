export function WikiFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-content mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-meta text-tertiary">
        <div>
          <p className="font-serif text-base text-ink mb-2">Slow Morocco Wiki</p>
          <p>
            A private knowledge wiki of concepts, places, people, and
            traditions across Morocco. Notes in progress, kept slow.
          </p>
        </div>
        <div>
          <p className="text-ink mb-2 font-mono uppercase tracking-wide">
            Browse
          </p>
          <ul className="space-y-1">
            <li>
              <a href="/wiki" className="hover:text-accent transition-colors">
                Index
              </a>
            </li>
            <li>
              <a
                href="/wiki/search"
                className="hover:text-accent transition-colors"
              >
                Search
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-ink mb-2 font-mono uppercase tracking-wide">
            About
          </p>
          <ul className="space-y-1">
            <li>Private. Single-author notes.</li>
            <li>Not indexed.</li>
          </ul>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 py-6 border-t border-border text-meta text-tertiary flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>© {year} — Private notes, all rights reserved.</p>
        <p className="font-mono uppercase tracking-wide">
          A <span className="text-ink">Slow Morocco</span> Project
        </p>
      </div>
    </footer>
  );
}
