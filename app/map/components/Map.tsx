"use client";

import { useRef, useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function MapView() {
  const mapContainer = useRef(null);

  // 추후 DB 매핑 필요
  const locationInfo = [
    {
      id: 1,
      name: "봉천동",
      district: "관악구",
      lat: 37.4779619,
      lng: 126.9534602,
      grouBuys: [],
      shares: [],
      users: [{ id: "1766fe3f-6015-418e-b645-a0e14d69ca84" }],
    },
    {
      id: 2,
      name: "난곡동",
      district: "관악구",
      lat: 37.4709634,
      lng: 126.9216507,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 3,
      name: "미성동",
      district: "관악구",
      lat: 37.4761761,
      lng: 126.9155534,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 4,
      name: "삼성동",
      district: "관악구",
      lat: 37.470101,
      lng: 126.932963,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 5,
      name: "대학동",
      district: "관악구",
      lat: 37.4706145,
      lng: 126.9369907,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 6,
      name: "조원동",
      district: "관악구",
      lat: 37.4826299,
      lng: 126.9078649,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 7,
      name: "난향동",
      district: "관악구",
      lat: 37.461429,
      lng: 126.918842,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 8,
      name: "신림동",
      district: "관악구",
      lat: 37.487426,
      lng: 126.927075,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 9,
      name: "신사동",
      district: "관악구",
      lat: 37.4829831,
      lng: 126.9192856,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 10,
      name: "서림동",
      district: "관악구",
      lat: 37.4749956,
      lng: 126.9349995,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 11,
      name: "신원동",
      district: "관악구",
      lat: 37.4815883,
      lng: 126.9273519,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 12,
      name: "서원동",
      district: "관악구",
      lat: 37.4797346,
      lng: 126.9313,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 13,
      name: "남현동",
      district: "관악구",
      lat: 37.4745394,
      lng: 126.9778366,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 14,
      name: "인헌동",
      district: "관악구",
      lat: 37.4750974,
      lng: 126.9652628,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 15,
      name: "중앙동",
      district: "관악구",
      lat: 37.4842598,
      lng: 126.9497133,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 16,
      name: "은천동",
      district: "관악구",
      lat: 37.4853086,
      lng: 126.9424278,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 17,
      name: "청룡동",
      district: "관악구",
      lat: 37.4791304,
      lng: 126.9416518,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 18,
      name: "낙성대동",
      district: "관악구",
      lat: 37.4762971,
      lng: 126.9583884,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 19,
      name: "행운동",
      district: "관악구",
      lat: 37.4806541,
      lng: 126.9570456,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 20,
      name: "성현동",
      district: "관악구",
      lat: 37.4895366,
      lng: 126.9481271,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 21,
      name: "청림동",
      district: "관악구",
      lat: 37.4918329,
      lng: 126.9585773,
      grouBuys: [],
      shares: [],
      users: [],
    },
    {
      id: 22,
      name: "보라매동",
      district: "관악구",
      lat: 37.4881456,
      lng: 126.9327389,
      grouBuys: [],
      shares: [],
      users: [],
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
        dongId: loc.id,
        dongName: loc.name,
        district: loc.district,
        count: loc.users.length,
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
      zoom: 15,
    });

    map.on("load", () => {
      map.addSource("users", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "dong-points",
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
          "circle-color": "#51bbd6",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#fff",
        },
      });

      map.addLayer({
        id: "dong-count-label",
        type: "symbol",
        source: "users",
        layout: {
          "text-field": ["get", "count"],
          "text-size": 14,
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        },
        paint: {
          "text-color": "#222",
        },
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
}
