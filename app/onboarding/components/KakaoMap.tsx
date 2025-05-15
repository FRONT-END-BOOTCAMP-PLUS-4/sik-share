"use client";

import useKakaoReady from "@/app/hooks/useKakaoReady";
import { useEffect, useRef } from "react";

interface KakaoMapProps {
  onSelect: (address: string, neighborhoodName: string) => void;
}

export default function KakaoMap({ onSelect }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const isKakaoReady = useKakaoReady();

  useEffect(() => {
    if (!isKakaoReady || !mapRef.current) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    const updateLocation = (map: kakao.maps.Map, marker: kakao.maps.Marker) => {
      const newCenter = map.getCenter();
      marker.setPosition(newCenter);

      geocoder.coord2Address(
        newCenter.getLng(),
        newCenter.getLat(),
        (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const addr = result[0].address;
            onSelect(addr.address_name, addr.region_3depth_name);
          }
        },
      );
    };

    const initMap = (lat: number, lng: number) => {
      const center = new window.kakao.maps.LatLng(lat, lng);
      const imageSrc = "/assets/images/map_pin.svg";
      const imageSize = new kakao.maps.Size(40, 40);
      const imageOption = { offset: new kakao.maps.Point(18, 36) }; // 마커 기준점 (가운데 하단)

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      const map = new window.kakao.maps.Map(mapRef.current!, {
        center,
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({
        map,
        position: center,
        image: markerImage,
      });

      window.kakao.maps.event.addListener(map, "dragend", () =>
        updateLocation(map, marker),
      );

      updateLocation(map, marker);
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            initMap(latitude, longitude);
          },
          () => {
            initMap(37.5665, 126.978); // fallback to 서울
          },
        );
      } else {
        initMap(37.5665, 126.978);
      }
    };

    getUserLocation();
  }, [isKakaoReady, onSelect]);

  return (
    <div className="relative w-full h-96">
      {!isKakaoReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <span className="animate-spin w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full" />
        </div>
      )}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-black text-white text-xs px-2 py-1 rounded">
        지도를 움직여서 선택해주세요.
      </div>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
