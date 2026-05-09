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
      <h1 className="font-serif text-3xl text-stone-900">#{params.tag}</h1>
      <p className="mt-1 text-sm text-stone-500">
        {entries.length} {entries.length === 1 ? "entry" : "entries"}
      </p>

      <ul className="mt-6 space-y-2">
        {entries.map((e) => (
          <li key={e.slug} className="flex items-center gap-2">
            <Link href={`/wiki/${e.slug}`} className="text-stone-900 hover:underline">
              {e.title}
            </Link>
            <EntryTypeBadge type={e.entryType} />
          </li>
        ))}
      </ul>
    </WikiShell>
  );
}
