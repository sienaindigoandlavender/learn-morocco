import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { AmazighMap } from "@/components/AmazighMap";
import {
  amazighMoroccoConfederations,
  amazighMoroccoView
} from "@/lib/maps/amazigh-morocco";

export const metadata = {
  title: "Amazigh Confederations of Morocco — Slow Morocco Wiki"
};

export default function AmazighConfederationsMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Concept
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Amazigh Confederations of Morocco
          </h1>
          <p className="mt-6 text-ink">
            Approximate territories of the principal Amazigh confederations within
            modern Morocco. The medieval triad — Sanhaja, Masmuda, Zenata — follows
            Ibn Khaldun&rsquo;s classification; the post-medieval entries (Aït Atta,
            Aït Yafelman) are the major confederations that shaped the southern
            and eastern High Atlas through the Protectorate years.
          </p>
          <p className="mt-4 text-ink">
            Click a region for context. The fills overlap intentionally: tribal
            territories were fluid, seasonal, and contested, and any sharp line
            is an editorial choice rather than a fact.
          </p>
        </header>

        <AmazighMap
          confederations={amazighMoroccoConfederations}
          center={amazighMoroccoView.center}
          zoom={amazighMoroccoView.zoom}
          bounds={amazighMoroccoView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            The medieval triad describes the broad genealogical groupings the
            Arabic chroniclers — most influentially Ibn Khaldun in the
            14th century — used to classify the Amazigh of the Maghreb. Each of
            the three Berber empires came out of one of them: the{" "}
            <Link
              href="/wiki/the-almoravids"
              className="border-b border-accent text-ink hover:text-accent"
            >
              Almoravids
            </Link>{" "}
            from the Saharan Sanhaja, the{" "}
            <Link
              href="/wiki/the-almohads"
              className="border-b border-accent text-ink hover:text-accent"
            >
              Almohads
            </Link>{" "}
            from the High Atlas Masmuda, the{" "}
            <Link
              href="/wiki/the-marinids"
              className="border-b border-accent text-ink hover:text-accent"
            >
              Marinids
            </Link>{" "}
            from the eastern Zenata. Modern confederations like the Aït Atta
            and Aït Yafelman cut across that older grid; they are how Amazigh
            self-organization actually looked on the ground in the
            17th–20th centuries, and they are what the French faced in the long
            pacification campaigns of 1907–1934.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>
              →{" "}
              <Link
                href="/wiki/amazigh-timeline"
                className="border-b border-accent hover:text-accent"
              >
                Amazigh Timeline
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/maps/amazigh-world"
                className="border-b border-accent hover:text-accent"
              >
                The Amazigh World — Map
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/amazigh-substrate"
                className="border-b border-accent hover:text-accent"
              >
                Amazigh Substrate
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/timeline-of-morocco"
                className="border-b border-accent hover:text-accent"
              >
                Timeline of Morocco
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
