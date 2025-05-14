import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight, Users } from "lucide-react";
import Link from "next/link";

interface usersNavProps {
  publicId: string;
  mannerReviews?: []; // 임시
}

export default function UsersNav({ publicId, mannerReviews }: usersNavProps) {
  const usersLinks = [
    { label: "나눔 내역", path: "shares-history" },
    { label: "같이 장보기 내역", path: "group-buys-history" },
    { label: "나의 참여 내역", path: "participations" },
    { label: "후기", path: "reviews" },
  ];

  const navItems = usersLinks.map(({ label, path }) => {
    const isReview = label === "후기";

    return (
      <li key={path}>
        <Link
          className={cn(
            "flex justify-between w-full px-4 py-3 hover:bg-zinc-50 hover:border-b-transparents",
            !isReview && "border-b-1 border-zinc-200",
          )}
          href={`/users/${publicId}/${path}`}
        >
          {label}
          <ChevronRight />
        </Link>
        {isReview && (
          <ul className="px-4 flex flex-col gap-1.5">
            <li className="flex gap-1 items-center">
              <div className="w-[130px] body-sm">나눔 재료가 신선해요</div>
              <Badge variant="review">
                <Users size={10} />1
              </Badge>
            </li>
          </ul>
        )}
      </li>
    );
  });

  return (
    <div className="max-h-[calc(100%-74px)] overflow-auto">
      <ul className="h-full pb-6">{navItems}</ul>
    </div>
  );
}
