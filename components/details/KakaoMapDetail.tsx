import { useEffect, useRef } from "react";

interface KakaoMapProps {
  width?: string;
  height?: string;
  lat: number;
  lng: number;
  location: string;
}

export default function KakaoMapDetail({
  width = "100%",
  height = "400px",
  lat,
  lng,
  location,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current) return;

      const container = mapRef.current;
      const center = new window.kakao.maps.LatLng(lat, lng);

      const map = new window.kakao.maps.Map(container, {
        center,
        level: 3,
      });

      const imageSrc = "/assets/images/map_pin.svg";
      const imageSize = new window.kakao.maps.Size(40, 40);
      const imageOption = {
        offset: new window.kakao.maps.Point(20, 40),
      };

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      new window.kakao.maps.Marker({
        map,
        position: center,
        image: markerImage,
      });

      const badgeDiv = document.createElement("div");
      badgeDiv.innerHTML = `
        <div class="px-2 py-1 badge-sm text-white bg-zinc-600 rounded-full shadow">
          ${location}
        </div>
      `;

      new window.kakao.maps.CustomOverlay({
        content: badgeDiv,
        map: map,
        position: center,
        yAnchor: 2.7,
      });
    };

    if (window.kakao?.maps) {
      window.kakao.maps.load(loadMap);
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=true`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao?.maps?.load(loadMap);
      };
    }
  }, [lat, lng, location]);

  return <div ref={mapRef} style={{ width, height }} />;
}
