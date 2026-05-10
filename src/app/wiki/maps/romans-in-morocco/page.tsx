import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { RomanMap } from "@/components/RomanMap";
import {
  romanMoroccoProvinces,
  romanMoroccoSites,
  romanMoroccoView
} from "@/lib/maps/romans-morocco";

export const metadata = {
  title: "Romans in Morocco — Map — Slow Morocco Wiki"
};

export default function RomansMoroccoMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Mauretania Tingitana
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Romans in Morocco
          </h1>
          <p className="mt-6 text-ink">
            The province of <em>Mauretania Tingitana</em> at peak extent
            (44 – c. 285 CE), the reduced late-Roman strip after Diocletian's
            withdrawal, and the Byzantine toehold at Septem (Ceuta).
            Coloured circles mark the principal sites.
          </p>
          <p className="mt-4 text-ink">
            Click a province for context, or click any site for the city behind
            the modern town.
          </p>
        </header>

        <RomanMap
          provinces={romanMoroccoProvinces}
          sites={romanMoroccoSites}
          center={romanMoroccoView.center}
          zoom={romanMoroccoView.zoom}
          bounds={romanMoroccoView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            Roman authority in Morocco was always a coastal-and-northern
            affair. The frontier (the <em>limes Tingitanus</em>) ran from
            Sala on the Atlantic up through Volubilis and Tocolosida — the
            southernmost garrison — and across to the Mediterranean coast
            near Tamuda. South of that line was Mauri country: the Baquates,
            Bavares, Quinquegentanei and others, managed by treaty rather
            than rule. Diocletian's reforms in the 280s formalized what had
            already become unworkable, pulling the empire back to a strip
            around Tingis. The fact that Latin Christian inscriptions
            continue at Volubilis into the 7th century, two centuries after
            the official withdrawal, is one of the more striking footnotes
            of late antique North Africa.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>
              →{" "}
              <Link
                href="/wiki/romans-in-morocco"
                className="border-b border-accent hover:text-accent"
              >
                Romans in Morocco — timeline
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/maps/romans-in-africa"
                className="border-b border-accent hover:text-accent"
              >
                Romans in Africa — map (continent)
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
