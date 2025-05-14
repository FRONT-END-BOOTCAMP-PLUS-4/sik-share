import { HistorySection } from "../../components/HistorySection";

export default function SharesHistory() {
  const isMyAccount = true;
  const data = [
    {
      id: "diddididcsfdm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "토요일 이마트 갈 사람",
      badgeVariant: "cart" as const,
      badgeLabel: "같이 장보기",
      timeLeft: "2025-05-18",
      location: "서울대입구역 롯데시네마",
      currentUser: 3,
      maxUser: 5,
    },
    {
      id: "didfidiffdcm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      badgeVariant: "share" as const,
      badgeLabel: "나눔",
      timeLeft: "21시간 남음",
      location: "서울대입구역 롯데시네마",
    },

    // 뱃지 없는 케이스
    {
      id: "didididcffm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      timeLeft: "21시간 남음",
      location: "서울대입구역 롯데시네마",
    },

    // 시간 없는 케이스
    {
      id: "didaaididfffcm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      location: "서울대입구역 롯데시네마",
    },
  ];

  return (
    <HistorySection
      title="나눔 내역"
      tabValues={[
        { label: "진행 중", count: 1, value: "in-progress" },
        { label: "종료", count: 2, value: "completed" },
        ...(isMyAccount
          ? [{ label: "기한 만료", count: 6, value: "expired" }]
          : []),
      ]}
      tabItems={{
        "in-progress": data,
        completed: data,
        ...(isMyAccount ? { expired: data } : {}),
      }}
      type="share"
    />
  );
}
