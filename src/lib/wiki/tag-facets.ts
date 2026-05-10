export type Facet = {
  id: string;
  label: string;
  description: string;
  tags: string[];
};

// Canonical tag vocabulary, grouped by facet. The order of facets here is the
// order they render in the cloud. The order of tags within each facet is the
// canonical 'natural' reading order — the cloud sorts by count at render time,
// but this list is the editorial reference.
export const FACETS: Facet[] = [
  {
    id: "era",
    label: "Era",
    description: "When in time the entry sits.",
    tags: [
      "prehistory",
      "antiquity",
      "late-antiquity",
      "medieval",
      "early-modern",
      "modern",
      "contemporary"
    ]
  },
  {
    id: "place",
    label: "Place",
    description: "Geographic frame.",
    tags: [
      "morocco",
      "andalus",
      "iberia",
      "maghreb",
      "ifriqiya",
      "africa",
      "egypt",
      "sahara",
      "sahel",
      "atlas",
      "rif",
      "sous",
      "gibraltar",
      "mauretania",
      "volubilis",
      "marrakesh",
      "fez",
      "rabat",
      "tangier",
      "tetouan",
      "chefchaouen",
      "sale",
      "essaouira",
      "casablanca"
    ]
  },
  {
    id: "people",
    label: "People",
    description: "Communities, populations, identities.",
    tags: [
      "amazigh",
      "arab",
      "andalusi",
      "moriscos",
      "romans",
      "byzantines",
      "vandals",
      "phoenicians",
      "jewish",
      "sephardic",
      "toshavim",
      "tuareg"
    ]
  },
  {
    id: "dynasty",
    label: "Dynasty",
    description: "Ruling houses and movements.",
    tags: [
      "umayyad",
      "abbasid",
      "idrisid",
      "fatimid",
      "rustamid",
      "midrarid",
      "barghawata",
      "almoravid",
      "almohad",
      "marinid",
      "wattasid",
      "saadian",
      "alaouite",
      "nasrid",
      "hafsid",
      "zayyanid"
    ]
  },
  {
    id: "theme",
    label: "Theme",
    description: "Cross-cutting subjects.",
    tags: [
      "architecture",
      "language",
      "identity",
      "religion",
      "islam",
      "christianity",
      "judaism",
      "refugees",
      "dynasties",
      "conquest",
      "trade",
      "cities",
      "craft",
      "food",
      "music",
      "colonialism",
      "protectorate",
      "independence"
    ]
  },
  {
    id: "format",
    label: "Type",
    description: "How the entry is shaped.",
    tags: ["timeline", "person", "place", "concept", "map", "index", "dictionary"]
  }
];

const TAG_TO_FACET: Map<string, string> = new Map();
for (const f of FACETS) {
  for (const t of f.tags) TAG_TO_FACET.set(t, f.id);
}

export function getFacetForTag(tag: string): string {
  return TAG_TO_FACET.get(tag) ?? "other";
}

// Aliases. Old or inconsistent tags map to the canonical form so the cloud
// stays clean even if entries haven't all been migrated. The /wiki/tags/[tag]
// route uses these to resolve aliased URLs to the canonical entry list.
export const TAG_ALIASES: Record<string, string> = {
  berber: "amazigh",
  rome: "romans",
  byzantine: "byzantines",
  vandal: "vandals",
  phoenician: "phoenicians",
  morisco: "moriscos",
  taifa: "andalus",
  spain: "iberia"
};

export function canonicalTag(tag: string): string {
  return TAG_ALIASES[tag] ?? tag;
}

export function canonicalizeEntryTags(tags: string[]): string[] {
  const set = new Set<string>();
  for (const t of tags) set.add(canonicalTag(t));
  return Array.from(set);
}

// Reverse alias lookup: which raw tags resolve to this canonical?
export function aliasesFor(canonical: string): string[] {
  const result = [canonical];
  for (const [raw, c] of Object.entries(TAG_ALIASES)) {
    if (c === canonical) result.push(raw);
  }
  return result;
}
