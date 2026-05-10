import type { Polygon } from "geojson";

export type RomanProvince = {
  id: string;
  name: string;
  era?: string;
  description: string;
  color: string;
  geometry: Polygon;
};

export type RomanSite = {
  id: string;
  name: string;
  modernName?: string;
  founded?: string;
  description: string;
  kind: "capital" | "colonia" | "municipium" | "legion" | "port" | "frontier" | "site";
  coordinates: [number, number];
};
