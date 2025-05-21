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

      return Array.from(
        { length: itemsPerPage },
        (_, i) =>
          `ID ${selectedId} - ${filterType} 항목 ${page * itemsPerPage + i + 1}`,
      );
    },
    [selectedId, filterType],
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
          key={item}
          thumbnailSrc={item.src}
          thumbnailAlt={item.alt}
          title={"제목입니당"}
          location="관악청년청"
        />
      ))}
      {loading && <LoadingLottie />}
      <div ref={ref} className="h-4/5" />
    </div>
  );
}
