import { useEffect } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import Loading from "@/components/common/Loading";

interface MapListProps {
  selectedId: number | null;
}

export function MapList({ selectedId }: MapListProps) {
  const fetcher = async (page: number) => {
    if (selectedId === null) return [];
    await new Promise((r) => setTimeout(r, 1500));

    const maxItems = 100;
    const itemsPerPage = 20;
    const start = page * itemsPerPage;

    if (start >= maxItems) return [];

    return Array.from(
      { length: Math.min(itemsPerPage, maxItems - start) },
      (_, i) => `ID ${selectedId}: 항목 ${start + i + 1}`,
    );
  };

  const { items, loading, containerRef, reset } = useInfiniteScroll({
    fetcher,
    itemsPerPage: 20,
    maxItems: 100,
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    reset();
  }, [selectedId]);

  return (
    <div
      ref={containerRef}
      className="min-h-[60vh] max-h-[60vh] overflow-y-auto border-t border-gray-200 px-4 py-2 flex-1"
    >
      {items.map((item, index) => (
        <div
          key={`${item}-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
          className="py-3 border-b border-gray-100 text-sm text-gray-700"
        >
          {item}
        </div>
      ))}
      {loading && <Loading />}
    </div>
  );
}
