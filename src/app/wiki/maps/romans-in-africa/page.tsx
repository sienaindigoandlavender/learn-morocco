import Link from "next/link";
import { WikiShell } from "@/components/WikiShell";
import { RomanMap } from "@/components/RomanMap";
import {
  romanAfricaProvinces,
  romanAfricaSites,
  romanAfricaView
} from "@/lib/maps/romans-africa";

export const metadata = {
  title: "Romans in Africa — Map — Slow Morocco Wiki"
};

export default function RomansAfricaMapPage() {
  return (
    <WikiShell>
      <article className="max-w-content">
        <header className="mb-10 max-w-prose">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-mono text-meta uppercase tracking-wide text-tertiary">
              Map · Roman Africa
            </span>
          </div>
          <h1 className="font-serif text-5xl leading-tight text-ink">
            Romans in Africa
          </h1>
          <p className="mt-6 text-ink">
            The seven African provinces of Rome at roughly their
            high-imperial extent (c. 200 CE) — from Mauretania Tingitana on
            the Atlantic to Aegyptus on the Red Sea — with the principal
            cities, legionary bases, and frontier posts. Yes, Egypt counts:
            Augustus took it personally in 30 BCE and the prefecture was held
            until the Arab conquest in 641 CE.
          </p>
          <p className="mt-4 text-ink">
            Click any province for context, or click a city to see what it was
            and what it is now.
          </p>
        </header>

        <RomanMap
          provinces={romanAfricaProvinces}
          sites={romanAfricaSites}
          center={romanAfricaView.center}
          zoom={romanAfricaView.zoom}
          bounds={romanAfricaView.bounds}
          height="720px"
        />

        <section className="mt-12 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">
            How to read this map
          </h2>
          <p className="text-ink">
            Roman Africa was a coastal civilization with a thin fertile
            interior, organized around three economic engines. The{" "}
            <strong>Tunisian wheat zone</strong> — Africa Proconsularis,
            with Carthage at its hinge — fed the city of Rome for three
            centuries; together with Egypt it furnished roughly two-thirds
            of the imperial grain supply. The <strong>olive frontier</strong>
            {" "}of Numidia and Tripolitania, less famous but equally
            transformative, made cities like Thysdrus and Lepcis Magna
            spectacularly rich in the 2nd and 3rd centuries. And the{" "}
            <strong>Egyptian-Red Sea trade axis</strong> ran from Alexandria
            through Coptos to Berenice and out into the Indian Ocean for
            pepper, ivory, cotton, and silk.
          </p>
          <p className="mt-4 text-ink">
            The military map is much simpler. A single legion — the{" "}
            <em>Legio III Augusta</em>, based at Lambaesis — was generally
            considered enough to garrison the entire Latin-speaking African
            west; Egypt held two, then one, of its own. The frontier was
            economic and diplomatic more than fortified, and the empire
            mostly managed the Saharan and Sahelian peoples (Garamantes,
            Mauri, Blemmyes, Nobatae) by treaty.
          </p>
        </section>

        <section className="mt-10 max-w-prose">
          <h2 className="font-serif text-2xl text-ink mb-3">Reading further</h2>
          <ul className="space-y-1 text-ink">
            <li>
              →{" "}
              <Link
                href="/wiki/romans-in-africa"
                className="border-b border-accent hover:text-accent"
              >
                Romans in Africa — timeline
              </Link>
            </li>
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
                href="/wiki/maps/romans-in-morocco"
                className="border-b border-accent hover:text-accent"
              >
                Romans in Morocco — map (zoomed)
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </WikiShell>
  );
}
