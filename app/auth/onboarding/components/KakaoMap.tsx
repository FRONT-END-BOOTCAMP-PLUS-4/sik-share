"use client";

import useKakaoReady from "@/app/hooks/useKakaoReady";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

interface KakaoMapProps {
  onSelect: (address: string, neighborhoodName: string) => void;
}

export default function KakaoMap({ onSelect }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const isKakaoReady = useKakaoReady();
  const [showBadge, setShowBadge] = useState(false);

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
      setShowBadge(true);
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

      window.kakao.maps.event.addListener(map, "dragstart", () => {
        setShowBadge(false);
      });

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
            initMap(37.5665, 126.978); // 권한 거부 or 실패 시 : 서울 중심
          },
        );
      } else {
        initMap(37.5665, 126.978); // geolocation 지원 x : 서울 중심
      }
    };

    getUserLocation();
  }, [isKakaoReady, onSelect]);

  return (
    <div className="flex-1 relative">
      {!isKakaoReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <span className="animate-spin w-6 h-6 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      )}
      {showBadge && (
        <Badge
          variant="location"
          className="absolute left-1/2 top-[calc(50%-60px)] z-10 -translate-x-1/2"
        >
          지도를 움직여서 선택해주세요.
        </Badge>
      )}
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
