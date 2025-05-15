import { HistorySection } from "../../components/HistorySection";

export default function ParticipationsHistory() {
  const isMyAccount = true;
  const data = [
    {
      id: "diddididcsfdm",
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "토마토 가져가실 분",
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
  const dataGroup = [
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
      title="나의 참여 내역"
      tabValues={[
        { label: "나눔", count: 2, value: "share" },
        { label: "같이 장보기", count: 2, value: "group" },
      ]}
      tabItems={{
        share: data,
        group: dataGroup,
      }}
      type="participations"
    />
  );
}
