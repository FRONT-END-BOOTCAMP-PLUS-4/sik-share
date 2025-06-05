"use client";

import { useCallback } from "react";
import SubHeader from "@/components/common/SubHeader";
import ReviewListItem, {
  type ReviewListItemProps,
} from "@/app/users/components/ReviewListItem";
import { useUserInfo } from "@/app/users/hooks/useUserInfo";
import { useTotalCounts } from "@/app/users/hooks/useTotalCounts";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { LoadingFoodLottie } from "@/components/lotties/LoadingFoodLottie";

export default function Reviews() {
  const { publicId } = useUserInfo();
  const { counts } = useTotalCounts({
    publicId,
    type: "review",
    tabType: "review",
  });

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      if (publicId === null) return [];
      const res = await fetch(
        `/api/users/reviews?publicId=${publicId}&page=${page}&itemsPerPage=${itemsPerPage}`,
      );
      const data = await res.json();

      return data.result as ReviewListItemProps[];
    },
    [publicId],
  );

  const { items, loading, hasMore, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 300,
    deps: [publicId],
  });

  return (
    <>
      <SubHeader titleText="후기" />
      <div className="pt-7 px-4">
        <div className="text-right body-sm text-zinc-600">
          총 받은 후기
          <span className="text-primary pl-1">{counts.review}</span>
        </div>
        {items.length === 0 && !loading && (
          <p className="pt-8 text-center text-gray-400">
            아직 받은 후기가 없어요.
          </p>
        )}
        <ul className="flex flex-col gap-4 pt-3">
          {items.map((item) => (
            <ReviewListItem key={item.id} {...(item as ReviewListItemProps)} />
          ))}
        </ul>
        <div ref={ref} className="h-4/5" />
        {loading && <LoadingFoodLottie />}
        {items.length !== 0 && !hasMore && (
          <p className="pt-8 text-center text-gray-400">
            모든 항목을 불러왔어요.
          </p>
        )}
      </div>
    </>
  );
}
