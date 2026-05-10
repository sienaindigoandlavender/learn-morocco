import type { Polygon } from "geojson";

export type Confederation = {
  id: string;
  name: string;
  era?: string;
  description: string;
  color: string;
  geometry: Polygon;
};
