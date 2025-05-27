import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: unknown;
  }
}

interface KakaoMapProps {
  width?: string;
  height?: string;
  lat: number;
  lng: number;
}

export default function KakaoMapDetail({
  width,
  height,
  lat,
  lng,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => {
        loadMap();
      });
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=true`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao?.maps?.load(() => {
          loadMap();
        });
      };
    }

    function loadMap() {
      if (!mapRef.current) return;
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(lat, lng),
      });
    }
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width, height }} />;
}
