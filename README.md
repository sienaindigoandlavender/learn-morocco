# Slow Morocco Wiki

Private, password-gated knowledge wiki. Single user. Not searchable or
indexable. Content lives as markdown files inside the repo.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- `react-markdown` + `remark-gfm`
- `gray-matter` for frontmatter

No database. No third-party auth. Entries are markdown files in
`content/wiki/`; deploys to Vercel.

## Local setup

```bash
npm install
cp .env.example .env.local
# fill in WIKI_PASSWORD and WIKI_SESSION_SECRET (>=16 chars)
npm run dev
```

Visit `http://localhost:3000` → redirected to `/wiki/login` → enter the
password. The session cookie lasts 30 days.

## Adding entries

Add a markdown file under `content/wiki/`. The filename (without `.md`)
is the URL slug. See `content/wiki/README.md` for the frontmatter format
and wiki-link syntax (`[[slug]]`, `[[slug|alias]]`).

## Routes

- `/wiki/login` &mdash; password form (the only ungated route)
- `/wiki` &mdash; index: search bar, recent entries, grouped by entry type
- `/wiki/[slug]` &mdash; entry view with rendered markdown, backlinks
- `/wiki/search?q=&hellip;` &mdash; search across titles and content
- `/wiki/tags/[tag]` &mdash; entries tagged with `tag`

## Privacy

- `robots.txt` disallows all paths.
- Site-wide `X-Robots-Tag: noindex, nofollow` is set in `next.config.js`
  and reinforced by middleware.
- All `/wiki/*` routes (except `/wiki/login`) require the password cookie;
  middleware redirects to login otherwise.
- The session cookie is HMAC-derived from the password using
  `WIKI_SESSION_SECRET`, set `httpOnly`, `sameSite=lax`, `secure` in
  production.

## Deployment (Vercel)

Set these environment variables in the Vercel project:

- `WIKI_PASSWORD`
- `WIKI_SESSION_SECRET` &mdash; e.g. `openssl rand -hex 32`

Then push the branch and let Vercel build.

## Out of scope (v1)

In-app editor, image uploads, revision history, graph view, public
preview of `publishable` entries, multi-user. Edit content by editing
markdown files in this repo and pushing.
