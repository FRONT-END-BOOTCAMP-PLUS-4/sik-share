import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronRight, Users } from "lucide-react";
import Link from "next/link";

export interface shortReview {
  id: number;
  content: string;
  count: number;
}

interface usersNavProps {
  publicId: string;
  isMyAccount: boolean;
  shortReviews?: shortReview[];
}

export default function UsersNav({
  publicId,
  isMyAccount,
  shortReviews,
}: usersNavProps) {
  const usersLinks = [
    { label: "나눔 내역", path: "share-histories" },
    { label: "같이 장보기 내역", path: "group-buy-histories" },
    ...(isMyAccount
      ? [{ label: "나의 참여 내역", path: "participations" }]
      : []),
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
        {isReview && shortReviews && shortReviews.length > 0 && (
          <ul className="px-4 flex flex-col gap-1.5 pt-1">
            {shortReviews.map((review) => (
              <li key={review.id} className="flex gap-1 items-center">
                <div className="w-[130px] body-sm">{review.content}</div>
                <Badge variant="review">
                  <Users size={12} />
                  {review.count}
                </Badge>
              </li>
            ))}
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
