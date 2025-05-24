"use client";

import { useCallback } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useMapFilterStore } from "@/stores/useMapFilterStore";
import { ListCard } from "@/components/common/ListCard";
import { LoadingLottie } from "./LoadingLottie";
import { format } from "date-fns";

interface MapListProps {
  selectedId: number | null;
}

interface ShareItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  location: string;
  timeLeftInHours: number;
  type: "share";
}

interface GroupBuyItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  location: string;
  meetingDate: string;
  type: "groupbuy";
  currentUser: number;
  maxUser: number;
}

type ListItem = ShareItem | GroupBuyItem;

export function MapList({ selectedId }: MapListProps) {
  const { filterType } = useMapFilterStore();

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      if (selectedId === null) return [];

      const params = new URLSearchParams({
        page: String(page),
        itemsPerPage: String(itemsPerPage),
        neighborhoodId: String(selectedId),
      });

      const fetchShare = async () => {
        const res = await fetch(`/api/map/share?${params.toString()}`);
        if (!res.ok) return [];
        const data = await res.json();
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return data.shares.map((item: any) => ({
          id: item.id,
          src: item.thumbnailUrl || "",
          alt: item.title,
          title: item.title,
          location: item.locationNote,
          timeLeftInHours: item.timeLeftInHours,
          type: "share",
        }));
      };

      const fetchGroupBuy = async () => {
        const res = await fetch(`/api/map/groupbuy?${params.toString()}`);
        if (!res.ok) return [];
        const data = await res.json();
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        return data.groupbuy.map((item: any) => ({
          id: item.id,
          src: item.thumbnailUrl || "",
          alt: item.title,
          title: item.title,
          location: item.locationNote,
          meetingDate: item.meetingDate,
          type: "groupbuy",
          currentUser: item.currentUser,
          maxUser: item.maxUser,
        }));
      };

      try {
        if (filterType === "share") {
          return await fetchShare();
        }
        if (filterType === "groupbuy") {
          return await fetchGroupBuy();
        }
        // all
        const [shareItems, groupBuyItems] = await Promise.all([
          fetchShare(),
          fetchGroupBuy(),
        ]);
        return [...shareItems, ...groupBuyItems];
      } catch (error) {
        console.error("API 호출 에러", error);
        return [];
      }
    },
    [filterType, selectedId],
  );

  const { items, loading, ref } = useInfiniteScroll<ListItem>({
    fetcher,
    itemsPerPage: 20,
    delay: 2000,
    deps: [filterType, selectedId],
  });

  return (
    <div className="max-h-[55vh] min-h-[55vh] overflow-y-auto px-4 py-2">
      {items.map((item, i) => (
        <ListCard
          key={`${item.id} - ${i}`}
          thumbnailSrc={
            item.src ||
            "/assets/images/example/default-group-buys-thumbnail.png"
          }
          thumbnailAlt={item.alt}
          title={item.title}
          location={item.location}
          timeLeft={
            item.type === "share"
              ? String(item.timeLeftInHours)
              : format(
                  new Date((item as GroupBuyItem).meetingDate),
                  "yyyy-MM-dd",
                )
          }
          type={item.type}
          currentUser={(item as GroupBuyItem).currentUser}
          maxUser={(item as GroupBuyItem).maxUser}
          id={""}
        />
      ))}
      {loading && <LoadingLottie />}
      <div ref={ref} className="h-4/5" />
    </div>
  );
}
