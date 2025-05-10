import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
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
				<Button variant="add" className="flex gap-0.5">
					<Plus />
					등록하기
				</Button>
			</div>

			<h3>Badge</h3>
			<Badge variant="warning">마감 임박</Badge>
			<Badge variant="isDday">D-3</Badge>
			<Badge variant="done">나눔 완료</Badge>
			<Badge variant="location">관악 청년청</Badge>
			<Badge variant="share">나눔</Badge>
			<Badge variant="cart">같이 장보기</Badge>
		</>
	);
}
