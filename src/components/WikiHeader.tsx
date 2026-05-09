import Link from "next/link";
import { logout } from "@/app/wiki/login/actions";

export function WikiHeader() {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/wiki" className="font-serif text-lg text-stone-900">
          Slow Morocco Wiki
        </Link>
        <nav className="flex items-center gap-4 text-sm text-stone-600">
          <Link href="/wiki" className="hover:text-stone-900">Home</Link>
          <Link href="/wiki/search" className="hover:text-stone-900">Search</Link>
          <form action={logout}>
            <button type="submit" className="text-stone-500 hover:text-stone-900">
              Sign out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
