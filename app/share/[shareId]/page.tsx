"use client";

import { MapPin, Salad } from "lucide-react";
import SubHeader from "@/components/common/SubHeader";
import Carousel from "@/components/common/shares/Carousel";
import KakaoMap from "@/components/details/KakaoMapDetail";
import { GroupBadges } from "@/components/details/GroupBadges";
import { AuthorInfo } from "@/components/details/AuthorInfo";
import { DetailFooter } from "@/components/details/DetailFooter";
import { useRouter, usePathname } from "next/navigation";

export default function GroupBuyPage() {
  const DummyImage = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvb2R8ZW58MHx8fHwxNjg3NTY5NzA1&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  ];

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(`${pathname}/meet`);
  };

  return (
    <div className="relative min-h-screen">
      <SubHeader />
      <div className="p-4">
        <section>
          <GroupBadges />
          <p className="title-md mb-4">제목을 입력하세요</p>
          <Carousel images={DummyImage} />
        </section>

        <AuthorInfo variant={"share"} />

        <section className="text-zinc-500 caption mt-2">
          <div className="flex items-center gap-[1px]">
            <Salad size={15} />
            <p>감자</p>
          </div>
        </section>

        <section className="mt-4">
          <p>
            이번 주 이마트 특가 세일 한다는데, 같이 장보러 가실 분 구합니다!
            최대 5명 모집이고, 3명부터는 무조건 가는 거에요!
          </p>
        </section>

        <section className="flex flex-col h-[200px] mt-4 mb-[58px]">
          <div className="flex justify-between mb-1">
            <p className="text-[12px]">만남 장소</p>
            <button
              className="flex items-center gap-0.5 cursor-pointer"
              onClick={handleClick}
              type="button"
            >
              <MapPin size={16} />
              <p className="text-[12px]">상세보기</p>
            </button>
          </div>
          <KakaoMap
            width="100%"
            height="100%"
            lat={37.479}
            lng={126.9416}
            location={"관악 청년청 앞"}
          />
        </section>
      </div>
      <DetailFooter />
    </div>
  );
}
