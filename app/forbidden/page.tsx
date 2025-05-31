import ForbiddenLottie from "@/components/lotties/Forbidden";
import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <ForbiddenLottie />
      <p className="mt-2 text-base text-gray-600">
        식재료에 접근할 수 있는 권한이 없어요 😅
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-[var(--color-primary)] underline"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
