import type {
  HistoricalConnection,
  HistoricalSite,
  KindStyle
} from "@/components/HistoricalMap";

export const andalusMaghrebSiteKinds: Record<string, KindStyle> = {
  iberian_capital: { color: "#b8543a", label: "Andalusi capital", radius: 7 },
  iberian_city: { color: "#d97758", label: "Andalusi city / port", radius: 5 },
  crossing_port: { color: "#4a7a8a", label: "Strait crossing port", radius: 6 },
  maghrib_capital: { color: "#5a7d3a", label: "Maghribi capital", radius: 7 },
  refugee_city: { color: "#8a4a6a", label: "Andalusi refugee city", radius: 6 }
};

export const andalusMaghrebSites: HistoricalSite[] = [
  // Iberian capitals
  {
    id: "cordoba",
    name: "Córdoba",
    modernName: "Spain",
    description:
      "Capital of the Cordoban Emirate and Caliphate. Reciprocal Maghrebi connection: Idrisid Fes is in part Cordoban exiles (rabadī refugees from 818); Cordoban Maliki jurists trained generations of Maghrebi scholars.",
    kind: "iberian_capital",
    coordinates: [-4.7794, 37.8847]
  },
  {
    id: "seville",
    name: "Seville",
    modernName: "Spain",
    description:
      "Almohad capital of al-Andalus 1147–1248. The Giralda is the sister of the Koutoubia and Hassan Tower minarets — same dynasty, same architects' atelier.",
    kind: "iberian_capital",
    coordinates: [-5.9844, 37.3886]
  },
  {
    id: "granada",
    name: "Granada",
    modernName: "Spain",
    description:
      "Nasrid capital 1238–1492. After the Capitulation, the bulk of its surviving Muslim population emigrated to the Maghreb — Tetouan, Chefchaouen, Fez, Tlemcen, Tunis. Generations later their descendants still called themselves Andalusī.",
    kind: "iberian_capital",
    coordinates: [-3.5986, 37.1773]
  },
  {
    id: "toledo",
    name: "Toledo",
    modernName: "Spain",
    description:
      "Lost to Castile in 1085 — the loss that triggered the Almoravid intervention from Marrakesh. The Toledan Translation School later carried Arabic-language Greek and Islamic learning into Latin Christendom.",
    kind: "iberian_city",
    coordinates: [-4.0273, 39.8628]
  },
  {
    id: "valencia",
    name: "Valencia",
    modernName: "Spain",
    description:
      "Major embarkation point during the 1609–1614 Morisco expulsion. Many of the deported sailed for the North African coast and ended in Tunis, Tetouan, Salé, or Algiers.",
    kind: "iberian_city",
    coordinates: [-0.3763, 39.4699]
  },
  // Strait crossings
  {
    id: "gibraltar",
    name: "Jabal Ṭāriq",
    modernName: "Gibraltar",
    description:
      "Tariq ibn Ziyad's landing point in April 711. The strait still bears his name (Jabal Tariq → Gibraltar). Used as the principal crossing in 711, 1086, and 1146.",
    kind: "crossing_port",
    coordinates: [-5.353, 36.14]
  },
  {
    id: "algeciras",
    name: "al-Jazīra al-Khaḍrā'",
    modernName: "Algeciras",
    description:
      "'The Green Island' — the principal port of crossing on the Andalusi side, used by every dynasty from the Umayyads to the Marinids. Almoravid base for the Sagrajas campaign 1086. Lost to Castile 1344.",
    kind: "crossing_port",
    coordinates: [-5.453, 36.128]
  },
  {
    id: "tarifa",
    name: "Ṭarīf",
    modernName: "Tarifa",
    description:
      "Named after Tarif ibn Malik, who landed here in 710 in the reconnaissance raid that preceded Tariq's full invasion. Lost to Castile 1292.",
    kind: "crossing_port",
    coordinates: [-5.605, 36.013]
  },
  {
    id: "tangier",
    name: "Ṭanja / Ṭinja",
    modernName: "Tangier",
    description:
      "Roman Tingis. Tariq's launching point in 711. Marinid embarkation port for the Andalus campaigns of 1275–1340. Portuguese 1471, English 1661, Moroccan again 1684.",
    kind: "crossing_port",
    coordinates: [-5.834, 35.759]
  },
  {
    id: "ceuta",
    name: "Sebta",
    modernName: "Ceuta",
    description:
      "The 'Seven Brothers' (Septem Fratres) of Roman antiquity. Almoravid embarkation port for the Sagrajas campaign 1086. Almohad and Marinid jumping-off point for al-Andalus. Portuguese from 1415; Spanish from 1668.",
    kind: "crossing_port",
    coordinates: [-5.319, 35.886]
  },
  // Maghreb capitals
  {
    id: "marrakesh",
    name: "Marrākush",
    modernName: "Marrakesh",
    description:
      "Almoravid (1062) and Almohad (1147) capital. The political pole that decided al-Andalus from across the strait for two centuries. Almoravid masons built the Cordoba mosque's mihrab; Almohad architects from Marrakesh built the Giralda.",
    kind: "maghrib_capital",
    coordinates: [-7.989, 31.629]
  },
  {
    id: "fez",
    name: "Fās",
    modernName: "Fez",
    description:
      "Founded by Idris II in 808–809; the Andalusi quarter ('Adwat al-Andalus) was settled by Cordoban exiles after the 818 rabadī uprising. The Andalusī Mosque (859) is its anchor. Marinid capital 1248–1465. Major destination for Granada 1492 refugees.",
    kind: "maghrib_capital",
    coordinates: [-5.0, 34.034]
  },
  // Refugee cities
  {
    id: "tetouan",
    name: "Tetouan",
    modernName: "Tetouan",
    description:
      "Refounded after 1484 by Sidi al-Mandri, an Andalusi noble from Granada, with refugees from Granada and (after 1492) the Reconquista. The medina retains its Andalusi street plan and house typology. UNESCO World Heritage 1997.",
    kind: "refugee_city",
    details: [{ label: "Refounded", value: "c. 1484 by Sidi al-Mandri" }],
    coordinates: [-5.366, 35.578]
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    modernName: "Chefchaouen",
    description:
      "Founded 1471 by Mulay Ali ibn Rashid as a base against the Portuguese; populated by Granadan and Moriscan refugees. The blue-washed houses are a 20th-century intervention; the Andalusi-Granadan plan and the Spanish-laced dialect of the medina are not.",
    kind: "refugee_city",
    details: [{ label: "Founded", value: "1471" }],
    coordinates: [-5.268, 35.171]
  },
  {
    id: "sale",
    name: "Salé",
    modernName: "Salé",
    description:
      "Major refuge for Hornacheros (Spanish Muslim refugees from Hornachos) and other Moriscos after the 1609–1614 expulsion. Founded the Salé Republic of corsairs (1624–1668) — effectively an Andalusi statelet on the Bouregreg.",
    kind: "refugee_city",
    details: [{ label: "Salé Republic", value: "1624–1668" }],
    coordinates: [-6.835, 34.039]
  },
  {
    id: "rabat",
    name: "Rabat",
    modernName: "Rabat",
    description:
      "The Andalusi quarter (Hawma al-Andalus) at the south end of the medina dates from the Morisco refugee waves of the early 17th century. The Andalusi Wall and Bab el-Had remain.",
    kind: "refugee_city",
    coordinates: [-6.836, 34.02]
  },
  {
    id: "tlemcen",
    name: "Tilimsān",
    modernName: "Tlemcen, Algeria",
    description:
      "Zayyanid capital from 1235; major reception city for Andalusi scholars and refugees throughout the 13th–16th centuries. The 1492 wave swelled its Andalusi quarter; many surnames in Tlemcen still trace to Andalusian origin.",
    kind: "refugee_city",
    coordinates: [-1.319, 34.881]
  },
  {
    id: "tunis",
    name: "Tūnis",
    modernName: "Tunis",
    description:
      "Hafsid capital. Major destination for Andalusi exiles after 1492 and again after 1609; the Andalusi villages of the Medjerda valley (Testour, Soliman, El Alia) are 17th-century Morisco foundations.",
    kind: "refugee_city",
    coordinates: [10.1815, 36.8065]
  }
];

export const andalusMaghrebConnections: HistoricalConnection[] = [
  {
    id: "711-tariq",
    name: "711 — Tariq's invasion",
    era: "April 711",
    description:
      "Tariq ibn Ziyad crosses from Tangier to Gibraltar with c. 7,000 mostly Amazigh troops. Defeats King Roderic at Guadalete (July 711); takes Toledo by year's end. Conquest of Iberia begins.",
    color: "#b8543a",
    from: [-5.834, 35.759],
    to: [-5.353, 36.14]
  },
  {
    id: "1086-yusuf",
    name: "1086 — Almoravid intervention",
    era: "Yusuf ibn Tashfin",
    description:
      "After the loss of Toledo (1085), the Andalusi taifa kings beg Yusuf ibn Tashfin for help. He crosses from Ceuta to Algeciras and destroys Alfonso VI at Sagrajas/Zallāqa, 23 October 1086.",
    color: "#5a7d3a",
    from: [-5.319, 35.886],
    to: [-5.453, 36.128]
  },
  {
    id: "1146-almohad",
    name: "1146–1147 — Almohad jihad",
    era: "Abd al-Mu'min",
    description:
      "Almohad armies cross the strait to seize al-Andalus from the collapsing Almoravid order. Seville falls 1147. Within a generation the Andalusi capital is at Seville and the architectural school is one and the same on both sides of the strait.",
    color: "#4a7a8a",
    from: [-5.319, 35.886],
    to: [-5.605, 36.013]
  },
  {
    id: "1275-marinid",
    name: "1275–1340 — Marinid expeditions",
    era: "Six campaigns",
    description:
      "Six Marinid expeditions in support of the Nasrids of Granada. The last, ending at the Battle of Río Salado (1340), is the final major Maghrebi military intervention in Iberia.",
    color: "#c89d3a",
    from: [-5.834, 35.759],
    to: [-5.605, 36.013]
  },
  {
    id: "1492-granada",
    name: "1492 — The Granada exodus",
    era: "Capitulation of Granada",
    description:
      "After Boabdil's surrender on 2 January 1492, tens of thousands of Andalusi Muslims emigrate to Morocco. Tetouan and Chefchaouen are refounded by these refugees; Fez's Andalusi quarter swells; Tlemcen and Tunis absorb the rest.",
    color: "#8a4a6a",
    from: [-3.5986, 37.1773],
    to: [-5.366, 35.578]
  },
  {
    id: "1609-moriscos",
    name: "1609–1614 — Morisco expulsion",
    era: "Philip III",
    description:
      "Philip III expels roughly 300,000 Moriscos (the descendants of Muslims forcibly converted after 1502). Major destinations: Salé (Hornacheros), Tetouan, Rabat, Fez, Tlemcen, Tunis. The Salé corsair republic and the Andalusi villages of the Tunisian Medjerda are direct outcomes.",
    color: "#6a4a8a",
    from: [-0.3763, 39.4699],
    to: [-6.835, 34.039]
  }
];

export const andalusMaghrebView = {
  center: [-3.5, 36.0] as [number, number],
  zoom: 5.4,
  bounds: [
    [-10.5, 30.5],
    [11.5, 41.5]
  ] as [[number, number], [number, number]]
};
