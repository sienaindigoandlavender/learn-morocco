import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { AlmohadMap } from "@/components/AlmohadMap";
import {
  almohadRegions,
  almohadSites,
  almohadView
} from "@/lib/maps/almohad-architecture";

export const metadata = {
  title: "Almohad Architecture — Map — Slow Morocco Wiki"
};

export default function AlmohadArchitectureMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Almohad Architecture
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Almohad Architecture
          </h1>
          <p className="mt-6 text-ink">
            The principal surviving Almohad monuments across the caliphate —
            from the High Atlas mausoleum at Tin Mal, through the great mosques
            and gates of Marrakesh and Rabat, to the Giralda and the Torre del
            Oro in Seville. Roughly half a century of building (c. 1148–1221)
            from a single architectural school spanning two continents.
          </p>
          <p className="mt-4 text-ink">
            Click a region for the political backdrop, or click any site for
            patron, dates, and what to look for.
          </p>
        </header>

        <AlmohadMap
          regions={almohadRegions}
          sites={almohadSites}
          center={almohadView.center}
          zoom={almohadView.zoom}
          bounds={almohadView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            Three concentrations dominate. The <strong>Marrakesh–Rabat axis</strong>{" "}
            holds the imperial showpieces: Koutoubia, the Kasbah Mosque, Bab
            Agnaou, the unfinished Hassan complex. <strong>Seville</strong>{" "}
            held the Andalusian capital, and the great mosque there — of which
            only the Patio de los Naranjos and the Giralda survive — was the
            largest the dynasty ever built. Then the upland sanctuary at{" "}
            <strong>Tin Mal</strong> stands apart in the High Atlas: not
            imperial in scale but doctrinally first, the mausoleum of the
            founder.
          </p>
          <p className="mt-4 text-ink">
            Beyond these, scattered fortifications mark the dynasty&rsquo;s
            reach: Niebla and Silves on the Andalusian frontier, the Calahorra
            in Córdoba, the Kasbah of Tunis at the eastern edge.
            Ifriqiya was Almohad for seventy years (1159–1229), but the
            distinctive architectural survivals there are mostly early Hafsid
            construction in an inherited Almohad idiom — the western tradition
            living on after the western caliphate had folded.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>
              →{" "}
              <Link
                href="/wiki/almohad-architecture"
                className="border-b border-accent hover:text-accent"
              >
                Almohad Architecture — timeline and notes
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/the-almohads"
                className="border-b border-accent hover:text-accent"
              >
                The Almohads — dynastic history
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/maps/amazigh-confederations"
                className="border-b border-accent hover:text-accent"
              >
                Amazigh Confederations of Morocco — map
              </Link>
            </li>
            <li>
              →{" "}
              <Link
                href="/wiki/architectural-timeline"
                className="border-b border-accent hover:text-accent"
              >
                Architectural Timeline
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
