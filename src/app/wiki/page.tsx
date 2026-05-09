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

  return (
    <WikiShell>
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-serif text-3xl text-stone-900">Wiki</h1>
      </div>

      <div className="mt-6">
        <SearchBar />
      </div>

      {all.length === 0 ? (
        <p className="mt-12 text-stone-600">
          No entries yet. Add markdown files to{" "}
          <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
            content/wiki/
          </code>{" "}
          to start.
        </p>
      ) : (
        <>
          <section className="mt-10">
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
              Recent
            </h2>
            <ul className="mt-3 divide-y divide-stone-100">
              {recent.map((e) => (
                <li key={e.slug} className="flex items-center justify-between gap-3 py-2">
                  <Link href={`/wiki/${e.slug}`} className="font-serif text-lg text-stone-900 hover:underline">
                    {e.title}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <EntryTypeBadge type={e.entryType} />
                    <VisibilityBadge value={e.visibility} />
                    <span>{formatDate(e.updatedAt)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
              By type
            </h2>
            <div className="mt-3 space-y-6">
              {ENTRY_TYPES.map((t) => {
                const list = byType.get(t);
                if (!list || list.length === 0) return null;
                return (
                  <div key={t}>
                    <div className="flex items-center gap-2">
                      <EntryTypeBadge type={t} />
                      <span className="text-sm text-stone-500">{list.length}</span>
                    </div>
                    <ul className="mt-2 ml-1 space-y-1">
                      {list.slice(0, 5).map((e) => (
                        <li key={e.slug}>
                          <Link href={`/wiki/${e.slug}`} className="text-stone-900 hover:underline">
                            {e.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {list.length > 5 && (
                      <p className="mt-1 ml-1 text-xs text-stone-500">
                        + {list.length - 5} more
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </WikiShell>
  );
}
