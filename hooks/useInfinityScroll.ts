import { useCallback, useEffect, useState } from "react";

interface UseInfiniteScrollProps<T> {
  fetcher: (page: number) => Promise<T[]>;
  maxItems?: number;
}

export function useInfiniteScroll<T>({
  fetcher,
  maxItems = 100,
}: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newItems = await fetcher(page);
      setItems((prev) => [
        ...prev,
        ...newItems.slice(0, maxItems - prev.length),
      ]);
      setPage((prev) => prev + 1);
      if (
        newItems.length === 0 ||
        items.length + newItems.length >= maxItems
      ) {
        setHasMore(false);
      }
    } finally {
      setLoading(false);
    }
  }, [fetcher, loading, hasMore, page, items.length, maxItems]);

  const reset = () => {
    setItems([]);
    setPage(0);
    setHasMore(true);
  };

  return { items, loading, hasMore, loadMore, reset };
}
