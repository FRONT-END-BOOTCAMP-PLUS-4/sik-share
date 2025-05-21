import { HistorySection } from "../../components/HistorySection";

export default function SharesHistory() {
  const isMyAccount = true;
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
