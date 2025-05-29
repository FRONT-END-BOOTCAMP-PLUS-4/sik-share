import Link from "next/link";

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold">403</h1>
      <p className="mt-4 text-xl font-semibold">접근이 제한되었습니다</p>
      <p className="mt-2 text-base text-gray-600">
        이 페이지에 접근할 수 있는 권한이 없습니다.
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
