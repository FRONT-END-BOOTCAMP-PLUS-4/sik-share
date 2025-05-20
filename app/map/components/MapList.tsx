import { useEffect } from "react";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";
import { useInView } from "react-intersection-observer";
import Loading from "@/components/common/Loading";

interface MapListProps {
  selectedId: number | null;
}

export function MapList({ selectedId }: MapListProps) {
  const fetcher = async (page: number) => {
    if (selectedId === null) return [];
    await new Promise((r) => setTimeout(r, 1000));

    const maxItems = 100;
    const itemsPerPage = 20;
    const start = page * itemsPerPage;

    if (start >= maxItems) return [];

    return Array.from(
      { length: Math.min(itemsPerPage, maxItems - start) },
      (_, i) => `ID ${selectedId}: 항목 ${start + i + 1}`,
    );
  };

  const { items, loading, hasMore, loadMore, reset } = useInfiniteScroll({
    fetcher,
    maxItems: 100,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    reset();
  }, [selectedId]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  return (
    <div className="min-h-[50vh] max-h-[50vh] overflow-y-auto border-t border-gray-200 px-4 py-2 flex-1">
      {items.map((item, index) => (
        <div
          key={item}
          className="py-3 border-b border-gray-100 text-sm text-gray-700"
        >
          {item}
        </div>
      ))}
      {loading && <Loading />}
      <div ref={ref} className="h-1" /> {/* 관찰 대상 */}
    </div>
  );
}
