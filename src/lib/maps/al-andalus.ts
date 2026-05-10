import type {
  HistoricalRegion,
  HistoricalSite,
  KindStyle
} from "@/components/HistoricalMap";

export const alAndalusPhases: HistoricalRegion[] = [
  {
    id: "720-peak",
    name: "Conquest peak",
    era: "c. 720 CE",
    description:
      "Within nine years of Tariq's landing, the entire Iberian peninsula except a small strip in the Cantabrian and Pyrenean mountains is under Muslim authority. Septimania (southern France) follows; raids reach the Loire by 732.",
    color: "#b8543a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.5, 43.4],
          [3.3, 42.7],
          [3.3, 36.0],
          [-5.7, 36.0],
          [-7.5, 36.7],
          [-9.5, 37.0],
          [-9.5, 43.4]
        ]
      ]
    }
  },
  {
    id: "929-caliphate",
    name: "Caliphate of Córdoba",
    era: "c. 929–1009",
    description:
      "Abd al-Rahman III declares the caliphate in 929. The southern two-thirds of the peninsula are unified under Córdoba; al-Mansur's raids reach León (988) and Santiago de Compostela (997). The richest, most populous polity in early-medieval Europe.",
    color: "#d97758",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.3, 41.8],
          [3.0, 41.8],
          [3.0, 36.0],
          [-5.7, 36.0],
          [-7.5, 36.7],
          [-9.5, 37.0],
          [-9.3, 41.8]
        ]
      ]
    }
  },
  {
    id: "1086-taifas",
    name: "Taifa fragmentation",
    era: "c. 1031–1086",
    description:
      "After the Fitna (1009–1031) the caliphate dissolves into roughly thirty taifa kingdoms — Seville, Toledo, Zaragoza, Badajoz, Granada, Valencia, Almería, Mallorca, others. Cultural golden age, military catastrophe. Toledo falls to Castile in 1085.",
    color: "#c89d3a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-9.5, 40.5],
          [0.5, 41.5],
          [3.0, 40.0],
          [-0.5, 38.0],
          [-1.7, 37.5],
          [-5.5, 36.0],
          [-7.5, 36.7],
          [-9.5, 37.5],
          [-9.5, 40.5]
        ]
      ]
    }
  },
  {
    id: "1200-almohad",
    name: "Almohad al-Andalus",
    era: "c. 1147–1212",
    description:
      "After the Almoravid collapse, the Almohads recover most of the south. Lost Lisbon to the Second Crusade (1147) and Tortosa (1148), but held the line south of the Tagus and won decisively at Alarcos (1195). Las Navas de Tolosa (1212) breaks them.",
    color: "#5a7d3a",
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
    id: "1300-nasrid",
    name: "Emirate of Granada (Nasrid)",
    era: "1238–1492",
    description:
      "The last Muslim state in Iberia. Tribute-paying vassals of Castile after 1246. Two and a half centuries of survival on a southern strip from Tarifa to Almería. Built the Alhambra. Surrendered by Boabdil 2 January 1492.",
    color: "#4a7a8a",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-5.6, 37.4],
          [-1.7, 37.7],
          [-1.7, 36.6],
          [-3.5, 36.6],
          [-5.5, 36.0],
          [-5.7, 36.6],
          [-5.6, 37.4]
        ]
      ]
    }
  }
];

export const alAndalusSiteKinds: Record<string, KindStyle> = {
  capital: { color: "#b8543a", label: "Capital", radius: 7 },
  city: { color: "#5a7d3a", label: "Major city / taifa capital", radius: 5 },
  palace: { color: "#8a4a6a", label: "Palace city", radius: 6 },
  battle: { color: "#525252", label: "Battle", radius: 5 },
  port: { color: "#4a7a8a", label: "Port", radius: 5 },
  frontier: { color: "#c89d3a", label: "Frontier city", radius: 5 }
};

export const alAndalusSites: HistoricalSite[] = [
  {
    id: "cordoba",
    name: "Qurṭuba",
    modernName: "Córdoba",
    description:
      "Capital of the Emirate (756) and Caliphate (929) of al-Andalus; arguably the largest city in Europe at its 10th-century peak. Great Mosque begun 785 by Abd al-Rahman I. Fell to Castile 1236.",
    kind: "capital",
    details: [
      { label: "Founded as capital", value: "756 (Abd al-Rahman I)" },
      { label: "Fell to Castile", value: "1236 (Ferdinand III)" }
    ],
    coordinates: [-4.7794, 37.8847]
  },
  {
    id: "madinat-al-zahra",
    name: "Madīnat al-Zahrā",
    modernName: "near Córdoba",
    description:
      "Caliphal palace city founded by Abd al-Rahman III in 936 as the new seat of the Cordoban court. Sacked in the Berber civil wars 1009–1010. Excavated and partly reconstructed since 1911. UNESCO World Heritage 2018.",
    kind: "palace",
    details: [{ label: "Built", value: "936–961" }],
    coordinates: [-4.8688, 37.8881]
  },
  {
    id: "seville",
    name: "Ishbīliya",
    modernName: "Sevilla",
    description:
      "Abbadid taifa capital (1023–1091); Almohad capital of al-Andalus (1147–1248). The Giralda is its Almohad minaret. Fell to Ferdinand III in 1248.",
    kind: "capital",
    details: [
      { label: "Almohad capital", value: "1147–1248" },
      { label: "Fell to Castile", value: "1248" }
    ],
    coordinates: [-5.9844, 37.3886]
  },
  {
    id: "granada",
    name: "Gharnāṭa",
    modernName: "Granada",
    description:
      "Zirid taifa capital from 1013; Nasrid capital 1238–1492. Built the Alhambra and the Generalife. Last Muslim state in Iberia; surrendered by Boabdil to Ferdinand and Isabella 2 January 1492.",
    kind: "capital",
    details: [
      { label: "Nasrid capital", value: "1238–1492" },
      { label: "Fell to Castile", value: "1492" }
    ],
    coordinates: [-3.5986, 37.1773]
  },
  {
    id: "toledo",
    name: "Ṭulayṭula",
    modernName: "Toledo",
    description:
      "Visigothic capital, then Umayyad regional centre, then Dhul-Nunid taifa capital (1031–1085). Fell to Alfonso VI of Castile in 1085 — the loss that triggered the Almoravid intervention. Famous Translation School in the 12th–13th centuries: Arabic learning into Latin.",
    kind: "city",
    details: [{ label: "Fell to Castile", value: "1085 (Alfonso VI)" }],
    coordinates: [-4.0273, 39.8628]
  },
  {
    id: "zaragoza",
    name: "Saraqusṭa",
    modernName: "Zaragoza",
    description:
      "Hudid taifa (1039–1110), then Almoravid. The Aljafería palace (built c. 1065–1081) is the principal surviving northern Andalusi monument. Fell to Alfonso I of Aragon 1118.",
    kind: "city",
    details: [{ label: "Fell to Aragon", value: "1118" }],
    coordinates: [-0.8773, 41.6488]
  },
  {
    id: "valencia",
    name: "Balānsiya",
    modernName: "Valencia",
    description:
      "Amirid taifa, briefly held by Rodrigo Díaz de Vivar (El Cid) 1094–1102, then Almoravid and Almohad. Fell to James I of Aragon 1238.",
    kind: "city",
    details: [{ label: "Fell to Aragon", value: "1238 (James I)" }],
    coordinates: [-0.3763, 39.4699]
  },
  {
    id: "murcia",
    name: "Mursiya",
    modernName: "Murcia",
    description:
      "Independent emirate under Ibn Mardanish (1147–1172) — the 'Wolf King' — the last major Andalusi resistance to the Almohads. Submitted to Castile 1243 as a protectorate; annexed 1266.",
    kind: "city",
    details: [{ label: "Annexed by Castile", value: "1266" }],
    coordinates: [-1.1307, 37.9922]
  },
  {
    id: "almeria",
    name: "al-Marīya",
    modernName: "Almería",
    description:
      "Principal Mediterranean port of al-Andalus. Centre of the silk industry. Sacked by an Aragonese-Genoese-Pisan crusade 1147; recovered by the Almohads 1157.",
    kind: "port",
    details: [{ label: "Fell to Castile", value: "1489" }],
    coordinates: [-2.4637, 36.8381]
  },
  {
    id: "malaga",
    name: "Mālaqa",
    modernName: "Málaga",
    description:
      "Major Nasrid port. Fell to the Catholic Monarchs August 1487 after a four-month siege — the harshest of the Granada war; the city's surviving population was enslaved.",
    kind: "port",
    details: [{ label: "Fell to Castile", value: "1487" }],
    coordinates: [-4.4214, 36.7213]
  },
  {
    id: "mallorca",
    name: "Madīna Mayurqa",
    modernName: "Palma de Mallorca",
    description:
      "Almohad until 1229, when James I of Aragon conquered the island. Last Almohad-held part of al-Andalus.",
    kind: "port",
    details: [{ label: "Fell to Aragon", value: "1229 (James I)" }],
    coordinates: [2.6502, 39.5696]
  },
  {
    id: "niebla",
    name: "Labla",
    modernName: "Niebla, Huelva",
    description:
      "Independent taifa under Ibn Mahfuz, the last Andalusi state in the southwestern peninsula. Fell to Alfonso X of Castile 1262.",
    kind: "frontier",
    details: [{ label: "Fell to Castile", value: "1262" }],
    coordinates: [-6.6772, 37.3597]
  },
  {
    id: "lisbon",
    name: "al-Ushbūna",
    modernName: "Lisbon",
    description:
      "Almoravid frontier city. Taken by the Second Crusade in October 1147, on its way to the Holy Land — a chance diversion that gave Portugal its capital.",
    kind: "frontier",
    details: [{ label: "Fell to Portugal", value: "1147 (Second Crusade)" }],
    coordinates: [-9.1393, 38.7223]
  },
  {
    id: "merida",
    name: "Mārida",
    modernName: "Mérida",
    description:
      "Roman Augusta Emerita; major Andalusi city in the southwest. Capital of a short-lived emirate under Ibn Marwan (875–884) before incorporation into the Cordoban state.",
    kind: "city",
    coordinates: [-6.3413, 38.9165]
  },
  {
    id: "badajoz",
    name: "Baṭalyaws",
    modernName: "Badajoz",
    description:
      "Aftasid taifa (1022–1094). Fell to the Almoravids 1094, then to Alfonso IX of León 1230.",
    kind: "city",
    coordinates: [-6.9706, 38.8794]
  },
  {
    id: "sagrajas",
    name: "Battle of Sagrajas / Zallāqa",
    modernName: "near Badajoz",
    description:
      "23 October 1086. Almoravid army under Yusuf ibn Tashfin destroys Alfonso VI of Castile. The intervention saves al-Andalus from collapse — and ends taifa independence.",
    kind: "battle",
    details: [{ label: "Date", value: "23 October 1086" }],
    coordinates: [-6.9333, 38.9]
  },
  {
    id: "alarcos",
    name: "Battle of Alarcos",
    modernName: "near Ciudad Real",
    description:
      "18 July 1195. Yacoub al-Mansour's Almohads crush Alfonso VIII of Castile. The victory commemorated by the foundation of the Hassan complex in Rabat. Reversed at Las Navas de Tolosa seventeen years later.",
    kind: "battle",
    details: [{ label: "Date", value: "18 July 1195" }],
    coordinates: [-3.9489, 38.9508]
  },
  {
    id: "las-navas",
    name: "Battle of Las Navas de Tolosa",
    modernName: "Sierra Morena",
    description:
      "16 July 1212. Combined armies of Castile, Aragon, Navarre, and Portugal break the Almohad caliph al-Nasir. The hinge of the Iberian Reconquista.",
    kind: "battle",
    details: [{ label: "Date", value: "16 July 1212" }],
    coordinates: [-3.6097, 38.2917]
  }
];

export const alAndalusView = {
  center: [-4.5, 39.0] as [number, number],
  zoom: 5.0,
  bounds: [
    [-10.0, 35.5],
    [4.5, 44.0]
  ] as [[number, number], [number, number]]
};
