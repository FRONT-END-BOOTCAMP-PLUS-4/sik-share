"use client";

import SubHeader from "@/components/common/SubHeader";
import KakaoMap from "@/components/details/KakaoMapDetail";
import { DetailFooter } from "@/components/details/DetailFooter";

export default function GroupBuyMeetPage() {
  return (
    <div className="relative w-full h-screen min-h-screen">
      <SubHeader titleText="만남 장소" />
      <KakaoMap
        height="calc(100vh - 115px)"
        lat={37.479}
        lng={126.9416}
        location="관악 청년청 앞"
      />
      <DetailFooter />
    </div>
  );
}
