import { useRouter } from "next/navigation";
import { LoadingFoodLottie } from "@/components/lotties/LoadingFoodLottie";
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
  type: "share" | "group-buy";
  refTarget: (node: HTMLElement | null) => void;
  loading?: boolean;
  hasMore?: boolean;
  isEdit?: boolean;
  onDeleteItem?: (id: number) => void;
}

export function HistoryItemList({
  items,
  type,
  refTarget,
  loading,
  hasMore,
  isEdit,
  onDeleteItem,
}: HistoryItemListProps) {
  const router = useRouter();

  const handleClick = (id: number) => {
    const path = `/${type}/${id}`;
    router.push(path);
  };

  return (
    <>
      {items.length === 0 && !loading && (
        <p className="pt-8 text-center text-gray-400">
          {type === "share" ? "나눔" : "같이 장보기"} 내역이 없어요.
        </p>
      )}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role="button"
              className="cursor-pointer"
              tabIndex={0}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(item.id);
                }
              }}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              {type === "share" ? (
                <ShareListCard
                  {...(item as ShareListCardProps)}
                  isEdit={isEdit}
                  onDelete={onDeleteItem}
                />
              ) : (
                <GroupBuyListCard
                  {...(item as GroupBuyListCardProps)}
                  isEdit={isEdit}
                  onDelete={onDeleteItem}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <div ref={refTarget} className="h-4/5" />
      {loading && <LoadingFoodLottie />}
      {items.length !== 0 && !hasMore && (
        <p className="pt-8 text-center text-gray-400">
          모든 항목을 불러왔어요.
        </p>
      )}
    </>
  );
}
