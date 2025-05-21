"use client";

import { useEffect } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import Loading from "@/components/common/Loading";

export function MapList({ selectedId }: { selectedId: number | null }) {
  const fetcher = async (page: number, itemsPerPage: number) => {
    if (selectedId === null) return [];

    return Array.from(
      { length: itemsPerPage },
      (_, i) => `ID ${selectedId} - 항목 ${page * itemsPerPage + i + 1}`,
    );
  };

  const { items, loading, ref, reset } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    delay: 2000,
  });

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="max-h-[60vh] min-h-[60vh] overflow-y-auto px-4 py-2">
      {items.map((item, _) => (
        <div key={item} className="py-2 border-b text-sm text-gray-800">
          {item}
        </div>
      ))}
      {loading && <Loading />}
      <div ref={ref} className="h-1" />
    </div>
  );
}
