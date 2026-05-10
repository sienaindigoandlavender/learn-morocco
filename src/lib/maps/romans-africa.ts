import type { RomanProvince, RomanSite } from "./roman-types";

export const romanAfricaProvinces: RomanProvince[] = [
  {
    id: "tingitana",
    name: "Mauretania Tingitana",
    era: "44 – c. 285 CE",
    description:
      "Created by Claudius in 44 CE from the western half of Juba II's kingdom. Capital at Tingis. Northern Morocco; abandoned south of the Loukos under Diocletian.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.6, 35.95],
          [-1.8, 35.35],
          [-1.8, 33.5],
          [-7.0, 33.8],
          [-9.5, 34.0],
          [-9.6, 35.95]
        ]
      ]
    }
  },
  {
    id: "caesariensis",
    name: "Mauretania Caesariensis",
    era: "44 CE – 5th c.",
    description:
      "The eastern half of Juba II's kingdom. Capital at Caesarea (modern Cherchell). Western and central Algerian coast and immediate interior; the southern interior was nominal.",
    color: "#d97758",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-1.8, 35.35],
          [5.5, 36.9],
          [5.5, 35.0],
          [-1.8, 33.5],
          [-1.8, 35.35]
        ]
      ]
    }
  },
  {
    id: "numidia",
    name: "Numidia",
    era: "46 BCE province; reorganized as separate province under Septimius Severus, c. 198 CE",
    description:
      "Eastern Algeria. Heart of the Third Augustan Legion at Lambaesis. Cities of Cirta, Cuicul, Thamugadi, Hippo Regius. Fertile and intensively Romanized.",
    color: "#c89d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [5.5, 36.9],
          [9.0, 37.0],
          [9.0, 34.5],
          [5.5, 35.0],
          [5.5, 36.9]
        ]
      ]
    }
  },
  {
    id: "africa-proconsularis",
    name: "Africa Proconsularis",
    era: "146 BCE – c. 297 CE",
    description:
      "Created from the destroyed Carthaginian state in 146 BCE; expanded under Augustus and Tiberius to include Tripolitania and Numidia. The wealthiest senatorial province; granary of Rome. Capital at Carthage (refounded as colonia 29 BCE).",
    color: "#5a7d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [9.0, 37.5],
          [11.7, 37.4],
          [12.0, 33.8],
          [9.0, 34.5],
          [9.0, 37.5]
        ]
      ]
    }
  },
  {
    id: "tripolitania",
    name: "Tripolitania",
    era: "Severan reorganization, c. 200 CE – 5th c.",
    description:
      "The 'three cities' — Lepcis Magna, Oea, Sabratha. Severan-era prosperity; the emperor Septimius Severus (r. 193–211) was a Lepcis-born Punic-Berber African.",
    color: "#4a7a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [11.0, 33.4],
          [16.2, 32.3],
          [16.2, 30.0],
          [11.0, 30.5],
          [11.0, 33.4]
        ]
      ]
    }
  },
  {
    id: "cyrenaica",
    name: "Cyrenaica (Creta et Cyrenaica)",
    era: "74 BCE – 5th c.",
    description:
      "Bequeathed to Rome by the last Ptolemaic king of Cyrene in 96 BCE; organized as a province in 74 BCE. Joined administratively to Crete until Diocletian. Five Greek cities (the Pentapolis), wheat, and silphium.",
    color: "#8a4a6a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [19.5, 33.0],
          [25.0, 32.2],
          [25.0, 30.0],
          [19.5, 30.0],
          [19.5, 33.0]
        ]
      ]
    }
  },
  {
    id: "aegyptus",
    name: "Aegyptus",
    era: "30 BCE – 7th c. CE",
    description:
      "Annexed by Octavian after Actium and the death of Cleopatra VII. Imperial province under an equestrian prefect (no senators allowed in). Granary of Rome and conduit of the Indian Ocean trade through Berenice and Myos Hormos.",
    color: "#6a4a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [25.0, 31.5],
          [34.0, 31.7],
          [37.0, 22.0],
          [33.0, 22.0],
          [25.0, 28.0],
          [25.0, 31.5]
        ]
      ]
    }
  }
];

export const romanAfricaSites: RomanSite[] = [
  // Mauretania Tingitana
  {
    id: "tingis",
    name: "Tingis",
    modernName: "Tangier",
    founded: "Phoenician; Roman 1st c. BCE",
    description: "Capital of Mauretania Tingitana.",
    kind: "capital",
    coordinates: [-5.834, 35.759]
  },
  {
    id: "volubilis",
    name: "Volubilis",
    modernName: "Walili (Morocco)",
    founded: "Mauretanian; Roman municipium under Claudius",
    description: "Southern center of Tingitana; Caracalla's arch (217 CE).",
    kind: "colonia",
    coordinates: [-5.554, 34.073]
  },
  // Mauretania Caesariensis
  {
    id: "iol-caesarea",
    name: "Iol Caesarea",
    modernName: "Cherchell, Algeria",
    founded: "Phoenician Iol; renamed by Juba II c. 25 BCE",
    description: "Capital of Mauretania Caesariensis. Juba II's main residence; Hellenistic library and museums.",
    kind: "capital",
    coordinates: [2.193, 36.609]
  },
  {
    id: "tipasa",
    name: "Tipasa",
    modernName: "Tipaza, Algeria",
    founded: "Phoenician; Roman colonia under Hadrian",
    description: "Coastal port and important early Christian center. UNESCO World Heritage.",
    kind: "colonia",
    coordinates: [2.45, 36.594]
  },
  // Numidia
  {
    id: "cirta",
    name: "Cirta",
    modernName: "Constantine, Algeria",
    founded: "Numidian capital; refounded as Roman colonia",
    description: "Old capital of Numidian kings (Massinissa, Jugurtha). Refounded by Constantine 313 and renamed Constantina.",
    kind: "capital",
    coordinates: [6.61, 36.365]
  },
  {
    id: "hippo-regius",
    name: "Hippo Regius",
    modernName: "Annaba, Algeria",
    founded: "Phoenician; Roman colonia",
    description: "Major port and bishopric of Augustine of Hippo (354–430). Vandal capital briefly after 431.",
    kind: "port",
    coordinates: [7.748, 36.879]
  },
  {
    id: "lambaesis",
    name: "Lambaesis",
    modernName: "Lambèse, Algeria",
    founded: "Roman legionary fortress, c. 81 CE",
    description: "Permanent base of the Legio III Augusta; the military pivot of Roman Africa for three centuries.",
    kind: "legion",
    coordinates: [6.255, 35.49]
  },
  {
    id: "thamugadi",
    name: "Thamugadi",
    modernName: "Timgad, Algeria",
    founded: "Trajan, 100 CE",
    description: "Veteran colony for the Third Augustan Legion. Perfect grid plan; the textbook Roman colonial city. UNESCO World Heritage.",
    kind: "colonia",
    coordinates: [6.469, 35.484]
  },
  {
    id: "cuicul",
    name: "Cuicul",
    modernName: "Djemila, Algeria",
    founded: "Nerva, c. 96–98 CE",
    description: "Mountain veteran colony, exceptionally well preserved. UNESCO World Heritage.",
    kind: "colonia",
    coordinates: [5.736, 36.319]
  },
  // Africa Proconsularis (Tunisia)
  {
    id: "carthage",
    name: "Carthago",
    modernName: "Carthage, Tunis",
    founded: "Phoenician 814 BCE; destroyed 146 BCE; refounded 29 BCE",
    description: "Refounded by Augustus as Colonia Iulia Carthago. Provincial capital of Africa Proconsularis; second city of the Latin West after Rome itself by the 2nd century. Vandal capital 439–533. UNESCO World Heritage.",
    kind: "capital",
    coordinates: [10.323, 36.853]
  },
  {
    id: "utica",
    name: "Utica",
    modernName: "north of Tunis",
    founded: "Phoenician c. 1100 BCE; Roman after 146 BCE",
    description: "The first Roman provincial capital of Africa, before Carthage was rebuilt. Cato the Younger's last stand, 46 BCE.",
    kind: "colonia",
    coordinates: [10.063, 37.057]
  },
  {
    id: "hadrumetum",
    name: "Hadrumetum",
    modernName: "Sousse",
    founded: "Phoenician 9th c. BCE; Roman colonia under Trajan",
    description: "Major port of Byzacena. Origin of the Severan-era usurper Clodius Albinus.",
    kind: "port",
    coordinates: [10.638, 35.825]
  },
  {
    id: "thugga",
    name: "Thugga",
    modernName: "Dougga",
    founded: "Numidian; Roman municipium under Septimius Severus",
    description: "The best-preserved Roman small city in North Africa. Capitol, theater, Punic-Libyan bilingual inscription. UNESCO World Heritage.",
    kind: "municipium",
    coordinates: [9.219, 36.422]
  },
  {
    id: "thysdrus",
    name: "Thysdrus",
    modernName: "El Djem",
    founded: "Roman 1st c. CE",
    description: "Site of the third-largest amphitheater in the Roman world (capacity ~35,000). Centre of olive-oil wealth in the 3rd century.",
    kind: "municipium",
    coordinates: [10.708, 35.297]
  },
  {
    id: "sufetula",
    name: "Sufetula",
    modernName: "Sbeitla",
    founded: "Roman 1st c. CE",
    description: "Inland olive-oil city. Site of the last Byzantine stand at the Battle of Sufetula, 647 CE — the opening of the Arab conquest of the Maghreb.",
    kind: "municipium",
    coordinates: [9.117, 35.25]
  },
  // Tripolitania
  {
    id: "leptis-magna",
    name: "Lepcis Magna",
    modernName: "Lebda, Libya",
    founded: "Phoenician c. 1100 BCE; Roman colonia 109 CE",
    description: "Birthplace of Septimius Severus (145 CE). Severan rebuilding made it one of the most monumental cities of the empire. UNESCO World Heritage.",
    kind: "colonia",
    coordinates: [14.293, 32.638]
  },
  {
    id: "sabratha",
    name: "Sabratha",
    modernName: "Sabratha, Libya",
    founded: "Phoenician 5th c. BCE; Roman 1st c. CE",
    description: "Westernmost of the Tripolitanian three. Severan three-tier theater. UNESCO World Heritage.",
    kind: "colonia",
    coordinates: [12.485, 32.805]
  },
  {
    id: "oea",
    name: "Oea",
    modernName: "Tripoli",
    founded: "Phoenician 7th c. BCE",
    description: "The third Tripolitanian city; today's Tripoli. Arch of Marcus Aurelius (163 CE) still stands in the medina.",
    kind: "colonia",
    coordinates: [13.18, 32.892]
  },
  // Cyrenaica
  {
    id: "cyrene",
    name: "Cyrene",
    modernName: "Shahhat, Libya",
    founded: "Greek 631 BCE; Roman 96 BCE",
    description: "The principal Greek city of North Africa, then provincial capital of Cyrenaica. UNESCO World Heritage.",
    kind: "capital",
    coordinates: [21.857, 32.825]
  },
  {
    id: "apollonia",
    name: "Apollonia",
    modernName: "Susa, Libya",
    founded: "Greek 7th c. BCE",
    description: "Port of Cyrene; Late Antique provincial capital after earthquakes damaged Cyrene.",
    kind: "port",
    coordinates: [21.972, 32.901]
  },
  {
    id: "berenice",
    name: "Berenice",
    modernName: "Benghazi",
    founded: "Greek as Euesperides; refounded as Berenice c. 246 BCE",
    description: "Ptolemaic foundation, taken into Roman Cyrenaica.",
    kind: "port",
    coordinates: [20.054, 32.116]
  },
  // Aegyptus
  {
    id: "alexandria",
    name: "Alexandria",
    modernName: "Alexandria",
    founded: "331 BCE by Alexander; Roman from 30 BCE",
    description: "Provincial capital of Aegyptus. Second city of the empire by population. Library, Pharos, Caesarion. Bishopric of immense weight in the doctrinal disputes of the 4th–5th centuries.",
    kind: "capital",
    coordinates: [29.918, 31.2]
  },
  {
    id: "memphis",
    name: "Memphis",
    modernName: "Mit Rahina",
    founded: "Pharaonic c. 3100 BCE",
    description: "Ancient pharaonic capital, still major in Roman period. Eclipsed by Alexandria but cult center of Apis-Serapis.",
    kind: "site",
    coordinates: [31.25, 29.844]
  },
  {
    id: "thebes",
    name: "Diospolis Magna (Thebes)",
    modernName: "Luxor / Karnak",
    founded: "Pharaonic",
    description: "Religious capital of Upper Egypt; the Colossi of Memnon were a Roman tourist attraction (Hadrian visited 130 CE).",
    kind: "site",
    coordinates: [32.639, 25.687]
  },
  {
    id: "syene",
    name: "Syene",
    modernName: "Aswan",
    founded: "Pharaonic",
    description: "Southern frontier of the empire. Garrison of the Cohors I Flavia Cilicum equitata. Trade with the Kingdom of Kush.",
    kind: "frontier",
    coordinates: [32.899, 24.088]
  },
  {
    id: "berenice-troglodytica",
    name: "Berenice Troglodytica",
    modernName: "Medinet el-Haras, Red Sea",
    founded: "Ptolemaic; expanded under Augustus",
    description: "Red Sea port; the eastern terminus of the Indian Ocean trade. Pepper, cotton, ivory through Berenice to the Nile and on to Rome.",
    kind: "port",
    coordinates: [35.467, 23.91]
  },
  {
    id: "antinoopolis",
    name: "Antinooüpolis",
    modernName: "Sheikh Ibada",
    founded: "Hadrian, 130 CE",
    description: "Founded by Hadrian on the spot where his lover Antinous drowned in the Nile. Greek city in Middle Egypt.",
    kind: "colonia",
    coordinates: [30.879, 27.812]
  },
  // Outside the empire but in close orbit
  {
    id: "garama",
    name: "Garama",
    modernName: "Germa, Fezzan, Libya",
    founded: "Garamantian c. 500 BCE",
    description: "Capital of the Garamantes — not a Roman province but a kingdom in close trade contact across the Sahara. Roman raids reached here under Cornelius Balbus, 19 BCE.",
    kind: "site",
    coordinates: [13.064, 26.518]
  },
  {
    id: "meroe",
    name: "Meroe",
    modernName: "Sudan",
    founded: "Kushite",
    description: "Capital of the Kingdom of Kush, beyond the southern Roman frontier. Treaty with Augustus 21 BCE after the Petronius campaign.",
    kind: "site",
    coordinates: [33.722, 16.93]
  }
];

export const romanAfricaView = {
  center: [12.0, 32.0] as [number, number],
  zoom: 3.2,
  bounds: [
    [-11.0, 14.0],
    [38.0, 38.5]
  ] as [[number, number], [number, number]]
};
