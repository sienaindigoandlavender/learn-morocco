import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  ENTRY_TYPES,
  VISIBILITIES,
  type Entry,
  type EntryType,
  type Visibility,
} from "./types";
import { extractWikiLinks } from "./links";

const CONTENT_DIR = path.join(process.cwd(), "content", "wiki");

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function asEntryType(v: unknown): EntryType {
  return (ENTRY_TYPES as readonly string[]).includes(String(v))
    ? (v as EntryType)
    : "concept";
}

function asVisibility(v: unknown): Visibility {
  return (VISIBILITIES as readonly string[]).includes(String(v))
    ? (v as Visibility)
    : "private";
}

async function listMarkdownFiles(): Promise<string[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files.filter((f) => f.endsWith(".md"));
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
}

async function readEntryFile(file: string): Promise<Entry> {
  const fullPath = path.join(CONTENT_DIR, file);
  const raw = await fs.readFile(fullPath, "utf8");
  const stat = await fs.stat(fullPath);
  const { data, content } = matter(raw);

  const fileSlug = file.replace(/\.md$/, "");
  const slug = typeof data.slug === "string" && data.slug.length > 0
    ? data.slug
    : fileSlug;
  const title = typeof data.title === "string" && data.title.length > 0
    ? data.title
    : fileSlug;
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => slugify(String(t))).filter(Boolean)
    : [];

  return {
    slug,
    title,
    content,
    entryType: asEntryType(data.type ?? data.entry_type),
    visibility: asVisibility(data.visibility),
    tags,
    updatedAt: stat.mtime.toISOString(),
  };
}

let cache: { entries: Entry[]; bySlug: Map<string, Entry> } | null = null;

async function loadAll(): Promise<{ entries: Entry[]; bySlug: Map<string, Entry> }> {
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = await listMarkdownFiles();
  const entries = await Promise.all(files.map(readEntryFile));
  entries.sort((a, b) => (b.updatedAt ?? "").localeCompare(a.updatedAt ?? ""));
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  cache = { entries, bySlug };
  return cache;
}

export async function getAllEntries(): Promise<Entry[]> {
  const { entries } = await loadAll();
  return entries;
}

export async function getEntry(slug: string): Promise<Entry | null> {
  const { bySlug } = await loadAll();
  return bySlug.get(slug) ?? null;
}

export async function getEntryTitles(): Promise<Map<string, string>> {
  const { entries } = await loadAll();
  return new Map(entries.map((e) => [e.slug, e.title]));
}

export async function getBacklinks(slug: string): Promise<Entry[]> {
  const { entries } = await loadAll();
  return entries.filter((e) => {
    if (e.slug === slug) return false;
    return extractWikiLinks(e.content).some((l) => l.slug === slug);
  });
}

export async function getOutlinks(slug: string): Promise<Entry[]> {
  const entry = await getEntry(slug);
  if (!entry) return [];
  const { bySlug } = await loadAll();
  const seen = new Set<string>();
  const out: Entry[] = [];
  for (const link of extractWikiLinks(entry.content)) {
    if (seen.has(link.slug)) continue;
    seen.add(link.slug);
    const target = bySlug.get(link.slug);
    if (target) out.push(target);
  }
  return out;
}

export async function getAllTags(): Promise<{ slug: string; count: number }[]> {
  const { entries } = await loadAll();
  const counts = new Map<string, number>();
  for (const e of entries) {
    for (const t of e.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export async function getEntriesByTag(tag: string): Promise<Entry[]> {
  const { entries } = await loadAll();
  return entries.filter((e) => e.tags.includes(tag));
}

export async function searchEntries(query: string): Promise<Entry[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const { entries } = await loadAll();
  const tokens = q.split(/\s+/).filter(Boolean);

  type Scored = { entry: Entry; score: number };
  const scored: Scored[] = [];
  for (const e of entries) {
    const titleLc = e.title.toLowerCase();
    const contentLc = e.content.toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (titleLc.includes(t)) score += 5;
      const occurrences = contentLc.split(t).length - 1;
      score += occurrences;
    }
    if (score > 0) scored.push({ entry: e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 50).map((s) => s.entry);
}

export function snippet(content: string, query: string, len = 240): string {
  const q = query.trim().toLowerCase();
  if (!q) return content.slice(0, len);
  const idx = content.toLowerCase().indexOf(q.split(/\s+/)[0] ?? "");
  if (idx < 0) return content.slice(0, len);
  const start = Math.max(0, idx - 60);
  return (start > 0 ? "…" : "") + content.slice(start, start + len) + "…";
}
