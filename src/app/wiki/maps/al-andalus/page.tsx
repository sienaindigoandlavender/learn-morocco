import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { HistoricalMap } from "@/components/HistoricalMap";
import {
  alAndalusPhases,
  alAndalusSites,
  alAndalusSiteKinds,
  alAndalusView
} from "@/lib/maps/al-andalus";

export const metadata = {
  title: "Al-Andalus — Map — Slow Morocco Wiki"
};

export default function AlAndalusMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Al-Andalus 711–1492
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Al-Andalus
          </h1>
          <p className="mt-6 text-ink">
            Five overlapping phases — conquest, caliphate, taifa
            fragmentation, Almohad recovery, Nasrid Granada — from Tariq's
            crossing in 711 to Boabdil's surrender of the Alhambra in 1492.
            Eight centuries on the same peninsula.
          </p>
          <p className="mt-4 text-ink">
            Click any phase polygon for context, or click a city for the
            Arabic name, the patron dynasty, and the year it fell.
          </p>
        </header>

        <HistoricalMap
          regions={alAndalusPhases}
          sites={alAndalusSites}
          kindStyles={alAndalusSiteKinds}
          regionLegendTitle="Phases"
          kindLegendTitle="Sites"
          center={alAndalusView.center}
          zoom={alAndalusView.zoom}
          bounds={alAndalusView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">How to read this map</h2>
          <p className="text-ink">
            The five phase polygons stack from largest (711) to smallest
            (Nasrid Granada). The story is essentially one long contraction
            from north to south, punctuated by two Maghrebi rescues
            (Almoravid 1086, Almohad 1147) and one terminal collapse
            (1212–1248). Toledo (1085), Seville (1248), and Granada (1492)
            are the three irreversible losses.
          </p>
          <p className="mt-4 text-ink">
            For the cross-strait dimension — who crossed when, where the
            refugees ended up — see the companion map:{" "}
            <Link
              href="/wiki/maps/andalus-maghreb"
              className="border-b border-accent text-ink hover:text-accent"
            >
              Al-Andalus and the Maghreb
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>→{" "}<Link href="/wiki/al-andalus" className="border-b border-accent hover:text-accent">Al-Andalus — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/andalus-maghreb-connections" className="border-b border-accent hover:text-accent">Al-Andalus and the Maghreb — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/maps/andalus-maghreb" className="border-b border-accent hover:text-accent">Al-Andalus and the Maghreb — map</Link></li>
            <li>→{" "}<Link href="/wiki/maps/almohad-architecture" className="border-b border-accent hover:text-accent">Almohad Architecture — map</Link></li>
            <li>→{" "}<Link href="/wiki/almohad-architecture" className="border-b border-accent hover:text-accent">Almohad Architecture — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/amazigh-timeline" className="border-b border-accent hover:text-accent">Amazigh Timeline</Link></li>
            <li>→{" "}<Link href="/wiki/maps/romans-in-africa" className="border-b border-accent hover:text-accent">Romans in Africa — map</Link></li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
