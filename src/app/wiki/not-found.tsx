import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";

export default function NotFound() {
  return (
    <WikiShell>
      <h1 className="font-serif text-3xl text-stone-900">Not found</h1>
      <p className="mt-2 text-stone-600">
        That entry doesn&rsquo;t exist yet.
      </p>
      <p className="mt-4 text-sm text-stone-500">
        <Link href="/wiki" className="underline">Back to the wiki</Link>
      </p>
    </WikiShell>
  );
}
