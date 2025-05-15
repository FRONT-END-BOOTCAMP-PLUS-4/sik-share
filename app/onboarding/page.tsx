"use client";

import { useCallback, useState } from "react";
import KakaoMap from "./components/KakaoMap";

export default function OnboardingPage() {
  const [location, setLocation] = useState<{
    address: string;
    neighborhoodName: string;
  } | null>(null);

  const onSelect = useCallback((address: string, neighborhoodName: string) => {
    setLocation({ address, neighborhoodName });
  }, []);

  return (
    <section>
      <KakaoMap onSelect={onSelect} />
    </section>
  );
}
