import { WikiShell } from "@/components/WikiShell";
import { TagCloud } from "@/components/TagCloud";
import { getAllTags } from "@/lib/wiki/content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tags — Slow Morocco Wiki"
};

export default async function TagsIndexPage() {
  const tags = await getAllTags();

  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-12 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Index · {tags.length} tags
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">Tags</h1>
          <p className="mt-6 text-ink">
            Every tag in the wiki, grouped into six facets — era, place,
            people, dynasty, theme, and type — and sized by the number of
            entries that carry it. Click any tag to see its entries.
          </p>
          <p className="mt-3 text-meta text-tertiary">
            The vocabulary is canonical: aliases (e.g.{" "}
            <code className="font-mono">berber</code> →{" "}
            <code className="font-mono">amazigh</code>,{" "}
            <code className="font-mono">rome</code> →{" "}
            <code className="font-mono">romans</code>) resolve to the
            canonical form when followed.
          </p>
        </header>

        {tags.length === 0 ? (
          <p className="text-meta text-tertiary">No tags yet.</p>
        ) : (
          <TagCloud tags={tags} />
        )}
      </article>
    </WikiShell>
  );
}
