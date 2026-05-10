"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export type HistoricalRegion = {
  id: string;
  name: string;
  era?: string;
  description: string;
  color: string;
  geometry: GeoJSON.Polygon | GeoJSON.MultiPolygon;
};

export type HistoricalSite = {
  id: string;
  name: string;
  modernName?: string;
  details?: { label: string; value: string }[];
  description: string;
  kind: string;
  coordinates: [number, number];
};

export type HistoricalConnection = {
  id: string;
  name: string;
  era?: string;
  description: string;
  color: string;
  from: [number, number];
  to: [number, number];
};

export type KindStyle = { color: string; label: string; radius?: number };

type Props = {
  regions?: HistoricalRegion[];
  sites: HistoricalSite[];
  connections?: HistoricalConnection[];
  kindStyles: Record<string, KindStyle>;
  regionLegendTitle?: string;
  kindLegendTitle?: string;
  connectionLegendTitle?: string;
  center: [number, number];
  zoom: number;
  bounds?: [[number, number], [number, number]];
  height?: string;
};

export function HistoricalMap({
  regions = [],
  sites,
  connections = [],
  kindStyles,
  regionLegendTitle = "Phases",
  kindLegendTitle = "Sites",
  connectionLegendTitle = "Crossings",
  center,
  zoom,
  bounds,
  height = "680px"
}: Props) {
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
    if (bounds) map.fitBounds(bounds, { padding: 30, animate: false });
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      if (regions.length > 0) {
        const regionFc: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: regions.map((r) => ({
            type: "Feature",
            id: r.id,
            properties: {
              id: r.id,
              name: r.name,
              description: r.description,
              color: r.color,
              era: r.era ?? ""
            },
            geometry: r.geometry
          }))
        };
        map.addSource("regions", { type: "geojson", data: regionFc });
        map.addLayer({
          id: "regions-fill",
          type: "fill",
          source: "regions",
          paint: {
            "fill-color": ["get", "color"],
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.4,
              0.18
            ]
          }
        });
        map.addLayer({
          id: "regions-outline",
          type: "line",
          source: "regions",
          paint: {
            "line-color": ["get", "color"],
            "line-width": 1.0,
            "line-opacity": 0.55
          }
        });
      }

      if (connections.length > 0) {
        const connFc: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: connections.map((c) => ({
            type: "Feature",
            id: c.id,
            properties: {
              id: c.id,
              name: c.name,
              description: c.description,
              color: c.color,
              era: c.era ?? ""
            },
            geometry: { type: "LineString", coordinates: [c.from, c.to] }
          }))
        };
        map.addSource("connections", { type: "geojson", data: connFc });
        map.addLayer({
          id: "connections-line",
          type: "line",
          source: "connections",
          paint: {
            "line-color": ["get", "color"],
            "line-width": 2.5,
            "line-opacity": 0.85,
            "line-dasharray": [2, 1]
          }
        });
      }

      const siteFc: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: sites.map((s) => ({
          type: "Feature",
          id: s.id,
          properties: {
            id: s.id,
            name: s.name,
            modernName: s.modernName ?? "",
            description: s.description,
            kind: s.kind,
            color: kindStyles[s.kind]?.color ?? "#525252",
            radius: kindStyles[s.kind]?.radius ?? 5,
            kindLabel: kindStyles[s.kind]?.label ?? s.kind,
            details: JSON.stringify(s.details ?? [])
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
          "circle-radius": ["get", "radius"],
          "circle-color": ["get", "color"],
          "circle-opacity": 0.9,
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

      let hoveredRegion: string | number | null = null;
      if (regions.length > 0) {
        map.on("mousemove", "regions-fill", (e) => {
          const f = e.features?.[0];
          if (!f || f.id === undefined) return;
          if (hoveredRegion !== null) {
            map.setFeatureState({ source: "regions", id: hoveredRegion }, { hover: false });
          }
          hoveredRegion = f.id as string | number;
          map.setFeatureState({ source: "regions", id: hoveredRegion }, { hover: true });
        });
        map.on("mouseleave", "regions-fill", () => {
          if (hoveredRegion !== null) {
            map.setFeatureState({ source: "regions", id: hoveredRegion }, { hover: false });
          }
          hoveredRegion = null;
        });
        map.on("click", "regions-fill", (e) => {
          const f = e.features?.[0];
          if (!f) return;
          const props = f.properties as { name: string; description: string; era: string };
          new mapboxgl.Popup({ closeButton: true, maxWidth: "320px" })
            .setLngLat(e.lngLat)
            .setHTML(popupHtml(props.name, props.era, [], props.description))
            .addTo(map);
        });
      }

      if (connections.length > 0) {
        map.on("mouseenter", "connections-line", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "connections-line", () => {
          map.getCanvas().style.cursor = "";
        });
        map.on("click", "connections-line", (e) => {
          const f = e.features?.[0];
          if (!f) return;
          const props = f.properties as { name: string; description: string; era: string };
          new mapboxgl.Popup({ closeButton: true, maxWidth: "320px" })
            .setLngLat(e.lngLat)
            .setHTML(popupHtml(props.name, props.era, [], props.description))
            .addTo(map);
        });
      }

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
          kindLabel: string;
          description: string;
          details: string;
        };
        const meta = [props.modernName, props.kindLabel].filter(Boolean).join(" · ");
        let details: { label: string; value: string }[] = [];
        try {
          details = JSON.parse(props.details);
        } catch {
          details = [];
        }
        new mapboxgl.Popup({ closeButton: true, maxWidth: "340px" })
          .setLngLat(e.lngLat)
          .setHTML(popupHtml(props.name, meta, details, props.description))
          .addTo(map);
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [regions, sites, connections, kindStyles, center, zoom, bounds]);

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-6 text-meta">
        {regions.length > 0 && (
          <div>
            <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">
              {regionLegendTitle}
            </h3>
            <ul className="space-y-2 border-t border-border pt-3">
              {regions.map((r) => (
                <li key={r.id} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 inline-block w-3 h-3 flex-shrink-0"
                    style={{ backgroundColor: r.color, opacity: 0.5, border: `1px solid ${r.color}` }}
                  />
                  <span className="flex flex-col">
                    <span className="text-ink">{r.name}</span>
                    {r.era && (
                      <span className="font-mono text-[10px] uppercase tracking-wide text-tertiary">
                        {r.era}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">
            {kindLegendTitle}
          </h3>
          <ul className="space-y-2 border-t border-border pt-3">
            {usedKinds.map((kind) => (
              <li key={kind} className="flex items-start gap-2">
                <span
                  className="mt-1.5 inline-block w-3 h-3 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: kindStyles[kind]?.color ?? "#525252",
                    border: `1.5px solid #ffffff`,
                    boxShadow: `0 0 0 1px ${kindStyles[kind]?.color ?? "#525252"}`
                  }}
                />
                <span className="text-ink">{kindStyles[kind]?.label ?? kind}</span>
              </li>
            ))}
          </ul>
        </div>

        {connections.length > 0 && (
          <div>
            <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">
              {connectionLegendTitle}
            </h3>
            <ul className="space-y-2 border-t border-border pt-3">
              {connections.map((c) => (
                <li key={c.id} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block w-3 flex-shrink-0"
                    style={{
                      borderTop: `2.5px dashed ${c.color}`,
                      height: 0
                    }}
                  />
                  <span className="flex flex-col">
                    <span className="text-ink">{c.name}</span>
                    {c.era && (
                      <span className="font-mono text-[10px] uppercase tracking-wide text-tertiary">
                        {c.era}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function popupHtml(
  title: string,
  subtitle: string,
  details: { label: string; value: string }[],
  description: string
): string {
  return (
    `<div style="font-family: var(--font-sans); padding: 4px 2px;">` +
    `<div style="font-family: var(--font-serif); font-weight: 600; font-size: 16px; color: #0a0a0a; margin-bottom: 2px;">${escapeHtml(title)}</div>` +
    (subtitle
      ? `<div style="font-family: var(--font-mono); font-size: 10px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">${escapeHtml(subtitle)}</div>`
      : "") +
    details
      .map(
        (d) =>
          `<div style="font-size: 12px; color: #525252; margin-bottom: 2px;"><em>${escapeHtml(d.label)}:</em> ${escapeHtml(d.value)}</div>`
      )
      .join("") +
    (details.length > 0 ? `<div style="height: 6px;"></div>` : "") +
    `<div style="font-size: 13px; line-height: 1.55; color: #262626;">${escapeHtml(description)}</div>` +
    `</div>`
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
