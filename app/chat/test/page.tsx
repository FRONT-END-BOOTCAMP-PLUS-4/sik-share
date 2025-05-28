import Link from "next/link";

export default function Test() {
  return (
    <div className="flex flex-col justify-center items-center w-[188px] h-[105px] gap-2.5 py-8">
      <p className="caption text-zinc-500">
        나눔이 완료되었다면, 후기 작성 어때요?
      </p>
      <Link href="/chat" className="badge-bold text-secondary underline">
        후기 작성 바로가기
      </Link>
    </div>
  );
}
