"use client";

import { useCallback, useState } from "react";
import KakaoMap from "./components/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import { Button } from "@/components/ui/button";

export default function OnboardingPage() {
  const [location, setLocation] = useState<{
    address: string;
    neighborhoodName: string;
  } | null>(null);

  const onSelect = useCallback((address: string, neighborhoodName: string) => {
    setLocation({ address, neighborhoodName });
  }, []);

  console.log(location);

  return (
    <>
      <SubHeader
        isBackBtn={false}
        DescTitleText={`식샤 나눔을 위해
          동네를 공유해주세요.`}
        DescSubText="지금 위치는 어디신가요?"
      />
      <section className="h-[calc(100vh-180px)] flex flex-col">
        <KakaoMap onSelect={onSelect} />
        <div className="absolute bottom-0 z-50 w-full py-3 px-4 bg-white border-t-1 border-zinc-300">
          <Button variant="joinFullBtn" size="lg">
            위치 선택 완료
          </Button>
        </div>
      </section>
    </>
  );
}
