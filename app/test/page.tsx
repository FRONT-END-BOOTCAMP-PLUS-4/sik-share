"use client";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import InputCalendar from "@/components/common/InputCalendar";
import { ListCard } from "@/components/common/ListCard";
import FormInput from "@/components/common/FormInput";
import DropdownButton, {
  type DropdownOption,
} from "@/components/common/DropdownButton";

export default function Home() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
    {
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      timeLeft: "21시간 남음",
      location: "서울대입구역 롯데시네마",
    },
    {
      thumbnailSrc: "/assets/images/example/thumbnail.png",
      title: "양파 나눔해요요...",
      location: "서울대입구역 롯데시네마",
    },
  ];

  const options: DropdownOption[] = [
    {
      id: "group-buy",
      label: "공동 장보기",
      onClick: () => {},
    },
    {
      id: "share",
      label: "나눔",
      onClick: () => {},
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
        <DropdownButton options={options} type="register" align="top" />
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <p>form 양식은 따로 만드세요</p>
          <FormInput
            name="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
          />
          <button type="submit">임시 제출 버튼</button>
        </form>
      </Form>

      <br />
      <br />

      <h3>List</h3>
      {data.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <ListCard key={i} id="i" {...item} />
      ))}
    </>
  );
}
