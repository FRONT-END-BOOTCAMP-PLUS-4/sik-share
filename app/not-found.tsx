import Link from "next/link";
import NotFoundLottie from "@/components/lotties/NotFoundLottie";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <NotFoundLottie />
      <p className="mt-2 text-base text-gray-600">
        아직 준비되지 않은 식재료에요. <br />
        올바른 주소인지 확인해주세요 😅
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
