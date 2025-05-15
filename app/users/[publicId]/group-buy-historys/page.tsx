import { HistorySection } from "../../components/HistorySection";

export default function GroupBuyHistory() {
  const isMyAccount = true;
  const data = [
    {
      id: "diddididcsfdm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "토요일 이마트 갈 사람",
      timeLeft: "2025-05-18",
      location: "서울대입구역 롯데시네마",
      currentUser: 3,
      maxUser: 5,
    },
    // 시간 없는 케이스
    {
      id: "didaaididfffcm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      timeLeft: "2025-05-23",
      title: "감자 같이 사러 가실 분",
      location: "낙성대역 아트박스 앞",
      currentUser: 3,
      maxUser: 5,
    },
  ];

  return (
    <HistorySection
      title="같이 장보기 내역"
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
      type="group"
    />
  );
}
