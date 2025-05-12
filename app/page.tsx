import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import AddButton from "@/components/common/AddButton";
import { Input } from "@/components/ui/input";
import InputCalendar from "@/components/common/InputCalendar";
import ListCard from "@/components/common/ListCard";

export default function Home() {
  const data = [
    {
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
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      badgeVariant: "share" as const,
      badgeLabel: "나눔",
      timeLeft: "21시간 남음",
      location: "서울대입구역 롯데시네마",
    },

    // 뱃지 없는 케이스
    {
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      timeLeft: "21시간 남음",
      location: "서울대입구역 롯데시네마",
    },

    // 시간 없는 케이스
    {
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      location: "서울대입구역 롯데시네마",
    },
  ];

  return (
    <>
      <h3>Typography</h3>
      <p className="title-lg">lg 제목을 입력하세요</p>
      <p className="title-md">md 제목을 입력하세요</p>
      <p className="title-sm">sm 제목을 입력하세요</p>

      <br />

      <p className="body-lg">lg 본문 내용입니다.</p>
      <p className="body-md">md 본문 내용입니다.</p>
      <p className="body-sm">sm 본문 내용입니다.</p>

      <br />

      <h3>Button</h3>
      <div className="flex flex-col gap-3 mb-5">
        <Button variant="joinBtn">참여하기</Button>
        <Button variant="joinFullBtn">참여하기</Button>
        <AddButton />
      </div>

      <h3>Badge</h3>
      <Badge variant="warning">마감 임박</Badge>
      <Badge variant="isDday">D-3</Badge>
      <Badge variant="done">나눔 완료</Badge>
      <Badge variant="location">관악 청년청</Badge>
      <Badge variant="share">나눔</Badge>
      <Badge variant="cart">같이 장보기</Badge>
      <div className="bg-[var(--light-green-300)] py-2 mt-2">
        <Badge variant="locate">낙성대동</Badge>
      </div>

      <br />
      <br />

      <h3 className="p-3">Select</h3>
      <InputCalendar />

      <br />
      <br />

      <h3>Input</h3>
      <Input placeholder="ex. 양파 나눔해요" />

      <br />
      <br />

      <h3>List</h3>
      {data.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <ListCard key={i} {...item} />
      ))}
    </>
  );
}
