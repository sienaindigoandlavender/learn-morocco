import Link from "next/link";
import { notFound } from "next/navigation";
import { WikiShell } from "@/components/WikiShell";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { EntryTypeBadge, TagPill, VisibilityBadge } from "@/components/Badges";
import {
  getBacklinks,
  getEntry,
  getEntryTitles,
  getOutlinks,
} from "@/lib/wiki/content";
import { resolveWikiLinks } from "@/lib/wiki/links";

export const dynamic = "force-dynamic";

export default async function EntryPage({ params }: { params: { slug: string } }) {
  const entry = await getEntry(params.slug);
  if (!entry) notFound();

  const titles = await getEntryTitles();
  const resolved = resolveWikiLinks(entry.content, titles);
  const [backlinks, outlinks] = await Promise.all([
    getBacklinks(entry.slug),
    getOutlinks(entry.slug),
  ]);

  return (
    <WikiShell>
      <article>
        <h1 className="font-serif text-4xl text-stone-900">{entry.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <EntryTypeBadge type={entry.entryType} />
          <VisibilityBadge value={entry.visibility} />
          {entry.tags.map((t) => <TagPill key={t} slug={t} />)}
        </div>

        <div className="mt-8">
          {entry.content.trim().length === 0 ? (
            <div className="rounded border border-dashed border-stone-300 bg-stone-50 px-5 py-6">
              <p className="text-stone-700">This entry hasn&rsquo;t been written yet.</p>
              <p className="mt-2 text-sm text-stone-500">
                Add content to{" "}
                <code className="rounded bg-white px-1.5 py-0.5">
                  content/wiki/{entry.slug}.md
                </code>
                .
              </p>
            </div>
          ) : (
            <MarkdownRenderer content={resolved} />
          )}
        </div>
      </article>

      {backlinks.length > 0 && (
        <section className="mt-16 border-t border-stone-200 pt-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
            Pages that link here
          </h2>
          <ul className="mt-3 space-y-1">
            {backlinks.map((e) => (
              <li key={e.slug} className="flex items-center gap-2">
                <Link href={`/wiki/${e.slug}`} className="text-stone-900 hover:underline">
                  {e.title}
                </Link>
                <EntryTypeBadge type={e.entryType} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {outlinks.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-medium uppercase tracking-wide text-stone-500">
            Pages this links to
          </h2>
          <ul className="mt-3 space-y-1">
            {outlinks.map((e) => (
              <li key={e.slug} className="flex items-center gap-2">
                <Link href={`/wiki/${e.slug}`} className="text-stone-900 hover:underline">
                  {e.title}
                </Link>
                <EntryTypeBadge type={e.entryType} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </WikiShell>
  );
}
