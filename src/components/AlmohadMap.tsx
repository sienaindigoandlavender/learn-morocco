"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AlmohadRegion, AlmohadSite } from "@/lib/maps/almohad-architecture";

type Props = {
  regions: AlmohadRegion[];
  sites: AlmohadSite[];
  center: [number, number];
  zoom: number;
  bounds?: [[number, number], [number, number]];
  height?: string;
};

const KIND_COLORS: Record<AlmohadSite["kind"], string> = {
  mosque: "#b8543a",
  minaret: "#d97758",
  gate: "#5a7d3a",
  fortification: "#4a7a8a",
  palace: "#8a4a6a",
  garden: "#6a8a4a"
};

const KIND_LABELS: Record<AlmohadSite["kind"], string> = {
  mosque: "Congregational mosque",
  minaret: "Minaret",
  gate: "Monumental gate",
  fortification: "Wall / fortress",
  palace: "Palace / kasbah",
  garden: "Garden / hydraulic"
};

export function AlmohadMap({ regions, sites, center, zoom, bounds, height = "680px" }: Props) {
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

      const siteFc: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: sites.map((s) => ({
          type: "Feature",
          id: s.id,
          properties: {
            id: s.id,
            name: s.name,
            modernName: s.modernName ?? "",
            built: s.built ?? "",
            patron: s.patron ?? "",
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
            "mosque",
            7,
            "minaret",
            7,
            5
          ],
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
          built: string;
          patron: string;
          description: string;
          kind: AlmohadSite["kind"];
        };
        const meta = [props.modernName, KIND_LABELS[props.kind]].filter(Boolean).join(" · ");
        new mapboxgl.Popup({ closeButton: true, maxWidth: "340px" })
          .setLngLat(e.lngLat)
          .setHTML(
            `<div style="font-family: var(--font-sans); padding: 4px 2px;">` +
              `<div style="font-family: var(--font-serif); font-weight: 600; font-size: 16px; color: #0a0a0a; margin-bottom: 2px;">${escapeHtml(props.name)}</div>` +
              (meta
                ? `<div style="font-family: var(--font-mono); font-size: 10px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">${escapeHtml(meta)}</div>`
                : "") +
              (props.built
                ? `<div style="font-size: 12px; color: #525252; margin-bottom: 2px;"><em>Built:</em> ${escapeHtml(props.built)}</div>`
                : "") +
              (props.patron
                ? `<div style="font-size: 12px; color: #525252; margin-bottom: 8px;"><em>Patron:</em> ${escapeHtml(props.patron)}</div>`
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
  }, [regions, sites, center, zoom, bounds]);

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
          <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">
            Caliphate at peak
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

        <div>
          <h3 className="font-mono uppercase tracking-wide text-tertiary mb-3">
            Building types
          </h3>
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
