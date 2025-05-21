"use client";

import { useCallback, useEffect } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import Loading from "@/components/common/Loading";
import { useMapFilterStore } from "@/stores/useMapFilterStore";

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

  const { items, loading, hasMore, ref } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 2000,
    deps: [filterType, selectedId],
  });

  return (
    <div className="max-h-[55vh] min-h-[55vh] overflow-y-auto px-4 py-2">
      {items.map((item) => (
        <div key={item} className="py-2 border-b text-sm text-gray-800">
          {item}
        </div>
      ))}
      {loading && <Loading />}
      <div ref={ref} className="h-4/5" />
    </div>
  );
}
