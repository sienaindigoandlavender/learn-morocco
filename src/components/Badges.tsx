import Link from "next/link";
import {
  type EntryType,
  type Visibility,
} from "@/lib/wiki/types";

export function EntryTypeBadge({ type }: { type: EntryType }) {
  return (
    <span className="inline-block font-mono text-meta uppercase tracking-wide text-tertiary">
      {type}
    </span>
  );
}

export function VisibilityBadge({ value }: { value: Visibility }) {
  const label = value.replace("_", " ");
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-meta uppercase tracking-wide text-tertiary">
      <span
        aria-hidden
        className={`inline-block h-1.5 w-1.5 rounded-full ${
          value === "publishable"
            ? "bg-accent"
            : value === "internal_draft"
              ? "bg-tertiary"
              : "bg-border"
        }`}
      />
      {label}
    </span>
  );
}

export function TagPill({ slug }: { slug: string }) {
  return (
    <Link
      href={`/wiki/tags/${slug}`}
      className="inline-block font-mono text-meta uppercase tracking-wide text-secondary hover:text-accent transition-colors"
    >
      #{slug}
    </Link>
  );
}
