import { LoadingLottie } from "@/app/map/components/LoadingLottie";
import { ListCard, type ListCardProps } from "@/components/common/ListCard";
import {
  ShareListCard,
  type ShareListCardProps,
} from "@/components/common/ShareListCard";

interface HistoryItemListProps {
  items: ListCardProps[] | ShareListCardProps[];
  type: "share" | "group";
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
              <ListCard {...(item as ListCardProps)} />
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
