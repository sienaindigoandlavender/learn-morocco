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
      <div className="max-w-prose">
        <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-3">
          Search
        </p>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-8">
          Search the wiki
        </h1>
        <SearchBar defaultValue={q} />

        {q && (
          <p className="mt-4 font-mono text-meta uppercase tracking-wide text-tertiary">
            {results.length === 0
              ? `No matches for "${q}"`
              : `${results.length} match${results.length === 1 ? "" : "es"} for "${q}"`}
          </p>
        )}
      </div>

      {results.length > 0 && (
        <ul className="mt-10 space-y-8 max-w-prose">
          {results.map((e) => (
            <li key={e.slug}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <Link
                  href={`/wiki/${e.slug}`}
                  className="font-serif text-2xl text-ink hover:text-accent transition-colors"
                >
                  {e.title}
                </Link>
                <EntryTypeBadge type={e.entryType} />
              </div>
              <p className="mt-2 text-secondary">
                {snippet(e.content, q)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </WikiShell>
  );
}
