import type { RomanProvince, RomanSite } from "./roman-types";

export const romanMoroccoProvinces: RomanProvince[] = [
  {
    id: "tingitana-peak",
    name: "Mauretania Tingitana",
    era: "c. 44 – c. 285 CE (peak extent)",
    description:
      "The Roman province as established by Claudius in 44 CE. Capital at Tingis (Tangier). Effective Roman authority ran from the Atlantic coast to the Moulouya, south to roughly the line Sala–Volubilis–Tocolosida. Beyond the limes, the Baquates and other Mauri confederations were managed by treaty rather than rule.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.6, 35.95],
          [-1.8, 35.35],
          [-1.8, 33.5],
          [-3.5, 33.6],
          [-5.6, 34.0],
          [-7.0, 34.0],
          [-7.5, 33.7],
          [-8.5, 33.8],
          [-9.5, 34.5],
          [-9.6, 35.95]
        ]
      ]
    }
  },
  {
    id: "tingitana-late",
    name: "Tingitana, post-Diocletian (c. 285–429 CE)",
    era: "Late Roman",
    description:
      "After Diocletian's reorganization the southern interior was withdrawn from. Only a northern strip — Tingis, Lixus, Zilil, Tamuda, Septem — remained inside the empire, attached administratively to the Diocese of Hispania across the strait. Volubilis was officially abandoned but its Latin Christian community endured into the 7th century.",
    color: "#6a4a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-6.3, 35.95],
          [-2.5, 35.55],
          [-2.5, 35.05],
          [-5.0, 34.7],
          [-6.4, 34.9],
          [-6.3, 35.95]
        ]
      ]
    }
  },
  {
    id: "byzantine-toehold",
    name: "Byzantine Septem (533 – c. 711 CE)",
    era: "Byzantine",
    description:
      "After Belisarius's reconquest of Vandal Africa (533), Justinian held a coastal toehold at Septem (Ceuta) and the immediate hinterland. The garrison passed to the Visigoths in the late 6th century and finally fell to the Arab armies of Musa ibn Nusayr around 711.",
    color: "#4a7a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.6, 35.95],
          [-5.0, 35.95],
          [-5.0, 35.7],
          [-5.6, 35.7],
          [-5.6, 35.95]
        ]
      ]
    }
  }
];

export const romanMoroccoSites: RomanSite[] = [
  {
    id: "tingis",
    name: "Tingis",
    modernName: "Tangier",
    founded: "Phoenician c. 6th c. BCE; Roman colonia under Augustus",
    description:
      "Provincial capital of Mauretania Tingitana from 44 CE; the city that gave the province its name. Always the empire's anchor on the strait.",
    kind: "capital",
    coordinates: [-5.834, 35.759]
  },
  {
    id: "volubilis",
    name: "Volubilis",
    modernName: "Walili",
    founded: "3rd c. BCE Mauretanian; Roman municipium under Claudius",
    description:
      "The southern administrative center and the largest Roman city in Morocco. Capital under Juba II. Triumphal arch of Caracalla (217), basilica, capitol, House of Orpheus. UNESCO World Heritage 1997.",
    kind: "capital",
    coordinates: [-5.554, 34.073]
  },
  {
    id: "lixus",
    name: "Lixus",
    modernName: "Larache",
    founded: "Phoenician c. 8th c. BCE; Roman colonia under Claudius",
    description:
      "The Atlantic-coast colonia; Pliny placed the Garden of the Hesperides here. Major garum (fish-sauce) production complex, still visible.",
    kind: "colonia",
    coordinates: [-6.105, 35.198]
  },
  {
    id: "sala",
    name: "Sala Colonia",
    modernName: "Chellah, Rabat",
    founded: "Mauretanian; Roman colonia 1st c. CE",
    description:
      "The southernmost Roman city of Mauretania Tingitana on the Atlantic, at the mouth of the Bouregreg. Reused in the 14th century as the Marinid royal necropolis (Chellah).",
    kind: "colonia",
    coordinates: [-6.821, 34.007]
  },
  {
    id: "banasa",
    name: "Banasa",
    modernName: "Sidi Ali bou Jenoun",
    founded: "Augustan colonia, c. 33 BCE",
    description:
      "Veteran colony on the Sebou river. Inscriptions here record Roman citizenship grants to Baquates chiefs in the 2nd–3rd centuries — the diplomatic record of the Tingitana frontier.",
    kind: "colonia",
    coordinates: [-6.293, 34.602]
  },
  {
    id: "thamusida",
    name: "Thamusida",
    modernName: "near Kenitra",
    founded: "Mauretanian; Roman fort and town 1st–3rd c. CE",
    description:
      "Garrison and port on the Sebou. Auxiliary cavalry unit attested. Abandoned at Diocletian's withdrawal.",
    kind: "frontier",
    coordinates: [-6.66, 34.355]
  },
  {
    id: "zilil",
    name: "Zilil",
    modernName: "Dchar Jdid, near Asilah",
    founded: "Augustan colonia, c. 33 BCE",
    description:
      "One of three Augustan veteran colonies in Tingitana (with Banasa and Babba). On the Atlantic coast south of Tingis.",
    kind: "colonia",
    coordinates: [-6.022, 35.474]
  },
  {
    id: "tamuda",
    name: "Tamuda",
    modernName: "near Tetouan",
    founded: "Mauretanian 3rd c. BCE; Roman fort 1st c. CE",
    description:
      "Originally a Mauretanian town on the Martil river, destroyed in the Aedemon revolt (40–44 CE) and rebuilt as a Roman castellum guarding the eastern Tingitana frontier.",
    kind: "frontier",
    coordinates: [-5.394, 35.566]
  },
  {
    id: "septem",
    name: "Septem Fratres",
    modernName: "Ceuta",
    founded: "Phoenician; Roman from 1st c. CE",
    description:
      "The 'Seven Brothers' — named for the seven hills around the bay. The Roman, then Byzantine, then Visigothic, then Arab anchor on the southern shore of the strait.",
    kind: "port",
    coordinates: [-5.319, 35.886]
  },
  {
    id: "cotta",
    name: "Cotta",
    modernName: "near Cap Spartel",
    founded: "1st c. CE",
    description:
      "Industrial complex producing garum and Tyrian purple dye from murex shells. The largest fish-processing site west of Lixus.",
    kind: "site",
    coordinates: [-5.939, 35.785]
  },
  {
    id: "tocolosida",
    name: "Tocolosida",
    modernName: "near Volubilis",
    founded: "Roman fort, 2nd c. CE",
    description:
      "The southernmost Roman military post in Tingitana, 4 km south of Volubilis. The hard southern edge of the Roman frontier.",
    kind: "frontier",
    coordinates: [-5.482, 34.04]
  },
  {
    id: "mogador",
    name: "Mogador (Iulia Constantia Zilil)",
    modernName: "Île de Mogador, Essaouira",
    founded: "Phoenician 7th c. BCE; Mauretanian-Roman purple dye works",
    description:
      "Juba II established a Tyrian-purple production complex on the island. Far south of the formal limes; visited by Roman traders, never garrisoned.",
    kind: "site",
    coordinates: [-9.778, 31.5]
  },
  {
    id: "rusaddir",
    name: "Rusaddir",
    modernName: "Melilla",
    founded: "Phoenician c. 6th c. BCE; Roman 1st c. CE",
    description:
      "Easternmost coastal port of Tingitana, on the Mediterranean side of the Rif. Trade waystation between Tingitana and Mauretania Caesariensis.",
    kind: "port",
    coordinates: [-2.938, 35.293]
  }
];

export const romanMoroccoView = {
  center: [-5.5, 34.5] as [number, number],
  zoom: 5.6,
  bounds: [
    [-10.5, 33.0],
    [-1.5, 36.2]
  ] as [[number, number], [number, number]]
};
