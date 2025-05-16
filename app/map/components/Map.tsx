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
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";

export function MapView() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const mapContainer = useRef(null);

  // 추후 DB 매핑 필요
  const locationInfo = [
    {
      id: 1,
      lat: 37.4779619,
      lng: 126.9534602,
      count: 130,
    },
    {
      id: 2,
      lat: 37.4749956,
      lng: 126.9349995,
      count: 50,
    },
    {
      id: 3,
      lat: 37.4762971,
      lng: 126.9583884,
      count: 13,
    },
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
      center: [126.9534602, 37.4779619], // 로그인 한 user의 위치 데이터 매핑 필요
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

    map.on("click", "clusters", async (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      });
      const clusterFeature = features[0];
      const clusterId = clusterFeature.properties.id; // DB neightborhood - share id 매핑 필요
      // share - neighthood id(clusterId)에 해당하는 리스트 출력 필요

      setSelectedId(clusterId);
      setDrawerOpen(true);
    });

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div>
                <p>선택된 ID: {selectedId}</p>
              </div>
            </DrawerTitle>
            <DrawerDescription className="!font-light">
              리스트를 출력해보자 리스트를 출력해보자 리스트를 출력해보자
              리스트를 출력해보자 리스트를 출력해보자 리스트를 출력해보자
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>닫기</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
