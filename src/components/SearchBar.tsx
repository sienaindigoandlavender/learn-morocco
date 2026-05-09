export function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <form action="/wiki/search" method="get" className="w-full">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search the wiki…"
        autoComplete="off"
        className="w-full rounded border border-stone-300 px-4 py-3 text-base focus:border-stone-600 focus:outline-none"
      />
    </form>
  );
}
