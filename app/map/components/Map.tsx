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

import { useInfiniteScroll } from "@/hooks/useInfinityScroll"; // 경로 맞게 조정

export function MapView() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const mapContainer = useRef<HTMLDivElement>(null);

  const locationInfo = [
    { id: 1, lat: 37.4779619, lng: 126.9534602, count: 130 },
    { id: 2, lat: 37.4749956, lng: 126.9349995, count: 50 },
    { id: 3, lat: 37.4762971, lng: 126.9583884, count: 13 },
  ];

  // fetcher 함수: selectedId, 페이지(=offset) 기반으로 항목 가져오기
  const fetcher = async (page: number) => {
    if (selectedId === null) return [];
    await new Promise((r) => setTimeout(r, 1000)); // 딜레이 시뮬레이션

    const maxItems = 100;
    const itemsPerPage = 20;
    const start = page * itemsPerPage;

    if (start >= maxItems) return [];

    return Array.from(
      { length: Math.min(itemsPerPage, maxItems - start) },
      (_, i) => `ID ${selectedId} - 항목 ${start + i + 1}`,
    );
  };

  const { items, loading, containerRef, reset } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    maxItems: 100,
  });

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
      reset(); // 선택 바뀌면 리스트 초기화
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
            <DrawerTitle>선택된 ID: {selectedId ?? "없음"}</DrawerTitle>
            <DrawerDescription className="!font-light">
              클러스터에 연결된 리스트를 무한 스크롤로 출력합니다.
            </DrawerDescription>
          </DrawerHeader>

          {/* 무한스크롤 리스트 영역 */}
          <div
            ref={containerRef}
            style={{
              height: "300px",
              overflowY: "auto",
              borderTop: "1px solid #ddd",
              padding: "0 16px",
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "14px",
                }}
              >
                {item}
              </div>
            ))}

            {loading && (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                로딩 중...
              </div>
            )}
          </div>

          <DrawerFooter>
            <DrawerClose>닫기</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
