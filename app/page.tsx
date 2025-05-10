import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<>
			<p className="title-lg">lg 제목을 입력하세요</p>
			<p className="title-md">md 제목을 입력하세요</p>
			<p className="title-sm">sm 제목을 입력하세요</p>

			<br />

			<p className="body-lg">lg 본문 내용입니다.</p>
			<p className="body-md">md 본문 내용입니다.</p>
			<p className="body-sm">sm 본문 내용입니다.</p>

			<br />

			<div className="flex flex-col gap-3">
				<Button variant="joinBtn">참여하기</Button>
				<Button variant="joinFullBtn">참여하기</Button>
				<Button variant="add" className="flex gap-0.5">
					<Plus />
					등록하기
				</Button>
			</div>

			{Array.from({ length: 50 }, (_, idx) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<li key={idx}>item</li>
			))}
		</>
	);
}
