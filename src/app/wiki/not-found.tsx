import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";

export default function NotFound() {
  return (
    <WikiShell>
      <div className="max-w-prose">
        <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-3">
          404
        </p>
        <h1 className="font-serif text-5xl leading-tight text-ink mb-4">
          Not found
        </h1>
        <p className="text-lg text-secondary">
          That entry doesn&rsquo;t exist yet.
        </p>
        <p className="mt-8 font-mono text-meta uppercase tracking-wide">
          <Link
            href="/wiki"
            className="text-secondary hover:text-accent transition-colors"
          >
            ← Back to the wiki
          </Link>
        </p>
      </div>
    </WikiShell>
  );
}
