import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { AmazighMap } from "@/components/AmazighMap";
import {
  amazighWorldRegions,
  amazighWorldView
} from "@/lib/maps/amazigh-world";

export const metadata = {
  title: "The Amazigh World — Slow Morocco Wiki"
};

export default function AmazighWorldMapPage() {
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
            The Amazigh World
          </h1>
          <p className="mt-6 text-ink">
            The Amazigh-speaking and Amazigh-substrate regions across North
            Africa, the Sahara, the Sahel, and the Atlantic. Roughly 25 million
            speakers across at least eleven countries — half of them in Morocco,
            another quarter in Algeria, the rest spread thin from Siwa in Egypt
            to the Nigerien Aïr to a handful of villages in southern Tunisia.
          </p>
          <p className="mt-4 text-ink">
            Click any region for population, language variety, and historical
            context. Tuareg territories spanning four states are shown as
            separate polygons per country; the people are continuous but the
            political reality is not.
          </p>
        </header>

        <AmazighMap
          confederations={amazighWorldRegions}
          center={amazighWorldView.center}
          zoom={amazighWorldView.zoom}
          bounds={amazighWorldView.bounds}
          height="680px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            Three concentrations dominate. <strong>Northwest Africa</strong> —
            Morocco and Algerian Kabylia — holds the bulk of speakers and the
            organized cultural-political movements; this is where Tamazight has
            been formally constitutionalized (Morocco 2011, Algeria 2016). The{" "}
            <strong>Saharan-Sahel belt</strong> — Tuareg from southern Algeria
            through Mali, Niger, and Burkina Faso — is the second concentration,
            organized around Tamasheq and the continuous use of the
            Tifinagh script. Then a constellation of <strong>oasis remnants</strong>{" "}
            — Mzab, Nafusa, Ghadames, Awjila, Siwa, Djerba — surviving from the
            late-antique and early-Islamic Amazigh world that once stretched
            unbroken from the Atlantic to the Nile.
          </p>
          <p className="mt-4 text-ink">
            The greyed Canary Islands polygon marks where the Amazigh world
            ended in 1496: the Guanche, linguistically and genetically
            North African Amazigh, were the last extra-continental Amazigh
            community before the Castilian conquest extinguished the language.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>
              →{" "}
              <Link
                href="/wiki/maps/amazigh-confederations"
                className="border-b border-accent hover:text-accent"
              >
                Amazigh Confederations of Morocco — Map
              </Link>
            </li>
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
                href="/wiki/amazigh-substrate"
                className="border-b border-accent hover:text-accent"
              >
                Amazigh Substrate
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
