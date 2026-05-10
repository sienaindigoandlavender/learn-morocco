import Link from "next/link";
import { FACETS, getFacetForTag } from "@/lib/wiki/tag-facets";

type Tag = { slug: string; count: number };

type Section = {
  id: string;
  label: string;
  description?: string;
  items: Tag[];
};

export function TagCloud({ tags }: { tags: Tag[] }) {
  const groups = new Map<string, Tag[]>();
  for (const t of tags) {
    const f = getFacetForTag(t.slug);
    if (!groups.has(f)) groups.set(f, []);
    groups.get(f)!.push(t);
  }

  const sections: Section[] = FACETS.map((f) => ({
    id: f.id,
    label: f.label,
    description: f.description,
    items: (groups.get(f.id) ?? []).slice()
  }));
  const otherItems = groups.get("other") ?? [];
  if (otherItems.length > 0) {
    sections.push({
      id: "other",
      label: "Other",
      description: "Tags not yet in the canonical vocabulary.",
      items: otherItems.slice()
    });
  }

  const maxCount = Math.max(1, ...tags.map((t) => t.count));

  return (
    <div className="space-y-14">
      {sections.map((section) => {
        if (section.items.length === 0) return null;
        section.items.sort(
          (a, b) => b.count - a.count || a.slug.localeCompare(b.slug)
        );
        return (
          <section key={section.id}>
            <header className="mb-5 border-t border-border pt-3">
              <h2 className="font-mono text-meta uppercase tracking-wide text-tertiary">
                {section.label}
                <span className="ml-3 text-secondary">({section.items.length})</span>
              </h2>
              {section.description && (
                <p className="mt-1 text-meta text-tertiary">{section.description}</p>
              )}
            </header>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-baseline">
              {section.items.map((t) => (
                <Link
                  key={t.slug}
                  href={`/wiki/tags/${t.slug}`}
                  className={`${sizeClass(
                    t.count,
                    maxCount
                  )} font-serif text-ink hover:text-accent transition-colors leading-none`}
                >
                  {t.slug}
                  <sup className="ml-1 font-mono text-[10px] uppercase tracking-wide text-tertiary">
                    {t.count}
                  </sup>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function sizeClass(count: number, max: number): string {
  const ratio = count / max;
  if (ratio >= 0.8) return "text-4xl";
  if (ratio >= 0.6) return "text-3xl";
  if (ratio >= 0.45) return "text-2xl";
  if (ratio >= 0.3) return "text-xl";
  if (ratio >= 0.18) return "text-lg";
  return "text-base";
}
