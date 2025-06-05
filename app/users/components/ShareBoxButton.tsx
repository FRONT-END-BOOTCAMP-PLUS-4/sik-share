import { Apple, PiggyBank } from "lucide-react";
import Link from "next/link";

interface ShareBoxButtonProps {
  publicId: string;
}

export default function ShareBoxButton({ publicId }: ShareBoxButtonProps) {
  return (
    <Link
      className="badge-bold cursor-pointer flex items-center gap-1 py-1 px-2 rounded-sm hover:bg-amber-50/50"
      href={`/share-box/${publicId}`}
    >
      <Apple size={16} />
      나눔함 구경가기
    </Link>
  );
}
