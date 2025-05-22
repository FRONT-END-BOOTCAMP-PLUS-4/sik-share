import { useCallback, useState } from "react";
import { HistorySection } from "@/app/users/components/HistorySection";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";

export default function SharesHistory() {
  const { publicId, isMyAccount } = useUserInfo();

  const [status, setStatus] = useState<"active" | "completed" | "expired">(
    "active",
  );

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      const res = await fetch("/api/users/shares", {
        method: "GET",
        body: JSON.stringify({
          ownerId: publicId,
          status: status,
          page: page,
          itemsPerPage: itemsPerPage,
        }),
      });

      const data = await res.json();
      return data;
    },
    [publicId, status],
  );

  const { items, loading, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 300,
    // deps: [publicId, status],
  });

  const data = [
    {
      id: "diddididcsfdm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "토요일 이마트 갈 사람",
      badgeVariant: "share" as const,
      badgeLabel: "예약",
      timeLeft: "21",
      location: "서울대입구역 롯데시네마",
      currentUser: 3,
      maxUser: 5,
    },
    {
      id: "didfidiffdcm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      timeLeft: "23",
      location: "관악구청 앞",
    },
  ];

  return (
    <HistorySection
      title="나눔 내역"
      tabValues={[
        { label: "진행 중", count: 1, value: "active" },
        { label: "종료", count: 2, value: "completed" },
        ...(isMyAccount
          ? [{ label: "기한 만료", count: 6, value: "expired" }]
          : []),
      ]}
      tabItems={{
        active: data,
        completed: data,
        ...(isMyAccount ? { expired: data } : {}),
      }}
      type="share"
    />
  );
}
