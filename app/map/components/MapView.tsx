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
  const [filterType, setFilterType] = useState<string>("all");

  const mapContainer = useRef<HTMLDivElement>(null);

  const locationInfo = [
    { id: 15, lat: 37.4779619, lng: 126.9534602, count: 130 },
    { id: 16, lat: 37.4749956, lng: 126.9349995, count: 50 },
    { id: 17, lat: 37.4762971, lng: 126.9583884, count: 13 },
  ];

  useEffect(() => {
    const features = locationInfo.map((loc) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [loc.lng, loc.lat],
      },
      properties: {
        id: loc.id,
        count: loc.count,
      },
    }));

    const geojson = {
      type: "FeatureCollection",
      features,
    };

    const map = new maplibregl.Map({
      container: mapContainer.current || "",
      style: `https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [126.9534602, 37.4779619],
      zoom: 14,
    });

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
            10,
            10,
            20,
            50,
            40,
          ],
          "circle-color": "#22774eb3",
          "circle-stroke-width": 5,
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
      const clusterId = clusterFeature.properties.id;

      setSelectedId(clusterId);
      setDrawerOpen(true);
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainer} className="w-full h-[calc(100vh-56px)]" />

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="!pt-1">
          <DrawerHeader className="text-center">
            <DrawerTitle className="title-sm flex justify-center items-center gap-1">
              <MapPin />
              <p>관악구 봉천동</p>
            </DrawerTitle>
            <DrawerDescription className="body-md">
              근처에 {0}명의 나누미가 있어요!
            </DrawerDescription>
            <div className="w-full mt-6">
              <MapListSelect onChange={setFilterType} />
            </div>
          </DrawerHeader>
          <MapList selectedId={selectedId} filterType={filterType} />
        </DrawerContent>
      </Drawer>
    </>
  );
}
