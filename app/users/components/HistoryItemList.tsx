import { LoadingLottie } from "@/app/map/components/LoadingLottie";
import {
  GroupBuyListCard,
  type GroupBuyListCardProps,
} from "@/app/users/components/GroupBuyListCard";
import {
  ShareListCard,
  type ShareListCardProps,
} from "@/app/users/components/ShareListCard";

interface HistoryItemListProps {
  items: GroupBuyListCardProps[] | ShareListCardProps[];
  type: "share" | "groupbuy";
  refTarget: (node: HTMLElement | null) => void;
  loading?: boolean;
  hasMore?: boolean;
}

export function HistoryItemList({
  items,
  type,
  refTarget,
  loading,
  hasMore,
}: HistoryItemListProps) {
  console.log("HistoryItemList loaded", items);
  return (
    <>
      {items.length === 0 && !loading && (
        <p className="pt-8 text-center text-gray-400">
          {type === "share" ? "나눔" : "같이 장보기"} 내역이 없어요.
        </p>
      )}
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {type === "share" ? (
              <ShareListCard {...(item as ShareListCardProps)} />
            ) : (
              <GroupBuyListCard {...(item as GroupBuyListCardProps)} />
            )}
          </li>
        ))}
      </ul>
      <div ref={refTarget} className="h-4/5" />
      {loading && <LoadingLottie />}
      {items.length !== 0 && !hasMore && (
        <p className="pt-8 text-center text-gray-400">
          모든 항목을 불러왔어요.
        </p>
      )}
    </>
  );
}
