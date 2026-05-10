"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { RomanProvince, RomanSite } from "@/lib/maps/roman-types";

type Props = {
  provinces: RomanProvince[];
  sites: RomanSite[];
  center: [number, number];
  zoom: number;
  bounds?: [[number, number], [number, number]];
  height?: string;
};

const KIND_COLORS: Record<RomanSite["kind"], string> = {
  capital: "#b8543a",
  colonia: "#5a7d3a",
  municipium: "#c89d3a",
  legion: "#8a4a6a",
  port: "#4a7a8a",
  frontier: "#6a4a8a",
  site: "#525252"
};

const KIND_LABELS: Record<RomanSite["kind"], string> = {
  capital: "Provincial capital",
  colonia: "Colonia (veteran colony)",
  municipium: "Municipium / town",
  legion: "Legionary base",
  port: "Port",
  frontier: "Frontier post",
  site: "Site / non-Roman"
};

export function RomanMap({ provinces, sites, center, zoom, bounds, height = "680px" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [tokenMissing, setTokenMissing] = useState(false);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      setTokenMissing(true);
      return;
    }
    if (!containerRef.current) return;

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center,
      zoom,
      attributionControl: true
    });
    mapRef.current = map;

    if (bounds) {
      map.fitBounds(bounds, { padding: 30, animate: false });
    }

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      const provinceFc: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: provinces.map((p) => ({
          type: "Feature",
          id: p.id,
          properties: {
            id: p.id,
            name: p.name,
            description: p.description,
            color: p.color,
            era: p.era ?? ""
          },
          geometry: p.geometry
        }))
      };

      map.addSource("provinces", { type: "geojson", data: provinceFc });
      map.addLayer({
        id: "provinces-fill",
        type: "fill",
        source: "provinces",
        paint: {
          "fill-color": ["get", "color"],
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.45,
            0.22
          ]
        }
      });
      map.addLayer({
        id: "provinces-outline",
        type: "line",
        source: "provinces",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 1.0,
          "line-opacity": 0.6
        }
      });

      const siteFc: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: sites.map((s) => ({
          type: "Feature",
          id: s.id,
          properties: {
            id: s.id,
            name: s.name,
            modernName: s.modernName ?? "",
            founded: s.founded ?? "",
            description: s.description,
            kind: s.kind,
            color: KIND_COLORS[s.kind]
          },
          geometry: { type: "Point", coordinates: s.coordinates }
        }))
      };

      map.addSource("sites", { type: "geojson", data: siteFc });
      map.addLayer({
        id: "sites-circle",
        type: "circle",
        source: "sites",
        paint: {
          "circle-radius": [
            "match",
            ["get", "kind"],
            "capital",
            7,
            "legion",
            6,
            5
          ],
          "circle-color": ["get", "color"],
          "circle-opacity": 0.85,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 1.5
        }
      });
      map.addLayer({
        id: "sites-label",
        type: "symbol",
        source: "sites",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-size": 11,
          "text-offset": [0, 1.1],
          "text-anchor": "top",
          "text-allow-overlap": false,
          "text-padding": 2
        },
        paint: {
          "text-color": "#1a1a1a",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.4
        }
      });

      let hoveredProvince: string | number | null = null;
      map.on("mousemove", "provinces-fill", (e) => {
        const f = e.features?.[0];
        if (!f || f.id === undefined) return;
        if (hoveredProvince !== null) {
          map.setFeatureState({ source: "provinces", id: hoveredProvince }, { hover: false });
        }
        hoveredProvince = f.id as string | number;
        map.setFeatureState({ source: "provinces", id: hoveredProvince }, { hover: true });
      });
      map.on("mouseleave", "provinces-fill", () => {
        if (hoveredProvince !== null) {
          map.setFeatureState({ source: "provinces", id: hoveredProvince }, { hover: false });
        }
        hoveredProvince = null;
      });

      map.on("click", "provinces-fill", (e) => {
        const f = e.features?.[0];
        if (!f) return;
        const props = f.properties as { name: string; description: string; era: string };
        new mapboxgl.Popup({ closeButton: true, maxWidth: "320px" })
          .setLngLat(e.lngLat)
          .setHTML(
            `<div style="font-family: var(--font-sans); padding: 4px 2px;">` +
              `<div style="font-family: var(--font-serif); font-weight: 600; font-size: 16px; color: #0a0a0a; margin-bottom: 4px;">${escapeHtml(props.name)}</div>` +
              (props.era
                ? `<div style="font-family: var(--font-mono); font-size: 10px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">${escapeHtml(props.era)}</div>`
                : "") +
              `<div style="font-size: 13px; line-height: 1.55; color: #262626;">${escapeHtml(props.description)}</div>` +
            `</div>`
          )
          .addTo(map);
      });

      map.on("mouseenter", "sites-circle", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "sites-circle", () => {
        map.getCanvas().style.cursor = "";
      });
      map.on("click", "sites-circle", (e) => {
        const f = e.features?.[0];
        if (!f) return;
        const props = f.properties as {
          name: string;
          modernName: string;
          founded: string;
          description: string;
          kind: RomanSite["kind"];
        };
        const meta = [props.modernName, KIND_LABELS[props.kind]].filter(Boolean).join(" · ");
        new mapboxgl.Popup({ closeButton: true, maxWidth: "320px" })
          .setLngLat(e.lngLat)
          .setHTML(
            `<div style="font-family: var(--font-sans); padding: 4px 2px;">` +
              `<div style="font-family: var(--font-serif); font-weight: 600; font-size: 16px; color: #0a0a0a; margin-bottom: 2px;">${escapeHtml(props.name)}</div>` +
              (meta
                ? `<div style="font-family: var(--font-mono); font-size: 10px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">${escapeHtml(meta)}</div>`
                : "") +
              (props.founded
                ? `<div style="font-size: 12px; color: #525252; margin-bottom: 6px;"><em>Founded:</em> ${escapeHtml(props.founded)}</div>`
                : "") +
              `<div style="font-size: 13px; line-height: 1.55; color: #262626;">${escapeHtml(props.description)}</div>` +
            `</div>`
          )
          .addTo(map);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [provinces, sites, center, zoom, bounds]);

  if (tokenMissing) {
    return (
      <div
        style={{ height }}
        className="border border-border bg-codebg flex items-center justify-center p-8"
      >
        <div className="max-w-md text-center">
          <div className="font-mono text-meta uppercase tracking-wide text-tertiary mb-3">
            Map unavailable
          </div>
          <p className="text-ink">
            Set <code className="bg-white px-1.5 py-0.5">NEXT_PUBLIC_MAPBOX_TOKEN</code>{" "}
            in <code className="bg-white px-1.5 py-0.5">.env.local</code> to enable
            interactive maps. Get a free token at{" "}
            <a
              href="https://account.mapbox.com/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-accent"
            >
              account.mapbox.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const usedKinds = Array.from(new Set(sites.map((s) => s.kind)));

  return (
    <div className="space-y-6">
      <div ref={containerRef} style={{ height }} className="border border-border" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 text-meta">
        <div>
          <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">Provinces</h3>
          <ul className="space-y-2 border-t border-border pt-3">
            {provinces.map((p) => (
              <li key={p.id} className="flex items-start gap-2">
                <span
                  className="mt-1.5 inline-block w-3 h-3 flex-shrink-0"
                  style={{ backgroundColor: p.color, opacity: 0.5, border: `1px solid ${p.color}` }}
                />
                <span className="flex flex-col">
                  <span className="text-ink">{p.name}</span>
                  {p.era && (
                    <span className="font-mono text-[10px] uppercase tracking-wide text-tertiary">
                      {p.era}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">Sites</h3>
          <ul className="space-y-2 border-t border-border pt-3">
            {usedKinds.map((kind) => (
              <li key={kind} className="flex items-start gap-2">
                <span
                  className="mt-1.5 inline-block w-3 h-3 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: KIND_COLORS[kind],
                    border: `1.5px solid #ffffff`,
                    boxShadow: `0 0 0 1px ${KIND_COLORS[kind]}`
                  }}
                />
                <span className="text-ink">{KIND_LABELS[kind]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
