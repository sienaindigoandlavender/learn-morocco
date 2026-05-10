import type { Confederation } from "./types";

// Principal Amazigh-speaking and Amazigh-substrate regions across North
// Africa, the Sahara, the Sahel, and the Atlantic. Polygons are schematic
// approximations of the modern linguistic-cultural heartlands; many of the
// smaller communities (Awjila, Zenaga, the Tunisian villages) are now
// sub-thousand-speaker remnants. Tuareg territories spanning four states
// are shown as separate polygons per country, since the political reality
// matters even though the people are continuous.
export const amazighWorldRegions: Confederation[] = [
  {
    id: "morocco-tarifit",
    name: "Tarifit (Rif)",
    era: "Morocco — Northern",
    description:
      "The Rif mountains of northern Morocco. Roughly 1.3 million Tarifit speakers. Heart of the 1921–1926 Republic of the Rif under Abdelkrim and of the 2016–2017 Hirak Rif protests.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.5, 35.5],
          [-2.5, 35.3],
          [-2.4, 34.8],
          [-5.5, 34.8],
          [-5.7, 35.1],
          [-5.5, 35.5]
        ]
      ]
    }
  },
  {
    id: "morocco-tamazight",
    name: "Tamazight (Middle/High Atlas)",
    era: "Morocco — Central",
    description:
      "The Middle Atlas, eastern High Atlas, and upper Moulouya. Roughly 3 million Central Atlas Tamazight speakers. The standard variety taught in Moroccan schools since 2003.",
    color: "#d97758",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-6.0, 33.6],
          [-3.8, 33.0],
          [-3.6, 31.6],
          [-5.5, 31.5],
          [-6.3, 32.8],
          [-6.0, 33.6]
        ]
      ]
    }
  },
  {
    id: "morocco-tashelhit",
    name: "Tashelhit (Sous / Anti-Atlas)",
    era: "Morocco — Southern",
    description:
      "The Sous valley, Anti-Atlas, and western High Atlas. Roughly 4.5 million Tashelhit (Chleuh) speakers — the largest single Amazigh variety. The hardest-hit zone in the September 2023 Al Haouz earthquake.",
    color: "#c89d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-10.0, 31.2],
          [-7.5, 31.4],
          [-7.0, 29.8],
          [-9.8, 29.4],
          [-10.2, 30.4],
          [-10.0, 31.2]
        ]
      ]
    }
  },
  {
    id: "morocco-saharan",
    name: "Hassaniya / Sanhaja substrate",
    era: "Morocco — Sahara",
    description:
      "The Western Sahara and southern Drâa. Hassaniya Arabic dominates today, but the substrate is Sanhaja Amazigh — Lamtuna, Reguibat, and the Almoravid root.",
    color: "#a07050",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-13.2, 27.6],
          [-9.0, 28.0],
          [-8.4, 25.0],
          [-12.0, 21.5],
          [-13.5, 24.0],
          [-13.2, 27.6]
        ]
      ]
    }
  },
  {
    id: "algeria-kabyle",
    name: "Kabyle (Taqbaylit)",
    era: "Algeria — Kabylia",
    description:
      "The mountainous coastal Kabylia east of Algiers (Tizi Ouzou, Bejaia, Bouira). Roughly 5 million speakers — the largest and most politically organized Amazigh community anywhere. Site of the 1980 Tafsut Imazighen and the 2001 Black Spring.",
    color: "#4a7a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [3.5, 37.0],
          [5.7, 36.9],
          [5.8, 36.2],
          [3.6, 36.2],
          [3.4, 36.7],
          [3.5, 37.0]
        ]
      ]
    }
  },
  {
    id: "algeria-chaoui",
    name: "Chaoui (Tachawit)",
    era: "Algeria — Aurès",
    description:
      "The Aurès mountains of northeastern Algeria (Batna, Khenchela, Biskra). Roughly 2 million speakers. Heartland of al-Kahina's 690s resistance and of the 1954 launch of the Algerian War of Independence.",
    color: "#8a4a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [5.5, 36.0],
          [7.5, 35.7],
          [7.5, 34.8],
          [5.6, 34.8],
          [5.4, 35.5],
          [5.5, 36.0]
        ]
      ]
    }
  },
  {
    id: "algeria-mzab",
    name: "Mozabite (Tumzabt)",
    era: "Algeria — Mzab",
    description:
      "The five Ibadi cities of the Mzab valley around Ghardaïa. Roughly 200,000 speakers. The only surviving Ibadi-Kharijite Amazigh community in Algeria — direct heirs of the 8th-century Rustamid imamate at Tahert.",
    color: "#6a4a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [3.3, 32.8],
          [4.2, 32.8],
          [4.3, 32.0],
          [3.3, 32.0],
          [3.3, 32.8]
        ]
      ]
    }
  },
  {
    id: "algeria-tuareg",
    name: "Tuareg (Tamasheq) — Algeria",
    era: "Algeria — Hoggar",
    description:
      "The Hoggar (Ahaggar) and Tassili n'Ajjer massifs around Tamanrasset and Djanet. Algerian Kel Ahaggar and Kel Ajjer Tuareg. Continuous use of the Tifinagh script since antiquity.",
    color: "#3a7a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [2.0, 25.5],
          [9.0, 25.5],
          [9.0, 21.0],
          [2.0, 21.0],
          [2.0, 25.5]
        ]
      ]
    }
  },
  {
    id: "tunisia-djerba-matmata",
    name: "Djerbi / Tamazight of the South",
    era: "Tunisia — Djerba & Matmata",
    description:
      "Pockets of Amazigh speech on Djerba island (Guellala, Sedouikech) and in the Matmata-Tamezret-Chenini ksour villages of the south. Under 50,000 speakers; the most reduced of any North African community.",
    color: "#7a8a4a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [10.5, 33.8],
          [11.1, 33.8],
          [11.2, 32.9],
          [10.2, 32.9],
          [10.3, 33.4],
          [10.5, 33.8]
        ]
      ]
    }
  },
  {
    id: "libya-nafusi",
    name: "Nafusi (Jebel Nafusa)",
    era: "Libya — Northwest",
    description:
      "The Nafusa Mountains southwest of Tripoli (Jadu, Yefren, Kabaw, Nalut). Roughly 200,000 Ibadi-Amazigh speakers. The Nafusi rose decisively against Gaddafi in 2011, briefly making Tamazight visible in Libyan public life.",
    color: "#4a8a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [10.5, 32.2],
          [12.5, 32.0],
          [12.8, 31.4],
          [10.7, 31.4],
          [10.5, 31.8],
          [10.5, 32.2]
        ]
      ]
    }
  },
  {
    id: "libya-zuwara",
    name: "Zuwara (coastal Nafusi)",
    era: "Libya — Coastal",
    description:
      "The coastal Amazigh town of Zuwara west of Tripoli. Roughly 50,000 speakers; closely related to Nafusi but coastal-mercantile rather than mountain-Ibadi.",
    color: "#4a8a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [11.6, 33.0],
          [12.4, 33.0],
          [12.4, 32.7],
          [11.6, 32.7],
          [11.6, 33.0]
        ]
      ]
    }
  },
  {
    id: "libya-awjila",
    name: "Awjila (Tawjilit)",
    era: "Libya — Eastern oasis",
    description:
      "The Awjila oasis in eastern Libya. Fewer than 3,000 speakers — the easternmost surviving Amazigh language and one of the most endangered.",
    color: "#8a6a4a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [21.5, 29.5],
          [22.1, 29.5],
          [22.1, 28.9],
          [21.5, 28.9],
          [21.5, 29.5]
        ]
      ]
    }
  },
  {
    id: "libya-ghadames",
    name: "Ghadames (Tuareg / Tayart)",
    era: "Libya — Southwest",
    description:
      "The Saharan oasis of Ghadames, at the Libya-Algeria-Tunisia tripoint. A distinct Amazigh variety (Ghadamsi) plus Tuareg presence. UNESCO World Heritage since 1986.",
    color: "#3a7a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [9.0, 30.5],
          [10.5, 30.5],
          [10.5, 29.5],
          [9.0, 29.5],
          [9.0, 30.5]
        ]
      ]
    }
  },
  {
    id: "egypt-siwi",
    name: "Siwi (Siwa Oasis)",
    era: "Egypt — Western desert",
    description:
      "The Siwa oasis in Egypt's far western desert, 50 km from the Libyan border. Roughly 20,000 speakers — the easternmost continuous Amazigh-speaking community. Famous for the Oracle of Amun visited by Alexander in 331 BCE.",
    color: "#6a8a4a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [25.3, 29.5],
          [25.9, 29.5],
          [25.9, 29.0],
          [25.3, 29.0],
          [25.3, 29.5]
        ]
      ]
    }
  },
  {
    id: "mali-tuareg",
    name: "Tuareg (Tamasheq) — Mali",
    era: "Mali — Azawad",
    description:
      "Northern Mali — Timbuktu, Gao, Kidal. The Kel Adagh, Iwellemmedan, and Ansar Tuareg confederations. Repeated rebellions since 1962; the 2012 declaration of Azawad was the most recent.",
    color: "#3a7a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.5, 21.0],
          [4.5, 21.0],
          [4.5, 15.5],
          [-5.5, 15.5],
          [-5.5, 21.0]
        ]
      ]
    }
  },
  {
    id: "niger-tuareg",
    name: "Tuareg (Tamasheq) — Niger",
    era: "Niger — Aïr / Agadez",
    description:
      "The Aïr massif and Tenere desert. Kel Aïr, Kel Gress, Iwellemmedan Kel Denneg confederations. Roughly 1 million Nigerien Tuareg.",
    color: "#3a7a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [4.5, 21.0],
          [12.5, 21.0],
          [12.5, 15.0],
          [4.5, 15.0],
          [4.5, 21.0]
        ]
      ]
    }
  },
  {
    id: "burkina-tuareg",
    name: "Tuareg — Burkina Faso",
    era: "Burkina Faso — North",
    description:
      "Northern Burkina Faso (Oudalan, Soum). Smaller Tuareg population, increasingly displaced by the Sahel security crisis since 2015.",
    color: "#3a7a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-1.5, 15.0],
          [1.0, 15.0],
          [1.0, 13.5],
          [-1.5, 13.5],
          [-1.5, 15.0]
        ]
      ]
    }
  },
  {
    id: "mauritania-zenaga",
    name: "Zenaga (Tuḍḍungiyya)",
    era: "Mauritania — Southwest",
    description:
      "Southwestern Mauritania (Mederdra region). Fewer than 2,000 Zenaga speakers — the last linguistic descendant of the western Sanhaja that founded the Almoravid empire. Critically endangered.",
    color: "#8a4a4a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-15.5, 16.7],
          [-12.5, 16.7],
          [-12.5, 15.2],
          [-15.5, 15.2],
          [-15.5, 16.7]
        ]
      ]
    }
  },
  {
    id: "canary-guanche",
    name: "Guanche (extinct)",
    era: "Canary Islands — pre-1500",
    description:
      "The pre-Hispanic inhabitants of the Canary Islands, linguistically and genetically Amazigh. Conquered by Castile 1402–1496; the language was extinct by the 17th century. Recent genetic studies confirm continuous North African Amazigh ancestry.",
    color: "#9a9a9a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-18.3, 28.9],
          [-13.4, 29.5],
          [-13.3, 27.6],
          [-18.3, 27.6],
          [-18.3, 28.9]
        ]
      ]
    }
  }
];

export const amazighWorldView = {
  center: [4.0, 28.0] as [number, number],
  zoom: 2.8,
  bounds: [
    [-19.0, 13.0],
    [27.0, 38.0]
  ] as [[number, number], [number, number]]
};
