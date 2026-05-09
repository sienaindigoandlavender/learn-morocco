import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { SearchBar } from "@/components/SearchBar";
import { EntryTypeBadge } from "@/components/Badges";
import { searchEntries, snippet } from "@/lib/wiki/content";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q ?? "").trim();
  const results = q ? await searchEntries(q) : [];

  return (
    <WikiShell>
      <h1 className="font-serif text-3xl text-stone-900">Search</h1>
      <div className="mt-4">
        <SearchBar defaultValue={q} />
      </div>

      {q && (
        <p className="mt-4 text-sm text-stone-500">
          {results.length === 0
            ? `No matches for “${q}”.`
            : `${results.length} match${results.length === 1 ? "" : "es"} for “${q}”.`}
        </p>
      )}

      <ul className="mt-6 space-y-6">
        {results.map((e) => (
          <li key={e.slug}>
            <div className="flex items-center gap-2">
              <Link href={`/wiki/${e.slug}`} className="font-serif text-lg text-stone-900 hover:underline">
                {e.title}
              </Link>
              <EntryTypeBadge type={e.entryType} />
            </div>
            <p className="mt-1 text-sm text-stone-600">{snippet(e.content, q)}</p>
          </li>
        ))}
      </ul>
    </WikiShell>
  );
}
