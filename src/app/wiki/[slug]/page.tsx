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

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

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
      <article className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-12">
        <div>
          <header className="mb-10 max-w-prose">
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
              <EntryTypeBadge type={entry.entryType} />
              <VisibilityBadge value={entry.visibility} />
              {entry.updatedAt ? (
                <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
                  {formatDate(entry.updatedAt)}
                </span>
              ) : null}
            </div>
            <h1 className="font-serif text-5xl leading-tight text-ink">
              {entry.title}
            </h1>
            {entry.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                {entry.tags.map((t) => (
                  <TagPill key={t} slug={t} />
                ))}
              </div>
            )}
          </header>

          <div>
            {entry.content.trim().length === 0 ? (
              <div className="border border-border bg-codebg px-5 py-6 max-w-prose">
                <p className="text-ink">
                  This entry hasn&rsquo;t been written yet.
                </p>
                <p className="mt-2 text-meta text-tertiary font-mono">
                  Add content to{" "}
                  <code className="bg-white px-1.5 py-0.5">
                    content/wiki/{entry.slug}.md
                  </code>
                  .
                </p>
              </div>
            ) : (
              <MarkdownRenderer content={resolved} />
            )}
          </div>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start space-y-10 text-meta">
          {backlinks.length > 0 && (
            <section>
              <h2 className="font-mono uppercase tracking-wide text-tertiary mb-3">
                Pages that link here
              </h2>
              <ul className="space-y-2 border-t border-border pt-3">
                {backlinks.map((e) => (
                  <li key={e.slug} className="flex flex-col gap-0.5">
                    <Link
                      href={`/wiki/${e.slug}`}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      {e.title}
                    </Link>
                    <EntryTypeBadge type={e.entryType} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {outlinks.length > 0 && (
            <section>
              <h2 className="font-mono uppercase tracking-wide text-tertiary mb-3">
                Pages this links to
              </h2>
              <ul className="space-y-2 border-t border-border pt-3">
                {outlinks.map((e) => (
                  <li key={e.slug} className="flex flex-col gap-0.5">
                    <Link
                      href={`/wiki/${e.slug}`}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      {e.title}
                    </Link>
                    <EntryTypeBadge type={e.entryType} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </article>
    </WikiShell>
  );
}
