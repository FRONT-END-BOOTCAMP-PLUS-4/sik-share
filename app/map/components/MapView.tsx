"use client";

import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { MapPin } from "lucide-react";
import { MapList } from "./MapList";
import { MapListSelect } from "./MapListSelect";

export function MapView() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<string>("");

  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    const fetchAndLoadMap = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/map`);
        const { clusters } = await res.json();

        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        const features = clusters.map((loc: any) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [loc.lng, loc.lat],
          },
          properties: {
            id: loc.id,
            count: loc.count,
            name: loc.name,
          },
        }));

        const geojson = {
          type: "FeatureCollection",
          features,
        };

        const map = new maplibregl.Map({
          container: mapContainer.current || "",
          style: `https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
          center: [126.9534602, 37.4779619], // [lng, lat]
          zoom: 15,
        });

        mapRef.current = map;

        map.on("load", () => {
          map.addSource("users", {
            type: "geojson",
            data: geojson,
          });

          map.addLayer({
            id: "clusters",
            type: "circle",
            source: "users",
            paint: {
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["get", "count"],
                1,
                25,
                10,
                35,
                50,
                45,
              ],
              "circle-color": "#22774eb3",
              "circle-stroke-width": 3,
              "circle-stroke-color": "#22774e",
            },
          });

          map.addLayer({
            id: "cluster-label",
            type: "symbol",
            source: "users",
            layout: {
              "text-field": ["get", "count"],
              "text-size": ["step", ["get", "count"], 15, 50, 20, 100, 25],
              "text-font": ["Open Sans Bold"],
            },
            paint: {
              "text-color": "#ffffff",
            },
          });
        });

        map.on("mouseenter", "clusters", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", () => {
          map.getCanvas().style.cursor = "";
        });

        map.on("click", "clusters", (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          });
          const clusterFeature = features[0];
          const clusterId = clusterFeature.properties?.id;
          const clusterCount = clusterFeature.properties.count;
          const clusterName = clusterFeature.properties.name;

          setSelectedId(Number(clusterId));
          setSelectedCount(Number(clusterCount));
          setSelectedName(clusterName);
          setDrawerOpen(true);
        });
      } catch (err) {
        console.error("지도를 불러오는 중 오류:", err);
      }
    };

    fetchAndLoadMap();

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <div ref={mapContainer} className="w-full h-[calc(100vh-56px)]" />

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="!pt-1">
          <DrawerHeader className="text-center">
            <DrawerTitle className="title-sm flex justify-center items-center gap-1">
              <MapPin />
              <p>관악구 {selectedName}</p>
            </DrawerTitle>
            <DrawerDescription className="body-md">
              근처에 {selectedCount}명의 나누미가 있어요!
            </DrawerDescription>
            <div className="w-full mt-6">
              <MapListSelect />
            </div>
          </DrawerHeader>
          <MapList selectedId={selectedId} />
        </DrawerContent>
      </Drawer>
    </>
  );
}
