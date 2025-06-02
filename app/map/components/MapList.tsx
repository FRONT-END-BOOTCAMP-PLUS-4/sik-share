"use client";

import { useRef, useCallback } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useMapFilterStore } from "@/stores/useMapFilterStore";
import { ListCard } from "@/components/common/ListCard";
import { LoadingFoodLottie } from "@/components/lotties/LoadingFoodLottie";
import { format } from "date-fns";
import Link from "next/link";

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

  const cacheRef = useRef<Map<string, ListItem[]>>(new Map());

  const fetcher = useCallback(
    async (page: number, itemsPerPage: number) => {
      if (selectedId === null) return [];

      const params = new URLSearchParams({
        page: String(page),
        itemsPerPage: String(itemsPerPage),
        neighborhoodId: String(selectedId),
      });

      const getCacheKey = (type: string) =>
        `${type}:${selectedId}:${page}:${itemsPerPage}`;

      const fetchShare = async () => {
        const cacheKey = getCacheKey("share");
        if (cacheRef.current.has(cacheKey)) {
          return cacheRef.current.get(cacheKey) as ShareItem[];
        }
        const res = await fetch(`/api/map/share?${params.toString()}`);
        if (!res.ok) return [];
        const data = await res.json();
        const mapped = data.shares.map(
          (item: {
            id: number;
            thumbnailUrl?: string;
            title: string;
            locationNote: string;
            timeLeftInHours: number;
          }) => ({
            id: item.id,
            src: item.thumbnailUrl || "",
            alt: item.title,
            title: item.title,
            location: item.locationNote,
            timeLeftInHours: item.timeLeftInHours,
            type: "share",
          }),
        );
        cacheRef.current.set(cacheKey, mapped);
        return mapped;
      };

      const fetchGroupBuy = async () => {
        const cacheKey = getCacheKey("groupbuy");
        if (cacheRef.current.has(cacheKey)) {
          return cacheRef.current.get(cacheKey) as GroupBuyItem[];
        }
        const res = await fetch(`/api/map/group-buy?${params.toString()}`);
        if (!res.ok) return [];
        const data = await res.json();
        const mapped = data.groupbuy.map(
          (item: {
            id: number;
            thumbnailUrl?: string;
            title: string;
            locationNote: string;
            meetingDate: string;
            currentUser: number;
            maxUser: number;
          }) => ({
            id: item.id,
            src: item.thumbnailUrl || "",
            alt: item.title,
            title: item.title,
            location: item.locationNote,
            meetingDate: item.meetingDate,
            type: "groupbuy",
            currentUser: item.currentUser,
            maxUser: item.maxUser,
          }),
        );
        cacheRef.current.set(cacheKey, mapped);
        return mapped;
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
    <div className="max-h-[55vh] min-h-[55vh] overflow-y-auto border-t-1">
      {items.map((item, i) => (
        <Link
          href={`/${item.type === "groupbuy" ? "group-buy" : "share"}/${item.id}`}
          key={`${item.id} - ${i}`}
        >
          <ListCard
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
        </Link>
      ))}
      {loading && <LoadingFoodLottie />}
      <div ref={ref} className="h-4/5" />
    </div>
  );
}
