"use client";

import { useSearchParams } from "next/navigation";
import SubHeader from "@/components/common/SubHeader";
import KakaoMap from "@/components/details/KakaoMapDetail";

export default function GroupBuyMeetPage() {
  const searchParams = useSearchParams();
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const location = searchParams.get("location") ?? "";

  return (
    <div className="relative w-full h-screen min-h-screen">
      <SubHeader titleText="만남 장소" />
      <KakaoMap height="100%" lat={lat} lng={lng} location={location} />
    </div>
  );
}
