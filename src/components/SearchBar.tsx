export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form action="/wiki/search" method="get" className="w-full max-w-prose">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search the wiki…"
        autoComplete="off"
        className="w-full border border-border bg-white px-4 py-3 text-base font-sans text-ink placeholder:text-tertiary focus:border-ink focus:outline-none transition-colors"
      />
    </form>
  );
}
