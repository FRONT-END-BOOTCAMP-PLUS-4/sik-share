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

			<Button>Click me!</Button>
		</>
	);
}
