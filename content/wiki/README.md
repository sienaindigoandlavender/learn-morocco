---
title: How to add entries
type: concept
visibility: private
tags: [meta]
---

# How to add entries

Each entry is one markdown file in this directory. The filename (without
`.md`) becomes the URL slug, e.g. `morocco-historical-timeline.md` →
`/wiki/morocco-historical-timeline`.

## Frontmatter

```yaml
---
title: Display title
type: concept        # one of: concept, place, person, building, dynasty,
                     #   plant, craft, ceremony, dish, language, region,
                     #   period, event
visibility: private  # private | internal_draft | publishable
tags: [andalusi, music]
---
```

All frontmatter fields are optional. Unknown `type` falls back to `concept`,
unknown `visibility` to `private`.

## Wiki-links

Inside the body, link to other entries with `[[slug]]` or `[[slug|display text]]`.
If the target slug doesn&rsquo;t exist yet, the link renders in red so it&rsquo;s easy
to spot what to write next.

## Backlinks

The view page automatically lists every entry that links here under
&ldquo;Pages that link here&rdquo;.
