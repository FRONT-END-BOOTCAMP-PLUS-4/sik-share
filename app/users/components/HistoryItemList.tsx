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
      <div ref={refTarget} className="h-4/5" />
      {loading && <p>로딩중이야요</p>}
      {!hasMore && <p>마지막 항목이에요</p>}
    </ul>
  );
}
