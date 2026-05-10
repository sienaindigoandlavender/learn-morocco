import type { Confederation } from "./types";

// Approximate territories of the principal Amazigh confederations within
// modern Morocco. The medieval triad (Sanhaja / Masmuda / Zenata) follows
// Ibn Khaldun's classification; the modern entries (Aït Atta, Aït Yafelman)
// are the major late-Alaouite and Protectorate-era confederations that
// most heavily shaped the southern and eastern High Atlas. Borders are
// schematic, low-opacity, and intentionally fuzzy: tribal territories were
// fluid, overlapping, and seasonal, and any sharp line is an editorial
// choice rather than a fact.
export const amazighMoroccoConfederations: Confederation[] = [
  {
    id: "sanhaja-saharan",
    name: "Sanhaja (Saharan)",
    era: "Medieval — Almoravid heartland",
    description:
      "The veiled Saharan Sanhaja — Lamtuna, Gudala, Massufa — out of which the Almoravid movement (1040s) emerged. The mother-confederation of the western Sahara caravan world.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-13.2, 27.6],
          [-9.0, 28.0],
          [-8.4, 26.0],
          [-8.0, 22.5],
          [-12.0, 21.5],
          [-13.5, 24.0],
          [-13.2, 27.6]
        ]
      ]
    }
  },
  {
    id: "sanhaja-middle-atlas",
    name: "Sanhaja (Middle Atlas)",
    era: "Medieval branch",
    description:
      "The northern Sanhaja branch — Zenaga-derived groups in the central Middle Atlas around Khenifra, Azrou, and the upper Moulouya. Modern Zayane and Aït Sgougou are descendants.",
    color: "#d97758",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.9, 33.6],
          [-4.6, 33.6],
          [-4.3, 32.7],
          [-4.9, 32.2],
          [-5.9, 32.4],
          [-6.1, 33.1],
          [-5.9, 33.6]
        ]
      ]
    }
  },
  {
    id: "masmuda",
    name: "Masmuda",
    era: "Medieval — Almohad heartland",
    description:
      "Sedentary Amazigh of the High Atlas (Tinmel, Ourika, Demnate), the Sous valley, and the Atlantic plain (Doukkala, Hâha). Ibn Tumart's home base; the demographic engine of the Almohad empire (1147–1269).",
    color: "#5a7d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.7, 31.6],
          [-7.4, 31.7],
          [-7.0, 30.7],
          [-7.6, 30.0],
          [-9.5, 29.7],
          [-10.1, 30.6],
          [-9.7, 31.6]
        ]
      ]
    }
  },
  {
    id: "zenata",
    name: "Zenata",
    era: "Medieval — Marinid heartland",
    description:
      "Steppe and eastern-mountain pastoralists. The third great medieval grouping; supplied the Marinid (1269–1465) and Wattasid (1465–1554) dynasties. Modern Tarifit-speakers of the eastern Rif descend from Zenata branches.",
    color: "#c89d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-3.5, 35.0],
          [-1.5, 34.8],
          [-1.0, 33.0],
          [-2.5, 32.2],
          [-3.7, 32.6],
          [-3.8, 34.0],
          [-3.5, 35.0]
        ]
      ]
    }
  },
  {
    id: "ghomara",
    name: "Ghomara",
    era: "Medieval — Western Rif",
    description:
      "The Western Rif confederation, between Tetouan and Targuist. Linguistically distinct (Ghomara is its own Amazigh variety, surviving in pockets near Chefchaouen). Notable for the medieval Banu Saleh principality and persistent religious heterodoxy.",
    color: "#4a7a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.6, 35.5],
          [-4.6, 35.4],
          [-4.5, 34.9],
          [-5.5, 34.9],
          [-5.7, 35.2],
          [-5.6, 35.5]
        ]
      ]
    }
  },
  {
    id: "ait-atta",
    name: "Aït Atta",
    era: "16th c. – present",
    description:
      "Forty-clan confederation of the Saghro massif and the southeastern pre-Sahara (Drâa, Dadès, Todgha). Self-governing under the Ten Wise Men (Aït Arba'in) until the French defeated them at Bougafer in 1933 — the last independent Amazigh polity in Morocco.",
    color: "#8a4a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-7.0, 31.5],
          [-5.2, 31.5],
          [-4.8, 30.8],
          [-5.5, 30.2],
          [-6.8, 30.4],
          [-7.2, 31.0],
          [-7.0, 31.5]
        ]
      ]
    }
  },
  {
    id: "ait-yafelman",
    name: "Aït Yafelman",
    era: "17th c. – present",
    description:
      "Eastern High Atlas confederation (Imilchil, Midelt, the upper Ziz). Five-tribe alliance — Aït Hadiddou, Aït Morghad, Aït Izdeg, Aït Brahim, Aït Yahya — formed in the 1640s as a defensive league against the Aït Atta. Famous for the Imilchil marriage moussem.",
    color: "#6a4a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.5, 32.6],
          [-4.3, 32.7],
          [-4.0, 32.0],
          [-4.7, 31.7],
          [-5.4, 31.9],
          [-5.6, 32.4],
          [-5.5, 32.6]
        ]
      ]
    }
  }
];

export const amazighMoroccoView = {
  center: [-6.5, 31.0] as [number, number],
  zoom: 4.7,
  bounds: [
    [-14.5, 20.0],
    [-0.5, 36.5]
  ] as [[number, number], [number, number]]
};
