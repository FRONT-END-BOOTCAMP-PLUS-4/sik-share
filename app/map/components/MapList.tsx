"use client";

import { useCallback } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useMapFilterStore } from "@/stores/useMapFilterStore";
import { LoadingLottie } from "./LoadingLottie";
import { ListCard } from "@/components/common/ListCard";

interface MapListProps {
  selectedId: number | null;
  filterType: string;
}

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

      try {
        const res = await fetch(`/api/map/share?${params.toString()}`);

        if (!res.ok) {
          console.error("API 호출 실패", res.statusText);
          return [];
        }

        const data = await res.json();

        return data.shares.map((item: any) => ({
          id: item.id,
          src: item.thumbnailUrl || "",
          alt: item.title,
          title: item.title,
          location: item.locationNote,
          timeLeftInHours: item.timeLeftInHours,
          type: "share",
        }));
      } catch (error) {
        console.error("API 호출 중 에러", error);
        return [];
      }
    },
    [selectedId],
  );

  const { items, loading, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 2000,
    deps: [filterType, selectedId],
  });

  return (
    <div className="max-h-[55vh] min-h-[55vh] overflow-y-auto px-4 py-2">
      {items.map((item) => (
        <ListCard
          key={item.id}
          thumbnailSrc={item.src}
          thumbnailAlt={item.alt}
          title={item.title}
          location={item.location}
          timeLeft={String(item.timeLeftInHours)}
          type={item.type}
          currentUser={item.currentUser}
          maxUser={item.maxUser}
        />
      ))}
      {loading && <LoadingLottie />}
      <div ref={ref} className="h-4/5" />
    </div>
  );
}
