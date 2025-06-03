"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { MapPin, Salad, ClockFading } from "lucide-react";
import { useSessionStore } from "@/stores/useSessionStore";
import SubHeader from "@/components/common/SubHeader";
import Carousel from "@/components/common/shares/Carousel";
import KakaoMap from "@/components/details/KakaoMapDetail";
import { GroupBadges } from "@/components/details/GroupBadges";
import { AuthorInfo } from "@/components/details/AuthorInfo";
import { DetailFooter } from "@/components/details/DetailFooter";
import Loading from "@/components/common/Loading";

interface ShareData {
  id: number;
  title: string;
  desc: string;
  organizerId: string;
  organizerPublicId: string;
  organizerNickname: string;
  organizerProfileUrl: string;
  organizerShareScore: number;
  meetingDate: string;
  locationNote: string;
  lat: number;
  lng: number;
  desiredItemName: string;
  imageUrls: string[];
  remainingHours: number;
  status: number;
}

export default function GroupBuyPage() {
  const [share, setShare] = useState<ShareData | null>(null);
  const { isOwner, setIsOwner } = useSessionStore();

  const router = useRouter();
  const pathname = usePathname();
  const shareId = pathname.split("/").pop();

  const handleClick = () => {
    const query = new URLSearchParams({
      lat: String(share?.lat),
      lng: String(share?.lng),
      location: String(share?.locationNote ?? ""),
    }).toString();

    router.push(`${pathname}/meet?${query}`);
  };

  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/shares/${shareId}`);

        if (res.status === 404) {
          router.replace("/not-found");
          return;
        }

        const json = await res.json();
        setShare(json.data);
      } catch (error) {
        console.error("Error fetching group buy detail:", error);
      }
    };
    fetchData();
  }, [shareId, router]);

  useEffect(() => {
    if (!session.data || !share) {
      setIsOwner(false);
      return;
    }

    setIsOwner(session.data.user.id === share.organizerId);
  }, [session.data, share, setIsOwner]);

  if (!share) return <Loading />;

  console.log(share);

  return (
    <div className="relative min-h-screen">
      <SubHeader />
      <div className="p-4">
        <section>
          <GroupBadges
            type={"share"}
            status={share.status}
            remainingHours={share.remainingHours}
          />
          <p className="title-md mb-4">{share.title}</p>
          <Carousel
            images={
              share.imageUrls.length > 0
                ? share.imageUrls
                : ["/assets/images/example/default-group-buys-thumbnail.png"]
            }
          />
        </section>

        <AuthorInfo
          variant={"share"}
          nickname={share.organizerNickname}
          profileUrl={share.organizerProfileUrl}
          shareScore={share.organizerShareScore}
          id={share.organizerPublicId}
        />

        <section className="text-zinc-500 caption mt-2">
          <div className="flex items-center gap-0.5">
            <Salad size={15} strokeWidth={1} />
            <p>{share.desiredItemName}</p>
          </div>
          {share.status === 0 && share.remainingHours !== 0 && (
            <div className="flex items-center gap-0.5">
              <ClockFading size={15} strokeWidth={1} />
              <span className="text-destructive">{share.remainingHours}</span>
              <span>시간 남음</span>
            </div>
          )}
        </section>

        <section className="mt-4">
          <p className="whitespace-pre-line">{share.desc}</p>
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
            lat={share.lat}
            lng={share.lng}
            location={share.locationNote}
          />
        </section>
      </div>
      <DetailFooter
        isOwner={isOwner ?? false}
        type={"share"}
        status={share.status}
        remainingHours={share.remainingHours}
        postId={share.id}
        userId={session.data?.user?.id ?? ""}
      />
    </div>
  );
}
