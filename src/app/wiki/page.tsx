import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { SearchBar } from "@/components/SearchBar";
import { EntryTypeBadge, VisibilityBadge } from "@/components/Badges";
import { getAllEntries } from "@/lib/wiki/content";
import { ENTRY_TYPES, type EntryType } from "@/lib/wiki/types";

export const dynamic = "force-dynamic";

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function WikiIndexPage() {
  const all = await getAllEntries();
  const recent = all.slice(0, 10);

  const byType = new Map<EntryType, typeof all>();
  for (const e of all) {
    const list = byType.get(e.entryType) ?? [];
    list.push(e);
    byType.set(e.entryType, list);
  }

  const usedTypes = ENTRY_TYPES.filter((t) => (byType.get(t)?.length ?? 0) > 0);

  return (
    <WikiShell>
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="max-w-prose">
          <h1 className="font-serif text-5xl leading-tight text-ink mb-6">
            A slow, private wiki of Morocco — its places, people, and
            traditions.
          </h1>
          <p className="text-lg text-secondary">
            Notes-in-progress on concepts, places, persons, buildings,
            dynasties, plants, crafts, ceremonies, dishes, languages,
            regions, periods, and events. Single-author, kept slow,
            cross-linked as it grows.
          </p>
        </div>
        <div className="lg:pt-2">
          <SearchBar />
          <div className="mt-3 flex items-center justify-between font-mono text-meta uppercase tracking-wide text-tertiary">
            <span>{all.length} {all.length === 1 ? "entry" : "entries"}</span>
            <Link
              href="/wiki/search"
              className="hover:text-accent transition-colors"
            >
              Open search →
            </Link>
          </div>
        </div>
      </section>

      {all.length === 0 ? (
        <section className="border-t border-border pt-12 max-w-prose">
          <p className="text-secondary">
            No entries yet. Add markdown files to{" "}
            <code className="bg-codebg px-1.5 py-0.5 rounded font-mono text-sm">
              content/wiki/
            </code>{" "}
            to start.
          </p>
        </section>
      ) : (
        <>
          <section className="mb-20">
            <h2 className="font-mono text-meta uppercase tracking-wide text-tertiary mb-6">
              Recent
            </h2>
            <ul className="divide-y divide-border">
              {recent.map((e) => (
                <li
                  key={e.slug}
                  className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6 py-3"
                >
                  <Link
                    href={`/wiki/${e.slug}`}
                    className="font-serif text-lg text-ink hover:text-accent transition-colors"
                  >
                    {e.title}
                  </Link>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <EntryTypeBadge type={e.entryType} />
                    <VisibilityBadge value={e.visibility} />
                    <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
                      {formatDate(e.updatedAt)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-20">
            <h2 className="font-mono text-meta uppercase tracking-wide text-tertiary mb-6">
              By type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {usedTypes.map((t) => {
                const list = byType.get(t)!;
                return (
                  <div key={t}>
                    <div className="flex items-baseline justify-between mb-2">
                      <p className="font-serif text-xl text-ink capitalize">
                        {t}
                      </p>
                      <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
                        {list.length}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {list.slice(0, 5).map((e) => (
                        <li key={e.slug}>
                          <Link
                            href={`/wiki/${e.slug}`}
                            className="text-secondary hover:text-accent transition-colors"
                          >
                            {e.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {list.length > 5 && (
                      <p className="mt-2 font-mono text-meta uppercase tracking-wide text-tertiary">
                        + {list.length - 5} more
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="border-t border-border pt-12 text-meta text-tertiary font-mono uppercase tracking-wide">
            <p>
              {all.length} {all.length === 1 ? "entry" : "entries"} ·{" "}
              {usedTypes.length} {usedTypes.length === 1 ? "type" : "types"}
            </p>
          </section>
        </>
      )}
    </WikiShell>
  );
}
