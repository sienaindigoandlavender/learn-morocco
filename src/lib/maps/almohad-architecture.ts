import type { Polygon } from "geojson";

export type AlmohadRegion = {
  id: string;
  name: string;
  era?: string;
  description: string;
  color: string;
  geometry: Polygon;
};

export type AlmohadSite = {
  id: string;
  name: string;
  modernName?: string;
  built?: string;
  patron?: string;
  description: string;
  kind: "mosque" | "minaret" | "gate" | "fortification" | "palace" | "garden";
  coordinates: [number, number];
};

export const almohadRegions: AlmohadRegion[] = [
  {
    id: "africa-peak",
    name: "Almohad Caliphate — African territories",
    era: "Peak, c. 1170–1180",
    description:
      "From the Atlantic to Tripolitania. Abd al-Mu'min unified the Maghreb in a single decade, taking Marrakesh in 1147 and Mahdiyya / Tunis in 1159 — the only time the entire North African coast west of Egypt has been ruled by one indigenous power.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-10.0, 35.9],
          [-1.0, 35.6],
          [5.0, 36.7],
          [11.0, 36.7],
          [13.5, 33.0],
          [10.5, 29.5],
          [-3.0, 28.0],
          [-10.0, 28.0],
          [-13.5, 24.0],
          [-13.0, 28.0],
          [-10.0, 35.9]
        ]
      ]
    }
  },
  {
    id: "andalus-peak",
    name: "Almohad al-Andalus",
    era: "Peak, c. 1170–1195",
    description:
      "South of the Tagus, with seasonal raiding to the Douro. Lost Lisbon to the Second Crusade in 1147 (the year Marrakesh fell to the Almohads) but recovered the Algarve, held Seville as the capital of al-Andalus, and pushed back the Christian frontier after Alarcos (1195).",
    color: "#d97758",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.5, 39.0],
          [-0.5, 39.0],
          [-0.5, 38.0],
          [-1.5, 37.5],
          [-5.5, 36.0],
          [-7.5, 36.0],
          [-9.5, 37.0],
          [-9.5, 39.0]
        ]
      ]
    }
  },
  {
    id: "baleares",
    name: "Balearic Islands",
    era: "Almohad until 1229",
    description:
      "Mallorca, Menorca, Ibiza. Held by the Almohads through the second half of the 12th century until James I of Aragon's conquest of Mallorca in 1229. The last Iberian Almohad territory to fall.",
    color: "#c89d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [1.2, 40.1],
          [4.4, 40.1],
          [4.4, 38.6],
          [1.2, 38.6],
          [1.2, 40.1]
        ]
      ]
    }
  }
];

export const almohadSites: AlmohadSite[] = [
  // Morocco — the Atlas heartland
  {
    id: "tin-mal",
    name: "Tin Mal Mosque",
    modernName: "Tinmel, High Atlas",
    built: "1148–1156",
    patron: "Abd al-Mu'min",
    description:
      "The original spiritual capital of the movement. Built by Abd al-Mu'min as the mausoleum of Ibn Tumart, founder of the Almohad doctrine. Square minaret rises directly above the mihrab — an unusual placement, perhaps the prototype for everything that follows. Severely damaged in the 8 September 2023 Al Haouz earthquake; under restoration.",
    kind: "mosque",
    coordinates: [-8.0014, 30.987]
  },
  // Marrakesh
  {
    id: "koutoubia",
    name: "Koutoubia Mosque",
    modernName: "Marrakesh",
    built: "First 1147; second 1158; minaret completed c. 1195",
    patron: "Abd al-Mu'min and Yacoub al-Mansour",
    description:
      "The canonical Almohad great mosque. Built twice: the first version (1147) was found to be misaligned with the qibla by about 5°, and a second was begun adjacent in 1158. The 77-metre minaret — stone, square-shafted, with a small lantern — sets the model that the Giralda and Hassan Tower both follow.",
    kind: "mosque",
    coordinates: [-7.9939, 31.6243]
  },
  {
    id: "kasbah-mosque-marrakesh",
    name: "Kasbah Mosque of Marrakesh",
    modernName: "Marrakesh",
    built: "1185–1190",
    patron: "Yacoub al-Mansour",
    description:
      "Built as the congregational mosque of Yacoub al-Mansour's new royal city south of the medina. The minaret — covered in turquoise faience and a sebka brick net — is the most decorated of the surviving Almohad towers.",
    kind: "mosque",
    coordinates: [-7.9889, 31.6178]
  },
  {
    id: "bab-agnaou",
    name: "Bab Agnaou",
    modernName: "Marrakesh",
    built: "c. 1185–1195",
    patron: "Yacoub al-Mansour",
    description:
      "The ceremonial gate of the Almohad kasbah — not a fortified entry but a triumphal one, in carved blue-grey Guéliz stone. Concentric horseshoe arches framed by a rectangular alfiz; the foliate inscription band is the textbook Almohad ornamental program.",
    kind: "gate",
    coordinates: [-7.9911, 31.6178]
  },
  {
    id: "menara",
    name: "Menara basin and gardens",
    modernName: "Marrakesh",
    built: "12th c. (Almohad enlargement)",
    patron: "Abd al-Mu'min",
    description:
      "The vast rectangular basin in the olive grove west of the city. The Almohads enlarged an Almoravid hydraulic system that fed it from the Atlas via underground khettara. The pavilion above the basin is a 19th-century Alaouite addition.",
    kind: "garden",
    coordinates: [-8.0228, 31.6128]
  },
  // Rabat
  {
    id: "hassan-tower",
    name: "Hassan Tower and Mosque",
    modernName: "Rabat",
    built: "1195–1199 (abandoned)",
    patron: "Yacoub al-Mansour",
    description:
      "Begun after Alarcos to be the largest mosque of the western Islamic world — a hypostyle hall of 18 naves and 21 bays with a 60-metre minaret. Construction stopped at Yacoub al-Mansour's death in 1199; the minaret reached only 44 metres. The rows of broken column shafts on the esplanade still mark the prayer hall.",
    kind: "minaret",
    coordinates: [-6.8222, 34.0244]
  },
  {
    id: "bab-er-rouah",
    name: "Bab er-Rouah",
    modernName: "Rabat",
    built: "1197",
    patron: "Yacoub al-Mansour",
    description:
      "The 'Gate of the Winds' on the western wall of Rabat. Bent-axis defensive entry, but the outer face is purely ceremonial — a horseshoe arch under a giant rectangular alfiz, with foliate calligraphy bands.",
    kind: "gate",
    coordinates: [-6.8408, 34.0192]
  },
  {
    id: "bab-oudaia",
    name: "Bab Oudaia",
    modernName: "Kasbah of the Udayas, Rabat",
    built: "c. 1195",
    patron: "Yacoub al-Mansour",
    description:
      "The ceremonial gate of the Ribat al-Fath. Considered by many art historians the masterpiece of Almohad gate architecture — the proportional system of nested arches and the foliate carving program are at their most refined here.",
    kind: "gate",
    coordinates: [-6.8367, 34.0331]
  },
  {
    id: "kasbah-udayas",
    name: "Kasbah of the Udayas (Ribat al-Fath)",
    modernName: "Rabat",
    built: "12th c.",
    patron: "Abd al-Mu'min, expanded by Yacoub al-Mansour",
    description:
      "Almoravid foundation, refounded by Abd al-Mu'min as the staging citadel for the Andalus jihad and renamed Ribat al-Fath ('Camp of Victory'). The current circuit walls and the small Almohad mosque inside date from this period.",
    kind: "fortification",
    coordinates: [-6.8358, 34.034]
  },
  // Al-Andalus
  {
    id: "great-mosque-seville",
    name: "Great Mosque of Seville",
    modernName: "Seville Cathedral / Patio de los Naranjos",
    built: "1172–1198",
    patron: "Abu Yaqub Yusuf and Yacoub al-Mansour",
    description:
      "The largest mosque ever built in al-Andalus. Demolished in 1401 to make way for the Gothic cathedral, but the courtyard (Patio de los Naranjos), the ablutions fountain, and the Puerta del Perdón survive. The mosque's footprint is the cathedral's footprint.",
    kind: "mosque",
    coordinates: [-5.9924, 37.3858]
  },
  {
    id: "giralda",
    name: "La Giralda",
    modernName: "Seville",
    built: "1184–1198",
    patron: "Abu Yaqub Yusuf and Yacoub al-Mansour",
    description:
      "Minaret of the Almohad Great Mosque of Seville. The Almohad shaft — brick, 50 metres high, faced with a sebka net — survives intact under the 1568 Renaissance bell-tower addition by Hernán Ruiz II. The Christian giraldillo weather-vane gives it the modern name. Architects: Ahmad ibn Baso (begun) and Ali al-Ghumari (completed).",
    kind: "minaret",
    coordinates: [-5.9926, 37.3859]
  },
  {
    id: "torre-del-oro",
    name: "Torre del Oro",
    modernName: "Seville",
    built: "1220–1221",
    patron: "Governor Abu al-Ala (final Almohad governor of Seville)",
    description:
      "Twelve-sided river-defence tower at the south end of Seville, anchoring a chain across the Guadalquivir. The latest major Almohad construction in al-Andalus — finished 27 years before Seville fell to Castile.",
    kind: "fortification",
    coordinates: [-5.9963, 37.3826]
  },
  {
    id: "alcazar-seville",
    name: "Alcázar of Seville (Almohad core)",
    modernName: "Seville",
    built: "c. 1170–1200",
    patron: "Abu Yaqub Yusuf and Yacoub al-Mansour",
    description:
      "The Almohad governor's palace within the citadel. Most visible Almohad survivals are the Patio del Yeso (with its delicate sebka window screens) and parts of the outer walls. Pedro I's 14th-century Mudéjar palace incorporates the Almohad plan and idiom.",
    kind: "palace",
    coordinates: [-5.9911, 37.3833]
  },
  {
    id: "calahorra",
    name: "Calahorra Tower",
    modernName: "Córdoba",
    built: "12th c. Almohad core; rebuilt 1369",
    patron: "Almohad foundation",
    description:
      "Originally an Almohad fortification anchoring the south end of the Roman bridge across the Guadalquivir. Heavily reconstructed by Henry II of Castile in 1369; today's structure is largely Trastamaran with an Almohad nucleus.",
    kind: "fortification",
    coordinates: [-4.7775, 37.8786]
  },
  {
    id: "silves-castle",
    name: "Castle of Silves",
    modernName: "Silves, Algarve, Portugal",
    built: "Almohad refortification, late 12th c.",
    patron: "Almohad governors of the Algarve",
    description:
      "Former capital of the Algarve under Almohad rule (called Xelb in Arabic). Red-sandstone walls in distinctively Almohad masonry. Taken by the Portuguese 1189, recovered by Almohads 1191, finally lost 1242.",
    kind: "fortification",
    coordinates: [-8.4378, 37.1894]
  },
  {
    id: "niebla-walls",
    name: "Walls of Niebla",
    modernName: "Niebla, Huelva, Spain",
    built: "Almoravid foundation, Almohad reinforcement",
    patron: "Almohad rebuilding 12th–13th c.",
    description:
      "Among the most complete Andalusi Islamic city walls anywhere. Forty towers, five gates. Held by the taifa kingdom of Niebla as a late survival until 1262.",
    kind: "fortification",
    coordinates: [-6.6772, 37.3597]
  },
  // Ifriqiya
  {
    id: "kasbah-tunis",
    name: "Kasbah of Tunis",
    modernName: "Tunis",
    built: "Almohad foundation 1160s; Hafsid completion c. 1230",
    patron: "Abd al-Mu'min (foundation)",
    description:
      "Abd al-Mu'min founded the citadel above Tunis as the seat of Almohad authority in Ifriqiya after the conquest of 1159. The visible Kasbah Mosque and most of the surviving structures date from the early Hafsid period (1228 onward), built in an idiom directly inherited from the Almohad western tradition.",
    kind: "palace",
    coordinates: [10.1656, 36.7986]
  }
];

export const almohadView = {
  center: [-2.0, 35.0] as [number, number],
  zoom: 4.6,
  bounds: [
    [-10.5, 28.5],
    [11.5, 39.5]
  ] as [[number, number], [number, number]]
};
