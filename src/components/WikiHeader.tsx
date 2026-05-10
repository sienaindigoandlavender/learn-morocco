import Link from "next/link";
import { logout } from "@/app/wiki/login/actions";

const navItems = [
  { href: "/wiki", label: "Index" },
  { href: "/wiki/tags", label: "Tags" },
  { href: "/wiki/search", label: "Search" }
];

export function WikiHeader() {
  return (
    <header className="border-b border-border">
      <div className="max-w-content mx-auto px-6 py-6 flex items-center justify-between gap-6">
        <Link href="/wiki" className="font-serif text-xl tracking-tight text-ink">
          Slow Morocco Wiki
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-meta uppercase tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <form action={logout}>
              <button
                type="submit"
                className="font-mono text-meta uppercase tracking-wide text-secondary hover:text-accent transition-colors"
              >
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </div>
    </header>
  );
}
