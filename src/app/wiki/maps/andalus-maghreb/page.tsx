import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { HistoricalMap } from "@/components/HistoricalMap";
import {
  andalusMaghrebSites,
  andalusMaghrebSiteKinds,
  andalusMaghrebConnections,
  andalusMaghrebView
} from "@/lib/maps/andalus-maghreb";

export const metadata = {
  title: "Al-Andalus and the Maghreb — Map — Slow Morocco Wiki"
};

export default function AndalusMaghrebMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Cross-strait, 711–1614
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Al-Andalus and the Maghreb
          </h1>
          <p className="mt-6 text-ink">
            The strait of Gibraltar is fourteen kilometres wide. For nine
            centuries it was less a border than a hinge — troops, scholars,
            craftsmen, refugees, and dynasties moved both ways across it.
            This map shows the principal Andalusi cities, the Maghrebi cities
            tied to them by descent or refuge, and the six major crossings
            that mattered.
          </p>
          <p className="mt-4 text-ink">
            Click any dashed line for the crossing it represents. Click a
            city for its connection.
          </p>
        </header>

        <HistoricalMap
          sites={andalusMaghrebSites}
          connections={andalusMaghrebConnections}
          kindStyles={andalusMaghrebSiteKinds}
          kindLegendTitle="Cities"
          connectionLegendTitle="Crossings"
          center={andalusMaghrebView.center}
          zoom={andalusMaghrebView.zoom}
          bounds={andalusMaghrebView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            Three rhythms structure the cross-strait relationship. The first
            is <strong>conquest from the south</strong>: Tariq 711, Yusuf
            ibn Tashfin 1086, Abd al-Mu'min 1146, six Marinid expeditions
            1275–1340. Every century from the 8th to the 14th, a Maghrebi
            army crossed to fight in al-Andalus. The second is{" "}
            <strong>scholarly and craft circulation</strong>: Cordoban
            jurists training Maghrebi students, Almohad architects from
            Marrakesh building the Giralda, Granadan craftsmen in 14th–
            century Fez. The third is <strong>refuge from the north</strong>:
            818, 1085, 1147 (Lisbon), 1248 (Seville), 1492 (Granada), and
            most massively 1609–1614 (the Morisco expulsion). Tetouan,
            Chefchaouen, the Salé Republic, and the Andalusi villages of
            the Tunisian Medjerda are all direct outcomes.
          </p>
          <p className="mt-4 text-ink">
            The strait towns — Tangier, Ceuta, Tarifa, Algeciras,
            Gibraltar — are the pivot. Whichever power held them controlled
            the relationship. After 1492 the strait fell decisively into
            Christian hands; after that the crossings only ran one way.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>→{" "}<Link href="/wiki/andalus-maghreb-connections" className="border-b border-accent hover:text-accent">Al-Andalus and the Maghreb — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/al-andalus" className="border-b border-accent hover:text-accent">Al-Andalus — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/maps/al-andalus" className="border-b border-accent hover:text-accent">Al-Andalus — map</Link></li>
            <li>→{" "}<Link href="/wiki/almohad-architecture" className="border-b border-accent hover:text-accent">Almohad Architecture — timeline</Link></li>
            <li>→{" "}<Link href="/wiki/maps/almohad-architecture" className="border-b border-accent hover:text-accent">Almohad Architecture — map</Link></li>
            <li>→{" "}<Link href="/wiki/amazigh-timeline" className="border-b border-accent hover:text-accent">Amazigh Timeline</Link></li>
            <li>→{" "}<Link href="/wiki/maps/amazigh-confederations" className="border-b border-accent hover:text-accent">Amazigh Confederations of Morocco — map</Link></li>
            <li>→{" "}<Link href="/wiki/romans-in-morocco" className="border-b border-accent hover:text-accent">Romans in Morocco</Link></li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
