"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { differenceInCalendarDays } from "date-fns";
import { Clock, MapPin, Salad } from "lucide-react";
import { useSessionStore } from "@/stores/useSessionStore";
import SubHeader from "@/components/common/SubHeader";
import Carousel from "@/components/common/shares/Carousel";
import KakaoMap from "@/components/details/KakaoMapDetail";
import { GroupBadges } from "@/components/details/GroupBadges";
import { AuthorInfo } from "@/components/details/AuthorInfo";
import { DetailFooter } from "@/components/details/DetailFooter";
import Loading from "@/components/common/Loading";

interface GroupBuyData {
  id: number;
  title: string;
  desc: string;
  organizerId: string;
  organizerNickname: string;
  organizerProfileUrl: string;
  organizerShareScore: number;
  participantProfileUrls: string[];
  capacity: number;
  currentParticipantCount: number;
  meetingDate: string;
  locationNote: string;
  lat: number;
  lng: number;
  desiredItem: string;
  imageUrls: string[];
  status: number;
}

export default function GroupBuyPage() {
  const [groupBuy, setGroupBuy] = useState<GroupBuyData | null>(null);
  const { isOwner, setIsOwner } = useSessionStore();

  const router = useRouter();
  const pathname = usePathname();
  const groupBuyId = pathname.split("/").pop();

  const handleClick = () => {
    const query = new URLSearchParams({
      lat: String(groupBuy?.lat),
      lng: String(groupBuy?.lng),
      location: String(groupBuy?.locationNote ?? ""),
    }).toString();

    router.push(`${pathname}/meet?${query}`);
  };

  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/group-buys/${groupBuyId}`);
        const json = await res.json();
        setGroupBuy(json.data);
      } catch (error) {
        console.error("Error fetching group buy detail:", error);
      }
    };
    fetchData();
  }, [groupBuyId]);

  useEffect(() => {
    if (!session.data || !groupBuy) {
      setIsOwner(false);
      return;
    }

    setIsOwner(session.data.user.id === groupBuy.organizerId);
  }, [session.data, groupBuy, setIsOwner]);

  if (!groupBuy) return <Loading />;

  const isDday = differenceInCalendarDays(
    new Date(groupBuy.meetingDate),
    new Date(),
  );

  return (
    <div className="relative min-h-screen">
      <SubHeader />
      <div className="p-4">
        <section>
          <GroupBadges
            type={"groupbuy"}
            isDday={isDday}
            status={groupBuy.status}
            meetingDate={new Date(groupBuy.meetingDate).toLocaleDateString()}
          />
          <p className="title-md mb-4">{groupBuy.title}</p>
          <Carousel
            images={
              groupBuy.imageUrls.length > 0
                ? groupBuy.imageUrls
                : ["/assets/images/example/default-group-buys-thumbnail.png"]
            }
          />
        </section>

        <AuthorInfo
          variant={"groupbuy"}
          nickname={groupBuy.organizerNickname}
          profileUrl={groupBuy.organizerProfileUrl}
          shareScore={groupBuy.organizerShareScore}
          numberOfParticipants={groupBuy.currentParticipantCount}
          capacity={groupBuy.capacity}
          participantProfileUrls={groupBuy.participantProfileUrls}
        />

        <section className="text-zinc-500 caption mt-2">
          <div className="flex items-center gap-0.5">
            <Clock size={15} strokeWidth={1} />
            <p>{new Date(groupBuy.meetingDate).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-0.5">
            <Salad size={15} strokeWidth={1} />
            <p>{groupBuy.desiredItem}</p>
          </div>
        </section>

        <section className="mt-4">
          <p>{groupBuy.desc}</p>
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
            lat={groupBuy.lat}
            lng={groupBuy.lng}
            location={groupBuy.locationNote}
          />
        </section>
      </div>
      <DetailFooter
        isOwner={isOwner ?? false}
        type={"groupbuy"}
        isDday={isDday}
        status={groupBuy.status}
        meetingDate={new Date(groupBuy.meetingDate).toLocaleDateString()}
      />
    </div>
  );
}
