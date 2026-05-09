import {
  ENTRY_TYPE_BADGE,
  VISIBILITY_BADGE,
  type EntryType,
  type Visibility,
} from "@/lib/wiki/types";

export function EntryTypeBadge({ type }: { type: EntryType }) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${ENTRY_TYPE_BADGE[type]}`}
    >
      {type}
    </span>
  );
}

export function VisibilityBadge({ value }: { value: Visibility }) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${VISIBILITY_BADGE[value]}`}
    >
      {value.replace("_", " ")}
    </span>
  );
}

export function TagPill({ slug }: { slug: string }) {
  return (
    <a
      href={`/wiki/tags/${slug}`}
      className="inline-block rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-700 hover:bg-stone-200"
    >
      #{slug}
    </a>
  );
}
