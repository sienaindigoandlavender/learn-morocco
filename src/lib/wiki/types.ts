export const ENTRY_TYPES = [
  "concept",
  "place",
  "person",
  "building",
  "dynasty",
  "plant",
  "craft",
  "ceremony",
  "dish",
  "language",
  "region",
  "period",
  "event",
] as const;

export type EntryType = (typeof ENTRY_TYPES)[number];

export const VISIBILITIES = ["private", "internal_draft", "publishable"] as const;
export type Visibility = (typeof VISIBILITIES)[number];

export type Entry = {
  slug: string;
  title: string;
  content: string;
  entryType: EntryType;
  visibility: Visibility;
  tags: string[];
  updatedAt: string | null;
};

export const ENTRY_TYPE_BADGE: Record<EntryType, string> = {
  concept: "bg-stone-200 text-stone-800",
  place: "bg-amber-100 text-amber-900",
  person: "bg-rose-100 text-rose-900",
  building: "bg-orange-100 text-orange-900",
  dynasty: "bg-purple-100 text-purple-900",
  plant: "bg-emerald-100 text-emerald-900",
  craft: "bg-yellow-100 text-yellow-900",
  ceremony: "bg-fuchsia-100 text-fuchsia-900",
  dish: "bg-red-100 text-red-900",
  language: "bg-sky-100 text-sky-900",
  region: "bg-teal-100 text-teal-900",
  period: "bg-indigo-100 text-indigo-900",
  event: "bg-lime-100 text-lime-900",
};

export const VISIBILITY_BADGE: Record<Visibility, string> = {
  private: "bg-gray-200 text-gray-800",
  internal_draft: "bg-yellow-200 text-yellow-900",
  publishable: "bg-green-200 text-green-900",
};
