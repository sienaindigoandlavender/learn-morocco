"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Confederation } from "@/lib/maps/types";

type Props = {
  confederations: Confederation[];
  center: [number, number];
  zoom: number;
  bounds?: [[number, number], [number, number]];
  height?: string;
};

export function AmazighMap({
  confederations,
  center,
  zoom,
  bounds,
  height = "640px"
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

    if (bounds) {
      map.fitBounds(bounds, { padding: 30, animate: false });
    }

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      const fc: GeoJSON.FeatureCollection = {
        type: "FeatureCollection",
        features: confederations.map((c) => ({
          type: "Feature",
          id: c.id,
          properties: {
            id: c.id,
            name: c.name,
            description: c.description,
            color: c.color,
            era: c.era ?? ""
          },
          geometry: c.geometry
        }))
      };

      map.addSource("confederations", { type: "geojson", data: fc });

      map.addLayer({
        id: "confederations-fill",
        type: "fill",
        source: "confederations",
        paint: {
          "fill-color": ["get", "color"],
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.55,
            0.32
          ]
        }
      });

      map.addLayer({
        id: "confederations-outline",
        type: "line",
        source: "confederations",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 1.25,
          "line-opacity": 0.7
        }
      });

      map.addLayer({
        id: "confederations-label",
        type: "symbol",
        source: "confederations",
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-size": 11,
          "text-letter-spacing": 0.04,
          "text-allow-overlap": false,
          "text-padding": 4
        },
        paint: {
          "text-color": "#1a1a1a",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.4
        }
      });

      let hoveredId: string | number | null = null;
      map.on("mousemove", "confederations-fill", (e) => {
        const feat = e.features?.[0];
        if (!feat || feat.id === undefined) return;
        if (hoveredId !== null) {
          map.setFeatureState({ source: "confederations", id: hoveredId }, { hover: false });
        }
        hoveredId = feat.id as string | number;
        map.setFeatureState({ source: "confederations", id: hoveredId }, { hover: true });
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "confederations-fill", () => {
        if (hoveredId !== null) {
          map.setFeatureState({ source: "confederations", id: hoveredId }, { hover: false });
        }
        hoveredId = null;
        map.getCanvas().style.cursor = "";
      });

      map.on("click", "confederations-fill", (e) => {
        const feat = e.features?.[0];
        if (!feat) return;
        const props = feat.properties as { name: string; description: string; era: string };
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
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [confederations, center, zoom, bounds]);

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

  return (
    <div className="space-y-6">
      <div ref={containerRef} style={{ height }} className="border border-border" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-meta">
        {confederations.map((c) => (
          <li key={c.id} className="flex items-start gap-2">
            <span
              className="mt-1.5 inline-block w-3 h-3 flex-shrink-0"
              style={{ backgroundColor: c.color, opacity: 0.6, border: `1px solid ${c.color}` }}
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
