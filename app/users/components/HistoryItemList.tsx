import { ListCard, type ListCardProps } from "@/components/common/ListCard";
import {
  ShareListCard,
  type ShareListCardProps,
} from "@/components/common/ShareListCard";

interface HistoryItemListProps {
  items: ListCardProps[] | ShareListCardProps[];
  type: "share" | "group";
}

export function HistoryItemList({ items, type }: HistoryItemListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {type === "share" ? (
            <ShareListCard {...(item as ShareListCardProps)} />
          ) : (
            <ListCard {...(item as ListCardProps)} />
          )}
        </li>
      ))}
    </ul>
  );
}
