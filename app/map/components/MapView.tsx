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
import { useMapFilterStore } from "@/stores/useMapFilterStore";
import { Badge } from "@/components/ui/badge";
import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function MapView() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<string>("");

  const { setFilterType } = useMapFilterStore();

  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  const session = useSession();
  const userId = session.data?.user.publicId;
  console.log(userId);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchAndLoadMap = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/map`);
        const { clusters } = await res.json();
        // const userInfo = await fetch(
        //   `${process.env.NEXT_PUBLIC_API_URL}/api/users?id=${userId}`,
        // );

        type ClusterLocation = {
          id: number;
          count: number;
          name: string;
          lng: number;
          lat: number;
        };

        const features = clusters
          .filter((loc: ClusterLocation) => loc.count > 0)
          .map((loc: ClusterLocation) => ({
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

        const geojson: GeoJSON.FeatureCollection = {
          type: "FeatureCollection",
          features: features as GeoJSON.Feature[],
        };

        const map = new maplibregl.Map({
          container: mapContainer.current || "",
          style: `https://api.maptiler.com/maps/basic/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
          center: [126.9534602, 37.4779619], // [lng, lat]
          zoom: 13,
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

        map.on("mouseenter", "clusters", (e) => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "clusters", () => {
          map.getCanvas().style.cursor = "";
        });

        map.on("moveend", () => {
          const center = map.getCenter();

          const features = map.queryRenderedFeatures(undefined, {
            layers: ["clusters"],
          });

          if (!features.length) return;

          let nearestFeature = features[0];
          let minDist = 0;

          if (
            features[0].geometry.type === "Point" &&
            Array.isArray((features[0].geometry as GeoJSON.Point).coordinates)
          ) {
            minDist = distance(
              center,
              (features[0].geometry as GeoJSON.Point).coordinates as [
                number,
                number,
              ],
            );
          }

          for (let i = 1; i < features.length; i++) {
            const geom = features[i].geometry;
            if (
              geom.type === "Point" &&
              Array.isArray((geom as GeoJSON.Point).coordinates)
            ) {
              const dist = distance(
                center,
                (geom as GeoJSON.Point).coordinates as [number, number],
              );
              if (dist < minDist) {
                minDist = dist;
                nearestFeature = features[i];
              }
            }
          }

          const name = nearestFeature.properties?.name;
          const count = nearestFeature.properties?.count;
          const id = nearestFeature.properties?.id;

          if (name) {
            setSelectedName(name);
            setSelectedCount(Number(count));
            setSelectedId(Number(id));
          }
        });

        function distance(center: maplibregl.LngLat, coords: [number, number]) {
          const dx = center.lng - coords[0];
          const dy = center.lat - coords[1];
          return Math.sqrt(dx * dx + dy * dy);
        }

        map.on("click", "clusters", (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          });
          const clusterFeature = features[0];
          const clusterId = clusterFeature.properties?.id;
          const clusterCount = clusterFeature.properties.count;
          const clusterName = clusterFeature.properties.name;

          setFilterType("all");
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

  const router = useRouter();

  const options: DropdownOption[] = [
    {
      id: "group-buy",
      label: "같이 장보기",
      onClick: () => {
        router.push("/register/group-buy");
      },
    },
    {
      id: "share",
      label: "나눔",
      onClick: () => {
        router.push("/register/share");
      },
    },
  ];

  return (
    <>
      <div className="relative">
        <div ref={mapContainer} className="w-full h-[calc(100vh-56px)]" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50">
          <Badge variant="location">{`관악구 ${selectedName}`}</Badge>
        </div>
        <div className="flex flex-col gap-3 mb-5 absolute bottom-12 right-4 z-50">
          <DropdownButton options={options} type="register" align="top" />
        </div>
      </div>

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
