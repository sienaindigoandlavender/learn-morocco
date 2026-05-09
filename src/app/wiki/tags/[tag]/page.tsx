import Link from "next/link";
import { notFound } from "next/navigation";
import { WikiShell } from "@/components/WikiShell";
import { EntryTypeBadge } from "@/components/Badges";
import { getEntriesByTag } from "@/lib/wiki/content";

export const dynamic = "force-dynamic";

export default async function TagPage({ params }: { params: { tag: string } }) {
  const entries = await getEntriesByTag(params.tag);
  if (entries.length === 0) notFound();

  return (
    <WikiShell>
      <div className="max-w-prose mb-10">
        <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-3">
          Tag
        </p>
        <h1 className="font-serif text-5xl leading-tight text-ink">
          #{params.tag}
        </h1>
        <p className="mt-3 font-mono text-meta uppercase tracking-wide text-tertiary">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      <ul className="divide-y divide-border max-w-prose">
        {entries.map((e) => (
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
            <EntryTypeBadge type={e.entryType} />
          </li>
        ))}
      </ul>
    </WikiShell>
  );
}
