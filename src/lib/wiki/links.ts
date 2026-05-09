const WIKI_LINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export type WikiLink = {
  slug: string;
  alias: string | null;
  raw: string;
};

export function extractWikiLinks(content: string): WikiLink[] {
  const out: WikiLink[] = [];
  for (const match of content.matchAll(WIKI_LINK_RE)) {
    const slug = match[1].trim();
    const alias = match[2]?.trim() ?? null;
    out.push({ slug, alias, raw: match[0] });
  }
  return out;
}

/**
 * Replace [[slug]] / [[slug|alias]] with markdown links to /wiki/<slug>.
 * If the slug isn't in `titles`, render the link in red so broken/unwritten
 * links are visible. Uses an HTML span with a Tailwind class — react-markdown
 * with `rehype-raw` would be needed to render raw HTML, so we fall back to
 * a markdown link with a special marker class via title attribute and let
 * the renderer style it (see MarkdownRenderer).
 */
export function resolveWikiLinks(content: string, titles: Map<string, string>): string {
  return content.replace(WIKI_LINK_RE, (_full, rawSlug: string, rawAlias?: string) => {
    const slug = rawSlug.trim();
    const alias = rawAlias?.trim();
    const title = titles.get(slug);
    const display = alias ?? title ?? slug;
    const exists = title !== undefined;
    // Encode broken-state in the link title so the renderer can style it.
    const linkTitle = exists ? "wiki-link" : "wiki-link-broken";
    return `[${escapeMd(display)}](/wiki/${slug} "${linkTitle}")`;
  });
}

function escapeMd(s: string): string {
  return s.replace(/[\[\]]/g, (c) => "\\" + c);
}
